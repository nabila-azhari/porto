import React from 'react';
import { dataProjects } from '../data/portfolioData';
import { BarChart3, Database, Sparkles, TrendingUp, Activity, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function DataProjects({ onSelectProject }) {
  return (
    <section id="data-projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#74db26] overflow-hidden">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 tech-grid-dense opacity-15 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Pill Badge (Reference Screenshot 073742 Style) */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#0f141d] text-white font-display font-extrabold text-lg sm:text-2xl px-8 py-3 rounded-full shadow-2xl border-2 border-black flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#74db26] animate-pulse"></span>
            Data Project
          </div>
        </div>

        {/* Data Projects Cards Grid */}
        <div className="space-y-10 max-w-5xl mx-auto">
          {dataProjects.map((item, idx) => (
            <div 
              key={item.id}
              className="bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-2xl border-4 border-black"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual Dashboard Screen Mockup (Left or Right) */}
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'order-1 lg:order-2' : ''}`}>
                  <div className="laptop-shell bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800 aspect-[16/10] relative group">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-4">
                      <div className="flex items-center justify-between w-full">
                        <span className="badge-pill-white text-[10px] font-extrabold">
                          {item.badge}
                        </span>
                        <span className="text-[#74db26] font-mono text-[10px] font-bold">
                          INTERACTIVE DASHBOARD
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content & Details */}
                <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? 'order-2 lg:order-1' : ''}`}>
                  
                  {/* Dark Pill Badge */}
                  <div>
                    <span className="badge-pill-dark font-extrabold text-xs sm:text-sm px-4 py-1.5 shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title with Green Pointer ▶ */}
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#74db26] text-lg font-black mt-0.5">▶</span>
                    <div>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 leading-tight">
                        {item.title}
                      </h3>
                      <div className="font-sans text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-1.5 pl-6 font-sans text-xs sm:text-sm text-slate-700">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#74db26] font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 pl-6">
                    {item.stack.map((s, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-300 font-mono text-[10px] font-semibold text-slate-800">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link */}
                  <div className="pt-2 pl-6">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all shadow-md"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-[#74db26]" />
                      <span>View Analytics Pipeline</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
