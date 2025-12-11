import React from 'react';
import { motion } from 'framer-motion';

// Motion variants reused across sections
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const wordVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
};

const Hero = () => {
  const titleWords = ['Engineering', 'future-ready', 'digital', 'experiences.'];

  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-width grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        {/* Left: Text content */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200 shadow-soft">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Trusted technology partner for modern enterprises
          </div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={word}
                variants={wordVariant}
                className={index === 0 ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-sky-300 to-emerald-300' : ''}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.h1>

          <p className="max-w-xl text-sm sm:text-base text-slate-300">
            We help ambitious businesses design, build, and scale secure digital platforms,
            leveraging cloud, data, and intelligent automation to unlock measurable impact.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-2.5 text-sm font-medium shadow-soft hover:shadow-primary-500/40"
            >
              Book a strategy call
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-slate-700 bg-slate-900/60 px-6 py-2.5 text-sm font-medium text-slate-100 hover:border-primary-400/80 hover:bg-slate-900/90"
            >
              View our work
            </motion.a>
          </div>

          <div className="mt-4 flex flex-wrap gap-6 text-xs text-slate-400">
            <div>
              <p className="font-semibold text-slate-100">10+ years</p>
              <p>Building critical enterprise systems</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">24/7</p>
              <p>Global delivery & support</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Visual / Stats panel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Background decorative blobs */}
          <div className="pointer-events-none absolute -inset-8 -z-10">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary-500/40 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-sky-400/30 blur-3xl" />
          </div>

          <div className="glass-panel rounded-3xl p-5 md:p-6 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Delivery metrics
                </p>
                <p className="mt-1 text-3xl font-semibold text-emerald-300">99.9%</p>
                <p className="text-xs text-slate-300">Platform uptime across managed clients</p>
              </div>
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-primary-500 via-indigo-400 to-sky-400 flex items-center justify-center text-xs font-medium text-slate-50 shadow-soft">
                Cloud<br />Native
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-2xl bg-slate-900/70 border border-slate-700/70 p-3">
                <p className="text-slate-400">Engagements</p>
                <p className="mt-1 text-lg font-semibold text-slate-50">120+</p>
                <p className="mt-1 text-[11px] text-slate-400">Enterprise projects delivered</p>
              </div>
              <div className="rounded-2xl bg-slate-900/70 border border-slate-700/70 p-3">
                <p className="text-slate-400">Client NPS</p>
                <p className="mt-1 text-lg font-semibold text-slate-50">4.8/5</p>
                <p className="mt-1 text-[11px] text-slate-400">Average satisfaction score</p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40 border border-slate-700/70 p-3">
              <div className="text-xs">
                <p className="text-slate-300 font-medium">
                  Cloud, data, and AI engineering under one roof.
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Secure, resilient, and scalable platforms tailored to your roadmap.
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  Certified
                </p>
                <p className="mt-1 text-sm font-semibold text-emerald-300">
                  Azure • AWS • GCP
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



