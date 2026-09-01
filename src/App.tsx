import React from 'react';
import { NicheProvider } from './context/NicheContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PathSection } from './components/PathSection';
import { AboutSection } from './components/AboutSection';
import { MissionVisionSection } from './components/MissionVisionSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileTabBar } from './components/MobileTabBar';

export default function App() {
  return (
    <NicheProvider>
      <div className="min-h-screen flex flex-col bg-[#EDF4F8] selection:bg-[#2B7294]/30 selection:text-[#133238] relative">
        {/* Header Sticky con Toggle Deslizante iOS de Nichos */}
        <Navbar />

        {/* Flujo continuo de las secciones adaptadas dinámicamente */}
        <main className="flex-grow relative bg-[#EDF4F8]">
          {/* SECCIÓN 1: INICIO (Hero con contenido sincronizado) */}
          <HeroSection />

          {/* PASOS: Los 4 Pasos del Camino de Transformación */}
          <PathSection />

          {/* SECCIÓN 2: HISTORIA PERSONAL (Johanna Proaño con marco en arco romano) */}
          <AboutSection />

          {/* MISIÓN & VISIÓN (Estilo tarjetas arqueadas con fotos reales) */}
          <MissionVisionSection />

          {/* SECCIÓN 3: PROMOCIONES & EXPERIENCIAS (Carrusel 3D Coverflow interactivo) */}
          <ExperiencesSection />

          {/* SECCIÓN 4: PRODUCTOS & AMULETOS (Visible en modo Holística) */}
          <ProductsSection />

          {/* SECCIÓN 5: SERVICIOS & TERAPIAS — incluye AttentionSection al final */}
          <ServicesSection />

          {/* SECCIÓN 6: CONTÁCTANOS */}
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

