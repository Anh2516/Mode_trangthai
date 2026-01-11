// API endpoint để kiểm tra mật khẩu admin

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { password } = req.body;
    const isAdmin = password === ADMIN_PASSWORD;
    
    return res.status(200).json({ isAdmin });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
