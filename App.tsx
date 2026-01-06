
import React, { useState, useEffect, createContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import { PROJECTS } from './data/projects';
import translationsData from './translations.ts';

type Language = 'en' | 'ru';

// Данные переводов
export const translations = translationsData;

export const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  t: any;
}>({ 
  lang: 'en', 
  setLang: () => {}, 
  // @ts-ignore
  t: translations.en 
});

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    // Автоопределение языка
    const systemLang = navigator.language.split('-')[0];
    const defaultLang: Language = systemLang === 'ru' ? 'ru' : 'en';
    
    const savedLang = localStorage.getItem('lang') as Language;
    setLang(savedLang || defaultLang);

    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  // @ts-ignore
  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      <div className="min-h-screen flex flex-col">
        <Navbar activeSection={activeSection} />
        
        <main className="flex-grow">
          <section id="home">
            <Hero />
          </section>

          <section id="portfolio" className="bg-[var(--bg-secondary)] py-32">
            <div className="container mx-auto px-6">
              <div className="mb-20">
                <span className="text-[var(--accent)] tracking-[0.4em] uppercase text-xs mb-4 block">{t.portfolioArchive}</span>
                <h2 className="text-5xl md:text-7xl font-serif">{t.navPortfolio}</h2>
              </div>
              <PortfolioGrid projects={PROJECTS} />
            </div>
          </section>

          <section id="about" className="bg-[var(--bg-primary)] py-32 border-y border-[var(--border)]">
            <AboutMe />
          </section>

          <section id="contact" className="bg-[var(--bg-secondary)] py-32">
            <Contact />
          </section>
        </main>

        <footer className="py-12 bg-[var(--bg-secondary)] border-t border-[var(--border)]">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-60">
            <div className="text-[10px] tracking-widest uppercase font-medium">{t.footerCopyright}</div>
            <div className="flex gap-8 mt-4 md:mt-0 text-[10px] tracking-widest uppercase">
            </div>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
