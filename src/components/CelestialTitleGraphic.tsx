import React from 'react';
import { useNicheMode } from '../context/NicheContext';

interface CelestialTitleGraphicProps {
  side?: 'left' | 'right' | 'full';
  className?: string;
}

export const CelestialTitleGraphic: React.FC<CelestialTitleGraphicProps> = ({
  side = 'full',
  className = 'w-16 xs:w-24 sm:w-36 md:w-48 lg:w-56 h-auto',
}) => {
  const { mode } = useNicheMode();

  // Exclusivo para el nicho holístico
  if (mode === 'educacion') return null;

  if (side === 'full') {
    return (
      <svg
        viewBox="0 0 400 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`select-none pointer-events-none shrink-0 filter drop-shadow-[0_2px_10px_rgba(212,163,70,0.45)] ${className}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="celestialGoldFullLg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF0" />
            <stop offset="25%" stopColor="#FFD700" />
            <stop offset="70%" stopColor="#D4A346" />
            <stop offset="100%" stopColor="#8C6420" />
          </linearGradient>
        </defs>

        {/* Lado Izquierdo: Puntos y Estrellas en progresión */}
        <circle cx="16" cy="35" r="2.8" fill="url(#celestialGoldFullLg)" />
        <g transform="translate(36, 35)">
          <polygon points="0,-6.5 1.8,-1.8 6.5,0 1.8,1.8 0,6.5 -1.8,1.8 -6.5,0 -1.8,-1.8" fill="url(#celestialGoldFullLg)" />
        </g>
        <g transform="translate(66, 35)">
          <polygon points="0,-11 3,-3 11,0 3,3 0,11 -3,3 -11,0 -3,-3" fill="url(#celestialGoldFullLg)" />
        </g>
        <g transform="translate(104, 35)">
          <polygon points="0,-17 4.5,-4.5 17,0 4.5,4.5 0,17 -4.5,4.5 -17,0 -4.5,-4.5" fill="url(#celestialGoldFullLg)" />
        </g>

        {/* Luna Creciente Izquierda */}
        <g transform="translate(148, 35)">
          <path
            d="M -9 -22 C 9 -17 15 -7 15 0 C 15 7 9 17 -9 22 C 3 15 8 8 8 0 C 8 -8 3 -15 -9 -22 Z"
            fill="url(#celestialGoldFullLg)"
          />
        </g>

        {/* Sol Central Radiante con 12 Rayos Triangulares */}
        <g transform="translate(200, 35)">
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = i * 30;
            return (
              <polygon
                key={i}
                points="0,-30 -4,-18 4,-18"
                fill="url(#celestialGoldFullLg)"
                transform={`rotate(${angle})`}
              />
            );
          })}
          <circle cx="0" cy="0" r="16" stroke="url(#celestialGoldFullLg)" strokeWidth="1.4" fill="none" opacity="0.8" />
          <circle cx="0" cy="0" r="13" fill="url(#celestialGoldFullLg)" />
        </g>

        {/* Luna Creciente Derecha */}
        <g transform="translate(252, 35)">
          <path
            d="M 9 -22 C -9 -17 -15 -7 -15 0 C -15 7 -9 17 9 22 C -3 15 -8 8 -8 0 C -8 -8 -3 -15 9 -22 Z"
            fill="url(#celestialGoldFullLg)"
          />
        </g>

        {/* Lado Derecho: Estrellas y Puntos en progresión */}
        <g transform="translate(296, 35)">
          <polygon points="0,-17 4.5,-4.5 17,0 4.5,4.5 0,17 -4.5,4.5 -17,0 -4.5,-4.5" fill="url(#celestialGoldFullLg)" />
        </g>
        <g transform="translate(334, 35)">
          <polygon points="0,-11 3,-3 11,0 3,3 0,11 -3,3 -11,0 -3,-3" fill="url(#celestialGoldFullLg)" />
        </g>
        <g transform="translate(364, 35)">
          <polygon points="0,-6.5 1.8,-1.8 6.5,0 1.8,1.8 0,6.5 -1.8,1.8 -6.5,0 -1.8,-1.8" fill="url(#celestialGoldFullLg)" />
        </g>
        <circle cx="384" cy="35" r="2.8" fill="url(#celestialGoldFullLg)" />
      </svg>
    );
  }

  if (side === 'left') {
    return (
      <svg
        viewBox="0 0 200 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`select-none pointer-events-none shrink-0 filter drop-shadow-[0_2px_10px_rgba(212,163,70,0.45)] ${className}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="celestialGoldLeftLg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF0" />
            <stop offset="25%" stopColor="#FFD700" />
            <stop offset="70%" stopColor="#D4A346" />
            <stop offset="100%" stopColor="#8C6420" />
          </linearGradient>
        </defs>

        {/* Punto exterior */}
        <circle cx="10" cy="35" r="2.8" fill="url(#celestialGoldLeftLg)" />

        {/* Estrellas de 4 puntas en progresión de menor a mayor */}
        <g transform="translate(26, 35)">
          <polygon points="0,-6 1.8,-1.8 6,0 1.8,1.8 0,6 -1.8,1.8 -6,0 -1.8,-1.8" fill="url(#celestialGoldLeftLg)" />
        </g>
        <g transform="translate(50, 35)">
          <polygon points="0,-10 2.8,-2.8 10,0 2.8,2.8 0,10 -2.8,2.8 -10,0 -2.8,-2.8" fill="url(#celestialGoldLeftLg)" />
        </g>
        <g transform="translate(82, 35)">
          <polygon points="0,-16 4.2,-4.2 16,0 4.2,4.2 0,16 -4.2,4.2 -16,0 -4.2,-4.2" fill="url(#celestialGoldLeftLg)" />
        </g>

        {/* Luna Creciente */}
        <g transform="translate(122, 35)">
          <path
            d="M -8 -22 C 8 -17 14 -7 14 0 C 14 7 8 17 -8 22 C 3 15 7 8 7 0 C 7 -8 3 -15 -8 -22 Z"
            fill="url(#celestialGoldLeftLg)"
          />
        </g>

        {/* Sol Radiante con 12 Rayos */}
        <g transform="translate(168, 35)">
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = i * 30;
            return (
              <polygon
                key={i}
                points="0,-28 -3.8,-17 3.8,-17"
                fill="url(#celestialGoldLeftLg)"
                transform={`rotate(${angle})`}
              />
            );
          })}
          <circle cx="0" cy="0" r="15" stroke="url(#celestialGoldLeftLg)" strokeWidth="1.3" fill="none" opacity="0.8" />
          <circle cx="0" cy="0" r="12" fill="url(#celestialGoldLeftLg)" />
        </g>
      </svg>
    );
  }

  // side === 'right'
  return (
    <svg
      viewBox="0 0 200 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none shrink-0 filter drop-shadow-[0_2px_10px_rgba(212,163,70,0.45)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="celestialGoldRightLg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF0" />
          <stop offset="25%" stopColor="#FFD700" />
          <stop offset="70%" stopColor="#D4A346" />
          <stop offset="100%" stopColor="#8C6420" />
        </linearGradient>
      </defs>

      {/* Sol Radiante con 12 Rayos */}
      <g transform="translate(32, 35)">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30;
          return (
            <polygon
              key={i}
              points="0,-28 -3.8,-17 3.8,-17"
              fill="url(#celestialGoldRightLg)"
              transform={`rotate(${angle})`}
            />
          );
        })}
        <circle cx="0" cy="0" r="15" stroke="url(#celestialGoldRightLg)" strokeWidth="1.3" fill="none" opacity="0.8" />
        <circle cx="0" cy="0" r="12" fill="url(#celestialGoldRightLg)" />
      </g>

      {/* Luna Creciente */}
      <g transform="translate(78, 35)">
        <path
          d="M 8 -22 C -8 -17 -14 -7 -14 0 C -14 7 -8 17 8 22 C -3 15 -7 8 -7 0 C -7 -8 -3 -15 8 -22 Z"
          fill="url(#celestialGoldRightLg)"
        />
      </g>

      {/* Estrellas de 4 puntas en progresión de mayor a menor */}
      <g transform="translate(118, 35)">
        <polygon points="0,-16 4.2,-4.2 16,0 4.2,4.2 0,16 -4.2,4.2 -16,0 -4.2,-4.2" fill="url(#celestialGoldRightLg)" />
      </g>
      <g transform="translate(150, 35)">
        <polygon points="0,-10 2.8,-2.8 10,0 2.8,2.8 0,10 -2.8,2.8 -10,0 -2.8,-2.8" fill="url(#celestialGoldRightLg)" />
      </g>
      <g transform="translate(174, 35)">
        <polygon points="0,-6 1.8,-1.8 6,0 1.8,1.8 0,6 -1.8,1.8 -6,0 -1.8,-1.8" fill="url(#celestialGoldRightLg)" />
      </g>

      {/* Punto exterior */}
      <circle cx="190" cy="35" r="2.8" fill="url(#celestialGoldRightLg)" />
    </svg>
  );
};
