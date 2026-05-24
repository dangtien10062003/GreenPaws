# 🏗️ Cấu trúc Website Green Paws

## 📋 Danh sách các trang

### 1. **Trang chủ** (`/`)
- Hero Section với CTA
- About Section (giới thiệu ngắn)
- Services Overview (4 dịch vụ)
- Testimonials
- CTA Section

### 2. **Về chúng tôi** (`/about`)
- About Section đầy đủ với grid hình ảnh
- Why Choose Us (6 lý do)
- Testimonials
- CTA

### 3. **Dịch vụ** (`/services`)
- Page header
- Services Section (4 dịch vụ chính)
- CTA

### 4. **Chi tiết dịch vụ** (`/service/:serviceId`)
- Hero image với service info
- Quy trình 4 bước
- Bảng giá chi tiết
- CTA đặt lịch

### 5. **Bảng giá** (`/pricing`)
- 3 gói dịch vụ (Basic, Premium, VIP)
- So sánh tính năng
- FAQ Section
- CTA

### 6. **Đội ngũ** (`/team`)
- Team Section (4 chuyên gia)
- Thông tin chi tiết từng thành viên
- CTA

### 7. **Thư viện** (`/gallery`)
- Gallery với filter theo category
- Lightbox effect
- Load more
- CTA

### 8. **Blog** (`/blog`)
- Grid 6 bài viết
- Category badges
- Pagination
- Author info

### 9. **Chi tiết Blog** (`/blog/:blogId`)
- Hero image
- Full content
- Share buttons
- Back to blog link

### 10. **Liên hệ** (`/contact`)
- Contact form đầy đủ
- Thông tin liên lạc
- Social media
- Google Maps

### 11. **Đặt lịch** (`/booking`)
- 3 bước đặt lịch
- Progress indicator
- Form validation
- Confirmation

## 🎨 Components

### Layout Components
- `Header.jsx` - Navigation với 7 menu items
- `Footer.jsx` - 4 columns với links

### Section Components
- `HeroSection.jsx` - Banner chính
- `AboutSection.jsx` - Giới thiệu + stats
- `ServicesSection.jsx` - 4 service cards
- `WhyChooseUsSection.jsx` - 6 features
- `PricingSection.jsx` - 3 pricing cards
- `TeamSection.jsx` - 4 team members
- `TestimonialsSection.jsx` - Customer reviews
- `GallerySection.jsx` - Image gallery với filter
- `FAQSection.jsx` - Accordion Q&A
- `ContactSection.jsx` - Contact form + info
- `CTASection.jsx` - Call-to-action

## 🗂️ File Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── ServicesSection.jsx
│   ├── WhyChooseUsSection.jsx
│   ├── PricingSection.jsx
│   ├── TeamSection.jsx
│   ├── TestimonialsSection.jsx
│   ├── GallerySection.jsx
│   ├── FAQSection.jsx
│   ├── ContactSection.jsx
│   └── CTASection.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ServicesPage.jsx
│   ├── ServiceDetailPage.jsx
│   ├── PricingPage.jsx
│   ├── TeamPage.jsx
│   ├── GalleryPage.jsx
│   ├── BlogPage.jsx
│   ├── BlogDetailPage.jsx
│   ├── ContactPage.jsx
│   └── BookingPage.jsx
├── contexts/
│   └── LanguageContext.jsx
├── locales/
│   ├── vi.json
│   └── en.json
├── App.jsx
├── main.jsx
└── index.css
```

## 🎯 Navigation Menu

### Desktop Menu (Header)
1. Về chúng tôi → `/about`
2. Dịch vụ → `/services`
3. Bảng giá → `/pricing`
4. Đội ngũ → `/team`
5. Thư viện → `/gallery`
6. Blog → `/blog`
7. Liên hệ → `/contact`
8. **Đặt lịch ngay** (CTA Button) → `/booking`

### Mobile Menu
- Hamburger menu với tất cả links trên
- Language switcher
- Book Now button

## 🌐 Routes

```javascript
/ → HomePage
/about → AboutPage
/services → ServicesPage
/service/:serviceId → ServiceDetailPage
/pricing → PricingPage
/team → TeamPage
/gallery → GalleryPage
/blog → BlogPage
/blog/:blogId → BlogDetailPage
/contact → ContactPage
/booking → BookingPage
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Palette

- **Primary Green**: #2D9165
- **Secondary Pink**: #F294AC
- **Tertiary Brown**: #D4C3A3
- **Neutral**: #F9F7F2

## ✨ Key Features

1. ✅ Multi-page architecture
2. ✅ Đa ngôn ngữ (VI/EN)
3. ✅ Responsive design
4. ✅ Service-focused (no e-commerce)
5. ✅ Blog system
6. ✅ Booking system
7. ✅ Gallery với filter
8. ✅ FAQ accordion
9. ✅ Contact form
10. ✅ Google Maps integration
11. ✅ Team showcase
12. ✅ Pricing comparison
13. ✅ Testimonials
14. ✅ Smooth animations
15. ✅ SEO-friendly URLs
