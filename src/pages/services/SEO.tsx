import React from 'react';
import ServiceLayout from '../../components/ui/ServiceLayout';

const SEO: React.FC = () => {
  const processSteps = [
    {
      title: 'SEO Audit',
      description: 'Comprehensive analysis of your current website performance, identifying opportunities and technical issues.',
      icon: '🔍',
    },
    {
      title: 'Keyword Research',
      description: 'Strategic keyword research to target high-value terms that your potential customers are searching for.',
      icon: '🎯',
    },
    {
      title: 'On-Page Optimization',
      description: 'Optimize your website content, meta tags, images, and technical elements for better search rankings.',
      icon: '⚙️',
    },
    {
      title: 'Link Building & Monitoring',
      description: 'Build high-quality backlinks and continuously monitor performance with detailed reporting.',
      icon: '📈',
    },
  ];

  const features = [
    'Technical SEO audit and optimization',
    'Keyword research and competitive analysis',
    'On-page SEO optimization',
    'Link building and outreach campaigns',
    'Local SEO for businesses',
    'Content strategy and optimization',
    'Google Analytics and Search Console setup',
    'Monthly SEO reporting and analysis',
  ];

  const benefits = [
    'Improved search engine rankings and visibility',
    'Increased organic traffic and lead generation',
    'Better user experience and site performance',
    'Higher conversion rates and ROI',
    'Long-term sustainable growth',
    'Competitive advantage in your industry',
  ];

  return (
    <ServiceLayout
      title="SEO Services"
      bannerText="Boost your search rankings and drive organic traffic with our proven SEO strategies that deliver measurable results."
      processSteps={processSteps}
      overviewText="Our SEO services are designed to improve your website's visibility in search engines and drive qualified organic traffic to your business. We use proven white-hat techniques, comprehensive keyword research, and technical optimization to help you outrank competitors and achieve sustainable growth."
      features={features}
      benefits={benefits}
      backgroundImage="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1600"
    />
  );
};

export default SEO;