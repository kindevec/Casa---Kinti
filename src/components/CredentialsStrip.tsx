import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PillarCard {
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  imageAlt: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  accentColor: string;
  link: string;
}

export const CredentialsStrip: React.FC = () => {
  const pillars: PillarCard[] = [
    {
      title: 'Educadora Infantil',
      subtitle: 'Bilingüe & Estimulación Temprana',
      tag: 'Educación & Crianza',
      image: '/pillars/educadora.png',
      imageAlt: 'Educadora Infantil Bilingüe en Casa Kinti',
      bgColor: 'bg-[#C9D4F5]/85 hover:bg-[#C9D4F5]',
      borderColor: 'border-[#9B8FD9]/40',
      textColor: 'text-[#3E4A7A]',
      accentColor: 'text-[#6B7FD1]',
      link: '#servicios',
    },
    {
      title: 'Psicopedagogía',
      subtitle: 'Máster en Dificultades de Aprendizaje',
      tag: 'Psicopedagogía Clínica',
      image: '/pillars/aprendizaje.png',
      imageAlt: 'Máster en Problemas de Aprendizaje',
      bgColor: 'bg-[#F0C6D9]/85 hover:bg-[#F0C6D9]',
      borderColor: 'border-[#F0C6D9]',
      textColor: 'text-[#3E4A7A]',
      accentColor: 'text-[#D4708A]',
      link: '#servicios',
    },
    {
      title: 'Terapia Floral',
      subtitle: 'Flores de Bach & Herbolaria Viva',
      tag: 'Sanación Botánica',
      image: '/pillars/flores-bach.png',
      imageAlt: 'Terapeuta en Flores de Bach y Herbolaria',
      bgColor: 'bg-[#D2F4EE]/90 hover:bg-[#D2F4EE]',
      borderColor: 'border-[#12A89D]/30',
      textColor: 'text-[#3E4A7A]',
      accentColor: 'text-[#12A89D]',
      link: '#productos',
    },
    {
      title: 'Mujer Medicina',
      subtitle: 'Tradición & Sabiduría Andina',
      tag: 'Medicina Ancestral',
      image: '/pillars/medicina-ancestral.png',
      imageAlt: 'Mujer Medicina Certificada en Sabiduría Andina',
      bgColor: 'bg-[#E2DBF7]/90 hover:bg-[#E2DBF7]',
      borderColor: 'border-[#9B8FD9]/40',
      textColor: 'text-[#3E4A7A]',
      accentColor: 'text-[#9B8FD9]',
      link: '#servicios',
    },
  ];

  return (
    <section className="relative z-20 py-16 sm:py-20 bg-gradient-to-b from-[#FFFFFF] via-[#F4F8FD] to-[#FFFFFF] border-y border-[#C9D4F5]/50 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de los 4 Pilares */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DCEEFB] text-[#6B7FD1] text-xs font-bold uppercase tracking-[0.2em] border border-[#C9D4F5]">
            <Sparkles className="w-3.5 h-3.5 text-[#9B8FD9]" />
            <span>Formación & Especialidades Integradas</span>
          </div>
          
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#3E4A7A] tracking-tight">
            Nuestros Cuatro{' '}
            <span className="font-script text-4xl sm:text-5xl text-[#9B8FD9] font-normal">
              Pilares de Sanación
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#3E4A7A]/80 font-normal">
            Una sinergia única entre la ciencia del aprendizaje infantil y la medicina holística ancestral.
          </p>
        </div>

        {/* Rejilla de los 4 Contenedores Visuales Estilo Referencia */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 pt-4 pb-12">
          {pillars.map((pillar, idx) => (
            <a
              key={idx}
              href={pillar.link}
              className={`group relative rounded-3xl ${pillar.bgColor} ${pillar.borderColor} border p-6 sm:p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between overflow-visible min-h-[340px] cursor-pointer`}
            >
              {/* Encabezado de la Tarjeta */}
              <div className="space-y-1 relative z-20">
                <span className="text-[11px] font-bold uppercase tracking-wider opacity-75 block text-[#3E4A7A]">
                  {pillar.tag}
                </span>

                <h3 className={`font-serif-display text-2xl sm:text-[26px] font-bold ${pillar.textColor} leading-tight`}>
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#3E4A7A]/80 font-medium leading-snug pt-1">
                  {pillar.subtitle}
                </p>

                <div className="pt-2 flex items-center gap-1 text-xs font-bold text-[#3E4A7A] group-hover:text-[#6B7FD1] transition-colors">
                  <span>Conoce más</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Imagen 3D que desborda/rompe el borde inferior del contenedor */}
              <div className="relative -mb-10 sm:-mb-14 mt-4 h-44 sm:h-48 w-full flex items-end justify-center pointer-events-none z-30">
                <img
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  loading="lazy"
                  className="max-h-full w-auto object-contain drop-shadow-xl group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500"
                />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
