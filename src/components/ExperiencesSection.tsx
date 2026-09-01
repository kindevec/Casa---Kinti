import React from 'react';
import { useNicheMode } from '../context/NicheContext';
import { WHATSAPP_PHONE } from '../data';
import { Sparkles, Gift, Clock, Tag } from 'lucide-react';
import { WhatsAppOfficialIcon } from './FloralDecorations';

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
    price: '50 usd',
    promotions: [
      'Amuleto de protección consagrado de regalo (o lectura de péndulo de 3 preguntas)',
      '10% de descuento automático en la compra de 2 kits',
    ],
    whatsappMessage:
      'Hola Johanna, deseo encargar el Kit 1 Abre Caminos ($50 USD): Baños de despojo, florecimiento y armonización personal.',
  },
  {
    id: 'kit-2',
    kitNumber: 'KIT 2',
    title: 'Limpia Integral & Armonización de Espacio',
    emblem: <MysticMoonEmblem />,
    consistsOf:
      'Limpia profunda con plantas y humos sagrados + armonización canalizada personal para equilibrar tus 7 chakras + limpia y consagración energética del hogar o espacio que habitas.',
    duration: 'Sesión Integral (Personal + Espacio)',
    price: '100 usd',
    promotions: [
      'Amuleto de protección consagrado de regalo (o lectura de péndulo de 3 preguntas)',
      '10% de descuento automático en la compra de 2 kits',
    ],
    whatsappMessage:
      'Hola Johanna, deseo encargar el Kit 2 Abre Caminos ($100 USD): Limpia integral de 7 centros y armonización de espacio.',
    isFeatured: true,
  },
  {
    id: 'kit-3',
    kitNumber: 'KIT 3',
    title: 'Limpias Abre Caminos con Rapé',
    emblem: <MysticStarEmblem />,
    consistsOf:
      'Toma ceremonial de medicina ancestral de Rapé para liberar patrones obsoletos y memorias erróneas, complementada con meditación profunda canalizada, cuarzos, cuencos tibetanos y ondas binaurales.',
    duration: 'Ceremonia & Meditación Profunda',
    price: '50 usd',
    promotions: [
      'Amuleto de protección consagrado de regalo (o lectura de péndulo de 3 preguntas)',
      '10% de descuento automático en la compra de 2 kits',
    ],
    whatsappMessage:
      'Hola Johanna, deseo encargar el Kit 3 Abre Caminos ($50 USD): Limpias con medicina del Rapé, cuencos y ondas binaurales.',
  },
];

export const ExperiencesSection: React.FC = () => {
  const { mode } = useNicheMode();

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
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 sm:mb-16">
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#052C34] font-black leading-tight drop-shadow-xs">
            {mode === 'educacion' ? (
              <>
                Programas &{' '}
                <span className="italic text-[#FFF8D6] drop-shadow-[0_2px_8px_rgba(5,44,52,0.35)] font-normal">
                  Talleres de Casa Kinti
                </span>
              </>
            ) : (
              <>
                Kits Abre Caminos de{' '}
                <span className="italic text-[#FFF8D6] drop-shadow-[0_2px_8px_rgba(5,44,52,0.35)] font-normal">
                  Casa Kinti
                </span>
              </>
            )}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-[#052C34]/95 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
            Experimenta el gozo de liberar emociones bloqueadas para abrir los nuevos caminos de prosperidad.
          </p>
        </div>

        {/* Cuadrícula de 3 Tarjetas Estilo Cartas de Tarot Sagrado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {MYSTICAL_KITS_DATA.map((kit) => {
            const isFeatured = kit.isFeatured;
            return (
              <div
                key={kit.id}
                className={`relative rounded-3xl p-2 sm:p-2.5 transition-all duration-500 flex flex-col group ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#E5C985]/70 via-[#D4B26F]/40 to-[#B88E44]/70 shadow-[0_0_35px_rgba(212,178,111,0.28),0_18px_45px_rgba(0,0,0,0.5)] md:-translate-y-2.5'
                    : 'bg-gradient-to-b from-[#D4B26F]/40 via-[#D4B26F]/20 to-[#D4B26F]/35 shadow-[0_12px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_0_28px_rgba(0,210,180,0.22)] hover:-translate-y-1.5'
                }`}
              >
                {/* Contenedor Interior de la Carta (Azul Contáctanos profundo con destellos turquesa y marcos dobles) */}
                <div className="relative flex-1 rounded-[22px] bg-gradient-to-b from-[#021014] via-[#041A20] to-[#07242B] p-6 sm:p-7 flex flex-col justify-between overflow-hidden border border-[#D4B26F]/40">
                  
                  {/* Filigranas doradas en las 4 esquinas interiores (estilo carta de tarot) */}
                  <CornerOrnament className="absolute top-2 left-2 pointer-events-none" />
                  <CornerOrnament className="absolute top-2 right-2 -scale-x-100 pointer-events-none" />
                  <CornerOrnament className="absolute bottom-2 left-2 -scale-y-100 pointer-events-none" />
                  <CornerOrnament className="absolute bottom-2 right-2 -scale-x-100 -scale-y-100 pointer-events-none" />

                  {/* Línea interior dorada inset con esquinas estilizadas */}
                  <div className="absolute inset-3.5 rounded-xl border border-[#D4B26F]/25 pointer-events-none" />

                  {/* Resplandor ambiental superior turquesa/dorado */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-[#00D2B4]/10 blur-2xl pointer-events-none" />

                  {/* Parte Superior: KIT 1 / KIT 2 / KIT 3 arriba de todo */}
                  <div className="relative z-10 text-center">
                    
                    {/* Arriba de cada tarjeta: KIT 1, KIT 2 o KIT 3 */}
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="font-serif text-sm sm:text-base font-bold tracking-[0.25em] text-[#00D2B4] uppercase px-3 py-0.5 rounded-full bg-[#00D2B4]/10 border border-[#00D2B4]/30 shadow-xs">
                        ✦ {kit.kitNumber} ✦
                      </span>
                      {isFeatured && (
                        <span className="bg-gradient-to-r from-[#FFF8D6] via-[#FFD700] to-[#E5A824] text-[#041A20] font-serif text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                          Más Completo
                        </span>
                      )}
                    </div>

                    {/* Emblema Celestial */}
                    <div className="mb-3 transition-transform duration-500 group-hover:scale-108 group-hover:rotate-1">
                      {kit.emblem}
                    </div>

                    {/* Título de la Carta */}
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug tracking-wide mb-3 min-h-[52px] flex items-center justify-center">
                      {kit.title}
                    </h4>

                    {/* Fila de Precio & Duración en Relieve */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                      {/* Cápsula Dorada con Precio Oficial */}
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#FFF8D6] via-[#FFD700] to-[#E5A824] text-[#041A20] font-serif font-black text-xs sm:text-sm px-3.5 py-1 rounded-full shadow-md">
                        <Tag className="w-3 h-3 text-[#041A20]" />
                        Precio: {kit.price}
                      </span>

                      {/* Cápsula de Duración */}
                      <span className="inline-flex items-center gap-1 bg-[#052C34] text-[#E2EEF0] border border-[#00D2B4]/40 font-medium text-[11px] px-2.5 py-1 rounded-full shadow-xs">
                        <Clock className="w-3 h-3 text-[#00D2B4]" />
                        {kit.duration}
                      </span>
                    </div>

                    {/* Divisor Ornamental */}
                    <div className="w-28 h-px bg-gradient-to-r from-transparent via-[#D4B26F]/60 to-transparent mx-auto mb-4" />

                    {/* Descripción Breve y Directa (sin la palabra 'En qué consiste') */}
                    <div className="text-left bg-[#020B0E]/60 border border-[#D4B26F]/20 rounded-xl p-3.5 mb-4">
                      <p className="text-xs sm:text-[12.5px] text-[#E2EEF0] leading-relaxed font-normal">
                        {kit.consistsOf}
                      </p>
                    </div>

                    {/* Beneficios y Regalo incluidos (sin la palabra 'promociones') */}
                    <div className="text-left bg-[#07242B]/80 border border-[#D4A346]/35 rounded-xl p-3 mb-5 space-y-1.5">
                      {kit.promotions.map((promo, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-[#FFF8D6] leading-tight">
                          <span className="text-[#00D2B4] font-bold">✓</span>
                          <span>{promo}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botón WhatsApp Dorado con Ícono en Negro */}
                  <div className="relative z-10 pt-2">
                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(kit.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-[#FFF8D6] via-[#FFD700] to-[#D4A346] hover:from-white hover:via-[#FFF8D6] hover:to-[#E5A824] text-[#041A20] font-serif font-black text-xs sm:text-sm py-2.5 px-4 rounded-full shadow-[0_4px_16px_rgba(212,178,111,0.35)] hover:shadow-[0_0_24px_rgba(255,215,0,0.5)] transition-all duration-200 hover:scale-102 active:scale-98 flex items-center justify-center gap-2 cursor-pointer select-none"
                    >
                      <WhatsAppOfficialIcon className="w-4 h-4 text-[#041A20] shrink-0" />
                      <span>Pedir {kit.kitNumber} por WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Inferior Informativo */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16 bg-gradient-to-r from-[#021014] via-[#041A20] to-[#07242B] border border-[#D4A346]/40 rounded-3xl p-6 sm:p-8 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00D2B4]/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 space-y-2.5">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00D2B4] uppercase tracking-wider bg-[#00D2B4]/10 border border-[#00D2B4]/30 px-3.5 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" /> Apertura de Nuevos Caminos
            </span>

            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF8D6]">
              Con la compra de 2 kits obtendrás el 10% de descuento
            </h4>

            <p className="text-xs sm:text-sm text-[#D4E4E7] max-w-2xl mx-auto leading-relaxed">
              Por cada kit recibe un amuleto de protección como regalo o si deseas una lectura de péndulo de 3 preguntas.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#E5C985]">
              <span>WhatsApp: <strong>0983 442 341</strong></span>
              <span>•</span>
              <span>Facebook: <strong>casakinti</strong></span>
              <span>•</span>
              <span>Instagram: <strong>@casa_kinti_</strong></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperiencesSection;
