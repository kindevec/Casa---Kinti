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
import { Sparkles, Flower, Leaf, Eye, Brain, Languages, CheckSquare, Calendar, Check, Star, ArrowRight, BookOpen, GraduationCap, Award, HeartHandshake, TrendingUp, Puzzle } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { mode } = useNicheMode();

  const getServiceIcon = (iconName: string, category: 'ancestral' | 'educacion') => {
    const isAncestral = category === 'ancestral';
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className={`w-6 h-6 ${isAncestral ? 'text-[#6B7FD1]' : 'text-[#9B8FD9]'}`} />;
      case 'Flower':
        return <Flower className={`w-6 h-6 ${isAncestral ? 'text-[#9B8FD9]' : 'text-[#F0C6D9]'}`} />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-[#12A89D]" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-[#6B7FD1]" />;
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
      className="relative pt-3 sm:pt-4 pb-20 sm:pb-24 bg-gradient-to-b from-[#E8F3FD] via-[#F4F9FE] to-[#E8F3FD] overflow-hidden transition-all duration-500"
    >
      {/* Botánicos en fondo */}
      <FloralBouquet className="absolute top-12 left-0 w-44 h-44 opacity-40 -z-5" />
      <FloralBouquet className="absolute bottom-16 right-0 w-44 h-44 opacity-40 -z-5" flip />
      <ButterflyGraphic className="absolute top-1/3 right-[8%] opacity-70" size={38} color="purple" />
      <ButterflyGraphic className="absolute bottom-1/4 left-[6%] opacity-60" size={30} color="pink" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Cabecera Principal de Servicios (Diseño unificado) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative mb-16 sm:mb-20">
          <FloralBouquet className="absolute -top-6 -left-6 w-32 h-32 opacity-60 pointer-events-none hidden sm:block" />
          <FloralBouquet className="absolute -bottom-6 -right-6 w-32 h-32 opacity-60 pointer-events-none hidden sm:block" flip />
          <ButterflyGraphic className="absolute top-4 right-6 sm:right-10" size={36} color="purple" />
          <ButterflyGraphic className="absolute bottom-2 left-6 sm:left-10" size={28} color="pink" />

          <div key={mode + '-services-header'} className="space-y-4 relative z-10 animate-in fade-in duration-300">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B7FD1] block">
              {mode === 'educacion'
                ? 'ATENCIÓN PERSONALIZADA & EXCELENCIA'
                : 'SANACIÓN & BIENESTAR INTEGRAL'}
            </span>

            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#3E4A7A]">
              {mode === 'educacion' ? (
                <>
                  Servicios &{' '}
                  <span className="font-script text-[#9B8FD9] text-5xl sm:text-6xl font-normal block sm:inline">
                    Educación
                  </span>
                </>
              ) : (
                <>
                  Servicios &{' '}
                  <span className="font-script text-[#9B8FD9] text-5xl sm:text-6xl font-normal block sm:inline">
                    Terapias
                  </span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-black font-normal leading-relaxed max-w-2xl mx-auto">
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
              {/* Mariposa con movimiento continuo flotando POR FUERA del contenedor */}
              <motion.div
                className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 z-40 pointer-events-none"
                animate={{
                  x: [0, -4, 4, -3, 0],
                  y: [0, -7, 2, -5, 0],
                  rotate: [6, -8, 8, -6, 6],
                  scale: [0.95, 1.08, 0.96, 1.05, 0.95],
                }}
                transition={{
                  duration: 5.8 + (idx % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ButterflyGraphic
                  size={30}
                  color={idx % 2 === 0 ? 'purple' : 'blue'}
                />
              </motion.div>

              <CardCurtainReveal
                id={`service-card-${service.id}`}
                className="relative bg-white rounded-3xl min-h-[380px] sm:min-h-[400px] shadow-sm hover:shadow-2xl border border-[#C9D4F5] hover:border-[#9B8FD9] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* ========================================================
                    1. CORTINA FRONTAL QUE SE ABRE EN 2 HOJAS (IZQ Y DER)
                    Muestra imagen completa sin recortar, título y precio
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
                    2. CONTENIDO INTERIOR REVELADO (ADAPTADO AL CONTENEDOR)
                   ======================================================== */}
                <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between h-full w-full bg-gradient-to-br from-[#FFFFFF] via-[#F3F7FE] to-[#DCEEFB] text-[#3E4A7A]">
                  
                  {/* Categoría, Insignias y Duración centradas */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 border-b border-[#C9D4F5]/60 pb-2.5 shrink-0 w-full">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7FD1] bg-[#DCEEFB] px-3 py-1 rounded-full border border-[#C9D4F5]/80 shadow-xs">
                      {service.category === 'educacion' ? 'Área Psicopedagógica' : 'Medicina Integrativa'}
                    </span>

                    {service.badge && (
                      <span className="bg-[#7F93D8] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                        {service.badge}
                      </span>
                    )}
                    {service.duration && (
                      <span className="text-[10px] text-black font-medium bg-white px-2.5 py-0.5 rounded-full border border-[#C9D4F5]/70">
                        {service.duration}
                      </span>
                    )}
                  </div>

                  {/* Contenido: Descripción y Beneficios adaptados al alto del contenedor */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center my-auto py-2.5 space-y-3 w-full">
                    <p className="text-xs sm:text-sm text-black leading-relaxed font-normal max-w-xs mx-auto">
                      {service.description}
                    </p>

                    {service.keyBenefits && (
                      <ul className="flex flex-col items-center justify-center space-y-1.5 pt-2.5 border-t border-[#C9D4F5]/60 w-full max-w-xs mx-auto">
                        {service.keyBenefits.map((kb, kIdx) => (
                          <li key={kIdx} className="text-xs sm:text-sm text-black flex items-center justify-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#12A89D] shrink-0" />
                            <span>{kb}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Botón de Contactar con Barra Verde y Logo Oficial de WhatsApp */}
                  <div className="pt-2.5 border-t border-[#C9D4F5]/60 flex items-center justify-center shrink-0 w-full">
                    <a
                      href={getServiceBookingUrl(service)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-black text-xs sm:text-sm font-bold py-3 px-4 rounded-2xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95 border border-[#25D366]/30"
                    >
                      <WhatsAppOfficialIcon className="w-5 h-5 text-black shrink-0" />
                      <span>Contactar por WhatsApp</span>
                    </a>
                  </div>

                </div>

              </CardCurtainReveal>
            </div>
          ))}
        </div>

        {/* ========================================================
            BLOQUE TIPO "QUÉ INCLUYE TU EXPERIENCIA" CON MOCKUP
            (Sin contenedor encajonado, integrado al fondo de la sección)
           ======================================================== */}
        <div className="relative pt-12 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
            
            {/* Fotografía: Comienza en 'Lo que...' y su altura vertical llega hasta el final de la barra de 'Acompañamiento continuo...' */}
            <div className="lg:col-span-5 flex flex-col justify-start items-center lg:items-start w-full lg:pt-6">
              <AnimatedConstructPhoto
                aspectRatio="landscape"
                imageSrc={
                  mode === 'educacion'
                    ? [
                        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
                        'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80',
                        'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
                        'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
                      ]
                    : [
                        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
                        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
                        'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80',
                        'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
                      ]
                }
                alt="Experiencia Casa Kinti"
                className="w-full max-w-[480px] drop-shadow-xl"
              />
            </div>

            {/* Lista de Checks (Empieza en 'Lo que...' y termina en la barra 'Acompañamiento...') + Botón centrado en su lugar */}
            <div className="lg:col-span-7 space-y-4">
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

              <FlowingExperienceList items={INCLUDED_EXPERIENCE_ITEMS} />

              {/* Botón Centrado de Agendar en su lugar (dentro de esta columna) */}
              <div className="pt-3 flex justify-center items-center w-full">
                <a
                  href="#contacto"
                  id="experience-cta-btn"
                  className="relative overflow-hidden inline-flex items-center gap-2.5 bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] hover:bg-gradient-to-tr hover:from-[#6B7FD1] hover:via-[#8E82DA] hover:to-[#E8A2C2] text-black hover:text-white text-sm font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-[0_8px_25px_rgba(107,127,209,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <AgendarCalendarIcon className="relative z-10 w-4.5 h-4.5 text-[#6B7FD1] group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
                  <span className="relative z-10">Agenda tu diagnóstico inicial</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            BLOQUE FINAL: DIFERENCIADO SEGÚN EL NICHO
            - Modo Educación: Pilares de Impacto Psicopedagógico & Logros
            - Modo Holística: Historias de Transformación (Testimonios)
           ======================================================== */}
        <div className="space-y-10 pt-4">
          
          {mode === 'educacion' ? (
            /* BLOQUE EXCLUSIVO EDUCACIÓN: Métodos de Enseñanza y Aprendizaje (Diseño Curvo Asimétrico) */
            <>
              <div className="text-center max-w-3xl mx-auto space-y-2 animate-in fade-in duration-300">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B7FD1]">
                  CÓMO ENSEÑAMOS Y ACOMPAÑAMOS
                </span>
                <h3 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#3E4A7A]">
                  Métodos de{' '}
                  <span className="font-script text-[#9B8FD9] text-4xl sm:text-5xl font-normal">
                    Enseñanza
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-black max-w-2xl mx-auto leading-relaxed">
                  Estrategias psicopedagógicas y neuroeducativas adaptadas al ritmo, estilo cognitivo y potencial único de cada estudiante.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 pt-4">
                
                {/* Método 1: Multisensorial VAK - Contorno Azul Lavanda (#6B7FD1) */}
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
                  className="group relative flex flex-col overflow-hidden rounded-tl-[3.5rem] sm:rounded-tl-[4.5rem] rounded-br-[3.5rem] sm:rounded-br-[4.5rem] bg-white border-2 border-[#6B7FD1]/40 hover:border-[#6B7FD1] shadow-[0_8px_25px_-5px_rgba(107,127,209,0.3)] hover:shadow-[0_18px_40px_0px_rgba(107,127,209,0.55)] transition-all duration-300 hover:ring-4 hover:ring-[#6B7FD1]/20"
                >
                  {/* Destello de luz diagonal al pasar el mouse */}
                  <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none z-30" />

                  {/* Foto superior con zoom animado */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-[#DCEEFB]">
                    <img
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
                      alt="Aprendizaje Multisensorial VAK"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#DCEEFB]/40 to-transparent" />
                  </div>

                  {/* Bloque inferior Cielo Pastel */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-gradient-to-b from-[#EBF3FC] to-[#D8E8FA] border-t-2 border-[#6B7FD1]/30">
                    <div className="space-y-2.5 mb-5">
                      <h4 className="font-serif-display text-xl sm:text-2xl font-bold text-[#3E4A7A] leading-snug text-center">
                        Aprendizaje Multisensorial
                      </h4>
                      <p className="text-xs text-black leading-relaxed text-justify">
                        Conexión de las vías visual, auditiva y kinestésica (tacto y movimiento) para fijar conceptos en lectura y matemáticas sin memorización forzada.
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Johanna, me gustaría conocer más sobre el método: *Aprendizaje Multisensorial (VAK)*.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden inline-flex items-center gap-2 text-xs font-bold bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] hover:bg-gradient-to-tr hover:from-[#6B7FD1] hover:via-[#8E82DA] hover:to-[#E8A2C2] text-black hover:text-white px-4 py-2 rounded-full shadow-xs hover:shadow-[0_4px_14px_rgba(107,127,209,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 group/btn self-start"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                      <span className="relative z-10">Consultar método</span>
                      <ArrowRight className="relative z-10 w-3.5 h-3.5 text-[#6B7FD1] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </motion.div>

                {/* Método 2: Neuroeducación y TDAH - Contorno Púrpura Lavanda (#9B8FD9) */}
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
                  className="group relative flex flex-col overflow-hidden rounded-tl-[3.5rem] sm:rounded-tl-[4.5rem] rounded-br-[3.5rem] sm:rounded-br-[4.5rem] bg-white border-2 border-[#9B8FD9]/50 hover:border-[#9B8FD9] shadow-[0_8px_25px_-5px_rgba(155,143,217,0.35)] hover:shadow-[0_18px_40px_0px_rgba(155,143,217,0.6)] transition-all duration-300 hover:ring-4 hover:ring-[#9B8FD9]/20"
                >
                  {/* Destello de luz diagonal al pasar el mouse */}
                  <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none z-30" />

                  {/* Foto superior con zoom animado */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-[#E8E1FB]">
                    <img
                      src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80"
                      alt="Funciones Ejecutivas y TDAH"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#E8E1FB]/40 to-transparent" />
                  </div>

                  {/* Bloque inferior Lavanda Pastel */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-gradient-to-b from-[#F2EDFD] to-[#E3D9FB] border-t-2 border-[#9B8FD9]/35">
                    <div className="space-y-2.5 mb-5">
                      <h4 className="font-serif-display text-xl sm:text-2xl font-bold text-[#3E4A7A] leading-snug text-center">
                        Funciones Ejecutivas & TDAH
                      </h4>
                      <p className="text-xs text-black leading-relaxed text-justify">
                        Entrenamiento de la atención sostenida, autorregulación emocional y memoria de trabajo para superar bloqueos y reducir el estrés en tareas.
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Johanna, me gustaría conocer más sobre el método: *Desarrollo de Funciones Ejecutivas*.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden inline-flex items-center gap-2 text-xs font-bold bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] hover:bg-gradient-to-tr hover:from-[#6B7FD1] hover:via-[#8E82DA] hover:to-[#E8A2C2] text-black hover:text-white px-4 py-2 rounded-full shadow-xs hover:shadow-[0_4px_14px_rgba(107,127,209,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 group/btn self-start"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                      <span className="relative z-10">Consultar método</span>
                      <ArrowRight className="relative z-10 w-3.5 h-3.5 text-[#6B7FD1] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </motion.div>

                {/* Método 3: Fonética Sintética e Inmersión Bilingüe - Contorno Rosa Floral (#F0C6D9 / #E8A2C2) */}
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
                  className="group relative flex flex-col overflow-hidden rounded-tl-[3.5rem] sm:rounded-tl-[4.5rem] rounded-br-[3.5rem] sm:rounded-br-[4.5rem] bg-white border-2 border-[#F0C6D9] hover:border-[#E8A2C2] shadow-[0_8px_25px_-5px_rgba(240,198,217,0.4)] hover:shadow-[0_18px_40px_0px_rgba(232,162,194,0.6)] transition-all duration-300 hover:ring-4 hover:ring-[#F0C6D9]/30"
                >
                  {/* Destello de luz diagonal al pasar el mouse */}
                  <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none z-30" />

                  {/* Foto superior con zoom animado */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-[#FCE8F2]">
                    <img
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80"
                      alt="Fonética Sintética y Bilingüismo"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FCE8F2]/40 to-transparent" />
                  </div>

                  {/* Bloque inferior Rosa Floral Pastel */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-gradient-to-b from-[#FCEDF4] to-[#F7D6E7] border-t-2 border-[#F0C6D9]">
                    <div className="space-y-2.5 mb-5">
                      <h4 className="font-serif-display text-xl sm:text-2xl font-bold text-[#3E4A7A] leading-snug text-center">
                        Jolly Phonics & Bilingüismo
                      </h4>
                      <p className="text-xs text-black leading-relaxed text-justify">
                        Adquisición natural del inglés mediante historias fonéticas, canciones y juegos para pronunciar, leer y conversar con soltura sin miedo al error.
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Johanna, me gustaría conocer más sobre el método: *Jolly Phonics e Inmersión Bilingüe*.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden inline-flex items-center gap-2 text-xs font-bold bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] hover:bg-gradient-to-tr hover:from-[#6B7FD1] hover:via-[#8E82DA] hover:to-[#E8A2C2] text-black hover:text-white px-4 py-2 rounded-full shadow-xs hover:shadow-[0_4px_14px_rgba(107,127,209,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 group/btn self-start"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                      <span className="relative z-10">Consultar método</span>
                      <ArrowRight className="relative z-10 w-3.5 h-3.5 text-[#6B7FD1] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </motion.div>

                {/* Método 4: Acompañamiento Familia y Escuela - Contorno Azul Periwinkle (#6B7FD1 / #C9D4F5) */}
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
                  className="group relative flex flex-col overflow-hidden rounded-tl-[3.5rem] sm:rounded-tl-[4.5rem] rounded-br-[3.5rem] sm:rounded-br-[4.5rem] bg-white border-2 border-[#6B7FD1]/40 hover:border-[#6B7FD1] shadow-[0_8px_25px_-5px_rgba(107,127,209,0.3)] hover:shadow-[0_18px_40px_0px_rgba(107,127,209,0.55)] transition-all duration-300 hover:ring-4 hover:ring-[#6B7FD1]/20"
                >
                  {/* Destello de luz diagonal al pasar el mouse */}
                  <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none z-30" />

                  {/* Foto superior con zoom animado */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-[#DCEEFB]">
                    <img
                      src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=600&q=80"
                      alt="Acompañamiento Familia y Escuela"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#DCEEFB]/40 to-transparent" />
                  </div>

                  {/* Bloque inferior Azul Nube Pastel */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-gradient-to-b from-[#EEF3FD] to-[#D9E4FA] border-t-2 border-[#6B7FD1]/30">
                    <div className="space-y-2.5 mb-5">
                      <h4 className="font-serif-display text-xl sm:text-2xl font-bold text-[#3E4A7A] leading-snug text-center">
                        Vínculo Familia & Escuela
                      </h4>
                      <p className="text-xs text-black leading-relaxed text-justify">
                        Coordinación directa con docentes y orientación personalizada a los padres para construir un entorno de confianza, motivación y seguridad emocional.
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Johanna, me gustaría conocer más sobre el método: *Acompañamiento Familia y Escuela*.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden inline-flex items-center gap-2 text-xs font-bold bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] hover:bg-gradient-to-tr hover:from-[#6B7FD1] hover:via-[#8E82DA] hover:to-[#E8A2C2] text-black hover:text-white px-4 py-2 rounded-full shadow-xs hover:shadow-[0_4px_14px_rgba(107,127,209,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 group/btn self-start"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                      <span className="relative z-10">Consultar método</span>
                      <ArrowRight className="relative z-10 w-3.5 h-3.5 text-[#6B7FD1] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </motion.div>

              </div>
            </>
          ) : (
            /* BLOQUE HOLÍSTICA: Historias de Transformación con Animación ScrollReelTestimonials */
            <>
              <div className="text-center max-w-2xl mx-auto space-y-2 animate-in fade-in duration-300">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9B8FD9]">
                  TÚ PODRÍAS ESTAR AQUÍ
                </span>
                <h3 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#3E4A7A]">
                  Historias de{' '}
                  <span className="font-script text-[#9B8FD9] text-4xl sm:text-5xl font-normal">
                    Transformación
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-black">
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
    </section>
  );
};
