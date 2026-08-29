import React from 'react';
import {
  PATH_STEPS_HOLISTICA,
  PATH_STEPS_EDUCACION,
  WHATSAPP_PHONE,
} from '../data';
import { useNicheMode } from '../context/NicheContext';
import { FloralBouquet, ButterflyGraphic } from './FloralDecorations';
import { CoverflowCarousel, CoverflowSlide } from './ui/coverflow-carousel';
import {
  BookOpen,
  Sparkles,
  Scale,
  Flower2,
  ArrowRight,
  Eye,
  Leaf,
  Brain,
  GraduationCap,
} from 'lucide-react';

const HOLISTICA_COVERFLOW_SLIDES: CoverflowSlide[] = [
  {
    src: '/tarot-hero.png',
    alt: 'Lectura Express de Tarot Terapéutico',
    title: 'Lectura Express de Tarot Terapéutico',
    subtitle:
      'Consulta terapéutica y orientación espiritual con preguntas claras, sin adivinar. Enfocada en tu autoconocimiento y desbloqueo de dudas.',
    meta: [
      { label: 'Duración', value: '15 min' },
      { label: 'Modalidad', value: 'Presencial u Online' },
    ],
    ctaText: 'Reservar Lectura por WhatsApp',
    whatsappMessage:
      'Hola Johanna, quiero reservar mi Lectura Express de Tarot Terapéutico.',
  },
  {
    src: '/johanna-hero.png',
    alt: 'Sesión de Limpia Energética y Medicina Andina',
    title: 'Limpia Energética & Medicina Andina',
    subtitle:
      'Liberación profunda de cargas pesadas, corte de lazos densos y equilibrio bioenergético con sahumerios y plantas sagradas andinas.',
    meta: [
      { label: 'Duración', value: '60 min' },
      { label: 'Técnica', value: 'Medicina Andina' },
    ],
    ctaText: 'Agendar Limpia por WhatsApp',
    whatsappMessage:
      'Hola Johanna, me gustaría agendar una Sesión de Limpia Energética & Armonización Áurica.',
  },
  {
    src: '/pulseras-amuletos.png',
    alt: 'Pulseras Amuletos de piedras naturales consagradas',
    title: 'Pulseras Amuletos con Radiestesia',
    subtitle:
      'Pulseras de piedras naturales con estudio radiestésico con péndulo para saber cuál es la gema que tu energía necesita.',
    meta: [
      { label: 'Estudio Radiestésico', value: 'Personalizado' },
      { label: 'Piedras', value: '100% Naturales' },
    ],
    ctaText: 'Pedir mi Pulsera por WhatsApp',
    whatsappMessage:
      'Hola Johanna, deseo encargar una Pulsera Amuleto con estudio radiestésico personalizado.',
  },
  {
    src: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    alt: 'Flores de Bach y preparados botánicos medicinales',
    title: 'Consulta & Fórmula Floral de Bach',
    subtitle:
      'Diagnóstico emocional y preparación de gotero personalizado de 30ml con esencias florales de Bach para tratar ansiedad, insomnio y estrés.',
    meta: [
      { label: 'Frasco', value: 'Gotero 30ml incluido' },
      { label: 'Duración', value: '45 min' },
    ],
    ctaText: 'Solicitar Terapia Floral por WhatsApp',
    whatsappMessage:
      'Hola Johanna, deseo una consulta de Flores de Bach con mi fórmula personalizada.',
  },
  {
    src: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
    alt: 'Sanación y paz interior profunda',
    title: 'Sanación Bioenergética & Paz Interior',
    subtitle:
      'Alineación de chakras, armonización vibracional con cuencos y reconexión espiritual profunda para tu vitalidad diaria.',
    meta: [
      { label: 'Sesión', value: '75 min' },
      { label: 'Efecto', value: 'Armonía & Serenidad' },
    ],
    ctaText: 'Reservar Sanación por WhatsApp',
    whatsappMessage:
      'Hola Johanna, deseo agendar una sesión de Sanación Bioenergética & Paz Interior.',
  },
];

const EDUCACION_COVERFLOW_SLIDES: CoverflowSlide[] = [
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    alt: 'Diagnóstico Psicopedagógico y Evaluación Cognitiva',
    title: 'Diagnóstico Psicopedagógico Integral',
    subtitle:
      'Evaluación personalizada de dificultades de aprendizaje, desarrollo del lenguaje y estilo cognitivo con informe para escuela y hogar.',
    meta: [
      { label: 'Duración', value: '60 a 75 min' },
      { label: 'Especialista', value: 'Máster en Aprendizaje' },
    ],
    ctaText: 'Agendar Diagnóstico por WhatsApp',
    whatsappMessage:
      'Hola Johanna, me gustaría agendar un Diagnóstico Psicopedagógico Integral para mi hijo(a).',
  },
  {
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80',
    alt: 'Estimulación Temprana e Inmersión Bilingüe Infantil',
    title: 'Play & Learn: Inmersión Bilingüe',
    subtitle:
      'Estimulación temprana del lenguaje en inglés y español a través de canciones, juegos sensoriales y dinámicas vivenciales.',
    meta: [
      { label: 'Sesiones', value: '4 al mes' },
      { label: 'Grupos', value: 'Reducidos por edad' },
    ],
    ctaText: 'Inscribir a mi Hijo(a) por WhatsApp',
    whatsappMessage:
      'Hola Johanna, deseo información para inscribir a mi hijo(a) en el Taller de Inmersión Bilingüe Infantil.',
  },
  {
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    alt: 'Asesoría y Acompañamiento para Padres y Familias',
    title: 'Escuela & Pautas de Estudio en el Hogar',
    subtitle:
      'Orientación para padres con estrategias pedagógicas concretas para crear rutinas de estudio amigables y apoyar la autonomía sin frustración.',
    meta: [
      { label: 'Duración', value: '60 min' },
      { label: 'Modalidad', value: 'Presencial u Online' },
    ],
    ctaText: 'Solicitar Asesoría por WhatsApp',
    whatsappMessage:
      'Hola Johanna, quiero una sesión de asesoría pedagógica y pautas para el hogar.',
  },
  {
    src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
    alt: 'Material Didáctico Multisensorial y Kits de Aprendizaje',
    title: 'Kit Didáctico de Lectoescritura & Atención',
    subtitle:
      'Pack de fichas táctiles, tarjetas fonéticas bilingües y juegos de motricidad diseñados para reforzar el aprendizaje lúdico en casa.',
    meta: [
      { label: 'Material', value: 'Impreso & Plastificado' },
      { label: 'Incluye', value: 'Guía para padres' },
    ],
    ctaText: 'Adquirir Kit por WhatsApp',
    whatsappMessage:
      'Hola Johanna, deseo adquirir el Kit Didáctico Multisensorial de Refuerzo.',
  },
  {
    src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80',
    alt: 'Seguridad y Éxito Escolar en Niños Felices',
    title: 'Acompañamiento & Autonomía Escolar',
    subtitle:
      'Seguimiento pedagógico continuo para construir seguridad, motivación y felicidad en su etapa escolar con bases sólidas.',
    meta: [
      { label: 'Enfoque', value: 'Pedagogía Positiva' },
      { label: 'Impacto', value: 'Autonomía & Éxito' },
    ],
    ctaText: 'Consultar Acompañamiento por WhatsApp',
    whatsappMessage:
      'Hola Johanna, deseo información sobre el programa de Acompañamiento & Autonomía Escolar.',
  },
];

export const PathSection: React.FC = () => {
  const { mode } = useNicheMode();

  const steps = mode === 'educacion' ? PATH_STEPS_EDUCACION : PATH_STEPS_HOLISTICA;
  const coverflowSlides =
    mode === 'educacion' ? EDUCACION_COVERFLOW_SLIDES : HOLISTICA_COVERFLOW_SLIDES;

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return <Eye className="w-7 h-7 text-[#6B7FD1]" />;
      case 'Leaf':
        return <Leaf className="w-7 h-7 text-[#9B8FD9]" />;
      case 'Brain':
        return <Brain className="w-7 h-7 text-[#6B7FD1]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7 text-[#9B8FD9]" />;
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

  return (
    <div
      className="relative pt-64 sm:pt-72 md:pt-80 lg:pt-88 pb-2 overflow-hidden bg-gradient-to-b from-[#E8F3FD] via-[#F4F9FE] to-[#E8F3FD] transition-colors duration-500"
    >
      {/* Elementos botánicos flotantes sutiles */}
      <FloralBouquet className="absolute top-16 sm:top-24 right-4 w-36 h-36 opacity-40 -z-5" />
      <FloralBouquet className="absolute bottom-10 left-4 w-36 h-36 opacity-40 -z-5" flip />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            SECCIÓN SUPERIOR: 4 Pasos del Proceso (Diseño unificado)
           ======================================================== */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative mb-16 sm:mb-20">
          <FloralBouquet className="absolute -top-6 -left-6 w-32 h-32 opacity-60 pointer-events-none hidden sm:block" />
          <FloralBouquet className="absolute -bottom-6 -right-6 w-32 h-32 opacity-60 pointer-events-none hidden sm:block" flip />
          <ButterflyGraphic className="absolute top-4 right-6 sm:right-10" size={36} color="purple" />
          <ButterflyGraphic className="absolute bottom-2 left-6 sm:left-10" size={28} color="pink" />

          <div key={mode + '-path-header'} className="space-y-4 relative z-10 animate-in fade-in duration-300">
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#3E4A7A]">
              {mode === 'educacion' ? (
                <>
                  El aprendizaje sin barreras,{' '}
                  <span className="font-script text-[#9B8FD9] text-5xl sm:text-6xl font-normal block sm:inline">
                    es un proceso
                  </span>
                </>
              ) : (
                <>
                  El bienestar no es casualidad,{' '}
                  <span className="font-script text-[#9B8FD9] text-5xl sm:text-6xl font-normal block sm:inline">
                    es un camino
                  </span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-[#3E4A7A]/80 font-normal leading-relaxed max-w-2xl mx-auto">
              {mode === 'educacion'
                ? 'Cada etapa está guiada con calidez y rigor psicopedagógico para potenciar el talento único, la autonomía y el bilingüismo de tus pequeños.'
                : 'Cada paso está diseñado con empatía y rigor profesional para guiar tu proceso de autoconocimiento, sanación energética y equilibrio integral.'}
            </p>
          </div>
        </div>

        {/* Fila de 4 Tarjetas de Pasos con Mariposa Decorativa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
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

        {/* Botón CTA central hacia servicios */}
        <div className="text-center mt-12 mb-20">
          <a
            href="#servicios"
            id="path-cta-button"
            className="inline-flex items-center gap-2.5 bg-[#6B7FD1] hover:bg-[#9B8FD9] text-black text-base font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>
              {mode === 'educacion'
                ? 'Explora nuestros programas educativos'
                : 'Comienza tu camino de sanación'}
            </span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>

        {/* ========================================================
            CARRUSEL 3D COVERFLOW: Directo sin contenedor de fondo
           ======================================================== */}
        <div className="relative pt-6">
          {/* Título de la galería interactiva (Sin Insignia) */}
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-6">
            <h3 className="font-serif-display text-3xl sm:text-4xl text-[#3E4A7A] font-bold">
              {mode === 'educacion' ? (
                <>
                  Programas &{' '}
                  <span className="font-script text-[#9B8FD9] text-4xl sm:text-5xl font-normal">
                    Talleres Destacados
                  </span>
                </>
              ) : (
                <>
                  Experiencias &{' '}
                  <span className="font-script text-[#9B8FD9] text-4xl sm:text-5xl font-normal">
                    Terapias en Promoción
                  </span>
                </>
              )}
            </h3>
            <p className="text-xs sm:text-sm text-[#3E4A7A]/75">
              Pasa el cursor sobre las imágenes para ver los detalles y agendar directamente.
            </p>
          </div>

          {/* Componente 3D CoverflowCarousel con información en Hover */}
          <CoverflowCarousel
            slides={coverflowSlides}
            cardWidth="clamp(240px, 30vw, 360px)"
            rotate={42}
            depth={0.6}
            autoPlayInterval={2400}
            showCaption={false}
            showNavigation={true}
            showPagination={true}
            whatsappPhone={WHATSAPP_PHONE}
          />
        </div>

      </div>
    </div>
  );
};
