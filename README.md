# Trang Web Quản Lý Trạng Thái (Frontend Only)

Ứng dụng web đơn giản chỉ cần frontend, không cần server. Mở file HTML trực tiếp trong trình duyệt là có thể sử dụng ngay!

## 🚀 Deploy Lên Vercel (Miễn Phí)

### Cách 1: Deploy Qua GitHub (Khuyên Dùng)

1. **Tạo tài khoản GitHub** (nếu chưa có):
   - Truy cập: https://github.com
   - Đăng ký tài khoản miễn phí

2. **Đẩy code lên GitHub**:
   ```bash
   # Khởi tạo git (nếu chưa có)
   git init
   git add .
   git commit -m "Initial commit"
   
   # Tạo repository mới trên GitHub, sau đó:
   git remote add origin https://github.com/username/repo-name.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy lên Vercel**:
   - Truy cập: https://vercel.com
   - Đăng nhập bằng tài khoản GitHub
   - Click **"Add New Project"**
   - Chọn repository vừa tạo
   - Click **"Deploy"** (Vercel tự động detect cấu hình)
   - Đợi vài giây, bạn sẽ có link miễn phí: `https://your-project.vercel.app`

### Cách 2: Deploy Bằng Vercel CLI

1. **Cài đặt Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Đăng nhập**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Làm theo hướng dẫn trên terminal
   - Chọn default settings
   - Xong! Bạn sẽ có link ngay

### Cách 3: Kéo Thả Folder (Nhanh Nhất)

1. Truy cập: https://vercel.com/new
2. Đăng nhập bằng GitHub
3. Kéo thả folder chứa `index.html` vào trang web
4. Vercel tự động deploy và cho link

## 📝 Cách Sử Dụng Local

1. **Mở file `index.html`** trong trình duyệt bất kỳ (Chrome, Firefox, Edge...)
   - Có thể double-click vào file
   - Hoặc kéo thả file vào trình duyệt
   - Hoặc click chuột phải → Open with → Browser

2. **Mật khẩu admin mặc định**: `admin123`
   - Để thay đổi, chỉnh sửa biến `ADMIN_PASSWORD` trong file HTML (dòng ~280)

## ✨ Tính Năng

- ✅ **Client**: Chỉ có thể xem trạng thái
- ✅ **Admin**: Có thể đăng nhập và cập nhật trạng thái
- ✅ Lưu trữ trạng thái trong localStorage (lưu trên trình duyệt)
- ✅ Giao diện đẹp, responsive
- ✅ Thông báo khi cập nhật thành công
- ✅ Không cần cài đặt, không cần server
- ✅ Deploy miễn phí trên Vercel với domain `.vercel.app`

## ⚠️ Lưu Ý

- Dữ liệu được lưu trong **localStorage** của trình duyệt
- Mỗi trình duyệt sẽ có dữ liệu riêng
- Nếu xóa cache/cookie của trình duyệt, dữ liệu sẽ mất
- Để chia sẻ dữ liệu giữa nhiều người, cần dùng backend

## 🔒 Bảo Mật

⚠️ Mật khẩu admin được lưu trong code JavaScript, có thể xem được trong source code. Đây là giải pháp đơn giản cho mục đích cá nhân.

## 📦 Files Cần Thiết Cho Vercel

- `index.html` - File chính
- `vercel.json` - Cấu hình Vercel (đã có sẵn)
- `package.json` - Metadata (đã có sẵn)
