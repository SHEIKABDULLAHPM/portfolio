import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code,
  ShoppingCart,
  Search,
  PenTool,
  Share2,
  ArrowRight,
} from 'lucide-react';

interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  features: string[];
  path: string;
  color: string;
}

const ServicesOverview: React.FC = () => {
  const services: Service[] = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Custom web applications built with modern technologies for optimal performance.',
      features: ['React & Next.js', 'Node.js Backend', 'Responsive Design', 'API Integration'],
      path: '/services/web-development',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description:
        'Complete online stores with secure payment processing and inventory management.',
      features: ['Shopify Expert', 'Custom E-commerce', 'Payment Gateway', 'Inventory System'],
      path: '/services/ecommerce',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Search,
      title: 'SEO Services',
      description:
        'Boost your search rankings and organic traffic with proven SEO strategies.',
      features: ['Keyword Research', 'Technical SEO', 'Content Strategy', 'Link Building'],
      path: '/services/seo',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description:
        'Engaging content that tells your story and converts visitors into customers.',
      features: ['Content Strategy', 'Blog Writing', 'Video Content', 'Brand Storytelling'],
      path: '/services/content-marketing',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Share2,
      title: 'Social Media',
      description:
        'Strategic social media management to build your brand and engage audiences.',
      features: ['Strategy Planning', 'Content Creation', 'Community Management', 'Analytics'],
      path: '/services/smm',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
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
            Our
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent ml-3">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to elevate your business
            and deliver measurable results in today's competitive landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={cardVariants} className="group relative">
                <Link to={service.path}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="h-full bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-transparent relative overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 0.1 }}
                      transition={{ duration: 0.5 }}
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl`}
                    />

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={feature}
                            custom={i}
                            variants={featureVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}
                            />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Need a custom solution? Let's discuss your unique requirements.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Custom Quote
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
