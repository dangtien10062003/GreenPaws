import React from 'react';
import AboutSection from '../components/AboutSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const AboutPage = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <AboutSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default AboutPage;
