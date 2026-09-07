import React from 'react';
import { skillsCategories, techStackLogos } from '../data/portfolioData';
import { Code2, Cpu, Database, Cloud, Terminal, Sparkles, Layers, CheckCircle } from 'lucide-react';
import { PythonIcon, PyTorchIcon, ReactIcon } from './Icons';

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#74db26] overflow-hidden">
      
      {/* Background Subtle Tech Patterns */}
      <div className="absolute inset-0 tech-grid-dense opacity-15 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Pill Badge (Reference Screenshot 073637 Style) */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#0f141d] text-white font-display font-extrabold text-lg sm:text-2xl px-8 py-3 rounded-full shadow-2xl border-2 border-black flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#74db26] animate-pulse"></span>
            Skills & Tools
          </div>
        </div>

        {/* Main Content Card with 3D Terminal Accents */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Floating Left 3D Code Badge */}
          <div className="absolute -left-6 sm:-left-12 top-10 z-20 hidden md:flex items-center justify-center w-24 h-24 rounded-3xl bg-[#0f141d] border-4 border-black text-[#74db26] shadow-2xl transform -rotate-12 animate-float-slow">
            <div className="font-mono font-black text-2xl tracking-tighter">&lt;/&gt;</div>
          </div>

          {/* Floating Right 3D Code Window Badge */}
          <div className="absolute -right-6 sm:-right-12 top-24 z-20 hidden md:flex flex-col p-3 w-28 rounded-2xl bg-[#0f141d] border-4 border-black text-[#74db26] shadow-2xl transform rotate-12 animate-float-slow">
            <div className="flex gap-1 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-[#74db26]"></div>
            </div>
            <div className="font-mono text-[9px] text-slate-300 space-y-0.5">
              <div>yolo.train()</div>
              <div className="text-[#74db26]">loss: 0.012</div>
              <div>mAP50: 98%</div>
            </div>
          </div>

          {/* Clean White Card Container (Reference Style) */}
          <div className="bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-2xl border-4 border-black">
            
            {/* Skills Table Rows with Capsule Styling */}
            <div className="space-y-4 mb-10">
              {skillsCategories.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center rounded-2xl sm:rounded-full border-2 border-slate-900 overflow-hidden bg-slate-50 shadow-sm hover:border-[#74db26] transition-colors"
                >
                  {/* Left Pill Header */}
                  <div className="bg-[#212734] text-white font-display font-bold text-xs sm:text-sm px-6 py-2.5 sm:w-56 shrink-0 flex items-center justify-between sm:justify-start gap-2">
                    <span>{item.category}</span>
                  </div>

                  {/* Right Skills Content */}
                  <div className="px-5 py-2.5 font-sans font-medium text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {item.skills}
                  </div>
                </div>
              ))}
            </div>

            {/* Brand / Tech Logos Grid (Reference Style) */}
            <div className="pt-8 border-t-2 border-slate-200">
              <div className="text-center font-display font-black text-xs uppercase tracking-widest text-slate-500 mb-6">
                PROVEN TECHNOLOGY STACK & FRAMEWORKS
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
                {techStackLogos.map((tech, idx) => (
                  <div 
                    key={idx}
                    className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-100 border border-slate-300 hover:border-black hover:bg-white hover:scale-105 transition-all shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-xl bg-slate-900 text-[#74db26] flex items-center justify-center font-mono font-bold text-xs shadow-inner mb-1.5">
                      {tech.name.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="font-display font-extrabold text-[11px] text-slate-900 text-center leading-tight">
                      {tech.name}
                    </span>
                    <span className="font-mono text-[9px] text-slate-500">
                      {tech.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
