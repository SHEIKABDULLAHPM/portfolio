import React from 'react';
import ServiceLayout from '../../components/ui/ServiceLayout';

const Ecommerce: React.FC = () => {
  const processSteps = [
    {
      title: 'Business Analysis',
      description: 'We study your market, competitors, and customer behavior to design the perfect e-commerce strategy.',
      icon: '📊',
    },
    {
      title: 'Platform Setup',
      description: 'Choose and configure the ideal e-commerce platform (Shopify, WooCommerce, or custom solution).',
      icon: '🏪',
    },
    {
      title: 'Design & Development',
      description: 'Create a beautiful, user-friendly online store with seamless shopping experience and secure checkout.',
      icon: '🛒',
    },
    {
      title: 'Integration & Launch',
      description: 'Integrate payment gateways, inventory systems, and analytics tools for a complete solution.',
      icon: '💳',
    },
  ];

  const features = [
    'Shopify store development and customization',
    'WooCommerce and Magento solutions',
    'Custom e-commerce platform development',
    'Payment gateway integration (Stripe, PayPal, etc.)',
    'Inventory management systems',
    'Multi-vendor marketplace development',
    'Mobile commerce optimization',
    'Shopping cart abandonment recovery',
  ];

  const benefits = [
    'Increased online sales and revenue generation',
    'Secure payment processing and data protection',
    'Inventory management and order tracking',
    'Mobile-optimized shopping experience',
    'SEO optimization for product visibility',
    'Analytics and reporting for business insights',
  ];

  return (
    <ServiceLayout
      title="E-commerce Solutions"
      bannerText="Build powerful online stores that convert visitors into customers with seamless shopping experiences and secure payment processing."
      processSteps={processSteps}
      overviewText="Transform your business with our comprehensive e-commerce solutions. We create online stores that not only look stunning but are optimized for conversions, equipped with powerful inventory management, secure payment processing, and advanced analytics to help you grow your online business."
      features={features}
      benefits={benefits}
      backgroundImage="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1600"
    />
  );
};

export default Ecommerce;