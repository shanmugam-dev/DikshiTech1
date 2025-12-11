import React from 'react';
import { motion } from 'framer-motion';

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
    transition: { staggerChildren: 0.12, delayChildren: 0.12 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Placeholder portfolio data, structure similar to case studies on corporate sites
const projects = [
  {
    title: 'Global Payments Platform',
    industry: 'Fintech',
    impact: '3x faster onboarding with a unified KYC and payments stack.',
    metrics: 'Reduced manual processing by 70%.',
    badge: 'Cloud & APIs'
  },
  {
    title: 'Healthcare Data Lakehouse',
    industry: 'Healthcare',
    impact: 'Single source of truth across clinical and operational data.',
    metrics: 'Cut reporting time from weeks to minutes.',
    badge: 'Data & AI'
  },
  {
    title: 'Omnichannel Commerce Suite',
    industry: 'Retail',
    impact: 'Consistent cart and inventory across web, mobile, and store.',
    metrics: 'Increased conversion rate by 18%.',
    badge: 'Experience'
  }
];

const Portfolio = () => {
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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-200/80">
              Portfolio
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
              Work that ships, scales, and sustains.
            </h2>
          </div>
          <p className="max-w-sm text-xs text-slate-400">
            A snapshot of the kind of platform modernization, product engineering, and cloud
            transformation work we lead alongside our clients globally.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass-panel rounded-3xl p-5 sm:p-6 flex flex-col justify-between"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              Featured Case Study
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-50">
              Intelligent customer 360 for a global bank.
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              We designed and built a secure, cloud-native data platform that consolidates
              customer signals in real time—spanning transactions, support, and marketing
              touchpoints.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li>• Unified profile and segmentation across channels.</li>
              <li>• Real-time risk and fraud workflows built on streaming data.</li>
              <li>• Governed access model aligned with regulatory guidelines.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-full bg-slate-900/70 border border-slate-700 px-2.5 py-1 text-slate-200">
                Data & AI
              </span>
              <span className="rounded-full bg-slate-900/70 border border-slate-700 px-2.5 py-1 text-slate-200">
                Financial Services
              </span>
              <span className="rounded-full bg-slate-900/70 border border-slate-700 px-2.5 py-1 text-slate-200">
                Cloud-native
              </span>
            </div>
          </motion.div>

          <div className="space-y-4">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-panel rounded-2xl p-4 sm:p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    {project.industry}
                  </p>
                  <span className="rounded-full bg-slate-900/70 border border-slate-700 px-2 py-1 text-[10px] text-fuchsia-200">
                    {project.badge}
                  </span>
                </div>
                <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">{project.impact}</p>
                <p className="mt-1 text-[11px] text-slate-400">{project.metrics}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;



