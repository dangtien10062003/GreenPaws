import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const CTASection = () => {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 7);
      
      const difference = endDate - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(language === 'vi' ? 'Cảm ơn bạn đã đăng ký!' : 'Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-500 to-primary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <span className="material-icons text-white text-3xl">pets</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t('cta.title')}
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-primary-50 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>

          {/* Limited Offer Countdown */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
            <p className="text-white font-semibold mb-4 text-center">
              {language === 'vi' ? '⏰ Ưu đãi kết thúc sau:' : '⏰ Offer ends in:'}
            </p>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-2">
                  <p className="text-3xl font-bold text-white">{timeLeft.days}</p>
                </div>
                <p className="text-white/80 text-sm">{language === 'vi' ? 'Ngày' : 'Days'}</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-2">
                  <p className="text-3xl font-bold text-white">{timeLeft.hours}</p>
                </div>
                <p className="text-white/80 text-sm">{language === 'vi' ? 'Giờ' : 'Hours'}</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-2">
                  <p className="text-3xl font-bold text-white">{timeLeft.minutes}</p>
                </div>
                <p className="text-white/80 text-sm">{language === 'vi' ? 'Phút' : 'Minutes'}</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-2">
                  <p className="text-3xl font-bold text-white">{timeLeft.seconds}</p>
                </div>
                <p className="text-white/80 text-sm">{language === 'vi' ? 'Giây' : 'Seconds'}</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 rounded-full hover:bg-secondary-50 transition-all shadow-xl hover:shadow-2xl font-semibold text-lg transform hover:scale-105"
            >
              {t('cta.button')}
              <span className="material-icons ml-2">arrow_forward</span>
            </Link>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <p className="text-white/90 mb-3 text-center">
              {language === 'vi' ? '📧 Nhận mẹo chăm sóc thú cưng mỗi tuần' : '📧 Get weekly pet care tips'}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === 'vi' ? 'Nhập email của bạn' : 'Enter your email'}
                className="flex-1 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-secondary-500 text-white rounded-full hover:bg-secondary-600 transition-colors font-semibold whitespace-nowrap"
              >
                {language === 'vi' ? 'Đăng ký' : 'Subscribe'}
              </button>
            </form>
          </div>

          {/* Trust Badges */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-4xl mx-auto border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="material-icons text-white text-2xl">verified</span>
                </div>
                <p className="text-white/90 text-sm font-medium">
                  {language === 'vi' ? 'Chứng nhận vệ sinh' : 'Hygiene Certified'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="material-icons text-white text-2xl">local_hospital</span>
                </div>
                <p className="text-white/90 text-sm font-medium">
                  {language === 'vi' ? 'Tiêu chuẩn y tế' : 'Medical Standard'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="material-icons text-white text-2xl">security</span>
                </div>
                <p className="text-white/90 text-sm font-medium">
                  {language === 'vi' ? 'An toàn 100%' : '100% Safe'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="material-icons text-white text-2xl">payment</span>
                </div>
                <p className="text-white/90 text-sm font-medium">
                  {language === 'vi' ? 'Thanh toán đa dạng' : 'Multiple Payments'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
