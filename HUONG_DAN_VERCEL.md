# 🚀 Hướng Dẫn Deploy Lên Vercel Chi Tiết

## Bước 1: Chuẩn Bị

Đảm bảo bạn có các file sau:
- ✅ `index.html`
- ✅ `vercel.json`
- ✅ `package.json`

## Bước 2: Chọn Phương Pháp Deploy

### 📌 Phương Pháp 1: Qua GitHub (Khuyên Dùng - Dễ Quản Lý)

#### 2.1. Tạo Repository trên GitHub

1. Truy cập https://github.com và đăng nhập
2. Click nút **"+"** → **"New repository"**
3. Đặt tên repository (ví dụ: `trang-thai-web`)
4. Chọn **Public** hoặc **Private**
5. **KHÔNG** tích vào "Initialize with README"
6. Click **"Create repository"**

#### 2.2. Đẩy Code Lên GitHub

Mở Terminal/PowerShell trong folder dự án và chạy:

```bash
# Khởi tạo git (nếu chưa có)
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit - Trang quản lý trạng thái"

# Thêm remote (thay username và repo-name)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Đẩy lên GitHub
git branch -M main
git push -u origin main
```

#### 2.3. Deploy Lên Vercel

1. Truy cập https://vercel.com
2. Click **"Sign Up"** → Chọn **"Continue with GitHub"**
3. Authorize Vercel truy cập GitHub
4. Sau khi đăng nhập, click **"Add New..."** → **"Project"**
5. Tìm và chọn repository vừa tạo
6. Click **"Import"**
7. Vercel tự động detect:
   - Framework Preset: Other
   - Root Directory: `./`
   - Build Command: (để trống hoặc `npm run build`)
   - Output Directory: (để trống)
8. Click **"Deploy"**
9. Đợi 30-60 giây
10. ✅ **Xong!** Bạn sẽ có link: `https://your-project-name.vercel.app`

---

### 📌 Phương Pháp 2: Vercel CLI (Nhanh, Không Cần GitHub)

#### 2.1. Cài Đặt Vercel CLI

```bash
npm install -g vercel
```

Hoặc nếu dùng yarn:
```bash
yarn global add vercel
```

#### 2.2. Đăng Nhập

```bash
vercel login
```

- Mở trình duyệt và đăng nhập
- Quay lại terminal, nhấn Enter

#### 2.3. Deploy

```bash
vercel
```

Làm theo hướng dẫn:
- **Set up and deploy?** → Y
- **Which scope?** → Chọn tài khoản của bạn
- **Link to existing project?** → N (lần đầu)
- **What's your project's name?** → Nhập tên (hoặc Enter để dùng tên mặc định)
- **In which directory is your code located?** → `./` (Enter)
- **Want to override the settings?** → N

Đợi vài giây → ✅ **Xong!** Bạn sẽ có link ngay.

#### 2.4. Deploy Production (Tùy Chọn)

```bash
vercel --prod
```

---

### 📌 Phương Pháp 3: Kéo Thả (Đơn Giản Nhất)

1. Truy cập https://vercel.com và đăng nhập
2. Vào https://vercel.com/new
3. Kéo thả **toàn bộ folder** chứa `index.html` vào trang web
4. Vercel tự động upload và deploy
5. ✅ **Xong!** Có link ngay

**Lưu ý**: Phương pháp này không tự động update khi code thay đổi.

---

## Bước 3: Cập Nhật Code (Nếu Dùng GitHub)

Sau khi thay đổi code:

```bash
git add .
git commit -m "Update status"
git push
```

Vercel sẽ **tự động deploy lại** (nếu đã kết nối GitHub).

---

## Bước 4: Tùy Chỉnh Domain (Tùy Chọn)

1. Vào dashboard Vercel
2. Chọn project
3. Vào tab **"Settings"** → **"Domains"**
4. Thêm domain tùy chỉnh (nếu có)

---

## ❓ Troubleshooting

### Lỗi: "Build Failed"
- Kiểm tra file `vercel.json` có đúng format không
- Đảm bảo `index.html` ở root folder

### Lỗi: "404 Not Found"
- Kiểm tra file `vercel.json` có đúng không
- Đảm bảo route trỏ về `index.html`

### Website không load được
- Kiểm tra console trình duyệt (F12)
- Kiểm tra Network tab xem file nào bị lỗi

---

## 🎉 Hoàn Thành!

Bây giờ bạn có:
- ✅ Website live trên internet
- ✅ Domain miễn phí `.vercel.app`
- ✅ HTTPS tự động
- ✅ CDN toàn cầu (tải nhanh)
- ✅ Auto-deploy khi push code (nếu dùng GitHub)

**Link của bạn sẽ có dạng**: `https://your-project-name.vercel.app`
