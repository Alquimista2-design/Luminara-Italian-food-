import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Users, Gift, Utensils, CheckCircle, Check, Loader2, Sparkles, X } from 'lucide-react';
import { TranslationDictionary, ReservationData } from '../types';

interface BookingFormProps {
  t: TranslationDictionary;
  isOpenDirectly?: boolean;
  onCloseDirectly?: () => void;
}

export default function BookingForm({ t, isOpenDirectly = false, onCloseDirectly }: BookingFormProps) {
  const [activeReservation, setActiveReservation] = useState<ReservationData | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Form Fields
  const [guests, setGuests] = useState<number>(2);
  const [occasion, setOccasion] = useState<ReservationData['specialOccasion']>('none');
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [dietary, setDietary] = useState<string>('');

  // Default date to today
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Fetch local active reservation on load
  useEffect(() => {
    const stored = localStorage.getItem('luminara_reservation');
    if (stored) {
      try {
        setActiveReservation(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const timeSlots = {
    lunch: ['13:00', '13:30', '14:00', '14:30', '15:00'],
    dinner: ['19:30', '20:00', '20:30', '21:00', '21:30', '22:00'],
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !date || !timeSlot) {
      return;
    }

    setIsSubmitting(true);

    // Simulate high-end network reservation validation
    setTimeout(() => {
      const confirmationDetails: ReservationData = {
        name,
        email,
        phone,
        date,
        time: timeSlot,
        guests,
        dietary: dietary || undefined,
        specialOccasion: occasion,
        needsConfirmation: false,
      };

      // Save to localStorage
      localStorage.setItem('luminara_reservation', JSON.stringify(confirmationDetails));
      setActiveReservation(confirmationDetails);

      // Generate a refined Italian alpha-numeric booking ID
      const randomAlpha = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + String.fromCharCode(65 + Math.floor(Math.random() * 26));
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      setBookingRef(`LUM-${randomAlpha}-${randomNumber}`);

      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 2000);
  };

  const handleCancelActiveReservation = () => {
    localStorage.removeItem('luminara_reservation');
    setActiveReservation(null);
    setFormSubmitted(false);
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setTimeSlot('');
    setDietary('');
    setOccasion('none');
    setGuests(2);
  };

  // Helper date formatter
  const formatFriendlyDate = (dateString: string) => {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length !== 3) return dateString;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  };

  return (
    <section id="reservations" className="py-24 sm:py-32 bg-black/35 relative border-b border-luxury-gold/5 backdrop-blur-[2px]">
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[90%] h-[35%] bg-luxury-gold/[0.015] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.3em] text-luxury-gold uppercase block mb-3 font-medium">
            TAVOLO PRENOTAZIONI
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-cream tracking-wide mb-6">
            {t.booking.title}
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mb-6" />
          <p className="font-sans text-xs sm:text-sm text-luxury-cream/60 leading-relaxed tracking-wider">
            {t.booking.subtitle}
          </p>
        </div>

        {/* ACTIVE RESERVATION CARD (IF EXISTS IN DEVICE) */}
        {activeReservation && !formSubmitted && (
          <div className="max-w-xl mx-auto mb-16 p-8 bg-gradient-to-br from-[#1c1b18] to-[#0E0E0D] border border-luxury-gold/40 relative">
            <span className="absolute top-4 right-4 text-[9px] font-bold text-luxury-gold uppercase tracking-[0.2em] bg-luxury-gold/10 px-2 py-0.5 border border-luxury-gold/20">
              Sua Reserva Activa
            </span>
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="w-5 h-5 text-luxury-gold" />
              <h4 className="font-serif text-lg text-luxury-cream tracking-wide">
                ¡Gracias! Ya tiene una mesa reservada
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm border-y border-luxury-cream/5 py-5 mb-6 font-sans">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-luxury-cream/40 block">Invitado</span>
                <span className="text-luxury-cream font-medium">{activeReservation.name}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-luxury-cream/40 block">Fecha y Hora</span>
                <span className="text-luxury-cream font-medium">
                  {formatFriendlyDate(activeReservation.date)} a las {activeReservation.time}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-luxury-cream/40 block">Comensales</span>
                <span className="text-luxury-gold font-bold">{activeReservation.guests} Personas</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-luxury-cream/40 block">Ocasión</span>
                <span className="text-luxury-cream font-medium">
                  {activeReservation.specialOccasion === 'none' ? 'General' : activeReservation.specialOccasion?.toUpperCase()}
                </span>
              </div>
              {activeReservation.dietary && (
                <div className="col-span-2">
                  <span className="text-[10px] uppercase tracking-widest text-luxury-cream/40 block">Notas de Cocina</span>
                  <span className="text-luxury-cream/70 text-xs italic">&ldquo;{activeReservation.dietary}&rdquo;</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-black/40 p-4 border border-luxury-gold/5">
              <span className="font-mono text-[9px] text-luxury-gold/70 tracking-widest">
                ¿Desea cambiar o cancelar su reserva actual?
              </span>
              <button
                onClick={handleCancelActiveReservation}
                className="px-4 py-2 border border-luxury-burgundy hover:bg-luxury-burgundy/15 text-luxury-cream font-sans text-[10px] tracking-widest uppercase transition-all duration-300 w-full sm:w-auto"
                id="btn-cancel-reservation"
              >
                Cancelar Mesa
              </button>
            </div>
          </div>
        )}

        {/* CORE FORM GRID */}
        {(!activeReservation || formSubmitted) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column: Form Fields (7 columns) */}
            <form onSubmit={handleBookingSubmit} className="lg:col-span-7 bg-[#0c0c0b] border border-luxury-cream/5 p-8 sm:p-12 space-y-8" id="booking-form-core">
              
              {/* Field Block 1: Guests and Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-[11px] uppercase tracking-widest text-luxury-gold font-bold flex items-center space-x-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>{t.booking.fieldGuests}</span>
                  </label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setGuests(num)}
                        className={`w-9 h-9 sm:w-10 sm:h-10 font-sans text-xs transition-all border focus:outline-none flex items-center justify-center font-medium ${
                          guests === num
                            ? 'border-luxury-gold bg-luxury-gold/10 text-luxury-gold font-bold shadow-md shadow-luxury-gold/5'
                            : 'border-luxury-cream/10 text-luxury-cream/50 bg-transparent hover:border-luxury-cream/20'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="select-occasion" className="font-sans text-[11px] uppercase tracking-widest text-luxury-cream/60 flex items-center space-x-1.5">
                    <Gift className="w-3.5 h-3.5 text-luxury-gold/70" />
                    <span>{t.booking.fieldOccasion}</span>
                  </label>
                  <select
                    id="select-occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value as ReservationData['specialOccasion'])}
                    className="w-full bg-[#121110] border border-luxury-cream/10 text-luxury-cream p-3 text-xs tracking-wider focus:outline-none focus:border-luxury-gold/50 rounded-none h-[42px]"
                  >
                    <option value="none">{t.booking.occasionNone}</option>
                    <option value="birthday">{t.booking.occasionBday}</option>
                    <option value="anniversary">{t.booking.occasionAnniv}</option>
                    <option value="business">{t.booking.occasionBiz}</option>
                    <option value="other">{t.booking.occasionOther}</option>
                  </select>
                </div>
              </div>

              {/* Field Block 2: Date Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="input-date" className="font-sans text-[11px] uppercase tracking-widest text-luxury-gold font-bold flex items-center space-x-1.5">
                    <CalendarIcon className="w-3.5 h-3.5" />
                    <span>{t.booking.fieldDate}</span>
                  </label>
                  <input
                    id="input-date"
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#121110] border border-luxury-cream/10 text-luxury-cream p-3 text-xs tracking-wider focus:outline-none focus:border-luxury-gold/50 rounded-none text-left"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-[11px] uppercase tracking-widest text-luxury-cream/60 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-luxury-gold/70" />
                    <span>{t.booking.fieldTime}</span>
                  </label>
                  <div className="font-sans text-[9px] text-[#A6C0A6] uppercase tracking-widest mb-1 font-medium">Luminara Selecto</div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {/* Combine lunch and dinner times for rendering */}
                    {[...timeSlots.lunch, ...timeSlots.dinner].slice(0, 8).map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTimeSlot(slot)}
                        className={`py-2 text-[10px] font-sans text-center transition-all border focus:outline-none ${
                          timeSlot === slot
                            ? 'border-luxury-gold bg-luxury-gold/20 text-luxury-gold font-bold'
                            : 'border-luxury-cream/5 text-luxury-cream/40 bg-transparent hover:border-luxury-cream/10'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Field Block 3: User Details (Name, Phone, Email) */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="input-name" className="font-sans text-[10px] uppercase tracking-widest text-luxury-cream/50">{t.booking.fieldName} *</label>
                    <input
                      id="input-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Roberto Benigni"
                      className="w-full bg-[#121110] border border-luxury-cream/15 text-luxury-cream p-3 text-xs focus:outline-none focus:border-luxury-gold rounded-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="input-phone" className="font-sans text-[10px] uppercase tracking-widest text-luxury-cream/50">{t.booking.fieldPhone} *</label>
                    <input
                      id="input-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej. +34 600 000 000"
                      className="w-full bg-[#121110] border border-luxury-cream/15 text-luxury-cream p-3 text-xs focus:outline-none focus:border-luxury-gold rounded-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="input-email" className="font-sans text-[10px] uppercase tracking-widest text-luxury-cream/50">{t.booking.fieldEmail} *</label>
                  <input
                    id="input-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rbenigni@la-dolce-vita.com"
                    className="w-full bg-[#121110] border border-luxury-cream/15 text-luxury-cream p-3 text-xs focus:outline-none focus:border-luxury-gold rounded-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="input-dietary" className="font-sans text-[10px] uppercase tracking-widest text-luxury-cream/50">{t.booking.fieldDietary}</label>
                  <input
                    id="input-dietary"
                    type="text"
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                    placeholder={t.booking.dietaryPlaceholder}
                    className="w-full bg-[#121110] border border-luxury-cream/15 text-luxury-cream p-3 text-xs focus:outline-none focus:border-luxury-gold rounded-none"
                  />
                </div>
              </div>

              {/* Submit trigger button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-luxury-gold to-luxury-champagne hover:from-luxury-gold-dark text-luxury-black font-sans text-xs tracking-[0.3em] uppercase font-bold transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-luxury-gold/10"
                id="btn-submit-booking-action"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-luxury-black" />
                    <span>{t.booking.buttonSubmitting}</span>
                  </>
                ) : (
                  <span>{t.booking.buttonSubmit}</span>
                )}
              </button>
            </form>

            {/* Right Column: Dynamic live visual receipt summary card (5 columns) */}
            <div className="lg:col-span-5 bg-[#0e0d0d] border border-luxury-gold/20 p-8 sm:p-10 space-y-6 relative sticky top-24">
              <div className="absolute top-0 right-10 w-24 h-[1px] bg-luxury-gold/40" />

              <div className="flex items-center space-x-2">
                <Utensils className="w-4 h-4 text-luxury-gold" />
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-bold">
                  Sua Esperienza Relación
                </span>
              </div>

              <div className="border-b border-luxury-cream/10 pb-4">
                <span className="font-serif text-2xl text-luxury-cream tracking-wide">Luminara Portofino</span>
                <span className="font-sans text-[9px] text-luxury-gold tracking-widest uppercase block mt-1">Acceso Exclusivo • Valet Parking Incluido</span>
              </div>

              {/* Dynamic Summary outputs */}
              <div className="space-y-4 font-sans text-xs">
                <div className="flex justify-between py-1 border-b border-luxury-cream/5">
                  <span className="text-luxury-cream/40 uppercase tracking-wider text-[10px]">Comensales</span>
                  <span className="text-luxury-cream font-medium tracking-wide">{guests} Personas</span>
                </div>

                <div className="flex justify-between py-1 border-b border-luxury-cream/5">
                  <span className="text-luxury-cream/40 uppercase tracking-wider text-[10px]">Fecha sugerida</span>
                  <span className="text-luxury-cream font-medium tracking-wide">{date ? formatFriendlyDate(date) : 'Sin seleccionar'}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-luxury-cream/5">
                  <span className="text-luxury-cream/40 uppercase tracking-wider text-[10px]">Turno horario</span>
                  <span className="text-luxury-gold font-bold tracking-widest">{timeSlot ? `${timeSlot} HRS` : 'Por designar'}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-luxury-cream/5">
                  <span className="text-luxury-cream/40 uppercase tracking-wider text-[10px]">Ocasión propuesta</span>
                  <span className="text-luxury-cream font-medium tracking-wide">
                    {occasion === 'none' ? 'General' : occasion.toUpperCase()}
                  </span>
                </div>

                {name && (
                  <div className="flex justify-between py-1 border-b border-luxury-cream/5">
                    <span className="text-luxury-cream/40 uppercase tracking-wider text-[10px]">Titular Mesa</span>
                    <span className="text-[#F5F0E8] font-medium limit-char-15 overflow-hidden text-right">{name}</span>
                  </div>
                )}
              </div>

              {/* Advisory details */}
              <div className="p-4 bg-luxury-gold/[0.02] border border-luxury-gold/10 flex gap-2.5 items-start">
                <Sparkles className="w-3.5 h-3.5 text-luxury-gold shrink-0 mt-0.5 animate-pulse" />
                <p className="font-sans text-[10px] text-luxury-cream/40 uppercase tracking-widest leading-relaxed">
                  Para peticiones especiales, mesas asignadas junto al ventanal mirador del mar, o alergias severas, nuestro conserje gastronómico se pondrá en contacto telefónico.
                </p>
              </div>

              <div className="text-center pt-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-cream/30">
                  LUMINARA RECRUITS • NO BOOKING FEES
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* LUXURIOUS SUCCESS MODAL */}
      {formSubmitted && activeReservation && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn" id="success-booking-modal">
          <div className="bg-[#121110] border border-luxury-gold max-w-lg w-full p-8 sm:p-12 text-center relative shadow-2xl">
            <div className="w-16 h-16 rounded-full border border-luxury-gold flex items-center justify-center mx-auto mb-6 bg-luxury-gold/10">
              <Check className="w-8 h-8 text-luxury-gold" />
            </div>

            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-bold block mb-2">
              PRENOTAZIONE COMPLETATA
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-luxury-cream tracking-wide mb-3">
              {t.booking.successTitle}
            </h3>
            <p className="font-sans text-xs text-luxury-cream/70 max-w-sm mx-auto leading-relaxed mt-1">
              {t.booking.successMessage}
            </p>

            {/* Custom generated receipt ticket frame */}
            <div className="my-8 bg-black/60 border border-luxury-gold/20 p-6 space-y-3 font-sans text-xs text-left">
              <div className="flex justify-between items-baseline border-b border-luxury-cream/5 pb-2 mb-2">
                <span className="font-serif text-sm text-luxury-cream">Luminara Ristorante</span>
                <span className="font-mono text-[10px] text-luxury-gold tracking-widest uppercase font-bold">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-luxury-cream/40 uppercase text-[9px] tracking-widest">Titular</span>
                <span className="text-luxury-cream font-medium">{activeReservation.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-luxury-cream/40 uppercase text-[9px] tracking-widest">Fecha / Hora</span>
                <span className="text-luxury-cream font-medium">
                  {formatFriendlyDate(activeReservation.date)} a las {activeReservation.time}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-luxury-cream/40 uppercase text-[9px] tracking-widest">Invitados</span>
                <span className="text-luxury-gold font-bold">{activeReservation.guests} Comensales</span>
              </div>
              {activeReservation.dietary && (
                <div className="border-t border-luxury-cream/5 pt-2">
                  <span className="text-luxury-cream/40 uppercase text-[9px] tracking-widest block">Restricciones</span>
                  <span className="text-luxury-cream/70 text-[11px] leading-normal italic">&ldquo;{activeReservation.dietary}&rdquo;</span>
                </div>
              )}
            </div>

            <p className="font-sans text-[11px] text-luxury-cream/40 max-w-xs mx-auto leading-normal">
              {t.booking.successDetail}
            </p>

            <button
              onClick={() => {
                setFormSubmitted(false);
                if (onCloseDirectly) onCloseDirectly();
              }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-luxury-gold to-luxury-champagne text-luxury-black font-sans text-xs tracking-widest uppercase font-bold cursor-pointer hover:shadow-lg hover:shadow-luxury-gold/20 transition-all rounded-none"
              id="btn-close-booking-success"
            >
              {t.booking.buttonClose}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
