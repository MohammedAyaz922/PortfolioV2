import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'AWS',
    'Docker',
    'GraphQL'
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg font-normal text-slate-100 mb-8 flex items-center"
        >
          <span className="text-teal-500 font-mono mr-2 text-sm">01.</span>
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-slate-300 mb-4">
              Hello! My name is John and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught 
              me a lot about HTML & CSS!
            </p>
            <p className="text-slate-300 mb-4">
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, a huge corporation, and a student-led design studio. My main focus these 
              days is building accessible, inclusive products and digital experiences.
            </p>
            <p className="text-slate-300 mb-8">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <li key={skill} className="text-slate-300 flex items-center">
                  <span className="text-teal-500 mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="relative w-full max-w-[300px] mx-auto">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                  alt="Profile"
                  className="rounded grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-teal-500/20 group-hover:bg-transparent transition-colors duration-300 rounded"></div>
              </div>
              <div className="absolute inset-0 border-2 border-teal-500 rounded translate-x-5 translate-y-5 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;