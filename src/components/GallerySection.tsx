import React, { useState } from 'react';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, TranslationDictionary } from '../types';

interface GalleryItem {
  id: string;
  image: string;
  titleEs: string;
  titleEn: string;
  categoryEs: string;
  categoryEn: string;
}

interface GallerySectionProps {
  t: TranslationDictionary;
  lang: Language;
  galleryItems: GalleryItem[];
}

export default function GallerySection({ t, lang, galleryItems }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', labelEs: 'Todo', labelEn: 'All' },
    { id: 'gastronomy', labelEs: 'Gastronomía', labelEn: 'Gastronomy' },
    { id: 'atmosphere', labelEs: 'Atmósfera', labelEn: 'Atmosphere' },
    { id: 'cellar', labelEs: 'Bodega', labelEn: 'Cellar' },
  ];

  const getFilteredItems = () => {
    if (activeFilter === 'all') return galleryItems;
    return galleryItems.filter((item) => {
      const catCheck = item.categoryEn.toLowerCase();
      if (activeFilter === 'gastronomy') return catCheck === 'gastronomy' || catCheck === 'kitchen';
      if (activeFilter === 'atmosphere') return catCheck === 'atmosphere' || catCheck === 'salon';
      if (activeFilter === 'cellar') return catCheck === 'cellar' || catCheck === 'bodega';
      return true;
    });
  };

  const filteredItems = getFilteredItems();

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev as number) - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev as number) + 1));
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-transparent relative border-b border-luxury-gold/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.3em] text-luxury-gold uppercase block mb-3 font-medium">
            MOMENTOS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-cream tracking-wide mb-6">
            {t.gallery.title}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-luxury-cream/60 leading-relaxed tracking-wider">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery category filters */}
        <div className="flex justify-center mb-12 flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveFilter(c.id)}
              className={`px-4 sm:px-6 py-2 border font-sans text-[10px] tracking-widest uppercase transition-all duration-300 ${
                activeFilter === c.id
                  ? 'border-luxury-gold bg-[#121110] text-luxury-gold font-bold'
                  : 'border-luxury-cream/5 text-luxury-cream/40 bg-transparent hover:border-luxury-cream/10 hover:text-luxury-cream'
              }`}
            >
              {lang === 'es' ? c.labelEs : c.labelEn}
            </button>
          ))}
        </div>

        {/* Responsive Masonry / Elegant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="relative aspect-4/3 group overflow-hidden cursor-pointer bg-black"
              id={`gallery-item-${item.id}`}
            >
              {/* Premium image rendering with refererPolicy */}
              <img
                src={item.image}
                alt={lang === 'es' ? item.titleEs : item.titleEn}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105 group-hover:opacity-60"
              />

              {/* Sophisticated Hover Cover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-luxury-gold font-bold mb-1">
                  {lang === 'es' ? item.categoryEs : item.categoryEn}
                </span>
                <h3 className="font-serif text-base sm:text-lg text-luxury-cream tracking-wide flex items-center justify-between">
                  <span>{lang === 'es' ? item.titleEs : item.titleEn}</span>
                  <ZoomIn className="w-4 h-4 text-luxury-gold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0" />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL RESPONSIVE LIGHTBOX VIEW */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
          id="gallery-lightbox"
        >
          {/* Close controls */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-luxury-cream/70 hover:text-luxury-gold focus:outline-none p-2 border border-luxury-cream/15 hover:border-luxury-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Controls Left */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-luxury-cream/60 hover:text-luxury-gold focus:outline-none p-3 border border-luxury-cream/10 hover:border-luxury-gold bg-black/35 rounded-none"
            title="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Core Image presentation box */}
          <div className="max-w-4xl max-h-[80vh] w-full flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={lang === 'es' ? filteredItems[lightboxIndex].titleEs : filteredItems[lightboxIndex].titleEn}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[65vh] object-contain shadow-2xl border border-luxury-gold/20"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Overlaid Title Descriptions */}
            <div className="text-center mt-6 max-w-xl" onClick={(e) => e.stopPropagation()}>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-luxury-gold block mb-2 font-bold">
                {lang === 'es' ? filteredItems[lightboxIndex].categoryEs : filteredItems[lightboxIndex].categoryEn}
              </span>
              <h4 className="font-serif text-lg sm:text-xl text-[#F5F0E8] tracking-wide">
                {lang === 'es' ? filteredItems[lightboxIndex].titleEs : filteredItems[lightboxIndex].titleEn}
              </h4>
              <p className="font-mono text-[9px] text-luxury-cream/35 uppercase tracking-widest mt-2">
                IMAGEN {lightboxIndex + 1} DE {filteredItems.length}
              </p>
            </div>
          </div>

          {/* Navigation Controls Right */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-luxury-cream/60 hover:text-luxury-gold focus:outline-none p-3 border border-luxury-cream/10 hover:border-luxury-gold bg-black/35 rounded-none"
            title="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
