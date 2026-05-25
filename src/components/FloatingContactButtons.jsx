import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const FloatingContactButtons = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  // Ẩn trên trang booking vì đã có nút riêng
  if (location.pathname === '/booking') {
    return null;
  }

  const contactOptions = [
    {
      id: 'phone',
      icon: 'phone',
      label: language === 'vi' ? 'Gọi ngay' : 'Call Now',
      href: 'tel:0767522868',
      color: 'bg-primary-500 hover:bg-primary-600',
      number: '076 752 2868'
    },
    {
      id: 'zalo',
      icon: 'chat',
      label: 'Zalo',
      href: 'https://zalo.me/0767522868',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      id: 'messenger',
      icon: 'message',
      label: 'Messenger',
      href: 'https://m.me/greenpaws',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      id: 'email',
      icon: 'mail',
      label: 'Email',
      href: 'mailto:hello@greenpaws.vn',
      color: 'bg-secondary-500 hover:bg-secondary-600',
    },
  ];

  return (
    <>
      {/* Floating Contact Buttons - Desktop */}
      <div className="fixed bottom-24 right-6 z-40 hidden lg:flex flex-col items-end space-y-3">
        {/* Expanded Contact Options */}
        <div
          className={`flex flex-col space-y-3 transition-all duration-300 ${
            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {contactOptions.map((option) => (
            <a
              key={option.id}
              href={option.href}
              target={option.id !== 'phone' && option.id !== 'email' ? '_blank' : undefined}
              rel={option.id !== 'phone' && option.id !== 'email' ? 'noopener noreferrer' : undefined}
              className={`group flex items-center space-x-3 ${option.color} text-white px-4 py-3 rounded-lg shadow-ambient-lg hover:shadow-ambient transition-all transform hover:scale-105`}
              onClick={() => setIsExpanded(false)}
            >
              <span className="material-icons text-xl">{option.icon}</span>
              <span className="font-medium text-sm whitespace-nowrap">{option.label}</span>
              {option.number && (
                <span className="text-xs opacity-90 hidden sm:inline">({option.number})</span>
              )}
            </a>
          ))}
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-14 h-14 rounded-lg shadow-ambient-lg hover:shadow-ambient transition-all transform hover:scale-110 flex items-center justify-center ${
            isExpanded ? 'bg-neutral-700 hover:bg-neutral-800' : 'bg-primary-500 hover:bg-primary-600'
          }`}
          aria-label={language === 'vi' ? 'Liên hệ' : 'Contact'}
        >
          <span className={`material-icons text-white text-2xl transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}>
            {isExpanded ? 'close' : 'chat'}
          </span>
        </button>

        {/* Pulse Animation when closed */}
        {!isExpanded && (
          <div className="absolute bottom-0 right-0 w-14 h-14 rounded-lg bg-primary-500 animate-ping opacity-20 pointer-events-none"></div>
        )}
      </div>

      {/* Quick Contact Bar - Bottom (Mobile Friendly) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-neutral-200 bg-white/95 backdrop-blur-sm shadow-ambient-lg lg:hidden pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-4 gap-2 px-3 py-2">
          <a
            href="tel:0767522868"
            className="flex flex-col items-center justify-center rounded-xl py-2 hover:bg-primary-50 active:bg-primary-100 transition-colors"
          >
            <span className="material-icons text-primary-600 text-xl">phone</span>
            <span className="text-[11px] text-neutral-700 font-semibold mt-1">
              {language === 'vi' ? 'Gọi' : 'Call'}
            </span>
          </a>
          <a
            href="https://zalo.me/0767522868"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center rounded-xl py-2 hover:bg-blue-50 active:bg-blue-100 transition-colors"
          >
            <span className="material-icons text-blue-500 text-xl">chat</span>
            <span className="text-[11px] text-neutral-700 font-semibold mt-1">Zalo</span>
          </a>
          <a
            href="https://m.me/greenpaws"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center rounded-xl py-2 hover:bg-indigo-50 active:bg-indigo-100 transition-colors"
          >
            <span className="material-icons text-indigo-500 text-xl">message</span>
            <span className="text-[11px] text-neutral-700 font-semibold mt-1">Messenger</span>
          </a>
          <a
            href="/booking"
            className="flex flex-col items-center justify-center rounded-xl py-2 hover:bg-secondary-50 active:bg-secondary-100 transition-colors"
          >
            <span className="material-icons text-secondary-600 text-xl">calendar_today</span>
            <span className="text-[11px] text-neutral-700 font-semibold mt-1">
              {language === 'vi' ? 'Đặt lịch' : 'Book'}
            </span>
          </a>
        </div>
      </div>

      {/* Spacer for mobile bottom bar */}
      <div className="h-20 lg:hidden"></div>
    </>
  );
};

export default FloatingContactButtons;
