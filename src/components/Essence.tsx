import React from 'react';
import { Award, Wheat, Wine } from 'lucide-react';
import { TranslationDictionary } from '../types';

interface EssenceProps {
  t: TranslationDictionary;
  essenceImage: string;
}

export default function Essence({ t, essenceImage }: EssenceProps) {
  return (
    <section id="essence" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Subtle decorative geometric background lines */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-luxury-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-luxury-olive/[0.03] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title Block */}
        <div className="mb-16 lg:mb-24 text-center lg:text-left">
          <span className="font-sans text-xs tracking-[0.3em] text-luxury-gold uppercase block mb-3 font-medium">
            {t.essence.tagline}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-cream tracking-wide max-w-2xl leading-tight">
            {t.essence.title}
          </h2>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Column 1: Narrative and history */}
          <div className="space-y-6 text-luxury-cream/80 font-sans text-sm sm:text-base leading-relaxed tracking-wide">
            <p className="font-serif italic text-lg sm:text-xl text-luxury-champagne font-light leading-relaxed mb-4">
              {t.essence.p1}
            </p>
            <p className="font-light">
              {t.essence.p2}
            </p>
            <p className="font-light border-l border-luxury-gold/30 pl-4 text-luxury-cream/70 italic text-sm">
              {t.essence.p3}
            </p>

            {/* Badges Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center mb-3 group-hover:border-luxury-gold group-hover:bg-luxury-gold/5 transition-all duration-300">
                  <Wheat className="w-4 h-4 text-luxury-gold" />
                </div>
                <h4 className="font-serif text-[#F5F0E8] text-sm tracking-wide font-medium">
                  {t.essence.badge1}
                </h4>
                <p className="font-sans text-[11px] text-luxury-cream/50 mt-1">
                  {t.essence.badge1Sub}
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center mb-3 group-hover:border-luxury-gold group-hover:bg-luxury-gold/5 transition-all duration-300">
                  <Award className="w-4 h-4 text-luxury-gold" />
                </div>
                <h4 className="font-serif text-[#F5F0E8] text-sm tracking-wide font-medium">
                  {t.essence.badge2}
                </h4>
                <p className="font-sans text-[11px] text-luxury-cream/50 mt-1">
                  {t.essence.badge2Sub}
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center mb-3 group-hover:border-luxury-gold group-hover:bg-luxury-gold/5 transition-all duration-300">
                  <Wine className="w-4 h-4 text-luxury-gold" />
                </div>
                <h4 className="font-serif text-[#F5F0E8] text-sm tracking-wide font-medium">
                  {t.essence.badge3}
                </h4>
                <p className="font-sans text-[11px] text-luxury-cream/50 mt-1">
                  {t.essence.badge3Sub}
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Framed Cinematic Image with golden overlay corners */}
          <div className="relative group flex justify-center">
            {/* Elegant framing back borders */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-luxury-gold/40 transition-all duration-500 group-hover:-top-4 group-hover:-left-4" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-luxury-gold/40 transition-all duration-500 group-hover:-bottom-4 group-hover:-right-4" />

            <div className="overflow-hidden w-full h-[320px] sm:h-[420px] md:h-[480px] shadow-2xl relative">
              <img
                src={essenceImage}
                alt="Luminara Dining Essence Room"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
              />
              {/* Subtle ambient gradient layer on top */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Tiny Luxury Subtitle on Margin */}
            <div className="absolute -bottom-8 left-0 font-mono text-[9px] text-luxury-gold/50 tracking-[0.25em] uppercase">
              • PORTFOLIO INTERIORS • EST. 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
