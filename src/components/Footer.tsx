import React from 'react';
import { motion } from 'motion/react';
import { useNicheMode } from '../context/NicheContext';
import { CONTACT_INFO, WHATSAPP_PHONE } from '../data';
import { ButterflyGraphic, HeroOrganicBackdrop, FloralBouquet } from './FloralDecorations';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const kindevIcon = '/kindev_icon.webp';

export const Footer: React.FC = () => {
  const { mode } = useNicheMode();

  const handleLinkClick = (href: string) => {
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className="relative z-10 border-t border-[#FFD700]/40 pt-12 sm:pt-16 pb-20 md:pb-12 overflow-hidden text-[#0A1C24] shadow-[0_-8px_30px_rgba(0,0,0,0.2)] bg-gradient-to-b from-[#4AAEA5] via-[#5CBDB5] to-[#3E9C93]"
    >
      {/* ========================================================
          FONDO TURQUESA DEL HEADER (COLOR UNIFICADO)
         ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#4AAEA5] via-[#5CBDB5] to-[#3E9C93] pointer-events-none">
        {/* Auras luminosas sutiles */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-[#FFF8D6]/15 blur-3xl pointer-events-none" />
      </div>

      {/* Destellos estelares sutiles */}
      <div className="absolute inset-0 pointer-events-none opacity-25 -z-5">
        <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <circle cx="200" cy="100" r="1.8" fill="#FFD700" />
          <circle cx="700" cy="180" r="1.4" fill="#FFFFFF" />
          <circle cx="1200" cy="80" r="2.0" fill="#FFEA79" />
          <circle cx="1000" cy="400" r="1.6" fill="#FFD700" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================
            GRID DE 4 COLUMNAS
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* ----------------------------------------------------
              COLUMNA 1: Logo Oficial & Misión Dinámica
             ---------------------------------------------------- */}
          <div className="flex flex-col gap-4 text-left">
            <div className="flex items-center justify-start pb-2">
              <motion.a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#inicio');
                }}
                className="flex items-center gap-3 sm:gap-3.5 group cursor-pointer select-none shrink-0 relative"
                aria-label="Casa Kinti - Volver arriba"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <div className="relative flex items-center justify-center">
                  {/* Efecto de Iluminación Dorada Radiante con Pulso y Acercamiento */}
                  <motion.div
                    animate={{
                      scale: [1, 1.25, 1.05, 1.2, 1],
                      opacity: [0.6, 0.95, 0.7, 0.9, 0.6],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-[#FFD700]/60 via-[#FFF2B2]/45 to-[#FFEA79]/30 blur-md pointer-events-none"
                  />
                  <div className="absolute -inset-1 rounded-full bg-[#FFD700]/35 blur-xs group-hover:bg-[#FFD700]/60 transition-all duration-300 pointer-events-none" />

                  {/* Símbolo con Animación Orgánica de Levitación, Rotación Sutil y Acercamiento */}
                  <motion.img
                    src="/casa-kinti-symbol.png"
                    alt="Casa Kinti Símbolo"
                    width="44"
                    height="44"
                    animate={{
                      y: [0, -3.5, 0, 2.5, 0],
                      rotate: [0, 2, 0, -2, 0],
                      scale: [1, 1.08, 1, 1.05, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative z-10 w-9 h-9 sm:w-11 sm:h-11 object-contain drop-shadow-[0_0_14px_rgba(255,215,0,0.95)] drop-shadow-[0_0_26px_rgba(255,234,121,0.75)] filter contrast-[1.1] brightness-[1.06]"
                  />
                </div>
                <div className="flex flex-col text-left relative z-10">
                  <span className="font-serif text-base xs:text-lg sm:text-xl font-black tracking-[0.22em] text-[#052C34] group-hover:text-[#031D22] transition-colors leading-tight drop-shadow-[0_0_8px_rgba(255,215,0,0.45)]">
                    CASA KINTI
                  </span>
                  <span className="text-[11px] xs:text-[12px] sm:text-[13px] tracking-[0.26em] font-serif font-black uppercase text-[#FFD700] drop-shadow-[0_1.5px_2px_rgba(5,30,35,0.95)] drop-shadow-[0_0_10px_rgba(255,215,0,0.95)] select-none">
                    JOHANNA PROAÑO
                  </span>
                </div>
              </motion.a>
            </div>

            {/* Misión adaptada dinámicamente según el nicho */}
            <p
              key={mode}
              className="text-xs sm:text-[13px] text-[#0A1C24] font-medium leading-relaxed max-w-sm text-justify transition-all duration-400 animate-in fade-in"
            >
              {mode === 'educacion' ? (
                <>
                  Centro psicopedagógico y estimulación bilingüe infantil. Diagnóstico, nivelación y acompañamiento especializado en problemas de aprendizaje en Quito. Guiado por Johanna Proaño.
                </>
              ) : (
                <>
                  Santuario de sanación integral, medicina ancestral andina, terapia floral de Bach y bienestar holístico en Quito, Ecuador. Guiado con rigor y amor por Johanna Proaño.
                </>
              )}
            </p>
          </div>

          {/* ----------------------------------------------------
              COLUMNA 2: Secciones / Navegación
             ---------------------------------------------------- */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-lg font-bold uppercase tracking-wider text-[#0A1C24]">
              Secciones
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-medium">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#inicio');
                  }}
                  className="text-[#0A1C24] hover:text-[#B88E44] hover:translate-x-1 transition-all duration-200 inline-block py-0.5"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#sobre-mi"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#sobre-mi');
                  }}
                  className="text-[#0A1C24] hover:text-[#B88E44] hover:translate-x-1 transition-all duration-200 inline-block py-0.5"
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a
                  href="#productos"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#productos');
                  }}
                  className="text-[#0A1C24] hover:text-[#B88E44] hover:translate-x-1 transition-all duration-200 inline-block py-0.5"
                >
                  {mode === 'educacion' ? 'Cursos & Materiales' : 'Productos & Amuletos'}
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#servicios');
                  }}
                  className="text-[#0A1C24] hover:text-[#B88E44] hover:translate-x-1 transition-all duration-200 inline-block py-0.5"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#contacto');
                  }}
                  className="text-[#0A1C24] hover:text-[#B88E44] hover:translate-x-1 transition-all duration-200 inline-block py-0.5"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* ----------------------------------------------------
              COLUMNA 3: Especialidades por Nicho
             ---------------------------------------------------- */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-lg font-bold uppercase tracking-wider text-[#0A1C24]">
              {mode === 'educacion' ? 'Áreas Pedagógicas' : 'Líneas Holísticas'}
            </h4>
            
            <ul key={mode} className="space-y-2.5 text-xs sm:text-[13px] text-[#0A1C24] font-medium animate-in fade-in duration-300">
              {mode === 'educacion' ? (
                <>
                  <li>Estimulación Bilingüe Infantil</li>
                  <li>Problemas de Aprendizaje & Dislexia</li>
                  <li>Fonética & Lectura en Inglés</li>
                  <li>Psicopedagogía Máster & TDAH</li>
                  <li>Asesoría Pedagógica para Padres</li>
                </>
              ) : (
                <>
                  <li>Limpias & Medicina Ancestral</li>
                  <li>Flores de Bach & Herbolaria</li>
                  <li>Tarot Terapéutico</li>
                  <li>Sanación Bioenergética & Chakras</li>
                  <li>Pulseras & Amuletos Consagrados</li>
                </>
              )}
            </ul>
          </div>

          {/* ----------------------------------------------------
              COLUMNA 4: Contacto
             ---------------------------------------------------- */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-lg font-bold uppercase tracking-wider text-[#0A1C24]">
              Contacto
            </h4>

            <div className="space-y-3.5 text-xs sm:text-[13px] font-medium">
              
              {/* Ubicación */}
              <div className="flex items-start gap-3.5 group cursor-pointer">
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] flex items-center justify-center shrink-0 shadow-xs mt-0.5 transition-all duration-300 ease-out group-hover:scale-110 overflow-hidden">
                  <MapPin className="relative z-10 w-4.5 h-4.5 text-[#0A1C24] stroke-[2.2]" />
                </div>
                <div className="leading-snug text-[#0A1C24] pt-1 group-hover:text-[#B88E44] transition-colors">
                  <span>{CONTACT_INFO.address}</span>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-3.5 group cursor-pointer">
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 ease-out group-hover:scale-110 overflow-hidden">
                  <Phone className="relative z-10 w-4.5 h-4.5 text-[#0A1C24] stroke-[2.2]" />
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-[#0A1C24] group-hover:text-[#B88E44] transition-colors font-medium"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5 group cursor-pointer">
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 ease-out group-hover:scale-110 overflow-hidden">
                  <Mail className="relative z-10 w-4.5 h-4.5 text-[#0A1C24] stroke-[2.2]" />
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-[#0A1C24] group-hover:text-[#B88E44] transition-colors truncate max-w-[200px] font-medium"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              {/* Horarios de Atención */}
              <div className="flex items-start gap-3.5 group cursor-pointer">
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] flex items-center justify-center shrink-0 shadow-xs mt-0.5 transition-all duration-300 ease-out group-hover:scale-110 overflow-hidden">
                  <Clock className="relative z-10 w-4.5 h-4.5 text-[#0A1C24] stroke-[2.2]" />
                </div>
                <div className="leading-snug text-[#0A1C24] pt-1 group-hover:text-[#B88E44] transition-colors">
                  <span>Lun - Sáb: 8:00 AM - 6:00 PM</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================
            BARRA INFERIOR / SUB-FOOTER
           ======================================================== */}
        <div className="pt-8 border-t border-[#0A1C24]/15 text-xs text-[#0A1C24]/80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 items-center font-medium">
          
          {/* Izquierda: Copyright y Enlaces Legales */}
          <div className="md:col-span-1 lg:col-span-3 flex flex-col sm:flex-row items-center md:items-start lg:items-center gap-2 sm:gap-6 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Casa Kinti. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-xs">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contacto');
                }}
                className="text-[#0A1C24]/80 hover:text-[#B88E44] transition-colors underline-offset-4 hover:underline"
              >
                Política de Privacidad
              </a>
              <span>·</span>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contacto');
                }}
                className="text-[#0A1C24]/80 hover:text-[#B88E44] transition-colors underline-offset-4 hover:underline"
              >
                Términos de Servicio
              </a>
            </div>
          </div>

          {/* Derecha: Firma Oficial KINDEV */}
          <div className="md:col-span-1 lg:col-span-1 flex justify-center md:justify-start">
            <a 
              href="https://kindevx.web.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-95 transition-all text-sm flex items-center gap-2.5 group"
              title="Desarrollado por KINDEV"
              aria-label="Desarrollado por KINDEV"
            >
              <div className="relative inline-flex items-center justify-center shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#FFD700]/30 blur-md opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
                
                <img 
                  src={kindevIcon} 
                  alt="KINDEV Logo" 
                  width="44" 
                  height="44" 
                  loading="lazy" 
                  decoding="async" 
                  className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-[0_2px_10px_rgba(255,215,0,0.5)] group-hover:scale-115 group-hover:-rotate-6 transition-all duration-300 ease-out inline-block"
                />
              </div>
              <span className="font-serif text-sm sm:text-base text-[#0A1C24] group-hover:text-[#B88E44] transition-colors font-semibold tracking-wide">
                Desarrollado por{" "}
                <span className="font-serif font-bold text-[#0A1C24] inline-block">
                  KINDEV
                </span>
              </span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
