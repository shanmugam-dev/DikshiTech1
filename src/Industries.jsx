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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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

const industries = [
  {
    name: 'Banking & Financial Services',
    description:
      'Real-time data platforms, risk and compliance tooling, and digital onboarding journeys for global banks and NBFCs.'
  },
  {
    name: 'Healthcare & Life Sciences',
    description:
      'Patient-facing portals, clinical data platforms, and integrations that meet stringent regulatory and privacy requirements.'
  },
  {
    name: 'Retail & E-commerce',
    description:
      'Headless commerce, personalization engines, and omnichannel experiences that scale with demand peaks.'
  },
  {
    name: 'Manufacturing & Logistics',
    description:
      'IoT telemetry, predictive maintenance, and control tower dashboards that keep global supply chains moving.'
  },
  {
    name: 'ISVs & SaaS',
    description:
      'Multi-tenant architectures, usage-based billing, and platform hardening for growing SaaS businesses.'
  },
  {
    name: 'Public Sector & Education',
    description:
      'Citizen services, digital campuses, and secure collaboration platforms for institutions and governments.'
  }
];

const Industries = () => {
  return (
    <section className="section-padding bg-slate-950/70">
      <div className="container-width">
        <motion.div
          className="mb-10 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200/80">
            Industries
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
            Deep domain context across critical industries.
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            We bring repeatable patterns and accelerators from prior engagements, while
            respecting the nuances of your regulatory landscape and operating model.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-panel rounded-2xl p-4 sm:p-5"
            >
              <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                {industry.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;



