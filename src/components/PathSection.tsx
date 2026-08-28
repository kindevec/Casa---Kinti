import React from 'react';
import { PATH_STEPS, WHATSAPP_PHONE } from '../data';
import { ButterflyGraphic, FloralBouquet } from './FloralDecorations';
import { BookOpen, Sparkles, Scale, Flower2, ArrowRight, MessageCircle, Clock, Zap } from 'lucide-react';

export const PathSection: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-7 h-7 text-[#6B7FD1]" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-[#9B8FD9]" />;
      case 'Scale':
        return <Scale className="w-7 h-7 text-[#6B7FD1]" />;
      case 'Flower2':
        return <Flower2 className="w-7 h-7 text-[#9B8FD9]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#6B7FD1]" />;
    }
  };

  const tarotWhatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    'Hola, quiero reservar mi Lectura Express de Tarot Terapéutico por $15'
  )}`;

  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-b from-[#C9D4F5]/40 via-[#FFFFFF] to-[#DCEEFB]/40">
      {/* Elementos botánicos flotantes sutiles */}
      <FloralBouquet className="absolute top-10 right-4 w-36 h-36 opacity-40 -z-5" />
      <FloralBouquet className="absolute bottom-10 left-4 w-36 h-36 opacity-40 -z-5" flip />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DCEEFB] text-[#6B7FD1] text-xs font-bold uppercase tracking-[0.2em] border border-[#9B8FD9]/30">
            <span>Tu Recorrido Hacia la Plenitud</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#3E4A7A] leading-tight">
            El bienestar no es casualidad,{' '}
            <span className="font-script text-[#9B8FD9] text-4xl sm:text-5xl md:text-6xl font-normal">
              es un camino
            </span>
          </h2>

          <p className="text-base text-[#3E4A7A]/80 max-w-xl mx-auto font-normal">
            Cada paso está diseñado con empatía y rigor profesional para guiar tu proceso de autoconocimiento o apoyar el desarrollo de tus hijos.
          </p>
        </div>

        {/* Fila de 4 Íconos con Mariposa Decorativa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PATH_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`path-step-${step.number}`}
              className="relative group bg-white/90 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-[#C9D4F5]/70 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              {/* Mariposa decorativa encima de cada ícono */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                <ButterflyGraphic
                  size={32}
                  color={idx % 2 === 0 ? 'purple' : 'blue'}
                  className="transition-transform group-hover:scale-115"
                />
              </div>

              {/* Número y Contenedor de Ícono */}
              <div className="relative mt-2 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#DCEEFB] to-[#F0C6D9]/50 flex items-center justify-center border border-[#9B8FD9]/30 shadow-xs group-hover:bg-[#FFFFFF] transition-colors">
                  {getStepIcon(step.icon)}
                </div>
                <span className="absolute -bottom-2 -right-2 bg-[#6B7FD1] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                  {step.number}
                </span>
              </div>

              {/* Palabra clave en mayúsculas */}
              <span className="text-xs font-bold tracking-[0.25em] text-[#9B8FD9] uppercase mb-1">
                {step.keyword}
              </span>

              {/* Título */}
              <h3 className="font-serif-display text-xl font-bold text-[#3E4A7A] mb-2">
                {step.title}
              </h3>

              {/* Descripción */}
              <p className="text-xs sm:text-sm text-[#3E4A7A]/75 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Botón CTA centrado */}
        <div className="text-center mt-12">
          <a
            href="#servicios"
            id="path-cta-button"
            className="inline-flex items-center gap-2.5 bg-[#6B7FD1] hover:bg-[#9B8FD9] text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>Comienza tu camino</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Banner de Promoción Especial Tarot Terapéutico */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#6B7FD1] via-[#8596DD] to-[#9B8FD9] p-8 sm:p-10 text-white shadow-xl border border-white/40">
          {/* Elementos decorativos en banner */}
          <ButterflyGraphic className="absolute -top-2 right-8 opacity-85" size={42} color="pink" />
          <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xs px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                <Zap className="w-3.5 h-3.5 text-[#F5C84C]" />
                <span>Promoción Especial de Inicio de Año</span>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Lectura Express de Tarot Terapéutico
              </h3>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
                Consulta terapéutica y orientación espiritual con preguntas claras, sin adivinar. Enfocada en tu autoconocimiento, desbloqueo de dudas y toma de decisiones.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs sm:text-sm font-medium text-white/90">
                <span className="flex items-center gap-1 bg-black/10 px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-[#F5C84C]" /> 15 minutos de sesión
                </span>
                <span className="flex items-center gap-1 bg-black/10 px-3 py-1 rounded-full">
                  ✦ Modalidad Presencial u Online
                </span>
              </div>
            </div>

            {/* Precio & Botón WhatsApp directo */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4 shrink-0">
              <div className="text-center lg:text-right">
                <span className="text-xs text-white/80 line-through block">Precio regular: $25.00</span>
                <div className="flex items-baseline justify-center lg:justify-end gap-1">
                  <span className="text-4xl sm:text-5xl font-bold font-serif-display text-[#F5C84C]">
                    $15
                  </span>
                  <span className="text-xs uppercase tracking-wider text-white/90">USD</span>
                </div>
              </div>

              <a
                href={tarotWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="tarot-promo-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#3E4A7A] hover:bg-[#DCEEFB] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Reservar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
