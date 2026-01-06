
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const AboutMe: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 border border-[var(--accent)]/30 -z-10 translate-x-2 translate-y-2"></div>
            <img 
              src="/images/portret.PNG" 
              alt="Nikita - Interior Designer" 
              className="w-full grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[3/4] shadow-2xl"
            />
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                {t.aboutHeading}
              </h2>
              <div className="h-1 w-20 bg-[var(--accent)] mb-8"></div>
            </div>

            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              {t.aboutBio}
            </p>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-[var(--border)]">
              <div>
                <div className="text-3xl font-serif text-[var(--accent)] mb-1">2+</div>
                <div className="text-[10px] uppercase tracking-widest text-[var(--text-secondary)] opacity-50">{t.aboutExp}</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-[var(--accent)] mb-1">10+</div>
                <div className="text-[10px] uppercase tracking-widest text-[var(--text-secondary)] opacity-50">{t.aboutCompleted}</div>
              </div>
            </div>

            <div className="space-y-4 text-[var(--text-secondary)]">
              <p>{t.aboutSpecializing}</p>
              <p>{t.aboutStyle}</p>
            </div>

            <div className="pt-4">
               <div className="flex flex-wrap gap-4">
                 <span className="px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border)] text-[10px] uppercase tracking-widest">3ds Max + Corona</span>
                 <span className="px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border)] text-[10px] uppercase tracking-widest">Archicad</span>
                 <span className="px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border)] text-[10px] uppercase tracking-widest">Technical Drawings</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
