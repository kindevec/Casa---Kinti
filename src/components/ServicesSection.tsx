import React, { useState } from 'react';
import { SERVICES_ANCESTRAL, SERVICES_EDUCACION, INCLUDED_EXPERIENCE_ITEMS, TESTIMONIALS, WHATSAPP_PHONE } from '../data';
import { ServiceItem } from '../types';
import { ButterflyGraphic, FloralBouquet, FloralPhotoFrame } from './FloralDecorations';
import { Sparkles, Flower, Leaf, Eye, Brain, Languages, CheckSquare, Calendar, Check, Star, MessageCircle, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ancestral' | 'educacion'>('all');

  const getServiceIcon = (iconName: string, category: 'ancestral' | 'educacion') => {
    const isAncestral = category === 'ancestral';
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className={`w-6 h-6 ${isAncestral ? 'text-[#6B7FD1]' : 'text-[#9B8FD9]'}`} />;
      case 'Flower':
        return <Flower className={`w-6 h-6 ${isAncestral ? 'text-[#9B8FD9]' : 'text-[#F0C6D9]'}`} />;
      case 'Leaf':
        return <Leaf className={`w-6 h-6 text-[#12A89D]`} />;
      case 'Eye':
        return <Eye className={`w-6 h-6 text-[#6B7FD1]`} />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-[#9B8FD9]" />;
      case 'Languages':
        return <Languages className="w-6 h-6 text-[#6B7FD1]" />;
      case 'CheckSquare':
        return <CheckSquare className="w-6 h-6 text-[#12A89D]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#6B7FD1]" />;
    }
  };

  const getServiceBookingUrl = (service: ServiceItem) => {
    const message = `Hola Johanna, deseo agendar el servicio: *${service.title}* (${service.price}).`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="servicios"
      className="relative py-24 bg-gradient-to-b from-[#DCEEFB]/40 via-[#FFFFFF] to-[#C9D4F5]/30 overflow-hidden"
    >
      {/* Botánicos en fondo */}
      <FloralBouquet className="absolute top-12 left-0 w-44 h-44 opacity-40 -z-5" />
      <FloralBouquet className="absolute bottom-16 right-0 w-44 h-44 opacity-40 -z-5" flip />
      <ButterflyGraphic className="absolute top-1/3 right-[8%] opacity-70" size={38} color="purple" />
      <ButterflyGraphic className="absolute bottom-1/4 left-[6%] opacity-60" size={30} color="pink" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Cabecera Principal de Servicios */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#DCEEFB] text-[#6B7FD1] text-xs font-bold uppercase tracking-[0.2em] border border-[#9B8FD9]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#9B8FD9]" />
            <span>Nuestros Dos Nichos de Especialidad</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#3E4A7A]">
            Servicios Terapéuticos &{' '}
            <span className="font-script text-[#9B8FD9] text-4xl sm:text-5xl md:text-6xl font-normal">
              Educativos
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#3E4A7A]/80 font-normal max-w-2xl mx-auto">
            Casa Kinti ofrece dos áreas independientes de acompañamiento con altos estándares de calidad: sanación holística para el alma y desarrollo pedagógico para la niñez.
          </p>

          {/* Filtro / Selector de Nichos */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-[#6B7FD1] text-white shadow-sm'
                  : 'bg-white/80 text-[#3E4A7A] hover:bg-white border border-[#C9D4F5]'
              }`}
            >
              Todos los Servicios (7)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('ancestral')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === 'ancestral'
                  ? 'bg-[#9B8FD9] text-white shadow-sm'
                  : 'bg-white/80 text-[#3E4A7A] hover:bg-white border border-[#C9D4F5]'
              }`}
            >
              <span>🌿 Medicina Ancestral</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('educacion')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === 'educacion'
                  ? 'bg-[#6B7FD1] text-white shadow-sm'
                  : 'bg-white/80 text-[#3E4A7A] hover:bg-white border border-[#C9D4F5]'
              }`}
            >
              <span>📚 Educación Infantil</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            BLOQUE A — Medicina Ancestral y Terapéutica (Púrpura / Azul-Violeta)
           ======================================================== */}
        {(activeTab === 'all' || activeTab === 'ancestral') && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Sub-encabezado de Nicho A */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-[#C9D4F5]/60 via-[#E7F3FC] to-white border border-[#9B8FD9]/40 shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#9B8FD9] text-white flex items-center justify-center shadow-xs shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B7FD1] block">
                    Nicho 1 · Sanación Holística
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#3E4A7A]">
                    Medicina Ancestral & Terapias Energéticas
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#3E4A7A]/80 max-w-sm sm:text-right font-light">
                Limpiezas energéticas, esencias florales andinas, herbolaria sagrada y tarot terapéutico para restaurar tu equilibrio interior.
              </p>
            </div>

            {/* Grid de Servicios Nicho A */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES_ANCESTRAL.map((service) => (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  className="bg-white rounded-3xl p-7 shadow-xs hover:shadow-xl border border-[#9B8FD9]/30 hover:border-[#6B7FD1] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#DCEEFB] flex items-center justify-center border border-[#9B8FD9]/20">
                        {getServiceIcon(service.icon, 'ancestral')}
                      </div>
                      <div className="text-right">
                        {service.promoPrice && (
                          <span className="text-xs text-[#3E4A7A]/60 line-through block">
                            {service.promoPrice}
                          </span>
                        )}
                        <span className="text-2xl font-bold font-serif-display text-[#6B7FD1] block">
                          {service.price}
                        </span>
                        {service.duration && (
                          <span className="text-[11px] text-[#3E4A7A]/70 font-medium">
                            {service.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif-display text-xl font-bold text-[#3E4A7A]">
                          {service.title}
                        </h4>
                        {service.badge && (
                          <span className="bg-[#9B8FD9]/20 text-[#6B7FD1] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#9B8FD9]/30">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[#3E4A7A]/80 mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {service.keyBenefits && (
                      <ul className="space-y-1.5 pt-2 border-t border-[#C9D4F5]/30">
                        {service.keyBenefits.map((kb, idx) => (
                          <li key={idx} className="text-xs text-[#3E4A7A]/85 flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#12A89D] shrink-0" />
                            <span>{kb}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#C9D4F5]/40 flex items-center justify-between">
                    <a
                      href="#contacto"
                      className="text-xs font-bold text-[#3E4A7A] hover:text-[#6B7FD1] transition-colors flex items-center gap-1"
                    >
                      <span>Más información</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={getServiceBookingUrl(service)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#6B7FD1] hover:bg-[#9B8FD9] text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95"
                    >
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      <span>Agendar</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ========================================================
            BLOQUE B — Educación Infantil Bilingüe y Problemas de Aprendizaje (Lila / Rosa)
           ======================================================== */}
        {(activeTab === 'all' || activeTab === 'educacion') && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Sub-encabezado de Nicho B */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-[#F0C6D9]/40 via-[#FFFFFF] to-[#C9D4F5]/50 border border-[#F0C6D9] shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#6B7FD1] text-white flex items-center justify-center shadow-xs shrink-0">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B8FD9] block">
                    Nicho 2 · Acompañamiento Psicopedagógico
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#3E4A7A]">
                    Educación Infantil Bilingüe & Aprendizaje
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#3E4A7A]/80 max-w-sm sm:text-right font-light">
                Diagnósticos psicopedagógicos, estimulación del lenguaje en inglés/español y estrategias adaptadas para el éxito escolar de tu hijo.
              </p>
            </div>

            {/* Grid de Servicios Nicho B */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICES_EDUCACION.map((service) => (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  className="bg-white rounded-3xl p-7 shadow-xs hover:shadow-xl border border-[#F0C6D9]/80 hover:border-[#9B8FD9] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#F0C6D9]/30 flex items-center justify-center border border-[#F0C6D9]">
                        {getServiceIcon(service.icon, 'educacion')}
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold font-serif-display text-[#6B7FD1] block">
                          {service.price}
                        </span>
                        {service.duration && (
                          <span className="text-[11px] text-[#3E4A7A]/70 font-medium">
                            {service.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif-display text-lg font-bold text-[#3E4A7A] leading-snug">
                          {service.title}
                        </h4>
                      </div>
                      {service.badge && (
                        <span className="inline-block mt-1 bg-[#F0C6D9]/40 text-[#6B7FD1] text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {service.badge}
                        </span>
                      )}
                      <p className="text-xs sm:text-sm text-[#3E4A7A]/80 mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {service.keyBenefits && (
                      <ul className="space-y-1.5 pt-2 border-t border-[#F0C6D9]/40">
                        {service.keyBenefits.map((kb, idx) => (
                          <li key={idx} className="text-xs text-[#3E4A7A]/85 flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#12A89D] shrink-0" />
                            <span>{kb}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#F0C6D9]/40 flex items-center justify-between">
                    <a
                      href="#contacto"
                      className="text-xs font-bold text-[#3E4A7A] hover:text-[#6B7FD1] transition-colors flex items-center gap-1"
                    >
                      <span>Detalles</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={getServiceBookingUrl(service)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#6B7FD1] hover:bg-[#9B8FD9] text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95"
                    >
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      <span>Agendar</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ========================================================
            BLOQUE TIPO "QUÉ INCLUYE TU EXPERIENCIA" CON MOCKUP
           ======================================================== */}
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-[#E7F3FC] to-[#DCEEFB] p-8 sm:p-12 shadow-lg border border-[#9B8FD9]/30 overflow-hidden">
          <FloralBouquet className="absolute -bottom-10 -right-10 w-44 h-44 opacity-60" flip />
          <ButterflyGraphic className="absolute top-6 left-8" size={36} color="purple" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Mockup decorativo a un costado */}
            <div className="lg:col-span-5 flex justify-center">
              <FloralPhotoFrame
                badgeText="Kit de Bienestar Casa Kinti"
                className="max-w-[320px] w-full"
              >
                {/* reemplazar con foto real: Mockup de folleto de bienvenida, guía de aromaterapia y bolsa de hierbas medicinales de Casa Kinti */}
                <div className="relative aspect-square w-full bg-[#DCEEFB] overflow-hidden p-6 flex flex-col justify-between text-center">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
                    alt="Experiencia y Kit de Bienestar Casa Kinti"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E4A7A]/70 via-[#3E4A7A]/20 to-transparent" />
                  
                  <div className="relative z-10 text-white mt-auto">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#F5C84C]">
                      Protocolo Exclusivo
                    </span>
                    <h4 className="font-serif-display text-xl font-bold">
                      Acompañamiento Integral
                    </h4>
                  </div>
                </div>
              </FloralPhotoFrame>
            </div>

            {/* Lista de Checks al otro costado */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B7FD1] block mb-1">
                  Atención Personalizada
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#3E4A7A]">
                  Lo que incluye tu experiencia en{' '}
                  <span className="font-script text-[#9B8FD9] text-3xl sm:text-4xl font-normal">
                    Casa Kinti
                  </span>
                </h3>
              </div>

              <div className="space-y-3">
                {INCLUDED_EXPERIENCE_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white/80 p-3.5 rounded-2xl border border-[#C9D4F5]/60 shadow-2xs backdrop-blur-xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#12A89D]/15 text-[#12A89D] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 font-bold" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#3E4A7A] font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contacto"
                  id="experience-cta-btn"
                  className="inline-flex items-center gap-2.5 bg-[#6B7FD1] hover:bg-[#9B8FD9] text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agenda tu diagnóstico inicial</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            BLOQUE "HISTORIAS DE TRANSFORMACIÓN" (TESTIMONIOS)
           ======================================================== */}
        <div className="space-y-12 pt-6">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9B8FD9]">
              TÚ PODRÍAS ESTAR AQUÍ
            </span>
            <h3 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#3E4A7A]">
              Historias de{' '}
              <span className="font-script text-[#9B8FD9] text-4xl sm:text-5xl font-normal">
                Transformación
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-[#3E4A7A]/75">
              Experiencias reales de quienes han confiado su bienestar y el de sus familias en Casa Kinti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                id={`testimonial-card-${t.id}`}
                className="relative bg-white rounded-3xl p-7 shadow-xs hover:shadow-xl border border-[#C9D4F5] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* 5 Estrellas Doradas */}
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#F5C84C]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#3E4A7A]/90 italic leading-relaxed">
                    "{t.text}"
                  </p>
                </div>

                {/* Avatar y Nombre */}
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#C9D4F5]/40">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#9B8FD9]/40 shadow-xs"
                  />
                  <div>
                    <h5 className="text-sm font-bold text-[#3E4A7A]">
                      {t.name}
                    </h5>
                    <span className="text-[11px] text-[#6B7FD1] font-medium block">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
