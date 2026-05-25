import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const BenefitsSection = () => {
  const { language } = useLanguage();

  const benefits = [
    {
      icon: 'verified_user',
      title: language === 'vi' ? 'An toàn tuyệt đối' : 'Absolutely Safe',
      description: language === 'vi' 
        ? 'Cam kết an toàn tuyệt đối cho thú cưng của bạn trong suốt quá trình grooming' 
        : 'Ensuring absolute safety for your pet during the entire grooming process',
      color: 'bg-green-500'
    },
    {
      icon: 'school',
      title: language === 'vi' ? 'Groomer chuyên nghiệp' : 'Professional Groomers',
      description: language === 'vi' 
        ? 'Đội ngũ groomer được đào tạo chuyên sâu, nhiều năm kinh nghiệm' 
        : 'Team of highly trained groomers with many years of experience',
      color: 'bg-blue-500'
    },
    {
      icon: 'workspace_premium',
      title: language === 'vi' ? 'Bảo hành dịch vụ' : 'Service Warranty',
      description: language === 'vi' 
        ? 'Bảo hành 7 ngày cho tất cả các dịch vụ grooming' 
        : '7-day warranty on all grooming services',
      color: 'bg-amber-500'
    },
    {
      icon: 'local_hospital',
      title: language === 'vi' ? 'Y tá hỗ trợ' : 'Veterinary Support',
      description: language === 'vi' 
        ? 'Có y tá theo dõi sức khỏe thú cưng trong suốt quá trình' 
        : 'Veterinary staff monitor your pet\'s health throughout',
      color: 'bg-red-500'
    },
    {
      icon: ' schedule',
      title: language === 'vi' ? 'linh hoạt thời gian' : 'Flexible Schedule',
      description: language === 'vi' 
        ? 'Đặt lịch online 24/7, phục vụ từ 8h - 20h hàng ngày' 
        : 'Book online 24/7, serving from 8AM - 8PM daily',
      color: 'bg-purple-500'
    },
    {
      icon: 'pets',
      title: language === 'vi' ? 'Thú cưng vui vẻ' : 'Happy Pets',
      description: language === 'vi' 
        ? 'Thú cưng luôn vui vẻ và thoải mái khi sử dụng dịch vụ' 
        : 'Pets are always happy and comfortable when using our services',
      color: 'bg-pink-500'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-secondary-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
            {language === 'vi' ? 'Tại sao chọn chúng tôi' : 'Why Choose Us'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            {language === 'vi' ? 'Lợi ích nổi bật' : 'Key Benefits'}
          </h2>
          <p className="text-lg text-gray-600">
            {language === 'vi' 
              ? 'Những cam kết và lợi ích khi bạn đồng hành cùng Green Paws' 
              : 'Commitments and benefits when you partner with Green Paws'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-primary-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-4`}>
                <span className="material-icons text-white text-2xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors font-semibold shadow-lg hover:shadow-xl"
          >
            {language === 'vi' ? 'Đặt lịch ngay' : 'Book Now'}
            <span className="material-icons text-sm">chevron_right</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
