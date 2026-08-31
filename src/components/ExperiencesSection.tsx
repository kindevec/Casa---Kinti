import React from 'react';
import { useNicheMode } from '../context/NicheContext';
import { CoverflowCarousel, CoverflowSlide } from './ui/coverflow-carousel';
import { WHATSAPP_PHONE } from '../data';

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
    ctaText: 'Solicitar Acompañamiento por WhatsApp',
    whatsappMessage:
      'Hola Johanna, deseo información sobre el plan de Acompañamiento y Autonomía Escolar.',
  },
];

export const ExperiencesSection: React.FC = () => {
  const { mode } = useNicheMode();
  const coverflowSlides = mode === 'educacion' ? EDUCACION_COVERFLOW_SLIDES : HOLISTICA_COVERFLOW_SLIDES;

  return (
    <section id="experiencias" className="relative py-14 sm:py-18 md:py-24 overflow-hidden bg-[#FAFCFD] text-[#133238] border-t border-[#D4A346]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título de las Promociones y Carrusel */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-serif tracking-[0.22em] text-[#B88E44] uppercase font-bold drop-shadow-xs block">
            ✦ PROMOCIONES & EXPERIENCIAS DESTACADAS ✦
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#133238] font-bold leading-tight drop-shadow-xs">
            {mode === 'educacion' ? (
              <>
                Programas &{' '}
                <span className="italic bg-gradient-to-r from-[#D4A346] via-[#B88E44] to-[#8C6420] bg-clip-text text-transparent font-normal">
                  Talleres en Promoción
                </span>
              </>
            ) : (
              <>
                Experiencias &{' '}
                <span className="italic bg-gradient-to-r from-[#D4A346] via-[#B88E44] to-[#8C6420] bg-clip-text text-transparent font-normal">
                  Terapias en Promoción
                </span>
              </>
            )}
          </h3>
          <p className="text-xs sm:text-sm text-[#2C484E] font-light max-w-md mx-auto leading-relaxed">
            Explora nuestro carrusel interactivo y reserva directamente con Johanna por WhatsApp con tarifas promocionales.
          </p>
        </div>

        {/* Componente 3D CoverflowCarousel con información interactiva */}
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
    </section>
  );
};

export default ExperiencesSection;
