import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, Download } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'skills', 'experience', 'projects', 'data-projects', 'publications', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Data Projects", href: "#data-projects", id: "data-projects" },
    { label: "Publications", href: "#publications", id: "publications" },
    { label: "Achievements", href: "#achievements", id: "achievements" },
    { label: "Contact", href: "#contact", id: "contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300">
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0f141d]/90 backdrop-blur-xl border border-slate-700/60 shadow-2xl shadow-black/60' 
          : 'bg-[#0f141d]/60 backdrop-blur-md border border-slate-800/40'
      }`}>
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-[#74db26] flex items-center justify-center text-black font-extrabold text-sm shadow-md shadow-[#74db26]/30">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-sm text-white tracking-tight group-hover:text-[#74db26] transition-colors">
              {personalInfo.shortName}
            </span>
            <span className="font-mono text-[10px] text-slate-400">
              Telkom University
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#161c28]/80 px-3 py-1.5 rounded-full border border-slate-700/40">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeSection === link.id
                  ? 'bg-[#74db26] text-black font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button: Download CV & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="CV_Nabila_Putri_Azhari.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#74db26] text-black font-extrabold text-xs shadow-md shadow-[#74db26]/25 hover:bg-[#88ee38] hover:scale-105 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-[#18202e] border border-slate-700 text-slate-200 hover:text-[#74db26]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-3xl bg-[#0f141d]/95 backdrop-blur-2xl border border-slate-700/80 shadow-2xl flex flex-col gap-2 max-w-md mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                activeSection === link.id
                  ? 'bg-[#74db26] text-black font-bold'
                  : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="CV_Nabila_Putri_Azhari.pdf"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#74db26] text-black font-extrabold text-sm"
          >
            <Download className="w-4 h-4" />
            Download ATS CV
          </a>
        </div>
      )}
    </header>
  );
}
