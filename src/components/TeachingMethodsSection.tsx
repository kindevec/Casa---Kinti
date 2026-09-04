import React from 'react';
import { motion } from 'motion/react';
import { useNicheMode } from '../context/NicheContext';

const METHODS = [
  {
    title: 'Educación Alternativa',
    image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=600&q=80',
    alt: 'Educación Alternativa - niños aprendiendo con materiales naturales',
    delay: 0,
    floatY: [0, -10, 0, -6, 0],
    floatDuration: 5.2,
    glowColor: 'rgba(255, 230, 100, 0.7)',
  },
  {
    title: 'Principios Montessori',
    image: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=600&q=80',
    alt: 'Principios Montessori - materiales didácticos sensoriales',
    delay: 0.15,
    floatY: [0, -8, 2, -12, 0],
    floatDuration: 6.0,
    glowColor: 'rgba(255, 200, 80, 0.7)',
  },
  {
    title: 'Estrategias Pedagógicas Personalizadas',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80',
    alt: 'Estrategias Pedagógicas Personalizadas - acompañamiento individualizado',
    delay: 0.3,
    floatY: [0, -12, 4, -8, 0],
    floatDuration: 5.6,
    glowColor: 'rgba(255, 215, 0, 0.65)',
  },
  {
    title: 'Herramientas de Terapias Integrativas',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    alt: 'Herramientas de Terapias Integrativas - bienestar holístico',
    delay: 0.45,
    floatY: [0, -7, 3, -11, 0],
    floatDuration: 5.8,
    glowColor: 'rgba(255, 245, 130, 0.7)',
  },
];

export const TeachingMethodsSection: React.FC = () => {
  const { mode } = useNicheMode();

  if (mode !== 'educacion') return null;

  return (
    <section
      id="metodos-ensenanza"
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#4AAEA5' }}
    >
      {/* Destellos decorativos animados */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
            className="absolute rounded-full"
            style={{
              left: `${(star.cx / 1440) * 100}%`,
              top: `${(star.cy / 600) * 100}%`,
              width: star.r * 2,
              height: star.r * 2,
              backgroundColor: star.color,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: star.dur,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado — solo título en negro, sin etiqueta superior */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#0A0A0A]"
          >
            Métodos de{' '}
            <span className="italic bg-gradient-to-r from-[#7A5800] via-[#5C3D00] to-[#3D2600] bg-clip-text text-transparent font-normal">
              Enseñanza
            </span>
          </motion.h2>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {METHODS.map((method, idx) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: method.delay }}
              animate={{
                y: method.floatY,
              }}
              // @ts-ignore – framer-motion acepta transition separada para animate
              whileHover={{
                scale: 1.04,
                y: -16,
                transition: { duration: 0.28, ease: 'easeOut' },
              }}
              style={{
                // animación de flotación continua vía CSS para no conflictuar con whileHover
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-[#FFD700] transition-all duration-300 cursor-default"
            >
              {/* Caja de flotación CSS independiente */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none z-0"
                animate={{ y: method.floatY }}
                transition={{
                  duration: method.floatDuration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: method.delay,
                }}
              />

              {/* Resplandor pulsante animado detrás de la tarjeta */}
              <motion.div
                className="absolute -inset-1 rounded-2xl pointer-events-none z-0 blur-xl opacity-0 group-hover:opacity-80"
                animate={{
                  boxShadow: [
                    `0 0 20px ${method.glowColor}`,
                    `0 0 45px ${method.glowColor}`,
                    `0 0 20px ${method.glowColor}`,
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ backgroundColor: method.glowColor }}
              />

              {/* Sombra normal animada */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 8px 25px rgba(0,0,0,0.15)',
                    '0 14px 35px rgba(212,178,111,0.45)',
                    '0 8px 25px rgba(0,0,0,0.15)',
                  ],
                }}
                transition={{
                  duration: 3 + idx * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: idx * 0.5,
                }}
              />

              {/* Efecto de brillo al hover — sweep diagonal */}
              <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none z-30" />

              {/* Foto — ocupa la mayor parte */}
              <div className="relative flex-1 overflow-hidden min-h-[240px] sm:min-h-[260px]">
                <motion.img
                  src={method.image}
                  alt={method.alt}
                  loading="lazy"
                  className="w-full h-full object-cover absolute inset-0"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                {/* Overlay degradado suave hacia abajo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDE7]/70 via-transparent to-transparent" />
              </div>

              {/* Título — fondo amarillo pastel animado */}
              <motion.div
                className="relative p-5 sm:p-6 border-t-2 border-[#FFD700]/60 text-center"
                animate={{
                  backgroundColor: [
                    '#FFFDE7',
                    '#FFF9C4',
                    '#FFEE58',
                    '#FFF9C4',
                    '#FFFDE7',
                  ],
                }}
                transition={{
                  duration: 4 + idx * 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: idx * 0.4,
                }}
              >
                {/* Reflejo dorado animado en el título */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ opacity: [0, 0.18, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: idx * 0.6,
                  }}
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 50%, rgba(255,215,0,0.5) 0%, transparent 70%)',
                  }}
                />
                <h4 className="relative z-10 font-serif text-lg sm:text-xl font-bold text-[#0A0A0A] leading-snug">
                  {method.title}
                </h4>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
