import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

interface BannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaAction?: () => void;
  secondaryCtaText?: string;
  secondaryCtaAction?: () => void;
  backgroundImage?: string;
  overlay?: boolean;
  centered?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaAction,
  secondaryCtaText,
  secondaryCtaAction,
  backgroundImage,
  overlay = true,
  centered = true,
  size = 'lg',
}) => {
  const sizeClasses = {
    sm: 'py-24',
    md: 'py-32',
    lg: 'py-40',
  };

  return (
    <section 
      className={`relative ${sizeClasses[size]} overflow-hidden`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Gradient */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-800 dark:via-purple-800 dark:to-emerald-800" />
      )}
      
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${centered ? 'text-center' : 'text-left'} text-white`}>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl font-medium mb-4 text-blue-200"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            {title.split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto text-gray-200"
            >
              {description}
            </motion.p>
          )}

          {(ctaText || secondaryCtaText) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {ctaText && (
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={ctaAction}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <span>{ctaText}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              )}

              {secondaryCtaText && (
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={secondaryCtaAction}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>{secondaryCtaText}</span>
                </motion.button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;