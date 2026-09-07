import React from 'react';
import { projectList } from '../data/portfolioData';
import { ExternalLink, Eye, Sparkles, BookOpen, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function SelectedWork({ onSelectProject }) {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#090d14] tech-grid">
      
      {/* Radial Glows */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#74db26]/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Pill Badge (Reference Screenshot 073659 Style) */}
        <div className="flex justify-center mb-12">
          <div className="badge-pill-green text-lg sm:text-2xl font-black px-8 py-3 shadow-2xl">
            Project Section
          </div>
        </div>

        {/* Project Showcase Cards Grid */}
        <div className="space-y-12 max-w-5xl mx-auto">
          
          {projectList.map((project, idx) => {
            const isWhiteCard = idx % 2 === 0;

            return (
              <div 
                key={project.id}
                className={`rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-2xl border-4 transition-all duration-300 ${
                  isWhiteCard 
                    ? 'bg-white text-slate-900 border-black' 
                    : 'bg-[#111724] text-white border-slate-700/80'
                }`}
              >
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Tag Pill, Title, Bullet Points */}
                  <div className="lg:col-span-7 space-y-4">
                    
                    {/* Dark / Light Category Pill Badge */}
                    <div className="flex items-center gap-2">
                      <span className={`px-4 py-1.5 rounded-full font-display font-extrabold text-xs shadow-sm ${
                        isWhiteCard 
                          ? 'bg-[#212734] text-white' 
                          : 'bg-[#74db26] text-black'
                      }`}>
                        {project.tag}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#74db26]">
                        {project.conference}
                      </span>
                    </div>

                    {/* Project Title with Green Pointer ▶ */}
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#74db26] text-lg font-black mt-0.5">▶</span>
                      <div>
                        <h3 className={`font-display font-black text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight ${
                          isWhiteCard ? 'text-slate-900' : 'text-white'
                        }`}>
                          {project.title}
                        </h3>
                        <div className={`font-sans text-xs sm:text-sm font-semibold mt-1 ${
                          isWhiteCard ? 'text-slate-600' : 'text-slate-300'
                        }`}>
                          {project.subtitle}
                        </div>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className={`space-y-1.5 pl-6 font-sans text-xs sm:text-sm ${
                      isWhiteCard ? 'text-slate-700' : 'text-slate-300'
                    }`}>
                      {project.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#74db26] font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Buttons: Click to Read & Code Link */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="btn-click-to-read"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Click to Read Case Study</span>
                      </button>

                      <a
                        href={project.details.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                          isWhiteCard 
                            ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300' 
                            : 'bg-[#182130] hover:bg-[#202c40] text-slate-200 border border-slate-700'
                        }`}
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-[#74db26]" />
                        <span>Repository</span>
                      </a>
                    </div>

                  </div>

                  {/* Right Column: Visual Preview / Diagram Card */}
                  <div 
                    onClick={() => onSelectProject(project)}
                    className="lg:col-span-5 relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl aspect-[16/11] bg-slate-900 group cursor-pointer"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between">
                        <span className="badge-pill-white text-[10px] font-bold">
                          {project.details.category}
                        </span>
                        <span className="text-[#74db26] font-mono text-[10px] font-bold flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          VIEW STUDY
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
