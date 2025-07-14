import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { projects } from './Portfolio'; // Update path if moved to `data/projects.ts`

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold text-xl">
        Project Not Found
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-20 px-6 max-w-5xl mx-auto text-gray-800 dark:text-white"
    >
      {/* Cover Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[400px] object-cover rounded-2xl shadow-md mb-8"
      />

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <span className="text-sm text-gray-400">{project.year}</span>
      </div>

      <p className="text-blue-500 font-semibold mb-2">{project.category}</p>

      {/* Client Info */}
      <div className="space-y-6 text-lg">
        <div>
          <h2 className="text-xl font-semibold text-emerald-600 mb-1">Client Name</h2>
          <p>{project.clientName}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-emerald-600 mb-1">Client Overview</h2>
          <p>{project.clientOverview}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-emerald-600 mb-1">Problem Statement</h2>
          <p>{project.problemStatement}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-emerald-600 mb-1">The Results</h2>
          <p>{project.results}</p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-600 mb-1">Services Provided</h2>
          <ul className="list-disc list-inside space-y-1">
            {project.services.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-600 mb-1">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline"
            >
              <ExternalLink size={18} /> Live Site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:underline"
            >
              <Github size={18} /> GitHub
            </a>
          )}
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-10">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-6 py-2 text-sm bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
