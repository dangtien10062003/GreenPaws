import React from 'react';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const PricingPage = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default PricingPage;
