import React from 'react';

interface PillarCard {
  text: string;
  image: string;
  imageAlt: string;
  bgColor: string;
  borderColor: string;
}

export const CredentialsStrip: React.FC = () => {
  const pillars: PillarCard[] = [
    {
      text: 'EDUCADORA INFANTIL BILINGÜE',
      image: '/pillars/educadora.png',
      imageAlt: 'Educadora Infantil Bilingüe',
      bgColor: 'bg-[#C9D4F5]',
      borderColor: 'border-[#9B8FD9]/30',
    },
    {
      text: 'MÁSTER EN PROBLEMAS DE APRENDIZAJE',
      image: '/pillars/aprendizaje.png',
      imageAlt: 'Máster en Problemas de Aprendizaje',
      bgColor: 'bg-[#F0C6D9]',
      borderColor: 'border-[#F0C6D9]',
    },
    {
      text: 'TERAPEUTA EN FLORES DE BACH Y HERBOLARIA',
      image: '/pillars/flores-bach.png',
      imageAlt: 'Terapeuta en Flores de Bach y Herbolaria',
      bgColor: 'bg-[#D2F4EE]',
      borderColor: 'border-[#12A89D]/20',
    },
    {
      text: 'MUJER MEDICINA CERTIFICADA EN MEDICINA ANCESTRAL',
      image: '/pillars/medicina-ancestral.png',
      imageAlt: 'Mujer Medicina Certificada en Medicina Ancestral',
      bgColor: 'bg-[#E2DBF7]',
      borderColor: 'border-[#9B8FD9]/30',
    },
  ];

  return (
    <div className="relative z-30 -mt-10 sm:-mt-14 md:-mt-16 pb-16 sm:pb-20 overflow-visible">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rejilla de los 4 Contenedores Centrados y Encajados */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-stretch justify-center">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl ${pillar.bgColor} ${pillar.borderColor} border shadow-lg hover:shadow-xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between items-center text-center overflow-visible min-h-[220px] sm:min-h-[250px] md:min-h-[270px]`}
            >
              {/* Texto original en mayúsculas centrado */}
              <div className="w-full flex items-center justify-center min-h-[44px] sm:min-h-[50px] relative z-10">
                <span className="font-extrabold text-xs sm:text-[13px] md:text-sm tracking-wide text-[#3E4A7A] uppercase text-center leading-snug">
                  {pillar.text}
                </span>
              </div>

              {/* Imagen 3D desbordante hacia abajo */}
              <div className="relative -mb-8 sm:-mb-10 md:-mb-12 mt-2 h-32 sm:h-36 md:h-40 w-full flex items-end justify-center pointer-events-none z-20">
                <img
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  loading="lazy"
                  className="max-h-full w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
