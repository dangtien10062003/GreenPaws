import React from 'react';

const SectionReveal = ({ children, className = '', delay = 0 }) => {
  return (
    <div
      className={`opacity-0 translate-y-6 animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default SectionReveal;
