import React from 'react';
import { WHATSAPP_PHONE, WHATSAPP_DEFAULT_MSG } from '../data';
import { ButterflyGraphic } from './FloralDecorations';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;

  return (
    <div
      className="fixed bottom-[calc(5.25rem+env(safe-area-inset-bottom,0px))] md:bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] right-0 z-50 flex items-center translate-x-5 sm:translate-x-6 hover:translate-x-0 active:translate-x-0 transition-transform duration-300 ease-out"
    >
      {/* Botón Circular con Pulso y Logo Oficial (Completamente visible, área táctil >= 44px) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-button"
        className="relative group p-0.5 rounded-full bg-white shadow-lg md:shadow-xl hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-108 active:scale-95 flex items-center justify-center cursor-pointer w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 min-w-[44px] min-h-[44px]"
        aria-label="Contactar por WhatsApp a Casa Kinti"
      >
        {/* Anillo de pulso sutil y discreto */}
        <span className="absolute -inset-0.5 rounded-full bg-[#25D366] opacity-20 animate-ping pointer-events-none" />

        {/* Pequeña mariposa flotando decorativa contenida dentro del área visible */}
        <div className="absolute -top-2 -left-2 sm:-top-2.5 sm:-left-2.5 md:-top-3 md:-left-3 pointer-events-none z-20">
          <ButterflyGraphic size={18} color="pink" className="w-4 h-4 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5" />
        </div>

        <img
          src="/icons/whatsapp.png"
          alt="WhatsApp Casa Kinti"
          className="w-full h-full object-cover rounded-full relative z-10"
        />
      </a>
    </div>
  );
};
