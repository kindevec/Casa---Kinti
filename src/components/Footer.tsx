import React from 'react';
import { motion } from 'motion/react';
import { useNicheMode } from '../context/NicheContext';
import { CONTACT_INFO, WHATSAPP_PHONE } from '../data';
import { ButterflyGraphic, HeroOrganicBackdrop, FloralBouquet, WhatsAppOfficialIcon } from './FloralDecorations';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const kindevIcon = '/kindev_icon.webp';

const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.34a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3 15.63a6.34 6.34 0 0 0 10.74 4.54 6.27 6.27 0 0 0 1.95-4.57V8.58a8.3 8.3 0 0 0 3.9 1.02V6.69z"/>
  </svg>
);

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
      className="relative z-10 border-t border-[#FFD700]/40 pt-5 sm:pt-8 pb-28 md:pb-8 overflow-hidden text-[#0A1C24] shadow-[0_-8px_30px_rgba(0,0,0,0.15)] bg-gradient-to-b from-[#4AAEA5] via-[#5CBDB5] to-[#3E9C93]"
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
            GRID DE 4 COLUMNAS BALANCEADO
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 mb-4 sm:mb-7 items-start">
          
          {/* ----------------------------------------------------
              COLUMNA 1: Logo Oficial, Misión & Redes Sociales
             ---------------------------------------------------- */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col gap-2 sm:gap-3 text-left">
            <div className="flex items-center justify-between sm:justify-start gap-2">
              <motion.a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#inicio');
                }}
                className="flex items-center gap-2 sm:gap-3 group cursor-pointer select-none shrink-0 relative"
                aria-label="Casa Kinti - Volver arriba"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
              >
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1.05, 1.15, 1],
                      opacity: [0.5, 0.85, 0.6, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#FFD700]/60 via-[#FFF2B2]/45 to-[#FFEA79]/30 blur-md pointer-events-none"
                  />
                  <div className="absolute -inset-0.5 rounded-full bg-[#FFD700]/35 blur-xs group-hover:bg-[#FFD700]/60 transition-all duration-300 pointer-events-none" />

                  <motion.img
                    src="/casa-kinti-symbol.png"
                    alt="Casa Kinti Símbolo"
                    width="36"
                    height="36"
                    animate={{
                      y: [0, -2.5, 0, 1.5, 0],
                      rotate: [0, 1.5, 0, -1.5, 0],
                      scale: [1, 1.05, 1, 1.03, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative z-10 w-7.5 h-7.5 sm:w-9 sm:h-9 object-contain drop-shadow-[0_0_10px_rgba(255,215,0,0.9)] filter contrast-[1.1] brightness-[1.06]"
                  />
                </div>
                <div className="flex flex-col text-left relative z-10">
                  <span className="font-serif text-sm sm:text-base lg:text-lg font-black tracking-[0.2em] text-[#052C34] group-hover:text-[#031D22] transition-colors leading-tight drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]">
                    CASA KINTI
                  </span>
                  <span className="text-[9.5px] sm:text-[11px] tracking-[0.24em] font-serif font-black uppercase text-[#FFD700] drop-shadow-[0_1px_2px_rgba(5,30,35,0.95)] drop-shadow-[0_0_8px_rgba(255,215,0,0.9)] select-none">
                    JOHANNA PROAÑO
                  </span>
                </div>
              </motion.a>

              {/* En móvil: redes sociales compactas en la misma fila para ahorrar espacio */}
              <div className="flex sm:hidden items-center gap-1.5 shrink-0">
                <motion.a
                  href={CONTACT_INFO.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Casa Kinti"
                  whileTap={{ scale: 0.95 }}
                  className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] flex items-center justify-center text-[#0A1C24] shadow-xs"
                >
                  <TikTokIcon className="w-3.5 h-3.5 text-[#0A1C24]" />
                </motion.a>
                <motion.a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Casa Kinti"
                  whileTap={{ scale: 0.95 }}
                  className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] flex items-center justify-center text-[#0A1C24] shadow-xs"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#0A1C24] stroke-[2.2]" />
                </motion.a>
                <motion.a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Casa Kinti"
                  whileTap={{ scale: 0.95 }}
                  className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] flex items-center justify-center text-[#0A1C24] shadow-xs"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#0A1C24] stroke-[2.2]" />
                </motion.a>
                <motion.a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Casa Kinti, me gustaría información.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Casa Kinti"
                  whileTap={{ scale: 0.95 }}
                  className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] flex items-center justify-center text-[#0A1C24] shadow-xs"
                >
                  <WhatsAppOfficialIcon className="w-3.5 h-3.5 text-[#0A1C24]" />
                </motion.a>
              </div>
            </div>

            {/* Misión adaptada dinámicamente según el nicho */}
            <p
              key={mode}
              className="text-[11px] sm:text-[12.5px] text-[#0A1C24] font-medium leading-snug sm:leading-relaxed max-w-sm text-left transition-all duration-300 animate-in fade-in"
            >
              {mode === 'educacion' ? (
                <>
                  Centro psicopedagógico y estimulación bilingüe infantil. Diagnóstico, nivelación y acompañamiento especializado en Quito. Guiado por Johanna Proaño.
                </>
              ) : (
                <>
                  Santuario de sanación integral, medicina ancestral andina y bienestar holístico en Quito, Ecuador. Guiado con rigor y amor por Johanna Proaño.
                </>
              )}
            </p>

            {/* Redes Sociales Oficiales en PC/Tablet */}
            <div className="hidden sm:block pt-1">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#052C34] mb-2">
                Síguenos en Redes
              </span>
              <div className="flex items-center gap-2">
                <motion.a
                  href={CONTACT_INFO.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Casa Kinti"
                  whileHover={{ scale: 1.12, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#FFD700] hover:to-[#E5A824] flex items-center justify-center text-[#0A1C24] shadow-[0_0_10px_rgba(255,215,0,0.35)] transition-all"
                >
                  <TikTokIcon className="w-4 h-4 text-[#0A1C24]" />
                </motion.a>

                <motion.a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Casa Kinti"
                  whileHover={{ scale: 1.12, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#FFD700] hover:to-[#E5A824] flex items-center justify-center text-[#0A1C24] shadow-[0_0_10px_rgba(255,215,0,0.35)] transition-all"
                >
                  <Instagram className="w-4 h-4 text-[#0A1C24] stroke-[2.2]" />
                </motion.a>

                <motion.a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Casa Kinti"
                  whileHover={{ scale: 1.12, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#FFD700] hover:to-[#E5A824] flex items-center justify-center text-[#0A1C24] shadow-[0_0_10px_rgba(255,215,0,0.35)] transition-all"
                >
                  <Facebook className="w-4 h-4 text-[#0A1C24] stroke-[2.2]" />
                </motion.a>

                <motion.a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Casa Kinti, me gustaría información.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Casa Kinti"
                  whileHover={{ scale: 1.12, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#FFD700] hover:to-[#E5A824] flex items-center justify-center text-[#0A1C24] shadow-[0_0_10px_rgba(255,215,0,0.35)] transition-all"
                >
                  <WhatsAppOfficialIcon className="w-4 h-4 text-[#0A1C24]" />
                </motion.a>
              </div>
            </div>

          </div>

          {/* ----------------------------------------------------
              COLUMNA 2: Secciones / Navegación (Solo PC / Tablet)
             ---------------------------------------------------- */}
          <div className="hidden md:block col-span-1 space-y-1.5 sm:space-y-2.5 text-left">
            <h4 className="font-serif text-xs sm:text-base font-bold uppercase tracking-wider text-[#0A1C24] pb-0.5 sm:pb-1 border-b border-[#0A1C24]/15">
              Secciones
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-[11px] sm:text-[13px] font-medium">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#inicio');
                  }}
                  className="text-[#0A1C24] hover:text-[#B88E44] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 sm:gap-1.5 py-0.5"
                >
                  <span className="text-[#FFD700] text-[9px] sm:text-[10px]">✦</span>
                  <span>Inicio</span>
                </a>
              </li>
              <li>
                <a
                  href="#sobre-mi"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#sobre-mi');
                  }}
                  className="text-[#0A1C24] hover:text-[#B88E44] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 sm:gap-1.5 py-0.5"
                >
                  <span className="text-[#FFD700] text-[9px] sm:text-[10px]">✦</span>
                  <span>Sobre Mí</span>
                </a>
              </li>
              <li>
                <a
                  href="#productos"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#productos');
                  }}
                  className="text-[#0A1C24] hover:text-[#B88E44] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 sm:gap-1.5 py-0.5"
                >
                  <span className="text-[#FFD700] text-[9px] sm:text-[10px]">✦</span>
                  <span>{mode === 'educacion' ? 'Cursos & Materiales' : 'Productos & Amuletos'}</span>
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#servicios');
                  }}
                  className="text-[#0A1C24] hover:text-[#B88E44] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 sm:gap-1.5 py-0.5"
                >
                  <span className="text-[#FFD700] text-[9px] sm:text-[10px]">✦</span>
                  <span>Servicios</span>
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#contacto');
                  }}
                  className="text-[#0A1C24] hover:text-[#B88E44] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 sm:gap-1.5 py-0.5"
                >
                  <span className="text-[#FFD700] text-[9px] sm:text-[10px]">✦</span>
                  <span>Contacto</span>
                </a>
              </li>
            </ul>
          </div>

          {/* ----------------------------------------------------
              COLUMNA 3: Especialidades por Nicho (Solo PC / Tablet)
             ---------------------------------------------------- */}
          <div className="hidden md:block col-span-1 space-y-1.5 sm:space-y-2.5 text-left">
            <h4 className="font-serif text-xs sm:text-base font-bold uppercase tracking-wider text-[#0A1C24] pb-0.5 sm:pb-1 border-b border-[#0A1C24]/15">
              {mode === 'educacion' ? 'Áreas Pedagógicas' : 'Líneas Holísticas'}
            </h4>
            
            <ul key={mode} className="space-y-1 sm:space-y-2 text-[11px] sm:text-[13px] text-[#0A1C24] font-medium animate-in fade-in duration-300">
              {mode === 'educacion' ? (
                <>
                  <li className="flex items-center gap-1 sm:gap-1.5">
                    <span className="text-[#FFD700] text-[9px] sm:text-[10px]">✦</span>
                    <span>Estimulación Bilingüe</span>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-1.5">
                    <span className="text-[#FFD700] text-[9px] sm:text-[10px]">✦</span>
                    <span>Problemas de Aprendizaje</span>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-1.5">
                    <span className="text-[#FFD700] text-[9px] sm:text-[10px]">✦</span>
                    <span>Fonética & Lectura en Inglés</span>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-1.5">
                    <span className="text-[#FFD700] text-[9px] sm:text-[10px]">✦</span>
                    <span>Psicopedagogía & TDAH</span>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-1.5">
                    <span className="text-[#FFD700] text-[9px] sm:text-[10px]">✦</span>
                    <span>Asesoría para Padres</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-center gap-1 sm:gap-1.5">
                    <span className="text-[#FFD700] text-[9px] sm:text-[10px]">✦</span>
                    <span>Medicina Ancestral</span>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-1.5">
                    <span className="text-[#FFD700] text-[9px] sm:text-[10px]">✦</span>
                    <span>Plantas del Pensamiento</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#FFD700] text-[9px] sm:text-[10px]">✦</span>
                    <span>Tarot Terapéutico</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#FFD700] text-[9px] sm:text-[10px]">✦</span>
                    <span>Sanación Bioenergética</span>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-1.5">
                    <span className="text-[#FFD700] text-[9px] sm:text-[10px]">✦</span>
                    <span>Pulseras & Amuletos</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* ----------------------------------------------------
              COLUMNA 4: Contacto & Horarios
             ---------------------------------------------------- */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 space-y-1.5 sm:space-y-2.5 text-left">
            <h4 className="font-serif text-xs sm:text-base font-bold uppercase tracking-wider text-[#0A1C24] pb-0.5 sm:pb-1 border-b border-[#0A1C24]/15">
              Contacto
            </h4>

            <div className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-[12.5px] font-medium">
              
              {/* Ubicación */}
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-start gap-2 sm:gap-2.5 group cursor-default select-none"
              >
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0A1C24] stroke-[2.4]" />
                </div>
                <div className="leading-snug pt-0.5">
                  <a
                    href={CONTACT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A1C24] hover:text-[#052C34] transition-colors block font-medium hover:underline"
                    title="Abrir ubicación en Google Maps"
                  >
                    {CONTACT_INFO.address}
                  </a>
                </div>
              </motion.div>

              {/* Fila compacta de Teléfono y Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 sm:gap-2">
                {/* Teléfono */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer"
                >
                  <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0A1C24] stroke-[2.4]" />
                  </div>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-[#0A1C24] group-hover:text-[#052C34] transition-colors font-semibold"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer"
                >
                  <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0A1C24] stroke-[2.4]" />
                  </div>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-[#0A1C24] group-hover:text-[#052C34] transition-colors truncate max-w-[220px] font-semibold"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </motion.div>
              </div>

              {/* Horarios de Atención */}
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-center gap-2 sm:gap-2.5 group cursor-default select-none"
              >
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0A1C24] stroke-[2.4]" />
                </div>
                <div className="leading-snug text-[#0A1C24] select-none">
                  <span>Lun - Sáb: 8:00 AM - 6:00 PM</span>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

        {/* ========================================================
            BARRA INFERIOR / SUB-FOOTER
           ======================================================== */}
        <div className="pt-2.5 sm:pt-4 border-t border-[#0A1C24]/15 text-[10.5px] sm:text-xs text-[#0A1C24]/80 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 font-medium">
          
          {/* Izquierda: Copyright y Enlaces Legales */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} Casa Kinti. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contacto');
                }}
                className="text-[#0A1C24]/80 hover:text-[#B88E44] transition-colors underline-offset-4 hover:underline"
              >
                Privacidad
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
                Términos
              </a>
            </div>
          </div>

          {/* Derecha: Firma Oficial KINDEV */}
          <div className="flex justify-center">
            <a 
              href="https://kindevx.web.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-95 transition-all text-[11px] sm:text-sm flex items-center gap-1.5 sm:gap-2 group"
              title="Desarrollado por KINDEV"
              aria-label="Desarrollado por KINDEV"
            >
              <div className="relative inline-flex items-center justify-center shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#FFD700]/30 blur-md opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
                
                <img 
                  src={kindevIcon} 
                  alt="KINDEV Logo" 
                  width="28" 
                  height="28" 
                  loading="lazy" 
                  decoding="async" 
                  className="relative z-10 w-6 h-6 sm:w-7.5 sm:h-7.5 object-contain drop-shadow-[0_2px_8px_rgba(255,215,0,0.5)] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 ease-out inline-block"
                />
              </div>
              <span className="font-serif text-[10.5px] sm:text-xs text-[#0A1C24] group-hover:text-[#B88E44] transition-colors font-semibold tracking-wide">
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
