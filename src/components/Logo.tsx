import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-12 h-12 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
      >
        <motion.path
          d="M50 3.5L93.3 28.75V79.25L50 96.5L6.7 79.25V28.75L50 3.5Z"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-teal-500"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <text
          x="50"
          y="60"
          textAnchor="middle"
          className="text-3xl font-bold fill-teal-500"
          style={{ fontFamily: 'system-ui' }}
        >
          A
        </text>
      </svg>
    </motion.div>
  );
};

export default Logo;