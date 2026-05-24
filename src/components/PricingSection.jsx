import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const PricingSection = () => {
  const { language } = useLanguage();
  const [isMonthly, setIsMonthly] = useState(true);

  const packages = [
    {
      name: language === 'vi' ? 'Gói Cơ Bản' : 'Basic Package',
      priceMonthly: '500,000',
      priceMembership: '425,000',
      period: language === 'vi' ? '/tháng' : '/month',
      description: language === 'vi' ? 'Phù hợp cho thú cưng khỏe mạnh' : 'Suitable for healthy pets',
      features: [
        language === 'vi' ? '1 lần Grooming/tháng' : '1 Grooming session/month',
        language === 'vi' ? 'Tắm & vệ sinh cơ bản' : 'Basic bath & hygiene',
        language === 'vi' ? 'Cắt móng miễn phí' : 'Free nail trimming',
        language === 'vi' ? 'Tư vấn sức khỏe' : 'Health consultation',
      ],
      popular: false,
    },
    {
      name: language === 'vi' ? 'Gói Cao Cấp' : 'Premium Package',
      priceMonthly: '1,200,000',
      priceMembership: '1,020,000',
      period: language === 'vi' ? '/tháng' : '/month',
      description: language === 'vi' ? 'Chăm sóc toàn diện cho bé cưng' : 'Comprehensive care for your pet',
      features: [
        language === 'vi' ? '2 lần Grooming/tháng' : '2 Grooming sessions/month',
        language === 'vi' ? '1 lần Spa thảo dược' : '1 Herbal spa session',
        language === 'vi' ? 'Khám sức khỏe định kỳ' : 'Regular health check-up',
        language === 'vi' ? 'Tư vấn dinh dưỡng' : 'Nutrition consultation',
        language === 'vi' ? 'Giảm 10% dịch vụ khác' : '10% off other services',
      ],
      popular: true,
    },
    {
      name: language === 'vi' ? 'Gói VIP' : 'VIP Package',
      priceMonthly: '2,500,000',
      priceMembership: '2,125,000',
      period: language === 'vi' ? '/tháng' : '/month',
      description: language === 'vi' ? 'Dịch vụ 5 sao cho thú cưng' : '5-star service for pets',
      features: [
        language === 'vi' ? 'Grooming không giới hạn' : 'Unlimited grooming',
        language === 'vi' ? '2 lần Spa cao cấp/tháng' : '2 Premium spa sessions/month',
        language === 'vi' ? 'Khám sức khỏe ưu tiên' : 'Priority health check-up',
        language === 'vi' ? 'Huấn luyện cơ bản miễn phí' : 'Free basic training',
        language === 'vi' ? 'Đưa đón tận nhà' : 'Home pickup & delivery',
        language === 'vi' ? 'Giảm 20% tất cả dịch vụ' : '20% off all services',
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-secondary-50/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-secondary-500 font-semibold text-sm uppercase tracking-wide">
            {language === 'vi' ? 'Bảng giá' : 'Pricing'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mt-4 mb-4">
            {language === 'vi' 
              ? 'Chọn gói dịch vụ phù hợp'
              : 'Choose The Right Package'}
          </h2>
          <p className="text-lg text-primary-700/80">
            {language === 'vi'
              ? 'Tiết kiệm hơn với các gói dịch vụ theo tháng'
              : 'Save more with monthly service packages'}
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/95 rounded-full p-1.5 shadow-lg inline-flex items-center space-x-2 border border-primary-100">
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                isMonthly
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'text-primary-700/80 hover:text-primary-800'
              }`}
            >
              {language === 'vi' ? 'Lần lẻ' : 'One-time'}
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all relative ${
                !isMonthly
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'text-primary-700/80 hover:text-primary-800'
              }`}
            >
              {language === 'vi' ? 'Gói Membership' : 'Membership'}
              <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs px-2 py-0.5 rounded-full">
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                pkg.popular
                  ? 'bg-gradient-to-br from-secondary-400 to-primary-500 text-white shadow-2xl scale-105'
                  : 'bg-white/95 border-2 border-primary-100 hover:border-secondary-200 shadow-lg'
              } transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary-500 text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    {language === 'vi' ? 'Phổ biến nhất' : 'Most Popular'}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-primary-800'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm ${pkg.popular ? 'text-primary-100' : 'text-primary-700/80'}`}>
                  {pkg.description}
                </p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-end justify-center">
                  <span className={`text-5xl font-bold ${pkg.popular ? 'text-white' : 'text-primary-800'}`}>
                    {isMonthly ? pkg.priceMonthly : pkg.priceMembership}
                  </span>
                  <span className={`text-lg ml-2 mb-2 ${pkg.popular ? 'text-primary-100' : 'text-primary-700/80'}`}>
                    VNĐ{pkg.period}
                  </span>
                </div>
                {!isMonthly && (
                  <p className={`text-sm mt-2 ${pkg.popular ? 'text-primary-100' : 'text-primary-700/70'}`}>
                    {language === 'vi' ? 'Tiết kiệm 15%' : 'Save 15%'}
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className={`material-icons text-sm mr-3 mt-0.5 ${
                      pkg.popular ? 'text-white' : 'text-primary-600'
                    }`}>
                      check_circle
                    </span>
                    <span className={pkg.popular ? 'text-primary-50' : 'text-primary-700/85'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/booking"
                className={`block w-full py-3.5 rounded-full font-semibold text-center transition-all ${
                  pkg.popular
                    ? 'bg-white text-primary-600 hover:bg-secondary-50'
                    : 'bg-primary-500 text-white hover:bg-secondary-500'
                }`}
              >
                {language === 'vi' ? 'Chọn gói này' : 'Choose Package'}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-primary-700/80">
            {language === 'vi'
              ? '💡 Tất cả gói dịch vụ đều có thể hủy bất cứ lúc nào. Không ràng buộc dài hạn.'
              : '💡 All packages can be cancelled anytime. No long-term commitment.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
