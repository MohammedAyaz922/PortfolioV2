import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description: 'A feature-rich music streaming platform built with React and Node.js. Implements real-time audio processing and social features.',
    tech: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?auto=format&fit=crop&q=80',
    github: '#',
    live: '#'
  },
  {
    title: 'Project Two',
    description: 'An AI-powered task management system that helps teams organize and prioritize work efficiently.',
    tech: ['TypeScript', 'Next.js', 'TailwindCSS', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    github: '#',
    live: '#'
  },
  {
    title: 'Project Three',
    description: 'E-commerce platform with advanced filtering, search, and recommendation systems.',
    tech: ['React', 'GraphQL', 'PostgreSQL', 'AWS'],
    image: 'https://images.unsplash.com/photo-1472437774355-71ab6752b434?auto=format&fit=crop&q=80',
    github: '#',
    live: '#'
  }
];

const Projects = () => {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg font-normal text-slate-100 mb-8 flex items-center"
        >
          <span className="text-teal-500 font-mono mr-2 text-sm">03.</span>
          Some Things I've Built
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}
            >
              <div className="w-full md:w-7/12 relative group">
                <div className="absolute inset-0 bg-teal-500/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover rounded"
                />
              </div>

              <div className={`w-full md:w-5/12 ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}>
                <h3 className="text-teal-500 mb-2">Featured Project</h3>
                <h4 className="text-2xl font-bold text-slate-100 mb-4">{project.title}</h4>
                <div className="bg-slate-800 p-6 rounded mb-4">
                  <p className="text-slate-300">{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-4 mb-4 ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}>
                  {project.tech.map((tech) => (
                    <li key={tech} className="text-slate-300 text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}>
                  <a href={project.github} className="text-slate-300 hover:text-teal-500">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="text-slate-300 hover:text-teal-500">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;