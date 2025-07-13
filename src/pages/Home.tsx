import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../components/ui/Banner';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ServicesOverview from '../components/sections/ServicesOverview';
import ClientStats from '../components/sections/ClientStats';
import ClientPortfolio from '../components/sections/ClientPortfolio';
import Testimonials from '../components/sections/Testimonials';
import ContactCTA from '../components/sections/ContactCTA';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleWatchDemo = () => {
    // This could open a modal or navigate to a demo page
    console.log('Watch demo clicked');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <Banner
        title="Transform Your Digital Vision Into Reality"
        subtitle="Welcome to TechFlow"
        description="We create exceptional digital experiences that drive growth, engage users, and deliver measurable results for your business."
        ctaText="Get Started Today"
        ctaAction={handleGetStarted}
        secondaryCtaText="Watch Demo"
        secondaryCtaAction={handleWatchDemo}
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
        size="lg"
      />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Client Stats */}
      <ClientStats />

      {/* Portfolio Preview */}
      <ClientPortfolio />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <ContactCTA />
    </motion.div>
  );
};

export default Home;