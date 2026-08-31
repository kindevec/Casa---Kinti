import React from 'react';
import { motion } from 'framer-motion';
import { useNicheMode } from '../context/NicheContext';
import { SERVICES_ANCESTRAL, SERVICES_EDUCACION, INCLUDED_EXPERIENCE_ITEMS, TESTIMONIALS, WHATSAPP_PHONE } from '../data';
import { ServiceItem } from '../types';
import { ButterflyGraphic, FloralBouquet, FloralPhotoFrame, WhatsAppOfficialIcon, AgendarCalendarIcon } from './FloralDecorations';
import { CardCurtainReveal, CardCurtainSplitCover } from './ui/card-curtain-reveal';
import { AnimatedConstructPhoto } from './AnimatedConstructPhoto';
import { FlowingExperienceList } from './FlowingExperienceList';
import { ScrollReelTestimonials } from './ui/scroll-reel-testimonials';
import { AttentionSection } from './AttentionSection';
import { Sparkles, Flower, Leaf, Eye, Brain, Languages, CheckSquare, Calendar, Check, Star, ArrowRight, BookOpen, GraduationCap, Award, HeartHandshake, TrendingUp, Puzzle } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { mode } = useNicheMode();

  const getServiceIcon = (iconName: string, category: 'ancestral' | 'educacion') => {
    const isAncestral = category === 'ancestral';
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className={`w-6 h-6 ${isAncestral ? 'text-[#043651]' : 'text-[#2B7294]'}`} />;
      case 'Flower':
        return <Flower className={`w-6 h-6 ${isAncestral ? 'text-[#2B7294]' : 'text-[#CEAB67]'}`} />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-[#2B7294]" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-[#043651]" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-[#2B7294]" />;
      case 'Languages':
        return <Languages className="w-6 h-6 text-[#043651]" />;
      case 'CheckSquare':
        return <CheckSquare className="w-6 h-6 text-[#2B7294]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#043651]" />;
    }
  };

  const getServiceBookingUrl = (service: ServiceItem) => {
    const message = `Hola Johanna, deseo agendar el servicio: *${service.title}* (${service.price}).`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  };

  const currentServices = mode === 'educacion' ? SERVICES_EDUCACION : SERVICES_ANCESTRAL;

  // Reordenamiento de testimonios según el nicho activo
  const sortedTestimonials = [...TESTIMONIALS].sort((a, b) => {
    if (mode === 'educacion') {
      if (a.area === 'educacion') return -1;
      if (b.area === 'educacion') return 1;
    } else {
      if (a.area === 'ancestral') return -1;
      if (b.area === 'ancestral') return 1;
    }
    return 0;
  });
  return (
    <section
      id="servicios"
      data-mode={mode}
      className="relative pt-14 sm:pt-20 md:pt-24 pb-14 sm:pb-20 bg-[#FAFCFD] text-[#133238] overflow-hidden transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-18">
        
        {/* Cabecera Principal de Servicios (Estilo Fondo Blanco & Oro) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative mb-12 sm:mb-16 md:mb-20">
          <div key={mode + '-services-header'} className="space-y-4 relative z-10 animate-in fade-in duration-300">
            <span className="text-[11px] sm:text-xs font-serif tracking-[0.24em] text-[#B88E44] uppercase font-bold drop-shadow-xs block">
              {mode === 'educacion' ? '✦ PROGRAMAS & VALORACIONES ✦' : '✦ TERAPIAS INTEGRALES & SANACIÓN ✦'}
            </span>

            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#133238] font-bold leading-tight drop-shadow-xs">
              {mode === 'educacion' ? (
                <>
                  Servicios &{' '}
                  <span className="italic bg-gradient-to-r from-[#D4A346] via-[#B88E44] to-[#8C6420] bg-clip-text text-transparent font-normal block sm:inline">
                    Educación
                  </span>
                </>
              ) : (
                <>
                  Servicios &{' '}
                  <span className="italic bg-gradient-to-r from-[#D4A346] via-[#B88E44] to-[#8C6420] bg-clip-text text-transparent font-normal block sm:inline">
                    Terapias
                  </span>
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#2C484E] font-light leading-relaxed max-w-3xl mx-auto">
              {mode === 'educacion'
                ? 'Diagnósticos psicopedagógicos, estimulación bilingüe temprana y programas personalizados dirigidos por Máster en Problemas de Aprendizaje.'
                : 'Limpiezas energéticas, esencias florales de Bach, herbolaria sagrada y tarot terapéutico para restaurar tu equilibrio integral.'}
            </p>
          </div>
        </div>

        {/* Grid de Servicios Directo con Animación Card Curtain Reveal */}
        <div
          key={mode + '-grid'}
          className={`grid grid-cols-1 ${
            mode === 'educacion' ? 'md:grid-cols-3' : 'md:grid-cols-2'
          } gap-8 animate-in fade-in duration-350`}
        >
          {currentServices.map((service, idx) => (
            <div key={service.id} className="relative overflow-visible">
              <CardCurtainReveal
                id={`service-card-${service.id}`}
                className="relative bg-white rounded-2xl min-h-[380px] sm:min-h-[400px] shadow-[0_8px_30px_rgba(212,178,111,0.25)] hover:shadow-[0_12px_40px_rgba(212,178,111,0.45)] border-2 border-[#FFD700] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* ========================================================
                    1. CORTINA FRONTAL QUE SE ABRE EN 2 HOJAS (IZQ Y DER)
                   ======================================================== */}
                <CardCurtainSplitCover
                  image={service.image || '/tarot-hero.png'}
                  title={service.title}
                  price={service.price}
                  promoPrice={service.promoPrice}
                  badge={service.badge}
                  duration={service.duration}
                  category={service.category === 'educacion' ? 'Área Psicopedagógica' : 'Medicina Integrativa'}
                  icon={getServiceIcon(service.icon, service.category)}
                />

                {/* ========================================================
                    2. CONTENIDO INTERIOR REVELADO
                   ======================================================== */}
                <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between h-full w-full bg-gradient-to-b from-white via-[#F8FBFC] to-[#EFF6F8] text-[#133238]">
                  
                  {/* Categoría, Insignias y Duración centradas */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 border-b border-[#133238]/10 pb-2.5 shrink-0 w-full">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#133238] bg-[#FFF8D6] px-3 py-1 rounded-full border border-[#FFD700] shadow-xs">
                      {service.category === 'educacion' ? 'Área Psicopedagógica' : 'Medicina Integrativa'}
                    </span>

                    {service.badge && (
                      <span className="bg-[#FFD700] text-[#0A1C24] text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
                        {service.badge}
                      </span>
                    )}
                    {service.duration && (
                      <span className="text-[10px] text-[#133238] font-medium bg-white px-2.5 py-0.5 rounded-full border border-[#133238]/15">
                        {service.duration}
                      </span>
                    )}
                  </div>

                  {/* Contenido: Descripción y Beneficios */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center my-auto py-2.5 space-y-3 w-full">
                    <p className="text-xs sm:text-sm text-[#2C484E] leading-relaxed font-light max-w-xs mx-auto">
                      {service.description}
                    </p>

                    {service.keyBenefits && (
                      <ul className="flex flex-col items-center justify-center space-y-1.5 pt-2.5 border-t border-[#133238]/10 w-full max-w-xs mx-auto">
                        {service.keyBenefits.map((kb, kIdx) => (
                          <li key={kIdx} className="text-xs sm:text-sm text-[#133238] font-medium flex items-center justify-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#D4A346] shrink-0" />
                            <span>{kb}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Botón de Contactar en Oro 24K */}
                  <div className="pt-2.5 border-t border-[#133238]/10 flex items-center justify-center shrink-0 w-full">
                    <a
                      href={getServiceBookingUrl(service)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#ECD394] hover:to-[#DEC080] text-[#0A1C24] text-xs sm:text-sm font-serif font-bold uppercase tracking-wider py-3.5 px-4 rounded-sm shadow-md hover:shadow-[0_6px_22px_rgba(212,178,111,0.5)] transition-all hover:scale-[1.02] active:scale-97 group/btn cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                      <WhatsAppOfficialIcon className="w-5 h-5 text-[#0A1C24] shrink-0" />
                      <span>Contactar por WhatsApp</span>
                    </a>
                  </div>

                </div>

              </CardCurtainReveal>
            </div>
          ))}
        </div>

        {/* ========================================================
            BLOQUE FINAL: DIFERENCIADO SEGÚN EL NICHO
           ======================================================== */}
        <div className="space-y-12 pt-6">
          
          {mode === 'educacion' ? (
            /* BLOQUE EXCLUSIVO EDUCACIÓN: Métodos de Enseñanza y Aprendizaje */
            <>
              <div className="text-center max-w-3xl mx-auto space-y-3 animate-in fade-in duration-300">
                <span className="text-xs font-serif font-bold uppercase tracking-[0.25em] text-[#B88E44]">
                  CÓMO ENSEÑAMOS Y ACOMPAÑAMOS
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#133238] leading-tight">
                  Métodos de{' '}
                  <span className="italic bg-gradient-to-r from-[#D4A346] via-[#B88E44] to-[#8C6420] bg-clip-text text-transparent font-normal">
                    Enseñanza
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-[#2C484E] font-light max-w-2xl mx-auto leading-relaxed">
                  Estrategias psicopedagógicas y neuroeducativas adaptadas al ritmo, estilo cognitivo y potencial único de cada estudiante.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 pt-4">
                
                {/* Método 1: Multisensorial VAK */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 0.6 },
                  }}
                  whileHover={{ scale: 1.03, y: -14, transition: { duration: 0.3 } }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border-2 border-[#FFD700] shadow-[0_8px_25px_rgba(212,178,111,0.3)] hover:shadow-[0_12px_35px_rgba(212,178,111,0.55)] transition-all duration-300"
                >
                  <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none z-30" />

                  {/* Foto superior */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-[#F0F7F6]">
                    <img
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
                      alt="Aprendizaje Multisensorial VAK"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                  </div>

                  {/* Bloque inferior */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white border-t border-[#FFD700]/30 text-[#133238]">
                    <div className="space-y-2.5 mb-5">
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#133238] leading-snug text-center">
                        Aprendizaje Multisensorial
                      </h4>
                      <p className="text-xs text-[#2C484E] font-light leading-relaxed text-justify">
                        Conexión de las vías visual, auditiva y kinestésica para fijar conceptos en lectura y matemáticas sin memorización forzada.
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Johanna, me gustaría conocer más sobre el método: *Aprendizaje Multisensorial (VAK)*.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-wider bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#ECD394] hover:to-[#DEC080] text-[#0A1C24] px-5 py-3 rounded-sm shadow-xs hover:shadow-[0_4px_16px_rgba(212,178,111,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 group/btn self-start"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                      <span className="relative z-10">Consultar método</span>
                      <ArrowRight className="relative z-10 w-3.5 h-3.5 text-[#0A1C24] group-hover/btn:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </motion.div>

                {/* Método 2: Neuroeducación y TDAH */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{ y: [-5, 3, -5] }}
                  transition={{
                    y: { duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
                    opacity: { duration: 0.6, delay: 0.1 },
                  }}
                  whileHover={{ scale: 1.03, y: -14, transition: { duration: 0.3 } }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border-2 border-[#FFD700] shadow-[0_8px_25px_rgba(212,178,111,0.3)] hover:shadow-[0_12px_35px_rgba(212,178,111,0.55)] transition-all duration-300"
                >
                  <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none z-30" />

                  {/* Foto superior */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-[#F0F7F6]">
                    <img
                      src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80"
                      alt="Funciones Ejecutivas y TDAH"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                  </div>

                  {/* Bloque inferior */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white border-t border-[#FFD700]/30 text-[#133238]">
                    <div className="space-y-2.5 mb-5">
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#133238] leading-snug text-center">
                        Funciones Ejecutivas & TDAH
                      </h4>
                      <p className="text-xs text-[#2C484E] font-light leading-relaxed text-justify">
                        Entrenamiento de la atención sostenida, autorregulación emocional y memoria de trabajo para reducir el estrés en tareas.
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Johanna, me gustaría conocer más sobre el método: *Desarrollo de Funciones Ejecutivas*.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-wider bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#ECD394] hover:to-[#DEC080] text-[#0A1C24] px-5 py-3 rounded-sm shadow-xs hover:shadow-[0_4px_16px_rgba(212,178,111,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 group/btn self-start"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                      <span className="relative z-10">Consultar método</span>
                      <ArrowRight className="relative z-10 w-3.5 h-3.5 text-[#0A1C24] group-hover/btn:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </motion.div>

                {/* Método 3: Fonética Sintética e Inmersión Bilingüe */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
                    opacity: { duration: 0.6, delay: 0.2 },
                  }}
                  whileHover={{ scale: 1.03, y: -14, transition: { duration: 0.3 } }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border-2 border-[#FFD700] shadow-[0_8px_25px_rgba(212,178,111,0.3)] hover:shadow-[0_12px_35px_rgba(212,178,111,0.55)] transition-all duration-300"
                >
                  <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none z-30" />

                  {/* Foto superior */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-[#F0F7F6]">
                    <img
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80"
                      alt="Fonética Sintética y Bilingüismo"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                  </div>

                  {/* Bloque inferior */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white border-t border-[#FFD700]/30 text-[#133238]">
                    <div className="space-y-2.5 mb-5">
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#133238] leading-snug text-center">
                        Jolly Phonics & Bilingüismo
                      </h4>
                      <p className="text-xs text-[#2C484E] font-light leading-relaxed text-justify">
                        Adquisición natural del inglés mediante historias fonéticas, canciones y juegos para pronunciar y leer con soltura sin miedo.
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Johanna, me gustaría conocer más sobre el método: *Jolly Phonics e Inmersión Bilingüe*.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-wider bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#ECD394] hover:to-[#DEC080] text-[#0A1C24] px-5 py-3 rounded-sm shadow-xs hover:shadow-[0_4px_16px_rgba(212,178,111,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 group/btn self-start"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                      <span className="relative z-10">Consultar método</span>
                      <ArrowRight className="relative z-10 w-3.5 h-3.5 text-[#0A1C24] group-hover/btn:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </motion.div>

                {/* Método 4: Acompañamiento Familia y Escuela */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{ y: [-4, 4, -4] }}
                  transition={{
                    y: { duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                    opacity: { duration: 0.6, delay: 0.3 },
                  }}
                  whileHover={{ scale: 1.03, y: -14, transition: { duration: 0.3 } }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border-2 border-[#FFD700] shadow-[0_8px_25px_rgba(212,178,111,0.3)] hover:shadow-[0_12px_35px_rgba(212,178,111,0.55)] transition-all duration-300"
                >
                  <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none z-30" />

                  {/* Foto superior */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-[#F0F7F6]">
                    <img
                      src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=600&q=80"
                      alt="Acompañamiento Familia y Escuela"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                  </div>

                  {/* Bloque inferior */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white border-t border-[#FFD700]/30 text-[#133238]">
                    <div className="space-y-2.5 mb-5">
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#133238] leading-snug text-center">
                        Vínculo Familia & Escuela
                      </h4>
                      <p className="text-xs text-[#2C484E] font-light leading-relaxed text-justify">
                        Coordinación directa con docentes y orientación a los padres para construir un entorno de motivación y seguridad.
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Johanna, me gustaría conocer más sobre el método: *Acompañamiento Familia y Escuela*.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-wider bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#ECD394] hover:to-[#DEC080] text-[#0A1C24] px-5 py-3 rounded-sm shadow-xs hover:shadow-[0_4px_16px_rgba(212,178,111,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 group/btn self-start"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                      <span className="relative z-10">Consultar método</span>
                      <ArrowRight className="relative z-10 w-3.5 h-3.5 text-[#0A1C24] group-hover/btn:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </motion.div>

              </div>
            </>
          ) : (
            /* BLOQUE HOLÍSTICA: Historias de Transformación con Animación ScrollReelTestimonials */
            <>
              <div className="text-center max-w-2xl mx-auto space-y-3 animate-in fade-in duration-300">
                <span className="text-xs font-serif font-bold uppercase tracking-[0.25em] text-[#B88E44]">
                  ✦ VOCES DE SANACIÓN ✦
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#133238] leading-tight">
                  Historias de{' '}
                  <span className="italic bg-gradient-to-r from-[#D4A346] via-[#B88E44] to-[#8C6420] bg-clip-text text-transparent font-normal">
                    Transformación
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-[#2C484E] font-light leading-relaxed">
                  Experiencias reales de quienes han confiado su bienestar y el de sus familias en Casa Kinti.
                </p>
              </div>

              <div className="w-full flex justify-center">
                <ScrollReelTestimonials
                  testimonials={TESTIMONIALS.filter((t) => t.area !== 'educacion').map((t) => ({
                    quote: t.text,
                    author: t.name,
                    role: t.role,
                    image: t.avatar,
                    alt: `Retrato de ${t.name}`,
                  }))}
                />
              </div>
            </>
          )}

        </div>

      </div>

      {/* ATENCIÓN PERSONALIZADA — visible en ambos nichos, justo después de servicios */}
      <AttentionSection />
    </section>
  );
};
