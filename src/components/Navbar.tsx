import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, MessageCircle, Calendar } from 'lucide-react';
import { Language, TranslationDictionary } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationDictionary;
  onOpenBooking: () => void;
}

export default function Navbar({ lang, setLang, t, onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.essence, href: '#essence' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.wine, href: '#wine' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.chef, href: '#chef' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-luxury-black/95 backdrop-blur-md border-b border-luxury-gold/10 py-4 shadow-xl'
          : 'bg-gradient-to-b from-luxury-black/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#home" className="group flex flex-col focus:outline-none" id="nav-logo">
          <span className="font-serif text-2xl lg:text-3xl tracking-[0.25em] text-luxury-cream group-hover:text-luxury-gold transition-colors duration-300">
            LUMINARA
          </span>
          <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-luxury-gold mt-1 pl-0.5">
            Ristorante Italiano
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-xs tracking-widest uppercase hover:text-luxury-gold text-luxury-cream/80 transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-luxury-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Controls: Language, WhatsApp, CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Language Switcher */}
          <div className="flex items-center space-x-2 border-r border-luxury-cream/10 pr-4">
            <Globe className="w-3.5 h-3.5 text-luxury-gold" />
            <button
              onClick={() => setLang('es')}
              className={`text-[11px] tracking-wider uppercase transition-colors font-medium focus:outline-none ${
                lang === 'es' ? 'text-luxury-gold' : 'text-luxury-cream/40 hover:text-luxury-cream'
              }`}
            >
              ES
            </button>
            <span className="text-luxury-cream/20 text-xs">|</span>
            <button
              onClick={() => setLang('en')}
              className={`text-[11px] tracking-wider uppercase transition-colors font-medium focus:outline-none ${
                lang === 'en' ? 'text-luxury-gold' : 'text-luxury-cream/40 hover:text-luxury-cream'
              }`}
            >
              EN
            </button>
          </div>

          {/* WhatsApp Direct Action */}
          <a
            href="https://wa.me/34600000000?text=Hola,%20me%20gustaria%20consultar%20por%20una%20mesa%20en%20Luminara"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-luxury-cream/70 hover:text-luxury-gold transition-colors duration-300 text-xs tracking-wider"
            title={t.contact.chatWithUs}
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span className="hidden xl:inline text-[11px] tracking-wider uppercase font-sans">WhatsApp</span>
          </a>

          {/* Premium Reservation CTA */}
          <button
            onClick={onOpenBooking}
            className="relative px-6 py-2.5 overflow-hidden group border border-luxury-gold/50 bg-[#12100E] text-luxury-gold hover:text-luxury-black font-sans text-[11px] tracking-widest uppercase font-semibold transition-all duration-500 ease-out hover:shadow-lg hover:shadow-luxury-gold/20"
            id="btn-navbar-book"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-luxury-gold to-luxury-champagne transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out -z-10" />
            <span className="flex items-center space-x-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.book}</span>
            </span>
          </button>
        </div>

        {/* Mobile controls & Toggle */}
        <div className="flex lg:hidden items-center space-x-4">
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="text-luxury-cream/70 hover:text-luxury-gold flex items-center space-x-1 p-1 focus:outline-none border border-luxury-cream/10 rounded"
          >
            <Globe className="w-3 h-3 text-luxury-gold" />
            <span className="text-[10px] font-bold uppercase">{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-luxury-cream/90 hover:text-luxury-gold focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-luxury-black/98 border-b border-luxury-gold/15 backdrop-blur-xl animate-fadeIn duration-300 shadow-2xl">
          <div className="flex flex-col px-8 py-8 space-y-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-sans text-sm tracking-widest uppercase text-luxury-cream/90 hover:text-luxury-gold transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 border-t border-luxury-cream/10 flex flex-col gap-4">
              <a
                href="https://wa.me/34600000000?text=Hola"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-luxury-cream py-2 border border-luxury-cream/10 rounded text-xs tracking-wider"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="uppercase text-[11px] tracking-wider">{t.contact.chatWithUs}</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-gradient-to-r from-luxury-gold to-luxury-champagne text-luxury-black font-sans text-xs tracking-widest uppercase font-bold text-center"
              >
                {t.nav.book}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
