import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <div className="container-width py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-2xl bg-gradient-to-br from-primary-500 to-sky-400 flex items-center justify-center text-[10px] font-semibold text-slate-50">
            DT
          </div>
          <div>
            <p className="font-medium text-slate-100 text-xs">Dikshi Technologies</p>
            <p className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-4">
            <a href="#services" className="hover:text-slate-200">
              Services
            </a>
            <a href="#portfolio" className="hover:text-slate-200">
              Work
            </a>
            <a href="#contact" className="hover:text-slate-200">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            {/* Social icons as placeholders, wire these to real company profiles */}
            <motion.a
              whileHover={{ y: -2, scale: 1.05 }}
              href="#"
              aria-label="LinkedIn"
              className="rounded-full border border-slate-700/80 bg-slate-900/80 p-1.5 text-slate-300 hover:text-slate-50"
            >
              <FaLinkedin size={14} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.05 }}
              href="#"
              aria-label="Twitter"
              className="rounded-full border border-slate-700/80 bg-slate-900/80 p-1.5 text-slate-300 hover:text-slate-50"
            >
              <FaTwitter size={14} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.05 }}
              href="#"
              aria-label="GitHub"
              className="rounded-full border border-slate-700/80 bg-slate-900/80 p-1.5 text-slate-300 hover:text-slate-50"
            >
              <FaGithub size={14} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



