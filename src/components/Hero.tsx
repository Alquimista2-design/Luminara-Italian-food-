import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, Menu as MenuIcon } from 'lucide-react';
import { TranslationDictionary } from '../types';

interface HeroProps {
  t: TranslationDictionary;
  onOpenBooking: () => void;
  bgImages: string[];
}

export default function Hero({ t, onOpenBooking, bgImages }: HeroProps) {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 7000); // 7-second premium transition
    return () => clearInterval(interval);
  }, [bgImages]);

  return (
    <header
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Background Cinematic Slide Carousel */}
      {bgImages.map((imagePath, index) => (
        <div
          key={imagePath}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentBgIndex ? 'opacity-55 scale-100' : 'opacity-0 scale-105'
          } transform duration-[2000ms]`}
          style={{
            backgroundImage: `url(${imagePath})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Luxury Golden & Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/90 pointer-events-none" />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Ambient glowing radial light in base screen */}
      <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center">
        {/* Upper Tagline with delicate horizontal lines */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="h-[1px] w-8 lg:w-16 bg-gradient-to-r from-transparent to-luxury-gold" />
          <span className="font-sans text-[11px] lg:text-xs tracking-[0.4em] text-luxury-gold font-medium uppercase">
            {t.hero.subtitle}
          </span>
          <div className="h-[1px] w-8 lg:w-16 bg-gradient-to-l from-transparent to-luxury-gold" />
        </div>

        {/* Cinematic Title */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide text-luxury-cream leading-tight mb-6">
          Luminara
        </h1>

        {/* Poetic Quote / Translation Match */}
        <p className="font-serif italic text-base sm:text-lg md:text-xl text-luxury-champagne/90 max-w-2xl mb-4 leading-relaxed font-light">
          &ldquo;{t.hero.titleAccent}&rdquo;
        </p>

        {/* Detailed Premium Subtitle */}
        <p className="font-sans text-xs sm:text-sm text-luxury-cream/70 max-w-xl mb-12 tracking-wide leading-relaxed">
          {t.hero.description}
        </p>

        {/* Double Premium Call-to-actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Reservation Button */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-luxury-gold to-luxury-champagne text-luxury-black font-sans text-xs tracking-widest uppercase font-bold transition-all duration-300 hover:shadow-xl hover:shadow-luxury-gold/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 border border-transparent rounded-none"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.hero.bookNow}</span>
          </button>

          {/* Menú Exploratorio Button */}
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 border border-luxury-cream/20 hover:border-luxury-gold text-luxury-cream hover:text-luxury-gold font-sans text-xs tracking-widest uppercase font-medium transition-all duration-300 flex items-center justify-center space-x-2 bg-black/40 hover:bg-black/60"
          >
            <MenuIcon className="w-4 h-4" />
            <span>{t.hero.viewMenu}</span>
          </a>
        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <a
        href="#essence"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center group text-luxury-cream/45 hover:text-luxury-gold transition-colors duration-300"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase mb-2">
          {t.hero.scroll}
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-luxury-gold/70 group-hover:text-luxury-gold" />
      </a>
    </header>
  );
}
