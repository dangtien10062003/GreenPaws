import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { t, language } = useLanguage();
  const [counters, setCounters] = useState({ years: 0, experts: 0, awards: 0, satisfaction: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about-stats');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        years: Math.floor(5 * progress),
        experts: Math.floor(20 * progress),
        awards: Math.floor(50 * progress),
        satisfaction: Math.floor(100 * progress)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  const stats = [
    { icon: 'schedule', number: `${counters.years}+`, label: language === 'vi' ? 'Năm kinh nghiệm' : 'Years Experience' },
    { icon: 'groups', number: `${counters.experts}+`, label: language === 'vi' ? 'Chuyên gia' : 'Experts' },
    { icon: 'emoji_events', number: `${counters.awards}+`, label: language === 'vi' ? 'Giải thưởng' : 'Awards' },
    { icon: 'favorite', number: `${counters.satisfaction}%`, label: language === 'vi' ? 'Tận tâm' : 'Dedication' },
  ];

  return (
    <section className="py-xl bg-white texture-overlay">
      <div className="container mx-auto px-6 lg:px-8 max-w-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Interactive Mosaic Grid */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-3">
              {/* Row 1 */}
              <div className="col-span-7 h-48 rounded-xl overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=500&h=300&fit=crop"
                  alt="Pet care"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5 h-48 rounded-xl overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=300&h=300&fit=crop"
                  alt="Happy pets"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Row 2 */}
              <div className="col-span-5 h-56 rounded-xl overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=300&h=400&fit=crop"
                  alt="Pet grooming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-7 h-56 rounded-xl overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&h=400&fit=crop"
                  alt="Pet hotel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Signature */}
            <div className="absolute -bottom-8 right-4 bg-white rounded-lg shadow-ambient-lg p-4 border border-tertiary-200">
              <p className="text-xs text-neutral-700 mb-1">{language === 'vi' ? 'Người sáng lập' : 'Founder'}</p>
              <div className="font-signature text-2xl text-primary-600">Green Paws Team</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-primary-600 font-semibold text-label-sm uppercase">
                {language === 'vi' ? 'Về chúng tôi' : 'About Us'}
              </span>
            </div>
            
            <h2 className="text-h2 font-heading font-bold text-neutral-900 leading-tight">
              {language === 'vi' 
                ? 'Hệ sinh thái chăm sóc thú cưng hàng đầu Việt Nam'
                : "Vietnam's Leading Pet Care Ecosystem"}
            </h2>

            <p className="text-body-lg text-neutral-700 leading-relaxed">
              {language === 'vi'
                ? 'Green Paws không chỉ là nơi cung cấp dịch vụ chăm sóc thú cưng, mà còn là ngôi nhà thứ hai của các bé cưng. Với đội ngũ chuyên gia giàu kinh nghiệm và trang thiết bị hiện đại, chúng tôi cam kết mang đến trải nghiệm tốt nhất cho thú cưng của bạn.'
                : "Green Paws is not just a pet care service provider, but a second home for your beloved pets. With our experienced team and modern facilities, we are committed to providing the best experience for your pets."}
            </p>

            <p className="text-body-lg text-neutral-700 leading-relaxed">
              {language === 'vi'
                ? 'Từ grooming, spa, huấn luyện đến khách sạn 5 sao, mọi dịch vụ đều được thực hiện với tình yêu thương và sự chuyên nghiệp cao nhất. Chúng tôi hiểu rằng thú cưng là thành viên trong gia đình, và chúng xứng đáng được chăm sóc tốt nhất.'
                : 'From grooming, spa, training to 5-star hotel services, everything is done with love and the highest professionalism. We understand that pets are family members, and they deserve the best care.'}
            </p>

            {/* Stats Counter */}
            <div id="about-stats" className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-ambient">
                    <span className="material-icons text-white text-2xl">{stat.icon}</span>
                  </div>
                  <p className="text-3xl font-bold text-primary-600 mb-1">{stat.number}</p>
                  <p className="text-sm text-neutral-700 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
