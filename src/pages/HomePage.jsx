import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import BenefitsSection from '../components/BenefitsSection';
import CTASection from '../components/CTASection';
import SectionReveal from '../components/shared/SectionReveal';

const HomePage = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <SectionReveal>
        <HeroSection />
      </SectionReveal>
      <SectionReveal delay={100}>
        <ServicesSection />
      </SectionReveal>
      <SectionReveal delay={180} className="relative z-10">
        <div className="bg-gradient-to-b from-white to-secondary-50/30">
          <BenefitsSection />
        </div>
      </SectionReveal>
      <SectionReveal delay={260}>
        <WhyChooseUsSection />
      </SectionReveal>
      <SectionReveal delay={340} className="pb-2">
        <CTASection />
      </SectionReveal>
    </div>
  );
};

export default HomePage;
