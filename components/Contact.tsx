
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Contact: React.FC = () => {
  const { t } = useContext(LanguageContext);

  const contactLinks = [
    {
      name: 'Telegram',
      label: '@skolkoff',
      url: 'https://t.me/skolkoff',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-12 md:h-12">
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      label: '+7 (997) 880-77-49',
      url: 'https://wa.me/79978807749',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-12 md:h-12">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.38 8.38 0 0 1 3.8.9L21 3Z" />
        </svg>
      )
    },
    {
      name: 'VKontakte',
      label: 'vk.com/skolkoff12',
      url: 'https://vk.com/skolkoff12',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-12 md:h-12">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 12h-1.5c-1.5 0-2-1-3-1s-1 1-1 1v1h-1.5s0-4 3-4h1.5v1.5c0 .5.5.5.5.5s1 0 1.5-1.5L16.5 10H18l-1.5 4z" />
        </svg>
      )
    },
    {
      name: 'Email',
      label: 'skolkoff.mart@yandex.ru',
      url: 'mailto:skolkoff.mart@yandex.ru',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-12 md:h-12">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-16 md:gap-24">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              {t.contactTitle} <br />
              <span className="italic text-[var(--accent)]">{t.contactTitleItalic}</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed">
              {t.contactDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {contactLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-8 bg-[var(--bg-tertiary)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-500 hover:-translate-y-2 shadow-sm"
              >
                <div className="text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform duration-500">
                  {link.icon}
                </div>
                <div className="mt-auto">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-secondary)] opacity-50 mb-1">{link.name}</div>
                  <div className="text-sm md:text-base font-medium truncate">{link.label}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-16 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent)]">{t.contactAvailability}</span>
              <span className="text-xl">{t.contactStatus}</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--text-secondary)] opacity-40">
              Moscow — GMT+3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
