import React from 'react';
import { motion } from 'motion/react';
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
import { CelestialTitleGraphic } from './CelestialTitleGraphic';

export const ServicesSection: React.FC = () => {
  const { mode, targetSection } = useNicheMode();

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
        return <Languages className={`w-6 h-6 ${isAncestral ? 'text-[#043651]' : 'text-[#2B7294]'}`} />;
      case 'CheckSquare':
        return <CheckSquare className="w-6 h-6 text-[#2B7294]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#2B7294]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#CEAB67]" />;
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
        {/* Cabecera con Título Blanco Brillante y Destellos */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative mb-12 sm:mb-16 md:mb-20">
          <motion.div
            key={`${mode}-services-header-${targetSection?.startsWith('servicios') ? targetSection : 'default'}`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="space-y-4 relative z-10"
          >
            {/* Separador celestial centrado arriba del título solo en móviles */}
            <div className="flex md:hidden justify-center items-center mb-3 w-full">
              <CelestialTitleGraphic side="full" className="w-52 xs:w-64 h-auto" />
            </div>

            <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 flex-wrap md:flex-nowrap w-full">
              <CelestialTitleGraphic side="left" className="hidden md:block w-14 xs:w-20 sm:w-28 md:w-36 lg:w-48 xl:w-56 h-auto shrink-0" />
              <h2 className="font-serif text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#052C34] font-bold leading-tight drop-shadow-xs whitespace-normal md:whitespace-nowrap text-center">
                {mode === 'educacion' ? (
                  <>
                    Acompañamiento Pedagógico &{' '}
                    <span className="italic bg-gradient-to-r from-[#D4A346] via-[#B88E44] to-[#8C6420] bg-clip-text text-transparent font-normal inline">
                      Servicios
                    </span>
                  </>
                ) : (
                  <>
                    Terapias Integrales &{' '}
                    <span className="italic bg-gradient-to-r from-[#D4A346] via-[#B88E44] to-[#8C6420] bg-clip-text text-transparent font-normal inline">
                      Sanación
                    </span>
                  </>
                )}
              </h2>
              <CelestialTitleGraphic side="right" className="hidden md:block w-14 xs:w-20 sm:w-28 md:w-36 lg:w-48 xl:w-56 h-auto shrink-0" />
            </div>
          </motion.div>
        </div>

        {/* Grid de Servicios Directo con Animación Card Curtain Reveal */}
        <div
          key={`${mode}-grid-${targetSection?.startsWith('servicios') ? targetSection : 'default'}`}
          className={`grid grid-cols-1 ${
            mode === 'educacion' ? 'md:grid-cols-2 xl:grid-cols-3' : 'md:grid-cols-2'
          } gap-8 animate-in fade-in duration-350`}
        >
          {currentServices.map((service, idx) => (
            <motion.div
              key={`${service.id}-${targetSection?.startsWith('servicios') ? targetSection : 'default'}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
              className="relative overflow-visible"
            >
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
                <div className="absolute inset-0 z-10 p-5 sm:p-6 flex flex-col justify-center items-center gap-5 w-full bg-gradient-to-b from-white via-[#F8FBFC] to-[#EFF6F8] text-[#133238]">
                  
                  {/* Categoría centrada */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 shrink-0 w-full">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#133238] bg-[#FFF8D6] px-3 py-1 rounded-full border border-[#FFD700] shadow-xs">
                      {service.category === 'educacion' ? 'Área Psicopedagógica' : 'Medicina Integrativa'}
                    </span>
                  </div>

                  {/* Descripción centrada */}
                  <p className="text-xs sm:text-sm text-[#2C484E] leading-relaxed font-light max-w-xs mx-auto text-center">
                    {service.description}
                  </p>

                  {/* Botón de Contactar en Oro 24K */}
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

              </CardCurtainReveal>
            </motion.div>
          ))}
        </div>

        {/* ========================================================
            BLOQUE FINAL: TESTIMONIOS (EN NICHO HOLÍSTICO)
           ======================================================== */}
        {mode !== 'educacion' && (
          <div className="space-y-12 pt-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="text-center max-w-6xl mx-auto space-y-3"
            >
              {/* Separador celestial centrado arriba del título solo en móviles */}
              <div className="flex md:hidden justify-center items-center mb-3 w-full">
                <CelestialTitleGraphic side="full" className="w-52 xs:w-64 h-auto" />
              </div>

              <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 flex-wrap md:flex-nowrap w-full">
                <CelestialTitleGraphic side="left" className="hidden md:block w-14 xs:w-20 sm:w-28 md:w-36 lg:w-48 xl:w-56 h-auto shrink-0" />
                <h3 className="font-serif text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#133238] leading-tight drop-shadow-xs whitespace-normal md:whitespace-nowrap text-center">
                  Historias de{' '}
                  <span className="italic bg-gradient-to-r from-[#D4A346] via-[#B88E44] to-[#8C6420] bg-clip-text text-transparent font-normal inline">
                    Transformación
                  </span>
                </h3>
                <CelestialTitleGraphic side="right" className="hidden md:block w-14 xs:w-20 sm:w-28 md:w-36 lg:w-48 xl:w-56 h-auto shrink-0" />
              </div>
            </motion.div>

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
          </div>
        )}

      </div>

      {/* ATENCIÓN PERSONALIZADA — en modo holístico va al final de servicios */}
      {mode !== 'educacion' && <AttentionSection />}
    </section>
  );
};

