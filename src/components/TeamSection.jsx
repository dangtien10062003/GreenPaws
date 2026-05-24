import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TeamSection = () => {
  const { language } = useLanguage();

  const team = [
    {
      name: language === 'vi' ? 'BS. Nguyễn Minh Anh' : 'Dr. Nguyen Minh Anh',
      role: language === 'vi' ? 'Bác sĩ thú y trưởng' : 'Chief Veterinarian',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
      specialty: language === 'vi' ? 'Chuyên khoa nội' : 'Internal Medicine',
      expertiseTags: [language === 'vi' ? 'Chuyên gia Poodle' : 'Poodle Expert', language === 'vi' ? 'Bác sĩ nội khoa' : 'Internal Medicine'],
      social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
      name: language === 'vi' ? 'Trần Văn Hùng' : 'Tran Van Hung',
      role: language === 'vi' ? 'Chuyên viên Grooming' : 'Grooming Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      specialty: language === 'vi' ? '10 năm kinh nghiệm' : '10 Years Experience',
      expertiseTags: [language === 'vi' ? 'Chuyên gia Golden' : 'Golden Expert', language === 'vi' ? 'Tạo kiểu chuyên nghiệp' : 'Professional Styling'],
      social: { facebook: '#', instagram: '#' }
    },
    {
      name: language === 'vi' ? 'Lê Thị Hương' : 'Le Thi Huong',
      role: language === 'vi' ? 'Huấn luyện viên' : 'Pet Trainer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      specialty: language === 'vi' ? 'Chứng chỉ quốc tế' : 'International Certificate',
      expertiseTags: [language === 'vi' ? 'Huấn luyện hành vi' : 'Behavior Training', language === 'vi' ? 'Chứng chỉ CPDT' : 'CPDT Certified'],
      social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
      name: language === 'vi' ? 'Phạm Đức Thắng' : 'Pham Duc Thang',
      role: language === 'vi' ? 'Chuyên viên Spa' : 'Spa Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      specialty: language === 'vi' ? 'Liệu pháp thảo dược' : 'Herbal Therapy',
      expertiseTags: [language === 'vi' ? 'Chuyên gia Spa' : 'Spa Expert', language === 'vi' ? 'Liệu pháp thảo dược' : 'Herbal Therapy'],
      social: { facebook: '#', instagram: '#' }
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-secondary-50/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-secondary-500 font-semibold text-sm uppercase tracking-wide">
            {language === 'vi' ? 'Đội ngũ của chúng tôi' : 'Our Team'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mt-4 mb-4">
            {language === 'vi' 
              ? 'Gặp gỡ các chuyên gia của chúng tôi'
              : 'Meet Our Experts'}
          </h2>
          <p className="text-lg text-primary-700/80">
            {language === 'vi'
              ? 'Đội ngũ chuyên gia giàu kinh nghiệm, tận tâm và yêu thương động vật'
              : 'Experienced, dedicated team who love animals'}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 border border-primary-100 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-center space-x-3">
                      {member.social.facebook && (
                        <a href={member.social.facebook} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-secondary-400 hover:text-white transition-colors">
                          <span className="material-icons text-sm">facebook</span>
                        </a>
                      )}
                      {member.social.instagram && (
                        <a href={member.social.instagram} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-secondary-400 hover:text-white transition-colors">
                          <span className="material-icons text-sm">camera_alt</span>
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-secondary-400 hover:text-white transition-colors">
                          <span className="material-icons text-sm">work</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-primary-700/80 mb-3">
                  {member.specialty}
                </p>
                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertiseTags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-secondary-50 text-primary-700 text-xs font-medium rounded-full border border-primary-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12 bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8 border border-primary-100">
          <p className="text-lg text-primary-700/85 max-w-3xl mx-auto">
            {language === 'vi'
              ? '💚 Tất cả thành viên trong đội ngũ của chúng tôi đều được đào tạo chuyên sâu và có chứng chỉ hành nghề. Chúng tôi không ngừng học hỏi và cập nhật kiến thức để mang đến dịch vụ tốt nhất cho thú cưng của bạn.'
              : '💚 All our team members are professionally trained and certified. We continuously learn and update our knowledge to provide the best service for your pets.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
