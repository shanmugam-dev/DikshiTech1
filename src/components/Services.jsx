import React from 'react';
import { motion } from 'framer-motion';
import { FiCloud, FiCpu, FiLayers, FiLock, FiSmartphone, FiTrendingUp } from 'react-icons/fi';

// Section fade-in + slide-up
const sectionVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

// Card stagger container
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

// Individual card animation
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const services = [
  {
    icon: FiCloud,
    title: 'Cloud-native Engineering',
    description:
      'Design, build, and operate resilient cloud platforms on AWS, Azure, and GCP with security and cost-efficiency baked in.',
    tag: 'Cloud & DevOps'
  },
  {
    icon: FiCpu,
    title: 'Data & AI Platforms',
    description:
      'Modern data stacks, pipelines, and ML workflows that turn raw data into real-time insights and decisions.',
    tag: 'Data & AI'
  },
  {
    icon: FiLayers,
    title: 'Digital Product Engineering',
    description:
      'End-to-end product development from discovery to launch—web, mobile, and API-first experiences.',
    tag: 'Product'
  },
  {
    icon: FiLock,
    title: 'Cybersecurity & Compliance',
    description:
      'Threat modeling, secure SDLC, and compliance frameworks to keep your platforms and customers protected.',
    tag: 'Security'
  },
  {
    icon: FiSmartphone,
    title: 'Experience Engineering',
    description:
      'Pixel-perfect UX and UI for enterprise-grade applications with performance and accessibility at the core.',
    tag: 'Experience'
  },
  {
    icon: FiTrendingUp,
    title: 'Consulting & Advisory',
    description:
      'Architecture reviews, cloud strategy, and modernization roadmaps aligned with your business goals.',
    tag: 'Advisory'
  }
];

const Services = () => {
  return (
    <section className="section-padding bg-slate-950/60">
      <div className="container-width">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-200/70">
              Services
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
              From strategy to production-grade delivery.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              Cross-functional teams combining architecture, engineering, and design to
              deliver measurable outcomes—faster.
            </p>
          </div>
          <p className="max-w-sm text-xs text-slate-400">
            We partner with you across the lifecycle—from discovery and proof-of-concept, to
            full-scale rollout, observability, and continuous improvement.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="glass-panel rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-primary-500/60"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary-500/90 via-indigo-500 to-sky-400 flex items-center justify-center text-slate-50 shadow-soft">
                    <Icon size={20} />
                  </div>
                  <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-primary-100 border border-slate-700">
                    {service.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;



