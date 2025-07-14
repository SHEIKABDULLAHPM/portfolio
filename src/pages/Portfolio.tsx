import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';
import Banner from '../components/ui/Banner';
import ProjectCard from '../components/ui/ProjectCard';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  services: string[];
  clientName: string;
  clientOverview: string;
  problemStatement: string;
  results: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const projects: Project[] = [
  {
    id: '1',
    title: 'ShopEase SEO Boost',
    category: 'SEO',
    description: 'Enhanced search visibility for ShopEase.',
    longDescription: 'Implemented targeted SEO strategies that boosted organic traffic and rankings.',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['SEO', 'Ahrefs', 'Google Analytics'],
    services: ['Keyword Research', 'On-Page Optimization'],
    clientName: 'ShopEase Inc.',
    clientOverview: 'An online store for household essentials.',
    problemStatement: 'Struggled with low organic reach.',
    results: 'Traffic increased by 70% within 3 months.',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    year: '2024',
  },
  {
    id: '2',
    title: 'ShopEase SMM Campaign',
    category: 'SMM',
    description: 'Social media marketing for audience engagement.',
    longDescription: 'Designed and executed Facebook and Instagram campaigns.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Meta Ads', 'Canva', 'Hootsuite'],
    services: ['SMM Strategy', 'Content Creation'],
    clientName: 'ShopEase Inc.',
    clientOverview: 'An e-commerce store for lifestyle products.',
    problemStatement: 'Low engagement and brand presence on social.',
    results: 'Increased followers by 3x in 2 months.',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    year: '2024',
  },
  {
    id: '3',
    title: 'ShopEase Content Marketing',
    category: 'Content Marketing',
    description: 'Strategic blog and video content plan.',
    longDescription: 'Created a content calendar and produced SEO-friendly content.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['WordPress', 'Grammarly', 'SEMrush'],
    services: ['Blogging', 'Content Strategy'],
    clientName: 'ShopEase Inc.',
    clientOverview: 'Digital-first retail company.',
    problemStatement: 'Need for organic branding and inbound leads.',
    results: 'Lead generation improved by 50% through content.',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    year: '2024',
  },
  {
    id: '4',
    title: 'ShopEase Web Development',
    category: 'Web Development',
    description: 'Revamped e-commerce platform for better UX.',
    longDescription: 'Developed a responsive, fast-loading website with enhanced features.',
    image: 'https://images.pexels.com/photos/1181262/pexels-photo-1181262.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB'],
    services: ['Web Design', 'Development'],
    clientName: 'ShopEase Inc.',
    clientOverview: 'Leading online retailer in home goods.',
    problemStatement: 'Outdated website affecting sales.',
    results: 'Sales increased by 40% post-launch.',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    year: '2024',
  },
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'SEO', 'SMM', 'Content Marketing', 'Web Development'];

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Banner
        title="Our Portfolio"
        subtitle="Featured Work"
        description="Explore our collection of successful projects."
        ctaText="Start Your Project"
        ctaAction={() => console.log('Start Project')}
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
        size="md"
      />

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">All Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Browse through work across various industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Filter className="w-4 h-4 inline mr-2" />
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

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
                >
                  <Link to={`/portfolio/${project.id}`}>
                    <ProjectCard project={project} size="medium" />
                  </Link>
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
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
