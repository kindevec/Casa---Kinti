import React, { useState } from 'react';
import { WHATSAPP_PHONE, WHATSAPP_DEFAULT_MSG } from '../data';
import { MessageCircle, X } from 'lucide-react';
import { ButterflyGraphic } from './FloralDecorations';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Botón Circular con Pulso */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-button"
        className="relative group p-4 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
        aria-label="Contactar por WhatsApp a Casa Kinti"
      >
        {/* Anillo de pulso sutil */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        {/* Pequeña mariposa flotando sobre el botón */}
        <div className="absolute -top-3 -left-3 pointer-events-none">
          <ButterflyGraphic size={22} color="pink" />
        </div>

        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
};
