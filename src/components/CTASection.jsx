import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const CTASection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-16 -left-10 w-60 h-60 bg-primary-100/60 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-secondary-100/60 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm border border-primary-100 rounded-3xl shadow-[0_20px_60px_-30px_rgba(30,58,138,0.35)] p-8 sm:p-10 lg:p-12 text-center">
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center">
              <span className="material-icons text-3xl">pets</span>
            </div>
          </div>

          <p className="text-primary-600 font-semibold tracking-wide uppercase text-xs sm:text-sm mb-3">
            {language === 'vi' ? 'Đặt lịch nhanh cho bé cưng' : 'Quick booking for your pet'}
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {t('cta.title')}
          </h2>

          <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 shadow-md hover:shadow-xl font-semibold"
            >
              {t('cta.button')}
              <span className="material-icons ml-2 text-[20px]">arrow_forward</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-primary-200 text-primary-700 hover:bg-primary-50 transition-all duration-300 font-semibold"
            >
              {language === 'vi' ? 'Liên hệ tư vấn' : 'Contact Consultation'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
