import React from 'react';
import { Instagram, Facebook, MessageSquare, ArrowUp, Compass } from 'lucide-react';
import { TranslationDictionary } from '../types';

interface FooterProps {
  t: TranslationDictionary;
}

export default function Footer({ t }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060606] border-t border-luxury-gold/10 pt-20 pb-12 relative overflow-hidden">
      
      {/* Small floating radial light */}
      <div className="absolute bottom-0 right-[40%] w-72 h-72 bg-luxury-gold/[0.008] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Core footer layout block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-luxury-cream/5 pb-16">
          
          {/* Section 1: Logo & Vision Quote (Gives 4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.25em] text-luxury-cream font-medium">
                LUMINARA
              </span>
              <span className="font-sans text-[8px] uppercase tracking-[0.45em] text-luxury-gold mt-1">
                Ristorante Italiano
              </span>
            </div>
            
            <p className="font-sans text-xs text-luxury-cream/50 leading-relaxed font-light tracking-wide max-w-sm">
              Inspirado en el romanticismo de la Riviera italiana y tallado bajo los principios del minimalismo contemporáneo. Un faro de excelencia enología y culinaria de autor.
            </p>

            {/* Social handles links */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://instagram.com/luminara.ristorante"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-luxury-cream/10 hover:border-luxury-gold flex items-center justify-center text-luxury-cream/60 hover:text-luxury-gold transition-colors duration-300 bg-black/40"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/luminara.ristorante"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-luxury-cream/10 hover:border-luxury-gold flex items-center justify-center text-luxury-cream/60 hover:text-luxury-gold transition-colors duration-300 bg-black/40"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-luxury-cream/10 hover:border-luxury-gold flex items-center justify-center text-luxury-cream/60 hover:text-luxury-gold transition-colors duration-300 bg-black/40"
                title="Conserje Especial"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links (Gives 3 columns) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-bold">
              Navigazione
            </h4>
            <div className="flex flex-col space-y-3 font-sans text-xs">
              <a href="#home" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors duration-200">
                {t.nav.home}
              </a>
              <a href="#essence" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors duration-200">
                {t.nav.essence}
              </a>
              <a href="#menu" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors duration-200">
                {t.nav.menu}
              </a>
              <a href="#wine" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors duration-200">
                {t.nav.wine}
              </a>
              <a href="#gallery" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors duration-200">
                {t.nav.gallery}
              </a>
              <a href="#chef" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors duration-200">
                {t.nav.chef}
              </a>
            </div>
          </div>

          {/* Section 3: Instagram highlight stream mockup (Gives 5 columns) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center justify-between">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-bold">
                Instagram Feed @luminara
              </h4>
              <span className="font-sans text-[9px] text-[#25D366] tracking-widest uppercase font-bold">• CONNECTED</span>
            </div>

            {/* Photo streams */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href="https://instagram.com/luminara.ristorante"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square relative overflow-hidden group border border-luxury-cream/5"
              >
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=150"
                  alt="Insta feeding plate"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              <a
                href="https://instagram.com/luminara.ristorante"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square relative overflow-hidden group border border-luxury-cream/5"
              >
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=150"
                  alt="Insta feeding dining"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              <a
                href="https://instagram.com/luminara.ristorante"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square relative overflow-hidden group border border-luxury-cream/5"
              >
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=150"
                  alt="Insta feeding glass"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            </div>
            
            <p className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF88] text-right">
              MENCIONE #LUMINARAWILDS PARA SER INVITADO DE HONOR
            </p>
          </div>

        </div>

        {/* Footer Bottom copyright & trademark quote */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-sans text-[10px] text-luxury-cream/35 uppercase tracking-widest leading-loose">
              © 2026 LUMINARA RISTORANTE ESPAÑA S.L. • TODOS LOS DERECHOS RESERVADOS.
            </p>
            <p className="font-sans text-[9px] text-[#4B564B]/60 uppercase tracking-[0.2em] mt-1">
              PROYECTADO EN ALTA FIDELIDAD ITALIANA POR EL ALQUIMISTA MODERNO • LICENCIA PLATINO
            </p>
          </div>

          {/* Golden Romantic Phrase */}
          <div className="flex flex-col items-center sm:items-end">
            <span className="font-serif italic text-base text-luxury-gold font-light tracking-wide select-none">
              &ldquo;La Dolce Vita comienza aquí.&rdquo;
            </span>
          </div>

          {/* Up arrow floating */}
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 border border-luxury-gold/30 text-luxury-cream hover:text-luxury-gold hover:border-luxury-gold flex items-center justify-center transition-all bg-black font-sans focus:outline-none rounded-none shrink-0 cursor-pointer shadow shadow-luxury-gold/5"
            title="Ir al inicio"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
