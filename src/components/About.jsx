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

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const pillars = [
  {
    title: 'Engineering-first culture',
    description:
      'Senior technologists lead every engagement—grounding decisions in architecture, not just slideware.'
  },
  {
    title: 'Outcome-driven delivery',
    description:
      'We align roadmaps to business metrics, not vanity outputs—prioritizing resilience, performance, and adoption.'
  },
  {
    title: 'Transparent collaboration',
    description:
      'Embedded pods, shared rituals, and clear communication so your teams stay in the loop at every step.'
  }
];

const About = () => {
  return (
    <section className="section-padding bg-slate-950/80">
      <div className="container-width grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-200/80">
            About
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
            Why teams choose us as their engineering partner.
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            We operate as an extension of your product and platform teams—pairing pragmatic
            architecture with hands-on delivery. Our model blends consulting, design, and
            delivery so you can experiment with confidence.
          </p>

          <motion.ul
            className="mt-5 space-y-3"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {pillars.map((pillar) => (
              <motion.li
                key={pillar.title}
                variants={itemVariants}
                className="flex gap-3 text-sm"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <div>
                  <p className="font-medium text-slate-50">{pillar.title}</p>
                  <p className="text-xs text-slate-300">{pillar.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="glass-panel rounded-3xl p-5 sm:p-6 space-y-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                By the numbers
              </p>
              <p className="mt-2 text-3xl font-semibold text-primary-200">70+</p>
              <p className="text-xs text-slate-300">Engineers, designers, and consultants</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-tr from-primary-500 via-emerald-400 to-sky-400 px-3 py-2 text-[11px] font-semibold text-slate-950 shadow-soft">
              Global delivery
              <br />
              Local context
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-2xl bg-slate-900/70 border border-slate-700/70 p-3">
              <p className="text-slate-400">Average tenure</p>
              <p className="mt-1 text-lg font-semibold text-slate-50">4.5 yrs</p>
              <p className="mt-1 text-[11px] text-slate-400">Stable teams that know your stack</p>
            </div>
            <div className="rounded-2xl bg-slate-900/70 border border-slate-700/70 p-3">
              <p className="text-slate-400">Engagements</p>
              <p className="mt-1 text-lg font-semibold text-slate-50">30+</p>
              <p className="mt-1 text-[11px] text-slate-400">Active clients across regions</p>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900/80 border border-slate-700/70 p-3 text-xs text-slate-300">
            <p className="font-medium text-slate-100">A partner, not just a vendor.</p>
            <p className="mt-1">
              We co-create roadmaps, define metrics together, and stay accountable through
              transparent reporting and governance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;



