import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-secondary-300 via-primary-400 to-primary-500 overflow-hidden">
      {/* Organic blob shapes background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-24 relative z-10 max-w-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-ambient ring-1 ring-white/60">
              <span className="material-icons text-primary-600 text-sm">verified</span>
              <span className="text-label-sm text-primary-700 uppercase">
                {t('hero.badge')}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-h1 font-heading font-bold text-white leading-tight drop-shadow-lg">
              {language === 'vi' ? 'Nơi Lan Tỏa Yêu Thương Cho Boss' : 'Where Love Spreads For Your Boss'}
            </h1>

            {/* Sub-headline */}
            <p className="text-body-lg text-white/95 leading-relaxed max-w-xl drop-shadow">
              {t('hero.description')}
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg hover:bg-secondary-50 transition-all shadow-ambient-lg hover:shadow-ambient font-semibold group transform hover:scale-105 ring-2 ring-white/50"
              >
                {language === 'vi' ? 'Đặt lịch ngay' : 'Book Now'}
                <span className="material-icons ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all shadow-lg font-semibold border-2 border-white/80 backdrop-blur-sm"
              >
                {t('hero.exploreServices')}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl px-6 py-4 inline-flex items-center space-x-4 border border-white/40 shadow-lg">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-icons text-secondary-100 text-xl drop-shadow">
                    star
                  </span>
                ))}
              </div>
              <div className="border-l border-white/30 pl-4">
                <p className="text-white font-bold text-lg">10.000+</p>
                <p className="text-white/90 text-sm">{language === 'vi' ? 'Khách hàng tin tưởng' : 'Trusted Customers'}</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-ambient-lg border-4 border-white/30">
              <img
                src="/701941717_122113049522777387_9074954875320149734_n.jpg"
                alt="Happy pet at Green Paws"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-ambient-lg p-6 max-w-xs animate-bounce-slow ring-1 ring-primary-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-primary-500 rounded-lg flex items-center justify-center">
                  <span className="material-icons text-white">pets</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">2,500+</p>
                  <p className="text-sm text-neutral-700">{t('testimonials.stats')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;
