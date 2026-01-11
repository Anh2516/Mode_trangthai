# 📚 Hướng Dẫn Setup JSONBin.io Chi Tiết

## 🎯 Mục Đích

Setup JSONBin.io để lưu trữ trạng thái dùng chung giữa tất cả thiết bị (máy tính, điện thoại, tablet...).

---

## 📋 BƯỚC 1: Tạo Tài Khoản JSONBin.io

### 1.1. Truy cập trang web
- Mở trình duyệt và vào: **https://jsonbin.io**
- Click nút **"Create Account"** hoặc **"Login"** (nếu đã có tài khoản)

### 1.2. Đăng ký tài khoản
- Điền thông tin:
  - **Email**: Email của bạn
  - **Password**: Mật khẩu (tối thiểu 8 ký tự)
- Click **"Create Account"**
- Kiểm tra email để xác nhận (nếu cần)

### 1.3. Đăng nhập
- Sau khi đăng ký, đăng nhập vào tài khoản
- Bạn sẽ thấy **Dashboard**

---

## 📦 BƯỚC 2: Tạo Bin (Nơi Lưu Trữ Dữ Liệu)

### 2.1. Tạo Bin mới
- Trong Dashboard, click nút **"Create Bin"** hoặc **"New Bin"**
- Hoặc vào: **https://jsonbin.io/app/bin/create**

### 2.2. Nhập dữ liệu mặc định
- Trong ô editor, nhập JSON sau:
```json
{
  "status": "Chưa có trạng thái",
  "lastUpdated": "2024-01-01T00:00:00.000Z",
  "updatedBy": "System"
}
```

### 2.3. Cấu hình Bin
- **Bin Name**: Đặt tên (ví dụ: "Trang Thai Web")
- **Private**: ✅ **BẬT** (quan trọng - để bảo mật)
- Click **"Create"** hoặc **"Save"**

### 2.4. Copy Bin ID
- Sau khi tạo xong, bạn sẽ thấy **Bin ID**
- **Bin ID** có dạng: `65a1b2c3d4e5f6g7h8i9j0k` (chuỗi ký tự dài)
- **Copy Bin ID này** và lưu lại (sẽ dùng ở bước sau)

**Ví dụ Bin ID**: `67890abcdef1234567890abc`

---

## 🔑 BƯỚC 3: Lấy Master Key (API Key)

### 3.1. Vào Settings
- Click vào **tên tài khoản** (góc trên bên phải)
- Chọn **"Settings"** hoặc **"Account Settings"**

### 3.2. Tìm Master Key
- Trong phần **"API Keys"** hoặc **"Access Keys"**
- Tìm **"Master Key"** hoặc **"X-Master-Key"**
- Click **"Show"** hoặc **"Reveal"** để hiện key
- **Copy Master Key này** và lưu lại (sẽ dùng ở bước sau)

**Ví dụ Master Key**: `$2b$10$abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUV`

⚠️ **Lưu ý**: Master Key chỉ hiện 1 lần, hãy copy ngay!

---

## ⚙️ BƯỚC 4: Thêm Environment Variables vào Vercel

### 4.1. Vào Vercel Dashboard
- Truy cập: **https://vercel.com**
- Đăng nhập (nếu chưa)
- Chọn **project** của bạn (Mode_trangthai)

### 4.2. Vào Settings
- Click tab **"Settings"** ở thanh menu trên
- Chọn **"Environment Variables"** ở menu bên trái

### 4.3. Thêm 3 Biến Môi Trường

Click nút **"Add New"** và thêm từng biến:

#### Biến 1: ADMIN_PASSWORD
- **Name**: `ADMIN_PASSWORD`
- **Value**: `admin123` (hoặc mật khẩu bạn muốn)
- **Environment**: ✅ Production, ✅ Preview, ✅ Development
- Click **"Save"**

#### Biến 2: JSONBIN_API_KEY
- **Name**: `JSONBIN_API_KEY`
- **Value**: Dán **Master Key** đã copy ở Bước 3
- **Environment**: ✅ Production, ✅ Preview, ✅ Development
- Click **"Save"**

#### Biến 3: JSONBIN_BIN_ID
- **Name**: `JSONBIN_BIN_ID`
- **Value**: Dán **Bin ID** đã copy ở Bước 2
- **Environment**: ✅ Production, ✅ Preview, ✅ Development
- Click **"Save"**

### 4.4. Kiểm tra lại
Bạn sẽ thấy 3 biến trong danh sách:
```
✅ ADMIN_PASSWORD
✅ JSONBIN_API_KEY  
✅ JSONBIN_BIN_ID
```

---

## 🚀 BƯỚC 5: Redeploy Project

### 5.1. Vào Deployments
- Click tab **"Deployments"** ở thanh menu trên
- Tìm deployment mới nhất
- Click vào **menu 3 chấm** (⋯) bên phải
- Chọn **"Redeploy"**

### 5.2. Hoặc Deploy lại từ GitHub
- Nếu đã kết nối GitHub, Vercel sẽ tự động deploy khi bạn push code
- Hoặc vào **"Deployments"** → Click **"Redeploy"**

### 5.3. Đợi deploy xong
- Đợi 1-2 phút để Vercel deploy lại
- Khi thấy status **"Ready"** → Xong!

---

## ✅ BƯỚC 6: Kiểm Tra

### 6.1. Mở website
- Mở link Vercel của bạn (ví dụ: `https://mode-trangthai.vercel.app`)
- Đăng nhập admin với mật khẩu: `admin123`

### 6.2. Cập nhật trạng thái
- Nhập trạng thái mới (ví dụ: "Đang làm việc")
- Click **"Lưu Trạng Thái"**
- Thấy thông báo **"Cập nhật trạng thái thành công!"**

### 6.3. Kiểm tra trên thiết bị khác
- Mở **điện thoại** hoặc **máy tính khác**
- Vào cùng link Vercel
- **Không cần đăng nhập** (ở chế độ khách)
- ✅ **Sẽ thấy trạng thái đã cập nhật!**

---

## 🎉 Hoàn Thành!

Bây giờ:
- ✅ Trạng thái được lưu trên JSONBin.io (cloud)
- ✅ Tất cả thiết bị đều thấy cùng một trạng thái
- ✅ Dữ liệu không bị mất khi Vercel restart
- ✅ Chỉ admin mới có thể cập nhật

---

## 🔧 Troubleshooting

### ❌ Lỗi: "Không thể tải trạng thái"
**Nguyên nhân**: Environment variables chưa được set đúng

**Giải pháp**:
1. Kiểm tra lại 3 biến trong Vercel Settings
2. Đảm bảo đã chọn đủ 3 môi trường (Production, Preview, Development)
3. Redeploy lại project

### ❌ Lỗi: "Không có quyền truy cập" khi cập nhật
**Nguyên nhân**: Mật khẩu admin không đúng

**Giải pháp**:
1. Kiểm tra biến `ADMIN_PASSWORD` trong Vercel
2. Đảm bảo mật khẩu nhập vào đúng với biến môi trường

### ❌ Dữ liệu không đồng bộ
**Nguyên nhân**: JSONBin chưa được setup hoặc Bin ID/API Key sai

**Giải pháp**:
1. Kiểm tra lại Bin ID và Master Key trong Vercel
2. Vào JSONBin.io → Kiểm tra Bin có tồn tại không
3. Thử update lại Bin trong JSONBin.io để test

### ❌ API trả về lỗi 500
**Nguyên nhân**: Có thể do JSONBin API hoặc code lỗi

**Giải pháp**:
1. Vào Vercel Dashboard → **Deployments** → Click vào deployment mới nhất
2. Xem **"Function Logs"** để biết lỗi cụ thể
3. Kiểm tra lại Master Key và Bin ID

---

## 📞 Cần Giúp Đỡ?

Nếu gặp vấn đề:
1. Kiểm tra lại từng bước trên
2. Xem logs trong Vercel Dashboard
3. Kiểm tra JSONBin.io Dashboard xem Bin có hoạt động không

---

## 💡 Tips

- **Free tier của JSONBin.io**: 
  - 10,000 requests/tháng (đủ dùng cho dự án nhỏ)
  - Unlimited bins
  - Private bins

- **Bảo mật**:
  - Đừng share Master Key với ai
  - Đừng commit Master Key vào GitHub
  - Nếu lộ key, vào JSONBin.io → Settings → Regenerate key

- **Backup**:
  - Có thể export Bin từ JSONBin.io Dashboard
  - Hoặc dùng API để backup định kỳ
