import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Compass } from 'lucide-react';
import { TranslationDictionary } from '../types';

interface ContactSectionProps {
  t: TranslationDictionary;
}

export default function ContactSection({ t }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-transparent relative overflow-hidden">
      {/* Decorative gradient glowing ball */}
      <div className="absolute top-[40%] left-[80%] w-80 h-80 bg-luxury-gold/[0.012] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title Heading Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16 lg:mb-24">
          <div>
            <span className="font-sans text-xs tracking-[0.35em] text-luxury-gold uppercase block mb-3 font-bold">
              DOVE SIAMO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-cream tracking-wide leading-tight">
              {t.contact.title}
            </h2>
          </div>
          <div>
            <p className="font-sans text-xs sm:text-sm text-luxury-cream/60 leading-relaxed tracking-wider max-w-md lg:ml-auto">
              {t.contact.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* LEFT COLUMN: Contact particulars (Gives 5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            
            {/* Particular list contact specs */}
            <div className="space-y-8 font-sans">
              
              {/* Box 1: Address Map details */}
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0 text-luxury-gold bg-luxury-gold/5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-luxury-cream/40 font-bold mb-1">
                    {t.contact.findUs} / {t.contact.directionLabel}
                  </h4>
                  <p className="text-sm text-luxury-cream font-medium tracking-wide">
                    Salita San Giorgio, 18, 16034 Portofino GE, Italia
                  </p>
                </div>
              </div>

              {/* Box 2: Telephone details */}
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0 text-luxury-gold bg-luxury-gold/5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-luxury-cream/40 font-bold mb-1">
                    {t.contact.phoneLabel}
                  </h4>
                  <a
                    href="tel:+390185269000"
                    className="text-sm text-luxury-cream font-semibold hover:text-luxury-gold transition-colors duration-200 tracking-widest"
                  >
                    +39 0185 269 000
                  </a>
                </div>
              </div>

              {/* Box 3: Email inquiries */}
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0 text-luxury-gold bg-luxury-gold/5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-luxury-cream/40 font-bold mb-1">
                    {t.contact.emailLabel}
                  </h4>
                  <a
                    href="mailto:experience@luminara-ristorante.it"
                    className="text-sm text-luxury-cream font-medium hover:text-luxury-gold transition-colors duration-200"
                  >
                    experience@luminara-ristorante.it
                  </a>
                </div>
              </div>

              {/* Box 4: Calendar opening hours */}
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0 text-luxury-gold bg-luxury-gold/5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-luxury-cream/40 font-bold mb-1">
                    {t.contact.hoursLabel}
                  </h4>
                  <p className="text-xs text-luxury-cream/70 leading-normal mb-1 tracking-wide">
                    {t.contact.hoursWeek}
                  </p>
                  <p className="text-xs text-luxury-cream/90 font-medium leading-normal tracking-wide">
                    {t.contact.hoursWeekend}
                  </p>
                  <p className="text-[9px] uppercase tracking-widest text-luxury-gold font-bold mt-2">
                    LUNEDÌ RIPOSO • CLOSED MONDAYS
                  </p>
                </div>
              </div>

            </div>

            {/* Arriving instructions "Cómo Llegar" block with gold bounding frame */}
            <div className="p-6 bg-gradient-to-r from-luxury-dark to-black border-l border-luxury-gold py-5">
              <h4 className="font-serif text-sm text-luxury-gold tracking-wide uppercase mb-2 flex items-center space-x-2">
                <Compass className="w-4 h-4 animate-spin-slow text-luxury-gold" />
                <span>{t.contact.howToGetThere}</span>
              </h4>
              <p className="font-sans text-xs text-luxury-cream/60 leading-relaxed font-light tracking-wide">
                {t.contact.howToGetThereDesc}
              </p>
            </div>

            {/* Direct Instant WhatsApp CTA */}
            <div>
              <a
                href="https://wa.me/34600000000?text=Buongiorno%20Luminara,%20vorrei%20riservare..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 border border-transparent bg-emerald-600/10 hover:bg-emerald-600/25 text-emerald-400 font-sans text-[11px] tracking-widest uppercase font-bold transition-all duration-300 w-full justify-center"
                id="btn-whatsapp-direct"
              >
                <MessageCircle className="w-4.5 h-4.5 text-[#25D366]" />
                <span>{t.contact.chatWithUs}</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Conceptual, breathtaking Italian Coast Map Blueprint illustration (Gives 7 columns) */}
          <div className="lg:col-span-7 bg-[#121110] border border-luxury-gold/15 p-6 shadow-2xl relative flex flex-col justify-center min-h-[350px] overflow-hidden group">
            
            <div className="absolute top-4 right-4 text-[9px] font-mono text-luxury-gold/50 tracking-[0.25em] uppercase pointer-events-none">
              COORD: 44.3031° N, 9.2081° E
            </div>

            {/* Abstract Premium SVG Coastal Map Blueprint */}
            <div className="w-full h-full min-h-[280px] relative pointer-events-none flex items-center justify-center select-none bg-[#090808]/80 border border-luxury-gold/5 py-10">
              <svg
                viewBox="0 0 500 300"
                className="w-full h-full max-h-[290px] opacity-75 group-hover:opacity-90 transition-opacity duration-1000"
                style={{ fill: 'none', stroke: '#D4AF88' }}
              >
                {/* Coastal contours (Italian Riviera Cliffs) */}
                <path
                  d="M10,80 Q90,75 140,110 T220,130 T320,150 T410,210 T490,195"
                  strokeWidth="0.75"
                  strokeDasharray="4 3"
                  className="opacity-40"
                />
                <path
                  d="M10,120 Q100,105 160,150 T250,170 T350,195 T430,250 T495,240"
                  strokeWidth="1.2"
                  className="opacity-55"
                />
                
                {/* Secondary cliff hatchings */}
                <path d="M110,115 L120,140" strokeWidth="0.5" className="opacity-20" />
                <path d="M130,118 L140,143" strokeWidth="0.5" className="opacity-20" />
                <path d="M150,122 L160,147" strokeWidth="0.5" className="opacity-20" />
                <path d="M220,140 L210,165" strokeWidth="0.5" className="opacity-20" />
                <path d="M240,145 L230,170" strokeWidth="0.5" className="opacity-20" />

                {/* Sea contour depth ripples */}
                <path d="M10,150 C120,170 200,210 320,240 S450,285 490,290" strokeWidth="0.5" className="opacity-15" />
                <path d="M10,190 C150,220 220,250 340,275 S440,295 490,299" strokeWidth="0.5" className="opacity-10" />

                {/* Main Bay Labels */}
                <text x="310" y="245" fill="#4B564B" fontSize="8" className="tracking-[0.2em] font-sans font-bold opacity-45 uppercase">LIGURIAN SEA</text>
                <text x="50" y="145" fill="#5C1F1F" fontSize="8" className="tracking-[0.2em] font-sans font-medium opacity-40 uppercase">CONVENTO</text>
                <text x="90" y="55" fill="#F5F0E8" fontSize="11" className="tracking-[0.3em] font-serif font-light opacity-50 uppercase">Portofino Bay</text>

                {/* San Giorgio Salita Road contour line */}
                <path d="M200,10 L195,45 L210,65 L225,85 L220,115 L245,145 L270,160 M270,160 L295,165 L330,155 L380,180" stroke="#E8D5B7" strokeWidth="1.5" className="opacity-55" />
                <text x="210" y="30" fill="#E8D5B7" fontSize="5" className="tracking-[0.1em] uppercase opacity-45 rotate-[80deg]">SALITA SAN GIORGIO</text>

                {/* LUMINARA Beacon gold target and compass icon */}
                <g transform="translate(245, 145)" className="animate-pulse">
                  <circle r="12" className="fill-luxury-gold/5 stroke-luxury-gold/40 stroke-2 opacity-50" />
                  <circle r="4" className="fill-luxury-gold stroke-black" />
                  
                  {/* Glowing radiating pointer ring */}
                  <circle r="22" className="stroke-luxury-gold/20 stroke-[0.5] opacity-30 animate-ping" />
                </g>

                {/* Star beacon call-out box */}
                <rect x="235" y="112" width="65" height="18" fill="#121110" stroke="#D4AF88" strokeWidth="0.75" className="opacity-90" />
                <text x="242" y="123" fill="#D4AF88" fontSize="7" className="tracking-[0.15em] font-sans font-bold uppercase">LUMINARA</text>
                <line x1="245" y1="133" x2="245" y2="142" stroke="#D4AF88" strokeWidth="0.75" />

                {/* Small compass rose icon */}
                <g transform="translate(430, 75)" className="opacity-30">
                  <circle r="16" stroke="#D4AF88" strokeWidth="0.5" strokeDasharray="2 1" />
                  <line x1="0" y1="-18" x2="0" y2="18" stroke="#D4AF88" strokeWidth="0.75" />
                  <line x1="-18" y1="0" x2="18" y2="0" stroke="#D4AF88" strokeWidth="0.75" />
                  <polygon points="0,-16 3,-3 0,0" fill="#D4AF88" />
                  <polygon points="0,-16 -3,-3 0,0" fill="#8C7355" />
                  <polygon points="0,16 3,3 0,0" fill="#8C7355" />
                  <polygon points="0,16 -3,3 0,0" fill="#D4AF88" />
                  <text x="-3" y="-21" fill="#D4AF88" fontSize="7" className="font-sans font-bold">N</text>
                </g>
              </svg>
            </div>

            {/* Map bottom text bar */}
            <div className="mt-4 font-sans text-[10px] text-luxury-cream/40 text-center tracking-widest uppercase">
              • ASISTENCIA VALET PARKING DISPONIBLE EN EL ACCESO AL ACANTILADO •
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
