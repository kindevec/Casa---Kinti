import React from 'react';
import { Quote, CheckCircle2, BookOpen, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloralBouquet, ButterflyGraphic } from './FloralDecorations';
import OrbitImages from './OrbitCircles';
import { AnimatedConstructPhoto } from './AnimatedConstructPhoto';
import { useNicheMode } from '../context/NicheContext';

const ABOUT_CIRCLES = [
  {
    title: 'Educadora Infantil Bilingüe',
    iconSrc: '/icons/pillar-educadora.png',
    iconAlt: 'Educadora Infantil Bilingüe',
    bgColor: 'bg-[#C9D4F5]',
    borderColor: 'border-[#9B8FD9]/40',
  },
  {
    title: 'Máster en Problemas de Aprendizaje',
    iconSrc: '/icons/pillar-aprendizaje.png',
    iconAlt: 'Máster en Problemas de Aprendizaje',
    bgColor: 'bg-[#F0C6D9]',
    borderColor: 'border-[#F0C6D9]',
  },
  {
    title: 'Terapeuta en Flores de Bach y Herbolaria',
    iconSrc: '/icons/pillar-flores-bach.png',
    iconAlt: 'Terapeuta en Flores de Bach y Herbolaria',
    bgColor: 'bg-[#D2F4EE]',
    borderColor: 'border-[#12A89D]/30',
  },
  {
    title: 'Mujer Medicina Certificada en Medicina Ancestral',
    iconSrc: '/icons/pillar-medicina.png',
    iconAlt: 'Mujer Medicina Certificada en Medicina Ancestral',
    bgColor: 'bg-[#E2DBF7]',
    borderColor: 'border-[#9B8FD9]/40',
  },
];

export const AboutSection: React.FC = () => {
  const { mode } = useNicheMode();

  return (
    <section
      id="sobre-mi"
      className="relative w-full overflow-hidden pt-6 sm:pt-10 pb-16 sm:pb-20 bg-gradient-to-b from-[#E8F3FD] via-[#F4F9FE] to-[#E8F3FD] transition-colors duration-500"
    >
      {/* Decoraciones botánicas idénticas al resto de las secciones */}
      <FloralBouquet className="absolute top-8 right-6 w-44 h-44 opacity-35 -z-5" />
      <FloralBouquet className="absolute bottom-8 left-6 w-44 h-44 opacity-35 -z-5" flip />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            CABECERA PRINCIPAL: SOBRE MÍ (Diseño unificado)
           ======================================================== */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative mb-12 sm:mb-16">
          <FloralBouquet className="absolute -top-6 -left-6 w-32 h-32 opacity-60 pointer-events-none hidden sm:block" />
          <FloralBouquet className="absolute -bottom-6 -right-6 w-32 h-32 opacity-60 pointer-events-none hidden sm:block" flip />
          <ButterflyGraphic className="absolute top-4 right-6 sm:right-10" size={36} color="purple" />
          <ButterflyGraphic className="absolute bottom-2 left-6 sm:left-10" size={28} color="pink" />

          <div key={mode + '-about-header'} className="space-y-3 relative z-10 animate-in fade-in duration-300">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B7FD1] block">
              {mode === 'educacion'
                ? 'TRAYECTORIA & VOCACIÓN DOCENTE'
                : 'SABIDURÍA & VOCACIÓN DE SERVICIO'}
            </span>

            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#3E4A7A]">
              Conoce a Johanna Proaño{' '}
              <span className="font-script text-[#9B8FD9] text-5xl sm:text-6xl font-normal block sm:inline">
                y Casa Kinti
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#3E4A7A]/80 font-normal leading-relaxed max-w-2xl mx-auto">
              {mode === 'educacion'
                ? 'Educadora infantil bilingüe y Máster en Problemas de Aprendizaje con más de 15 años guiando a familias y niños hacia su máximo potencial.'
                : 'Terapeuta floral de Bach, herbolaria medicinal y mujer medicina ancestral consagrada al bienestar integral en Quito.'}
            </p>
          </div>
        </div>

        {/* ========================================================
            DISPOSICIÓN EDITORIAL: HISTORIA & CÍRCULOS (IZQ 6) + FOTO & CITA (DER 6)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Lado Izquierdo: Historia y Círculos Orbitales Giratorios (lg:col-span-6, 50% ANCHO) */}
          <div className="lg:col-span-6 space-y-6 text-[#3E4A7A] w-full max-w-[520px] mx-auto lg:mx-0">
            
            {/* Título Principal y 2 Párrafos de Historia (Unificados para ambos nichos, Justificados, 4 líneas cada uno) */}
            <div className="space-y-3.5">
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#3E4A7A]">
                Hola, soy Johanna Proaño
              </h3>
              
              <p className="text-sm sm:text-base text-[#3E4A7A]/85 leading-relaxed font-normal text-justify">
                Fundé <strong>Casa Kinti</strong> en Quito con la convicción profunda de que el bienestar emocional y espiritual de la familia es la base indispensable para el desarrollo pleno de los niños. Tras años de experiencia docente y terapéutica, comprendí que mente, corazón y energía deben atenderse en conjunto para desbloquear el verdadero potencial humano.
              </p>

              <p className="text-sm sm:text-base text-[#3E4A7A]/85 leading-relaxed font-normal text-justify">
                En nuestro espacio convergen armónicamente la ciencia del aprendizaje infantil y la sabiduría de la medicina natural. Acompaño de forma cercana a niños, jóvenes y adultos a superar barreras pedagógicas y desequilibrios energéticos, brindando herramientas personalizadas en un entorno seguro, amoroso y de confidencialidad absoluta.
              </p>
            </div>

            {/* Círculos con Animación Giratoria Circular (Los 4 Pilares de Johanna) */}
            <div className="pt-1">
              <div className="w-full max-w-[460px] sm:max-w-[500px] mx-auto py-2 flex items-center justify-center overflow-visible">
                <OrbitImages
                  customItems={ABOUT_CIRCLES.map((item, idx) => (
                    <div
                      key={idx}
                      className={`group relative rounded-full aspect-square w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 ${item.bgColor} ${item.borderColor} border-2 shadow-2xl hover:scale-106 transition-all duration-300 flex flex-col justify-center items-center text-center p-3 sm:p-3.5 cursor-pointer select-none`}
                    >
                      {/* Mismo icono ilustrado del banner ampliado */}
                      <div className="w-11 h-11 sm:w-13 sm:h-13 md:w-15 md:h-15 flex items-center justify-center mb-1 shrink-0">
                        <img
                          src={item.iconSrc}
                          alt={item.iconAlt}
                          loading="lazy"
                          className="max-h-full max-w-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Título completo sin cortes ni truncamientos */}
                      <span className="font-bold text-[11px] sm:text-xs md:text-[13px] text-[#3E4A7A] text-center leading-snug px-1.5 break-words">
                        {item.title}
                      </span>
                    </div>
                  ))}
                  shape="circle"
                  baseWidth={450}
                  radius={136}
                  aspectRatio="1 / 1"
                  itemSize={180}
                  duration={14}
                  rotation={0}
                  paused={false}
                  showPath={false}
                />
              </div>
            </div>

          </div>

          {/* Lado Derecho: Foto Animada Construcción/Destrucción, Cita Libre & Barra de Consulta (lg:col-span-6, 50% ANCHO) */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end gap-6 w-full max-w-[520px] mx-auto lg:mx-0">
            
            {/* Fotografía con animación continua de Construcción y Destrucción por piezas */}
            <div className="w-full flex justify-center lg:justify-end">
              <AnimatedConstructPhoto
                imageSrc="/johanna-sobre-mi.jpg"
                alt="Johanna Proaño - Casa Kinti"
                aspectRatio="portrait"
                className="w-full max-h-[620px]"
              />
            </div>

            {/* Cita centrada libre sin contenedor */}
            <div className="w-full text-center flex flex-col items-center justify-center py-1">
              <Quote className="w-6 h-6 text-[#9B8FD9] mb-1.5 opacity-80" />
              <p className="font-script text-2xl sm:text-3xl md:text-4xl text-[#6B7FD1] leading-snug text-center">
                {mode === 'educacion'
                  ? 'Acompañar a un niño es sembrar confianza para toda su vida.'
                  : 'Sanar el presente para florecer el futuro de nuestras familias.'}
              </p>
              <span className="text-xs sm:text-sm font-bold text-[#3E4A7A] uppercase tracking-widest block mt-2 text-center">
                — Johanna Proaño
              </span>
            </div>

            {/* Barra de Consulta ubicada después de la frase */}
            <div className="w-full">
              <div className="flex items-center gap-3 bg-[#DCEEFB]/70 p-4 rounded-2xl border border-[#9B8FD9]/30 w-full shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#12A89D] shrink-0" />
                <p className="text-xs sm:text-sm text-[#3E4A7A] font-medium leading-normal">
                  {mode === 'educacion'
                    ? 'Cada valoración y acompañamiento pedagógico se brinda con calidez humana, empatía y compromiso ético con el desarrollo de tu hijo.'
                    : 'Cada consulta se realiza en un espacio de confidencialidad absoluta, calidez humana y respeto profundo por tu proceso.'}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================
            CTA DE TRANSICIÓN (UBICADO DESPUÉS DE SOBRE MÍ)
           ======================================================== */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 text-center relative border-t border-[#C9D4F5]/50 mt-16 sm:mt-20">
          <FloralBouquet className="absolute -top-6 -left-6 w-32 h-32 opacity-60 pointer-events-none hidden sm:block" />
          <FloralBouquet className="absolute -bottom-6 -right-6 w-32 h-32 opacity-60 pointer-events-none hidden sm:block" flip />
          <ButterflyGraphic className="absolute top-8 right-10" size={36} color="purple" />
          <ButterflyGraphic className="absolute bottom-6 left-10" size={28} color="pink" />

          <div key={mode + '-cta-banner'} className="space-y-4 relative z-10 animate-in fade-in duration-300">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B7FD1]">
              {mode === 'educacion'
                ? 'DESPIERTA SU MÁXIMO POTENCIAL'
                : 'DA EL PRIMER PASO HOY'}
            </span>

            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#3E4A7A]">
              {mode === 'educacion' ? (
                <>
                  Impulsa su aprendizaje{' '}
                  <span className="font-script text-[#9B8FD9] text-5xl sm:text-6xl font-normal block sm:inline">
                    con confianza
                  </span>
                </>
              ) : (
                <>
                  Tu bienestar{' '}
                  <span className="font-script text-[#9B8FD9] text-5xl sm:text-6xl font-normal block sm:inline">
                    comienza ahora
                  </span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-[#3E4A7A]/80 font-normal leading-relaxed max-w-2xl mx-auto">
              {mode === 'educacion'
                ? 'Acompañamos a tus hijos con diagnóstico psicopedagógico especializado, estimulación bilingüe temprana y métodos personalizados para que aprendan motivados, seguros y sin bloqueos.'
                : 'Permítenos acompañarte en un viaje de equilibrio, claridad y desarrollo. Estamos listos para recibirte en nuestro santuario de sanación o de forma virtual.'}
            </p>

            <div className="pt-3 sm:pt-4">
              <a
                href="#booking-form"
                className="inline-flex items-center gap-2 bg-[#6B7FD1] hover:bg-[#9B8FD9] text-black text-base font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {mode === 'educacion' ? (
                  <>
                    <BookOpen className="w-5 h-5 text-black" />
                    <span>Solicitar Evaluación Psicopedagógica</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5 text-black" />
                    <span>Completar Formulario de Reserva</span>
                  </>
                )}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
