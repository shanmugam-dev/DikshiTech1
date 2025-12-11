import React, { useState } from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Simple client-side handler, ready to be wired to a backend or form service
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now we just simulate success; integrate with API or email service here.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="section-padding">
      <div className="container-width grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-200/80">
            Contact
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
            Tell us about your roadmap.
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Share a bit about your current challenges and where you&apos;d like to be in the
            next 6–12 months. We&apos;ll schedule a conversation with our consulting and
            delivery leads.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 glass-panel rounded-3xl p-5 sm:p-6 space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-200" htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400/70"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-200" htmlFor="email">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400/70"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-200" htmlFor="company">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formState.company}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400/70"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-200" htmlFor="message">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formState.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400/70 resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <motion.button
                type="submit"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-2.5 text-sm font-medium shadow-soft hover:shadow-primary-500/40"
              >
                Submit message
              </motion.button>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-emerald-300"
                >
                  Thanks for reaching out. We&apos;ll be in touch shortly.
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>

        <motion.div
          className="glass-panel rounded-3xl p-5 sm:p-6 space-y-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Engagement model
            </p>
            <p className="mt-2 text-sm text-slate-200">
              We typically respond within 1–2 business days with a short discovery call,
              followed by a tailored proposal where needed.
            </p>
          </div>
          <div className="grid gap-3 text-xs">
            <div className="rounded-2xl bg-slate-900/70 border border-slate-700/70 p-3">
              <p className="text-slate-400">Email</p>
              <p className="mt-1 text-slate-100">hello@dikshitech.example</p>
            </div>
            <div className="rounded-2xl bg-slate-900/70 border border-slate-700/70 p-3">
              <p className="text-slate-400">Locations</p>
              <p className="mt-1 text-slate-100">Global delivery centers with onshore partners.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;



