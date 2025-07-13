import React from 'react';
import ServiceLayout from '../../components/ui/ServiceLayout';

const ContentMarketing: React.FC = () => {
  const processSteps = [
    {
      title: 'Content Strategy',
      description: 'Develop a comprehensive content strategy aligned with your business goals and target audience.',
      icon: '📝',
    },
    {
      title: 'Content Creation',
      description: 'Produce high-quality, engaging content including blogs, videos, infographics, and social media posts.',
      icon: '🎬',
    },
    {
      title: 'Distribution & Promotion',
      description: 'Strategically distribute content across multiple channels for maximum reach and engagement.',
      icon: '📢',
    },
    {
      title: 'Analytics & Optimization',
      description: 'Track performance metrics and continuously optimize content strategy for better results.',
      icon: '📊',
    },
  ];

  const features = [
    'Content strategy development',
    'Blog writing and article creation',
    'Video content production',
    'Infographic and visual content design',
    'Social media content creation',
    'Email marketing campaigns',
    'Content distribution and promotion',
    'Performance tracking and analytics',
  ];

  const benefits = [
    'Increased brand awareness and authority',
    'Higher engagement and social media following',
    'Improved search engine rankings',
    'Better lead generation and conversion rates',
    'Enhanced customer relationships and loyalty',
    'Cost-effective marketing with lasting impact',
  ];

  return (
    <ServiceLayout
      title="Content Marketing"
      bannerText="Create compelling content that engages your audience, builds brand authority, and drives meaningful business results."
      processSteps={processSteps}
      overviewText="Our content marketing services help you tell your brand's story in a way that resonates with your target audience. We create valuable, relevant content that not only engages your customers but also drives traffic, generates leads, and builds long-term brand loyalty."
      features={features}
      benefits={benefits}
      backgroundImage="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1600"
    />
  );
};

export default ContentMarketing;