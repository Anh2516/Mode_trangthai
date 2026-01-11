# 🔧 Troubleshooting - API Không Hoạt Động

## ❌ Vấn Đề Hiện Tại

API trả về HTML thay vì JSON, lỗi: `Unexpected token '<', "<!DOCTYPE ... is not valid JSON"`

## 🔍 Nguyên Nhân Có Thể

1. **Vercel chưa deploy lại** với code mới
2. **Cache trình duyệt** đang giữ code cũ
3. **Vercel chưa nhận diện** API functions đúng cách

## ✅ Giải Pháp

### Bước 1: Kiểm Tra Vercel Deployment

1. Vào **Vercel Dashboard** → Chọn project `mode-trangthai`
2. Vào tab **"Deployments"**
3. Kiểm tra deployment mới nhất:
   - Status phải là **"Ready"** (màu xanh)
   - Nếu đang "Building" hoặc "Error" → Đợi hoặc xem lỗi

### Bước 2: Redeploy Thủ Công

1. Trong **Deployments**, tìm deployment mới nhất
2. Click vào **menu 3 chấm** (⋯) bên phải
3. Chọn **"Redeploy"**
4. Đợi 1-2 phút cho đến khi status là **"Ready"**

### Bước 3: Kiểm Tra Functions

1. Vào deployment mới nhất
2. Xem tab **"Functions"** hoặc **"Runtime"**
3. Kiểm tra xem có thấy:
   - `api/status.js`
   - `api/check-admin.js`
   
Nếu **KHÔNG thấy** → Vercel chưa nhận diện API functions

### Bước 4: Clear Cache & Test

1. **Clear cache trình duyệt**:
   - Nhấn `Ctrl + Shift + Delete` (Windows)
   - Chọn "Cached images and files"
   - Click "Clear data"
   
2. Hoặc **mở Incognito/Private window**:
   - `Ctrl + Shift + N` (Chrome)
   - `Ctrl + Shift + P` (Firefox)

3. Test lại website

### Bước 5: Kiểm Tra Logs

1. Vào **Vercel Dashboard** → **Deployments**
2. Chọn deployment mới nhất
3. Vào tab **"Logs"** hoặc **"Function Logs"**
4. Thử gọi API và xem có lỗi gì không

## 🆘 Nếu Vẫn Không Hoạt Động

### Kiểm Tra Cấu Trúc Thư Mục

Đảm bảo cấu trúc như sau:
```
.
├── api/
│   ├── status.js
│   └── check-admin.js
├── index.html
├── vercel.json
└── package.json
```

### Kiểm Tra API Functions

Đảm bảo các file trong `api/` có format:
```javascript
module.exports = async function handler(req, res) {
  // code here
}
```

### Thử Test API Trực Tiếp

Mở trình duyệt và thử:
- `https://mode-trangthai.vercel.app/api/status`
- Phải trả về JSON, không phải HTML

Nếu vẫn trả về HTML → Vercel chưa nhận diện API functions

## 💡 Giải Pháp Thay Thế

Nếu vẫn không hoạt động sau khi thử tất cả:

1. **Xóa project trên Vercel** và tạo lại
2. Hoặc **tạo project mới** và import lại từ GitHub
3. Đảm bảo khi import, Vercel nhận diện được `api/` folder

## 📞 Cần Giúp Đỡ?

Nếu vẫn gặp vấn đề:
1. Chụp screenshot **Function Logs** trong Vercel
2. Chụp screenshot **Deployments** page
3. Gửi cho tôi để kiểm tra
