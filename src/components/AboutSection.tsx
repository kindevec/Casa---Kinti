import React from 'react';
import { FloralPhotoFrame, FloralBouquet, ButterflyGraphic } from './FloralDecorations';
import { CERTIFICATIONS } from '../data';
import { GraduationCap, Brain, Leaf, Sparkles, Quote, Heart, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#6B7FD1]" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#9B8FD9]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#12A89D]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#F5C84C]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#6B7FD1]" />;
    }
  };

  return (
    <section
      id="sobre-mi"
      className="relative py-24 bg-gradient-to-b from-[#DCEEFB]/50 via-[#FFFFFF] to-[#C9D4F5]/30 overflow-hidden"
    >
      {/* Decoraciones de fondo */}
      <FloralBouquet className="absolute -top-12 -left-12 w-48 h-48 opacity-50 -z-5" />
      <FloralBouquet className="absolute bottom-6 right-0 w-44 h-44 opacity-50 -z-5" flip />
      <ButterflyGraphic className="absolute top-1/4 right-[12%] opacity-70" size={34} color="purple" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de Sección */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#C9D4F5]/60 text-[#6B7FD1] text-xs font-bold uppercase tracking-[0.2em] border border-[#9B8FD9]/30">
            <span>Conoce a tu Guía</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#3E4A7A]">
            Sobre Mí &{' '}
            <span className="font-script text-[#9B8FD9] text-4xl sm:text-5xl md:text-6xl font-normal">
              Casa Kinti
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#3E4A7A]/80 font-normal">
            La convergencia entre la ciencia del aprendizaje infantil y la sabiduría ancestral de sanación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Columna Izquierda: Foto de Johanna enmarcada */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <FloralPhotoFrame
              badgeText="Johanna Proaño"
              className="max-w-[340px] sm:max-w-[380px] w-full"
            >
              {/* reemplazar con foto real: Retrato profesional y cálido de Johanna Proaño sonriendo en su espacio terapéutico Casa Kinti */}
              <div className="relative aspect-4/5 w-full bg-[#E7F3FC] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Johanna Proaño - Fundadora de Casa Kinti en Quito"
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E4A7A]/30 via-transparent to-transparent" />
              </div>
            </FloralPhotoFrame>

            {/* Frase Cita Destacada en Script debajo de la foto */}
            <div className="mt-8 relative bg-white/80 p-5 rounded-2xl border border-[#9B8FD9]/30 shadow-xs max-w-sm text-center">
              <Quote className="w-5 h-5 text-[#9B8FD9] mx-auto mb-2 opacity-60" />
              <p className="font-script text-2xl sm:text-3xl text-[#6B7FD1] leading-relaxed">
                "Sanar el presente para florecer el futuro de nuestras familias."
              </p>
              <span className="text-[11px] font-bold text-[#3E4A7A] uppercase tracking-wider block mt-2">
                — Johanna Proaño
              </span>
            </div>
          </div>

          {/* Columna Derecha: Trayectoria, Historia y Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-4">
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#3E4A7A]">
                Hola, soy Johanna Proaño
              </h3>
              
              <p className="text-base text-[#3E4A7A]/85 leading-relaxed">
                Soy <strong>Educadora Infantil Bilingüe</strong>, <strong>Máster en Problemas de Aprendizaje</strong>, <strong>Terapeuta en Flores de Bach y Herbolaria</strong>, y <strong>Mujer Medicina certificada</strong> en tradiciones ancestrales andinas.
              </p>

              <p className="text-base text-[#3E4A7A]/85 leading-relaxed">
                Fundé <strong>Casa Kinti</strong> en Quito con una convicción profunda: la salud emocional y espiritual de los adultos está íntimamente ligada al desarrollo pleno y sin barreras de los niños. Tras años de docencia y acompañamiento psicopedagógico, comprendí que para desbloquear el potencial cognitivo de un niño o la paz mental de un adulto, es necesario atender la energía, el entorno familiar y la sabiduría natural.
              </p>
            </div>

            {/* Badges de Certificaciones / Especialidades */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B7FD1] mb-4 flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#9B8FD9]" />
                <span>Formación & Especialidades Integrativas</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {CERTIFICATIONS.map((cert, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white/90 border border-[#C9D4F5] shadow-xs hover:shadow-md transition-all duration-300 hover:border-[#9B8FD9]/60 hover:-translate-y-0.5 flex items-start gap-3"
                  >
                    <div className="p-2.5 rounded-xl bg-[#DCEEFB] shrink-0 border border-[#9B8FD9]/20">
                      {getCertIcon(cert.icon)}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-[#3E4A7A] leading-snug">
                        {cert.title}
                      </h5>
                      <span className="text-[11px] text-[#6B7FD1] font-semibold block mt-0.5">
                        {cert.institution}
                      </span>
                      <p className="text-xs text-[#3E4A7A]/75 mt-1 leading-normal">
                        {cert.highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compromiso */}
            <div className="pt-2 flex items-center gap-3 bg-[#DCEEFB]/60 p-4 rounded-2xl border border-[#9B8FD9]/30">
              <CheckCircle2 className="w-5 h-5 text-[#12A89D] shrink-0" />
              <p className="text-xs sm:text-sm text-[#3E4A7A] font-medium leading-normal">
                Cada consulta se realiza en un espacio de confidencialidad absoluta, calidez humana y respeto profundo por tu proceso.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
