import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesSection = () => {
  const { t, language } = useLanguage();
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'grooming',
      icon: 'content_cut',
      image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&h=400&fit=crop',
      badge: language === 'vi' ? 'Bán chạy' : 'Best Seller',
      steps: language === 'vi'
        ? ['Tắm sạch', 'Sấy khô', 'Cắt tỉa lông', 'Vệ sinh tai', 'Cắt móng']
        : ['Bath', 'Dry', 'Hair Trim', 'Ear Cleaning', 'Nail Trim']
    },
    {
      id: 'spa',
      icon: 'spa',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop',
      badge: language === 'vi' ? 'Ưu đãi' : 'Special Offer',
      steps: language === 'vi'
        ? ['Tắm thảo dược', 'Massage thư giãn', 'Sấy khô', 'Vệ sinh tai', 'Dưỡng da lông']
        : ['Herbal Bath', 'Relaxing Massage', 'Dry', 'Ear Cleaning', 'Skin & Coat Care']
    },
    {
      id: 'training',
      icon: 'school',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop',
      steps: language === 'vi'
        ? ['Đánh giá hành vi', 'Luyện tập cơ bản', 'Xã hội hóa', 'Rèn kỹ năng', 'Theo dõi tiến độ']
        : ['Behavior Assessment', 'Basic Training', 'Socialization', 'Skill Building', 'Progress Tracking']
    },
    {
      id: 'hotel',
      icon: 'hotel',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=400&fit=crop',
      steps: language === 'vi'
        ? ['Check-in', 'Phòng riêng tư', 'Chăm sóc 24/7', 'Vui chơi', 'Camera giám sát']
        : ['Check-in', 'Private Room', '24/7 Care', 'Playtime', 'Camera Monitoring']
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-white to-primary-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-primary-700/80">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isActive = activeService === service.id;

            return (
            <div
              key={service.id}
              id={service.id}
              className="group bg-white/95 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary-100 animate-fade-up"
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={t(`services.${service.id}.title`)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent"></div>

                {service.badge && (
                  <div className="absolute top-4 right-4 bg-secondary-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {service.badge}
                  </div>
                )}

                <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-lg ring-1 ring-primary-100">
                  <span className="material-icons text-primary-500">{service.icon}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveService(isActive ? null : service.id)}
                  className={`absolute left-4 right-4 bottom-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md text-left transition-all duration-500 ${
                    isActive ? 'ring-2 ring-primary-300' : 'hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-primary-700 text-xs sm:text-sm font-semibold">
                      {language === 'vi' ? 'Xem quy trình' : 'View process'}
                    </span>
                    <span className={`material-icons text-primary-600 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </div>
                </button>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary-800">
                  {t(`services.${service.id}.title`)}
                </h3>

                {isActive ? (
                  <ul className="space-y-2 text-sm">
                    {service.steps.map((step, idx) => (
                      <li key={idx} className="flex items-center text-primary-700/90">
                        <span className="material-icons text-primary-500 text-xs mr-2">check_circle</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-primary-700/80 text-sm leading-relaxed">
                    {t(`services.${service.id}.description`)}
                  </p>
                )}

                <Link
                  to={`/service/${service.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm transition-all duration-300 group-hover:translate-x-1"
                >
                  {t(`services.${service.id}.learnMore`)}
                  <span className="material-icons text-sm ml-1">chevron_right</span>
                </Link>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
