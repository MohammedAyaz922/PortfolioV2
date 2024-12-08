import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed w-full z-50 px-6 py-4 transition-all duration-200 ${
        scrolled ? 'bg-slate-900/90 backdrop-blur nav-shadow' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" aria-label="Home">
          <Logo />
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-teal-500 transition-colors text-sm font-mono"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="text-teal-500 text-xs mr-1">0{index + 1}.</span>
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="/resume.pdf"
            className="px-4 py-2 border border-teal-500 text-teal-500 rounded text-sm hover:bg-teal-500/10 transition-colors"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
          >
            Resume
          </motion.a>
        </div>

        <button
          className="md:hidden text-slate-300 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-3/4 bg-slate-800 flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-teal-500 transition-colors text-sm font-mono"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-teal-500 text-xs mr-1">0{index + 1}.</span>
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="/resume.pdf"
                className="px-4 py-2 border border-teal-500 text-teal-500 rounded text-sm hover:bg-teal-500/10 transition-colors"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;