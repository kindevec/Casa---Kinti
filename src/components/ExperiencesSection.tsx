import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNicheMode } from '../context/NicheContext';
import { WHATSAPP_PHONE, COURSES_EDUCACION, SERVICES_EDUCACION, EDUCATION_PILLARS_META } from '../data';
import { Clock, Tag, BookOpen, ArrowRight, Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { WhatsAppOfficialIcon } from './FloralDecorations';
import { CardCurtainReveal, CardCurtainSplitCover } from './ui/card-curtain-reveal';
import { CardCarousel, CarouselCardItem } from './ui/card-carousel';
import { CelestialTitleGraphic } from './CelestialTitleGraphic';

// Filigrana ornamental para las 4 esquinas de cada carta estilo tarot místico
const CornerOrnament = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 text-[#D4B26F] ${className || ''}`}
  >
    <path
      d="M2 38V12C2 6.47715 6.47715 2 12 2H38"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M6 34V14C6 9.58172 9.58172 6 14 6H34"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeDasharray="2 2"
    />
    <circle cx="14" cy="14" r="2" fill="currentColor" />
    <path
      d="M10 2L14 6L10 10L6 6Z"
      fill="currentColor"
      opacity="0.8"
    />
  </svg>
);

// Emblema Místico 1: Sol Radiante con Rostro y Rayos (Kit 1 - Despojo & Florecimiento)
const MysticSunEmblem = () => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto text-[#FFD700]">
    {/* Rayos exteriores principales */}
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
      <line x1="80" y1="6" x2="80" y2="40" />
      <line x1="80" y1="120" x2="80" y2="154" />
      <line x1="6" y1="80" x2="40" y2="80" />
      <line x1="120" y1="80" x2="154" y2="80" />
      <line x1="28" y1="28" x2="52" y2="52" />
      <line x1="108" y1="108" x2="132" y2="132" />
      <line x1="28" y1="132" x2="52" y2="108" />
      <line x1="108" y1="52" x2="132" y2="28" />
      {/* Rayos finos secundarios */}
      <line x1="80" y1="16" x2="80" y2="34" strokeWidth="1" opacity="0.5" transform="rotate(15 80 80)" />
      <line x1="80" y1="16" x2="80" y2="34" strokeWidth="1" opacity="0.5" transform="rotate(30 80 80)" />
      <line x1="80" y1="16" x2="80" y2="34" strokeWidth="1" opacity="0.5" transform="rotate(60 80 80)" />
      <line x1="80" y1="16" x2="80" y2="34" strokeWidth="1" opacity="0.5" transform="rotate(75 80 80)" />
      <line x1="80" y1="16" x2="80" y2="34" strokeWidth="1" opacity="0.5" transform="rotate(105 80 80)" />
      <line x1="80" y1="16" x2="80" y2="34" strokeWidth="1" opacity="0.5" transform="rotate(120 80 80)" />
      <line x1="80" y1="16" x2="80" y2="34" strokeWidth="1" opacity="0.5" transform="rotate(150 80 80)" />
      <line x1="80" y1="16" x2="80" y2="34" strokeWidth="1" opacity="0.5" transform="rotate(165 80 80)" />
    </g>

    {/* Rayos triangulares */}
    <g fill="currentColor" opacity="0.9">
      <polygon points="80,18 76,46 84,46" />
      <polygon points="80,142 76,114 84,114" />
      <polygon points="18,80 46,76 46,84" />
      <polygon points="142,80 114,76 114,84" />
      <polygon points="36,36 57,47 47,57" />
      <polygon points="124,124 103,113 113,103" />
      <polygon points="36,124 47,103 57,113" />
      <polygon points="124,36 113,57 103,47" />
    </g>

    {/* Aro concéntrico */}
    <circle cx="80" cy="80" r="32" stroke="currentColor" strokeWidth="1.5" fill="#041A20" />
    <circle cx="80" cy="80" r="28" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />

    {/* Rostro del Sol Místico */}
    <path d="M68 74C69 72 73 72 74 74" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M86 74C87 72 91 72 92 74" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M80 73V82L76 85H84" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M72 91C75 94 85 94 88 91" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="71" cy="76" r="1" fill="currentColor" />
    <circle cx="89" cy="76" r="1" fill="currentColor" />
  </svg>
);

// Emblema Místico 2: Luna Creciente con Estrella y Nubes Cósmicas (Kit 2 - Limpia & Espacio)
const MysticMoonEmblem = () => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto text-[#FFD700]">
    {/* Estrellas místicas de fondo */}
    <g fill="currentColor" opacity="0.75">
      <circle cx="46" cy="38" r="1.5" />
      <circle cx="118" cy="42" r="1.5" />
      <circle cx="34" cy="76" r="1" />
      <circle cx="128" cy="86" r="1" />
      <circle cx="48" cy="116" r="1.5" />
      <polygon points="56,54 58,50 60,54 64,56 60,58 58,62 56,58 52,56" />
      <polygon points="120,68 121,65 122,68 125,69 122,70 121,73 120,70 117,69" />
    </g>

    {/* Luna Creciente Dorada */}
    <path
      d="M74 32C52 38 42 60 48 84C54 108 76 122 100 118C74 116 62 96 66 74C70 54 86 40 100 38C91 33 82 31 74 32Z"
      fill="currentColor"
      stroke="#FFF8D6"
      strokeWidth="1"
      opacity="0.95"
    />

    {/* Estrella compañera dentro del arco */}
    <g fill="#FFF8D6">
      <polygon points="102,68 105,58 108,68 118,71 108,74 105,84 102,74 92,71" />
      <circle cx="105" cy="71" r="2" fill="#041A20" />
    </g>

    {/* Nubes místicas inferiores */}
    <path
      d="M34 132C38 124 48 124 54 128C60 120 74 120 80 126C88 120 102 120 108 126C114 122 124 124 128 132"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M44 138C48 132 56 132 60 135C66 130 76 130 82 134C88 130 98 130 104 135C108 132 116 133 120 138"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

// Emblema Místico 3: Estrella Radiante de 8 Puntas con Nubes (Kit 3 - Rapé & Cuencos)
const MysticStarEmblem = () => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto text-[#FFD700]">
    {/* Rayos finos de proyección */}
    <g stroke="currentColor" strokeWidth="1" opacity="0.45" strokeLinecap="round">
      <line x1="80" y1="12" x2="80" y2="136" />
      <line x1="18" y1="74" x2="142" y2="74" />
      <line x1="36" y1="30" x2="124" y2="118" />
      <line x1="36" y1="118" x2="124" y2="30" />
    </g>

    {/* Estrella Principal de 8 Puntas Estilo Brújula */}
    <g fill="currentColor" opacity="0.95">
      {/* Rayo vertical superior e inferior */}
      <polygon points="80,18 77,74 80,68 83,74" />
      <polygon points="80,130 77,74 80,80 83,74" />
      {/* Rayo horizontal izquierdo y derecho */}
      <polygon points="24,74 80,71 74,74 80,77" />
      <polygon points="136,74 80,71 86,74 80,77" />
      {/* Rayos diagonales */}
      <polygon points="42,36 80,74 74,70 76,76" />
      <polygon points="118,112 80,74 86,78 84,72" />
      <polygon points="42,112 80,74 74,78 76,72" />
      <polygon points="118,36 80,74 86,70 84,76" />
    </g>

    {/* Núcleo de la Estrella */}
    <circle cx="80" cy="74" r="5" fill="#FFF8D6" />
    <circle cx="80" cy="74" r="2.5" fill="#041A20" />

    {/* Estrellitas en el cosmos */}
    <g fill="currentColor" opacity="0.75">
      <circle cx="48" cy="52" r="1.5" />
      <circle cx="112" cy="52" r="1.5" />
      <circle cx="38" cy="92" r="1" />
      <circle cx="122" cy="92" r="1" />
    </g>

    {/* Nubes místicas en la base */}
    <path
      d="M32 134C38 126 50 126 56 130C64 122 80 122 88 128C96 122 110 122 116 128C122 124 132 126 136 134"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.65"
    />
  </svg>
);

interface MysticalKitCard {
  id: string;
  kitNumber: string;
  title: string;
  emblem: React.ReactNode;
  consistsOf: string;
  duration: string;
  price: string;
  promotions: string[];
  whatsappMessage: string;
  isFeatured?: boolean;
}

const MYSTICAL_KITS_DATA: MysticalKitCard[] = [
  {
    id: 'kit-1',
    kitNumber: 'KIT 1',
    title: 'Baños de Despojo & Florecimiento',
    emblem: <MysticSunEmblem />,
    consistsOf:
      'Limpia energética personal con plantas medicinales y sahumos naturales, con previo diagnóstico terapéutico mediante péndulo para detectar y desbloquear centros de energía.',
    duration: '2 a 3 horas de sesión personalizada',
    price: '80 usd',
    promotions: [
      'Amuleto de protección consagrado de regalo (o lectura de péndulo de 3 preguntas)',
      '10% de descuento automático en la compra de 2 kits',
    ],
    whatsappMessage:
      'Hola Johana, deseo encargar el Kit 1 Abre Caminos ($80 USD): Baños de despojo, florecimiento y armonización personal.',
  },
  {
    id: 'kit-2',
    kitNumber: 'KIT 2',
    title: 'Limpia Integral & Armonización de Espacio',
    emblem: <MysticMoonEmblem />,
    consistsOf:
      'Limpia profunda con plantas y humos sagrados + armonización canalizada personal para equilibrar tus 7 chakras + limpia y consagración energética del hogar o espacio que habitas.',
    duration: 'Sesión Integral (Personal + Espacio)',
    price: '200 usd',
    promotions: [
      'Amuleto de protección consagrado de regalo (o lectura de péndulo de 3 preguntas)',
      '10% de descuento automático en la compra de 2 kits',
    ],
    whatsappMessage:
      'Hola Johana, deseo encargar el Kit 2 Abre Caminos ($200 USD): Limpia integral de 7 centros y armonización de espacio.',
    isFeatured: true,
  },
  {
    id: 'kit-3',
    kitNumber: 'KIT 3',
    title: 'Limpias Abre Caminos con Rapé',
    emblem: <MysticStarEmblem />,
    consistsOf:
      'Toma de proyección con rapé, medicina sagrada del Brasil, para liberar patrones obsoletos y memorias erróneas, complementada con meditación profunda canalizada, cuarzos, cuencos tibetanos y ondas binaurales.',
    duration: 'Ceremonia & Meditación Profunda',
    price: '50 usd',
    promotions: [
      'Amuleto de protección consagrado de regalo (o lectura de péndulo de 3 preguntas)',
      '10% de descuento automático en la compra de 2 kits',
    ],
    whatsappMessage:
      'Hola Johana, deseo encargar el Kit 3 Abre Caminos ($50 USD): Toma de proyección con rapé (medicina sagrada del Brasil), cuencos y ondas binaurales.',
  },
];

export const ExperiencesSection: React.FC = () => {
  const { mode, targetSection } = useNicheMode();
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [activePillar, setActivePillar] = useState<'todos' | 'programas' | 'acompanamiento' | 'experiencias'>('todos');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const CARDS_PER_PAGE = 6;

  // En el modo educación mostramos la sección unificada 'EDUCACIÓN CON SENTIDO'
  if (mode === 'educacion') {
    const specializedServices = SERVICES_EDUCACION.filter((s) => s.groupCategory === 'especializado');
    const experienceServices = SERVICES_EDUCACION.filter((s) => s.groupCategory === 'experiencias');

    const PILLAR_TABS = [
      { id: 'todos' as const, label: 'Ver Todo', shortLabel: 'Todo', icon: '✨' },
      { id: 'programas' as const, label: 'Programas de Aprendizaje', shortLabel: 'Programas', icon: '📚' },
      { id: 'acompanamiento' as const, label: 'Acompañamiento Especializado', shortLabel: 'Acompañamiento', icon: '🧠' },
      { id: 'experiencias' as const, label: 'Experiencias para Niños', shortLabel: 'Experiencias', icon: '🎨' },
    ];

    // Unificamos las tarjetas en una lista homogénea
    const allCards = [
      ...COURSES_EDUCACION.map((c) => ({
        id: `course-${c.id}`,
        title: c.name,
        categoryTag: 'programas' as const,
        categoryName: 'Programa de Aprendizaje',
        badge: c.badge || 'Programa',
        sessions: c.sessions,
        price: c.price,
        description: c.description,
        image: c.image || 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
        whatsappMessage: `Hola Johana, deseo más información sobre el programa: *${c.name}* (${c.price} | ${c.sessions}).`,
      })),
      ...specializedServices.map((s) => ({
        id: `service-${s.id}`,
        title: s.title,
        categoryTag: 'acompanamiento' as const,
        categoryName: 'Acompañamiento Especializado',
        badge: s.badge,
        sessions: s.sessions,
        price: s.price,
        description: s.description,
        image: s.image || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
        whatsappMessage: `Hola Johana, deseo agendar el servicio: *${s.title}* (${s.price} | ${s.sessions}).`,
      })),
      ...experienceServices.map((e) => ({
        id: `experience-${e.id}`,
        title: e.title,
        categoryTag: 'experiencias' as const,
        categoryName: 'Experiencias para Niños',
        badge: e.badge,
        sessions: e.sessions,
        price: e.price,
        description: e.description,
        image: e.image || 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80',
        whatsappMessage: `Hola Johana, deseo inscribir a mi hijo/a en: *${e.title}* (${e.price} | ${e.sessions}).`,
      })),
    ];

    // Filtrar según categoría seleccionada
    const filteredCards = activePillar === 'todos' 
      ? allCards 
      : allCards.filter((card) => card.categoryTag === activePillar);

    const totalPages = Math.ceil(filteredCards.length / CARDS_PER_PAGE);
    const displayedCards = filteredCards.slice((currentPage - 1) * CARDS_PER_PAGE, currentPage * CARDS_PER_PAGE);

    const handleTabChange = (tabId: 'todos' | 'programas' | 'acompanamiento' | 'experiencias') => {
      setActivePillar(tabId);
      setCurrentPage(1);
    };

    return (
      <section
        id="cursos"
        className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-white text-[#133238] border-t border-slate-100"
      >
        {/* Sutiles acentos de luz ambiental */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#4AAEA5]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
          
          {/* ========================================================
              1. ENCABEZADO: EDUCACIÓN CON SENTIDO + SELECTOR DORADO
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            {/* Gráfico ornamental celestial */}
            <div className="flex justify-center items-center mb-1">
              <CelestialTitleGraphic side="full" className="w-56 sm:w-72 h-auto text-[#D4B26F]" />
            </div>

            {/* Título Principal de la Sección */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#052C34] font-black leading-tight tracking-wide">
              EDUCACIÓN Y{' '}
              <span className="bg-gradient-to-r from-[#D4A346] via-[#E5A824] to-[#8C6420] bg-clip-text text-transparent drop-shadow-xs inline-block">
                ACOMPAÑAMIENTO
              </span>
            </h2>

            {/* SELECTOR INTERACTIVO DORADO (Estilo Botones Oro Radiante sin fondos blancos ni scrollbar) */}
            <div className="flex items-center justify-center pt-3">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 max-w-full">
                {PILLAR_TABS.map((tab) => {
                  const isActive = activePillar === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      type="button"
                      className={`relative flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-serif text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer select-none ${
                        isActive
                          ? 'bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] text-[#0A1C24] shadow-lg shadow-[#D4B26F]/40 scale-[1.04] border border-[#FFE57A]'
                          : 'bg-transparent text-[#133238] border border-[#D4B26F]/50 hover:border-[#D4B26F] hover:text-[#052C34] hover:bg-[#FFEA79]/15'
                      }`}
                    >
                      <span className="text-base sm:text-lg">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              2. CONTENIDO: TARJETAS CORTINA CON PAGINACIÓN (MÁXIMO 6 POR VISTA)
             ======================================================== */}
          <div className="space-y-8">
            <motion.div
              key={`${activePillar}-page-${currentPage}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center"
            >
              {displayedCards.map((card) => (
                <div key={card.id} className="w-full max-w-sm mx-auto">
                  <CardCurtainReveal
                    id={`curtain-${card.id}`}
                    className="relative bg-white rounded-2xl min-h-[390px] sm:min-h-[410px] shadow-[0_8px_30px_rgba(212,178,111,0.25)] hover:shadow-[0_12px_40px_rgba(212,178,111,0.45)] border-2 border-[#FFD700] transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Cortina Frontal Dividida */}
                    <CardCurtainSplitCover
                      image={card.image}
                      title={card.title}
                      price={card.price}
                      badge={card.badge}
                      category={card.categoryName}
                    />

                    {/* Contenido Interior Revelado */}
                    <div className="absolute inset-0 z-10 p-6 sm:p-7 flex flex-col justify-center items-center gap-5 w-full bg-gradient-to-b from-white via-[#F8FBFC] to-[#EFF6F8] text-[#133238]">
                      {/* Insignia con la Categoría / Especialidad (sin mención a sesiones) */}
                      <div className="flex flex-wrap items-center justify-center gap-1.5 shrink-0 w-full">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#133238] bg-[#FFF8D6] px-3.5 py-1 rounded-full border border-[#FFD700] shadow-xs">
                          {card.badge}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#2C484E] leading-relaxed font-light max-w-xs mx-auto text-center">
                        {card.description}
                      </p>

                      <a
                        href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(card.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#ECD394] hover:to-[#DEC080] text-[#0A1C24] text-xs sm:text-sm font-serif font-bold uppercase tracking-wider py-3.5 px-4 rounded-sm shadow-md hover:shadow-[0_6px_22px_rgba(212,178,111,0.5)] transition-all hover:scale-[1.02] active:scale-97 group/btn cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                        <WhatsAppOfficialIcon className="w-5 h-5 text-[#0A1C24] shrink-0" />
                        <span>Consultar por WhatsApp</span>
                      </a>
                    </div>
                  </CardCurtainReveal>
                </div>
              ))}
            </motion.div>

            {/* CONTROLES DE NAVEGACIÓN: SÓLO FLECHAS Y NÚMEROS PERFECTAMENTE CENTRADOS */}
            {totalPages > 1 && (
              <div className="w-full flex justify-center items-center pt-6 pb-2">
                <div className="inline-flex items-center justify-center gap-3">
                  {/* Flecha Anterior */}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    type="button"
                    aria-label="Página anterior"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-[#D4B26F]/50 text-[#0A1C24] hover:bg-[#FFEA79]/30 hover:border-[#D4B26F] transition-all cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed active:scale-90"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Números de Página */}
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        type="button"
                        className={`w-9 h-9 rounded-xl font-serif text-sm font-bold transition-all cursor-pointer flex items-center justify-center ${
                          currentPage === pageNum
                            ? 'bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] text-[#0A1C24] shadow-md shadow-[#D4B26F]/30 scale-105'
                            : 'text-[#133238]/70 hover:text-[#052C34] hover:bg-[#FFEA79]/15'
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  {/* Flecha Siguiente */}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    type="button"
                    aria-label="Página siguiente"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-[#D4B26F]/50 text-[#0A1C24] hover:bg-[#FFEA79]/30 hover:border-[#D4B26F] transition-all cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed active:scale-90"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ========================================================
              5. BLOQUE INFERIOR: DETALLES DE GARANTÍA Y MODALIDADES
              (Con las mismas animaciones y efectos de colores que el contenedor de kits de holística)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.015 }}
            className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden p-[2px] group shadow-[0_12px_35px_rgba(0,0,0,0.3),0_0_25px_rgba(0,210,180,0.2)] hover:shadow-[0_16px_45px_rgba(255,215,0,0.35),0_0_40px_rgba(0,210,180,0.4)] transition-all duration-500"
          >
            {/* Borde Animado Conic Multicolor (Turquesa, Oro, Ámbar, Esmeralda en Giro Continuo) */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -inset-[160%] bg-[conic-gradient(from_0deg,_#00D2B4,_#FFD700,_#00F5D4,_#E5A824,_#38BDF8,_#00D2B4)] opacity-75 group-hover:opacity-100 blur-sm pointer-events-none"
            />

            {/* Contenedor Interior con Orbes Flotantes de Luz y Brillo */}
            <div className="relative rounded-[22px] bg-gradient-to-b from-[#021014] via-[#041A20] to-[#07242B] p-5 sm:p-7 text-white space-y-6 overflow-hidden border border-[#D4A346]/40">
              
              {/* Orbe de Luz 1: Turquesa Brillante Flotante */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, 20, 0],
                  y: [0, -15, 0],
                  opacity: [0.2, 0.45, 0.2],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-10 -left-10 w-60 h-60 bg-[#00D2B4]/25 rounded-full blur-2xl pointer-events-none"
              />

              {/* Orbe de Luz 2: Oro Cálido Flotante */}
              <motion.div
                animate={{
                  scale: [1.15, 1, 1.15],
                  x: [0, -25, 0],
                  y: [0, 20, 0],
                  opacity: [0.25, 0.5, 0.25],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#FFD700]/25 rounded-full blur-2xl pointer-events-none"
              />

              {/* Velo de estrellas sutiles */}
              <div className="absolute inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
              
              {/* Encabezado del Bloque con degradado animado */}
              <div className="relative z-10 text-center space-y-1">
                <motion.h3
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  style={{ backgroundSize: '200% 200%' }}
                  className="font-serif text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-[#FFF8D6] via-[#FFD700] via-[#00D2B4] to-[#FFF8D6] bg-clip-text text-transparent drop-shadow-sm tracking-wide"
                >
                  Condiciones de Cada Programa
                </motion.h3>
              </div>

              {/* 4 Puntos Clave de Condiciones */}
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {[
                  {
                    title: 'Modalidad',
                    detail: 'Presencial / Online',
                    // Ícono: MapPin + Monitor / Red Global Sagrada
                    icon: (
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                        {/* Monitor / Portal digital */}
                        <rect x="12" y="14" width="40" height="26" rx="4" stroke="#B88E44" strokeWidth="2.2" fill="#B88E44" fillOpacity="0.16" />
                        <path d="M26 40 L22 48 L42 48 L38 40" stroke="#B88E44" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 48 L44 48" stroke="#B88E44" strokeWidth="2.4" strokeLinecap="round" />
                        {/* Pin de ubicación presencial superpuesto con brillo */}
                        <circle cx="32" cy="25" r="4" fill="#B88E44" />
                        <path d="M32 19 C28.5 19 26 21.5 26 25 C26 29 32 34 32 34 C32 34 38 29 38 25 C38 21.5 35.5 19 32 19 Z" stroke="#B88E44" strokeWidth="1.8" fill="#B88E44" fillOpacity="0.3" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Duración',
                    detail: '45–60 min por sesión',
                    // Ícono: Reloj con Manecillas y Puntos de Tiempo
                    icon: (
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                        <circle cx="32" cy="32" r="22" stroke="#B88E44" strokeWidth="2.2" fill="#B88E44" fillOpacity="0.18" />
                        <path d="M32 18 L32 32 L42 37" stroke="#B88E44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="32" cy="32" r="2.5" fill="#B88E44" />
                        <circle cx="32" cy="14" r="1.5" fill="#B88E44" />
                        <circle cx="50" cy="32" r="1.5" fill="#B88E44" />
                        <circle cx="32" cy="50" r="1.5" fill="#B88E44" />
                        <circle cx="14" cy="32" r="1.5" fill="#B88E44" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Edad',
                    detail: '5 a 12 años',
                    // Ícono: Niño / Crecimiento / Estrellita de Aprendizaje
                    icon: (
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                        <circle cx="32" cy="20" r="7" stroke="#B88E44" strokeWidth="2.2" fill="#B88E44" fillOpacity="0.2" />
                        <path d="M18 48 C18 40 24 35 32 35 C40 35 46 40 46 48" stroke="#B88E44" strokeWidth="2.4" strokeLinecap="round" />
                        <path d="M46 18 L48 22 L52 22 L49 25 L50 29 L46 26 L42 29 L43 25 L40 22 L44 22 Z" fill="#B88E44" fillOpacity="0.8" />
                        <circle cx="32" cy="19" r="2" fill="#B88E44" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Cupos Limitados',
                    detail: 'Atención personalizada',
                    // Ícono: Escudo / Sello Exclusivo de Atención Personalizada
                    icon: (
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                        <path
                          d="M32 10 L48 16 V28 C48 40 32 50 32 50 C32 50 16 40 16 28 V16 L32 10 Z"
                          stroke="#B88E44"
                          strokeWidth="2.2"
                          strokeLinejoin="round"
                          fill="#B88E44"
                          fillOpacity="0.18"
                        />
                        <path d="M25 29 L30 34 L39 23" stroke="#B88E44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                  },
                ].map((item, gIdx) => (
                  <div
                    key={gIdx}
                    className="flex flex-col items-center text-center space-y-2 p-1 group/item"
                  >
                    {/* Medallón con Aura y Anillo rotatorio */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center">
                      {/* Aura pulsante de fondo */}
                      <motion.div
                        className="absolute -inset-1 rounded-full blur-md pointer-events-none"
                        animate={{
                          scale: [0.92, 1.15, 0.92],
                          opacity: [0.35, 0.7, 0.35],
                          backgroundColor: [
                            'rgba(255, 215, 0, 0.35)',
                            'rgba(255, 248, 214, 0.5)',
                            'rgba(0, 210, 180, 0.3)',
                            'rgba(212, 163, 70, 0.45)',
                            'rgba(255, 215, 0, 0.35)',
                          ],
                        }}
                        transition={{
                          duration: 4 + gIdx * 0.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: gIdx * 0.25,
                        }}
                      />

                      {/* Anillo exterior punteado rotatorio */}
                      <motion.div
                        className="absolute inset-[-3px] rounded-full border border-dashed pointer-events-none"
                        animate={{
                          rotate: gIdx % 2 === 0 ? 360 : -360,
                          borderColor: [
                            'rgba(255, 215, 0, 0.65)',
                            'rgba(255, 248, 214, 0.85)',
                            'rgba(0, 210, 180, 0.6)',
                            'rgba(212, 163, 70, 0.8)',
                            'rgba(255, 215, 0, 0.65)',
                          ],
                        }}
                        transition={{
                          rotate: { duration: 16 + gIdx * 2, repeat: Infinity, ease: 'linear' },
                          borderColor: { duration: 4 + gIdx * 0.5, repeat: Infinity, ease: 'easeInOut' },
                        }}
                      />

                      {/* Medallón central dorado de Sobre Mí */}
                      <motion.div
                        className="w-full h-full rounded-full bg-gradient-to-br from-[#FFFBEE] via-[#FFF3C4] to-[#F5E08A] border-2 border-[#D4A346] flex items-center justify-center relative overflow-hidden shadow-[0_4px_14px_rgba(212,163,70,0.5)]"
                        whileHover={{ scale: 1.08 }}
                      >
                        <div className="w-7 h-7 flex items-center justify-center">
                          {item.icon}
                        </div>
                      </motion.div>
                    </div>

                    {/* Título debajo del ícono + Texto pequeño debajo del título */}
                    <div className="space-y-0.5">
                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#FFD700] tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight max-w-[160px] mx-auto">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón Central de WhatsApp para Consultas Globales */}
              <div className="relative z-10 flex justify-center pt-1">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                    'Hola Johana, deseo coordinar un acompañamiento educativo para mi hijo/a en Casa Kinti.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#ECD394] hover:to-[#DEC080] text-[#0A1C24] font-serif text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl uppercase tracking-[0.14em] shadow-lg hover:shadow-[0_8px_25px_rgba(255,215,0,0.5)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <WhatsAppOfficialIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A1C24]" />
                  <span>Consultar Disponibilidad de Cupos</span>
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </section>
    );
  }

  const toggleFlip = (id: string) => {
    setFlippedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experiencias"
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-b from-[#3E9C93] via-[#4AAEA5] to-[#368F87] text-white border-t border-[#FFEA79]/30 border-b border-[#2C7872]/40"
    >
      {/* Destellos ambientales de luz y polvo dorado sobre el fondo turquesa del header */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFD700]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera de la Sección con contraste perfecto sobre fondo turquesa */}
        <motion.div
          key={`holistica-kits-header-${targetSection?.startsWith('experiencias') ? targetSection : 'default'}`}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center max-w-6xl mx-auto space-y-3.5 mb-12 sm:mb-16"
        >
          {/* Separador celestial centrado arriba del título solo en móviles */}
          <div className="flex md:hidden justify-center items-center mb-3 w-full">
            <CelestialTitleGraphic side="full" className="w-52 xs:w-64 h-auto" />
          </div>

          <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 flex-wrap md:flex-nowrap w-full">
            <CelestialTitleGraphic side="left" className="hidden md:block w-14 xs:w-20 sm:w-28 md:w-36 lg:w-48 xl:w-56 h-auto shrink-0" />
            <h3 className="font-serif text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#052C34] font-black leading-tight drop-shadow-xs whitespace-normal md:whitespace-nowrap text-center">
              Kits Abre Caminos de{' '}
              <span className="italic text-[#FFD700] drop-shadow-[0_2px_8px_rgba(5,44,52,0.4)] font-normal inline">
                Casa Kinti
              </span>
            </h3>
            <CelestialTitleGraphic side="right" className="hidden md:block w-14 xs:w-20 sm:w-28 md:w-36 lg:w-48 xl:w-56 h-auto shrink-0" />
          </div>
          <p className="text-xs sm:text-sm md:text-base text-[#052C34]/95 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
            Experimenta el gozo de liberar emociones bloqueadas para abrir los nuevos caminos de prosperidad.
          </p>
        </motion.div>

        {/* Cuadrícula de 3 Tarjetas Estilo Cartas de Tarot 3D Reversibles */}
        <div
          key={`holistica-kits-grid-${targetSection?.startsWith('experiencias') ? targetSection : 'default'}`}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
        >
          {MYSTICAL_KITS_DATA.map((kit, idx) => {
            const isFlipped = flippedCardId === kit.id;

            return (
              <motion.div
                key={`${kit.id}-${targetSection?.startsWith('experiencias') ? targetSection : 'default'}`}
                onClick={() => toggleFlip(kit.id)}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
                className="group relative h-[470px] sm:h-[490px] w-full card-flip-perspective cursor-pointer select-none"
              >
                {/* Contenedor Giratorio 3D con animación suave */}
                <div className={`card-flip-container ${isFlipped ? 'is-flipped' : ''}`}>
                  
                  {/* ========================================================
                      CARA FRONTAL: SOLO KIT, DIBUJO Y NOMBRE CON EFECTOS
                     ======================================================== */}
                  <div className="card-face card-face-front rounded-3xl p-2 sm:p-2.5 flex flex-col bg-gradient-to-b from-[#D4B26F]/50 via-[#D4B26F]/25 to-[#D4B26F]/45 shadow-[0_14px_34px_rgba(0,0,0,0.35)] group-hover:shadow-[0_0_35px_rgba(255,215,0,0.35)] transition-shadow duration-500">
                    <div className="relative flex-1 rounded-[22px] bg-gradient-to-b from-[#021014] via-[#041A20] to-[#07242B] p-6 sm:p-7 flex flex-col justify-between items-center text-center overflow-hidden border border-[#D4B26F]/40">
                      
                      {/* Filigranas doradas en las 4 esquinas */}
                      <CornerOrnament className="absolute top-2 left-2 pointer-events-none" />
                      <CornerOrnament className="absolute top-2 right-2 -scale-x-100 pointer-events-none" />
                      <CornerOrnament className="absolute bottom-2 left-2 -scale-y-100 pointer-events-none" />
                      <CornerOrnament className="absolute bottom-2 right-2 -scale-x-100 -scale-y-100 pointer-events-none" />

                      {/* Marco interior fino dorado */}
                      <div className="absolute inset-3 rounded-xl border border-[#D4B26F]/30 pointer-events-none" />
                      
                      {/* Resplandor ambiental de luz pulsante */}
                      <motion.div
                        animate={{
                          opacity: [0.15, 0.35, 0.15],
                          scale: [1, 1.15, 1],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-52 h-36 bg-[#00D2B4]/20 blur-2xl pointer-events-none"
                      />

                      {/* Parte Alta: KIT 1 / KIT 2 / KIT 3 */}
                      <div className="relative z-10 pt-2">
                        <div className="flex items-center justify-center">
                          <span className="font-serif text-sm sm:text-base font-bold tracking-[0.28em] text-[#00D2B4] uppercase px-3 py-1 rounded-full bg-[#00D2B4]/10 border border-[#00D2B4]/35 shadow-xs">
                            ✦ {kit.kitNumber} ✦
                          </span>
                        </div>
                      </div>

                      {/* Centro: Dibujo Místico con Animación Suave (Sol, Luna o Estrella) */}
                      <motion.div
                        animate={
                          idx === 0
                            ? { rotate: [0, 4, -4, 0], scale: [1, 1.03, 1] }
                            : idx === 1
                            ? { y: [0, -4, 0], rotate: [0, 2.5, 0] }
                            : { scale: [1, 1.05, 0.98, 1], rotate: [0, 6, -6, 0] }
                        }
                        transition={{ duration: 6 + idx, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative z-10 my-auto py-4 transition-transform duration-500 group-hover:scale-110"
                      >
                        {kit.emblem}
                      </motion.div>

                      {/* Parte Baja: Nombre del Kit & Pista de Volteo */}
                      <div className="relative z-10 pb-2 w-full">
                        <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#D4B26F]/60 to-transparent mx-auto mb-3" />
                        <h4 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug tracking-wide min-h-[50px] flex items-center justify-center">
                          {kit.title}
                        </h4>
                        <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-[#00D2B4] tracking-wider font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                          <span className="hidden sm:inline">↻ Pasa el cursor o haz clic para ver detalles</span>
                          <span className="inline sm:hidden">↻ Toca para ver detalles</span>
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* ========================================================
                      CARA TRASERA: DESCRIPCIÓN ESTÁTICA Y NÍTIDA (SIN CONTENEDOR)
                     ======================================================== */}
                  <div className="card-face card-face-back rounded-3xl p-2 sm:p-2.5 flex flex-col bg-gradient-to-b from-[#D4B26F]/50 via-[#D4B26F]/25 to-[#D4B26F]/45 shadow-[0_14px_34px_rgba(0,0,0,0.35)]">
                    <div className="relative flex-1 rounded-[22px] bg-gradient-to-b from-[#021014] via-[#041A20] to-[#07242B] p-6 sm:p-7 flex flex-col justify-between overflow-hidden border border-[#D4B26F]/40 text-center">
                      
                      {/* Filigranas doradas en las 4 esquinas */}
                      <CornerOrnament className="absolute top-2 left-2 pointer-events-none" />
                      <CornerOrnament className="absolute top-2 right-2 -scale-x-100 pointer-events-none" />
                      <CornerOrnament className="absolute bottom-2 left-2 -scale-y-100 pointer-events-none" />
                      <CornerOrnament className="absolute bottom-2 right-2 -scale-x-100 -scale-y-100 pointer-events-none" />

                      {/* Marco interior fino dorado */}
                      <div className="absolute inset-3 rounded-xl border border-[#D4B26F]/30 pointer-events-none" />

                      {/* Encabezado del Dorso en dorado nítido */}
                      <div className="relative z-10 pt-1">
                        <h4 className="font-serif text-base sm:text-lg font-bold text-[#FFD700] leading-snug drop-shadow-xs">
                          {kit.title}
                        </h4>
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4B26F]/60 to-transparent mx-auto mt-2" />
                      </div>

                      {/* Descripción breve y concisa: Sin contenedor, texto blanco de alta claridad y nitidez */}
                      <div className="relative z-10 my-auto py-2 px-1 text-center">
                        <p className="text-[13px] sm:text-[14px] text-white font-normal leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                          {kit.consistsOf}
                        </p>
                      </div>

                      {/* Precio & Duración */}
                      <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#FFF8D6] via-[#FFD700] to-[#E5A824] text-[#041A20] font-serif font-black text-xs sm:text-sm px-3.5 py-1 rounded-full shadow-md">
                          <Tag className="w-3 h-3 text-[#041A20]" />
                          Precio: {kit.price}
                        </span>
                        <span className="inline-flex items-center gap-1 bg-[#052C34] text-[#E2EEF0] border border-[#00D2B4]/40 font-medium text-[11px] px-2.5 py-1 rounded-full shadow-xs">
                          <Clock className="w-3 h-3 text-[#00D2B4]" />
                          {kit.duration}
                        </span>
                      </div>

                      {/* Botón de Pedir por WhatsApp & Volver al frente */}
                      <div className="relative z-10 flex flex-col items-center">
                        <a
                          href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(kit.whatsappMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full bg-gradient-to-r from-[#FFF8D6] via-[#FFD700] to-[#D4A346] hover:from-white hover:via-[#FFF8D6] hover:to-[#E5A824] text-[#041A20] font-serif font-black text-xs sm:text-sm py-2.5 px-4 rounded-full shadow-[0_4px_16px_rgba(212,178,111,0.35)] hover:shadow-[0_0_24px_rgba(255,215,0,0.5)] transition-all duration-200 hover:scale-102 active:scale-98 flex items-center justify-center gap-2 cursor-pointer select-none"
                        >
                          <WhatsAppOfficialIcon className="w-4 h-4 text-[#0A1C24] shrink-0" />
                          <span>Pedir por WhatsApp</span>
                        </a>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(kit.id);
                          }}
                          className="mt-2 text-[11px] text-[#00D2B4] hover:text-[#FFD700] transition-colors inline-flex items-center justify-center gap-1 cursor-pointer select-none font-medium"
                        >
                          <span>↻ Volver al frente</span>
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cuadro Inferior con Animaciones de Movimiento Flotante y Efectos de Color */}
        <motion.div
          animate={{
            y: [0, -9, 0],
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.02 }}
          className="relative max-w-4xl mx-auto mt-12 sm:mt-16 p-[2.5px] rounded-3xl overflow-hidden group shadow-[0_14px_45px_rgba(0,0,0,0.35),0_0_35px_rgba(0,210,180,0.25)] hover:shadow-[0_18px_60px_rgba(255,215,0,0.4),0_0_50px_rgba(0,210,180,0.5)] transition-all duration-500"
        >
          {/* Borde Animado Conic Multicolor (Turquesa, Oro, Ámbar, Esmeralda en Giro Continuo) */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute -inset-[160%] bg-[conic-gradient(from_0deg,_#00D2B4,_#FFD700,_#00F5D4,_#E5A824,_#38BDF8,_#00D2B4)] opacity-75 group-hover:opacity-100 blur-sm pointer-events-none"
          />

          {/* Contenedor Interior con Orbes Flotantes de Luz y Brillo */}
          <div className="relative rounded-[22px] bg-gradient-to-b from-[#021014] via-[#041A20] to-[#07242B] p-6 sm:p-9 text-center text-white overflow-hidden border border-[#D4A346]/40">
            
            {/* Orbe de Luz 1: Turquesa Brillante Flotante */}
            <motion.div
              animate={{
                scale: [1, 1.35, 1],
                x: [0, 30, 0],
                y: [0, -20, 0],
                opacity: [0.25, 0.55, 0.25],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-12 -left-12 w-72 h-72 bg-[#00D2B4]/30 rounded-full blur-3xl pointer-events-none"
            />

            {/* Orbe de Luz 2: Oro Cálido Flotante */}
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -35, 0],
                y: [0, 25, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-12 -right-12 w-72 h-72 bg-[#FFD700]/30 rounded-full blur-3xl pointer-events-none"
            />

            {/* Velo de estrellas sutiles */}
            <div className="absolute inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

            {/* Contenido Central */}
            <div className="relative z-10 space-y-3.5">
              {/* Título con Texto en Degradado Animado Multicolor */}
              <motion.h4
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% 200%' }}
                className="font-serif text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-[#FFF8D6] via-[#FFD700] via-[#00D2B4] to-[#FFF8D6] bg-clip-text text-transparent drop-shadow-sm tracking-wide"
              >
                Con la compra de 2 kits obtendrás el 10% de descuento
              </motion.h4>

              <p className="text-xs sm:text-sm md:text-base text-[#D4E4E7] max-w-2xl mx-auto leading-relaxed font-normal">
                Por cada kit recibe un amuleto de protección como regalo o si deseas una lectura de péndulo de 3 preguntas.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperiencesSection;
