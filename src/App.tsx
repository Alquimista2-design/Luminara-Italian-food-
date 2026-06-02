import React, { useState } from 'react';
import { Language } from './types';
import { translations, menuCategories, wineCategories, galleryItems } from './data';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Essence from './components/Essence';
import MenuSection from './components/MenuSection';
import WineSection from './components/WineSection';
import GallerySection from './components/GallerySection';
import ChefSection from './components/ChefSection';
import BookingForm from './components/BookingForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Generated Premium Image Assets
const HERO_DISH_IMG = '/src/assets/images/hero_dish_1780364911889.png';
const RESTAURANT_INTERIOR_IMG = '/src/assets/images/restaurant_interior_1780364932872.png';
const CHEF_MATTEO_IMG = '/src/assets/images/chef_matteo_1780364948126.png';
const WINE_CELLAR_IMG = '/src/assets/images/wine_cellar_1780364963365.png';

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];

  // Global smooth scroll trigger to Booking Section
  const handleScrollToBooking = () => {
    const element = document.getElementById('reservations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8] antialiased selection:bg-luxury-gold selection:text-luxury-black font-sans min-h-screen">
      {/* 1. Transparent-solid Sticky Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenBooking={handleScrollToBooking}
      />

      {/* 2. Full-Screen Parallax Cinematic Hero with Automatic Image Fading */}
      <Hero
        t={t}
        onOpenBooking={handleScrollToBooking}
        bgImages={[HERO_DISH_IMG, RESTAURANT_INTERIOR_IMG]}
      />

      {/* 3. "La Esencia" Philosophical and Gourmet Story Block */}
      <Essence
        t={t}
        essenceImage={RESTAURANT_INTERIOR_IMG}
      />

      {/* 4. Elegant Interactive Menu with Categories and interactive complete overlay "Carta" */}
      <MenuSection
        t={t}
        menuCategories={menuCategories}
      />

      {/* 5. Underground Wine Cellar Premium Listing and Sommelier Bio Quotes */}
      <WineSection
        t={t}
        wineCategories={wineCategories}
        cellarImage={WINE_CELLAR_IMG}
      />

      {/* 6. Filterable Masonry Experience Gallery with details lightbox */}
      <GallerySection
        t={t}
        lang={lang}
        galleryItems={galleryItems}
      />

      {/* 7. Dedicated Chef section (Bio and executive culinary approach) */}
      <ChefSection
        t={t}
        chefImage={CHEF_MATTEO_IMG}
      />

      {/* 8. Advanced Reservation Form System with Live Receipt and local active states memory */}
      <BookingForm
        t={t}
      />

      {/* 9. Address and opening hours details next to custom SVG Liguria Map */}
      <ContactSection
        t={t}
      />

      {/* 10. Warm bottom credits and quick footer navigation */}
      <Footer
        t={t}
      />

      {/* Floating Call Assistance Widget (Only visible on mobile/tablet) */}
      <div className="fixed bottom-6 left-6 z-40 lg:hidden">
        <a
          href="https://wa.me/34600000000?text=Hola,%20quisiera%20pedir..."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20ba5a] transition-all"
          title="Direct WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 2C6.492 2 2 6.484 2 12.016a10.02 10.02 0 0 0 1.359 5.047L2 22l5.125-1.344a9.95 9.95 0 0 0 4.906 1.281h.016c5.523 0 10.016-4.484 10.016-10.016C22.063 6.484 17.562 2 12.031 2zm6.188 14.156c-.25.703-1.469 1.297-2.031 1.344-.563.047-1.125.266-3.625-.719-2.5-1-4.063-3.563-4.188-3.734-.125-.172-.984-1.297-.984-2.469 0-1.172.563-1.75.813-2.016.25-.266.547-.328.719-.328.172 0 .344.016.484.016.141 0 .328-.047.5-.047.172 0 .344.422.391.547.047.125.172.422.188.469.172.359.109.625.016.813-.094.188-.188.313-.313.469-.125.156-.266.328-.109.594.156.266.703 1.156 1.5 1.875.797.719 1.469.938 1.734 1.078.266.141.422.125.578-.047.156-.172.672-.781.844-1.047.172-.266.344-.219.578-.141.234.078 1.484.703 1.734.828.25.125.422.188.484.297.063.109.063.688-.188 1.391z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
