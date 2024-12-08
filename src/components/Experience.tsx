import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Google',
    position: 'Senior Software Engineer',
    period: '2020 - Present',
    description: [
      'Lead development of Google\'s core search infrastructure',
      'Optimized search algorithms improving performance by 40%',
      'Mentored junior developers and conducted technical interviews'
    ]
  },
  {
    company: 'Facebook',
    position: 'Software Engineer',
    period: '2018 - 2020',
    description: [
      'Developed new features for Facebook Messenger',
      'Implemented real-time chat functionality',
      'Collaborated with design team on UI/UX improvements'
    ]
  },
  {
    company: 'Amazon',
    position: 'Software Developer',
    period: '2016 - 2018',
    description: [
      'Worked on AWS Lambda service',
      'Implemented serverless computing features',
      'Reduced operational costs by 25%'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg font-normal text-slate-100 mb-8 flex items-center"
        >
          <span className="text-teal-500 font-mono mr-2 text-sm">02.</span>
          Where I've Worked
        </motion.h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-slate-700"
            >
              <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-semibold text-slate-100">
                {exp.position} <span className="text-teal-500">@ {exp.company}</span>
              </h3>
              <p className="text-slate-400 mt-1 mb-4">{exp.period}</p>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-300 flex items-start">
                    <span className="text-teal-500 mr-2">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;