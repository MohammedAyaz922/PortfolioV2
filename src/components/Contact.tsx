import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg font-normal text-slate-100 mb-8 flex items-center justify-center"
        >
          <span className="text-teal-500 font-mono mr-2 text-sm">04.</span>
          What's Next?
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-slate-100 mb-6"
        >
          Get In Touch
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 mb-12"
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          href="mailto:example@email.com"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-teal-500 text-teal-500 hover:bg-teal-500/10 transition-colors rounded"
        >
          <Mail size={20} />
          Say Hello
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;