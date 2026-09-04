import React from 'react';
import { motion } from 'motion/react';
import {
  PATH_STEPS_HOLISTICA,
  PATH_STEPS_EDUCACION,
} from '../data';
import { useNicheMode } from '../context/NicheContext';
import { ArrowRight } from 'lucide-react';

export const PathSection: React.FC = () => {
  const { mode } = useNicheMode();

  const steps = mode === 'educacion' ? PATH_STEPS_EDUCACION : PATH_STEPS_HOLISTICA;

{/* ========================================================
    ILUSTRACIONES VECTORIALES PARA NICHO HOLÍSTICA
   ======================================================== */}

{/* Paso 1 Holística: Conoce tu Esencia (Péndulo de Radiestesia & Conexión Bioenergética) */}
const HolisticaGraphic1: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#2B7294' }) => (
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
const HolisticaGraphic2: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#2B7294' }) => (
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
const HolisticaGraphic3: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#2B7294' }) => (
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
const HolisticaGraphic4: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#043651' }) => (
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
const EducacionGraphic1: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#2B7294' }) => (
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
const EducacionGraphic2: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#2B7294' }) => (
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
const EducacionGraphic3: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#2B7294' }) => (
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
const EducacionGraphic4: React.FC<{ className?: string; color?: string }> = ({ className = 'w-12 h-12', color = '#043651' }) => (
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
    // Paso 1: Rosa Floral Pastel (#CEAB67)
    bg: 'bg-gradient-to-b from-[#FBF3E1] via-[#FDF8EC] to-[#FBF3E1]',
    border: 'border-[#CEAB67]',
    hoverBorder: 'hover:border-[#CEAB67]',
    foliageColor: '#2B7294',
    badgeBg: 'bg-[#CEAB67]/50 text-[#133238] border-[#CEAB67]',
    butterflyColor: 'pink' as const,
    HolisticaIcon: HolisticaGraphic1,
    EducacionIcon: EducacionGraphic1,
  },
  {
    // Paso 2: Verde Menta / Esmeralda Sagrado (#2B7294)
    bg: 'bg-gradient-to-b from-[#EDF4F8] via-[#E8F0F5] to-[#EDF4F8]',
    border: 'border-[#2B7294]',
    hoverBorder: 'hover:border-[#2B7294]',
    foliageColor: '#2B7294',
    badgeBg: 'bg-[#2B7294]/15 text-[#043651] border-[#2B7294]/30',
    butterflyColor: 'blue' as const,
    HolisticaIcon: HolisticaGraphic2,
    EducacionIcon: EducacionGraphic2,
  },
  {
    // Paso 3: Púrpura Lavanda Encantado (#2B7294 / #E8F0F5)
    bg: 'bg-gradient-to-b from-[#EDF4F8] via-[#F2F7FA] to-[#EDF4F8]',
    border: 'border-[#E8F0F5]',
    hoverBorder: 'hover:border-[#2B7294]',
    foliageColor: '#2B7294',
    badgeBg: 'bg-[#2B7294]/15 text-[#133238] border-[#2B7294]/35',
    butterflyColor: 'purple' as const,
    HolisticaIcon: HolisticaGraphic3,
    EducacionIcon: EducacionGraphic3,
  },
  {
    // Paso 4: Azul Cielo & Azul Violeta (#FFFFFF / #043651)
    bg: 'bg-gradient-to-b from-[#EDF4F8] via-[#F2F7FA] to-[#E8F0F5]',
    border: 'border-[#E8F0F5]',
    hoverBorder: 'hover:border-[#043651]',
    foliageColor: '#043651',
    butterflyColor: 'lavender' as const,
    HolisticaIcon: HolisticaGraphic4,
    EducacionIcon: EducacionGraphic4,
  },
];

  return (
    /* ========================================================
       SECCIÓN 1: EL VIAJE DE SANACIÓN / PASOS (COLOR DEL HEADER #5CBDB5)
       ======================================================== */
    <section
      id="camino"
      className="relative -mt-2 sm:-mt-3 md:-mt-4 pt-1 sm:pt-2 md:pt-3 pb-12 sm:pb-16 overflow-hidden select-none bg-gradient-to-b from-[#4AAEA5] via-[#5CBDB5] to-[#3E9C93] shadow-inner"
    >
        {/* Capa de destello áurico sutil y estrellas */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
          <svg viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
            <circle cx="120" cy="80" r="1.8" fill="#FFFFFF" opacity="0.9" />
            <circle cx="340" cy="140" r="2.2" fill="#FFF5C0" opacity="0.9" />
            <circle cx="680" cy="60" r="1.6" fill="#FFEA79" opacity="0.8" />
            <circle cx="920" cy="120" r="2" fill="#FFFFFF" opacity="0.9" />
            <circle cx="1260" cy="90" r="1.8" fill="#FFF5C0" opacity="0.85" />
            <circle cx="480" cy="220" r="1.9" fill="#FFEA79" opacity="0.8" />
            <circle cx="1100" cy="240" r="2.2" fill="#FFFFFF" opacity="0.9" />
          </svg>
        </div>

        {/* Contenido de los 4 Pasos */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-10 items-start mb-12 sm:mb-16">
            {steps.map((step, idx) => {
              const theme = ARCH_STEP_THEMES[idx % ARCH_STEP_THEMES.length];
              const GraphicComponent = mode === 'educacion' ? theme.EducacionIcon : theme.HolisticaIcon;

              return (
                <motion.div
                  key={step.number}
                  id={`path-step-${step.number}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
                  className="group flex flex-col items-center text-center select-none p-2 transition-transform duration-300 hover:-translate-y-2"
                >
                  {/* Contenedor del ícono con movimiento, iluminación y cambio de color */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-3">
                    {/* Halo de luz / Iluminación pulsante de fondo */}
                    <motion.div
                      className="absolute inset-0 rounded-full blur-xl pointer-events-none"
                      animate={{
                        scale: [0.85, 1.25, 0.85],
                        opacity: [0.35, 0.8, 0.35],
                        backgroundColor: [
                          'rgba(255, 215, 0, 0.55)',
                          'rgba(255, 248, 214, 0.75)',
                          'rgba(0, 210, 180, 0.45)',
                          'rgba(255, 179, 0, 0.65)',
                          'rgba(255, 215, 0, 0.55)',
                        ],
                      }}
                      transition={{
                        duration: 3.8 + idx * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: idx * 0.3,
                      }}
                    />

                    {/* Anillo de energía orbital giratorio */}
                    <motion.div
                      className="absolute inset-1 rounded-full border border-dashed border-[#FFD700]/40 pointer-events-none"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 16 + idx * 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />

                    {/* Ícono animado: Movimiento flotante + Cambio de color cromático + Sombra luminosa */}
                    <motion.div
                      animate={{
                        y: [0, -7, 0, -5, 0],
                        rotate: [0, 2, -2, 1, 0],
                        scale: [1, 1.05, 1, 1.03, 1],
                        color: [
                          '#FFD700',
                          '#FFF5C0',
                          '#00E5C5',
                          '#FFA000',
                          '#FFD700',
                        ],
                        filter: [
                          'drop-shadow(0 0 10px rgba(255,215,0,0.85)) drop-shadow(0 4px 14px rgba(0,0,0,0.3))',
                          'drop-shadow(0 0 22px rgba(255,245,192,0.95)) drop-shadow(0 6px 18px rgba(0,0,0,0.35))',
                          'drop-shadow(0 0 16px rgba(0,210,180,0.9)) drop-shadow(0 4px 14px rgba(0,0,0,0.3))',
                          'drop-shadow(0 0 20px rgba(255,160,0,0.85)) drop-shadow(0 5px 16px rgba(0,0,0,0.3))',
                          'drop-shadow(0 0 10px rgba(255,215,0,0.85)) drop-shadow(0 4px 14px rgba(0,0,0,0.3))',
                        ],
                      }}
                      transition={{
                        duration: 4.2 + idx * 0.6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: idx * 0.25,
                      }}
                      whileHover={{
                        scale: 1.22,
                        rotate: 6,
                        filter: 'drop-shadow(0 0 28px rgba(255,235,59,1)) drop-shadow(0 0 10px #FFFFFF)',
                        transition: { duration: 0.25 },
                      }}
                      className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center cursor-pointer"
                    >
                      <GraphicComponent className="w-full h-full" color="currentColor" />
                    </motion.div>
                  </div>

                  {/* Título Principal en Oro 24K Metálico */}
                  <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold mb-2 leading-snug tracking-[0.16em] uppercase select-none">
                    <span className="bg-gradient-to-r from-[#FFF8D6] via-[#FFD700] to-[#FFA000] bg-clip-text text-transparent filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {step.keyword}
                    </span>
                  </h3>

                  {/* Divisor dorado sutil */}
                  <div className="w-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-3 opacity-90" />

                  {/* Descripción */}
                  <p className="text-xs sm:text-[13px] md:text-sm text-[#0A1C24] leading-relaxed font-semibold max-w-[240px] mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Botón CTA Central en Oro Sólido */}
          <div className="text-center">
            <a
              href="#servicios"
              id="path-cta-button"
              className="relative overflow-hidden inline-flex items-center gap-2.5 bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#ECD394] hover:to-[#DEC080] text-[#0A1C24] font-serif font-bold text-xs sm:text-sm px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm uppercase tracking-[0.18em] shadow-[0_6px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(229,201,133,0.65)] transition-all duration-300 hover:scale-103 active:scale-97 cursor-pointer select-none group border border-[#FFF8D6]/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              <span className="relative z-10">
                {mode === 'educacion'
                  ? 'EXPLORAR PROGRAMAS EDUCATIVOS'
                  : 'COMENZAR MI CAMINO DE SANACIÓN'}
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 text-[#0A1C24] group-hover:translate-x-1 transition-transform duration-300 stroke-[2.4]" />
            </a>
          </div>

        </div>
      </section>
  );
};
