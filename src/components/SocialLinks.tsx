import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { Icon: Github, href: 'https://github.com', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

const SocialLinks = () => {
  return (
    <motion.div 
      className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-teal-500 hover:-translate-y-1 transition-all duration-200"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
      <div className="w-[1px] h-24 bg-slate-400"></div>
    </motion.div>
  );
};

export default SocialLinks;