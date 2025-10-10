'use client';

import { useState, useEffect } from 'react';
import { content } from '../../lib/content';
import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Определяем текущую секцию для переключения логотипа
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id;
        }
      });
      
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Определяем, какой логотип показывать
  const getLogoSrc = () => {
    // Секции со светлым фоном - показываем темный логотип
    const lightSections = ['benefits', 'areas', 'contact'];
    if (lightSections.includes(currentSection)) {
      return '/nss.png';
    }
    // Во всех остальных случаях (темный фон) показываем белый логотип
    return '/nss-white-wave.png';
  };

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Team' },
    { href: '#areas', label: 'Areas' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
              <img 
                src={getLogoSrc()} 
                alt={content.brand} 
                className={styles.logoImage}
            width="48"
            height="48"
            loading="eager"
          />
          <span className={styles.logoText}>
            {content.brand}
          </span>
        </div>
        
        <div className={`${styles.navItems} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          {/* Кнопка закрытия внутри мобильного меню */}
          {mobileMenuOpen && (
            <button 
              className={styles.closeButton}
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${
                activeSection === item.href.slice(1) ? styles.active : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <div className={styles.mobileMenu}>
          <button 
            className={styles.mobileButton}
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
