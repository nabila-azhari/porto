import React, { useState } from 'react';
import { publications, teachingExperience, achievements } from '../data/portfolioData';
import { BookOpen, Award, Trophy, GraduationCap, CheckCircle2, Eye, FileText, BadgeCheck } from 'lucide-react';

export default function PublicationsAndAwards({ onOpenPublicationModal }) {
  const [selectedPaper, setSelectedPaper] = useState(null);

  return (
    <section id="publications" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#090d14] tech-grid">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#74db26]/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-24">
        
        {/* =========================================================================
            1. PUBLICATIONS SECTION (Screenshot 073749)
           ========================================================================= */}
        <div>
          {/* Section Pill Badge */}
          <div className="flex justify-center mb-10">
            <div className="badge-pill-green text-lg sm:text-2xl font-black px-8 py-3 shadow-2xl">
              Publications
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {publications.map((pub, idx) => (
              <div 
                key={idx}
                className="bg-[#121824] border-2 border-slate-700/80 rounded-[32px] p-6 sm:p-10 shadow-2xl relative overflow-hidden"
              >
                
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700/80">
                  <span className="badge-pill-white text-xs sm:text-sm font-extrabold px-4 py-1">
                    {pub.venueBadge}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#74db26] animate-pulse"></span>
                    <span className="font-mono text-xs font-bold text-[#74db26]">
                      {pub.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Paper Page & Certificate Preview (Screenshot Style) */}
                  <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                    
                    {/* Paper Document Preview Thumbnail */}
                    <div className="p-3 rounded-2xl bg-white text-slate-900 border border-slate-300 shadow-md font-serif text-[8px] leading-tight space-y-1.5 h-52 overflow-hidden select-none">
                      <div className="font-bold text-[9px] border-b pb-1 text-center font-sans">
                        PACT: Compliance Reporting in PPE Detection
                      </div>
                      <div className="text-[7px] text-slate-500 text-center font-mono">
                        Nabila Putri Azhari (1st Author)
                      </div>
                      <div className="bg-slate-100 p-1.5 rounded text-[7px] text-slate-700">
                        <strong>Abstract:</strong> Automated Personal Protective Equipment monitoring in high-risk environments using pose-anchored body assignment...
                      </div>
                      <div className="grid grid-cols-2 gap-1 pt-1">
                        <div className="bg-slate-200 h-10 rounded"></div>
                        <div className="bg-slate-200 h-10 rounded"></div>
                      </div>
                    </div>

                    {/* Certificate Thumbnail */}
                    <div className="p-3 rounded-2xl bg-[#1e2738] border border-slate-600 shadow-md flex flex-col justify-between h-52 text-center">
                      <div className="text-[10px] font-mono text-[#74db26] font-bold">
                        ICERA 2026
                      </div>
                      <div className="my-auto space-y-1">
                        <Award className="w-8 h-8 text-[#74db26] mx-auto" />
                        <div className="text-[10px] font-display font-extrabold text-white">
                          Certificate of Acceptance
                        </div>
                        <div className="text-[8px] font-mono text-slate-400">
                          Nabila Putri Azhari
                        </div>
                      </div>
                      <div className="text-[8px] font-mono text-slate-500">
                        IEEE / ICERA Conference
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Title, Authors, Abstract & CTA */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#74db26] text-lg font-black mt-0.5">▶</span>
                      <div>
                        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white leading-tight">
                          {pub.title}
                        </h3>
                        <div className="font-mono text-xs text-[#74db26] font-bold mt-1.5">
                          {pub.authors}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed pl-6">
                      {pub.abstract}
                    </p>

                    <div className="text-xs font-mono text-slate-400 pl-6 space-y-1">
                      <div><strong className="text-white">Venue:</strong> {pub.venue}</div>
                      <div><strong className="text-white">Year:</strong> {pub.year}</div>
                    </div>

                    <div className="pt-2 pl-6">
                      <button
                        onClick={() => setSelectedPaper(pub)}
                        className="btn-click-to-read"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Click to Read Paper Details</span>
                      </button>
                    </div>

                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>


        {/* =========================================================================
            2. TEACHING EXPERIENCE SECTION (Screenshot 073759)
           ========================================================================= */}
        <div id="teaching">
          {/* Section Pill Badge */}
          <div className="flex justify-center mb-10">
            <div className="badge-pill-green text-lg sm:text-2xl font-black px-8 py-3 shadow-2xl">
              Teaching Experience
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* 2 Assistant Role Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teachingExperience.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-[#121824] border-2 border-slate-700/80 rounded-[28px] p-6 sm:p-8 shadow-xl space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                    <span className="badge-pill-white text-xs sm:text-sm font-black">
                      {item.role}
                    </span>
                    <span className="badge-pill-green text-xs font-extrabold px-3 py-1">
                      {item.period}
                    </span>
                  </div>

                  <div className="font-display font-extrabold text-sm sm:text-base text-white">
                    {item.lab}
                  </div>

                  <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-slate-300">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#74db26] font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Photo Gallery & Certificates Preview (Screenshot Style) */}
            <div className="bg-[#121824] border-2 border-slate-700/80 rounded-[28px] p-6 sm:p-8 shadow-xl">
              <div className="text-xs font-mono text-[#74db26] font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Lab Mentorship, Speaker Sessions & Certifications</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700">
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop" alt="Lab session" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700">
                  <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop" alt="Workshop Speaker" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop" alt="Practicum Class" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" alt="Team Discussion" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* =========================================================================
            3. ACHIEVEMENTS & AWARDS SECTION (Screenshot 073807)
           ========================================================================= */}
        <div id="achievements">
          {/* Section Pill Badge */}
          <div className="flex justify-center mb-10">
            <div className="badge-pill-green text-lg sm:text-2xl font-black px-8 py-3 shadow-2xl">
              Achievements
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            
            <div className="bg-[#121824] border-2 border-slate-700/80 rounded-[32px] p-6 sm:p-10 shadow-2xl space-y-8">
              
              {/* Top Photo & Trophy Showcase Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-slate-800 border border-slate-700">
                  <img src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&auto=format&fit=crop" alt="Competition Award" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-slate-800 border border-slate-700">
                  <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" alt="Hackathon Winner" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-slate-800 border border-slate-700">
                  <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop" alt="Scholarship Award Ceremony" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Pill Awards List (Matching Screenshot 073807 Layout) */}
              <div className="space-y-3">
                {achievements.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center rounded-2xl sm:rounded-full border border-slate-700 bg-[#192232] overflow-hidden hover:border-[#74db26] transition-colors"
                  >
                    {/* Left Green / Dark Pill Tag */}
                    <div className="bg-[#74db26] text-black font-display font-extrabold text-xs px-5 py-2 sm:w-48 shrink-0 text-center sm:text-left">
                      {item.badge}
                    </div>

                    {/* Right Award Title & Organizer */}
                    <div className="px-5 py-2 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                      <span className="font-display font-bold text-white">
                        {item.title}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {item.org} ({item.year})
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal for Publication details */}
      {selectedPaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0f141d] border-2 border-[#74db26] rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl text-white relative">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700">
              <span className="badge-pill-green text-xs font-black">
                {selectedPaper.venueBadge}
              </span>
              <button 
                onClick={() => setSelectedPaper(null)}
                className="p-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white"
              >
                ✕
              </button>
            </div>

            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-2">
              {selectedPaper.title}
            </h3>
            <div className="font-mono text-xs text-[#74db26] mb-4">
              {selectedPaper.authors}
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              <div>
                <strong className="text-white">Abstract:</strong>
                <p className="mt-1 text-slate-300">{selectedPaper.abstract}</p>
              </div>
              <div>
                <strong className="text-white">Venue:</strong> {selectedPaper.venue}
              </div>
              <div>
                <strong className="text-white">Status:</strong> {selectedPaper.status}
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedPaper(null)}
                className="badge-pill-green text-xs font-bold"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
