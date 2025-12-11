import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

// Simple helper to smoothly scroll to section IDs
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'industries', label: 'Industries' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add background and border when user scrolls
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        isScrolled ? 'backdrop-blur-xl bg-slate-950/70 border-b border-slate-800/80' : 'bg-transparent'
      }`}
    >
      <nav className="container-width flex items-center justify-between py-3 md:py-4">
        {/* Logo / Brand */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-primary-500 via-indigo-500 to-cyan-400 flex items-center justify-center text-sm font-bold shadow-soft">
            DT
          </div>
          <div className="leading-tight">
            <p className="font-semibold tracking-tight">Dikshi Technologies</p>
            <p className="text-xs text-slate-400">Modern IT Solutions</p>
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7 text-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-slate-300 hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r from-primary-500 to-accent-400 after:transition-all hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-4 py-2 text-xs font-medium shadow-soft hover:shadow-lg hover:shadow-primary-500/40 transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s Talk
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 p-2 text-slate-200"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute inset-x-0 top-full mt-2 px-4 md:hidden">
            <div className="glass-panel rounded-2xl px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="block w-full text-left rounded-xl px-3 py-2 text-sm text-slate-200 hover:bg-slate-800/70"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="mt-2 w-full rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-4 py-2 text-xs font-semibold shadow-soft"
              >
                Let&apos;s Talk
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;



