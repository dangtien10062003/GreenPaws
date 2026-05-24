import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const { t, language } = useLanguage();

  const serviceDetails = {
    grooming: {
      icon: 'content_cut',
      image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=1200&h=600&fit=crop',
      steps: [
        { icon: 'shower', title: language === 'vi' ? 'Tắm & Vệ sinh' : 'Bath & Hygiene' },
        { icon: 'content_cut', title: language === 'vi' ? 'Cắt tỉa lông' : 'Hair Trimming' },
        { icon: 'brush', title: language === 'vi' ? 'Chải lông' : 'Brushing' },
        { icon: 'spa', title: language === 'vi' ? 'Dưỡng da' : 'Skin Care' },
      ],
      pricing: [
        { size: language === 'vi' ? 'Nhỏ (< 5kg)' : 'Small (< 5kg)', price: '300,000' },
        { size: language === 'vi' ? 'Trung bình (5-15kg)' : 'Medium (5-15kg)', price: '500,000' },
        { size: language === 'vi' ? 'Lớn (> 15kg)' : 'Large (> 15kg)', price: '800,000' },
      ],
    },
    spa: {
      icon: 'spa',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=600&fit=crop',
      steps: [
        { icon: 'hot_tub', title: language === 'vi' ? 'Bồn sục thảo dược' : 'Herbal Bath' },
        { icon: 'self_improvement', title: language === 'vi' ? 'Massage thư giãn' : 'Relaxing Massage' },
        { icon: 'spa', title: language === 'vi' ? 'Chăm sóc da' : 'Skin Treatment' },
        { icon: 'favorite', title: language === 'vi' ? 'Aromatherapy' : 'Aromatherapy' },
      ],
      pricing: [
        { size: language === 'vi' ? 'Gói cơ bản' : 'Basic Package', price: '500,000' },
        { size: language === 'vi' ? 'Gói cao cấp' : 'Premium Package', price: '800,000' },
        { size: language === 'vi' ? 'Gói VIP' : 'VIP Package', price: '1,200,000' },
      ],
    },
    training: {
      icon: 'school',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=600&fit=crop',
      steps: [
        { icon: 'psychology', title: language === 'vi' ? 'Đánh giá hành vi' : 'Behavior Assessment' },
        { icon: 'school', title: language === 'vi' ? 'Huấn luyện cơ bản' : 'Basic Training' },
        { icon: 'emoji_events', title: language === 'vi' ? 'Rèn luyện nâng cao' : 'Advanced Training' },
        { icon: 'verified', title: language === 'vi' ? 'Theo dõi tiến độ' : 'Progress Tracking' },
      ],
      pricing: [
        { size: language === 'vi' ? 'Gói 1 tháng' : '1 Month Package', price: '2,000,000' },
        { size: language === 'vi' ? 'Gói 3 tháng' : '3 Month Package', price: '5,000,000' },
        { size: language === 'vi' ? 'Gói 6 tháng' : '6 Month Package', price: '9,000,000' },
      ],
    },
    hotel: {
      icon: 'hotel',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&h=600&fit=crop',
      steps: [
        { icon: 'meeting_room', title: language === 'vi' ? 'Phòng riêng tư' : 'Private Room' },
        { icon: 'restaurant', title: language === 'vi' ? 'Bữa ăn dinh dưỡng' : 'Nutritious Meals' },
        { icon: 'videocam', title: language === 'vi' ? 'Giám sát 24/7' : '24/7 Monitoring' },
        { icon: 'pets', title: language === 'vi' ? 'Vui chơi & Vận động' : 'Play & Exercise' },
      ],
      pricing: [
        { size: language === 'vi' ? 'Phòng tiêu chuẩn' : 'Standard Room', price: '200,000' },
        { size: language === 'vi' ? 'Phòng cao cấp' : 'Deluxe Room', price: '350,000' },
        { size: language === 'vi' ? 'Phòng VIP' : 'VIP Suite', price: '500,000' },
      ],
    },
  };

  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Service not found</p>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Image */}
      <div className="relative h-[400px] lg:h-[500px]">
        <img
          src={service.image}
          alt={t(`services.${serviceId}.title`)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="material-icons text-primary-600 text-3xl">{service.icon}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              {t(`services.${serviceId}.title`)}
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl">
            {t(`services.${serviceId}.description`)}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Process Steps */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {language === 'vi' ? 'Quy trình dịch vụ' : 'Service Process'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons text-primary-600 text-3xl">{step.icon}</span>
                  </div>
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {index + 1}
                  </div>
                  <p className="font-semibold text-gray-900">{step.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {language === 'vi' ? 'Bảng giá dịch vụ' : 'Service Pricing'}
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      {language === 'vi' ? 'Loại dịch vụ' : 'Service Type'}
                    </th>
                    <th className="px-6 py-4 text-right font-semibold">
                      {language === 'vi' ? 'Giá (VNĐ)' : 'Price (VND)'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {service.pricing.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-primary-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900">{item.size}</td>
                      <td className="px-6 py-4 text-right font-semibold text-primary-700">
                        {item.price} VNĐ
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 text-center mt-4">
              {language === 'vi' 
                ? '* Giá có thể thay đổi tùy theo tình trạng và yêu cầu đặc biệt' 
                : '* Prices may vary based on condition and special requirements'}
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {language === 'vi' ? 'Sẵn sàng đặt lịch?' : 'Ready to Book?'}
            </h3>
            <p className="text-primary-50 mb-6 max-w-2xl mx-auto">
              {language === 'vi'
                ? 'Đặt lịch ngay hôm nay để bé cưng của bạn được trải nghiệm dịch vụ tốt nhất'
                : 'Book today to give your pet the best service experience'}
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 rounded-full hover:bg-secondary-50 transition-all shadow-xl hover:shadow-2xl font-semibold"
            >
              {t('nav.bookNow')}
              <span className="material-icons ml-2">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
