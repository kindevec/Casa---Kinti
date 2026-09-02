import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      // Aumentar el límite de advertencia de chunk a 600kB
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks: {
            // React core — cargado siempre
            'vendor-react': ['react', 'react-dom'],
            // Framer Motion / Motion — animaciones
            'vendor-motion': ['motion/react'],
            // Swiper — solo necesario en educación
            'vendor-swiper': ['swiper'],
            // Lucide icons — tree-shakeable pero agrupa bien
            'vendor-lucide': ['lucide-react'],
            // Secciones above-the-fold (Hero + Path + Navbar)
            'chunk-critical': [
              './src/components/Navbar',
              './src/components/HeroSection',
              './src/components/HeroAtmosphereAnimation',
              './src/components/PathSection',
            ],
            // Secciones below-the-fold grupo A
            'chunk-about': [
              './src/components/AboutSection',
              './src/components/MissionVisionSection',
            ],
            // Secciones below-the-fold grupo B (nicho educación)
            'chunk-educacion': [
              './src/components/TeachingMethodsSection',
              './src/components/AccompanimentAreasSection',
              './src/components/ExperiencesSection',
              './src/components/AttentionSection',
            ],
            // Secciones below-the-fold grupo C (nicho holística)
            'chunk-holistica': [
              './src/components/ProductsSection',
            ],
            // Servicios compartidos + Contacto
            'chunk-contact': [
              './src/components/ServicesSection',
              './src/components/ContactSection',
            ],
            // Footer y utilidades flotantes
            'chunk-footer': [
              './src/components/Footer',
              './src/components/MobileTabBar',
              './src/components/FloatingWhatsApp',
            ],
          },
        },
      },
    },
  };
});
