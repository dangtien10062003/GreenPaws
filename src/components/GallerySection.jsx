import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const GallerySection = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState(null);

  const categories = [
    { id: 'all', label: language === 'vi' ? 'Tất cả' : 'All' },
    { id: 'grooming', label: 'Grooming' },
    { id: 'spa', label: 'Spa' },
    { id: 'training', label: 'Training' },
    { id: 'hotel', label: 'Hotel' },
  ];

  const gallery = [
    { type: 'image', src: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&h=400&fit=crop', category: 'grooming' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop', category: 'spa' },
    { type: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop', category: 'training' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=400&fit=crop', category: 'hotel' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop', category: 'grooming' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=400&fit=crop', category: 'spa' },
    { type: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=600&h=400&fit=crop', category: 'training' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?w=600&h=400&fit=crop', category: 'hotel' },
  ];

  const filteredGallery = activeCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory);

  const openLightbox = (item) => {
    setLightboxContent(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxContent(null);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-secondary-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary-500 font-semibold text-sm uppercase tracking-wide">
            {language === 'vi' ? 'Thư viện hình ảnh' : 'Gallery'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mt-4 mb-4">
            {language === 'vi' 
              ? 'Khoảnh khắc hạnh phúc tại Green Paws'
              : 'Happy Moments at Green Paws'}
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-primary-700/85 hover:bg-secondary-50 hover:text-primary-600 border border-primary-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-primary-100 bg-white/90"
              onClick={() => openLightbox(item)}
            >
              <img
                src={item.type === 'video' ? item.thumbnail : item.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-xl ring-1 ring-primary-100">
                    <span className="material-icons text-primary-600 text-3xl">play_arrow</span>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <button className="bg-white text-primary-600 px-6 py-2 rounded-full font-medium hover:bg-secondary-400 hover:text-white transition-colors">
                  <span className="material-icons text-sm align-middle mr-1">zoom_in</span>
                  {language === 'vi' ? 'Xem' : 'View'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && lightboxContent && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={closeLightbox}
            >
              <span className="material-icons">close</span>
            </button>
            <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              {lightboxContent.type === 'video' ? (
                <div className="aspect-video">
                  <iframe
                    src={lightboxContent.src}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                    title="Video"
                  />
                </div>
              ) : (
                <img 
                  src={lightboxContent.src} 
                  alt="Lightbox" 
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
              )}
            </div>
          </div>
        )}

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-white text-primary-600 rounded-full hover:bg-secondary-400 hover:text-white transition-all shadow-md hover:shadow-lg font-medium border-2 border-primary-200">
            {language === 'vi' ? 'Xem thêm' : 'Load More'}
            <span className="material-icons ml-2">expand_more</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
