// Using native fetch to avoid dependencies

export default async function handler(req, res) {
  const { GITHUB_TOKEN, REPO_OWNER, REPO_NAME } = process.env;

  if (req.method === 'GET') {
    try {
      // In a real Vercel environment, we just want to read the local file if it exists, 
      // but on Vercel it's usually better to fetch from the raw github URL or just the local public folder.
      // Since it's in public/, it's served statically.
      return res.status(200).json({ message: "Use /content.json for GET" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'POST') {
    if (!GITHUB_TOKEN) {
      return res.status(500).json({ error: "GITHUB_TOKEN is not configured in Vercel Environment Variables." });
    }

    const content = req.body;
    const path = 'public/content.json';
    const owner = REPO_OWNER || 'pratishprince369';
    const repo = REPO_NAME || 'TanaVinto';

    try {
      // 1. Get the current file SHA (required for updating)
      const getFileRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      });

      let sha;
      if (getFileRes.ok) {
        const fileData = await getFileRes.json();
        sha = fileData.sha;
      }

      // 2. Update the file
      const updateRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
        method: 'PUT',
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Update content via Admin Panel',
          content: Buffer.from(JSON.stringify(content, null, 2)).toString('base64'),
          sha: sha, // Include SHA if file exists
        }),
      });

      if (!updateRes.ok) {
        const errorData = await updateRes.json();
        throw new Error(errorData.message || 'Failed to update GitHub');
      }

      return res.status(200).json({ message: "Content updated successfully on GitHub!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
