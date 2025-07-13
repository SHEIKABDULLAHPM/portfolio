import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Stat {
  number: number;
  label: string;
  suffix?: string;
  prefix?: string;
  color: string;
}

const ClientStats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats: Stat[] = [
    {
      number: 150,
      label: 'Happy Clients',
      suffix: '+',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: 300,
      label: 'Projects Completed',
      suffix: '+',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      number: 12,
      label: 'Industries Served',
      suffix: '+',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: 99,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent ml-3">
              Impact
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Numbers that showcase our commitment to excellence and the trust 
            our clients place in our digital solutions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300">
            Join our growing community of satisfied clients who've transformed their digital presence with TechFlow.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: Stat;
  index: number;
  isInView: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = stat.number / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          setCount(stat.number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: "easeOut" 
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="text-center group"
    >
      <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500">
        {/* Number */}
        <motion.div
          className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}
        >
          {stat.prefix}
          <motion.span
            key={count}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {count}
          </motion.span>
          {stat.suffix}
        </motion.div>

        {/* Label */}
        <h3 className="text-xl font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">
          {stat.label}
        </h3>

        {/* Decorative Element */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1, delay: index * 0.15 + 0.5 }}
          viewport={{ once: true }}
          className={`h-1 bg-gradient-to-r ${stat.color} mx-auto mt-4 rounded-full`}
        />
      </div>
    </motion.div>
  );
};

export default ClientStats;