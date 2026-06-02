import React, { useState } from 'react';
import { Award, Sparkles, Filter, Percent, Info, MapPin } from 'lucide-react';
import { TranslationDictionary, WineCategory, WineItem } from '../types';

interface WineSectionProps {
  t: TranslationDictionary;
  wineCategories: WineCategory[];
  cellarImage: string;
}

export default function WineSection({ t, wineCategories, cellarImage }: WineSectionProps) {
  const [activeFilter, setActiveFilter] = useState<WineCategory['id']>('espumosos');

  const filteredCategory = wineCategories.find((cat) => cat.id === activeFilter);

  return (
    <section id="wine" className="py-24 sm:py-32 bg-transparent relative overflow-hidden">
      {/* Decorative vector overlays */}
      <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-luxury-gold/[0.01] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-80 h-80 bg-luxury-olive/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16 lg:mb-24">
          <div>
            <span className="font-sans text-xs tracking-[0.3em] text-luxury-gold uppercase block mb-3 font-medium">
              RESERVA EXCLUSIVA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-cream tracking-wide leading-tight">
              {t.wine.title}
            </h2>
          </div>
          <div>
            <p className="font-sans text-xs sm:text-sm text-luxury-cream/60 leading-relaxed tracking-wider max-w-lg lg:ml-auto">
              {t.wine.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Sommelier Quote Card & Image (Grid spans 5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group overflow-hidden">
              {/* Back border decorations */}
              <div className="absolute -inset-1.5 border border-luxury-gold/20 pointer-events-none rounded-none" />

              <div className="h-[280px] sm:h-[350px] relative overflow-hidden bg-black/60">
                <img
                  src={cellarImage}
                  alt="Luminara Underground Wine Cave"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-[3000ms]"
                />
                {/* Glowing gold radial light over wine cellar */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent pointer-events-none" />

                {/* Overlaid Badging */}
                <div className="absolute top-6 left-6 p-2 py-1 bg-luxury-gold text-luxury-black font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
                  AMBASSADEUR CHAMPAGNE
                </div>
              </div>
            </div>

            {/* Sommelier Quote Card */}
            <div className="p-8 bg-gradient-to-br from-[#121110] to-[#0A0A09] border border-luxury-gold/15 relative">
              <div className="absolute -top-3 left-8 px-4 py-1.5 bg-[#0C0B0A] border-x border-t border-luxury-gold/20 font-sans text-[10px] uppercase font-bold text-luxury-gold tracking-[0.2em]">
                {t.wine.sommelierNote}
              </div>

              <div className="text-luxury-cream/80 font-serif italic text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-luxury-gold/50 my-2">
                {t.wine.sommelierQuote}
              </div>

              <div className="text-right mt-4 flex justify-end items-center space-x-1">
                <span className="font-sans text-[10px] text-luxury-cream/40 uppercase tracking-widest">
                  Silvia Girelli •
                </span>
                <span className="font-mono text-[9px] text-luxury-gold uppercase tracking-widest font-bold">
                  SÉLECTIONNEUSE CHEFFE DE CAVE
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Dynamic Wine Listing with Wine Filters (Grid spans 7 columns) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Wine category buttons filters */}
            <div className="flex flex-wrap gap-2.5 border-b border-luxury-cream/5 pb-6">
              {wineCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-5 py-2.5 font-sans text-[11px] tracking-widest uppercase transition-all duration-300 border focus:outline-none ${
                    activeFilter === cat.id
                      ? 'border-luxury-gold bg-luxury-gold/10 text-luxury-gold font-bold shadow-md shadow-luxury-gold/5'
                      : 'border-luxury-cream/10 text-luxury-cream/50 bg-transparent hover:border-luxury-cream/20 hover:text-luxury-cream'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Wine List Output */}
            <div className="space-y-8 max-h-[550px] overflow-y-auto pr-2 scrollbar-thin">
              {filteredCategory?.items.map((wine) => (
                <div
                  key={wine.id}
                  className="group flex flex-col justify-between py-5 border-b border-luxury-cream/5 hover:border-luxury-gold/10 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2 flex-wrap">
                        <h3 className="font-serif text-lg text-luxury-cream group-hover:text-luxury-gold transition-colors duration-200 tracking-wide">
                          {wine.name}
                        </h3>
                        <span className="font-mono text-[10px] text-luxury-gold border border-luxury-gold/20 px-1.5 py-0.2 bg-luxury-gold/[0.04]">
                          {wine.year}
                        </span>
                      </div>

                      {/* Vineyard details & Region flag mockup */}
                      <span className="font-sans text-[11px] text-luxury-cream/50 tracking-wider flex items-center space-x-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#5C1F1F]/60" />
                        <span>{wine.winery}</span>
                        <span className="text-luxury-cream/30">•</span>
                        <span className="text-luxury-gold/60">{wine.region}</span>
                      </span>
                    </div>

                    {/* Wine Pricing options */}
                    <div className="flex items-center space-x-6 shrink-0">
                      {wine.priceGlass && (
                        <div className="flex flex-col items-end">
                          <span className="text-[9px] font-sans uppercase tracking-widest text-luxury-cream/40">
                            {t.wine.glassLabel}
                          </span>
                          <span className="font-serif text-base text-luxury-cream/90">
                            {wine.priceGlass} {t.menu.currency}
                          </span>
                        </div>
                      )}
                      <div className="flex flex-col items-end">
                        <span className="text-[9px] font-sans uppercase tracking-widest text-[#D4AF88]/50">
                          {t.wine.bottleLabel}
                        </span>
                        <span className="font-serif text-base text-luxury-gold">
                          {wine.priceBottle} {t.menu.currency}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-luxury-cream/60 leading-relaxed font-light mt-3 pl-5 border-l border-luxury-cream/10 group-hover:border-luxury-gold/40 transition-all duration-300">
                    {wine.description}
                  </p>
                </div>
              ))}
            </div>

            {/* DOCG Cert warning */}
            <div className="p-4 bg-transparent border border-luxury-cream/5 flex gap-3 items-center">
              <Award className="w-4 h-4 text-luxury-gold shrink-0" />
              <p className="font-sans text-[10px] text-luxury-cream/40 uppercase tracking-widest leading-relaxed">
                DENOMINAZIONE DI ORIGINE CONTROLLATA E GARANTITA (DOCG) • SELECCIONES IMPORTADAS DE BODEGAS CON CERTIFICACIÓN DE BIODINAMICIDAD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
