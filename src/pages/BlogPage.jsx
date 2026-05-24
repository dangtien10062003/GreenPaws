import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const BlogPage = () => {
  const { language } = useLanguage();

  const blogPosts = [
    {
      id: '1',
      title: language === 'vi' ? '10 Mẹo Chăm Sóc Lông Cho Chó Mèo' : '10 Tips for Pet Grooming',
      excerpt: language === 'vi' 
        ? 'Khám phá những bí quyết giúp lông thú cưng của bạn luôn mềm mại và bóng khỏe...'
        : 'Discover secrets to keep your pet\'s fur soft and healthy...',
      image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&h=400&fit=crop',
      category: 'Grooming',
      date: '15/12/2024',
      author: language === 'vi' ? 'BS. Nguyễn Minh Anh' : 'Dr. Nguyen Minh Anh',
    },
    {
      id: '2',
      title: language === 'vi' ? 'Lợi Ích Của Spa Thảo Dược Cho Thú Cưng' : 'Benefits of Herbal Spa for Pets',
      excerpt: language === 'vi'
        ? 'Tìm hiểu về những lợi ích tuyệt vời của liệu pháp spa thảo dược...'
        : 'Learn about the amazing benefits of herbal spa therapy...',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop',
      category: 'Spa',
      date: '12/12/2024',
      author: language === 'vi' ? 'Phạm Đức Thắng' : 'Pham Duc Thang',
    },
    {
      id: '3',
      title: language === 'vi' ? 'Cách Huấn Luyện Chó Con Hiệu Quả' : 'Effective Puppy Training Methods',
      excerpt: language === 'vi'
        ? 'Những phương pháp huấn luyện tích cực giúp chó con phát triển tốt...'
        : 'Positive training methods to help puppies develop well...',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop',
      category: 'Training',
      date: '10/12/2024',
      author: language === 'vi' ? 'Lê Thị Hương' : 'Le Thi Huong',
    },
    {
      id: '4',
      title: language === 'vi' ? 'Chuẩn Bị Gì Khi Gửi Thú Cưng Vào Khách Sạn?' : 'What to Prepare for Pet Hotel?',
      excerpt: language === 'vi'
        ? 'Danh sách những thứ cần thiết khi gửi bé cưng vào khách sạn...'
        : 'Checklist of essentials when boarding your pet...',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=400&fit=crop',
      category: 'Hotel',
      date: '08/12/2024',
      author: 'Green Paws Team',
    },
    {
      id: '5',
      title: language === 'vi' ? 'Dinh Dưỡng Cân Bằng Cho Thú Cưng' : 'Balanced Nutrition for Pets',
      excerpt: language === 'vi'
        ? 'Hướng dẫn chi tiết về chế độ dinh dưỡng phù hợp cho từng loại thú cưng...'
        : 'Detailed guide on proper nutrition for different types of pets...',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=400&fit=crop',
      category: language === 'vi' ? 'Sức khỏe' : 'Health',
      date: '05/12/2024',
      author: language === 'vi' ? 'BS. Nguyễn Minh Anh' : 'Dr. Nguyen Minh Anh',
    },
    {
      id: '6',
      title: language === 'vi' ? 'Dấu Hiệu Thú Cưng Cần Đi Khám Ngay' : 'Signs Your Pet Needs Immediate Care',
      excerpt: language === 'vi'
        ? 'Những dấu hiệu cảnh báo bạn cần đưa thú cưng đi khám ngay lập tức...'
        : 'Warning signs that you need to take your pet to the vet immediately...',
      image: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=600&h=400&fit=crop',
      category: language === 'vi' ? 'Sức khỏe' : 'Health',
      date: '01/12/2024',
      author: language === 'vi' ? 'BS. Nguyễn Minh Anh' : 'Dr. Nguyen Minh Anh',
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
            {language === 'vi' ? 'Blog & Kiến thức' : 'Blog & Knowledge'}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
            {language === 'vi' 
              ? 'Kiến thức chăm sóc thú cưng'
              : 'Pet Care Knowledge'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'vi'
              ? 'Chia sẻ kinh nghiệm và kiến thức hữu ích từ các chuyên gia'
              : 'Sharing useful experience and knowledge from experts'}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span className="material-icons text-sm mr-1">calendar_today</span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary-600 font-medium">
                    {language === 'vi' ? 'Đọc thêm' : 'Read more'}
                    <span className="material-icons text-sm ml-1 group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 space-x-2">
            <button className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-primary-100 flex items-center justify-center transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-primary-100 flex items-center justify-center transition-colors">
              3
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
