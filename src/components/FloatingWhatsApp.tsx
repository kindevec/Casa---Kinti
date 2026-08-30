import React, { useState } from 'react';
import { WHATSAPP_PHONE, WHATSAPP_DEFAULT_MSG } from '../data';
import { MessageCircle, X } from 'lucide-react';
import { ButterflyGraphic } from './FloralDecorations';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;

  return (
    <div className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))] md:bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] right-[calc(1rem+env(safe-area-inset-right,0px))] md:right-[calc(1.5rem+env(safe-area-inset-right,0px))] z-50 flex items-center">
      {/* Botón Circular con Pulso y Logo Oficial */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-button"
        className="relative group p-0.5 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
        aria-label="Contactar por WhatsApp a Casa Kinti"
      >
        {/* Anillo de pulso sutil */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        {/* Pequeña mariposa flotando sobre el botón */}
        <div className="absolute -top-3 -left-3 pointer-events-none z-20">
          <ButterflyGraphic size={22} color="pink" />
        </div>

        <img src="/icons/whatsapp.png" alt="WhatsApp Casa Kinti" className="w-14 h-14 object-cover rounded-full relative z-10" />
      </a>
    </div>
  );
};
