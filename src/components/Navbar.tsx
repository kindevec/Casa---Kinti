import React, { useState, useEffect } from 'react';
import { useNicheMode } from '../context/NicheContext';
import { CasaKintiLogo } from './FloralDecorations';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Cursos & Productos', href: '#productos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC = () => {
  const { mode, setMode } = useNicheMode();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const progress = Math.min(1, Math.max(0, currentScroll / 220));
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgOpacity = scrollProgress * 0.95;
  const shadowOpacity = scrollProgress * 0.08;
  const blurAmount = scrollProgress * 12;

  // Adaptar dinámicamente la etiqueta de productos/cursos
  const currentNavLinks = navLinks.map((link) => {
    if (link.href === '#productos') {
      return {
        ...link,
        label: mode === 'educacion' ? 'Cursos' : 'Productos',
      };
    }
    return link;
  });

  return (
    <>
      <header
        style={{
          backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
          backdropFilter: `blur(${blurAmount}px)`,
          boxShadow: `0 4px 20px rgba(0, 0, 0, ${shadowOpacity})`,
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrollProgress > 0.3 ? 'py-2.5' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LADO IZQUIERDO: Logo Oficial Casa Kinti (Alineado con la letra 'S' del titular) + Secciones de Navegación */}
            <div className="flex items-center gap-3 sm:gap-5 lg:gap-8 shrink-0 ml-0 lg:ml-11 xl:ml-12">
              <a
                href="#inicio"
                id="nav-logo-link"
                className="flex items-center gap-2 z-50 transition-transform hover:opacity-95 shrink-0"
                aria-label="Casa Kinti - Inicio"
              >
                <CasaKintiLogo size="md" />
              </a>

              {/* Desktop Nav Links colocados al lado del logo */}
              <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5">
                {currentNavLinks.map((link) => (
                  <a
                    key={link.label + link.href}
                    href={link.href}
                    className="px-3.5 lg:px-4.5 py-2 rounded-full text-base lg:text-lg font-bold text-[#3E4A7A] hover:bg-gradient-to-tr hover:from-[#DDEBFC] hover:via-[#ECE6FB] hover:to-[#FCE5F1] hover:text-[#6B7FD1] hover:shadow-xs transition-all duration-300 flex items-center justify-center"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* LADO DERECHO: Selector Horizontal de Nichos (Holística / Educación) */}
            <div className="flex items-center gap-2 sm:gap-3 z-10 shrink-0">
              
              {/* Toggle Horizontal Dual de Nichos (Holística / Educación) */}
              <div
                aria-label="Selector de Nicho: Holística o Educación"
                className="flex flex-row items-center gap-1 sm:gap-1.5 bg-white/95 backdrop-blur-md p-1 sm:p-1.5 rounded-full border border-[#9B8FD9]/40 shadow-md shadow-[#3E4A7A]/10 select-none"
              >
                {/* Botón Modo Holística (Ícono Flor) */}
                <button
                  type="button"
                  id="nav-toggle-holistica"
                  onClick={() => setMode('holistica')}
                  className={`relative group overflow-hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
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
                    className={`relative z-10 w-5.5 h-5.5 sm:w-6 sm:h-6 object-contain transition-all duration-300 group-hover:rotate-12 ${
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
                <div className="w-px h-5 bg-[#C9D4F5]" />

                {/* Botón Modo Educación (Ícono Birrete) */}
                <button
                  type="button"
                  id="nav-toggle-educacion"
                  onClick={() => setMode('educacion')}
                  className={`relative group overflow-hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
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
                    className={`relative z-10 w-5.5 h-5.5 sm:w-6 sm:h-6 object-contain transition-all duration-300 group-hover:rotate-12 ${
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
        </div>
      </header>
    </>
  );
};
