import React, { useState, useEffect } from 'react';
import { useNicheMode } from '../context/NicheContext';
import { CasaKintiLogo, ButterflyGraphic } from './FloralDecorations';
import { Menu, X, MessageCircle } from 'lucide-react';
import { WHATSAPP_PHONE, WHATSAPP_DEFAULT_MSG, CONTACT_INFO } from '../data';

export const Navbar: React.FC = () => {
  const { mode, setMode } = useNicheMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                className={`relative group w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  mode === 'holistica'
                    ? 'bg-gradient-to-tr from-[#6B7FD1] to-[#9B8FD9] shadow-md shadow-[#6B7FD1]/35 scale-105 ring-2 ring-[#9B8FD9]/50'
                    : 'bg-white/80 hover:bg-[#DCEEFB] hover:scale-105 text-[#3E4A7A]'
                }`}
                aria-label="Cambiar a Modo Holística"
                aria-pressed={mode === 'holistica'}
              >
                <img
                  src="/icons/flor.png"
                  alt="Holística"
                  className={`w-6 h-6 sm:w-7 sm:h-7 object-contain transition-all duration-300 ${
                    mode === 'holistica'
                      ? 'brightness-0 invert drop-shadow-xs'
                      : 'opacity-70 group-hover:opacity-100'
                  }`}
                />
                {/* Tooltip flotante */}
                <span className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#3E4A7A] text-white text-[11px] font-bold tracking-wide shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
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
                className={`relative group w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  mode === 'educacion'
                    ? 'bg-gradient-to-tr from-[#6B7FD1] to-[#9B8FD9] shadow-md shadow-[#6B7FD1]/35 scale-105 ring-2 ring-[#9B8FD9]/50'
                    : 'bg-white/80 hover:bg-[#DCEEFB] hover:scale-105 text-[#3E4A7A]'
                }`}
                aria-label="Cambiar a Modo Educación"
                aria-pressed={mode === 'educacion'}
              >
                <img
                  src="/icons/birrete.png"
                  alt="Educación"
                  className={`w-6 h-6 sm:w-7 sm:h-7 object-contain transition-all duration-300 ${
                    mode === 'educacion'
                      ? 'brightness-0 invert drop-shadow-xs'
                      : 'opacity-70 group-hover:opacity-100'
                  }`}
                />
                {/* Tooltip flotante */}
                <span className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#3E4A7A] text-white text-[11px] font-bold tracking-wide shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                  <span>📚</span>
                  <span>Educación</span>
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                id="hamburger-menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full bg-white/85 hover:bg-white text-[#3E4A7A] border border-[#C9D4F5] shadow-xs focus:outline-hidden transition-colors"
                aria-label="Abrir menú de navegación"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Mobile / Side Panel Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#3E4A7A]/30 backdrop-blur-xs"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-gradient-to-b from-[#DCEEFB] via-[#FFFFFF] to-[#C9D4F5] shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Header Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-[#9B8FD9]/20">
              <CasaKintiLogo size="sm" />
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-white/80 text-[#3E4A7A] hover:bg-white border border-[#C9D4F5]"
                aria-label="Cerrar menú"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Selector de Nicho dentro del Drawer Móvil */}
            <div className="mt-6 p-3 bg-white/70 rounded-2xl border border-[#C9D4F5]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3E4A7A]/70 block mb-2 text-center">
                Modo de Experiencia
              </span>
              <div className="flex items-center bg-[#DCEEFB] p-1 rounded-full border border-[#9B8FD9]/30">
                <button
                  type="button"
                  onClick={() => setMode('holistica')}
                  className={`flex-1 py-2 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    mode === 'holistica' ? 'bg-[#6B7FD1] text-white shadow-xs' : 'text-[#3E4A7A]'
                  }`}
                >
                  <img
                    src="/icons/flor.png"
                    alt=""
                    className={`w-3.5 h-3.5 object-contain ${
                      mode === 'holistica' ? 'brightness-0 invert' : 'opacity-80'
                    }`}
                  />
                  <span>Holística</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode('educacion')}
                  className={`flex-1 py-2 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    mode === 'educacion' ? 'bg-[#6B7FD1] text-white shadow-xs' : 'text-[#3E4A7A]'
                  }`}
                >
                  <img
                    src="/icons/birrete.png"
                    alt=""
                    className={`w-3.5 h-3.5 object-contain ${
                      mode === 'educacion' ? 'brightness-0 invert' : 'opacity-80'
                    }`}
                  />
                  <span>Educación</span>
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="mt-6 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.label + link.href}
                  type="button"
                  onClick={() => handleLinkClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-2xl text-base font-bold text-[#3E4A7A] hover:text-[#6B7FD1] hover:bg-white/80 transition-all flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <ButterflyGraphic size={20} color="purple" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>

          {/* Drawer Footer & Socials */}
          <div className="pt-6 border-t border-[#9B8FD9]/20 space-y-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold py-3 px-4 rounded-xl shadow-xs transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-black" />
              <span>WhatsApp Directo</span>
            </a>

            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.tiktok.com/@johapro3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Casa Kinti"
                className="w-9 h-9 rounded-full overflow-hidden hover:scale-115 hover:shadow-md transition-transform"
              >
                <img src="/icons/tiktok.png" alt="TikTok" className="w-full h-full object-cover" />
              </a>
              <a
                href="https://www.instagram.com/casa_kinti_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Casa Kinti"
                className="w-9 h-9 rounded-full overflow-hidden hover:scale-115 hover:shadow-md transition-transform"
              >
                <img src="/icons/instagram.png" alt="Instagram" className="w-full h-full object-cover" />
              </a>
              <a
                href="https://www.facebook.com/casakinti"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Casa Kinti"
                className="w-9 h-9 rounded-full overflow-hidden hover:scale-115 hover:shadow-md transition-transform"
              >
                <img src="/icons/facebook.png" alt="Facebook" className="w-full h-full object-cover" />
              </a>
            </div>

            <p className="text-center text-xs text-[#3E4A7A]/70 font-medium">
              Quito, Ecuador · Johanna Proaño
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
