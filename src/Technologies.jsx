import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaMicrosoft, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiGooglecloud, SiKubernetes, SiMongodb, SiPostgresql } from 'react-icons/si';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const techStack = [
  { icon: FaAws, name: 'AWS', category: 'Cloud' },
  { icon: SiGooglecloud, name: 'Google Cloud', category: 'Cloud' },
  { icon: FaMicrosoft, name: 'Azure', category: 'Cloud' },
  { icon: SiKubernetes, name: 'Kubernetes', category: 'Orchestration' },
  { icon: FaReact, name: 'React', category: 'Frontend' },
  { icon: FaNodeJs, name: 'Node.js', category: 'Backend' },
  { icon: SiPostgresql, name: 'PostgreSQL', category: 'Database' },
  { icon: SiMongodb, name: 'MongoDB', category: 'Database' }
];

const Technologies = () => {
  return (
    <section className="section-padding">
      <div className="container-width">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/80">
              Technologies
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
              Battle-tested stack for modern platforms.
            </h2>
          </div>
          <p className="max-w-sm text-xs text-slate-400">
            We combine cloud-native foundations with a composable architecture, enabling teams
            to move quickly without compromising on quality, observability, or governance.
          </p>
        </motion.div>

        <motion.div
          className="glass-panel rounded-3xl p-5 sm:p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={gridVariants}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {techStack.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-slate-900/60 border border-slate-700/70 px-3 py-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 text-sky-300">
                    <Icon size={20} />
                  </div>
                  <p className="text-xs font-medium text-slate-50">{item.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                    {item.category}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;



