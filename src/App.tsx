import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CredentialsStrip } from './components/CredentialsStrip';
import { PathSection } from './components/PathSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#9B8FD9]/30 selection:text-[#3E4A7A] relative">
      {/* Header Sticky Minimalista */}
      <Navbar />

      {/* Flujo continuo de las 5 secciones */}
      <main className="flex-grow">
        {/* SECCIÓN 1: INICIO (Hero Editorial + Credenciales + El Camino del Bienestar + Banner Tarot) */}
        <HeroSection />
        <CredentialsStrip />
        <PathSection />

        {/* SECCIÓN 2: SOBRE MÍ (Biografía de Johanna Proaño + Badges + Historia Casa Kinti) */}
        <AboutSection />

        {/* SECCIÓN 3: PRODUCTOS (Catálogo Editorial + Pulseras con Estudio Radiestésico + Aceites y Cristales) */}
        <ProductsSection />

        {/* SECCIÓN 4: SERVICIOS (Bloque A: Medicina Ancestral & Bloque B: Educación Infantil + Mockup + Testimonios) */}
        <ServicesSection />

        {/* SECCIÓN 5: CONTÁCTANOS (CTA Floral + Formulario Interactivo + Horarios + Redes + Mapa + Footer) */}
        <ContactSection />
      </main>

      {/* Botón Flotante Global de WhatsApp con animación de pulso */}
      <FloatingWhatsApp />
    </div>
  );
}
