import React, { useState } from 'react';
import { WHATSAPP_PHONE, WHATSAPP_DEFAULT_MSG } from '../data';
import { ButterflyGraphic } from './FloralDecorations';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-[calc(5.25rem+env(safe-area-inset-bottom,0px))] md:bottom-[calc(1.75rem+env(safe-area-inset-bottom,0px))] right-0 z-50 flex items-center select-none pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Botón Flotante Puro: Sin contenedores ni fondos, emerge al pasar el cursor */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-button"
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className={`relative group flex items-center justify-center min-w-[48px] min-h-[48px] transition-all duration-400 ease-out cursor-pointer drop-shadow-lg hover:drop-shadow-[0_8px_25px_rgba(37,211,102,0.6)] active:scale-95 ${
          isHovered
            ? '-translate-x-3 sm:-translate-x-4 md:-translate-x-5 md:scale-110'
            : '-translate-x-3 sm:-translate-x-4 md:translate-x-8 md:hover:translate-x-0'
        }`}
        aria-label="Contactar por WhatsApp a Casa Kinti"
      >
        {/* Anillo de pulso cuando está en reposo */}
        <span
          className={`absolute inset-0 rounded-full bg-[#25D366] transition-opacity duration-300 pointer-events-none ${
            isHovered ? 'opacity-0' : 'opacity-35 animate-ping'
          }`}
        />

        {/* Pequeña mariposa flotando decorativa */}
        <div className="absolute -top-2.5 -left-2 sm:-top-3 sm:-left-2.5 pointer-events-none z-20 transition-transform duration-300 group-hover:scale-120 group-hover:-rotate-12">
          <ButterflyGraphic size={20} color="pink" className="w-4 h-4 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5" />
        </div>

        {/* Ícono circular oficial de WhatsApp directo */}
        <img
          src="/icons/whatsapp.png"
          alt="WhatsApp Casa Kinti"
          className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 object-contain rounded-full relative z-10"
        />
      </a>
    </div>
  );
};

