// API endpoint để lấy và cập nhật trạng thái
// Sử dụng JSONBin.io để lưu trữ (miễn phí)

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const JSONBIN_API_KEY = process.env.JSONBIN_API_KEY || '';
const JSONBIN_BIN_ID = process.env.JSONBIN_BIN_ID || '';

// Nếu chưa có JSONBin, dùng in-memory storage (sẽ mất khi restart)
let memoryStorage = {
  status: 'Chưa có trạng thái',
  lastUpdated: new Date().toISOString(),
  updatedBy: 'System'
};

// Hàm lấy dữ liệu từ JSONBin
async function getFromJSONBin() {
  if (!JSONBIN_API_KEY || !JSONBIN_BIN_ID) {
    return memoryStorage;
  }

  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
      headers: {
        'X-Master-Key': JSONBIN_API_KEY
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.record || memoryStorage;
    }
  } catch (error) {
    console.error('Lỗi lấy dữ liệu từ JSONBin:', error);
  }
  
  return memoryStorage;
}

// Hàm lưu dữ liệu vào JSONBin
async function saveToJSONBin(data) {
  if (!JSONBIN_API_KEY || !JSONBIN_BIN_ID) {
    memoryStorage = data;
    return true;
  }

  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY
      },
      body: JSON.stringify(data)
    });
    
    return response.ok;
  } catch (error) {
    console.error('Lỗi lưu dữ liệu vào JSONBin:', error);
    memoryStorage = data; // Fallback to memory
    return true;
  }
}

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET: Lấy trạng thái
  if (req.method === 'GET') {
    try {
      const data = await getFromJSONBin();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Lỗi đọc trạng thái' });
    }
  }

  // POST: Cập nhật trạng thái (chỉ admin)
  if (req.method === 'POST') {
    const password = req.headers['x-admin-password'];
    
    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Không có quyền truy cập' });
    }

    const { status } = req.body;
    
    if (!status) {
      return res.status(400).json({ error: 'Trạng thái không được để trống' });
    }

    try {
      const statusData = {
        status: status,
        lastUpdated: new Date().toISOString(),
        updatedBy: 'Admin'
      };

      await saveToJSONBin(statusData);
      return res.status(200).json({ success: true, data: statusData });
    } catch (error) {
      return res.status(500).json({ error: 'Lỗi cập nhật trạng thái' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
