import React from 'react';
import OrbitImages from './OrbitCircles';
import { CasaKintiLogo } from './FloralDecorations';

interface PillarCard {
  text: string;
  iconSrc: string;
  iconAlt: string;
  bgColor: string;
  borderColor: string;
}

export const CredentialsStrip: React.FC = () => {
  const [isPaused, setIsPaused] = React.useState(false);

  const pillars: PillarCard[] = [
    {
      text: 'Educación Infantil Bilingüe',
      iconSrc: '/icons/pillar-educadora.png',
      iconAlt: 'Educación Infantil Bilingüe',
      bgColor: 'bg-[#E8F0F5]',
      borderColor: 'border-[#2B7294]/40',
    },
    {
      text: 'Problemas de Aprendizaje',
      iconSrc: '/icons/pillar-aprendizaje.png',
      iconAlt: 'Problemas de Aprendizaje',
      bgColor: 'bg-[#CEAB67]',
      borderColor: 'border-[#CEAB67]',
    },
    {
      text: 'Flores de Bach y Herbolario',
      iconSrc: '/icons/pillar-flores-bach.png',
      iconAlt: 'Flores de Bach y Herbolario',
      bgColor: 'bg-[#E8F0F5]',
      borderColor: 'border-[#2B7294]/30',
    },
    {
      text: 'Medicina Ancestral',
      iconSrc: '/icons/pillar-medicina.png',
      iconAlt: 'Medicina Ancestral',
      bgColor: 'bg-[#E8F0F5]',
      borderColor: 'border-[#2B7294]/40',
    },
  ];

  const customItems = pillars.map((pillar, idx) => (
    <div
      key={idx}
      className={`group relative rounded-full aspect-square w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 ${pillar.bgColor} ${pillar.borderColor} border-2 shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center text-center p-3 sm:p-4 cursor-pointer select-none`}
    >
      {/* Icono ilustrado */}
      <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 flex items-center justify-center mb-1 sm:mb-2">
        <img
          src={pillar.iconSrc}
          alt={pillar.iconAlt}
          loading="lazy"
          className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Texto actualizado */}
      <span className="font-bold text-[10px] sm:text-[11px] md:text-xs text-black text-center leading-snug px-1 line-clamp-2 sm:line-clamp-none">
        {pillar.text}
      </span>
    </div>
  ));

  return (
    <div className="relative z-30 -mt-10 sm:-mt-14 md:-mt-16 pb-12 sm:pb-16 overflow-visible">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Componente Orbital con los 4 círculos en movimiento interactivo */}
        <div
          className="relative w-full py-4 flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <OrbitImages
            customItems={customItems}
            shape="ellipse"
            baseWidth={900}
            radiusX={360}
            radiusY={140}
            itemSize={180}
            duration={32}
            rotation={-4}
            paused={isPaused}
            showPath={true}
            pathColor="rgba(43, 114, 148, 0.35)"
            pathWidth={2}
            centerContent={
              <div className="p-4 sm:p-6 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-[#E8F0F5] flex flex-col items-center justify-center text-center pointer-events-auto">
                <CasaKintiLogo size="sm" />
              </div>
            }
          />
        </div>

      </div>
    </div>
  );
};
