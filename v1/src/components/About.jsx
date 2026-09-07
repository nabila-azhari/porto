import React from 'react';
import { personalInfo, educationList } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Sparkles, CheckCircle2, UserCheck, Laptop, Smartphone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#090d14] tech-grid">
      
      {/* Radial Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#74db26]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Container Card (Reference Screenshot 073625 Style) */}
        <div className="relative bg-[#0d121b] border border-slate-800/80 rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Mobile Phone Frame + Tablet & Laptop Mockup Stacking */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[440px]">
              
              {/* Mobile Phone Mockup Frame */}
              <div className="phone-shell w-56 sm:w-64 aspect-[9/18] relative z-20 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Phone Speaker Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-800 rounded-full z-30"></div>
                
                <img 
                  src="/assets/profile.png" 
                  alt="Nabila Putri Azhari" 
                  className="w-full h-full object-cover object-top filter contrast-105"
                />
                
                {/* Floating Tag inside Phone */}
                <div className="absolute bottom-4 left-3 right-3 p-3 rounded-2xl bg-[#0d121b]/90 backdrop-blur-md border border-slate-700/80 text-center">
                  <span className="badge-pill-green text-[11px] font-extrabold px-3 py-1">
                    GPA 3.81 / 4.00
                  </span>
                  <div className="font-display font-extrabold text-xs text-white mt-1">
                    Telkom University
                  </div>
                  <div className="font-mono text-[10px] text-[#74db26]">
                    Bank Indonesia Scholar
                  </div>
                </div>
              </div>

              {/* Decorative Secondary Tech Screen in Background */}
              <div className="absolute -bottom-4 right-2 sm:right-6 w-48 sm:w-56 p-4 rounded-2xl bg-[#151c2a] border border-slate-700/80 shadow-2xl z-10 hidden sm:block">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700 font-mono text-[10px] text-[#74db26]">
                  <span>AI_LAB_TELKOM</span>
                  <span>1ST_AUTHOR</span>
                </div>
                <div className="font-mono text-[10px] text-slate-300 space-y-1">
                  <div>✓ ICERA 2026 Paper</div>
                  <div>✓ Computer Vision</div>
                  <div>✓ VLM & Medical RAG</div>
                </div>
              </div>

            </div>

            {/* Right Column: About Me Card & Education Card (Reference Style) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Laptop Screen Style Card: About Me */}
              <div className="laptop-shell bg-white text-slate-900 p-6 sm:p-8 rounded-2xl shadow-2xl relative">
                
                {/* Green Pill Badge on Card */}
                <div className="flex justify-start sm:justify-end mb-4">
                  <span className="badge-pill-green text-sm sm:text-base font-extrabold px-6 py-1.5 shadow-md">
                    About Me
                  </span>
                </div>

                {/* Narrative Text (Matching Reference Layout) */}
                <div className="space-y-4 font-sans text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Undergraduate student in Informatics at <strong>Telkom University</strong> specializing in Computer Vision, with focus on <strong>Classification, Object Detection, and Segmentation</strong>.
                  </p>
                  
                  <p>
                    <strong>Bank Indonesia Scholarship Awardee</strong> with a cumulative <strong>GPA of 3.81 / 4.00</strong>. Currently active as an AI Engineer, Laboratory Assistant at Telkom AI Lab, and First Author of accepted international research at <strong>ICERA 2026</strong>.
                  </p>

                  <p>
                    Passionate about building production-ready AI pipelines, multimodal medical diagnostics (VLM + RAG), and bridging the gap between rigorous scientific research and real-world implementation.
                  </p>
                </div>

              </div>

              {/* Education Device Card */}
              <div className="bg-[#121824] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
                
                {/* Green Pill Badge */}
                <div className="flex justify-start sm:justify-end mb-6">
                  <span className="badge-pill-green text-sm sm:text-base font-extrabold px-6 py-1.5 shadow-md">
                    Education
                  </span>
                </div>

                {/* Education Items with Reference Pill Styling */}
                <div className="space-y-6">
                  {educationList.map((edu, idx) => (
                    <div key={idx} className="space-y-2 pb-4 border-b border-slate-800/80 last:border-b-0 last:pb-0">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="badge-pill-dark font-bold text-xs sm:text-sm">
                          <GraduationCap className="w-4 h-4 text-[#74db26]" />
                          {edu.institution}
                        </span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-[#74db26]">
                          {edu.gpa}
                        </span>
                      </div>

                      <div className="text-white font-display font-bold text-sm sm:text-base pl-2">
                        {edu.degree} <span className="font-mono text-xs text-slate-400 font-normal">({edu.period})</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-400 pl-2 leading-relaxed">
                        {edu.details}
                      </p>

                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>

          {/* Reference Bottom Accent Stripe */}
          <div className="mt-10 pt-4 border-t border-slate-800/80 flex items-center gap-2">
            <div className="h-3 flex-1 bg-[#74db26] rounded-sm shadow-sm shadow-[#74db26]/40"></div>
            <div className="h-3 w-1/3 bg-[#1e2738] rounded-sm"></div>
            <div className="h-3 flex-1 bg-[#74db26] rounded-sm shadow-sm shadow-[#74db26]/40"></div>
          </div>

        </div>

      </div>

    </section>
  );
}
