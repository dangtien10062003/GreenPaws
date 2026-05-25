import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesSection = () => {
  const { t, language } = useLanguage();
  const [activeService, setActiveService] = useState('grooming');

  const services = useMemo(
    () => [
      {
        id: 'grooming',
        icon: 'content_cut',
        image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=1200&h=700&fit=crop',
        badge: language === 'vi' ? 'Bán chạy' : 'Best Seller',
        title: language === 'vi' ? 'Grooming' : 'Grooming',
        description:
          language === 'vi'
            ? 'Tắm, sấy và chải tỉa chuẩn chỉnh giúp bé sạch sẽ - thơm tho - tự tin hơn mỗi ngày.'
            : 'Bath, dry and trim for a clean, fresh and confident pet every day.',
        steps: language === 'vi'
          ? ['Tắm sạch', 'Sấy khô', 'Cắt tỉa lông', 'Vệ sinh tai', 'Cắt móng']
          : ['Bath', 'Dry', 'Hair Trim', 'Ear Cleaning', 'Nail Trim'],
      },
      {
        id: 'spa',
        icon: 'spa',
        image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=700&fit=crop',
        badge: language === 'vi' ? 'Ưu đãi' : 'Special Offer',
        title: language === 'vi' ? 'Spa & Relax' : 'Spa & Relax',
        description:
          language === 'vi'
            ? 'Liệu trình thảo dược kết hợp massage thư giãn - giảm căng thẳng, phục hồi da lông.'
            : 'Herbal bath therapy with relaxing massage to soothe and restore skin & coat.',
        steps: language === 'vi'
          ? ['Tắm thảo dược', 'Massage thư giãn', 'Sấy khô', 'Vệ sinh tai', 'Dưỡng da lông']
          : ['Herbal Bath', 'Relaxing Massage', 'Dry', 'Ear Cleaning', 'Skin & Coat Care'],
      },
      {
        id: 'training',
        icon: 'school',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=700&fit=crop',
        badge: language === 'vi' ? 'Giá trị lâu dài' : 'Long-term Value',
        title: language === 'vi' ? 'Training' : 'Training',
        description:
          language === 'vi'
            ? 'Huấn luyện theo phương pháp tích cực - giúp bé hình thành thói quen tốt và hành vi đúng.'
            : 'Positive training to build good habits and correct behaviors.',
        steps: language === 'vi'
          ? ['Đánh giá hành vi', 'Luyện tập cơ bản', 'Xã hội hóa', 'Rèn kỹ năng', 'Theo dõi tiến độ']
          : ['Behavior Assessment', 'Basic Training', 'Socialization', 'Skill Building', 'Progress Tracking'],
      },
      {
        id: 'hotel',
        icon: 'hotel',
        image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&h=700&fit=crop',
        badge: language === 'vi' ? 'Chăm sóc 24/7' : '24/7 Care',
        title: language === 'vi' ? 'Pet Hotel' : 'Pet Hotel',
        description:
          language === 'vi'
            ? 'Không gian lưu trú sang trọng, yên tĩnh - theo dõi thường xuyên để bé luôn an tâm.'
            : 'Comfortable, calm and supervised stay so your pet feels safe.',
        steps: language === 'vi'
          ? ['Check-in', 'Phòng riêng tư', 'Chăm sóc 24/7', 'Vui chơi', 'Camera giám sát']
          : ['Check-in', 'Private Room', '24/7 Care', 'Playtime', 'Camera Monitoring'],
      },
    ],
    [language]
  );

  const active = services.find((s) => s.id === activeService) || services[0];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-white to-primary-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-primary-700/80">{t('services.subtitle')}</p>
        </div>

        {/* Layout hiện đại: Tabs + Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Tabs */}
          <div className="lg:col-span-4">
            <div className="bg-white/80 backdrop-blur rounded-3xl border border-primary-100 shadow-lg p-2">
              {services.map((s) => {
                const isActive = s.id === activeService;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveService(s.id)}
                    className={
                      'w-full text-left rounded-2xl px-4 py-4 flex items-center gap-3 transition-all ' +
                      (isActive
                        ? 'bg-gradient-to-r from-secondary-100 to-primary-100 ring-1 ring-primary-200'
                        : 'hover:bg-primary-50')
                    }
                    aria-pressed={isActive}
                  >
                    <div
                      className={
                        'w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ring-1 ring-primary-100 ' +
                        (isActive ? 'bg-white' : 'bg-white/60')
                      }
                    >
                      <span className="material-icons text-primary-600">{s.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <div className="font-semibold text-primary-900 truncate">{s.title}</div>
                        {s.badge ? (
                          <span className="hidden sm:inline-flex text-[11px] font-bold bg-secondary-400 text-white px-2 py-1 rounded-full">
                            {s.badge}
                          </span>
                        ) : null}
                      </div>
                      <div className="text-xs text-primary-700/70 mt-1 truncate">
                        {language === 'vi' ? 'Xem quy trình' : 'View process'}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* CTA nhanh */}
            <div className="mt-4">
              <Link
                to={`/service/${active.id}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-primary-500 hover:bg-primary-600 text-white font-semibold shadow-lg transition"
              >
                {language === 'vi' ? 'Xem chi tiết' : 'View details'}
                <span className="material-icons text-sm">chevron_right</span>
              </Link>
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-3xl border border-primary-100 shadow-xl bg-white">
              {/* Image (no text overlay) */}
              <div className="relative h-72 sm:h-80 lg:h-[22rem] overflow-hidden">
                <img src={active.image} alt={active.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>

              {/* Content below image */}
              <div className="px-6 py-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {active.badge ? (
                      <span className="inline-flex items-center bg-secondary-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                        {active.badge}
                      </span>
                    ) : null}
                    <div className="mt-3 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center">
                        <span className="material-icons text-primary-600">{active.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary-900">{active.title}</h3>
                    </div>
                    <p className="text-primary-700/80 mt-2">{active.description}</p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {active.steps.slice(0, 4).map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <span className="material-icons text-primary-500 text-base mt-0.5">check_circle</span>
                      <span className="text-primary-800/90">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <Link
                    to={`/service/${active.id}`}
                    className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-semibold transition"
                  >
                    {language === 'vi' ? 'Xem toàn bộ quy trình' : 'See full process'}
                    <span className="material-icons text-sm">chevron_right</span>
                  </Link>
                </div>
              </div>

              {/* Steps strip (modern) */}

              {/* Steps strip (modern) */}
              <div className="px-6 py-4 bg-white/60 backdrop-blur border-t border-primary-100">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-semibold text-primary-900">
                    {language === 'vi' ? 'Quy trình' : 'Process'}
                  </div>
                  <div className="text-xs text-primary-700/70">
                    {language === 'vi' ? 'Chạm tab để đổi dịch vụ' : 'Switch tabs to change service'}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.steps.map((step, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary-50 text-primary-800 text-xs font-semibold border border-primary-100"
                    >
                      <span className="material-icons text-primary-500 text-[14px]">check</span>
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

