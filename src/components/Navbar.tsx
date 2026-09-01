import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useNicheMode } from '../context/NicheContext';
import { Calendar } from 'lucide-react';

const navLinks = [
  { label: 'INICIO', href: '#inicio' },
  { label: 'SOBRE MÍ', href: '#sobre-mi' },
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'PRODUCTOS', href: '#productos' },
  { label: 'CONTACTO', href: '#contacto' },
];

export const Navbar: React.FC = () => {
  const { mode, setMode } = useNicheMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');
  const isClickingRef = useRef(false);
  const clickTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      if (isClickingRef.current) return;

      const sections = ['contacto', 'productos', 'servicios', 'sobre-mi', 'inicio'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection('#' + sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clickTimeoutRef.current) window.clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    isClickingRef.current = true;
    if (clickTimeoutRef.current) window.clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = window.setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);

    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleAgendaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      const headerOffset = 80;
      const elementPosition = contactElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Adaptar dinámicamente la etiqueta de productos/cursos según el nicho activo
  const currentNavLinks = navLinks.map((link) => {
    if (link.href === '#productos') {
      return {
        ...link,
        label: mode === 'educacion' ? 'CURSOS' : 'PRODUCTOS',
      };
    }
    return link;
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#4AAEA5]/95 backdrop-blur-md border-b border-[#FFEA79]/40 shadow-[0_4px_20px_rgba(40,110,105,0.3)] py-2.5 sm:py-3'
          : 'bg-gradient-to-b from-[#3E9C93]/80 via-[#5CBDB5]/40 to-transparent border-b border-white/20 py-3 sm:py-4.5'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between gap-4">
        
        {/* ========================================================
            ZONA IZQUIERDA: LOGOTIPO OFICIAL CON ANIMACIÓN DE ACERCAMIENTO Y MOVIMIENTO
           ======================================================== */}
        <motion.a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-3 sm:gap-3.5 group cursor-pointer select-none shrink-0 relative"
          aria-label="Casa Kinti - Volver al Inicio"
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

        {/* ========================================================
            ZONA CENTRAL: ENLACES DE NAVEGACIÓN REFINADOS
           ======================================================== */}
        <nav className="hidden md:flex items-center justify-center">
          <ul className="flex items-center justify-center gap-3.5 md:gap-4 lg:gap-8">
            {currentNavLinks.map((link) => {
              const isSelected = activeSection === link.href;
              return (
                <li key={link.label + link.href} className="relative py-1.5">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-serif text-sm md:text-[13.5px] lg:text-[16px] tracking-[0.11em] md:tracking-[0.14em] uppercase transition-all duration-300 block select-none px-1 ${
                      isSelected
                        ? 'text-[#0A1C24] font-black'
                        : 'text-[#0A1C24]/90 font-bold hover:text-[#8C6420] hover:scale-105'
                    }`}
                  >
                    {link.label}
                  </a>

                  {/* Indicador de barra dorada sutil en el enlace activo */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFEA79] via-[#FFD700] to-[#E5A824] rounded-full shadow-[0_0_10px_rgba(255,215,0,0.85)]"
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ========================================================
            ZONA DERECHA: SELECTOR DE NICHO + BOTÓN DORADO LUXE
           ======================================================== */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          
          {/* Selector Dual de Nicho Compacto */}
          <div
            aria-label="Selector de Nicho"
            className="flex items-center p-0.5 sm:p-1 rounded-full bg-black/40 border border-white/20 backdrop-blur-md select-none gap-0.5 shadow-inner"
          >
            <button
              type="button"
              onClick={() => setMode('holistica')}
              className={`px-2.5 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-serif tracking-wider uppercase transition-all duration-300 cursor-pointer inline-flex items-center gap-1.5 ${
                mode === 'holistica'
                  ? 'bg-gradient-to-r from-[#E5C985] via-[#D4B26F] to-[#B88E44] text-[#0A1C24] font-bold shadow-md shadow-[#D4B26F]/30'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <img
                src="/icons/flor.png"
                alt=""
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain transition-all duration-300 ${
                  mode === 'holistica' ? 'opacity-90' : 'invert opacity-80'
                }`}
              />
              <span>Holística</span>
            </button>
            <button
              type="button"
              onClick={() => setMode('educacion')}
              className={`px-2.5 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-serif tracking-wider uppercase transition-all duration-300 cursor-pointer inline-flex items-center gap-1.5 ${
                mode === 'educacion'
                  ? 'bg-gradient-to-r from-[#E5C985] via-[#D4B26F] to-[#B88E44] text-[#0A1C24] font-bold shadow-md shadow-[#D4B26F]/30'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <img
                src="/icons/birrete.png"
                alt=""
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain transition-all duration-300 ${
                  mode === 'educacion' ? 'opacity-90' : 'invert opacity-80'
                }`}
              />
              <span>Educación</span>
            </button>
          </div>

          {/* Botón Dorado Estilo Luxe "BOOK APPOINTMENT" */}
          <motion.a
            href="#contacto"
            onClick={handleAgendaClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-[#E5C985] via-[#D4B26F] to-[#B88E44] hover:from-[#F0D896] hover:via-[#DEC080] hover:to-[#C69C50] text-[#0A1C24] font-bold text-xs sm:text-[13px] px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm uppercase tracking-[0.14em] font-serif shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_6px_22px_rgba(212,178,111,0.55)] transition-all select-none cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0A1C24] stroke-[2.4]" />
            <span>{mode === 'educacion' ? 'Agendar Cita' : 'Agendar Cita'}</span>
          </motion.a>

        </div>

      </div>
    </header>
  );
};
