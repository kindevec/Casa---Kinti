import React from 'react';
import { useNicheMode } from '../context/NicheContext';
import { CONTACT_INFO, WHATSAPP_PHONE } from '../data';
import { CasaKintiLogo, ButterflyGraphic, HeroOrganicBackdrop, FloralBouquet } from './FloralDecorations';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import kindevIcon from '../assets/kindev_icon.webp';

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
      className="relative z-10 border-t border-[#C9D4F5]/60 bg-gradient-to-br from-[#DCEEFB] via-[#E7F3FC] to-[#F0C6D9]/40 pt-10 sm:pt-12 pb-10 overflow-hidden shadow-xs text-[#3E4A7A]"
    >
      {/* Ramillete floral acuarelado en la esquina superior izquierda (según referencia) */}
      <FloralBouquet className="absolute -top-2 -left-2 w-36 sm:w-44 h-36 sm:h-44 opacity-80 pointer-events-none -z-5" />

      {/* Mariposas en movimiento en el lateral izquierdo (según referencia) */}
      <ButterflyGraphic className="absolute top-6 left-[18%] sm:left-[16%] opacity-85 pointer-events-none" size={28} color="purple" />
      <ButterflyGraphic className="absolute top-[48%] left-[6%] sm:left-[7%] opacity-80 pointer-events-none" size={24} color="purple" />
      <ButterflyGraphic className="absolute bottom-6 left-[12%] sm:left-[14%] opacity-85 pointer-events-none" size={26} color="purple" />

      {/* Silueta orgánica curva multicapa desplazada más a la derecha */}
      <HeroOrganicBackdrop className="-z-5 opacity-90 lg:!w-[42%] translate-x-[20%] lg:translate-x-[28%]" />

      {/* Mariposas en movimiento y aleteo continuo acompañando el fondo derecho */}
      <ButterflyGraphic className="absolute top-6 right-[4%] opacity-85 pointer-events-none" size={38} color="purple" />
      <ButterflyGraphic className="absolute bottom-8 right-[14%] opacity-80 pointer-events-none" size={32} color="pink" />
      <ButterflyGraphic className="absolute bottom-6 right-[2%] opacity-85 pointer-events-none" size={30} color="lavender" />
      <ButterflyGraphic className="absolute top-1/2 right-[18%] opacity-75 pointer-events-none" size={26} color="purple" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               {/* ========================================================
             GRID DE 4 COLUMNAS (ESTRUCTURA ADAPTADA AL PROYECTO)
            ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#C9D4F5]/60">
          
          {/* ----------------------------------------------------
              COLUMNA 1: Logo Oficial, Misión Dinámica & Redes Sociales (lg:col-span-4)
             ---------------------------------------------------- */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center justify-start ml-[130px] sm:ml-[140px] -mt-5 sm:-mt-7">
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#inicio');
                }}
                className="inline-block transition-transform duration-300 hover:scale-105"
                aria-label="Casa Kinti - Volver arriba"
              >
                <CasaKintiLogo size="md" />
              </a>
            </div>

            {/* Misión / Slogan adaptado dinámicamente según el nicho */}
            <p
              key={mode}
              className="text-xs sm:text-[13px] text-black font-normal leading-relaxed max-w-sm text-justify transition-all duration-400 animate-in fade-in"
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
              COLUMNA 2: Secciones / Navegación (lg:col-span-2)
             ---------------------------------------------------- */}
          <div className="lg:col-span-2 space-y-3.5 text-left -mt-4 sm:-mt-6">
            <div className="flex flex-col items-start">
              <ButterflyGraphic size={26} color="purple" className="mb-1 pointer-events-none" />
              <h4 className="font-serif-display text-xl font-bold text-black tracking-normal">
                Secciones
              </h4>
            </div>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#inicio');
                  }}
                  className="text-black hover:text-[#6B7FD1] transition-colors duration-200 inline-block py-0.5"
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
                  className="text-black hover:text-[#6B7FD1] transition-colors duration-200 inline-block py-0.5"
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
                  className="text-black hover:text-[#6B7FD1] transition-colors duration-200 inline-block py-0.5"
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
                  className="text-black hover:text-[#6B7FD1] transition-colors duration-200 inline-block py-0.5"
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
                  className="text-black hover:text-[#6B7FD1] transition-colors duration-200 inline-block py-0.5"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* ----------------------------------------------------
              COLUMNA 3: Líneas de Atención / Especialidades por Nicho (lg:col-span-3)
             ---------------------------------------------------- */}
          <div className="lg:col-span-3 space-y-3.5 text-left -mt-4 sm:-mt-6">
            <div className="flex flex-col items-start">
              <ButterflyGraphic size={26} color="pink" className="mb-1 pointer-events-none" />
              <h4 className="font-serif-display text-xl font-bold text-black tracking-normal">
                {mode === 'educacion' ? 'Áreas Pedagógicas' : 'Líneas Holísticas'}
              </h4>
            </div>
            
            <ul key={mode} className="space-y-2 text-xs sm:text-[13px] animate-in fade-in duration-300 select-none pointer-events-none">
              {mode === 'educacion' ? (
                <>
                  <li className="select-none">
                    <span className="text-black select-none cursor-default inline-block py-0.5">
                      Estimulación Bilingüe Infantil
                    </span>
                  </li>
                  <li className="select-none">
                    <span className="text-black select-none cursor-default inline-block py-0.5">
                      Problemas de Aprendizaje & Dislexia
                    </span>
                  </li>
                  <li className="select-none">
                    <span className="text-black select-none cursor-default inline-block py-0.5">
                      Fonética & Lectura en Inglés
                    </span>
                  </li>
                  <li className="select-none">
                    <span className="text-black select-none cursor-default inline-block py-0.5">
                      Psicopedagogía Máster & TDAH
                    </span>
                  </li>
                  <li className="select-none">
                    <span className="text-black select-none cursor-default inline-block py-0.5">
                      Asesoría Pedagógica para Padres
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="select-none">
                    <span className="text-black select-none cursor-default inline-block py-0.5">
                      Limpias & Medicina Ancestral
                    </span>
                  </li>
                  <li className="select-none">
                    <span className="text-black select-none cursor-default inline-block py-0.5">
                      Flores de Bach & Herbolaria
                    </span>
                  </li>
                  <li className="select-none">
                    <span className="text-black select-none cursor-default inline-block py-0.5">
                      Tarot Terapéutico
                    </span>
                  </li>
                  <li className="select-none">
                    <span className="text-black select-none cursor-default inline-block py-0.5">
                      Sanación Bioenergética & Chakras
                    </span>
                  </li>
                  <li className="select-none">
                    <span className="text-black select-none cursor-default inline-block py-0.5">
                      Pulseras & Amuletos Consagrados
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* ----------------------------------------------------
              COLUMNA 4: Contacto con Insignias (lg:col-span-3)
             ---------------------------------------------------- */}
          <div className="lg:col-span-3 space-y-3.5 text-left -mt-4 sm:-mt-6">
            <div className="flex flex-col items-start">
              <ButterflyGraphic size={26} color="blue" className="mb-1 pointer-events-none" />
              <h4 className="font-serif-display text-xl font-bold text-black tracking-normal">
                Contacto
              </h4>
            </div>

            <div className="space-y-3.5 text-xs sm:text-[13px]">
              
              {/* Ubicación */}
              <div className="flex items-start gap-3.5 group cursor-pointer">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-[14px] sm:rounded-2xl bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] flex items-center justify-center shrink-0 shadow-xs mt-0.5 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:bg-gradient-to-tr group-hover:from-[#6B7FD1] group-hover:via-[#8E82DA] group-hover:to-[#E8A2C2] group-hover:shadow-[0_6px_18px_rgba(107,127,209,0.45)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <MapPin className="relative z-10 w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#6B7FD1] group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 stroke-[2.2]" />
                </div>
                <div className="leading-snug text-black pt-1 group-hover:text-[#6B7FD1] transition-colors">
                  <span>{CONTACT_INFO.address}</span>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-3.5 group cursor-pointer">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-[14px] sm:rounded-2xl bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:bg-gradient-to-tr group-hover:from-[#6B7FD1] group-hover:via-[#8E82DA] group-hover:to-[#E8A2C2] group-hover:shadow-[0_6px_18px_rgba(107,127,209,0.45)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <Phone className="relative z-10 w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#6B7FD1] group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 stroke-[2.2]" />
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-black group-hover:text-[#6B7FD1] transition-colors font-medium"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5 group cursor-pointer">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-[14px] sm:rounded-2xl bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:bg-gradient-to-tr group-hover:from-[#6B7FD1] group-hover:via-[#8E82DA] group-hover:to-[#E8A2C2] group-hover:shadow-[0_6px_18px_rgba(107,127,209,0.45)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <Mail className="relative z-10 w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#6B7FD1] group-hover:text-white group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 stroke-[2.2]" />
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-black group-hover:text-[#6B7FD1] transition-colors truncate max-w-[200px] font-medium"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              {/* Horarios de Atención */}
              <div className="flex items-start gap-3.5 group cursor-pointer">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-[14px] sm:rounded-2xl bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] flex items-center justify-center shrink-0 shadow-xs mt-0.5 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:bg-gradient-to-tr group-hover:from-[#6B7FD1] group-hover:via-[#8E82DA] group-hover:to-[#E8A2C2] group-hover:shadow-[0_6px_18px_rgba(107,127,209,0.45)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <Clock className="relative z-10 w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#6B7FD1] group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 stroke-[2.2]" />
                </div>
                <div className="leading-snug text-black pt-1 group-hover:text-[#6B7FD1] transition-colors">
                  <span>Lun - Sáb: 8:00 AM - 6:00 PM</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================
            BARRA INFERIOR / SUB-FOOTER
           ======================================================== */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-center text-xs text-black">
          
          {/* Izquierda: Copyright y Enlaces Legales (lg:col-span-9) */}
          <div className="lg:col-span-9 flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} Casa Kinti. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contacto');
                }}
                className="text-black hover:text-[#6B7FD1] transition-colors underline-offset-4 hover:underline"
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
                className="text-black hover:text-[#6B7FD1] transition-colors underline-offset-4 hover:underline"
              >
                Términos de Servicio
              </a>
            </div>
          </div>

          {/* Derecha: Firma Oficial KINDEV a la altura de la columna de Contacto (lg:col-span-3) */}
          <div className="lg:col-span-3 flex justify-center sm:justify-start">
            <a 
              href="https://kindevx.web.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-90 transition-all text-sm flex items-center gap-2.5 group"
              title="Desarrollado por KINDEV"
              aria-label="Desarrollado por KINDEV"
            >
              {/* Logo de Colibrí KINDEV estático con efectos visuales de resplandor y hover */}
              <div className="relative inline-flex items-center justify-center shrink-0 group/icon">
                {/* Halo de luz de fondo con efecto de respiración sutil */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF]/20 to-[#00B0FF]/20 blur-md opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
                
                <img 
                  src={kindevIcon} 
                  alt="KINDEV Logo" 
                  width="44" 
                  height="44" 
                  loading="lazy" 
                  decoding="async" 
                  className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-[0_2px_10px_rgba(0,229,255,0.45)] group-hover:drop-shadow-[0_4px_18px_rgba(0,229,255,0.85)] group-hover:scale-115 group-hover:-rotate-6 group-hover:brightness-110 transition-all duration-300 ease-out inline-block"
                />
              </div>
              <span className="text-xs sm:text-sm text-black group-hover:text-black transition-colors">
                Desarrollado por{" "}
                <span className="font-extrabold text-[#6B7FD1] drop-shadow-[0_0_8px_rgba(107,127,209,0.35)] group-hover:drop-shadow-[0_0_16px_rgba(107,127,209,0.95)] group-hover:brightness-110 group-hover:tracking-wider inline-block transition-all duration-300">
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
