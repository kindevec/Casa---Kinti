import React, { useState } from 'react';
import { useNicheMode } from '../context/NicheContext';
import OrbitImages from './OrbitCircles';
import Stack from './Stack';
import {
  ButterflyGraphic,
  FloralBouquet,
  HeroOrganicBackdrop,
  BloomingBotanicalTree,
  AgendarCalendarIcon,
  SolicitarEvaluacionIcon,
} from './FloralDecorations';
import {
  Calendar,
  ArrowDown,
} from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_PHONE, WHATSAPP_DEFAULT_MSG } from '../data';

export const HeroSection: React.FC = () => {
  const { mode, setMode } = useNicheMode();
  const [isOrbitPaused, setIsOrbitPaused] = useState(false);
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;

  // Tarjetas para el modo Holística
  const cardsHolistica = [
    {
      id: 1,
      image: '/johanna-hero.png',
      alt: 'Johanna Proaño realizando sesión de medicina integrativa y limpias ancestrales',
      description: 'Sesión de Medicina Integrativa, Bioenergética & Limpias Ancestrales',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
      alt: 'Flores de Bach y preparados botánicos medicinales',
      description: 'Terapia con Flores de Bach, Herbolaria & Medicina Andina',
    },
    {
      id: 3,
      image: '/tarot-hero.png',
      alt: 'Lectura de tarot terapéutico con cristales, péndulos y runas sagradas',
      description: 'Lectura de Tarot Terapéutico Evolutivo & Autoconocimiento',
    },
    {
      id: 4,
      image: '/pulseras-amuletos.png',
      alt: 'Pulseras Amuletos de piedras naturales consagradas con estudio radiestésico',
      description: 'Amuletos Consagrados & Protección Energética Personalizada',
    },
  ];

  // Tarjetas para el modo Educación
  const cardsEducacion = [
    {
      id: 101,
      // <!-- reemplazar con foto real: taller de educación bilingüe -->
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      alt: 'Taller de educación infantil bilingüe y estimulación temprana',
      description: 'Estimulación Temprana & Educación Infantil Bilingüe',
    },
    {
      id: 102,
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
      alt: 'Sesión de apoyo para problemas y dificultades de aprendizaje',
      description: 'Diagnóstico Psicopedagógico & Apoyo en Problemas de Aprendizaje',
    },
    {
      id: 103,
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
      alt: 'Evaluación psicopedagógica y desarrollo cognitivo infantil',
      description: 'Evaluación Integral del Aprendizaje & Adecuación Curricular',
    },
  ];

  const currentCards = mode === 'educacion' ? cardsEducacion : cardsHolistica;

  const orbitPillarsHolistica = [
    {
      text: 'Flores de Bach',
      iconSrc: '/icons/pillar-flores-bach.png',
      iconAlt: 'Flores de Bach y Herbolario',
      bgColor: 'bg-[#D2F4EE]',
      borderColor: 'border-[#12A89D]/30',
    },
    {
      text: 'Medicina Ancestral',
      iconSrc: '/icons/pillar-medicina.png',
      iconAlt: 'Medicina Ancestral',
      bgColor: 'bg-[#E2DBF7]',
      borderColor: 'border-[#9B8FD9]/40',
    },
    {
      text: 'Tarot Terapéutico',
      iconSrc: '/icons/pillar-flores-bach.png',
      iconAlt: 'Tarot Terapéutico',
      bgColor: 'bg-[#C9D4F5]',
      borderColor: 'border-[#9B8FD9]/40',
    },
    {
      text: 'Limpiezas Energéticas',
      iconSrc: '/icons/pillar-medicina.png',
      iconAlt: 'Limpiezas Energéticas',
      bgColor: 'bg-[#F0C6D9]',
      borderColor: 'border-[#F0C6D9]',
    },
  ];

  const orbitPillarsEducacion = [
    {
      text: 'Educación Bilingüe',
      iconSrc: '/icons/pillar-educadora.png',
      iconAlt: 'Educación Infantil Bilingüe',
      bgColor: 'bg-[#C9D4F5]',
      borderColor: 'border-[#9B8FD9]/40',
    },
    {
      text: 'Problemas de Aprendizaje',
      iconSrc: '/icons/pillar-aprendizaje.png',
      iconAlt: 'Problemas de Aprendizaje',
      bgColor: 'bg-[#F0C6D9]',
      borderColor: 'border-[#F0C6D9]',
    },
    {
      text: 'Estimulación Temprana',
      iconSrc: '/icons/pillar-educadora.png',
      iconAlt: 'Estimulación Temprana',
      bgColor: 'bg-[#D2F4EE]',
      borderColor: 'border-[#12A89D]/30',
    },
    {
      text: 'Psicopedagogía Máster',
      iconSrc: '/icons/pillar-aprendizaje.png',
      iconAlt: 'Psicopedagogía Máster',
      bgColor: 'bg-[#E2DBF7]',
      borderColor: 'border-[#9B8FD9]/40',
    },
  ];

  const currentOrbitPillars = mode === 'educacion' ? orbitPillarsEducacion : orbitPillarsHolistica;

  /* Manejador de CTA Principal "Agenda tu cita" con preselección del nicho activo */
  const handleAgendaCita = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const selectElem = document.querySelector('select[name="serviceOfInterest"]') as HTMLSelectElement | null;
    if (selectElem) {
      const targetValue =
        mode === 'educacion'
          ? 'Asesoría en Problemas de Aprendizaje ($35)'
          : 'Limpias y Medicina Ancestral ($25+)';
      selectElem.value = targetValue;
      selectElem.dispatchEvent(new Event('change', { bubbles: true }));
    }

    const contactSection = document.querySelector('#contacto') || document.querySelector('#booking-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      data-mode={mode}
      className="relative min-h-[96vh] pt-28 md:pt-36 pb-0 flex flex-col justify-between overflow-visible z-20 transition-all duration-400"
    >
      {/* ========================================================
          FONDO BASE Y SILUETA ORGÁNICA MULTICAPA (REFERENCIA)
         ======================================================== */}
      {/* Fondo pastel suave izquierdo / base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DCEEFB] via-[#E7F3FC] to-[#F0C6D9]/40 pointer-events-none -z-20" />

      {/* Silueta orgánica curva multicapa derecha */}
      <HeroOrganicBackdrop className="-z-10" />



      {/* ========================================================
          MARIPOSAS FLOTANTES Y BOTÁNICOS ORGÁNICOS
         ======================================================== */}
      <FloralBouquet className="absolute top-16 -left-10 w-44 h-44 opacity-75 animate-float-slow -z-5" />
      <FloralBouquet className="absolute top-1/3 right-4 w-40 h-40 opacity-40 animate-float -z-5" flip />

      {/* Mariposas flotando libremente con distribución amplia en el espacio */}
      <ButterflyGraphic className="absolute top-24 left-[14%] opacity-85" size={44} color="purple" />
      <ButterflyGraphic className="absolute top-[42%] left-[6%] opacity-85" size={38} color="purple" />
      <ButterflyGraphic className="absolute bottom-[28%] left-[18%] opacity-85" size={34} color="purple" />
      <ButterflyGraphic className="absolute bottom-[12%] left-[8%] opacity-90" size={40} color="purple" />
      
      {/* Otras mariposas complementarias */}
      <ButterflyGraphic className="absolute top-1/2 left-[38%] opacity-70" size={32} color="pink" />
      <ButterflyGraphic className="absolute top-28 right-[18%] opacity-90" size={40} color="blue" />
      <ButterflyGraphic className="absolute top-[60%] right-[6%] opacity-85" size={34} color="lavender" />

      {/* ========================================================
          CONTENEDOR PRINCIPAL EDITORIAL (MÁS ARRIBA, POR ENCIMA DE LA ÓRBITA)
         ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 my-auto pt-0 pb-2 -translate-y-8 sm:-translate-y-14 md:-translate-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ----------------------------------------------------
              COLUMNA IZQUIERDA: Textos y CTAs Sincronizados con el Modo Activo
             ---------------------------------------------------- */}
          <div className="lg:col-span-7 text-center space-y-7 mx-auto lg:mx-0 -translate-x-2 sm:-translate-x-4 lg:-translate-x-6 pr-0 lg:pr-10">

            {/* Titular Grande con palabra en script adaptada (florece / crece) */}
            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#3E4A7A] leading-[1.12] tracking-tight text-center max-w-xl mx-auto">
              Sana tu cuerpo, educa tu mente y{' '}
              <span
                key={mode}
                className="font-script text-[#9B8FD9] text-5xl sm:text-6xl md:text-7xl font-normal block sm:inline mt-1 sm:mt-0 drop-shadow-xs inline-block transition-all duration-350 animate-in fade-in"
              >
                {mode === 'educacion' ? 'crece' : 'florece'}
              </span>
            </h1>

            {/* Párrafo descriptivo con Crossfade según el modo activo */}
            <div className="relative min-h-[90px] sm:min-h-[80px] max-w-xl mx-auto flex items-center justify-center">
              <p
                key={mode}
                className="text-base sm:text-lg text-black font-normal leading-relaxed text-justify transition-all duration-400 animate-in fade-in"
              >
                {mode === 'educacion' ? (
                  <>
                    En <strong className="font-semibold text-[#6B7FD1]">Casa Kinti</strong>, Johanna Proaño acompaña el desarrollo de tu hijo con educación bilingüe temprana y asesoría especializada en problemas de aprendizaje, basada en su formación como Máster en la materia.
                  </>
                ) : (
                  <>
                    En <strong className="font-semibold text-[#6B7FD1]">Casa Kinti</strong>, Johanna Proaño integra la sabiduría de la medicina ancestral andina, la terapia floral de Bach y la herbolaria medicinal en un santuario de sanación y bienestar integral en Quito.
                  </>
                )}
              </p>
            </div>

            {/* Botones de acción principales centrados */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="#contacto"
                id="hero-cta-agendar"
                onClick={handleAgendaCita}
                className="relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] hover:bg-gradient-to-tr hover:from-[#6B7FD1] hover:via-[#8E82DA] hover:to-[#E8A2C2] text-black hover:text-white text-base font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-[0_8px_25px_rgba(107,127,209,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                {mode === 'educacion' ? (
                  <SolicitarEvaluacionIcon className="relative z-10 w-5 h-5 text-[#6B7FD1] group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
                ) : (
                  <AgendarCalendarIcon className="relative z-10 w-5 h-5 text-[#6B7FD1] group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
                )}
                <span className="relative z-10">{mode === 'educacion' ? 'Solicitar evaluación' : 'Agenda tu cita'}</span>
              </a>

              <a
                href="#sobre-mi"
                id="hero-cta-conoce-mas"
                className="relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-gradient-to-tr hover:from-[#DDEBFC] hover:via-[#ECE6FB] hover:to-[#FCE5F1] text-black hover:text-[#6B7FD1] text-base font-semibold px-7 py-3.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <span className="relative z-10">Conoce más</span>
                <ArrowDown className="relative z-10 w-4 h-4 text-[#6B7FD1] group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </div>

          </div>

          {/* ----------------------------------------------------
              COLUMNA DERECHA: Órbita Interactiva de Pilares
             ---------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start justify-center relative translate-y-4 sm:translate-y-8 lg:translate-y-12 pl-0 lg:pl-4">
            
            {/* Contenedor de la órbita desplazado más hacia la derecha y abajo */}
            <div className="w-full flex items-center justify-center lg:justify-start relative z-10 translate-x-24 sm:translate-x-36 lg:translate-x-56">
              
              {/* Mariposas y flores decorativas alrededor de la órbita */}
              <FloralBouquet className="absolute -top-8 -left-8 w-24 h-24 z-20 pointer-events-none" />
              <FloralBouquet className="absolute -top-8 -right-8 w-24 h-24 z-20 pointer-events-none" flip />
              <ButterflyGraphic className="absolute -top-7 right-14 z-30 pointer-events-none" size={38} color="purple" />
              <ButterflyGraphic className="absolute bottom-4 -left-6 z-30 pointer-events-none" size={30} color="pink" />

              <OrbitImages
                customItems={currentOrbitPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className={`group relative overflow-hidden rounded-full aspect-square w-[136px] h-[136px] sm:w-[148px] sm:h-[148px] md:w-[156px] md:h-[156px] ${pillar.bgColor} ${pillar.borderColor} border-2 shadow-2xl hover:shadow-[0_10px_30px_rgba(107,127,209,0.45)] hover:scale-110 active:scale-95 transition-all duration-300 flex flex-col justify-center items-center text-center p-3 sm:p-3.5 cursor-pointer select-none`}
                  >
                    {/* Destello de luz diagonal reflectante al pasar el mouse */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

                    {/* Icono ilustrado ampliado con giro y escala interactiva */}
                    <div className="relative z-10 w-13 h-13 sm:w-15 sm:h-15 md:w-17 md:h-17 flex items-center justify-center mb-1">
                      <img
                        src={pillar.iconSrc}
                        alt={pillar.iconAlt}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-115 group-hover:rotate-12 transition-transform duration-300"
                      />
                    </div>

                    {/* Texto destacado y centrado */}
                    <span className="relative z-10 font-bold text-xs sm:text-[13px] md:text-sm text-black text-center leading-tight px-1.5 line-clamp-2">
                      {pillar.text}
                    </span>
                  </div>
                ))}
                shape="circle"
                baseWidth={416}
                radius={124}
                aspectRatio="1 / 1"
                itemSize={164}
                duration={12}
                rotation={0}
                paused={false}
                showPath={false}
              />
            </div>

            {/* Árbol botánico acuarelado sutil emergiendo en el lado inferior */}
            <BloomingBotanicalTree className="absolute -bottom-10 -right-6 w-32 h-32 opacity-70 z-0" />
            <BloomingBotanicalTree className="absolute -bottom-8 -left-10 w-28 h-28 opacity-60 z-0" flip />
          </div>

        </div>
      </div>

      {/* ========================================================
          STACK DE FOTOS INTERACTIVO (POSICIÓN INFERIOR MÁS ABAJO)
         ======================================================== */}
      <div
        className="absolute -bottom-52 sm:-bottom-60 md:-bottom-68 left-1/2 -translate-x-1/2 w-full max-w-[380px] sm:max-w-[440px] md:max-w-[480px] px-2 z-10 pointer-events-auto overflow-visible flex items-center justify-center"
      >
        <div
          key={mode}
          className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[460px] h-[380px] sm:h-[430px] md:h-[455px] transition-all duration-400 animate-in fade-in"
        >
          {/* Bouquet en esquina superior izquierda */}
          <FloralBouquet className="absolute -top-6 -left-6 w-20 h-20 z-20 pointer-events-none" />
          
          {/* Bouquet en la esquina superior derecha */}
          <FloralBouquet className="absolute -top-6 -right-6 w-20 h-20 z-20 pointer-events-none" flip />

          {/* Mariposa aleteando arriba al centro-derecha */}
          <ButterflyGraphic
            className="absolute -top-5 right-10 z-30 pointer-events-none"
            size={34}
            color="purple"
          />

          {/* Mariposa pequeña abajo a la izquierda */}
          <ButterflyGraphic
            className="absolute bottom-2 -left-4 z-30 pointer-events-none"
            size={28}
            color="pink"
          />

          {/* Componente Stack de React Bits con fotografías del nicho activo */}
          <Stack
            randomRotation={true}
            sensitivity={170}
            sendToBackOnClick={true}
            autoplay={true}
            autoplayDelay={3600}
            pauseOnHover={true}
            cards={currentCards.map((card, idx) => (
              <div
                key={card.id}
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-[#E7F3FC] select-none group cursor-pointer border-0"
              >
                {/* Fotografía limpia */}
                <img
                  src={card.image}
                  alt={card.alt}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 group-hover:scale-105"
                />

                {/* Descripción emergente: aparece ÚNICAMENTE al pasar el mouse por encima */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-[#3E4A7A]/95 via-[#3E4A7A]/80 to-transparent opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                  <p className="text-white text-xs sm:text-sm font-semibold leading-snug drop-shadow-md text-center">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          />
        </div>
      </div>

    </section>
  );
};
