import React from 'react';
import { motion } from 'motion/react';
import { useNicheMode } from '../context/NicheContext';

interface EsotericDividerProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
}

export const EsotericDivider: React.FC<EsotericDividerProps> = ({
  className = '',
  variant = 'auto',
}) => {
  const { mode } = useNicheMode();

  // Exclusivo para el nicho holístico
  if (mode === 'educacion') return null;

  const isLight = variant === 'light';

  return (
    <div
      className={`w-full flex items-center justify-center py-4 sm:py-6 overflow-hidden select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="w-full max-w-5xl px-2 sm:px-4 flex items-center justify-center"
      >
        {/* Contenedor del eclipse: en fondos claros tiene un fondo cósmico sutilmente degradado para máximo contraste */}
        <div
          className={`w-full relative flex items-center justify-center py-2 sm:py-3 rounded-2xl ${
            isLight
              ? 'bg-gradient-to-r from-transparent via-[#021317]/90 to-transparent shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-y border-[#FFD700]/25'
              : ''
          }`}
        >
          <svg
            viewBox="0 0 1000 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-h-[85px] sm:max-h-[110px] md:max-h-[135px]"
          >
            <defs>
              {/* Gradiente Solar Dorado/Ámbar */}
              <radialGradient id="sunGoldGrad" cx="40%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#FFF2A8" />
                <stop offset="35%" stopColor="#FBBF24" />
                <stop offset="75%" stopColor="#EA580C" />
                <stop offset="100%" stopColor="#C2410C" />
              </radialGradient>

              {/* Corona Solar Blanca / Dorada del Eclipse Total */}
              <radialGradient id="coronaGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="35%" stopColor="#FFF8D6" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#FDE68A" stopOpacity="0.45" />
                <stop offset="85%" stopColor="#F59E0B" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>

              {/* Halo sutil del Destello Diamante */}
              <radialGradient id="diamondGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="30%" stopColor="#FFFDE7" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#FBBF24" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
              </radialGradient>

              {/* Haz vertical de luz en el diamante derecho (Lens Flare) */}
              <linearGradient id="verticalFlareBeam" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="40%" stopColor="#FFFDF0" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="60%" stopColor="#FFFDF0" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>

              {/* Filtro de resplandor suave */}
              <filter id="eclipseBlur" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* ========================================================
                  MÁSCARAS PARA LAS FASES DE LUNA / ECLIPSE PARCIAL
                 ======================================================== */}
              {/* Máscara Fase 2 (Mordisco desde la esquina superior derecha) */}
              <mask id="maskPhase2">
                <rect width="1000" height="120" fill="white" />
                <circle cx="188" cy="50" r="28" fill="black" />
              </mask>

              {/* Máscara Fase 3 (Creciente delgada inferior izquierda) */}
              <mask id="maskPhase3">
                <rect width="1000" height="120" fill="white" />
                <circle cx="288" cy="52" r="26" fill="black" />
              </mask>

              {/* Máscara Fase 7 (Creciente delgada superior derecha) */}
              <mask id="maskPhase7">
                <rect width="1000" height="120" fill="white" />
                <circle cx="712" cy="68" r="26" fill="black" />
              </mask>

              {/* Máscara Fase 8 (Mordisco desde la esquina inferior izquierda) */}
              <mask id="maskPhase8">
                <rect width="1000" height="120" fill="white" />
                <circle cx="812" cy="70" r="28" fill="black" />
              </mask>
            </defs>

            {/* ========================================================
                1. FASE 1: SOL COMPLETO DORADO (Izquierda)
               ======================================================== */}
            <g transform="translate(60, 60)" filter="url(#eclipseBlur)">
              {/* Resplandor exterior */}
              <circle cx="0" cy="0" r="26" fill="#FBBF24" opacity="0.3" />
              {/* Disco solar */}
              <circle cx="0" cy="0" r="23" fill="url(#sunGoldGrad)" />
            </g>

            {/* ========================================================
                2. FASE 2: ECLIPSE PARCIAL INICIAL (Creciente amplia)
               ======================================================== */}
            <g transform="translate(170, 60)">
              {/* Resplandor exterior sutil */}
              <circle cx="0" cy="0" r="25" fill="#FBBF24" opacity="0.2" mask="url(#maskPhase2)" />
              {/* Disco con máscara del mordisco lunar */}
              <circle cx="0" cy="0" r="23" fill="url(#sunGoldGrad)" mask="url(#maskPhase2)" />
            </g>

            {/* ========================================================
                3. FASE 3: ECLIPSE PARCIAL AVANZADO (Creciente delgada)
               ======================================================== */}
            <g transform="translate(280, 60)">
              {/* Resplandor sutil */}
              <circle cx="0" cy="0" r="25" fill="#FBBF24" opacity="0.25" mask="url(#maskPhase3)" />
              {/* Fina uña dorada */}
              <circle cx="0" cy="0" r="23" fill="url(#sunGoldGrad)" mask="url(#maskPhase3)" />
            </g>

            {/* ========================================================
                4. FASE 4: ANILLO DE DIAMANTE - ENTRADA (Diamond Ring Ingress)
               ======================================================== */}
            <g transform="translate(390, 60)">
              {/* Corona tenue antes de la totalidad */}
              <circle cx="0" cy="0" r="26" stroke="#FFF8D6" strokeWidth="1.2" opacity="0.65" fill="none" />
              <circle cx="0" cy="0" r="28" stroke="#FBBF24" strokeWidth="0.8" opacity="0.3" fill="none" />

              {/* Disco oscuro de la luna */}
              <circle cx="0" cy="0" r="23" fill="#020C0E" />

              {/* Anillo de diamante: destello en la parte inferior izquierda (-17, +15) */}
              <g transform="translate(-17, 15)">
                {/* Resplandor radial del diamante */}
                <circle cx="0" cy="0" r="16" fill="url(#diamondGlow)" />
                {/* Spikes de luz del diamante (cruz estelar) */}
                <line x1="-14" y1="14" x2="14" y2="-14" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
                <line x1="-8" y1="-8" x2="8" y2="8" stroke="#FFF8D6" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
                <line x1="0" y1="-12" x2="0" y2="12" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.75" />
                {/* Núcleo blanco incandescente */}
                <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
              </g>
            </g>

            {/* ========================================================
                5. FASE 5: ECLIPSE TOTAL (TOTALITY - CORONA SOLAR RADIANTE)
               ======================================================== */}
            <g transform="translate(500, 60)">
              {/* Gran halo de la corona solar */}
              <circle cx="0" cy="0" r="58" fill="url(#coronaGlow)" />

              {/* Filamentos y llamaradas de plasma de la corona (Wisps y Streamers) */}
              {/* Streamer Superior */}
              <path
                d="M -16 -22 C -6 -48 6 -48 16 -22 C 8 -36 -8 -36 -16 -22 Z"
                fill="#FFFFFF"
                opacity="0.65"
              />
              <path
                d="M -6 -23 C -2 -54 2 -54 6 -23 Z"
                fill="#FFFDE7"
                opacity="0.8"
              />

              {/* Streamer Inferior */}
              <path
                d="M -16 22 C -6 48 6 48 16 22 C 8 36 -8 36 -16 22 Z"
                fill="#FFFFFF"
                opacity="0.65"
              />
              <path
                d="M -6 23 C -2 54 2 54 6 23 Z"
                fill="#FFFDE7"
                opacity="0.8"
              />

              {/* Streamers Laterales & Diagonales */}
              <path
                d="M -22 -12 C -46 -6 -46 6 -22 12 C -36 4 -36 -4 -22 -12 Z"
                fill="#FFFFFF"
                opacity="0.55"
              />
              <path
                d="M 22 -12 C 46 -6 46 6 22 12 C 36 4 36 -4 22 -12 Z"
                fill="#FFFFFF"
                opacity="0.55"
              />

              {/* Asimetría coronal diagonal (estilo fotografía astronómica real) */}
              <path
                d="M -18 -18 C -38 -36 -32 -42 -14 -22 Z"
                fill="#FFFDE7"
                opacity="0.45"
              />
              <path
                d="M 18 18 C 38 36 32 42 14 22 Z"
                fill="#FFFDE7"
                opacity="0.45"
              />

              {/* Anillo de resplandor blanco puro en el limbo lunar */}
              <circle cx="0" cy="0" r="24" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.9" fill="none" />
              <circle cx="0" cy="0" r="25.5" stroke="#FFF8D6" strokeWidth="1" opacity="0.6" fill="none" />

              {/* Disco oscuro de la luna durante la totalidad */}
              <circle cx="0" cy="0" r="23" fill="#01080A" />
              {/* Sutil matiz morado/índigo de la sombra umbral como en la foto */}
              <circle cx="0" cy="0" r="22.5" fill="#04090E" opacity="0.95" />
            </g>

            {/* ========================================================
                6. FASE 6: ANILLO DE DIAMANTE - SALIDA (Diamond Ring Egress)
               ======================================================== */}
            <g transform="translate(610, 60)">
              {/* Corona tenue saliente */}
              <circle cx="0" cy="0" r="26" stroke="#FFF8D6" strokeWidth="1.2" opacity="0.65" fill="none" />
              <circle cx="0" cy="0" r="28" stroke="#FBBF24" strokeWidth="0.8" opacity="0.3" fill="none" />

              {/* Disco oscuro de la luna */}
              <circle cx="0" cy="0" r="23" fill="#020C0E" />

              {/* Haz vertical de luz prominente característico de la foto del usuario */}
              <line x1="17" y1="-50" x2="17" y2="50" stroke="url(#verticalFlareBeam)" strokeWidth="4" strokeLinecap="round" />
              <line x1="17" y1="-30" x2="17" y2="30" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" opacity="0.95" />

              {/* Destello del Diamante en la parte superior derecha (+17, -15) */}
              <g transform="translate(17, -15)">
                {/* Resplandor radial */}
                <circle cx="0" cy="0" r="18" fill="url(#diamondGlow)" />
                {/* Spikes de luz del diamante */}
                <line x1="-16" y1="-16" x2="16" y2="16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.95" />
                <line x1="-10" y1="10" x2="10" y2="-10" stroke="#FFF8D6" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
                <line x1="-15" y1="0" x2="15" y2="0" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.8" />
                {/* Núcleo de diamante super brillante */}
                <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
              </g>
            </g>

            {/* ========================================================
                7. FASE 7: ECLIPSE PARCIAL EN RETIRADA (Creciente delgada)
               ======================================================== */}
            <g transform="translate(720, 60)">
              <circle cx="0" cy="0" r="25" fill="#FBBF24" opacity="0.25" mask="url(#maskPhase7)" />
              <circle cx="0" cy="0" r="23" fill="url(#sunGoldGrad)" mask="url(#maskPhase7)" />
            </g>

            {/* ========================================================
                8. FASE 8: ECLIPSE PARCIAL FINAL (Creciente amplia)
               ======================================================== */}
            <g transform="translate(830, 60)">
              <circle cx="0" cy="0" r="25" fill="#FBBF24" opacity="0.2" mask="url(#maskPhase8)" />
              <circle cx="0" cy="0" r="23" fill="url(#sunGoldGrad)" mask="url(#maskPhase8)" />
            </g>

            {/* ========================================================
                9. FASE 9: SOL COMPLETO DORADO (Derecha)
               ======================================================== */}
            <g transform="translate(940, 60)" filter="url(#eclipseBlur)">
              <circle cx="0" cy="0" r="26" fill="#FBBF24" opacity="0.3" />
              <circle cx="0" cy="0" r="23" fill="url(#sunGoldGrad)" />
            </g>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};
