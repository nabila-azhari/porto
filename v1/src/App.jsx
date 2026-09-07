import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import SelectedWork from './components/SelectedWork';
import DataProjects from './components/DataProjects';
import PublicationsAndAwards from './components/PublicationsAndAwards';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#090d14] text-white selection:bg-[#74db26] selection:text-black relative font-sans">
      
      {/* Custom Glowing Cursor */}
      <CustomCursor />

      {/* Floating Navigation Header */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <SelectedWork onSelectProject={setSelectedProject} />
        <DataProjects onSelectProject={setSelectedProject} />
        <PublicationsAndAwards onOpenPublicationModal={setSelectedProject} />
        <Contact />
      </main>

      {/* Project Case Study Lightbox Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
