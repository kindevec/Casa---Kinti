import React, { useState, useEffect } from 'react';
import { CasaKintiLogo, ButterflyGraphic } from './FloralDecorations';
import { Menu, X, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { WHATSAPP_PHONE, WHATSAPP_DEFAULT_MSG } from '../data';

export const Navbar: React.FC = () => {
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

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Productos', href: '#productos' },
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
          {/* Logo Casa Kinti a la derecha + Secciones con espacio reducido */}
          <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 ml-6 sm:ml-16 md:ml-28 lg:ml-36">
            <a
              href="#inicio"
              id="nav-logo-link"
              className="flex items-center group transition-transform hover:opacity-95 z-10 shrink-0"
              aria-label="Casa Kinti - Inicio"
            >
              <CasaKintiLogo size="md" />
            </a>

            {/* Desktop Navigation Links (Centradas y con desplazamiento a la derecha) */}
            <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8 text-center translate-x-3 sm:translate-x-5 lg:translate-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-[#3E4A7A] hover:text-[#6B7FD1] transition-colors relative py-1 text-center inline-flex items-center justify-center after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#9B8FD9] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center z-10">
            <button
              type="button"
              id="hamburger-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-full bg-white/85 hover:bg-white text-[#3E4A7A] border border-[#C9D4F5] shadow-xs focus:outline-hidden transition-colors"
              aria-label="Abrir menú de navegación"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
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

            {/* Navigation Links */}
            <div className="mt-8 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleLinkClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-2xl text-base font-semibold text-[#3E4A7A] hover:text-[#6B7FD1] hover:bg-white/80 transition-all flex items-center justify-between group"
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
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-4 rounded-xl shadow-xs transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Directo</span>
            </a>

            <div className="flex items-center justify-center gap-4 text-[#6B7FD1]">
              <a
                href="https://www.tiktok.com/@johapro3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Casa Kinti"
                className="p-2.5 rounded-full bg-white/80 hover:bg-white hover:text-[#9B8FD9] transition-colors border border-[#C9D4F5]"
              >
                <span className="font-bold text-xs">TikTok</span>
              </a>
              <a
                href="https://www.instagram.com/casa_kinti_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Casa Kinti"
                className="p-2.5 rounded-full bg-white/80 hover:bg-white hover:text-[#9B8FD9] transition-colors border border-[#C9D4F5]"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/casakinti"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Casa Kinti"
                className="p-2.5 rounded-full bg-white/80 hover:bg-white hover:text-[#9B8FD9] transition-colors border border-[#C9D4F5]"
              >
                <Facebook className="w-5 h-5" />
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
