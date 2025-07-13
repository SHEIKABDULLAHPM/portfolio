import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Target, 
  Users, 
  Rocket, 
  Award,
  Clock,
  Heart
} from 'lucide-react';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance and blazing-fast load times for exceptional user experience.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Rock Solid Security',
      description: 'Enterprise-grade security measures to protect your data and users.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Strategic approach focused on achieving your business objectives and ROI.',
      color: 'from-emerald-400 to-emerald-600',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned professionals with deep expertise across all digital disciplines.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Rocket,
      title: 'Scalable Solutions',
      description: 'Future-proof architecture that grows with your business needs.',
      color: 'from-pink-400 to-red-500',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized excellence in design, development, and client satisfaction.',
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Reliable project management ensuring deadlines are met consistently.',
      color: 'from-teal-400 to-teal-600',
    },
    {
      icon: Heart,
      title: 'Passionate Craft',
      description: 'We love what we do and it shows in every pixel and line of code.',
      color: 'from-rose-400 to-rose-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent ml-3">
              TechFlow
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with creative excellence to deliver 
            digital solutions that transform businesses and delight users.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Ready to experience the TechFlow difference?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;