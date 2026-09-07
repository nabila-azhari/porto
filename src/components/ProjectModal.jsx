import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Prevent background scrolling when modal is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      
      <div className="relative w-full max-w-4xl bg-[#0d121b] border-2 border-[#74db26] rounded-[32px] shadow-2xl overflow-hidden text-white my-8 max-h-[90vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700/80 bg-[#121824] shrink-0">
          <div className="flex items-center gap-3">
            <span className="badge-pill-green text-xs font-black px-3.5 py-1">
              {project.tag || project.category}
            </span>
            <span className="font-mono text-xs text-[#74db26] font-bold hidden sm:inline">
              {project.conference}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#1e2738] border border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans">
          
          {/* Title and Subtitle */}
          <div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              {project.title}
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300 mt-2">
              {project.subtitle}
            </p>
          </div>

          {/* Visual Banner / Architecture Preview */}
          <div className="rounded-2xl overflow-hidden border-2 border-slate-700 shadow-xl aspect-[16/9] bg-slate-900 relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <div className="font-mono text-xs text-[#74db26] font-bold">
                {project.details?.venue || 'Research Showcase'}
              </div>
            </div>
          </div>

          {/* 4 Key Metrics */}
          {project.details?.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.details.metrics.map((m, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-[#161d2b] border border-slate-700/80 text-center">
                  <div className="font-display font-black text-sm sm:text-base text-[#74db26]">
                    {m.value}
                  </div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Case Study Deep-Dive Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Problem Statement */}
            <div className="p-5 rounded-2xl bg-[#121824] border border-slate-700/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                Challenge & Problem
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.details?.problem || 'Addressing real-world computational bottlenecks and algorithmic accuracy constraints.'}
              </p>
            </div>

            {/* Architectural Solution */}
            <div className="p-5 rounded-2xl bg-[#121824] border border-slate-700/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#74db26] font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#74db26]"></span>
                Engineered Solution
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.details?.solution || 'Designed and implemented robust deep learning pipelines and real-time inference systems.'}
              </p>
            </div>

          </div>

          {/* Tech Stack Chips */}
          {project.details?.stack && (
            <div className="space-y-2">
              <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                Frameworks & Technologies
              </div>
              <div className="flex flex-wrap gap-2">
                {project.details.stack.map((tool, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-[#182130] border border-slate-700 font-mono text-xs text-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t border-slate-700/80 bg-[#121824] shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#1c2434] text-slate-300 hover:text-white font-bold text-xs"
          >
            Close Window
          </button>

          <a
            href={project.details?.github || 'https://github.com/nabila-azhari'}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-pill-green text-xs font-extrabold flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4 text-black" />
            <span>Open Repository</span>
          </a>
        </div>

      </div>

    </div>
  );
}
