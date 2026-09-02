import React, { lazy, Suspense } from 'react';
import { NicheProvider, useNicheMode } from './context/NicheContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PathSection } from './components/PathSection';

// ─── React.lazy — secciones below-the-fold cargadas bajo demanda ──────────────
const AboutSection            = lazy(() => import('./components/AboutSection').then(m => ({ default: m.AboutSection })));
const MissionVisionSection    = lazy(() => import('./components/MissionVisionSection').then(m => ({ default: m.MissionVisionSection })));
const TeachingMethodsSection  = lazy(() => import('./components/TeachingMethodsSection').then(m => ({ default: m.TeachingMethodsSection })));
const ExperiencesSection      = lazy(() => import('./components/ExperiencesSection').then(m => ({ default: m.ExperiencesSection })));
const ServicesSection         = lazy(() => import('./components/ServicesSection').then(m => ({ default: m.ServicesSection })));
const AccompanimentAreasSection = lazy(() => import('./components/AccompanimentAreasSection').then(m => ({ default: m.AccompanimentAreasSection })));
const AttentionSection        = lazy(() => import('./components/AttentionSection').then(m => ({ default: m.AttentionSection })));
const ProductsSection         = lazy(() => import('./components/ProductsSection').then(m => ({ default: m.ProductsSection })));
const ContactSection          = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer                  = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const FloatingWhatsApp        = lazy(() => import('./components/FloatingWhatsApp').then(m => ({ default: m.FloatingWhatsApp })));
const MobileTabBar            = lazy(() => import('./components/MobileTabBar').then(m => ({ default: m.MobileTabBar })));

// Spinner mínimo para Suspense fallback (sin imports extra)
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[120px]" aria-hidden="true">
    <div className="w-8 h-8 rounded-full border-4 border-[#4AAEA5]/30 border-t-[#FFD700] animate-spin" />
  </div>
);

function MainSections() {
  const { mode } = useNicheMode();

  return (
    <main className="flex-grow relative bg-[#EDF4F8]">
      {/* SECCIÓN 1: INICIO (Hero con contenido sincronizado) — carga eager (LCP) */}
      <HeroSection />

      {/* PASOS: Los 4 Pasos del Camino de Transformación */}
      <PathSection />

      {/* SECCIÓN 2: HISTORIA PERSONAL (Johanna Proaño con marco en arco romano) */}
      <Suspense fallback={<PageLoader />}>
        <AboutSection />
      </Suspense>

      {/* MISIÓN & VISIÓN (Estilo tarjetas arqueadas con fotos reales) */}
      <Suspense fallback={<PageLoader />}>
        <MissionVisionSection />
      </Suspense>

      {mode === 'educacion' ? (
        /* ORDEN ESPECÍFICO PARA EL NICHO DE EDUCACIÓN */
        <>
          {/* MÉTODOS DE ENSEÑANZA (Educación alternativa, Principios Montessori, etc.) */}
          <Suspense fallback={<PageLoader />}>
            <TeachingMethodsSection />
          </Suspense>

          {/* NUESTROS SERVICIOS (Nivelación, Psicopedagógico, Asesoría, Bilingüe, Evaluación) */}
          <Suspense fallback={<PageLoader />}>
            <ServicesSection />
          </Suspense>

          {/* ÁREAS DE ACOMPAÑAMIENTO (Carrusel 3D Coverflow de las 7 materias/áreas) */}
          <Suspense fallback={<PageLoader />}>
            <AccompanimentAreasSection />
          </Suspense>

          {/* PROGRAMAS & TALLERES (Cursos formativos) */}
          <Suspense fallback={<PageLoader />}>
            <ExperiencesSection />
          </Suspense>

          {/* LO QUE INCLUYE TU EXPERIENCIA (Sección aparte debajo de Programas & Talleres) */}
          <Suspense fallback={<PageLoader />}>
            <AttentionSection />
          </Suspense>
        </>
      ) : (
        /* ORDEN ORIGINAL EXACTO PARA EL NICHO HOLÍSTICO */
        <>
          {/* SECCIÓN 3: PROMOCIONES & EXPERIENCIAS (Kits Abre Caminos de Casa Kinti) */}
          <Suspense fallback={<PageLoader />}>
            <ExperiencesSection />
          </Suspense>

          {/* SECCIÓN 4: PRODUCTOS & AMULETOS (Elementos Sagrados & Protección) */}
          <Suspense fallback={<PageLoader />}>
            <ProductsSection />
          </Suspense>

          {/* SECCIÓN 5: SERVICIOS & TERAPIAS (Terapias Integrales & Sanación + Testimonios + Lo que incluye) */}
          <Suspense fallback={<PageLoader />}>
            <ServicesSection />
          </Suspense>
        </>
      )}

      {/* SECCIÓN CONTÁCTANOS */}
      <Suspense fallback={<PageLoader />}>
        <ContactSection />
      </Suspense>
    </main>
  );
}

export default function App() {
  return (
    <NicheProvider>
      <div className="min-h-screen flex flex-col bg-[#EDF4F8] selection:bg-[#2B7294]/30 selection:text-[#133238] relative">
        {/* Header Sticky con Toggle Deslizante iOS de Nichos */}
        <Navbar />

        {/* Contenido principal según nicho activo */}
        <MainSections />

        {/* FOOTER MULTI-COLUMNA ADAPTADO AL NICHO */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        {/* Barra de Navegación Animada Inferior para Móviles */}
        <Suspense fallback={null}>
          <MobileTabBar />
        </Suspense>

        {/* Botón Flotante Global de WhatsApp con animación de pulso */}
        <Suspense fallback={null}>
          <FloatingWhatsApp />
        </Suspense>
      </div>
    </NicheProvider>
  );
}
