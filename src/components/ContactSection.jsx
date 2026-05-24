import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkWorkingHours = () => {
      const now = new Date();
      const hour = now.getHours();
      setIsOpen(hour >= 8 && hour < 20);
    };
    
    checkWorkingHours();
    const interval = setInterval(checkWorkingHours, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(language === 'vi' ? 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.' : 'Thank you for contacting us! We will respond soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'location_on',
      title: language === 'vi' ? 'Địa chỉ' : 'Address',
      content: '123 Đường Thảo Điền, Quận 2, TP. Hồ Chí Minh',
    },
    {
      icon: 'call',
      title: language === 'vi' ? 'Hotline' : 'Hotline',
      content: '1900 888 666',
      link: 'tel:1900888666',
    },
    {
      icon: 'mail',
      title: 'Email',
      content: 'hello@greenpaws.vn',
      link: 'mailto:hello@greenpaws.vn',
    },
    {
      icon: 'schedule',
      title: language === 'vi' ? 'Giờ làm việc' : 'Working Hours',
      content: language === 'vi' ? 'T2 - CN: 8:00 - 20:00' : 'Mon - Sun: 8:00 - 20:00',
      status: isOpen ? (language === 'vi' ? 'Đang mở cửa' : 'Open Now') : (language === 'vi' ? 'Đã đóng cửa' : 'Closed'),
      statusColor: isOpen ? 'text-green-600' : 'text-red-600'
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
            {language === 'vi' ? 'Liên hệ' : 'Contact'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4">
            {language === 'vi' 
              ? 'Hãy kết nối với chúng tôi'
              : 'Get In Touch With Us'}
          </h2>
          <p className="text-lg text-gray-600">
            {language === 'vi'
              ? 'Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn'
              : 'We are always ready to listen and support you'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-primary-600">{info.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <>
                        <p className="text-gray-600">{info.content}</p>
                        {info.status && (
                          <p className={`text-sm font-semibold mt-1 flex items-center ${info.statusColor}`}>
                            <span className="w-2 h-2 rounded-full bg-current mr-2 animate-pulse"></span>
                            {info.status}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media Hub */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">
                {language === 'vi' ? 'Kết nối với chúng tôi' : 'Connect With Us'}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <a href="#" className="flex flex-col items-center p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors group">
                  <span className="material-icons text-primary-600 mb-1 group-hover:scale-110 transition-transform">facebook</span>
                  <span className="text-xs text-gray-700">Facebook</span>
                </a>
                <a href="#" className="flex flex-col items-center p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors group">
                  <span className="material-icons text-primary-600 mb-1 group-hover:scale-110 transition-transform">chat</span>
                  <span className="text-xs text-gray-700">Zalo</span>
                </a>
                <a href="#" className="flex flex-col items-center p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors group">
                  <span className="material-icons text-primary-600 mb-1 group-hover:scale-110 transition-transform">message</span>
                  <span className="text-xs text-gray-700">Messenger</span>
                </a>
                <a href="#" className="flex flex-col items-center p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors group">
                  <span className="material-icons text-primary-600 mb-1 group-hover:scale-110 transition-transform">camera_alt</span>
                  <span className="text-xs text-gray-700">Instagram</span>
                </a>
                <a href="#" className="flex flex-col items-center p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors group">
                  <span className="material-icons text-primary-600 mb-1 group-hover:scale-110 transition-transform">video_library</span>
                  <span className="text-xs text-gray-700">TikTok</span>
                </a>
                <a href="#" className="flex flex-col items-center p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors group">
                  <span className="material-icons text-primary-600 mb-1 group-hover:scale-110 transition-transform">play_circle</span>
                  <span className="text-xs text-gray-700">YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {language === 'vi' ? 'Họ và tên' : 'Full Name'} *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {language === 'vi' ? 'Số điện thoại' : 'Phone Number'} *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {language === 'vi' ? 'Chủ đề' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {language === 'vi' ? 'Nội dung' : 'Message'} *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors font-semibold shadow-lg hover:shadow-xl"
              >
                <span className="material-icons text-sm align-middle mr-2">send</span>
                {language === 'vi' ? 'Gửi tin nhắn' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Dark Mode */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl h-96 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1258964793!2d106.73076931533417!3d10.803614161678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5f3da654f629!2zVGjhuqNvIMSQaeG7gW4sIFF14bqtbiAyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1234567890&style=feature:all|element:geometry|color:0x242f3e&style=feature:all|element:labels.text.stroke|color:0x242f3e&style=feature:all|element:labels.text.fill|color:0x746855&style=feature:water|element:geometry|color:0x17263c"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
            allowFullScreen=""
            loading="lazy"
            title="Green Paws Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
