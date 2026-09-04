import React from 'react';
import { motion } from 'motion/react';
import { useNicheMode } from '../context/NicheContext';
import { CelestialTitleGraphic } from './CelestialTitleGraphic';

export const MissionVisionSection: React.FC = () => {
  const { mode } = useNicheMode();
  const isEducacion = mode === 'educacion';

  // Fotos dinámicas según el nicho activo
  const misionImage = isEducacion ? '/mision-educacion-ninos.jpg' : '/mision-johanna-rio.jpg';
  const visionImage = isEducacion ? '/vision-educacion-nino.jpg' : '/vision-ceremonia-mandala.jpg';

  const misionAlt = isEducacion
    ? 'Misión Casa Kinti - Niños compartiendo merienda y socialización al aire libre'
    : 'Misión Casa Kinti - Johanna Proaño en conexión con la naturaleza y el río sagrado';

  const visionAlt = isEducacion
    ? 'Visión Casa Kinti - Niño desarrollando su creatividad y motricidad pintando con alegría'
    : 'Visión Casa Kinti - Círculo ceremonial sagrado con mandala floral y medicina ancestral';

  return (
    <section
      id="mision-vision"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F7F4EE] to-[#EBF5F4] overflow-hidden"
    >
      {/* Elementos decorativos de fondo sutiles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFD700]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-[#00D2B4]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera de la Sección con Gráficos Celestiales al lado (solo nicho holístico) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center max-w-6xl mx-auto space-y-3.5 mb-14 sm:mb-20"
        >
          {/* Separador celestial centrado arriba del título solo en móviles */}
          <div className="flex md:hidden justify-center items-center mb-3 w-full">
            <CelestialTitleGraphic side="full" className="w-52 xs:w-64 h-auto" />
          </div>

          <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 flex-wrap md:flex-nowrap w-full">
            <CelestialTitleGraphic side="left" className="hidden md:block w-28 md:w-36 lg:w-48 xl:w-56 h-auto shrink-0" />
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-[#052C34] font-black leading-tight drop-shadow-xs whitespace-normal md:whitespace-nowrap text-center">
              Nuestra <span className="italic text-[#B88E44] font-normal">Misión</span> &{' '}
              <span className="italic text-[#2B7294] font-normal">Visión</span>
            </h2>
            <CelestialTitleGraphic side="right" className="hidden md:block w-28 md:w-36 lg:w-48 xl:w-56 h-auto shrink-0" />
          </div>
        </motion.div>

        {/* Tarjetas con estilo TeachingMethods: flotación + brillo + borde dorado + footer amarillo animado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto items-stretch">
          
          {[
            {
              label: 'MISIÓN',
              image: misionImage,
              alt: misionAlt,
              titleColor: '#B88E44',
              dividerColor: '#D4B26F',
              glowColor: 'rgba(255, 215, 0, 0.65)',
              floatY: [0, -8, 0, -5, 0],
              floatDuration: 5.4,
              delay: 0,
              text: 'Acompañar el desarrollo integral y la sanación del ser humano en todas sus etapas. Fusionamos la ciencia de la educación y la terapia de lenguaje con la sabiduría de las medicinas ancestrales para nutrir el cuerpo, la mente, la voz y el espíritu, creando un espacio seguro de evolución personal.',
            },
            {
              label: 'VISIÓN',
              image: visionImage,
              alt: visionAlt,
              titleColor: '#2B7294',
              dividerColor: '#2B7294',
              glowColor: 'rgba(43, 114, 148, 0.6)',
              floatY: [0, -6, 2, -9, 0],
              floatDuration: 5.9,
              delay: 0.15,
              text: 'Consolidar a Casa Kinti como un refugio holístico de referencia, donde niños y adultos encuentren las herramientas, terapias y productos de la tierra necesarios para su expresión auténtica, sanación profunda y bienestar absoluto.',
            },
          ].map((card, idx) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: card.delay }}
              whileHover={{ scale: 1.03, y: -14, transition: { duration: 0.28, ease: 'easeOut' } }}
              className="group relative flex flex-col rounded-t-[140px] sm:rounded-t-[160px] rounded-b-3xl overflow-hidden border-2 border-[#FFD700] cursor-default bg-[#FFFDE7]"
            >
              {/* Pulsing glow behind card on hover */}
              <motion.div
                className="absolute -inset-1 rounded-t-[145px] rounded-b-3xl pointer-events-none z-0 blur-xl opacity-0 group-hover:opacity-80"
                animate={{ boxShadow: [`0 0 20px ${card.glowColor}`, `0 0 45px ${card.glowColor}`, `0 0 20px ${card.glowColor}`] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ backgroundColor: card.glowColor }}
              />
              {/* Animated shadow */}
              <motion.div
                className="absolute inset-0 rounded-t-[140px] rounded-b-3xl pointer-events-none"
                animate={{ boxShadow: ['0 8px 25px rgba(0,0,0,0.12)', '0 16px 40px rgba(212,178,111,0.45)', '0 8px 25px rgba(0,0,0,0.12)'] }}
                transition={{ duration: 3 + idx * 0.4, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.5 }}
              />
              {/* Shimmer sweep on hover */}
              <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none z-30" />

              {/* Arco Superior con Fotografía */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-t-[132px] sm:rounded-t-[152px] bg-[#E8E4DA]">
                <motion.img
                  key={card.image}
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FFFDE7] to-transparent pointer-events-none" />
                <div className="absolute inset-2.5 rounded-t-[125px] sm:rounded-t-[145px] border border-white/40 pointer-events-none" />
              </div>

              {/* Footer animado en amarillo pastel pulsante */}
              <motion.div
                className="relative flex-1 w-full p-6 sm:p-8 border-t-2 border-[#FFD700]/60 text-center flex flex-col items-center space-y-3.5"
                animate={{ backgroundColor: ['#FFFDE7', '#FFF9C4', '#FFEE58', '#FFF9C4', '#FFFDE7'] }}
                transition={{ duration: 4 + idx * 0.6, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.4 }}
              >
                {/* Reflejo dorado animado */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ opacity: [0, 0.18, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.6 }}
                  style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,215,0,0.5) 0%, transparent 70%)' }}
                />
                <h3 className="relative z-10 font-serif text-2xl sm:text-3xl font-black tracking-[0.2em] uppercase" style={{ color: card.titleColor }}>
                  {card.label}
                </h3>
                <div className="w-16 h-0.5 mx-auto" style={{ background: `linear-gradient(to right, transparent, ${card.dividerColor}, transparent)` }} />
                <p className="relative z-10 text-xs sm:text-sm md:text-[14.5px] text-[#2C484E] font-normal leading-relaxed text-justify sm:text-center">
                  {card.text}
                </p>
              </motion.div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};
