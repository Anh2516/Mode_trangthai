# ⚡ Setup Nhanh - 5 Phút

## 🎯 Mục Tiêu
Lưu trữ trạng thái dùng chung giữa tất cả thiết bị.

---

## 📝 Checklist

### ✅ Bước 1: JSONBin.io (2 phút)
- [ ] Vào https://jsonbin.io → Đăng ký/Đăng nhập
- [ ] Tạo Bin mới với nội dung:
```json
{
  "status": "Chưa có trạng thái",
  "lastUpdated": "2024-01-01T00:00:00.000Z",
  "updatedBy": "System"
}
```
- [ ] Copy **Bin ID** (ví dụ: `67890abcdef...`)
- [ ] Vào Settings → Copy **Master Key** (ví dụ: `$2b$10$...`)

### ✅ Bước 2: Vercel Environment Variables (2 phút)
- [ ] Vào https://vercel.com → Chọn project
- [ ] Settings → Environment Variables
- [ ] Thêm 3 biến:

| Name | Value | Environment |
|------|-------|-------------|
| `ADMIN_PASSWORD` | `admin123` | ✅ All |
| `JSONBIN_API_KEY` | Master Key từ JSONBin | ✅ All |
| `JSONBIN_BIN_ID` | Bin ID từ JSONBin | ✅ All |

### ✅ Bước 3: Redeploy (1 phút)
- [ ] Deployments → Click "Redeploy"
- [ ] Đợi deploy xong

### ✅ Bước 4: Test
- [ ] Mở website → Đăng nhập admin
- [ ] Cập nhật trạng thái
- [ ] Mở trên điện thoại → Thấy trạng thái đã cập nhật! ✅

---

## 🎉 Xong!

Xem hướng dẫn chi tiết trong file: `HUONG_DAN_SETUP_CHI_TIET.md`
