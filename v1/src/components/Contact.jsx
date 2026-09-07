import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, Copy, Check, ArrowUp, Send, Download, Sparkles, MapPin, Bot, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#74db26', '#3b82f6', '#ffffff']
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-[#090d14] tech-grid border-t-2 border-slate-800">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#74db26]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* Main Collaboration Card (Matching Reference Screenshot 073807) */}
        <div className="bg-[#0f141d] border-2 border-slate-700/80 rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: User Cutout Photo */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="w-56 sm:w-64 aspect-[3/4] rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-gradient-to-t from-[#090d14] via-transparent to-transparent">
                <img 
                  src="/assets/profile.png" 
                  alt="Nabila Putri Azhari" 
                  className="w-full h-full object-cover object-top filter contrast-105"
                />
              </div>

              {/* Floating Bot Speech Icon */}
              <div className="absolute -top-3 -right-2 sm:right-6 bg-white text-slate-900 rounded-full p-2.5 shadow-xl border-2 border-black flex items-center gap-1.5 animate-bounce">
                <Bot className="w-5 h-5 text-emerald-600" />
                <span className="font-display font-black text-xs">Let's talk!</span>
              </div>
            </div>

            {/* Right Column: Speech Bubble & Contact Links */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* White Speech Bubble Header (Reference Style) */}
              <div className="bg-white text-slate-900 rounded-3xl p-6 shadow-2xl relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge-pill-green text-xs font-black px-3 py-1">
                    Collaboration & Roles
                  </span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight">
                  Let's build impactful AI solutions together.
                </h2>
                <p className="font-sans text-xs sm:text-sm text-slate-600 mt-2">
                  Open for AI research collaboration, computer vision engineering roles, and technical discussions.
                </p>
              </div>

              {/* Contact Links Card List (Reference Style) */}
              <div className="space-y-2.5">
                
                {/* LinkedIn */}
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#182130] border border-slate-700 hover:border-[#74db26] transition-all text-slate-200 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm font-semibold truncate group-hover:text-[#74db26] transition-colors">
                    linkedin.com/in/nabila-putri-azhari
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#182130] border border-slate-700 hover:border-[#74db26] transition-all text-slate-200 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-slate-700 text-slate-300 flex items-center justify-center shrink-0">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm font-semibold truncate group-hover:text-[#74db26] transition-colors">
                    github.com/nabila-azhari
                  </span>
                </a>

                {/* Phone / WhatsApp */}
                <a
                  href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#182130] border border-slate-700 hover:border-[#74db26] transition-all text-slate-200 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm font-semibold group-hover:text-[#74db26] transition-colors">
                    {personalInfo.phone}
                  </span>
                </a>

                {/* Email with Direct Copy Button */}
                <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-[#182130] border border-slate-700 text-slate-200">
                  <div className="flex items-center gap-3 truncate">
                    <div className="w-8 h-8 rounded-xl bg-[#74db26]/20 text-[#74db26] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs sm:text-sm font-semibold truncate">
                      {personalInfo.email}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopyEmail(personalInfo.email)}
                    className="badge-pill-green text-[11px] font-bold px-3 py-1 shrink-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

              </div>

              {/* Action Buttons: Email & Resume */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="badge-pill-green text-xs font-extrabold flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>

                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="CV_Nabila_Putri_Azhari.pdf"
                  className="px-5 py-2.5 rounded-full bg-[#182130] border border-slate-700 hover:border-[#74db26] text-white text-xs font-bold transition-all flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-[#74db26]" />
                  <span>Download ATS CV</span>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Footer Sub-Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400 max-w-5xl mx-auto">
          <div>
            © 2026 <strong className="text-white">Nabila Putri Azhari</strong>. Telkom University.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141b26] border border-slate-700 text-slate-300 hover:text-[#74db26] hover:border-[#74db26] transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </footer>
  );
}
