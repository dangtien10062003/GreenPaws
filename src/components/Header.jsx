import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import brandLogo from '../670982121_932226586086499_6248645574862379120_n.jpg';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src={brandLogo}
              alt="Green Paws"
              className="w-10 h-10 object-cover rounded transition-transform group-hover:scale-110"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary-600 leading-tight">Green Paws</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {t('nav.services')}
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {t('nav.pricing')}
            </Link>
            <Link
              to="/team"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {t('nav.team')}
            </Link>
            <Link
              to="/gallery"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {t('nav.gallery')}
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <span className="material-icons text-sm">language</span>
              <span className="font-medium text-sm">{language.toUpperCase()}</span>
              <span className="material-icons text-sm">expand_more</span>
            </button>

            {/* Book Now Button */}
            <Link
              to="/booking"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors font-medium shadow-sm hover:shadow-md"
            >
              {t('nav.bookNow')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-primary-600"
            >
              <span className="material-icons">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 py-2"
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 py-2"
              >
                {t('nav.services')}
              </Link>
              <Link
                to="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 py-2"
              >
                {t('nav.pricing')}
              </Link>
              <Link
                to="/team"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 py-2"
              >
                {t('nav.team')}
              </Link>
              <Link
                to="/gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 py-2"
              >
                {t('nav.gallery')}
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 py-2"
              >
                {t('nav.contact')}
              </Link>
              <Link
                to="/booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-6 py-2.5 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors font-medium mt-2"
              >
                {t('nav.bookNow')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
