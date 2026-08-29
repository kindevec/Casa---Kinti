import React from 'react';
import { NicheProvider } from './context/NicheContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PathSection } from './components/PathSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileTabBar } from './components/MobileTabBar';

export default function App() {
  return (
    <NicheProvider>
      <div className="min-h-screen flex flex-col bg-[#E8F3FD] selection:bg-[#9B8FD9]/30 selection:text-[#3E4A7A] relative">
        {/* Header Sticky con Toggle Deslizante iOS de Nichos */}
        <Navbar />

        {/* Flujo continuo de las secciones adaptadas dinámicamente */}
        <main className="flex-grow">
          {/* SECCIÓN 1: INICIO (Hero con contenido sincronizado: Holística vs Educación) */}
          <HeroSection />
          <PathSection />

          {/* SECCIÓN 2: SOBRE MÍ (Biografía de Johanna Proaño) */}
          <AboutSection />

          {/* SECCIÓN 3: PRODUCTOS (Visible ÚNICAMENTE en modo Holística) */}
          <ProductsSection />

          {/* SECCIÓN 4: SERVICIOS (Bloque A Holística o Bloque B Educación según el modo) */}
          <ServicesSection />

          {/* SECCIÓN 5: CONTÁCTANOS (Compartido con preselección adaptada) */}
          <ContactSection />
        </main>

        {/* FOOTER MULTI-COLUMNA ADAPTADO AL NICHO */}
        <Footer />

        {/* Barra de Navegación Animada Inferior para Móviles */}
        <MobileTabBar />

        {/* Botón Flotante Global de WhatsApp con animación de pulso */}
        <FloatingWhatsApp />
      </div>
    </NicheProvider>
  );
}
