import React from 'react';
import { motion } from 'framer-motion';

const Email = () => {
  return (
    <motion.div
      className="fixed right-6 bottom-0 hidden lg:flex flex-col items-center gap-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <a
        href="mailto:example@email.com"
        className="vertical-text text-slate-400 hover:text-teal-500 tracking-widest hover:-translate-y-1 transition-all duration-200"
        style={{ writingMode: 'vertical-rl' }}
      >
        example@email.com
      </a>
      <div className="w-[1px] h-24 bg-slate-400"></div>
    </motion.div>
  );
};

export default Email;