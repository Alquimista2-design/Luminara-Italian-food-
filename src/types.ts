export interface MenuItem {
  id: string;
  nameIt: string;
  nameSub: string;
  description: string;
  price: string;
  badge?: string;
  pairing?: string;
}

export interface MenuCategory {
  id: 'antipasti' | 'primi' | 'secondi' | 'dolci';
  name: string;
  items: MenuItem[];
}

export interface WineItem {
  id: string;
  name: string;
  winery: string;
  region: string;
  year: string;
  priceGlass?: string;
  priceBottle: string;
  description: string;
}

export interface WineCategory {
  id: 'espumosos' | 'blancos' | 'tintos' | 'copas';
  name: string;
  items: WineItem[];
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  dietary?: string;
  specialOccasion?: 'none' | 'birthday' | 'anniversary' | 'business' | 'other';
  needsConfirmation?: boolean;
}

export type Language = 'es' | 'en';

export interface TranslationDictionary {
  nav: {
    home: string;
    essence: string;
    menu: string;
    wine: string;
    gallery: string;
    chef: string;
    contact: string;
    book: string;
  };
  hero: {
    subtitle: string;
    titleAccent: string;
    description: string;
    viewMenu: string;
    bookNow: string;
    scroll: string;
  };
  essence: {
    tagline: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    badge1: string;
    badge1Sub: string;
    badge2: string;
    badge2Sub: string;
    badge3: string;
    badge3Sub: string;
  };
  menu: {
    title: string;
    subtitle: string;
    viewAll: string;
    close: string;
    pairingLabel: string;
    currency: string;
    interactiveNotice: string;
  };
  wine: {
    title: string;
    subtitle: string;
    categoryBlancos: string;
    categoryTintos: string;
    categoryEspumosos: string;
    categoryCopas: string;
    sommelierNote: string;
    sommelierQuote: string;
    bottleLabel: string;
    glassLabel: string;
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  events: {
    title: string;
    subtitle: string;
  };
  chef: {
    title: string;
    subtitle: string;
    bio: string;
    sigSignature: string;
  };
  booking: {
    title: string;
    subtitle: string;
    instructions: string;
    fieldName: string;
    fieldEmail: string;
    fieldPhone: string;
    fieldDate: string;
    fieldTime: string;
    fieldGuests: string;
    fieldDietary: string;
    dietaryPlaceholder: string;
    fieldOccasion: string;
    occasionNone: string;
    occasionBday: string;
    occasionAnniv: string;
    occasionBiz: string;
    occasionOther: string;
    buttonSubmit: string;
    buttonSubmitting: string;
    successTitle: string;
    successMessage: string;
    successDetail: string;
    buttonClose: string;
  };
  contact: {
    title: string;
    subtitle: string;
    chatWithUs: string;
    findUs: string;
    directionLabel: string;
    howToGetThere: string;
    howToGetThereDesc: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hoursWeek: string;
    hoursWeekend: string;
  };
}
