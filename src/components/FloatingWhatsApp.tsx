import React, { useState, useEffect } from 'react';
import { WHATSAPP_PHONE, WHATSAPP_DEFAULT_MSG } from '../data';
import { WhatsAppOfficialIcon } from './FloralDecorations';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoVisible, setIsAutoVisible] = useState(false);

  useEffect(() => {
    // Comportamiento móvil: inicia oculto, emerge a los 2.5s por 5s para decisión del cliente y luego se vuelve a ocultar
    const initialShowTimer = window.setTimeout(() => {
      setIsAutoVisible(true);
    }, 2500);

    const initialHideTimer = window.setTimeout(() => {
      setIsAutoVisible(false);
    }, 7500);

    const interval = window.setInterval(() => {
      setIsAutoVisible(true);
      window.setTimeout(() => {
        setIsAutoVisible(false);
      }, 5000);
    }, 24000);

    return () => {
      window.clearTimeout(initialShowTimer);
      window.clearTimeout(initialHideTimer);
      window.clearInterval(interval);
    };
  }, []);

  const isOpen = isHovered || isAutoVisible;

  return (
    <div
      className="fixed bottom-[calc(5.25rem+env(safe-area-inset-bottom,0px))] md:bottom-[calc(1.75rem+env(safe-area-inset-bottom,0px))] right-0 z-50 flex items-center select-none pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Botón Flotante de WhatsApp: Dorado con Ícono en Negro */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-button"
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className={`relative group flex items-center justify-center w-11 h-11 xs:w-12 xs:h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-[#E5C985] via-[#D4B26F] to-[#B88E44] border-2 border-[#FFF8D6]/80 shadow-[0_6px_20px_rgba(0,0,0,0.35),0_0_15px_rgba(212,178,111,0.5)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.45),0_0_22px_rgba(212,178,111,0.7)] transition-all duration-500 ease-out cursor-pointer active:scale-95 ${
          isOpen
            ? '-translate-x-3 sm:-translate-x-4 md:-translate-x-5 md:scale-110'
            : 'translate-x-6 sm:translate-x-7 md:translate-x-8 md:hover:translate-x-0'
        }`}
        aria-label="Contactar por WhatsApp a Casa Kinti"
      >
        {/* Anillo de pulso dorado cuando está en reposo */}
        <span
          className={`absolute inset-0 rounded-full bg-[#E5C985] transition-opacity duration-300 pointer-events-none ${
            isHovered ? 'opacity-0' : 'opacity-40 animate-ping'
          }`}
        />

        {/* Ícono Oficial de WhatsApp en color negro */}
        <WhatsAppOfficialIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-7.5 md:h-7.5 text-[#0A1C24] relative z-10 shrink-0 drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]" />
      </a>
    </div>
  );
};

