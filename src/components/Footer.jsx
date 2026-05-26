import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import brandLogo from '../670982121_932226586086499_6248645574862379120_n.jpg';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={brandLogo}
                alt="Green Paws"
                className="w-12 h-12 object-cover rounded-full"
              />
              <span className="font-bold text-xl">Green Paws</span>
            </div>
            <p className="text-primary-100 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-3">
              <button className="w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-500 flex items-center justify-center transition-colors">
                <span className="material-icons text-sm">public</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-500 flex items-center justify-center transition-colors">
                <span className="material-icons text-sm">share</span>
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.services.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/service/grooming"
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  {t('footer.services.grooming')}
                </Link>
              </li>
              <li>
                <Link
                  to="/service/spa"
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  {t('footer.services.spa')}
                </Link>
              </li>
              <li>
                <Link
                  to="/service/training"
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  {t('footer.services.training')}
                </Link>
              </li>
              <li>
                <Link
                  to="/service/hotel"
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  {t('footer.services.hotel')}
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.about.title')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors text-sm">
                  {t('footer.about.story')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors text-sm">
                  {t('footer.about.team')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors text-sm">
                  {t('footer.about.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors text-sm">
                  {t('footer.about.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <span className="material-icons text-secondary-300 text-lg">location_on</span>
                <span className="text-primary-100">{t('footer.contact.address')}</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <span className="material-icons text-secondary-300 text-lg">call</span>
                <a
                  href={`tel:${String(t('footer.contact.phone')).replace(/\s+/g, '')}`}
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  {t('footer.contact.phone')}
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <span className="material-icons text-secondary-300 text-lg">mail</span>
                <a href={`mailto:${t('footer.contact.email')}`} className="text-primary-100 hover:text-white transition-colors">
                  {t('footer.contact.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-600 mt-12 pt-8 text-center">
          <p className="text-primary-200 text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

