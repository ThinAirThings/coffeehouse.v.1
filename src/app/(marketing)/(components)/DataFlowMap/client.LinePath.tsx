import React from 'react';
import { motion } from 'framer-motion';

const LinePath = () => {
  const lineAnimation = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const, // Loop the animation in one direction
      }
    }
  };

  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      {/* Define an orange gradient */}
      <defs>
        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#ff9a00', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ff5500', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Left line */}
      <motion.path
        d="M50,50 L100,100 L100,150"
        fill="transparent"
        stroke="url(#orangeGradient)"
        strokeWidth="4"
        strokeLinecap={"round"}
        variants={lineAnimation}
        initial="hidden"
        animate="visible"
      />
      {/* Right line */}
      <motion.path
        d="M150,50 L100,100 L100,150"
        fill="transparent"
        stroke="url(#orangeGradient)"
        strokeWidth="4"
        strokeLinecap={"round"}
        variants={lineAnimation}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
};

export default LinePath;



