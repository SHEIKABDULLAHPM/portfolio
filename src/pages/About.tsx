import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../components/ui/Banner';
import { 
  Users, 
  Target, 
  Award, 
  Heart,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

interface Tool {
  name: string;
  category: string;
  logo: string;
}

const About: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in digital transformation.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Sarah Davis',
      role: 'CTO',
      bio: 'Full-stack architect passionate about cutting-edge technology.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        github: '#',
      },
    },
    {
      name: 'Michael Brown',
      role: 'Lead Designer',
      bio: 'Creative director crafting beautiful, user-centered experiences.',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Emily Chen',
      role: 'Head of Marketing',
      bio: 'Strategic marketer driving growth through innovative campaigns.',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
  ];

  const tools: Tool[] = [
    { name: 'React', category: 'Frontend', logo: '⚛️' },
    { name: 'Node.js', category: 'Backend', logo: '🟢' },
    { name: 'AWS', category: 'Cloud', logo: '☁️' },
    { name: 'Figma', category: 'Design', logo: '🎨' },
    { name: 'MongoDB', category: 'Database', logo: '🍃' },
    { name: 'Docker', category: 'DevOps', logo: '🐳' },
  ];

  const impactStats = [
    { number: '500+', label: 'Projects Delivered', color: 'from-blue-500 to-cyan-500' },
    { number: '98%', label: 'Client Retention', color: 'from-emerald-500 to-teal-500' },
    { number: '50+', label: 'Team Members', color: 'from-purple-500 to-pink-500' },
    { number: '10+', label: 'Years Experience', color: 'from-orange-500 to-red-500' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering quality that exceeds expectations.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication with our clients.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies to create forward-thinking solutions.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about what we do and it shows in every line of code.',
      color: 'from-orange-500 to-red-500',
    },
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
        title="About TechFlow"
        subtitle="Our Story"
        description="We're a passionate team of digital innovators dedicated to transforming businesses through exceptional technology solutions."
        ctaText="Join Our Team"
        ctaAction={() => console.log('Join team clicked')}
        backgroundImage="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1600"
        size="md"
      />

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Founded in 2015, TechFlow began with a simple mission: to bridge the gap 
                  between innovative technology and business success. What started as a small 
                  team of passionate developers has grown into a full-service digital agency.
                </p>
                <p>
                  Today, we're proud to work with businesses of all sizes, from startups 
                  to Fortune 500 companies, helping them navigate the digital landscape 
                  and achieve their goals through cutting-edge solutions.
                </p>
                <p>
                  Our commitment to excellence, innovation, and client satisfaction has 
                  made us a trusted partner in the digital transformation journey of 
                  hundreds of businesses worldwide.
                </p>
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
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl opacity-20" />
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The numbers that showcase our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                  {stat.number}
                </div>
                <div className="text-lg text-white">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The talented individuals who make TechFlow extraordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-500"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative mb-6"
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href={member.social.twitter}
                      className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-200"
                    >
                      <Twitter className="w-4 h-4" />
                    </motion.a>
                  )}
                  {member.social.github && (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href={member.social.github}
                      className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
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
              Tools & Platforms
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We use cutting-edge technologies to build exceptional solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{tool.logo}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tool.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;