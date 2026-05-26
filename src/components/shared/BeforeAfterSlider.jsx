import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const BeforeAfterSlider = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const isDraggingRef = useRef(false);

  const beforeImage = '/700368813_122113049558777387_1895669214629912441_n.jpg';
  const afterImage = '/701281039_122113049528777387_1647336495771886830_n.jpg';

  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;
    if (!container || !slider) return;

    const rect = container.getBoundingClientRect();
    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const x = e.clientX - rect.left;
      const slidePercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      slider.style.left = slidePercent + '%';
      container.style.setProperty('--before-width', slidePercent + '%');
    };

    const onTouchMove = (e) => {
      if (!isDraggingRef.current) return;
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const slidePercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      slider.style.left = slidePercent + '%';
      container.style.setProperty('--before-width', slidePercent + '%');
    };

    const onPointerDown = (e) => {
      isDraggingRef.current = true;
      container.classList.add('dragging');
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
      container.classList.remove('dragging');
    };

    container.addEventListener('pointerdown', onPointerDown);
    container.addEventListener('pointermove', onMouseMove);
    container.addEventListener('pointerup', onPointerUp);
    container.addEventListener('pointerleave', onPointerUp);

    container.addEventListener('touchstart', onPointerDown);
    container.addEventListener('touchmove', onTouchMove);
    container.addEventListener('touchend', onPointerUp);

    // Initial 50%
    container.style.setProperty('--before-width', '50%');

    return () => {
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('pointermove', onMouseMove);
      container.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('pointerleave', onPointerUp);

      container.removeEventListener('touchstart', onPointerDown);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onPointerUp);
    };
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
            Before / After
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            {language === 'vi' ? 'Kết quả thực tế' : 'Real Results'}
          </h2>
          <p className="text-lg text-gray-600">
            {language === 'vi' ? 'Xem sự khác biệt rõ rệt sau khi sử dụng dịch vụ grooming của chúng tôi' : 'See the dramatic difference after our grooming services'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl shadow-2xl group">
    <div 
      ref={containerRef}
      className="before-after-slider h-96 lg:h-[500px] cursor-grab [active]:cursor-grabbing relative"
    >
            <img 
              src={beforeImage} 
              alt="Before" 
              className="before-image absolute inset-0 w-full h-full object-cover"
              style={{ clipPath: 'inset(0 50% 0 0)' }}
            />
            <img 
              src={afterImage} 
              alt="After" 
              className="after-image absolute inset-0 w-full h-full object-cover"
            />
            <div 
              ref={sliderRef}
              className="slider absolute top-1/2 left-[50%] transform -translate-y-1/2 w-1 h-full bg-white shadow-lg flex items-center justify-center z-10"
              style={{ left: '50%' }}
            >
              <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-100 -mr-3.5 relative">
                <span className="material-icons text-gray-600 text-sm">drag_handle</span>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
            <div className="labels absolute inset-0 flex items-center justify-between px-8 lg:px-12 pointer-events-none z-20">
              <span className="bg-black/80 text-white px-4 py-2 rounded-r-full text-sm font-medium shadow-lg">
                Trước
              </span>
              <span className="bg-black/80 text-white px-4 py-2 rounded-l-full text-sm font-medium shadow-lg">
                Sau
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-2xl border border-primary-200">
            <span className="material-icons text-primary-600 text-3xl mb-3">verified</span>
            <p className="font-semibold text-gray-900">{language === 'vi' ? 'Kết quả thực tế 100%' : '100% Real Results'}</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-2xl border border-primary-200">
            <span className="material-icons text-primary-600 text-3xl mb-3">thumb_up</span>
            <p className="font-semibold text-gray-900">{language === 'vi' ? 'Hài lòng tuyệt đối' : '100% Satisfaction'}</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-2xl border border-primary-200">
            <span className="material-icons text-primary-600 text-3xl mb-3">local_hospital</span>
            <p className="font-semibold text-gray-900">{language === 'vi' ? 'An toàn tuyệt đối' : 'Absolutely Safe'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;

