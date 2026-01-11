# 🔧 Hướng Dẫn Setup Backend API

## Vấn Đề

Code hiện tại dùng **in-memory storage**, nghĩa là dữ liệu sẽ **mất khi Vercel restart function**. Để lưu trữ vĩnh viễn, bạn cần setup JSONBin.io (miễn phí).

## Giải Pháp 1: Dùng JSONBin.io (Khuyên Dùng - Miễn Phí)

### Bước 1: Tạo Tài Khoản JSONBin.io

1. Truy cập: https://jsonbin.io
2. Đăng ký tài khoản miễn phí
3. Vào **Dashboard** → **Create Bin**
4. Tạo một bin mới với nội dung:
```json
{
  "status": "Chưa có trạng thái",
  "lastUpdated": "2024-01-01T00:00:00.000Z",
  "updatedBy": "System"
}
```
5. Copy **Bin ID** (ví dụ: `65a1b2c3d4e5f6g7h8i9j0k`)
6. Vào **Settings** → Copy **Master Key** (API Key)

### Bước 2: Thêm Environment Variables vào Vercel

1. Vào **Vercel Dashboard** → Chọn project
2. Vào **Settings** → **Environment Variables**
3. Thêm 3 biến sau:

| Name | Value | Environment |
|------|-------|-------------|
| `ADMIN_PASSWORD` | `admin123` (hoặc mật khẩu bạn muốn) | Production, Preview, Development |
| `JSONBIN_API_KEY` | Master Key từ JSONBin.io | Production, Preview, Development |
| `JSONBIN_BIN_ID` | Bin ID từ JSONBin.io | Production, Preview, Development |

4. Click **Save**
5. **Redeploy** project (Vercel sẽ tự động deploy lại)

### Bước 3: Kiểm Tra

- Mở website và thử cập nhật trạng thái
- Mở trên thiết bị khác → Sẽ thấy trạng thái đã cập nhật!

---

## Giải Pháp 2: Không Setup (Chỉ Test)

Nếu không setup JSONBin, code vẫn hoạt động nhưng:
- ⚠️ Dữ liệu có thể mất khi Vercel restart function
- ✅ Vẫn hoạt động trong cùng một session
- ✅ Phù hợp để test nhanh

---

## Troubleshooting

### Lỗi: "Cannot find module 'fetch'"
- Vercel Functions đã hỗ trợ fetch từ Node.js 18+
- Nếu gặp lỗi, có thể cần thêm vào `package.json`:
```json
{
  "engines": {
    "node": ">=18"
  }
}
```

### Dữ liệu không đồng bộ giữa các thiết bị
- Đảm bảo đã setup JSONBin.io và thêm environment variables
- Kiểm tra lại Bin ID và API Key trong Vercel

### API trả về lỗi 500
- Kiểm tra console logs trong Vercel Dashboard
- Đảm bảo environment variables đã được set đúng
