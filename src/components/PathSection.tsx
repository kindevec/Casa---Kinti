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

{/* ========================================================
    ILUSTRACIONES VECTORIALES PARA NICHO HOLÍSTICA
   ======================================================== */}

{/* Paso 1 Holística: Conoce tu Esencia (Péndulo de Radiestesia & Conexión Bioenergética) */}
const HolisticaGraphic1: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#9B8FD9' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="10" r="3" stroke={color} strokeWidth="1.8" />
    <path d="M32 13 L32 30" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="1 2.5" />
    <path
      d="M32 30 L39 38 L32 54 L25 38 Z"
      fill={color}
      fillOpacity="0.25"
      stroke={color}
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path d="M25 38 L39 38" stroke={color} strokeWidth="1.6" />
    <path d="M32 30 L32 54" stroke={color} strokeWidth="1.6" />
    <path d="M17 38 C17 38, 19 44, 23 48" stroke={color} strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
    <path d="M47 38 C47 38, 45 44, 41 48" stroke={color} strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
    <circle cx="19" cy="22" r="1.5" fill={color} />
    <circle cx="45" cy="22" r="1.5" fill={color} />
  </svg>
);

{/* Paso 2 Holística: Limpias & Botánica (Sahumerio Ancestral & Humo Sagrado Purificador) */}
const HolisticaGraphic2: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#12A89D' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M18 42 C18 49, 24 53, 32 53 C40 53, 46 49, 46 42 L18 42 Z"
      fill={color}
      fillOpacity="0.25"
      stroke={color}
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path d="M25 53 L23 57 M39 53 L41 57 M23 57 L41 57" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M16 42 L48 42" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <path
      d="M26 36 C24 30, 29 26, 27 20 C25 14, 30 10, 28 6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M32 37 C34 31, 30 25, 33 18 C36 12, 33 8, 34 5"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M38 36 C40 30, 36 24, 39 19 C41 14, 38 10, 40 7"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="20" cy="24" r="1.8" fill={color} />
    <circle cx="44" cy="22" r="1.8" fill={color} />
  </svg>
);

{/* Paso 3 Holística: Armoniza tu Energía (Gotero Floral de Bach & Elixir Sanador) */}
const HolisticaGraphic3: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#9B8FD9' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M28 8 C28 6, 36 6, 36 8 L36 13 L28 13 Z" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1.8" />
    <rect x="25" y="13" width="14" height="4" rx="1.5" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.2" />
    <path
      d="M26 17 L38 17 L38 21 C43 23, 45 28, 45 34 L45 50 C45 53, 42 55, 39 55 L25 55 C22 55, 19 53, 19 50 L19 34 C19 28, 21 23, 26 21 Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <rect x="24" y="30" width="16" height="18" rx="2" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" fill={color} fillOpacity="0.15" />
    <circle cx="32" cy="39" r="2" fill={color} />
    <path d="M32 35 L32 37 M32 41 L32 43 M28 39 L30 39 M34 39 L36 39" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M49 14 C49 14, 46 18, 46 20 C46 22, 47.5 23.5, 49 23.5 C50.5 23.5, 52 22, 52 20 C52 18, 49 14, 49 14 Z" fill={color} />
  </svg>
);

{/* Paso 4 Holística: Transformación Plena (Flor de Loto Sagrada & Destellos de Plenitud) */}
const HolisticaGraphic4: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#6B7FD1' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M32 16 C32 16, 26 28, 26 38 C26 44, 29 48, 32 48 C35 48, 38 44, 38 38 C38 28, 32 16, 32 16 Z"
      fill={color}
      fillOpacity="0.35"
      stroke={color}
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path
      d="M32 30 C27 26, 17 30, 16 38 C15 44, 21 48, 28 47 C28 42, 30 35, 32 30 Z"
      fill={color}
      fillOpacity="0.2"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M32 30 C37 26, 47 30, 48 38 C49 44, 43 48, 36 47 C36 42, 34 35, 32 30 Z"
      fill={color}
      fillOpacity="0.2"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M14 53 C22 51, 42 51, 50 53" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="32" cy="10" r="2.5" fill={color} />
    <path d="M20 18 L23 21 M44 18 L41 21 M32 6 L32 9" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

{/* ========================================================
    ILUSTRACIONES VECTORIALES PARA NICHO EDUCACIÓN
   ======================================================== */}

{/* Paso 1 Educación: Diagnóstico Integral (Cerebro & Mente Creativa) */}
const EducacionGraphic1: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#9B8FD9' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M32 50 C23 50, 16 43, 16 34 C16 28, 20 23, 25 21 C26 15, 32 12, 38 14 C44 16, 48 22, 47 28 C51 31, 52 38, 48 43 C44 48, 38 50, 32 50 Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M32 24 C30 29, 25 32, 22 36" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M32 24 C34 29, 39 32, 42 36" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M32 24 L32 44" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="32" cy="24" r="3" fill={color} />
    <circle cx="22" cy="36" r="2.2" fill={color} />
    <circle cx="42" cy="36" r="2.2" fill={color} />
    <circle cx="32" cy="44" r="2.2" fill={color} />
    <path d="M32 8 L32 12 M20 12 L22 15 M44 12 L42 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

{/* Paso 2 Educación: Inmersión Bilingüe (Libro Abierto & Letras Lúdicas A/B) */}
const EducacionGraphic2: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#12A89D' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M32 46 C27 43, 19 43, 14 45 L14 21 C19 19, 27 19, 32 22 C37 19, 45 19, 50 21 L50 45 C45 43, 37 43, 32 46 Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M32 22 L32 46" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M19 27 C23 26, 27 26, 29 27 M19 33 C23 32, 27 32, 29 33" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M35 27 C37 26, 41 26, 45 27 M35 33 C37 32, 41 32, 45 33" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="24" cy="12" r="5" stroke={color} strokeWidth="1.8" />
    <text x="24" y="15" fill={color} fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">A</text>
    <circle cx="40" cy="11" r="5" stroke={color} strokeWidth="1.8" />
    <text x="40" y="14" fill={color} fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">B</text>
    <circle cx="32" cy="14" r="1.5" fill={color} />
  </svg>
);

{/* Paso 3 Educación: Pautas para el Hogar (Hogar Protector & Birrete de Estudio) */}
const EducacionGraphic3: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#9B8FD9' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M14 28 L32 14 L50 28 L50 50 C50 52, 48 54, 46 54 L18 54 C16 54, 14 52, 14 50 Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 26 L43 32 L32 38 L21 32 Z"
      fill={color}
      fillOpacity="0.25"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M25 35 L25 42 C25 45, 39 45, 39 42 L39 35" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M43 32 L45 39" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="45" cy="40" r="1.8" fill={color} />
    <path d="M32 44 L32 48" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

{/* Paso 4 Educación: Seguridad & Éxito (Estrella de Triunfo & Confianza Infantil) */}
const EducacionGraphic4: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#6B7FD1' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M32 12 L35.5 22.5 L46.5 22.5 L37.5 29 L41 39.5 L32 33 L23 39.5 L26.5 29 L17.5 22.5 L28.5 22.5 Z"
      fill={color}
      fillOpacity="0.25"
      stroke={color}
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path d="M32 6 L32 9 M15 15 L17.5 17.5 M49 15 L46.5 17.5 M10 32 L13 32 M54 32 L51 32" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M22 52 L42 52" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M26 47 L38 47" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="32" cy="27" r="2.5" fill={color} />
  </svg>
);

const ARCH_STEP_THEMES = [
  {
    // Paso 1: Rosa Floral Pastel (#F0C6D9)
    bg: 'bg-gradient-to-b from-[#FDE8F2] via-[#FDF3F8] to-[#FCEAF3]',
    border: 'border-[#F0C6D9]',
    hoverBorder: 'hover:border-[#E8A2C2]',
    foliageColor: '#9B8FD9',
    badgeBg: 'bg-[#F0C6D9]/50 text-[#3E4A7A] border-[#F0C6D9]',
    butterflyColor: 'pink' as const,
    HolisticaIcon: HolisticaGraphic1,
    EducacionIcon: EducacionGraphic1,
  },
  {
    // Paso 2: Verde Menta / Esmeralda Sagrado (#12A89D)
    bg: 'bg-gradient-to-b from-[#E2F7F5] via-[#EFFBF9] to-[#E5F7F5]',
    border: 'border-[#A5E5E0]',
    hoverBorder: 'hover:border-[#12A89D]',
    foliageColor: '#12A89D',
    badgeBg: 'bg-[#12A89D]/15 text-[#0E7069] border-[#12A89D]/30',
    butterflyColor: 'blue' as const,
    HolisticaIcon: HolisticaGraphic2,
    EducacionIcon: EducacionGraphic2,
  },
  {
    // Paso 3: Púrpura Lavanda Encantado (#9B8FD9 / #C9D4F5)
    bg: 'bg-gradient-to-b from-[#F0EDFC] via-[#F7F5FD] to-[#F1EEFC]',
    border: 'border-[#C9D4F5]',
    hoverBorder: 'hover:border-[#9B8FD9]',
    foliageColor: '#9B8FD9',
    badgeBg: 'bg-[#9B8FD9]/15 text-[#3E4A7A] border-[#9B8FD9]/35',
    butterflyColor: 'purple' as const,
    HolisticaIcon: HolisticaGraphic3,
    EducacionIcon: EducacionGraphic3,
  },
  {
    // Paso 4: Azul Cielo & Azul Violeta (#DCEEFB / #6B7FD1)
    bg: 'bg-gradient-to-b from-[#E6F3FD] via-[#F2F8FE] to-[#E7F3FD]',
    border: 'border-[#C9D4F5]',
    hoverBorder: 'hover:border-[#6B7FD1]',
    foliageColor: '#6B7FD1',
    badgeBg: 'bg-[#6B7FD1]/15 text-[#3E4A7A] border-[#6B7FD1]/30',
    butterflyColor: 'lavender' as const,
    HolisticaIcon: HolisticaGraphic4,
    EducacionIcon: EducacionGraphic4,
  },
];

  return (
    <div
      className="relative pt-88 xs:pt-96 sm:pt-76 md:pt-88 lg:pt-96 pb-2 overflow-hidden bg-gradient-to-b from-[#E8F3FD] via-[#F4F9FE] to-[#E8F3FD] transition-colors duration-500"
    >
      {/* Elementos botánicos flotantes sutiles */}
      <FloralBouquet className="absolute top-16 sm:top-24 right-4 w-36 h-36 opacity-40 -z-5" />
      <FloralBouquet className="absolute bottom-10 left-4 w-36 h-36 opacity-40 -z-5" flip />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            SECCIÓN SUPERIOR: 4 Pasos del Proceso (Diseño unificado)
            ======================================================== */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative mb-8 sm:mb-14 md:mb-20">
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

            <p className="text-sm sm:text-base text-black font-normal leading-relaxed max-w-xl mx-auto">
              {mode === 'educacion'
                ? 'Acompañamiento psicopedagógico con calidez para potenciar el talento y autonomía de tus pequeños.'
                : 'Un camino guiado con empatía y rigor profesional hacia tu equilibrio y bienestar integral.'}
            </p>
          </div>
        </div>

        {/* Fila de 4 Tarjetas de Pasos en Forma de Arco Arquitectónico (Diseño Editorial Temático) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 items-stretch">
          {steps.map((step, idx) => {
            const theme = ARCH_STEP_THEMES[idx % ARCH_STEP_THEMES.length];
            const GraphicComponent = mode === 'educacion' ? theme.EducacionIcon : theme.HolisticaIcon;

            return (
              <div
                key={step.number}
                id={`path-step-${step.number}`}
                className={`relative group ${theme.bg} rounded-t-[120px] xs:rounded-t-[140px] sm:rounded-t-[150px] md:rounded-t-[160px] rounded-b-[2rem] sm:rounded-b-[2.25rem] pt-7 sm:pt-8 pb-7 sm:pb-8 px-5 sm:px-6 shadow-[0_8px_30px_rgba(62,74,122,0.06)] hover:shadow-[0_18px_45px_rgba(107,127,209,0.18)] border ${theme.border} ${theme.hoverBorder} transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center select-none overflow-visible`}
              >
                {/* Destello de luz diagonal sutil al pasar el cursor */}
                <div className="absolute inset-0 rounded-t-[120px] xs:rounded-t-[140px] sm:rounded-t-[150px] md:rounded-t-[160px] rounded-b-[2rem] sm:rounded-b-[2.25rem] bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                {/* Mariposa decorativa flotante encima de la cúspide del arco */}
                <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                  <ButterflyGraphic
                    size={34}
                    color={theme.butterflyColor}
                    className="transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-1.5 drop-shadow-sm"
                  />
                </div>

                {/* Cúspide del Arco: Gráfico Temático */}
                <div className="w-full flex flex-col items-center justify-center mb-2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-transform duration-500 group-hover:scale-115 group-hover:-rotate-2">
                    <GraphicComponent className="w-full h-full drop-shadow-xs" color={theme.foliageColor} />
                  </div>
                </div>

                {/* Contenido Editorial Central con espaciado compacto y elegante */}
                <div className="flex flex-col items-center w-full">
                  {/* Título en Serif Editorial elegante directamente debajo del ícono */}
                  <h3 className="font-serif-display text-lg sm:text-xl md:text-[21px] font-bold text-[#3E4A7A] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  {/* Divisor botánico sutil */}
                  <div
                    className="w-8 h-0.5 rounded-full mb-2.5 opacity-30"
                    style={{ backgroundColor: theme.foliageColor }}
                  />

                  {/* Descripción en Negro Puro para máxima legibilidad */}
                  <p className="text-xs sm:text-[13px] text-black leading-relaxed font-normal max-w-[230px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botón CTA central hacia servicios */}
        <div className="text-center mt-8 sm:mt-12 mb-10 sm:mb-16 md:mb-20">
          <a
            href="#servicios"
            id="path-cta-button"
            className="relative overflow-hidden inline-flex items-center gap-2.5 bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] hover:bg-gradient-to-tr hover:from-[#6B7FD1] hover:via-[#8E82DA] hover:to-[#E8A2C2] text-black hover:text-white text-base font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-[0_8px_25px_rgba(107,127,209,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            <span className="relative z-10">
              {mode === 'educacion'
                ? 'Explora nuestros programas educativos'
                : 'Comienza tu camino de sanación'}
            </span>
            <ArrowRight className="relative z-10 w-4 h-4 text-[#6B7FD1] group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300" />
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
            <p className="text-xs sm:text-sm text-black">
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
