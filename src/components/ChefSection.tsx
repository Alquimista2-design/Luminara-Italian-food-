import React from 'react';
import { TranslationDictionary } from '../types';

interface ChefSectionProps {
  t: TranslationDictionary;
  chefImage: string;
}

export default function ChefSection({ t, chefImage }: ChefSectionProps) {
  return (
    <section id="chef" className="py-24 sm:py-32 bg-transparent relative overflow-hidden border-b border-luxury-gold/5">
      {/* Decorative blurry nodes */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-luxury-gold/[0.012] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-luxury-champagne/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Chef Portrait Grid spans 5 columns */}
          <div className="lg:col-span-5 relative group flex justify-center">
            {/* Elegant framing back borders */}
            <div className="absolute top-4 left-4 w-full h-full border border-luxury-gold/15 pointer-events-none -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
            <div className="absolute -inset-0.5 border border-luxury-gold/30 pointer-events-none" />

            <div className="overflow-hidden aspect-3/4 w-full h-[380px] sm:h-[450px] relative bg-black">
              {/* Image of the Chef */}
              <img
                src={chefImage}
                alt="Chef Mateo Rossi"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/20 to-transparent pointer-events-none" />
              
              {/* Bottom tag inside picture */}
              <div className="absolute bottom-6 left-6 right-6 flex items-baseline justify-between border-b border-luxury-gold/20 pb-2">
                <span className="font-serif text-lg text-luxury-cream tracking-wide">Matteo Rossi</span>
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-luxury-gold font-bold">Roma • Portofino</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Chef Biography Grid spans 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs tracking-[0.35em] text-luxury-gold uppercase font-bold block">
                {t.chef.title}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-luxury-cream tracking-wide">
                {t.chef.subtitle}
              </h2>
              <div className="h-[1px] w-20 bg-luxury-gold/30" />
            </div>

            <p className="font-sans text-xs sm:text-sm text-luxury-cream/70 leading-relaxed tracking-wider font-light">
              {t.chef.bio}
            </p>

            <div className="bg-[#121110] p-6 border-l-2 border-luxury-gold">
              <span className="font-sans text-[10px] uppercase font-bold text-luxury-gold tracking-[0.2em] block mb-2">
                IL FILOSOFIA DELL&apos;ARTISTA
              </span>
              <p className="font-serif italic text-sm sm:text-base text-luxury-champagne/90 leading-relaxed font-light">
                &ldquo;Utilizo únicamente ingredientes cuya excelencia no dependa de mí, sino de la tierra. Mi labor consiste en no interponerme entre la pureza y el paladar de mi invitado.&rdquo;
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-4 flex items-center justify-between">
              <div>
                <span className="font-sans text-[10px] text-luxury-cream/40 uppercase tracking-widest block">
                  CAPO DI CUCINA
                </span>
                <span className="font-mono text-[9px] text-luxury-gold uppercase tracking-[0.2em] font-bold">
                  LUMINARA GROUP
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-serif italic text-3xl text-luxury-gold/80 pr-6 select-none font-light tracking-wide">
                  {t.chef.sigSignature}
                </span>
                <span className="h-[1px] w-24 bg-gradient-to-r from-luxury-gold/40 to-transparent mt-1" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
