import React, { useState, useEffect } from 'react';
import { useNicheMode } from '../context/NicheContext';
import { CasaKintiLogo } from './FloralDecorations';

export const Navbar: React.FC = () => {
  const { mode, setMode } = useNicheMode();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enlaces de navegación adaptados según el modo activo
  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: mode === 'educacion' ? 'Cursos' : 'Productos', href: '#productos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-xs py-3 border-b border-[#C9D4F5]/40'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-[58px]">
          
          {/* LADO IZQUIERDO: Logo Casa Kinti + Secciones de Navegación (Posición Original Exacta) */}
          <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 ml-3 sm:ml-8 md:ml-16 lg:ml-20">
            <a
              href="#inicio"
              id="nav-logo-link"
              className="flex items-center group transition-transform hover:opacity-95 z-10 shrink-0"
              aria-label="Casa Kinti - Inicio"
            >
              <CasaKintiLogo size="md" />
            </a>

            {/* Desktop Navigation Links (Posición Original Exacta) */}
            <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8 text-center translate-x-3 sm:translate-x-5 lg:translate-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.label + link.href}
                  href={link.href}
                  className="text-base lg:text-[17px] font-bold text-[#3E4A7A] hover:text-[#6B7FD1] transition-all duration-200 relative py-1 text-center inline-flex items-center justify-center after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2.5px] after:bg-[#9B8FD9] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* LADO DERECHO: Selector Horizontal de Nichos (Holística / Educación) + Botón Hamburguesa Móvil */}
          <div className="flex items-center gap-3 sm:gap-4 z-10">
            
            {/* Toggle Horizontal Dual de Nichos (Holística / Educación) */}
            <div
              aria-label="Selector de Nicho: Holística o Educación"
              className="flex flex-row items-center gap-1.5 bg-white/95 backdrop-blur-md p-1.5 rounded-full border border-[#9B8FD9]/40 shadow-md shadow-[#3E4A7A]/10 select-none translate-x-2 sm:translate-x-4 lg:translate-x-8"
            >
              {/* Botón Modo Holística (Ícono Flor) */}
              <button
                type="button"
                id="nav-toggle-holistica"
                onClick={() => setMode('holistica')}
                className={`relative group overflow-hidden w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                  mode === 'holistica'
                    ? 'bg-gradient-to-tr from-[#6B7FD1] via-[#8E82DA] to-[#E8A2C2] text-white shadow-[0_6px_20px_rgba(107,127,209,0.45)] scale-105 ring-2 ring-[#9B8FD9]/60'
                    : 'bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] hover:bg-gradient-to-tr hover:from-[#6B7FD1] hover:via-[#8E82DA] hover:to-[#E8A2C2] text-black hover:text-white shadow-xs hover:shadow-[0_6px_18px_rgba(107,127,209,0.45)]'
                }`}
                aria-label="Cambiar a Modo Holística"
                aria-pressed={mode === 'holistica'}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <img
                  src="/icons/flor.png"
                  alt="Holística"
                  className={`relative z-10 w-6 h-6 sm:w-7 sm:h-7 object-contain transition-all duration-300 group-hover:rotate-12 ${
                    mode === 'holistica'
                      ? 'brightness-0 invert drop-shadow-xs'
                      : 'opacity-80 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert'
                  }`}
                />
                {/* Tooltip flotante */}
                <span className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#3E4A7A] text-white text-[11px] font-bold tracking-wide shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 z-30">
                  <span>🌿</span>
                  <span>Holística</span>
                </span>
              </button>

              {/* Separador sutil */}
              <div className="w-px h-6 bg-[#C9D4F5]" />

              {/* Botón Modo Educación (Ícono Birrete) */}
              <button
                type="button"
                id="nav-toggle-educacion"
                onClick={() => setMode('educacion')}
                className={`relative group overflow-hidden w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                  mode === 'educacion'
                    ? 'bg-gradient-to-tr from-[#6B7FD1] via-[#8E82DA] to-[#E8A2C2] text-white shadow-[0_6px_20px_rgba(107,127,209,0.45)] scale-105 ring-2 ring-[#9B8FD9]/60'
                    : 'bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] hover:bg-gradient-to-tr hover:from-[#6B7FD1] hover:via-[#8E82DA] hover:to-[#E8A2C2] text-black hover:text-white shadow-xs hover:shadow-[0_6px_18px_rgba(107,127,209,0.45)]'
                }`}
                aria-label="Cambiar a Modo Educación"
                aria-pressed={mode === 'educacion'}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <img
                  src="/icons/birrete.png"
                  alt="Educación"
                  className={`relative z-10 w-6 h-6 sm:w-7 sm:h-7 object-contain transition-all duration-300 group-hover:rotate-12 ${
                    mode === 'educacion'
                      ? 'brightness-0 invert drop-shadow-xs'
                      : 'opacity-80 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert'
                  }`}
                />
                {/* Tooltip flotante */}
                <span className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#3E4A7A] text-white text-[11px] font-bold tracking-wide shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 z-30">
                  <span>📚</span>
                  <span>Educación</span>
                </span>
              </button>
            </div>
          </div>

        </div>
      </header>
    </>
  );
};
