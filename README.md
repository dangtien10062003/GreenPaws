# 🐾 Green Paws - Pet Family

Website chăm sóc thú cưng cao cấp với React + Tailwind CSS và hệ thống đa ngôn ngữ (VI/EN).

## ✨ Tính năng

- 🌍 **Đa ngôn ngữ**: Hỗ trợ Tiếng Việt và English với tự động nhận diện ngôn ngữ trình duyệt
- 🎨 **Thiết kế hiện đại**: Minimalism với màu sắc Eco-friendly (Green #2D9165 & Pink #F294AC)
- 📱 **Responsive**: Tối ưu cho mọi thiết bị từ mobile đến desktop
- 🗓️ **Hệ thống đặt lịch**: Quy trình 3 bước đơn giản và trực quan
- 🛍️ **Tập trung dịch vụ**: Không bán hàng, chỉ cung cấp dịch vụ chăm sóc thú cưng

## 🎯 Các Sections Chính

### 1. **Hero Section**
- Banner chính với CTA buttons
- Thống kê khách hàng hài lòng
- Gradient background với brand colors

### 2. **About Section**
- Giới thiệu về Green Paws
- Grid hình ảnh đẹp mắt
- Thống kê 4 chỉ số quan trọng

### 3. **Services Section**
- 4 dịch vụ chính: Grooming, Spa, Training, Hotel
- Card design với hover effects
- Link đến trang chi tiết dịch vụ

### 4. **Why Choose Us Section**
- 6 lý do chọn Green Paws
- Icon-based features
- Gradient background

### 5. **Pricing Section**
- 3 gói dịch vụ: Basic, Premium, VIP
- Pricing cards với popular badge
- So sánh tính năng rõ ràng

### 6. **Team Section**
- Giới thiệu 4 chuyên gia
- Hover effects với social links
- Professional photos

### 7. **Testimonials Section**
- Đánh giá từ khách hàng
- 5-star rating
- Quote design đẹp mắt

### 8. **Gallery Section**
- Thư viện hình ảnh
- Filter theo category
- Lightbox effect

### 9. **FAQ Section**
- Accordion design
- 6 câu hỏi thường gặp
- Support CTA box

### 10. **Contact Section**
- Form liên hệ đầy đủ
- Thông tin liên lạc
- Google Maps integration

### 11. **CTA Section**
- Call-to-action cuối trang
- Ưu đãi 20% cho khách mới
- Trust badges

## 🚀 Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

## 📁 Cấu trúc dự án

```
green-paws/
├── public/
│   ├── logo.svg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── WhyChooseUsSection.jsx
│   │   ├── PricingSection.jsx
│   │   ├── TeamSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── GallerySection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── CTASection.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── BookingPage.jsx
│   │   └── ServiceDetailPage.jsx
│   ├── contexts/
│   │   └── LanguageContext.jsx
│   ├── locales/
│   │   ├── vi.json
│   │   └── en.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Màu sắc Brand

### **Primary Green** (#2D9165)
- Buttons, navigation, icons
- Professional và eco-friendly
- Gradient: #e8f5ef → #0f4530

### **Secondary Pink** (#F294AC)
- Accent colors, badges
- Friendly và approachable
- Gradient: #fef4f7 → #b01d47

### **Tertiary Brown** (#D4C3A3)
- Warm accents
- Natural và organic
- Gradient: #faf8f4 → #7d6a47

### **Neutral** (#F9F7F2)
- Backgrounds
- Clean và minimal
- Gradient: #ffffff → #a39886

## 🌐 Đa ngôn ngữ

Website tự động nhận diện ngôn ngữ từ trình duyệt và lưu lựa chọn của người dùng.

### Thêm ngôn ngữ mới

1. Tạo file JSON mới trong `src/locales/` (ví dụ: `ja.json`)
2. Copy cấu trúc từ `vi.json` hoặc `en.json`
3. Dịch các nội dung
4. Cập nhật `LanguageContext.jsx`

## 📋 Tính năng chính

### Hệ thống đặt lịch (Booking System)
- **Bước 1**: Chọn dịch vụ và loại thú cưng (Chó, Mèo, Thỏ)
- **Bước 2**: Chọn ngày, giờ và nhân viên
- **Bước 3**: Điền thông tin thú cưng và chủ nhân
- Form validation đầy đủ
- Progress indicator

### Trang chi tiết dịch vụ
- Quy trình 4 bước thực hiện
- Bảng giá theo kích cỡ/cân nặng
- CTA đặt lịch
- Không có giỏ hàng (service-focused)

### Gallery với Filter
- Filter theo category (All, Grooming, Spa, Training, Hotel)
- Hover effects
- Load more functionality

### FAQ Accordion
- Expand/collapse animation
- Support CTA box
- 6 câu hỏi phổ biến

### Contact Form
- Full validation
- Google Maps integration
- Social media links
- Working hours info

## 🛠️ Công nghệ sử dụng

- **React 18**: UI Library
- **React Router DOM**: Routing
- **Tailwind CSS**: Styling với custom theme
- **Vite**: Build tool (fast HMR)
- **Material Icons**: Icon library
- **Context API**: State management

## 📱 Responsive Design

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Tất cả sections đều responsive với grid system linh hoạt.

## 🎯 SEO & Performance

- Semantic HTML
- Optimized images
- Fast loading với Vite
- Clean URL structure
- Meta tags ready

## 📞 Thông tin liên hệ

- **Địa chỉ**: 123 Đường Thảo Điền, Quận 2, TP. Hồ Chí Minh
- **Hotline**: 1900 888 666
- **Email**: hello@greenpaws.vn
- **Giờ làm việc**: T2 - CN: 8:00 - 20:00

## 📄 License

© 2024 Green Paws. Designed with love for our pet family.

---

**Lưu ý**: Website tập trung vào **dịch vụ chăm sóc thú cưng**, không bán sản phẩm. Tất cả CTA đều hướng đến booking system thay vì shopping cart.
