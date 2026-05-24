import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BeforeAfterSlider from '../components/shared/BeforeAfterSlider';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BeforeAfterSlider />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
