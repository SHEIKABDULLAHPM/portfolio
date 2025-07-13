import React from 'react';
import ServiceLayout from '../../components/ui/ServiceLayout';

const WebDevelopment: React.FC = () => {
  const processSteps = [
    {
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.',
      icon: '🔍',
    },
    {
      title: 'Design & Prototyping',
      description: 'Our designers create stunning mockups and interactive prototypes that bring your vision to life.',
      icon: '🎨',
    },
    {
      title: 'Development & Testing',
      description: 'Our expert developers build your application using cutting-edge technologies with rigorous testing.',
      icon: '⚡',
    },
    {
      title: 'Launch & Support',
      description: 'We deploy your application and provide ongoing maintenance and support to ensure optimal performance.',
      icon: '🚀',
    },
  ];

  const features = [
    'Custom web application development',
    'Responsive design for all devices',
    'Modern JavaScript frameworks (React, Vue, Angular)',
    'RESTful API development and integration',
    'Database design and optimization',
    'Progressive Web Apps (PWA)',
    'Performance optimization',
    'SEO-friendly architecture',
  ];

  const benefits = [
    'Scalable architecture that grows with your business',
    'Lightning-fast performance and loading times',
    'Cross-browser compatibility and responsive design',
    'Secure coding practices and data protection',
    'SEO optimization for better search rankings',
    'Ongoing maintenance and technical support',
  ];

  return (
    <ServiceLayout
      title="Web Development"
      bannerText="Create powerful, scalable web applications that drive business growth and deliver exceptional user experiences across all devices."
      processSteps={processSteps}
      overviewText="Our web development services combine cutting-edge technology with strategic thinking to create digital solutions that not only look great but perform exceptionally. We specialize in building custom web applications, e-commerce platforms, and enterprise solutions that are scalable, secure, and optimized for performance."
      features={features}
      benefits={benefits}
      backgroundImage="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1600"
    />
  );
};

export default WebDevelopment;