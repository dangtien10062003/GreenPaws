import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQSection = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: language === 'vi' ? 'Làm thế nào để đặt lịch dịch vụ?' : 'How to book a service?',
      answer: language === 'vi' 
        ? 'Bạn có thể đặt lịch trực tuyến qua website, gọi hotline 1900 888 666, hoặc đến trực tiếp cơ sở của chúng tôi. Chúng tôi khuyến khích đặt lịch trước để đảm bảo có chỗ.'
        : 'You can book online via website, call hotline 1900 888 666, or visit our facility directly. We recommend booking in advance to ensure availability.',
    },
    {
      question: language === 'vi' ? 'Thú cưng của tôi cần chuẩn bị gì trước khi sử dụng dịch vụ?' : 'What should my pet prepare before using the service?',
      answer: language === 'vi'
        ? 'Đối với dịch vụ grooming và spa, bạn không cần chuẩn bị gì đặc biệt. Đối với khách sạn, vui lòng mang theo sổ tiêm chủng đầy đủ và thức ăn quen thuộc của bé (nếu có).'
        : 'For grooming and spa services, no special preparation is needed. For hotel services, please bring complete vaccination records and your pet\'s familiar food (if any).',
    },
    {
      question: language === 'vi' ? 'Giá dịch vụ có bao gồm thuế chưa?' : 'Does the service price include tax?',
      answer: language === 'vi'
        ? 'Tất cả giá dịch vụ trên website đã bao gồm VAT. Không có phí phát sinh thêm trừ khi bạn yêu cầu dịch vụ bổ sung.'
        : 'All service prices on the website include VAT. There are no additional fees unless you request additional services.',
    },
    {
      question: language === 'vi' ? 'Tôi có thể xem thú cưng của mình khi ở khách sạn không?' : 'Can I see my pet while at the hotel?',
      answer: language === 'vi'
        ? 'Có, chúng tôi có hệ thống camera giám sát 24/7. Bạn sẽ nhận được link để xem bé cưng của mình mọi lúc mọi nơi qua điện thoại hoặc máy tính.'
        : 'Yes, we have a 24/7 camera monitoring system. You will receive a link to watch your pet anytime, anywhere via phone or computer.',
    },
    {
      question: language === 'vi' ? 'Nếu thú cưng của tôi bị ốm trong lúc ở khách sạn thì sao?' : 'What if my pet gets sick while at the hotel?',
      answer: language === 'vi'
        ? 'Chúng tôi có bác sĩ thú y trực 24/7. Nếu bé có dấu hiệu bất thường, chúng tôi sẽ liên hệ với bạn ngay lập tức và tiến hành xử lý y tế kịp thời.'
        : 'We have veterinarians on duty 24/7. If your pet shows any abnormal signs, we will contact you immediately and provide timely medical treatment.',
    },
    {
      question: language === 'vi' ? 'Chính sách hủy lịch như thế nào?' : 'What is the cancellation policy?',
      answer: language === 'vi'
        ? 'Bạn có thể hủy hoặc đổi lịch miễn phí nếu thông báo trước 24 giờ. Hủy trong vòng 24 giờ sẽ bị tính phí 50% giá trị dịch vụ.'
        : 'You can cancel or reschedule for free if you notify 24 hours in advance. Cancellations within 24 hours will be charged 50% of the service value.',
    },
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Content */}
          <div className="lg:sticky lg:top-24">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              {language === 'vi' ? 'Câu hỏi thường gặp' : 'FAQ'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
              {language === 'vi' 
                ? 'Có câu hỏi? Chúng tôi có câu trả lời!'
                : 'Have Questions? We Have Answers!'}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {language === 'vi'
                ? 'Dưới đây là những câu hỏi thường gặp từ khách hàng. Nếu bạn có thắc mắc khác, đừng ngần ngại liên hệ với chúng tôi.'
                : 'Below are frequently asked questions from customers. If you have other questions, don\'t hesitate to contact us.'}
            </p>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-white">support_agent</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {language === 'vi' ? 'Vẫn cần hỗ trợ?' : 'Still Need Help?'}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {language === 'vi'
                      ? 'Không tìm thấy câu trả lời?'
                      : 'Can\'t find the answer?'}
                  </p>
                  <p className="text-gray-900 font-semibold mb-4">
                    {language === 'vi' ? 'Gọi ngay Hotline:' : 'Call Hotline:'} <a href="tel:1900888666" className="text-primary-600">1900 888 666</a>
                  </p>
                  <button className="inline-flex items-center px-6 py-2.5 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors font-medium">
                    <span className="material-icons text-sm mr-2">chat</span>
                    {language === 'vi' ? 'Chat ngay' : 'Chat Now'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right - FAQ Accordion with Search */}
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder={language === 'vi' ? 'Tìm kiếm câu hỏi...' : 'Search questions...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3.5 pl-12 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:outline-none"
              />
              <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                search
              </span>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-primary-300 transition-colors"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <span className="font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <span className={`material-icons text-primary-600 flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}>
                        expand_more
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-500">
                  {language === 'vi' ? 'Không tìm thấy câu hỏi phù hợp' : 'No matching questions found'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
