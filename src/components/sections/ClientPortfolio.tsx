import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  // description: string;
  image: string;
  // technologies: string[];
  link?: string;
  featured: boolean;
}

const ClientPortfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      category: 'Web Development',
      // description: 'Modern e-commerce solution with advanced analytics and seamless user experience.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      // technologies: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
      link: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'Healthcare App',
      category: 'Mobile App',
      // description: 'Patient management system with real-time notifications and telemedicine features.',
      image: 'https://images.pexels.com/photos/5723963/pexels-photo-5723963.jpeg?auto=compress&cs=tinysrgb&w=800',
      // technologies: ['React Native', 'Firebase', 'WebRTC'],
      link: '#',
      featured: true,
    },
    {
      id: '3',
      title: 'Financial Dashboard',
      category: 'Web App',
      // description: 'Real-time financial analytics dashboard with advanced data visualization.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800',
      // technologies: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
      link: '#',
      featured: true,
    },
    {
      id: '4',
      title: 'Restaurant Chain',
      category: 'Website',
      // description: 'Multi-location restaurant website with online ordering and reservation system.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      // technologies: ['Next.js', 'Tailwind', 'Sanity CMS'],
      link: '#',
      featured: true,
    },
    {
      id: '5',
      title: 'EdTech Platform',
      category: 'Web App',
      // description: 'Online learning platform with interactive courses and progress tracking.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      // technologies: ['React', 'GraphQL', 'AWS', 'Redis'],
      link: '#',
      featured: true,
    },
    {
      id: '6',
      title: 'SaaS Marketing Tool',
      category: 'Web App',
      // description: 'Comprehensive marketing automation platform with advanced analytics.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      // technologies: ['Angular', 'Python', 'Docker', 'Kubernetes'],
      link: '#',
      featured: true,
    },
  ];

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
            Featured
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent ml-3">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful digital solutions that have helped
            businesses achieve their goals and exceed expectations.
          </p>
        </motion.div>

        {/* Infinite Horizontal Scroll Carousel */}
        {/* Infinite Full Screen Horizontal Scroll Carousel */}
<div className="relative w-screen overflow-hidden mb-20 left-1/2 -translate-x-1/2">
  <motion.div
    className="flex gap-6 w-max"
    animate={{ x: ['0%', '-50%'] }}
    transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
  >
    {[...projects.filter(p => p.featured), ...projects.filter(p => p.featured)].map((project, i) => (
      <div key={i} className="min-w-[300px] max-w-sm">
        <ProjectCard project={project} size="medium" />
      </div>
    ))}
  </motion.div>
</div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Want to see more of our work and case studies?
          </p>
          <Link to="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Full Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  size: 'small' | 'medium' | 'large';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, size }) => {
  const sizeClasses = {
    small: 'h-64',
    medium: 'h-80',
    large: 'h-96',
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <div className={`relative ${sizeClasses[size]} overflow-hidden`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
        >
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </motion.div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full">
              Featured
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description Removed */}
        {/* <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p> */}

        {/* Technologies Removed */}
        {/* <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div> */}
      </div>
    </motion.div>
  );
};


export default ClientPortfolio;