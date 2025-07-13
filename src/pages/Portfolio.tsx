import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Banner from '../components/ui/Banner';
import { ExternalLink, Github, Filter } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with advanced analytics.',
      longDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring real-time inventory management, advanced analytics dashboard, and seamless payment integration.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Stripe', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      year: '2024',
    },
    {
      id: '2',
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description: 'Patient management system with telemedicine features.',
      longDescription: 'A mobile application for healthcare providers to manage patient records, schedule appointments, and conduct virtual consultations with integrated video calling.',
      image: 'https://images.pexels.com/photos/5723963/pexels-photo-5723963.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Redux'],
      liveUrl: '#',
      featured: true,
      year: '2024',
    },
    {
      id: '3',
      title: 'Financial Dashboard',
      category: 'Web Application',
      description: 'Real-time financial analytics with data visualization.',
      longDescription: 'An advanced financial dashboard providing real-time market data, portfolio analytics, and customizable reporting tools for investment professionals.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Express', 'MongoDB', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      year: '2023',
    },
    {
      id: '4',
      title: 'Restaurant Chain Website',
      category: 'Website',
      description: 'Multi-location restaurant site with online ordering.',
      longDescription: 'A comprehensive website for a restaurant chain featuring location-based menus, online ordering system, reservation management, and loyalty program integration.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS', 'Vercel'],
      liveUrl: '#',
      featured: false,
      year: '2023',
    },
    {
      id: '5',
      title: 'EdTech Learning Platform',
      category: 'Web Application',
      description: 'Online learning platform with interactive courses.',
      longDescription: 'A complete learning management system with course creation tools, progress tracking, interactive quizzes, and certificate generation for educational institutions.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'GraphQL', 'AWS', 'Redis', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      year: '2023',
    },
    {
      id: '6',
      title: 'SaaS Marketing Tool',
      category: 'Web Application',
      description: 'Marketing automation platform with analytics.',
      longDescription: 'A comprehensive marketing automation platform featuring email campaigns, social media scheduling, lead scoring, and advanced analytics for marketing teams.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Python', 'Docker', 'Kubernetes', 'Redis'],
      liveUrl: '#',
      featured: false,
      year: '2022',
    },
    {
      id: '7',
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      description: 'Comprehensive fitness and nutrition tracking.',
      longDescription: 'A mobile fitness application with workout planning, nutrition tracking, progress analytics, and social features to connect with other fitness enthusiasts.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Google Fit API', 'ML Kit'],
      liveUrl: '#',
      featured: false,
      year: '2022',
    },
    {
      id: '8',
      title: 'Real Estate Platform',
      category: 'Website',
      description: 'Property listing and management system.',
      longDescription: 'A modern real estate platform with property listings, virtual tours, mortgage calculator, and CRM system for real estate agents and buyers.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Mapbox', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      year: '2022',
    },
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <Banner
        title="Our Portfolio"
        subtitle="Featured Work"
        description="Explore our collection of successful projects that showcase our expertise in creating exceptional digital experiences."
        ctaText="Start Your Project"
        ctaAction={() => console.log('Start project clicked')}
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
        size="md"
      />

      {/* Featured Projects */}
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
              Featured
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent ml-3">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Highlighting our most impactful work that demonstrates our commitment 
              to excellence and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <ProjectCard project={project} size="large" />
              </motion.div>
            ))}
          </div>

          {/* Remaining featured projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <ProjectCard project={project} size="medium" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              All Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Browse through our complete portfolio of work across various industries and technologies.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <Filter className="w-4 h-4 inline mr-2" />
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <ProjectCard project={project} size="medium" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's work together to bring your vision to life with our proven expertise 
              and innovative approach.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

interface ProjectCardProps {
  project: Project;
  size: 'medium' | 'large';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, size }) => {
  const isLarge = size === 'large';

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Image */}
      <div className={`relative ${isLarge ? 'h-80' : 'h-64'} overflow-hidden`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </motion.div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {project.category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {project.year}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {isLarge ? project.longDescription : project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, isLarge ? 5 : 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (isLarge ? 5 : 3) && (
            <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
              +{project.technologies.length - (isLarge ? 5 : 3)} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;