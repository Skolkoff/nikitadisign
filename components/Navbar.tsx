
import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../App';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isLight, setIsLight] = useState(false);
  const { lang, setLang, t } = useContext(LanguageContext);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLight(true);
      document.body.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isLight;
    setIsLight(nextTheme);
    if (nextTheme) {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'portfolio', label: t.navPortfolio },
    { id: 'about', label: t.navAbout },
    { id: 'contact', label: t.navContact }
  ];

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-primary)]/80 backdrop-blur-lg border-b border-[var(--border)]">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <div 
          className="text-xl font-bold tracking-tighter hover:text-[var(--accent)] transition-colors cursor-pointer" 
          onClick={(e) => handleScroll(e, 'home')}
        >
          NIKITA<span className="text-[var(--accent)]">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => handleScroll(e, item.id)}
              className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                activeSection === item.id ? 'text-[var(--accent)] font-semibold' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="flex items-center gap-2 border-l border-[var(--border)] pl-8 ml-4">
            <button 
              onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
              className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              {lang === 'ru' ? 'EN' : 'RU'}
            </button>

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[var(--border)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 ml-2"
              title="Toggle Theme"
            >
              {isLight ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m9-9h-2.25M5.25 12H3m16.364-6.364l-1.591 1.591M6.756 17.244l-1.591 1.591m12.728 0l-1.591-1.591M6.756 6.756l-1.591-1.591M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button className="md:hidden p-2">
          <div className="w-6 h-0.5 bg-[var(--text-primary)] mb-1.5"></div>
          <div className="w-6 h-0.5 bg-[var(--text-primary)]"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
