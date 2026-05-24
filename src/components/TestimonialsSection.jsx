import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: language === 'vi' 
        ? 'Green Paws thực sự khác biệt. Không gian ở đây rất thoáng và sạch, nhân viên chăm sóc bé nhà mình vô cùng tận tình. Từ khi sử dụng gói Spa thảo dược, bé luôn khỏe mạnh và vui vẻ hơn hẳn.'
        : 'Green Paws is truly different. The space here is very airy and clean, the staff takes care of my pet very attentively. Since using the herbal Spa package, my pet has been much healthier and happier.',
      author: language === 'vi' ? 'Chị Minh Anh' : 'Ms. Minh Anh',
      authorDetail: language === 'vi' ? 'Chủ của bé Poodle "Bông"' : 'Owner of Poodle "Bông"',
      petImage: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=400&h=400&fit=crop',
      verified: true
    },
    {
      quote: language === 'vi'
        ? 'Dịch vụ khách sạn thú cưng tuyệt vời! Bé nhà mình được chăm sóc chu đáo, tôi có thể xem bé qua camera mọi lúc. Rất yên tâm khi đi công tác xa.'
        : 'Excellent pet hotel service! My pet was well taken care of, I could watch him via camera anytime. Very reassuring when traveling for work.',
      author: language === 'vi' ? 'Anh Tuấn Anh' : 'Mr. Tuan Anh',
      authorDetail: language === 'vi' ? 'Chủ của bé Golden "Max"' : 'Owner of Golden "Max"',
      petImage: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400&h=400&fit=crop',
      verified: true
    },
    {
      quote: language === 'vi'
        ? 'Huấn luyện viên rất chuyên nghiệp và kiên nhẫn. Bé nhà mình từ chỗ không nghe lời giờ đã biết ngồi, nằm và đi theo lệnh. Cảm ơn Green Paws rất nhiều!'
        : 'The trainer is very professional and patient. My pet went from not listening to knowing how to sit, lie down and follow commands. Thank you Green Paws so much!',
      author: language === 'vi' ? 'Chị Thu Hà' : 'Ms. Thu Ha',
      authorDetail: language === 'vi' ? 'Chủ của bé Corgi "Milo"' : 'Owner of Corgi "Milo"',
      petImage: 'https://images.unsplash.com/photo-1612536982603-dc9e0d8e5a9c?w=400&h=400&fit=crop',
      verified: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-tertiary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl shadow-lg px-8 py-6 inline-flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-secondary-200 border-2 border-white flex items-center justify-center"
                >
                  <span className="material-icons text-secondary-600 text-sm">pets</span>
                </div>
              ))}
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{t('testimonials.stats')}</p>
            </div>
          </div>
        </div>

        {/* Testimonial Card with Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="material-icons text-white">format_quote</span>
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="material-icons text-yellow-400 text-2xl">
                  star
                </span>
              ))}
            </div>

            {/* Pet Photo */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img 
                  src={currentTestimonial.petImage} 
                  alt="Pet" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary-100 shadow-lg"
                />
                {currentTestimonial.verified && (
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center border-2 border-white">
                    <span className="material-icons text-white text-sm">verified</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-center mb-8">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                "{currentTestimonial.quote}"
              </p>
            </blockquote>

            {/* Verified Badge */}
            {currentTestimonial.verified && (
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                  <span className="material-icons text-sm mr-2">verified</span>
                  {language === 'vi' ? 'Khách hàng đã trải nghiệm' : 'Verified Customer'}
                </span>
              </div>
            )}

            {/* Author */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-center">
                <p className="font-bold text-gray-900 text-lg">{currentTestimonial.author}</p>
                <p className="text-sm text-gray-600">{currentTestimonial.authorDetail}</p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary-500 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
          >
            <span className="material-icons">chevron_left</span>
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
          >
            <span className="material-icons">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
