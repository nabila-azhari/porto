import React from 'react';
import { workExperiences } from '../data/portfolioData';
import { Briefcase, Building2, Calendar, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#090d14] tech-grid">
      
      {/* Background Ambient Highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#74db26]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Pill Badge (Reference Screenshot 073649 Style) */}
        <div className="flex justify-center mb-10">
          <div className="badge-pill-green text-lg sm:text-2xl font-black px-8 py-3 shadow-2xl">
            Work & Experience
          </div>
        </div>

        {/* Main Content White Card Container (Reference Style) */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-2xl border-4 border-black max-w-5xl mx-auto">
          
          {/* 2-Column Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column (Items 1 & 2) */}
            <div className="space-y-8">
              {workExperiences.slice(0, 2).map((exp, idx) => (
                <div key={idx} className="space-y-3">
                  
                  {/* Dark Pill Role Badge */}
                  <div>
                    <span className="badge-pill-dark font-extrabold text-xs sm:text-sm px-4 py-1.5 shadow-sm">
                      {exp.role}
                    </span>
                  </div>

                  {/* Company & Date with Green Play Pointer ▶ */}
                  <div className="flex items-start gap-2 text-slate-900 font-display font-black text-sm sm:text-base">
                    <span className="text-[#74db26] text-sm mt-0.5 font-black">▶</span>
                    <div>
                      <span>{exp.company}</span>
                      <span className="text-slate-500 font-normal font-mono text-xs ml-2">({exp.period})</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 font-sans text-xs sm:text-sm leading-relaxed pl-5">
                    {exp.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pl-5 pt-1">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pl-5 pt-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-300 font-mono text-[10px] text-slate-700">
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>

            {/* Right Column (Items 3 & 4) */}
            <div className="space-y-8">
              {workExperiences.slice(2, 4).map((exp, idx) => (
                <div key={idx} className="space-y-3">
                  
                  {/* Dark Pill Role Badge */}
                  <div>
                    <span className="badge-pill-dark font-extrabold text-xs sm:text-sm px-4 py-1.5 shadow-sm">
                      {exp.role}
                    </span>
                  </div>

                  {/* Company & Date with Green Play Pointer ▶ */}
                  <div className="flex items-start gap-2 text-slate-900 font-display font-black text-sm sm:text-base">
                    <span className="text-[#74db26] text-sm mt-0.5 font-black">▶</span>
                    <div>
                      <span>{exp.company}</span>
                      <span className="text-slate-500 font-normal font-mono text-xs ml-2">({exp.period})</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 font-sans text-xs sm:text-sm leading-relaxed pl-5">
                    {exp.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pl-5 pt-1">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pl-5 pt-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-300 font-mono text-[10px] text-slate-700">
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* Photo Showcase Gallery (Matching Reference Screenshot 073649) */}
          <div className="mt-12 pt-8 border-t-2 border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Snapshot 1: Industry / Office at BMKG */}
              <div className="group rounded-2xl overflow-hidden border-2 border-slate-300 bg-slate-100 aspect-[4/3] relative shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                  alt="BMKG IT & AI Internship" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="badge-pill-white text-[10px] font-bold">
                    BMKG AI Internship
                  </span>
                </div>
              </div>

              {/* Snapshot 2: AI Lab Research / Campus */}
              <div className="group rounded-2xl overflow-hidden border-2 border-slate-300 bg-slate-100 aspect-[4/3] relative shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" 
                  alt="Telkom AI Laboratory Assistant" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="badge-pill-white text-[10px] font-bold">
                    Telkom AI Laboratory
                  </span>
                </div>
              </div>

              {/* Snapshot 3: Teaching & Practicum Sessions */}
              <div className="group rounded-2xl overflow-hidden border-2 border-slate-300 bg-slate-100 aspect-[4/3] relative shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" 
                  alt="Teaching Assistant Informatics Lab" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="badge-pill-white text-[10px] font-bold">
                    Informatics Lab Practicum
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
