
import React, { useState, useContext } from 'react';
import { Project } from '../types';
import { LanguageContext } from '../App';

interface PortfolioGridProps {
  projects: Project[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const { lang, t } = useContext(LanguageContext);

  const featured = projects.slice(0, 4);
  const archive = projects.slice(4);

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="flex flex-col gap-24">
      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {featured.map((project) => (
          <div 
            key={project.id} 
            className="group cursor-pointer"
            onClick={() => openGallery(project)}
          >
            <div className="relative overflow-hidden aspect-[16/11] bg-[var(--bg-tertiary)] mb-6 shadow-xl">
              <img 
                src={project.mainImage} 
                alt={project.title[lang]}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 text-[9px] uppercase tracking-widest text-white border border-white/10">
                {t.portfolioFeatured}
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[var(--accent)] text-[10px] uppercase tracking-widest mb-1 block">
                  {project.residentialComplex[lang]} • {project.sqm} m²
                </span>
                <h3 className="text-2xl font-serif">{project.title[lang]}</h3>
              </div>
              <div className="text-[var(--text-secondary)] text-[10px] uppercase tracking-widest mt-2">
                {project.year}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Archive List */}
      {archive.length > 0 && (
        <div className="mt-12">
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-8 border-t border-[var(--border)] pt-12">{t.portfolioArchiveTitle}</h4>
          <div className="flex flex-col relative">
            {archive.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => openGallery(project)}
                className="group flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-[var(--border)] cursor-pointer hover:bg-[var(--accent)]/5 px-4 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12">
                  <span className="text-[var(--text-secondary)] opacity-50 text-xs font-mono">0{project.id}</span>
                  <div className="flex flex-col">
                    <span className="text-lg font-serif group-hover:text-[var(--accent)] transition-colors">{project.title[lang]}</span>
                    <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest md:hidden">{project.residentialComplex[lang]}</span>
                  </div>
                </div>
                
                <div className="hidden md:flex flex-grow justify-center px-12">
                   <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest">{project.residentialComplex[lang]}</span>
                </div>

                <div className="flex items-center gap-12 mt-2 md:mt-0">
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest">{project.sqm} m²</span>
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest w-12 text-right">{project.year}</span>
                </div>

                {hoveredProject === project.id && (
                  <div className="fixed pointer-events-none z-50 w-64 aspect-video overflow-hidden hidden lg:block animate-in fade-in zoom-in duration-300" 
                       style={{ left: '50%', transform: 'translate(-50%, -120%)' }}>
                    <img src={project.mainImage} alt="Preview" className="w-full h-full object-cover shadow-2xl border border-[var(--border)]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Modal / Gallery */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] bg-[var(--bg-primary)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-y-auto"
          onClick={closeGallery}
        >
          {/* Header */}
          <div className="sticky top-0 z-[110] bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border)] px-6 h-20 flex justify-between items-center">
             <div className="flex flex-col">
               <h3 className="text-xl font-serif text-[var(--text-primary)]">{selectedProject.title[lang]}</h3>
               <span className="text-[10px] text-[var(--accent)] uppercase tracking-widest">{selectedProject.residentialComplex[lang]}</span>
             </div>
             <button onClick={closeGallery} className="p-2 hover:bg-[var(--accent)]/10 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>
          </div>

          <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16" onClick={e => e.stopPropagation()}>
            <div className="lg:w-2/3 space-y-8">
              <img src={selectedProject.mainImage} alt="Main" className="w-full aspect-video object-cover shadow-2xl" />
              <div className="grid grid-cols-2 gap-4">
                {selectedProject.gallery.map((img, i) => (
                  <img key={i} src={img} alt={`Gallery ${i}`} className="w-full aspect-video object-cover hover:opacity-80 transition-opacity cursor-pointer shadow-lg" />
                ))}
              </div>
            </div>

            <div className="lg:w-1/3 space-y-12">
              <div className="space-y-6">
                 <h4 className="text-[10px] uppercase tracking-[0.4em] text-[var(--text-secondary)]">{t.detailsTitle}</h4>
                 <div className="space-y-4">
                    <div className="flex justify-between border-b border-[var(--border)] pb-4">
                      <span className="text-xs text-[var(--text-secondary)] uppercase tracking-widest">{t.detailsLocation}</span>
                      <span className="text-sm">{selectedProject.address[lang]}</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--border)] pb-4">
                      <span className="text-xs text-[var(--text-secondary)] uppercase tracking-widest">{t.detailsArea}</span>
                      <span className="text-sm">{selectedProject.sqm} m²</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--border)] pb-4">
                      <span className="text-xs text-[var(--text-secondary)] uppercase tracking-widest">{t.detailsYear}</span>
                      <span className="text-sm">{selectedProject.year}</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--border)] pb-4">
                      <span className="text-xs text-[var(--text-secondary)] uppercase tracking-widest">{t.detailsType}</span>
                      <span className="text-sm">{selectedProject.category}</span>
                    </div>
                 </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-[var(--text-secondary)]">{t.detailsDesc}</h4>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {selectedProject.description[lang]}
                </p>
              </div>

              <div className="pt-6 space-y-4">
                {selectedProject.pdfFiles && selectedProject.pdfFiles.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-4">{t.detailsDownload}</h4>
                    {selectedProject.pdfFiles.map((file, idx) => (
                      <a 
                        key={idx}
                        href={file.url}
                        target="_blank"
                        className="flex items-center justify-between w-full p-4 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--text-primary)] transition-all group"
                      >
                        <span className="text-[10px] uppercase tracking-widest font-bold">{file.name[lang]}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[var(--accent)] group-hover:translate-x-1 transition-transform">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
                <button 
                  onClick={closeGallery}
                  className="w-full py-5 border border-[var(--border)] text-[var(--text-primary)] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all mt-8"
                >
                  {t.detailsReturn}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
