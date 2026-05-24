import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';

const ServicesPage = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-16 lg:pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
            {language === 'vi' ? 'Dịch vụ của chúng tôi' : 'Our Services'}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
            {language === 'vi' 
              ? 'Dịch vụ chăm sóc thú cưng toàn diện'
              : 'Comprehensive Pet Care Services'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'vi'
              ? 'Từ grooming, spa, huấn luyện đến khách sạn 5 sao - chúng tôi có tất cả những gì bé cưng của bạn cần'
              : 'From grooming, spa, training to 5-star hotel - we have everything your pet needs'}
          </p>
        </div>
      </section>

      <ServicesSection />
      <CTASection />
    </div>
  );
};

export default ServicesPage;
