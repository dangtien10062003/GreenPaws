import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUsSection = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: 'pets',
      customIcon: '🐾',
      title: language === 'vi' ? 'Đội ngũ chuyên nghiệp' : 'Professional Team',
      description: language === 'vi' 
        ? 'Đội ngũ bác sĩ thú y và chuyên viên được đào tạo bài bản, giàu kinh nghiệm'
        : 'Veterinarians and specialists with professional training and rich experience',
    },
    {
      icon: 'health_and_safety',
      customIcon: '🛡️',
      title: language === 'vi' ? 'Tiêu chuẩn y tế' : 'Medical Standards',
      description: language === 'vi'
        ? 'Tuân thủ nghiêm ngặt các tiêu chuẩn y tế và vệ sinh quốc tế'
        : 'Strict adherence to international medical and hygiene standards',
    },
    {
      icon: 'eco',
      customIcon: '💚',
      title: language === 'vi' ? 'Thân thiện môi trường' : 'Eco-Friendly',
      description: language === 'vi'
        ? 'Sử dụng sản phẩm organic, an toàn cho thú cưng và môi trường'
        : 'Using organic products, safe for pets and the environment',
    },
    {
      icon: 'videocam',
      customIcon: '📹',
      title: language === 'vi' ? 'Giám sát 24/7' : '24/7 Monitoring',
      description: language === 'vi'
        ? 'Hệ thống camera giám sát, bạn có thể xem bé cưng mọi lúc mọi nơi'
        : 'Camera monitoring system, watch your pet anytime, anywhere',
    },
    {
      icon: 'favorite',
      customIcon: '❤️',
      title: language === 'vi' ? 'Chăm sóc tận tâm' : 'Dedicated Care',
      description: language === 'vi'
        ? 'Mỗi thú cưng được chăm sóc như thành viên gia đình của chúng tôi'
        : 'Each pet is cared for as a member of our family',
    },
    {
      icon: 'support_agent',
      customIcon: '🎧',
      title: language === 'vi' ? 'Hỗ trợ 24/7' : '24/7 Support',
      description: language === 'vi'
        ? 'Đội ngũ hỗ trợ khách hàng luôn sẵn sàng phục vụ bạn'
        : 'Customer support team always ready to serve you',
    },
  ];

  const comparison = [
    {
      feature: language === 'vi' ? 'Thiết bị khử trùng' : 'Sterilization Equipment',
      greenPaws: language === 'vi' ? 'UV-C chuyên dụng' : 'Professional UV-C',
      others: language === 'vi' ? 'Cơ bản' : 'Basic'
    },
    {
      feature: language === 'vi' ? 'Vệ sinh dụng cụ' : 'Tool Hygiene',
      greenPaws: language === 'vi' ? 'Sau mỗi khách' : 'After each client',
      others: language === 'vi' ? 'Cuối ngày' : 'End of day'
    },
    {
      feature: language === 'vi' ? 'Sản phẩm' : 'Products',
      greenPaws: language === 'vi' ? '100% Organic' : '100% Organic',
      others: language === 'vi' ? 'Hóa học' : 'Chemical'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-secondary-500 font-semibold text-sm uppercase tracking-wide">
            {language === 'vi' ? 'Tại sao chọn chúng tôi' : 'Why Choose Us'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mt-4 mb-4">
            {language === 'vi' 
              ? 'Điều gì làm nên sự khác biệt của Green Paws?'
              : 'What Makes Green Paws Different?'}
          </h2>
          <p className="text-lg text-primary-700/80">
            {language === 'vi'
              ? 'Chúng tôi cam kết mang đến dịch vụ chăm sóc thú cưng tốt nhất với sự kết hợp hoàn hảo giữa chuyên môn và tình yêu thương'
              : 'We are committed to providing the best pet care services with a perfect combination of expertise and love'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-primary-100"
            >
              <div className="text-5xl mb-4">{feature.customIcon}</div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-700/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary-100">
          <div className="bg-gradient-to-r from-secondary-400 to-primary-500 px-6 py-4">
            <h3 className="text-xl font-bold text-white text-center">
              {language === 'vi' ? 'So sánh với dịch vụ thông thường' : 'Comparison with Regular Services'}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary-50/60">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-primary-800">
                    {language === 'vi' ? 'Tiêu chí' : 'Criteria'}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600">
                    Green Paws
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary-700/80">
                    {language === 'vi' ? 'Dịch vụ khác' : 'Others'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary-100">
                {comparison.map((item, index) => (
                  <tr key={index} className="hover:bg-secondary-50/70 transition-colors">
                    <td className="px-6 py-4 text-sm text-primary-800 font-medium">{item.feature}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center text-sm font-semibold text-primary-600">
                        <span className="material-icons text-sm mr-1">check_circle</span>
                        {item.greenPaws}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-sm text-primary-700/70">{item.others}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white/95 px-6 py-3 rounded-full shadow-md border border-primary-100">
            <span className="material-icons text-primary-600">check_circle</span>
            <span className="font-semibold text-primary-800">
              {language === 'vi' 
                ? 'Được hơn 2,500+ khách hàng tin tưởng'
                : 'Trusted by 2,500+ customers'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
