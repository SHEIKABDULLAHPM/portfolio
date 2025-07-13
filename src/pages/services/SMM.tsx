import React from 'react';
import ServiceLayout from '../../components/ui/ServiceLayout';

const SMM: React.FC = () => {
  const processSteps = [
    {
      title: 'Social Media Audit',
      description: 'Analyze your current social media presence and identify opportunities for growth and improvement.',
      icon: '📱',
    },
    {
      title: 'Strategy Development',
      description: 'Create a comprehensive social media strategy tailored to your brand and target audience.',
      icon: '🎯',
    },
    {
      title: 'Content Creation & Posting',
      description: 'Develop engaging content and maintain consistent posting schedules across all platforms.',
      icon: '📸',
    },
    {
      title: 'Community Management',
      description: 'Engage with your audience, respond to comments, and build a loyal community around your brand.',
      icon: '💬',
    },
  ];

  const features = [
    'Social media strategy development',
    'Content creation and curation',
    'Community management and engagement',
    'Paid social media advertising',
    'Influencer marketing campaigns',
    'Social media analytics and reporting',
    'Crisis management and reputation monitoring',
    'Cross-platform content optimization',
  ];

  const benefits = [
    'Increased brand awareness and reach',
    'Higher engagement and follower growth',
    'Improved customer relationships and loyalty',
    'Better lead generation and conversions',
    'Enhanced brand reputation and credibility',
    'Real-time customer feedback and insights',
  ];

  return (
    <ServiceLayout
      title="Social Media Marketing"
      bannerText="Build a strong social media presence that engages your audience, grows your community, and drives business growth."
      processSteps={processSteps}
      overviewText="Our social media marketing services help you connect with your audience where they spend their time. We create engaging content, manage your social media presence, and implement strategies that build brand awareness, drive engagement, and generate real business results."
      features={features}
      benefits={benefits}
      backgroundImage="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1600"
    />
  );
};

export default SMM;