import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import CTASection from '../components/CTASection';

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const { language } = useLanguage();

  // Mock blog data
  const blog = {
    title: language === 'vi' ? '10 Mẹo Chăm Sóc Lông Cho Chó Mèo' : '10 Tips for Pet Grooming',
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=1200&h=600&fit=crop',
    category: 'Grooming',
    date: '15/12/2024',
    author: language === 'vi' ? 'BS. Nguyễn Minh Anh' : 'Dr. Nguyen Minh Anh',
    content: language === 'vi' 
      ? `
        <p>Chăm sóc lông cho thú cưng không chỉ giúp bé trông đẹp mắt mà còn đảm bảo sức khỏe tổng thể. Dưới đây là 10 mẹo hữu ích từ các chuyên gia của Green Paws.</p>
        
        <h2>1. Chải lông đều đặn</h2>
        <p>Chải lông hàng ngày giúp loại bỏ lông rụng, bụi bẩn và kích thích tuần hoàn máu. Đối với chó lông dài, nên chải 2 lần/ngày.</p>
        
        <h2>2. Tắm đúng cách</h2>
        <p>Không nên tắm quá thường xuyên vì có thể làm khô da. Tần suất lý tưởng là 2-4 tuần/lần tùy giống.</p>
        
        <h2>3. Sử dụng sản phẩm phù hợp</h2>
        <p>Chọn dầu gội chuyên dụng cho thú cưng, tránh dùng dầu gội người vì độ pH khác nhau.</p>
        
        <h2>4. Cắt tỉa định kỳ</h2>
        <p>Đưa bé đến salon chuyên nghiệp 6-8 tuần/lần để cắt tỉa và tạo kiểu.</p>
        
        <h2>5. Chú ý vùng nhạy cảm</h2>
        <p>Đặc biệt chăm sóc vùng tai, mắt, và bàn chân - những nơi dễ bị nhiễm trùng.</p>
      `
      : `
        <p>Pet grooming is not just about making your pet look good, but also ensuring their overall health. Here are 10 useful tips from Green Paws experts.</p>
        
        <h2>1. Regular Brushing</h2>
        <p>Daily brushing helps remove shed hair, dirt and stimulates blood circulation. For long-haired dogs, brush twice a day.</p>
        
        <h2>2. Proper Bathing</h2>
        <p>Don't bathe too frequently as it can dry out the skin. Ideal frequency is once every 2-4 weeks depending on breed.</p>
        
        <h2>3. Use Appropriate Products</h2>
        <p>Choose pet-specific shampoo, avoid human shampoo as pH levels differ.</p>
        
        <h2>4. Regular Trimming</h2>
        <p>Take your pet to a professional salon every 6-8 weeks for trimming and styling.</p>
        
        <h2>5. Pay Attention to Sensitive Areas</h2>
        <p>Especially care for ears, eyes, and paws - areas prone to infection.</p>
      `
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Image */}
      <div className="relative h-[400px] lg:h-[500px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <span className="inline-block bg-primary-500 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            {blog.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center text-white/90">
            <span className="material-icons text-sm mr-1">calendar_today</span>
            <span className="mr-4">{blog.date}</span>
            <span className="material-icons text-sm mr-1">person</span>
            <span>{blog.author}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="font-semibold text-gray-900 mb-4">
                {language === 'vi' ? 'Chia sẻ bài viết:' : 'Share this post:'}
              </p>
              <div className="flex space-x-3">
                <button className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                  <span className="material-icons text-sm">share</span>
                </button>
                <button className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                  <span className="material-icons text-sm">link</span>
                </button>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-8">
              <Link
                to="/blog"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                <span className="material-icons text-sm mr-1">arrow_back</span>
                {language === 'vi' ? 'Quay lại Blog' : 'Back to Blog'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default BlogDetailPage;
