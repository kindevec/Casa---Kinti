import React from 'react';
import { motion } from 'motion/react';
import { useNicheMode } from '../context/NicheContext';
import { CardCarousel, CarouselCardItem } from './ui/card-carousel';

const ACCOMPANIMENT_AREAS_ITEMS: CarouselCardItem[] = [
  {
    id: 'area-lengua-literatura',
    title: 'Lengua y Literatura',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'area-matematica',
    title: 'Matemática',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'area-ingles',
    title: 'Inglés',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'area-comprension-lectora',
    title: 'Comprensión Lectora',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'area-escritura-expresion',
    title: 'Escritura y Expresión',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'area-habitos-estudio',
    title: 'Hábitos y Estrategias de Estudio',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'area-organizacion-autonomia',
    title: 'Organización y Autonomía en el Aprendizaje',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80',
  },
];

export const AccompanimentAreasSection: React.FC = () => {
  const { mode } = useNicheMode();

  if (mode !== 'educacion') return null;

  return (
    <section
      id="areas-acompanamiento"
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#EDF4F8] via-[#E2EEF2] to-[#D5E6EC] text-[#133238] overflow-hidden transition-colors duration-500"
    >
      {/* Destellos de fondo sutiles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <circle cx="150" cy="100" r="2" fill="#00D2B4" />
          <circle cx="500" cy="300" r="1.5" fill="#FFD700" />
          <circle cx="1150" cy="180" r="2.2" fill="#00D2B4" />
          <circle cx="950" cy="500" r="1.8" fill="#FFEA79" />
        </svg>
      </div>

      {/* Animated glow particles matching TeachingMethods style */}
      {[
        { cx: 120, cy: 80, r: 2, color: '#FFD700', dur: 3.2 },
        { cx: 420, cy: 200, r: 1.5, color: '#FFFFFF', dur: 4.1 },
        { cx: 1100, cy: 120, r: 2.2, color: '#FFF5C0', dur: 2.8 },
        { cx: 900, cy: 480, r: 1.8, color: '#FFEA79', dur: 3.9 },
        { cx: 300, cy: 500, r: 1.5, color: '#FFD700', dur: 4.5 },
        { cx: 1300, cy: 350, r: 2, color: '#FFFFFF', dur: 3.5 },
        { cx: 700, cy: 80, r: 1.6, color: '#FFE57A', dur: 5.0 },
        { cx: 50, cy: 350, r: 2.4, color: '#FFF9C4', dur: 3.7 },
      ].map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${(star.cx / 1440) * 100}%`,
            top: `${(star.cy / 600) * 100}%`,
            width: star.r * 2,
            height: star.r * 2,
            backgroundColor: star.color,
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.8, 1] }}
          transition={{ duration: star.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado limpio: solo título */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#052C34] font-black leading-tight drop-shadow-xs">
            Áreas de Acompañamiento
          </h3>
        </div>

        {/* Carrusel 3D coverflow */}
        <CardCarousel items={ACCOMPANIMENT_AREAS_ITEMS} title="" />

      </div>
    </section>
  );
};
