import React, { useState } from 'react';
import { Wine, Info, Sparkles, X, ChevronRight, Check } from 'lucide-react';
import { TranslationDictionary, MenuCategory, MenuItem } from '../types';

interface MenuSectionProps {
  t: TranslationDictionary;
  menuCategories: MenuCategory[];
}

export default function MenuSection({ t, menuCategories }: MenuSectionProps) {
  const [activeTab, setActiveTab] = useState<MenuCategory['id']>('antipasti');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [isFullCartaOpen, setIsFullCartaOpen] = useState(false);

  const activeCategory = menuCategories.find((cat) => cat.id === activeTab);

  // Extra items for "Carta Completa" view to make the simulator truly comprehensive
  const extraItems: Record<string, MenuItem[]> = {
    antipasti: [
      {
        id: 'anti-extra-1',
        nameIt: 'Ostriche al Limoncello e Caviale',
        nameSub: 'Ostras al Limoncello con Caviar',
        description: 'Seis ostras Fine de Claire nº2, granizado sutil de Limoncello de Sorrento, perlas de caviar siberiano y hojas finas de oro comestible.',
        price: '48',
        badge: 'Rareza',
        pairing: 'Champagne Ruinart Blanc de Blancs',
      },
      {
        id: 'anti-extra-2',
        nameIt: 'Vitello Tonnato Reale',
        nameSub: 'Vitello Tonnato Imperial',
        description: 'Finísimas láminas de lomo de ternera lechal de piamonte, emulsión cremosa de atún rojo del mediterráneo, alcaparras sicilianas de Pantelleria fritas y aceite trufado.',
        price: '32',
        pairing: 'Gavi di Gavi DOCG',
      }
    ],
    primi: [
      {
        id: 'primi-extra-1',
        nameIt: 'Gnocchi di Patate al Castelmagno',
        nameSub: 'Ñoquis de Patata al Queso Castelmagno',
        description: 'Ñoquis ligeros hechos a mano sobre fondue cremosa de Castelmagno curado (queso noble alpino de Piamonte), avellanas tostadas del Piamonte e higos secos infusionados en oporto.',
        price: '38',
        pairing: 'Roero Arneis DOCG',
      },
      {
        id: 'primi-extra-2',
        nameIt: 'Spaghetti Neri con Ricci di Mare',
        nameSub: 'Spaghetti Negros con Erizo de Mar',
        description: 'Pasta negra de calamar con emulsión de erizo de mar fresco de costa, ralladura de mandarina siciliana y un sutil velado de pimienta de Sichuan.',
        price: '42',
        badge: 'Sensual',
        pairing: 'Vermentino Bolgheri DOC',
      }
    ],
    secondi: [
      {
        id: 'seco-extra-1',
        nameIt: 'Guancia di Vitello Brasata',
        nameSub: 'Carrillera de Ternera Glaseada al Amarone',
        description: 'Carrillera de ternera glaseada lentamente durante 15 horas al horno con vino Amarone, servida sobre un puré aterciopelado de castañas y zanahorias baby asadas.',
        price: '46',
        pairing: 'Amarone della Valpolicella DOCG',
      },
      {
        id: 'seco-extra-2',
        nameIt: 'Aragosta alla Catalana de Portofino',
        nameSub: 'Langosta de Portofino a la Catalana',
        description: 'Langosta entera al vapor, tomates cherry confitados, cebolla morada marinada en vinagre de prosecco, emulsión de oliva virgen extra de olivares costeros.',
        price: '72',
        badge: 'Cena Marítima',
        pairing: 'Vermentino di Gallura Superiore',
      }
    ],
    dolci: [
      {
        id: 'dolci-extra-1',
        nameIt: 'Panna Cotta allo Zafferano',
        nameSub: 'Panna Cotta Infundida en Azafrán',
        description: 'Panna cotta cremosa aromatizada con vainillas salvajes de Madagascar e hilos de azafrán dulce, culis de frambuesas silvestres de bosque.',
        price: '16',
        pairing: 'Prosecco di Valdobbiadene',
      }
    ]
  };

  return (
    <section id="menu" className="py-24 sm:py-32 bg-black/30 relative border-y border-luxury-gold/5 backdrop-blur-[2px]">
      {/* Visual Ambient Blur */}
      <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-luxury-gold/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-luxury-burgundy/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="font-sans text-xs tracking-[0.3em] text-luxury-gold uppercase block mb-3 font-medium">
            LUXURY ITALIAN CUISINE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-cream tracking-wide mb-6">
            {t.menu.title}
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mb-6" />
          <p className="font-sans text-xs sm:text-sm text-luxury-cream/60 leading-relaxed tracking-wider">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Tab Filters Navigation */}
        <div className="flex justify-center mb-16 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex space-x-1 sm:space-x-4 border-b border-luxury-cream/10 px-2">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 sm:px-8 py-3.5 font-sans text-xs sm:text-xs tracking-[0.25em] uppercase transition-all duration-300 relative focus:outline-none ${
                  activeTab === category.id
                    ? 'text-luxury-gold font-semibold'
                    : 'text-luxury-cream/40 hover:text-luxury-cream/80'
                }`}
              >
                {category.name}
                {activeTab === category.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes Presentation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {activeCategory?.items.map((dish, i) => (
            <div
              key={dish.id}
              className="group flex flex-col justify-between py-6 border-b border-luxury-cream/5 hover:border-luxury-gold/20 transition-colors duration-400 focus:outline-none cursor-pointer"
              onClick={() => setSelectedDish(dish)}
              id={`dish-item-${dish.id}`}
            >
              <div>
                {/* Header: Name and Price */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2.5 flex-wrap">
                      <h3 className="font-serif text-lg sm:text-xl text-luxury-cream tracking-wide group-hover:text-luxury-gold transition-colors duration-300">
                        {dish.nameIt}
                      </h3>
                      {dish.badge && (
                        <span className="px-2 py-0.5 text-[8px] font-sans font-bold uppercase tracking-widest bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/20 rounded-none">
                          {dish.badge}
                        </span>
                      )}
                    </div>
                    {/* Translated Name */}
                    <span className="font-sans text-[11px] sm:text-xs text-luxury-gold/70 italic mt-0.5 tracking-wide">
                      {dish.nameSub}
                    </span>
                  </div>

                  <span className="font-serif text-lg text-luxury-cream/95 tracking-wide">
                    {dish.price} {t.menu.currency}
                  </span>
                </div>

                {/* Body: Description */}
                <p className="font-sans text-xs sm:text-sm text-luxury-cream/60 leading-relaxed font-light mt-2 max-w-xl group-hover:text-luxury-cream/80 transition-colors duration-300">
                  {dish.description}
                </p>
              </div>

              {/* Footer Option: Suggested Pairing */}
              {dish.pairing && (
                <div className="mt-4 flex items-center space-x-1.5 text-luxury-cream/40 group-hover:text-luxury-gold/60 transition-colors duration-300">
                  <Wine className="w-3 h-3 text-luxury-gold/50 group-hover:text-luxury-gold" />
                  <span className="font-sans text-[10px] uppercase tracking-wider">
                    {t.menu.pairingLabel}: <span className="font-medium text-luxury-cream/70 group-hover:text-luxury-cream/90 transition-colors">{dish.pairing}</span>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Notice of fresh products */}
        <div className="text-center mt-12">
          <p className="font-sans text-[10px] uppercase tracking-widest text-luxury-cream/30">
            {t.menu.interactiveNotice}
          </p>
        </div>

        {/* Action Button: Open Complete interactive "Carta" Menu */}
        <div className="flex justify-center mt-16 sm:mt-20">
          <button
            onClick={() => setIsFullCartaOpen(true)}
            className="px-10 py-4 border border-luxury-gold/60 text-luxury-gold hover:text-luxury-black font-sans text-xs tracking-[0.3em] uppercase font-semibold transition-all duration-500 hover:bg-gradient-to-r hover:from-luxury-gold hover:to-luxury-champagne hover:shadow-xl hover:shadow-luxury-gold/10"
            id="btn-open-full-carta"
          >
            {t.menu.viewAll}
          </button>
        </div>
      </div>

      {/* DISH DETAILED SIDE DRAWER / POPUP */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn" id="dish-detail-drawer">
          <div className="bg-[#121110] border border-luxury-gold/30 p-8 sm:p-10 max-w-md w-full relative shadow-2xl rounded-none">
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 text-luxury-cream/60 hover:text-luxury-gold focus:outline-none p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-luxury-gold font-bold mb-2 block">
              Gourmet Detail
            </span>

            <h3 className="font-serif text-2xl text-luxury-cream tracking-wide mb-1">
              {selectedDish.nameIt}
            </h3>
            <h4 className="font-sans text-xs text-luxury-gold/80 italic mb-5 tracking-wide">
              {selectedDish.nameSub}
            </h4>

            <div className="h-[1px] w-full bg-luxury-gold/10 mb-5" />

            <p className="font-sans text-xs sm:text-sm text-luxury-cream/70 leading-relaxed font-light mb-6">
              {selectedDish.description}
            </p>

            <div className="mb-6 bg-black/40 p-4 border border-luxury-gold/5 flex gap-3 items-start">
              <Sparkles className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-sans text-[10px] uppercase font-bold text-luxury-gold tracking-widest">Enfoque culinario</span>
                <span className="font-sans text-[11px] text-luxury-cream/60 leading-relaxed mt-1">
                  Plato característico elaborado por el Chef Matteo Rossi utilizando técnicas contemporáneas que reducen grasas y realzan los aceites esenciales de la materia prima.
                </span>
              </div>
            </div>

            {selectedDish.pairing && (
              <div className="p-4 bg-luxury-gold/[0.03] border-l border-luxury-gold py-3 flex gap-3 items-center mb-6">
                <Wine className="w-5 h-5 text-luxury-gold shrink-0" />
                <div className="flex flex-col">
                  <span className="font-sans text-[9px] uppercase tracking-widest text-[#9c8263] font-bold">{t.menu.pairingLabel}</span>
                  <span className="font-sans text-xs text-luxury-cream/80 font-medium">{selectedDish.pairing}</span>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <span className="font-sans text-[11px] text-luxury-cream/40 uppercase tracking-widest">Precio Exclusivo</span>
              <span className="font-serif text-2xl text-luxury-gold font-bold">
                {selectedDish.price} {t.menu.currency}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* FULL CARTA DIGITAL PDF SIMULATOR (MODAL) */}
      {isFullCartaOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 overflow-y-auto animate-fadeIn" id="full-menu-pdf-simulator">
          <div className="bg-[#0e0e0d] border border-luxury-gold/30 max-w-4xl w-full my-8 shadow-2xl relative flex flex-col max-h-[90vh]">
            {/* Header control */}
            <div className="flex items-center justify-between border-b border-luxury-gold/15 px-6 sm:px-10 py-5 bg-[#080807]">
              <div className="flex flex-col">
                <span className="font-serif text-lg text-luxury-cream tracking-widest uppercase">CARTA INTERACTIVA</span>
                <span className="font-sans text-[9px] tracking-[0.3em] text-luxury-gold uppercase block">Edición Especial • Premium Digital Gastronomy</span>
              </div>
              <button
                onClick={() => setIsFullCartaOpen(false)}
                className="flex items-center space-x-1.5 px-3 py-1.5 border border-luxury-cream/10 text-luxury-cream/60 hover:text-luxury-gold hover:border-luxury-gold transition-colors text-xs uppercase tracking-widest/10 focus:outline-none"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline text-[10px]">{t.menu.close}</span>
              </button>
            </div>

            {/* Simulated Leather bound Menu Page scrolling container */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-12 py-10 space-y-12 bg-radial from-[#121110] to-[#0A0A09]">
              {/* Menu Intro */}
              <div className="text-center max-w-xl mx-auto border border-luxury-gold/10 p-6 bg-black/30 mb-8">
                <span className="font-serif text-3xl italic text-luxury-gold block mb-2 font-light">Luminara</span>
                <span className="font-sans text-[10px] tracking-[0.45em] text-luxury-cream uppercase block mb-3">La Grande Selección</span>
                <p className="font-sans text-xs text-luxury-cream/50 leading-relaxed font-light">
                  Presentamos una selección robustecida de recetas adicionales cultivadas directamente de nuestras tradiciones costeras e importaciones exclusivas.
                </p>
              </div>

              {/* Loop Category blocks */}
              {menuCategories.map((category) => {
                const combinedList = [...category.items, ...(extraItems[category.id] || [])];
                return (
                  <div key={category.id} className="space-y-6">
                    <div className="flex items-center justify-between border-b border-luxury-gold/10 pb-2">
                      <h4 className="font-serif text-xl text-luxury-gold tracking-widest uppercase">{category.name}</h4>
                      <span className="font-mono text-[9px] tracking-widest text-luxury-cream/30 uppercase">Sección {category.id.toUpperCase()}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                      {combinedList.map((dish) => (
                        <div key={dish.id} className="flex flex-col">
                          <div className="flex justify-between items-baseline">
                            <span className="font-serif text-base text-luxury-cream tracking-wide flex items-center gap-1.5">
                              {dish.nameIt}
                              {dish.id.includes('extra') && (
                                <span className="text-[7px] font-sans px-1.5 border border-luxury-champagne text-luxury-champagne font-bold uppercase tracking-widest">Extra</span>
                              )}
                            </span>
                            <span className="font-serif text-sm text-[#F5F0E8] ml-2 shrink-0">{dish.price} €</span>
                          </div>
                          <span className="font-sans text-[11px] text-luxury-gold/60 italic pb-1 mt-0.5">{dish.nameSub}</span>
                          <p className="font-sans text-xs text-luxury-cream/50 font-light leading-relaxed">{dish.description}</p>
                          {dish.pairing && (
                            <span className="font-sans text-[9px] text-[#A6C0A6]/60 mt-1 italic flex items-center gap-1">
                              • Enología sugerida: {dish.pairing}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Control */}
            <div className="border-t border-luxury-gold/10 p-6 flex flex-col sm:flex-row items-center justify-between bg-[#080807] gap-4">
              <span className="font-sans text-[10px] text-luxury-cream/40 tracking-wider">
                © LUMINARA RISTORANTE • IMPUESTOS INCLUIDOS • PRECIOS SUJETOS A MODIFICACIONES POR TEMPORALIDAD
              </span>
              <button
                onClick={() => setIsFullCartaOpen(false)}
                className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-luxury-gold to-luxury-champagne text-luxury-black font-sans text-xs tracking-widest uppercase font-bold text-center"
              >
                {t.menu.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
