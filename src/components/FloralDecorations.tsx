import React from 'react';
import { ShapeBlur } from './ShapeBlur';

/**
 * Casa Kinti Official Logo Component (Transparente sin fondo blanco)
 * Emplea el logotipo oficial con la Cruz Andina estilizada, cactus sagrado y tipografía oficial.
 */
export const CasaKintiLogo: React.FC<{
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'symbol';
  showText?: boolean;
  withShaderEffect?: boolean;
}> = ({ className = '', size = 'md', variant = 'full' }) => {
  const heights = {
    sm: 'h-12 sm:h-14',
    md: 'h-[64px] xs:h-[70px] sm:h-20 lg:h-22',
    lg: 'h-24 sm:h-28 lg:h-32',
    xl: 'h-36 sm:h-44',
  }[size];

  const imageSrc = variant === 'symbol' ? '/casa-kinti-symbol.png' : '/casa-kinti-logo.png';

  return (
    <div className={`inline-flex items-center justify-center select-none group ${className}`}>
      {/* Imagen del Logotipo Oficial Transparente Fijo y Nítido (Optimizado para Retina / Móviles) */}
      <img
        src={imageSrc}
        alt="Casa Kinti — Medicinas Integrativas"
        width="720"
        height="744"
        className={`${heights} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter-none`}
        style={{
          imageRendering: '-webkit-optimize-contrast',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
        }}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
};

/**
 * Mariposa decorativa flotante con aleteo animado
 */
export const ButterflyGraphic: React.FC<{
  className?: string;
  size?: number;
  color?: 'purple' | 'blue' | 'lavender' | 'pink';
  wingFlapSpeed?: string;
}> = ({ className = '', size = 36, color = 'purple' }) => {
  const colorMap = {
    purple: { main: '#2B7294', second: '#043651', detail: '#CEAB67' },
    blue: { main: '#043651', second: '#2B7294', detail: '#FFFFFF' },
    lavender: { main: '#E8F0F5', second: '#2B7294', detail: '#FFFFFF' },
    pink: { main: '#CEAB67', second: '#2B7294', detail: '#FFFFFF' },
  }[color];

  return (
    <div className={`inline-block animate-float select-none pointer-events-none ${className}`}>
      <div className="animate-butterfly">
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xs"
        >
          {/* Ala izquierda superior */}
          <path
            d="M32 30 C28 14, 8 10, 6 22 C4 32, 18 38, 30 34 Z"
            fill={colorMap.main}
            fillOpacity="0.85"
            stroke={colorMap.second}
            strokeWidth="1.2"
          />
          {/* Ala izquierda inferior */}
          <path
            d="M30 35 C20 38, 10 44, 14 54 C18 60, 28 50, 31 38 Z"
            fill={colorMap.second}
            fillOpacity="0.75"
            stroke={colorMap.main}
            strokeWidth="1"
          />
          {/* Ala derecha superior */}
          <path
            d="M32 30 C36 14, 56 10, 58 22 C60 32, 46 38, 34 34 Z"
            fill={colorMap.main}
            fillOpacity="0.85"
            stroke={colorMap.second}
            strokeWidth="1.2"
          />
          {/* Ala derecha inferior */}
          <path
            d="M34 35 C44 38, 54 44, 50 54 C46 60, 36 50, 33 38 Z"
            fill={colorMap.second}
            fillOpacity="0.75"
            stroke={colorMap.main}
            strokeWidth="1"
          />
          {/* Detalles decorativos en las alas */}
          <circle cx="20" cy="24" r="3.5" fill={colorMap.detail} fillOpacity="0.8" />
          <circle cx="44" cy="24" r="3.5" fill={colorMap.detail} fillOpacity="0.8" />
          <circle cx="22" cy="46" r="2" fill={colorMap.detail} fillOpacity="0.8" />
          <circle cx="42" cy="46" r="2" fill={colorMap.detail} fillOpacity="0.8" />
          
          {/* Cuerpo y antenas */}
          <path
            d="M32 20 L32 44"
            stroke="#133238"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="32" cy="18" r="2.2" fill="#133238" />
          <path
            d="M31 16 C27 10, 24 10, 23 11 M33 16 C37 10, 40 10, 41 11"
            stroke="#133238"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

/**
 * Bouquet floral acuarelado para esquinas y marcos decorativos
 */
export const FloralBouquet: React.FC<{
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  flip?: boolean;
}> = ({ className = '', position = 'top-right', flip = false }) => {
  return (
    <div
      className={`pointer-events-none select-none ${className} ${
        flip ? 'scale-x-[-1]' : ''
      }`}
    >
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full drop-shadow-sm opacity-90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(10, 10)">
          {/* Hojas de fondo verdes/lavanda */}
          <path
            d="M60 90 C30 80, 10 50, 20 20 C50 30, 70 60, 60 90 Z"
            fill="#E8F0F5"
            fillOpacity="0.6"
          />
          <path
            d="M80 80 C110 50, 130 20, 110 10 C90 30, 80 60, 80 80 Z"
            fill="#FFFFFF"
            fillOpacity="0.8"
          />
          
          {/* Tallo orgánico */}
          <path
            d="M30 110 Q 70 80, 90 30"
            stroke="#2B7294"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M50 95 Q 100 90, 120 70"
            stroke="#2B7294"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Flor principal rosada acuarelada */}
          <g transform="translate(65, 55)">
            {/* Pétalos */}
            <ellipse cx="0" cy="-16" rx="12" ry="16" fill="#CEAB67" fillOpacity="0.9" />
            <ellipse cx="16" cy="-4" rx="16" ry="12" fill="#CEAB67" fillOpacity="0.85" />
            <ellipse cx="12" cy="14" rx="14" ry="12" fill="#CEAB67" fillOpacity="0.9" />
            <ellipse cx="-12" cy="14" rx="14" ry="12" fill="#CEAB67" fillOpacity="0.85" />
            <ellipse cx="-16" cy="-4" rx="16" ry="12" fill="#CEAB67" fillOpacity="0.9" />
            {/* Centro de la flor */}
            <circle cx="0" cy="0" r="9" fill="#CEAB67" fillOpacity="0.95" />
            <circle cx="0" cy="0" r="5" fill="#043651" fillOpacity="0.6" />
          </g>

          {/* Flor secundaria azul-violeta */}
          <g transform="translate(25, 40)">
            <ellipse cx="0" cy="-10" rx="8" ry="11" fill="#043651" fillOpacity="0.75" />
            <ellipse cx="10" cy="-2" rx="11" ry="8" fill="#2B7294" fillOpacity="0.8" />
            <ellipse cx="7" cy="8" rx="9" ry="8" fill="#043651" fillOpacity="0.7" />
            <ellipse cx="-7" cy="8" rx="9" ry="8" fill="#2B7294" fillOpacity="0.8" />
            <ellipse cx="-10" cy="-2" rx="11" ry="8" fill="#043651" fillOpacity="0.75" />
            <circle cx="0" cy="0" r="5.5" fill="#CEAB67" />
          </g>

          {/* Pequeños capullos y bayas doradas */}
          <circle cx="110" cy="40" r="4.5" fill="#CEAB67" />
          <circle cx="120" cy="32" r="3.5" fill="#CEAB67" />
          <circle cx="95" cy="20" r="4" fill="#2B7294" />
          <circle cx="40" cy="100" r="3" fill="#CEAB67" />
        </g>
      </svg>
    </div>
  );
};

/**
 * Marco decorativo floral para fotos y testimonios
 */
export const FloralPhotoFrame: React.FC<{
  children: React.ReactNode;
  className?: string;
  badgeText?: string;
}> = ({ children, className = '', badgeText }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Bouquet en esquina superior izquierda */}
      <FloralBouquet className="absolute -top-7 -left-7 w-24 h-24 z-20" />
      
      {/* Bouquet en esquina inferior derecha */}
      <FloralBouquet className="absolute -bottom-7 -right-7 w-24 h-24 z-20" flip />

      {/* Mariposa aleteando arriba */}
      <ButterflyGraphic
        className="absolute -top-5 right-6 z-30"
        size={38}
        color="purple"
      />

      {/* Mariposa pequeña abajo */}
      <ButterflyGraphic
        className="absolute bottom-4 -left-6 z-30"
        size={30}
        color="pink"
      />

      {/* Contenedor de la foto */}
      <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-white transform transition-transform duration-500 hover:scale-[1.02]">
        {children}
      </div>

      {badgeText && (
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-30 bg-white/95 px-4 py-1.5 rounded-full shadow-md border border-[#2B7294]/30 backdrop-blur-xs whitespace-nowrap">
          <span className="text-xs font-semibold text-[#043651] uppercase tracking-wider flex items-center gap-1.5">
            <span className="text-[#D4B26F]">★</span> {badgeText}
          </span>
        </div>
      )}
    </div>
  );
};

/**
 * Gran Silueta Orgánica Multicapa para el fondo derecho del Hero (inspirada en la referencia)
 */
export const HeroOrganicBackdrop: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute top-0 right-0 h-full w-full lg:w-[62%] pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 900 800"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="grad-purple-deep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#133238" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#043651" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#2B7294" stopOpacity="0.88" />
          </linearGradient>
          <linearGradient id="grad-lavender-soft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#043651" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#E8F0F5" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="grad-sky-glow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2B7294" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#CEAB67" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Capa 1: Halo de luz pastel exterior */}
        <path
          d="M320 0 C220 180, 260 380, 180 540 C120 660, 50 720, 0 800 L900 800 L900 0 Z"
          fill="url(#grad-sky-glow)"
        />

        {/* Capa 2: Curva lavanda intermedia */}
        <path
          d="M420 0 C300 160, 360 360, 290 520 C230 650, 160 720, 100 800 L900 800 L900 0 Z"
          fill="url(#grad-lavender-soft)"
        />

        {/* Capa 3: Silueta principal profunda azul-violeta / púrpura */}
        <path
          d="M520 0 C380 150, 440 330, 360 480 C290 610, 240 700, 180 800 L900 800 L900 0 Z"
          fill="url(#grad-purple-deep)"
        />

        {/* Capa 4: Montañas/Nubes celestiales internas en el fondo morado */}
        <path
          d="M620 120 C680 80, 780 90, 840 140 C880 170, 900 220, 900 280 L900 120 Z"
          fill="#133238"
          fillOpacity="0.4"
        />
        <path
          d="M480 320 C540 260, 660 280, 720 360 C760 410, 820 440, 900 450 L900 650 C800 680, 700 620, 620 540 C540 460, 420 380, 480 320 Z"
          fill="#133238"
          fillOpacity="0.25"
        />
        <path
          d="M580 480 C680 420, 800 460, 880 540 L900 560 L900 800 L380 800 C460 700, 500 540, 580 480 Z"
          fill="#133238"
          fillOpacity="0.35"
        />

        {/* Destellos celestiales sutiles */}
        <circle cx="680" cy="180" r="3" fill="#FFFFFF" fillOpacity="0.8" />
        <circle cx="750" cy="240" r="2" fill="#CEAB67" fillOpacity="0.9" />
        <circle cx="820" cy="140" r="4" fill="#FFFFFF" fillOpacity="0.6" />
        <circle cx="600" cy="300" r="2.5" fill="#CEAB67" fillOpacity="0.8" />
        <circle cx="720" cy="420" r="3" fill="#FFFFFF" fillOpacity="0.7" />
      </svg>
    </div>
  );
};

/**
 * Globo o Nube flotante ilustrada estilo "Thought Bubble" (como en la referencia)
 */
export const CloudThoughtBubble: React.FC<{
  className?: string;
  text?: string;
  subtitle?: string;
}> = ({ className = '', text = 'Quito, Ecuador', subtitle = 'Presencial & Online' }) => {
  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Contenedor principal con forma de nube */}
      <div className="relative bg-white/95 text-[#133238] px-5 py-2.5 rounded-full shadow-lg border border-[#E8F0F5] backdrop-blur-xs flex flex-col items-center text-center animate-float">
        <span className="text-xs sm:text-sm font-extrabold tracking-wide text-[#043651]">
          {text}
        </span>
        {subtitle && (
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#2B7294] -mt-0.5">
            {subtitle}
          </span>
        )}
      </div>

      {/* Burbujitas conectoras inferiores estilo pensamiento */}
      <div className="flex flex-col items-center gap-1 mt-1 -ml-6 pointer-events-none">
        <div className="w-2.5 h-2.5 rounded-full bg-white shadow-xs border border-[#E8F0F5]" />
        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-2xs border border-[#E8F0F5] -ml-2" />
      </div>
    </div>
  );
};

/**
 * Divisor inferior con forma de nubes esponjosas (fluffy clouds)
 */
export const CloudWaveDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1440 140"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16 sm:h-24 md:h-28"
      >
        {/* Sombra suave de nube detrás */}
        <path
          d="M0,80 C120,40 240,60 360,40 C480,20 600,70 720,45 C840,20 960,65 1080,35 C1200,10 1320,50 1440,30 L1440,140 L0,140 Z"
          fill="#E8F0F5"
          fillOpacity="0.4"
        />
        {/* Nubes blancas esponjosas frontales */}
        <path
          d="M0,95 C90,65 180,75 280,55 C380,35 460,75 560,50 C660,25 760,65 860,45 C960,25 1060,60 1160,40 C1260,20 1360,55 1440,40 L1440,140 L0,140 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
};

/**
 * Árbol botánico floral acuarelado (estilo sakura/cerezo andino de la referencia)
 */
export const BloomingBotanicalTree: React.FC<{
  className?: string;
  flip?: boolean;
}> = ({ className = '', flip = false }) => {
  return (
    <div className={`pointer-events-none select-none ${className} ${flip ? 'scale-x-[-1]' : ''}`}>
      <svg
        viewBox="0 0 200 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-85 drop-shadow-xs"
      >
        {/* Tronco */}
        <path
          d="M90,170 C95,130 85,110 95,85 C100,75 110,65 120,55 M95,85 C85,75 75,65 65,60"
          stroke="#7A6052"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Copa esponjosa rosada / lavanda */}
        <ellipse cx="65" cy="55" rx="35" ry="30" fill="#CEAB67" fillOpacity="0.88" />
        <ellipse cx="120" cy="50" rx="40" ry="32" fill="#CEAB67" fillOpacity="0.9" />
        <ellipse cx="90" cy="35" rx="45" ry="35" fill="#E8F0F5" fillOpacity="0.85" />
        <ellipse cx="95" cy="55" rx="35" ry="28" fill="#CEAB67" fillOpacity="0.95" />
        
        {/* Detalles florales */}
        <circle cx="70" cy="40" r="4" fill="#FFFFFF" fillOpacity="0.8" />
        <circle cx="110" cy="35" r="5" fill="#CEAB67" fillOpacity="0.8" />
        <circle cx="95" cy="65" r="4" fill="#2B7294" fillOpacity="0.7" />
        <circle cx="135" cy="55" r="4.5" fill="#FFFFFF" fillOpacity="0.8" />
      </svg>
    </div>
  );
};

/**
 * Ícono Oficial de WhatsApp con trazado vectorial de alta definición
 */
export const WhatsAppOfficialIcon: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
};

/**
 * Ícono Oficial de Calendario con Reloj para Agendar Cita (Trazado exacto de la referencia)
 */
export const AgendarCalendarIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-5 h-5',
  size = 20,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* 3 ganchos superiores del calendario */}
      <path d="M7 2.5V5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M12 2.5V5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M17 2.5V5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      {/* Línea horizontal divisoria */}
      <path d="M3.5 9.5H20.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      {/* Cuerpo redondeado del calendario */}
      <path
        d="M18.5 4.5H5.5C4.12 4.5 3 5.62 3 7V17C3 18.38 4.12 19.5 5.5 19.5H10.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 11V7C21 5.62 19.88 4.5 18.5 4.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Reloj en esquina inferior derecha */}
      <circle cx="16.5" cy="16.5" r="4.5" stroke="currentColor" strokeWidth="2.2" />
      <path d="M16.5 14V16.5L18.2 18.2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

/**
 * Ícono Oficial de Portapapeles con Lápiz para Solicitar Evaluación (Trazado exacto de la referencia)
 */
export const SolicitarEvaluacionIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-5 h-5',
  size = 20,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Clip superior */}
      <path
        d="M8.5 2H15.5C16.0523 2 16.5 2.44772 16.5 3V5H7.5V3C7.5 2.44772 7.94772 2 8.5 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Tabla portapapeles */}
      <path
        d="M17 4.5H19C19.8284 4.5 20.5 5.17157 20.5 6V19.5C20.5 20.3284 19.8284 21 19 21H5C4.17157 21 3.5 20.3284 3.5 19.5V6C3.5 5.17157 4.17157 4.5 5 4.5H7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Casilla 1 + Check */}
      <rect x="6.5" y="8" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 9.5L13.5 11L16.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Casilla 2 + Check */}
      <rect x="6.5" y="13" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 14.5L13.5 16L15.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Lápiz inclinado a la derecha */}
      <path
        d="M16 12L20.5 7.5L22 9L17.5 13.5L15.5 14L16 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

