import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../pages/Portfolio';

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100"
        >
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
              <Github className="w-5 h-5" />
            </a>
          )}
        </motion.div>

        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{project.category}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {isLarge ? project.longDescription : project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, isLarge ? 5 : 3).map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
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

export default ProjectCard;
