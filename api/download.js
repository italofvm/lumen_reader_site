export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    res.end('Method Not Allowed');
    return;
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ error: 'Missing GITHUB_TOKEN env var' }));
    return;
  }

  const owner = process.env.GITHUB_OWNER || 'italofvm';
  const repo = process.env.GITHUB_REPO || 'lumen-reader';

  const url = new URL(req.url, `http://${req.headers.host}`);
  const tag = url.searchParams.get('tag');
  const assetName = url.searchParams.get('asset');

  if (!tag || !assetName) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ error: 'Missing required query params: tag, asset' }));
    return;
  }

  const releaseRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/tags/${encodeURIComponent(tag)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  if (!releaseRes.ok) {
    const text = await releaseRes.text();
    res.statusCode = 502;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(
      JSON.stringify({
        error: 'Failed to fetch release from GitHub',
        owner,
        repo,
        tag,
        asset: assetName,
        status: releaseRes.status,
        details: text
      })
    );
    return;
  }

  const release = await releaseRes.json();
  const assets = Array.isArray(release.assets) ? release.assets : [];
  const asset = assets.find((a) => a && a.name === assetName);

  if (!asset) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ error: 'Asset not found in release', tag, asset: assetName }));
    return;
  }

  const downloadRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/assets/${asset.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/octet-stream',
      'X-GitHub-Api-Version': '2022-11-28'
    },
    redirect: 'follow'
  });

  if (!downloadRes.ok) {
    const text = await downloadRes.text();
    res.statusCode = 502;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(
      JSON.stringify({
        error: 'Failed to download asset from GitHub',
        status: downloadRes.status,
        details: text
      })
    );
    return;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/vnd.android.package-archive');
  res.setHeader('Content-Disposition', `attachment; filename="${assetName}"`);
  res.setHeader('Cache-Control', 'no-store');

  const arrayBuffer = await downloadRes.arrayBuffer();
  res.end(Buffer.from(arrayBuffer));
}
