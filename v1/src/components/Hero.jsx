import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { MapPin, Phone, Mail, Sparkles, Cpu, ArrowDownRight, Terminal, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden bg-[#090d14] tech-grid">
      
      {/* Background Neon & Electric Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[550px] bg-[#74db26]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto">
        
        {/* Main Hero Container Card (Reference Screenshot 073611 Layout) */}
        <div className="relative bg-[#0d121b] border border-slate-800/80 rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          
          {/* Subtle Corner Circuit Grid Accent */}
          <div className="absolute inset-0 tech-grid-dense opacity-30 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: 3D AI Tech Graphics + Laptop Frame + User Cutout Photo */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[460px]">
              
              {/* Laptop Screen Frame in Background */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[85%] sm:w-[90%] max-w-[420px] aspect-[16/10] bg-[#151b27] border-4 border-slate-700 rounded-2xl shadow-2xl overflow-hidden opacity-90">
                <div className="bg-[#1e2738] px-3 py-1.5 flex items-center gap-1.5 border-b border-slate-700">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  <span className="text-[10px] font-mono text-slate-400 ml-2">vision_ai_core.py</span>
                </div>
                <div className="p-4 font-mono text-[11px] text-slate-300 space-y-1">
                  <div className="text-[#74db26] font-bold">import torch, ultralytics</div>
                  <div className="text-slate-400"># ICERA 2026 1st Author Research</div>
                  <div>model = PACT.load_pose_anchors()</div>
                  <div className="text-slate-400"># Pose-Anchored Compliance</div>
                  <div className="text-emerald-400 font-semibold">status = "30+ FPS Realtime"</div>
                </div>
              </div>

              {/* Floating 3D AI Chip Badge (Reference Style) */}
              <div className="absolute top-2 left-2 sm:left-4 z-20 bg-gradient-to-br from-[#1a2333] to-[#0d131f] border-2 border-[#74db26] rounded-2xl p-3 shadow-xl shadow-[#74db26]/20 flex items-center gap-2.5 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-[#74db26] flex items-center justify-center text-black font-black text-lg shadow-md">
                  AI
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-mono text-[#74db26] font-bold uppercase tracking-wider">Computer Vision</div>
                  <div className="text-xs font-display font-black text-white">ICERA 2026</div>
                </div>
              </div>

              {/* Central User Cutout Profile Photo */}
              <div className="relative z-10 w-56 sm:w-72 aspect-[3/4] rounded-3xl overflow-hidden border-2 border-slate-700/60 shadow-2xl bg-gradient-to-t from-[#090d14] via-transparent to-transparent mt-12 sm:mt-16 group">
                <img 
                  src="/assets/profile.png" 
                  alt="Nabila Putri Azhari" 
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d14] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Floating Role Pill (Bottom Left matching reference) */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-4 z-20">
                <div className="badge-pill-green text-xs sm:text-sm shadow-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                  AI Engineer (Computer Vision)
                </div>
              </div>

            </div>

            {/* Right Column: Name Card, Degree Badge, Contact Badges */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              
              {/* White Clean Name Card (Reference Style) */}
              <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="badge-pill-green text-xs sm:text-sm font-extrabold px-4 py-1">
                    {personalInfo.titleDegree}
                  </span>
                  <span className="bg-slate-900 text-white font-bold text-xs px-3.5 py-1 rounded-full">
                    Bank Indonesia Scholar
                  </span>
                </div>

                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.05]">
                  {personalInfo.name}
                </h1>

                <p className="mt-3 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                  Informatics undergraduate at <strong className="text-slate-900">Telkom University</strong> specializing in Computer Vision, Vision-Language Models, and intelligent web architectures.
                </p>
              </div>

              {/* Contact Info Pills with Green Icons (Reference Style) */}
              <div className="space-y-3 pt-1">
                
                {/* Location */}
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-9 h-9 rounded-full bg-[#74db26] flex items-center justify-center text-black font-bold shadow-md shadow-[#74db26]/20 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-sm sm:text-base text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-9 h-9 rounded-full bg-[#74db26] flex items-center justify-center text-black font-bold shadow-md shadow-[#74db26]/20 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="font-medium text-sm sm:text-base text-slate-200 hover:text-[#74db26] transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-9 h-9 rounded-full bg-[#74db26] flex items-center justify-center text-black font-bold shadow-md shadow-[#74db26]/20 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href={`mailto:${personalInfo.email}`} className="font-medium text-sm sm:text-base text-slate-200 hover:text-[#74db26] transition-colors break-all">
                    {personalInfo.email}
                  </a>
                </div>

              </div>

              {/* Social & Action Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href={personalInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-[#18202e] border border-slate-700 text-xs font-bold text-slate-200 hover:border-[#74db26] hover:text-[#74db26] transition-all flex items-center gap-2"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#74db26]" />
                  <span>LinkedIn Profile</span>
                </a>
                
                <a 
                  href={personalInfo.socials.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-[#18202e] border border-slate-700 text-xs font-bold text-slate-200 hover:border-[#74db26] hover:text-[#74db26] transition-all flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4 text-[#74db26]" />
                  <span>GitHub</span>
                </a>

                <a 
                  href="#projects" 
                  className="badge-pill-green text-xs font-extrabold flex items-center gap-1.5"
                >
                  <span>View Projects</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

          {/* Reference Bottom Accent Stripe */}
          <div className="mt-8 sm:mt-10 pt-4 border-t border-slate-800/80 flex items-center gap-2">
            <div className="h-3 flex-1 bg-[#74db26] rounded-sm shadow-sm shadow-[#74db26]/40"></div>
            <div className="h-3 w-1/4 bg-[#1e2738] rounded-sm"></div>
            <div className="h-3 flex-1 bg-[#74db26] rounded-sm shadow-sm shadow-[#74db26]/40"></div>
          </div>

        </div>

      </div>

    </section>
  );
}
