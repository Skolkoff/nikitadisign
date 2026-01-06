
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Hero: React.FC = () => {
  const { t } = useContext(LanguageContext);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center overflow-hidden bg-[var(--bg-primary)]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--bg-tertiary)] -z-10 translate-x-1/4 skew-x-12 opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[var(--accent)]"></span>
            <span className="text-[var(--accent)] tracking-[0.3em] uppercase text-sm font-medium">{t.heroRole}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-8 leading-none">
            {t.heroTitle} <br />
            <span className="italic opacity-80">{t.heroTitleItalic}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-xl mb-12 leading-relaxed">
            {t.heroDesc}
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button 
              onClick={(e) => scrollToSection(e, 'portfolio')}
              className="bg-[var(--accent)] text-white px-10 py-5 text-[10px] uppercase tracking-widest font-bold hover:brightness-110 transition-all duration-300 transform hover:-translate-y-1"
            >
              {t.heroViewWork}
            </button>
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="border border-[var(--border)] hover:border-[var(--text-primary)] px-10 py-5 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 transform hover:-translate-y-1"
            >
              {t.heroTalk}
            </button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={(e) => scrollToSection(e, 'portfolio')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce opacity-60 hover:opacity-100 transition-all duration-300 group cursor-pointer"
      >
        <div className="w-px h-12 bg-[var(--text-primary)] opacity-20 group-hover:bg-[var(--accent)] group-hover:opacity-100 transition-all"></div>
      </button>
    </div>
  );
};

export default Hero;
