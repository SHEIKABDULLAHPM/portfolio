import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Banner from '../components/ui/Banner';
import { 
  Code, 
  ShoppingCart, 
  Search, 
  PenTool, 
  Share2, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  features: string[];
  path: string;
  color: string;
  popular?: boolean;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Node.js Backend', 'Responsive Design', 'API Integration'],
      path: '/services/web-development',
      color: 'from-blue-500 to-cyan-500',
      popular: true,
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with secure payment processing and inventory management systems.',
      features: ['Shopify Expert', 'Custom E-commerce', 'Payment Gateway', 'Inventory System'],
      path: '/services/ecommerce',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Boost your search rankings and organic traffic with proven SEO strategies and optimization.',
      features: ['Keyword Research', 'Technical SEO', 'Content Strategy', 'Link Building'],
      path: '/services/seo',
      color: 'from-orange-500 to-red-500',
      popular: true,
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Engaging content that tells your story and converts visitors into loyal customers.',
      features: ['Content Strategy', 'Blog Writing', 'Video Content', 'Brand Storytelling'],
      path: '/services/content-marketing',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic social media management to build your brand and engage with your audience.',
      features: ['Strategy Planning', 'Content Creation', 'Community Management', 'Analytics'],
      path: '/services/smm',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const whyChooseUs = [
    'Expert team with 10+ years of experience',
    'Proven track record with 500+ successful projects',
    'Custom solutions tailored to your business needs',
    'Ongoing support and maintenance included',
    'Transparent pricing with no hidden costs',
    'Fast turnaround times and reliable delivery',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <Banner
        title="Our Services"
        subtitle="What We Offer"
        description="Comprehensive digital solutions designed to help your business thrive in the digital landscape."
        ctaText="Get Custom Quote"
        ctaAction={() => console.log('Get quote clicked')}
        backgroundImage="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1600"
        size="md"
      />

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent ml-3">
                Service
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From web development to digital marketing, we offer end-to-end solutions 
              to help your business succeed online.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <Link to={service.path}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.4 }}
                      className="h-full bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
                    >
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute top-6 right-6">
                          <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full">
                            Popular
                          </span>
                        </div>
                      )}

                      {/* Background Gradient */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 0.1 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl`}
                      />

                      <div className="relative">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <motion.li
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center text-gray-700 dark:text-gray-300"
                            >
                              <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
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
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent ml-3">
                  TechFlow?
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                We combine technical expertise with creative excellence to deliver 
                solutions that not only meet your requirements but exceed your expectations.
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={reason}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Why choose us"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl opacity-20" />
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your requirements and create a custom solution that 
              perfectly fits your business needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold text-white hover:bg-white/20 transition-all duration-300"
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;