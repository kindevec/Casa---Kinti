import React from 'react';
import { motion } from 'motion/react';
import { useNicheMode } from '../context/NicheContext';
import { HeroAtmosphereAnimation } from './HeroAtmosphereAnimation';
import { Calendar, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { mode } = useNicheMode();

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
      className="relative min-h-[92dvh] sm:min-h-[96dvh] flex flex-col justify-center pt-24 xs:pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-28 overflow-hidden z-20 transition-all duration-400 bg-[#5CBDB5]"
    >
      {/* ========================================================
          FOTOGRAFÍA DE FONDO (EDUCACIÓN: OSCURECIDO SOLO EN TEXTOS / HOLÍSTICA: CELESTIAL #5CBDB5)
         ======================================================== */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {mode === 'educacion' ? (
          <div className="relative w-full h-full bg-[#5CBDB5]">
            {/* Imagen del Banner de Educación en su luminosidad natural en la zona de los niños */}
            <img
              src="/hero-educacion-banner.jpg"
              alt="Educación Infantil y Acompañamiento Psicopedagógico Casa Kinti"
              className="w-full h-full object-cover object-center filter brightness-[1.0] contrast-[1.02] scale-100 pointer-events-none transition-all duration-700"
            />
            {/* Velo oscuro focalizado EXCLUSIVAMENTE en el área izquierda donde están los textos y botones */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07242C]/95 via-[#07242C]/80 sm:via-[#07242C]/70 to-transparent w-full sm:w-[68%] md:w-[60%] lg:w-[54%] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#07242C]/30 to-transparent pointer-events-none" />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-[#4AAEA5] via-[#5CBDB5] to-[#3E9C93] relative">
            {/* Imagen Celestial en horizontal fusionada con el color del Header */}
            <img
              src="/hero-celestial-bg.jpg"
              alt="Cielo Celestial Turquesa y Polvo Dorado Casa Kinti"
              className="w-full h-full object-cover object-center filter brightness-[1.15] contrast-[1.04] opacity-75 mix-blend-screen scale-100 pointer-events-none transition-all duration-700"
            />

            {/* Velo luminoso en turquesa del Header para unificar el tono (#5CBDB5) */}
            <div className="absolute inset-0 bg-[#5CBDB5]/35 mix-blend-color pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#3E9C93]/40 via-transparent to-[#3E9C93]/50 pointer-events-none" />
            
            {/* Destellos y auras doradas cálidas de acento luminosas */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FFF8D6]/25 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] rounded-full bg-[#FFEA79]/25 blur-3xl pointer-events-none" />
          </div>
        )}
      </div>

      {/* ========================================================
          DISEÑOS VECTORIALES ESOTÉRICOS Y SAGRADOS EN DORADO (SOLO EN MODO HOLÍSTICA)
         ======================================================== */}
      {mode === 'holistica' && (
        <div className="absolute inset-0 -z-15 pointer-events-none select-none overflow-hidden">
          <svg
            viewBox="0 0 1600 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover opacity-45"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Gradiente dorado metálico brillante para los trazos esotéricos */}
              <linearGradient id="esotericGoldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFCE6" stopOpacity="0.95" />
                <stop offset="25%" stopColor="#FFEA79" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#E5C985" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#D4B26F" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="esotericGoldFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF5C0" stopOpacity="0.22" />
                <stop offset="50%" stopColor="#FFEA79" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#D4B26F" stopOpacity="0.04" />
              </linearGradient>

              {/* Filtro de resplandor áurico dorado */}
              <filter id="esotericGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* 1. FASES LUNARES MÍSTICAS Y CORONA CELESTIAL SUPERIOR */}
            <g transform="translate(800, 75)" filter="url(#esotericGlow)" opacity="0.8">
              <path d="M-360,0 C-180,-15 180,-15 360,0" stroke="url(#esotericGoldStroke)" strokeWidth="1" strokeDasharray="5 4" />
              
              <g transform="translate(-280, 0)">
                <circle cx="0" cy="0" r="16" stroke="url(#esotericGoldStroke)" strokeWidth="1.2" />
                <path d="M-6,-15 A16,16 0 0,0 -6,15 A12,16 0 0,1 -6,-15" fill="url(#esotericGoldStroke)" />
              </g>

              <g transform="translate(-140, -5)">
                <circle cx="0" cy="0" r="19" stroke="url(#esotericGoldStroke)" strokeWidth="1.2" />
                <path d="M0,-19 A19,19 0 0,0 0,19 A8,19 0 0,1 0,-19" fill="url(#esotericGoldStroke)" />
              </g>

              <g transform="translate(0, -8)">
                <circle cx="0" cy="0" r="26" stroke="url(#esotericGoldStroke)" strokeWidth="1.6" fill="url(#esotericGoldFill)" />
                <circle cx="0" cy="0" r="18" stroke="url(#esotericGoldStroke)" strokeWidth="0.9" strokeDasharray="3 2" />
                <circle cx="0" cy="0" r="6" fill="#FFF5C0" />
                <path d="M0,-36 L0,-28 M0,28 L0,36 M-36,0 L-28,0 M28,0 L36,0 M-24,-24 L-19,-19 M24,24 L19,19 M-24,24 L-19,19 M24,-24 L19,-19" stroke="url(#esotericGoldStroke)" strokeWidth="1.2" />
                <path d="M-14,8 Q0,2 14,8 Q8,18 0,22 Q-8,18 -14,8 Z" stroke="url(#esotericGoldStroke)" strokeWidth="1" fill="url(#esotericGoldFill)" />
              </g>

              <g transform="translate(140, -5)">
                <circle cx="0" cy="0" r="19" stroke="url(#esotericGoldStroke)" strokeWidth="1.2" />
                <path d="M0,-19 A19,19 0 0,1 0,19 A8,19 0 0,0 0,-19" fill="url(#esotericGoldStroke)" />
              </g>

              <g transform="translate(280, 0)">
                <circle cx="0" cy="0" r="16" stroke="url(#esotericGoldStroke)" strokeWidth="1.2" />
                <path d="M6,-15 A16,16 0 0,1 6,15 A12,16 0 0,0 6,-15" fill="url(#esotericGoldStroke)" />
              </g>
            </g>

            {/* 2. OJO MÍSTICO CELESTIAL */}
            <g transform="translate(190, 220)" filter="url(#esotericGlow)" opacity="0.65">
              <polygon points="0,-95 -85,55 85,55" stroke="url(#esotericGoldStroke)" strokeWidth="1.4" fill="url(#esotericGoldFill)" />
              <polygon points="0,-82 -72,45 72,45" stroke="url(#esotericGoldStroke)" strokeWidth="0.8" strokeDasharray="4 3" />
              <path d="M0,-130 L0,-100 M-55,-105 L-35,-85 M55,-105 L35,-85 M-95,-35 L-70,-25 M95,-35 L70,-25 M-105,25 L-75,20 M105,25 L75,20" stroke="url(#esotericGoldStroke)" strokeWidth="1.2" />
              <path d="M-52,10 C-25,-25 25,-25 52,10 C25,45 -25,45 -52,10 Z" stroke="url(#esotericGoldStroke)" strokeWidth="1.6" fill="#0A302A" fillOpacity="0.4" />
              <circle cx="0" cy="10" r="17" stroke="url(#esotericGoldStroke)" strokeWidth="1.3" fill="url(#esotericGoldFill)" />
              <circle cx="0" cy="10" r="9" fill="#FFEA79" />
              <circle cx="0" cy="10" r="4" fill="#0A2822" />
              <circle cx="-3" cy="7" r="2.2" fill="#FFFFFF" />
            </g>

            {/* 3. GEOMETRÍA SAGRADA: FLOR DE LA VIDA */}
            <g transform="translate(170, 640)" filter="url(#esotericGlow)" opacity="0.45">
              <circle cx="0" cy="0" r="120" stroke="url(#esotericGoldStroke)" strokeWidth="1.2" strokeDasharray="8 4" />
              <circle cx="0" cy="0" r="90" stroke="url(#esotericGoldStroke)" strokeWidth="1" />
              <circle cx="0" cy="0" r="45" stroke="url(#esotericGoldStroke)" strokeWidth="1.4" fill="url(#esotericGoldFill)" />
              <circle cx="0" cy="-45" r="45" stroke="url(#esotericGoldStroke)" strokeWidth="1" />
              <circle cx="39" cy="-22.5" r="45" stroke="url(#esotericGoldStroke)" strokeWidth="1" />
              <circle cx="39" cy="22.5" r="45" stroke="url(#esotericGoldStroke)" strokeWidth="1" />
              <circle cx="0" cy="45" r="45" stroke="url(#esotericGoldStroke)" strokeWidth="1" />
              <circle cx="-39" cy="22.5" r="45" stroke="url(#esotericGoldStroke)" strokeWidth="1" />
              <circle cx="-39" cy="-22.5" r="45" stroke="url(#esotericGoldStroke)" strokeWidth="1" />
            </g>

            {/* 4. SÍMBOLOS Y CONSTELACIONES */}
            <g transform="translate(480, 140)" filter="url(#esotericGlow)" opacity="0.75">
              <line x1="0" y1="-35" x2="0" y2="35" stroke="url(#esotericGoldStroke)" strokeWidth="0.8" strokeDasharray="3 3" />
              <line x1="-25" y1="-5" x2="25" y2="-5" stroke="url(#esotericGoldStroke)" strokeWidth="0.8" strokeDasharray="3 3" />
              <circle cx="0" cy="-5" r="4" fill="#FFF8D6" />
            </g>
          </svg>
        </div>
      )}

      {/* ========================================================
          ANIMACIÓN DE ATMÓSFERA: PÉTALOS FLOTANTES, HOJAS Y BRISA (SOLO EN MODO HOLÍSTICA)
         ======================================================== */}
      {mode === 'holistica' && <HeroAtmosphereAnimation />}

      {/* ========================================================
          COMPOSICIÓN EDITORIAL DE CONTENIDO
         ======================================================== */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ----------------------------------------------------
              COLUMNA DE TEXTO: TITULAR, DIVISOR & 2 BOTONES
             ---------------------------------------------------- */}
          <div className={`${mode === 'educacion' ? 'lg:col-span-8 xl:col-span-7' : 'lg:col-span-6'} flex flex-col items-start text-left z-10`}>
            
            {/* Titular Principal de 2 Líneas Estilo Luxe */}
            <motion.div
              key={mode + '-hero-title'}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1 sm:space-y-2"
            >
              <h1 className={`font-serif text-2xl xs:text-3xl sm:text-4xl md:text-[44px] lg:text-[42px] xl:text-5xl font-bold leading-[1.15] tracking-tight sm:whitespace-nowrap ${
                mode === 'educacion'
                  ? 'text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]'
                  : 'text-[#0A1C24] drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]'
              }`}>
                {mode === 'educacion' ? 'Aprender También es' : 'Donde el Bienestar'}
              </h1>
              <h2 className={`font-serif text-2xl xs:text-3xl sm:text-4xl md:text-[44px] lg:text-[42px] xl:text-5xl font-bold italic leading-[1.15] tracking-tight sm:whitespace-nowrap ${
                mode === 'educacion' 
                  ? 'bg-gradient-to-r from-[#FFEA79] via-[#FFE48A] to-[#E5C985] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]'
                  : 'bg-gradient-to-r from-[#D4A346] via-[#B88E44] to-[#8C6420] bg-clip-text text-transparent'
              }`}>
                {mode === 'educacion' ? 'Descubrirse' : 'Encuentra la Sanación'}
              </h2>
            </motion.div>

            {/* Divisor Ornamental */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 my-4 sm:my-5.5 w-full max-w-sm sm:max-w-md"
            >
              <div
                className={`h-[1.8px] flex-grow ${
                  mode === 'educacion'
                    ? 'bg-gradient-to-r from-transparent via-[#5CBDB5] to-[#4AAEA5]'
                    : 'bg-gradient-to-r from-transparent via-[#FFEA79] to-[#E5C985]'
                }`}
              />
              <span
                className={`text-xs sm:text-sm tracking-widest select-none font-bold ${
                  mode === 'educacion' ? 'text-[#5CBDB5]' : 'text-[#B88E44]'
                }`}
              >
                ✦ ❦ ✦
              </span>
              <div
                className={`h-[1.8px] flex-grow ${
                  mode === 'educacion'
                    ? 'bg-gradient-to-l from-transparent via-[#5CBDB5] to-[#4AAEA5]'
                    : 'bg-gradient-to-l from-transparent via-[#FFEA79] to-[#E5C985]'
                }`}
              />
            </motion.div>

            {/* Párrafo descriptivo narrativo con excelente contraste */}
            <motion.p
              key={mode + '-hero-desc'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-6 sm:mb-8 font-normal ${
                mode === 'educacion'
                  ? 'text-left text-white/95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]'
                  : 'text-justify text-[#0A1C24] font-medium'
              }`}
            >
              {mode === 'educacion' ? (
                <>
                  Acompañamiento pedagógico y terapéutico con enfoque Montessori y estrategias personalizadas. Guiado por <strong className="font-bold text-[#FFEA79]">Johanna Proaño</strong> para que cada niño gane confianza, descubra sus talentos y vuelva a disfrutar aprender.
                </>
              ) : (
                <>
                  Vive una experiencia de sanación integral, medicina ancestral andina y ceremonias con plantas sagradas del Pensamiento con preparación y acompañamiento antes, durante y después en un santuario de profunda paz, armonía y rigurosa calidez en Quito.
                </>
              )}
            </motion.p>

            {/* Dos Botones CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              {/* Botón 1: Primario */}
              <motion.a
                href="#contacto"
                id="hero-cta-agendar"
                onClick={handleAgendaCita}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative overflow-hidden inline-flex items-center justify-center gap-2.5 font-serif font-bold text-xs sm:text-sm px-7 sm:px-8 py-3.5 sm:py-4 rounded-sm uppercase tracking-[0.16em] transition-all cursor-pointer select-none ${
                  mode === 'educacion'
                    ? 'bg-gradient-to-r from-[#4AAEA5] via-[#5CBDB5] to-[#3E9C93] hover:from-[#5CBDB5] hover:via-[#6BDCD2] hover:to-[#4AAEA5] text-[#07242C] shadow-[0_6px_25px_rgba(40,110,105,0.45)] hover:shadow-[0_8px_32px_rgba(92,189,181,0.6)]'
                    : 'bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#ECD394] hover:to-[#DEC080] text-[#0A1C24] shadow-[0_6px_25px_rgba(20,70,65,0.35)] hover:shadow-[0_8px_32px_rgba(255,234,121,0.6)]'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <Calendar className="w-4 h-4 stroke-[2.4] text-[#07242C]" />
                <span className="relative z-10">
                  {mode === 'educacion' ? 'SOLICITAR EVALUACIÓN' : 'AGENDAR AHORA'}
                </span>
              </motion.a>

              {/* Botón 2: Secundario Delineado */}
              <motion.a
                href={mode === 'educacion' ? '#cursos' : '#servicios'}
                id="hero-cta-servicios"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative overflow-hidden inline-flex items-center justify-center gap-2 font-serif font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm uppercase tracking-[0.16em] backdrop-blur-md shadow-md transition-all cursor-pointer select-none ${
                  mode === 'educacion'
                    ? 'bg-white/15 hover:bg-white/25 text-white hover:text-white border border-white/40 hover:border-white'
                    : 'bg-white/85 hover:bg-white text-[#0A1C24] hover:text-[#0A1C24] border border-[#0A1C24]/30 hover:border-[#0A1C24]'
                }`}
              >
                <span>{mode === 'educacion' ? 'VER CURSOS' : 'EXPLORAR SERVICIOS'}</span>
                <ArrowRight className={`w-4 h-4 ${mode === 'educacion' ? 'text-white' : 'text-[#0A1C24]'}`} />
              </motion.a>
            </motion.div>

          </div>

          {/* ----------------------------------------------------
              COLUMNA DERECHA: COMPOSICIÓN DE MARCOS EN ARCO (SOLO EN MODO HOLÍSTICA)
             ---------------------------------------------------- */}
          {mode === 'holistica' && (
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end relative select-none lg:pl-4 xl:pl-8">
              
              {/* Halo de luz cálida y resplandor áurico exterior */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFEA79]/30 via-[#5CBDB5]/25 to-transparent blur-3xl rounded-full pointer-events-none transform -translate-y-4" />

              {/* Contenedor relativo amplio para ambos arcos desplazado a la derecha */}
              <div className="relative w-full max-w-[460px] xs:max-w-[500px] sm:max-w-[580px] md:max-w-[640px] lg:max-w-[680px] h-[460px] xs:h-[530px] sm:h-[620px] md:h-[660px] lg:translate-x-8 xl:translate-x-14">
                
                {/* 1. ARCO PRINCIPAL */}
                <motion.div
                  initial={{ opacity: 0, x: -15, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute top-0 left-0 w-[275px] xs:w-[340px] sm:w-[420px] md:w-[460px] lg:w-[490px] rounded-t-full rounded-b-xl p-[3.5px] sm:p-[4.5px] bg-gradient-to-b from-[#FFF8D6] via-[#E5C985] to-[#B88E44] shadow-[0_20px_50px_rgba(0,0,0,0.22),0_0_30px_rgba(229,201,133,0.35)] overflow-hidden group z-10"
                >
                  <div className="relative rounded-t-full rounded-b-lg overflow-hidden w-full h-[360px] xs:h-[430px] sm:h-[500px] md:h-[540px] lg:h-[570px] bg-transparent">
                    <img
                      key="holistica-hero-main-photo"
                      src="/hero-holistica-tambor.jpg"
                      alt="Johanna Proaño en Ceremonia Ancestral con Tambor Sagrado"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 filter brightness-[1.03] contrast-[1.04] object-[center_28%]"
                    />
                  </div>
                </motion.div>

                {/* 2. ARCO SECUNDARIO */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute bottom-0 right-0 w-[185px] xs:w-[230px] sm:w-[290px] md:w-[320px] lg:w-[350px] rounded-t-full rounded-b-xl p-[3.5px] sm:p-[4.5px] bg-gradient-to-b from-[#FFF8D6] via-[#E5C985] to-[#B88E44] shadow-[0_25px_60px_rgba(0,0,0,0.26),0_0_35px_rgba(229,201,133,0.4)] overflow-hidden group z-20"
                >
                  <div className="relative rounded-t-full rounded-b-lg overflow-hidden w-full h-[185px] xs:h-[230px] sm:h-[290px] md:h-[320px] lg:h-[340px] bg-transparent">
                    <img
                      key="holistica-hero-sub-photo"
                      src="/tarot-hero.png"
                      alt="Lectura de Tarot Terapéutico y Medicina Sagrada"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[1.03] contrast-[1.05]"
                    />
                  </div>

                  <div className="absolute -top-1 -right-1 text-[#FFF8D6] text-xs drop-shadow-[0_0_6px_rgba(255,234,121,1)] select-none pointer-events-none z-30 font-bold">
                    ✦
                  </div>
                  <div className="absolute -bottom-1 -left-1 text-[#FFF8D6] text-xs drop-shadow-[0_0_6px_rgba(255,234,121,1)] select-none pointer-events-none z-30 font-bold">
                    ✦
                  </div>
                </motion.div>

              </div>

            </div>
          )}

        </div>
      </div>

      {/* ========================================================
          REMATE INFERIOR: CINTA SÓLIDA ONDULADA (FIN DEL BANNER)
         ======================================================== */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none overflow-hidden leading-none select-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14 sm:h-20 md:h-26"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Gradiente para la cinta sólida: #07242C (color fondo del formulario de reservas) para Educación / Dorado para Holística */}
            <linearGradient id="luxeSolidRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              {mode === 'educacion' ? (
                <>
                  <stop offset="0%" stopColor="#07242C" />
                  <stop offset="25%" stopColor="#0B3742" />
                  <stop offset="50%" stopColor="#10424E" />
                  <stop offset="75%" stopColor="#0B3742" />
                  <stop offset="100%" stopColor="#07242C" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#D4A346" />
                  <stop offset="15%" stopColor="#E5B54E" />
                  <stop offset="35%" stopColor="#FFF2B8" />
                  <stop offset="55%" stopColor="#E2A93A" />
                  <stop offset="75%" stopColor="#FFF5C4" />
                  <stop offset="90%" stopColor="#E5B54E" />
                  <stop offset="100%" stopColor="#C59336" />
                </>
              )}
            </linearGradient>
          </defs>

          {/* 1. Relleno inferior que conecta fluidamente con el color turquesa del header (#4AAEA5) */}
          <path
            d="M0,52 C 220,117 480,117 780,62 C 980,24 1200,24 1440,77 L1440,120 L0,120 Z"
            fill="#4AAEA5"
          />

          {/* 2. CINTA SÓLIDA CONTINUA (Color #07242C en educación / Dorado en holística) */}
          <path
            d="M0,40 C 220,105 480,105 780,50 C 980,12 1200,12 1440,65 L1440,77 C 1200,24 980,24 780,62 C 480,117 220,117 0,52 Z"
            fill="url(#luxeSolidRibbonGrad)"
          />

          {/* 3. Línea de bisel superior */}
          <path
            d="M0,40 C 220,105 480,105 780,50 C 980,12 1200,12 1440,65"
            stroke={mode === 'educacion' ? '#0F3C47' : '#FFFCE6'}
            strokeWidth="1.8"
            strokeOpacity={mode === 'educacion' ? '0.85' : '0.95'}
            fill="none"
          />

          {/* 4. Línea de borde inferior */}
          <path
            d="M0,52 C 220,117 480,117 780,62 C 980,24 1200,24 1440,77"
            stroke={mode === 'educacion' ? '#07242C' : '#E5B54E'}
            strokeWidth="1.2"
            strokeOpacity="0.9"
            fill="none"
          />
        </svg>
      </div>

    </section>
  );
};

