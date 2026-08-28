import React from 'react';
import {
  FloralPhotoFrame,
  ButterflyGraphic,
  FloralBouquet,
  HeroOrganicBackdrop,
  CloudWaveDivider,
  BloomingBotanicalTree,
} from './FloralDecorations';
import {
  Calendar,
  ArrowDown,
  MessageCircle,
  Instagram,
  Facebook,
} from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_PHONE, WHATSAPP_DEFAULT_MSG } from '../data';

export const HeroSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;

  return (
    <section
      id="inicio"
      className="relative min-h-[96vh] pt-28 md:pt-36 pb-0 flex flex-col justify-between overflow-hidden"
    >
      {/* ========================================================
          FONDO BASE Y SILUETA ORGÁNICA MULTICAPA (REFERENCIA)
         ======================================================== */}
      {/* Fondo pastel suave izquierdo / base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DCEEFB] via-[#E7F3FC] to-[#F0C6D9]/40 pointer-events-none -z-20" />

      {/* Silueta orgánica curva multicapa derecha */}
      <HeroOrganicBackdrop className="-z-10" />

      {/* ========================================================
          BARRA VERTICAL FLOTANTE DE REDES SOCIALES (LADO DERECHO)
         ======================================================== */}
      <aside
        aria-label="Redes sociales de Casa Kinti"
        className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 bg-white/90 backdrop-blur-md px-2.5 py-4 rounded-full border border-[#C9D4F5] shadow-lg shadow-[#3E4A7A]/10"
      >
        <a
          href={CONTACT_INFO.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok Casa Kinti"
          className="w-8 h-8 rounded-full bg-[#DCEEFB] hover:bg-[#6B7FD1] text-[#3E4A7A] hover:text-white flex items-center justify-center text-[10px] font-bold transition-all duration-200 hover:scale-110"
        >
          <span>TK</span>
        </a>
        <a
          href={CONTACT_INFO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Casa Kinti"
          className="w-8 h-8 rounded-full bg-[#DCEEFB] hover:bg-[#6B7FD1] text-[#3E4A7A] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href={CONTACT_INFO.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook Casa Kinti"
          className="w-8 h-8 rounded-full bg-[#DCEEFB] hover:bg-[#6B7FD1] text-[#3E4A7A] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Casa Kinti"
          className="w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </aside>

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
          CONTENEDOR PRINCIPAL EDITORIAL
         ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto pt-8 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ----------------------------------------------------
              COLUMNA IZQUIERDA: Textos y CTAs Centrados con holgura a la izquierda
             ---------------------------------------------------- */}
          <div className="lg:col-span-7 text-center space-y-7 mx-auto lg:mx-0 -translate-x-2 sm:-translate-x-4 lg:-translate-x-6 pr-0 lg:pr-10">

            {/* Titular Grande con palabra en script centrado */}
            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#3E4A7A] leading-[1.12] tracking-tight text-center max-w-xl mx-auto">
              Sana tu cuerpo, educa tu mente y{' '}
              <span className="font-script text-[#9B8FD9] text-5xl sm:text-6xl md:text-7xl font-normal block sm:inline mt-1 sm:mt-0 drop-shadow-xs">
                florece
              </span>
            </h1>

            {/* Párrafo descriptivo justificado con margen seguro */}
            <p className="text-base sm:text-lg text-[#3E4A7A]/85 font-normal max-w-xl mx-auto leading-relaxed text-justify">
              En <strong className="font-semibold text-[#6B7FD1]">Casa Kinti</strong> integramos la sabiduría de la medicina ancestral andina, la terapia floral de Bach y la herbolaria con la educación infantil bilingüe y la psicopedagogía especializada. Un santuario de armonía y desarrollo en Quito.
            </p>

            {/* Botones de acción principales centrados */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="#contacto"
                id="hero-cta-agendar"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#6B7FD1] hover:bg-[#9B8FD9] text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-[#6B7FD1]/25 hover:shadow-xl hover:shadow-[#9B8FD9]/30 transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <Calendar className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                <span>Agenda tu cita</span>
              </a>

              <a
                href="#sobre-mi"
                id="hero-cta-conoce-mas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-[#3E4A7A] hover:text-[#6B7FD1] text-base font-semibold px-7 py-3.5 rounded-full border border-[#C9D4F5] shadow-xs hover:shadow-md transition-all duration-300"
              >
                <span>Conoce más</span>
                <ArrowDown className="w-4 h-4 text-[#6B7FD1]" />
              </a>
            </div>

          </div>

          {/* ----------------------------------------------------
              COLUMNA DERECHA: Fotografía Real de Johanna (Lugar Original)
             ---------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Contenedor relativo de la foto de Johanna enmarcada */}
            <div className="relative z-10 w-full flex justify-center">
              <FloralPhotoFrame className="max-w-[340px] sm:max-w-[380px] w-full">
                {/* Foto real de Johanna en sesión de medicina integrativa */}
                <div className="relative aspect-4/5 w-full bg-[#E7F3FC] overflow-hidden group">
                  <img
                    src="/johanna-hero.png"
                    alt="Johanna Proaño realizando sesión de medicina integrativa y bioenergética en Casa Kinti"
                    loading="eager"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </FloralPhotoFrame>
            </div>

            {/* Árbol botánico acuarelado sutil emergiendo en el lado inferior */}
            <BloomingBotanicalTree className="absolute -bottom-10 -right-6 w-32 h-32 opacity-70 z-0" />
            <BloomingBotanicalTree className="absolute -bottom-8 -left-10 w-28 h-28 opacity-60 z-0" flip />

          </div>

        </div>
      </div>

      {/* ========================================================
          DIVISOR INFERIOR DE NUBES ESPONJOSAS (TRANSICIÓN FLUÍDA)
         ======================================================== */}
      <CloudWaveDivider className="relative z-10 mt-6" />

    </section>
  );
};
