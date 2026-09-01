import React from 'react';
import { motion } from 'motion/react';
import { useNicheMode } from '../context/NicheContext';

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
        {/* Cabecera de la Sección (Sin la insignia de arriba) */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#052C34] font-black leading-tight drop-shadow-xs">
            Nuestra <span className="italic text-[#B88E44] font-normal">Misión</span> &{' '}
            <span className="italic text-[#2B7294] font-normal">Visión</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#2C484E] font-medium max-w-2xl mx-auto leading-relaxed">
            El puente sagrado donde la ciencia pedagógica y la medicina ancestral andina se unen para nutrir todas las dimensiones de tu ser.
          </p>
        </div>

        {/* Tarjetas Arqueadas con Contorno Grueso y Dorado (Sin insignias) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto items-stretch">
          
          {/* ========================================================
              TARJETA 1: MISIÓN
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col rounded-t-[140px] sm:rounded-t-[160px] rounded-b-3xl overflow-hidden bg-[#FAF8F5] border-4 sm:border-[5px] border-[#D4A346] shadow-[0_16px_40px_rgba(0,0,0,0.1),0_0_30px_rgba(212,178,111,0.35)] hover:shadow-[0_20px_50px_rgba(212,178,111,0.5)] hover:border-[#FFD700] transition-all duration-400"
          >
            {/* Arco Superior con Fotografía */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-t-[132px] sm:rounded-t-[152px] bg-[#E8E4DA]">
              <img
                key={misionImage}
                src={misionImage}
                alt={misionAlt}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 animate-in fade-in duration-500"
                loading="lazy"
              />
              {/* Velo gradiente fino en la base de la foto */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none" />
              
              {/* Marco interior arqueado fino decorativo */}
              <div className="absolute inset-2.5 rounded-t-[125px] sm:rounded-t-[145px] border border-white/40 pointer-events-none" />
            </div>

            {/* Cuerpo de la Tarjeta (Sin insignias) */}
            <div className="p-6 sm:p-8 flex flex-col justify-center flex-1 text-center space-y-3.5">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-[32px] font-black tracking-[0.2em] text-[#B88E44] uppercase drop-shadow-xs">
                MISIÓN
              </h3>
              
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4B26F] to-transparent mx-auto" />

              <p className="text-xs sm:text-sm md:text-[14.5px] text-[#2C484E] font-normal leading-relaxed text-justify sm:text-center pt-1">
                Acompañar el desarrollo integral y la sanación del ser humano en todas sus etapas. Fusionamos la ciencia de la educación y la terapia de lenguaje con la sabiduría de las medicinas ancestrales para nutrir el cuerpo, la mente, la voz y el espíritu, creando un espacio seguro de evolución personal.
              </p>
            </div>
          </motion.div>

          {/* ========================================================
              TARJETA 2: VISIÓN
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col rounded-t-[140px] sm:rounded-t-[160px] rounded-b-3xl overflow-hidden bg-[#FAF8F5] border-4 sm:border-[5px] border-[#D4A346] shadow-[0_16px_40px_rgba(0,0,0,0.1),0_0_30px_rgba(212,178,111,0.35)] hover:shadow-[0_20px_50px_rgba(212,178,111,0.5)] hover:border-[#FFD700] transition-all duration-400"
          >
            {/* Arco Superior con Fotografía */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-t-[132px] sm:rounded-t-[152px] bg-[#E8E4DA]">
              <img
                key={visionImage}
                src={visionImage}
                alt={visionAlt}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 animate-in fade-in duration-500"
                loading="lazy"
              />
              {/* Velo gradiente fino en la base de la foto */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none" />
              
              {/* Marco interior arqueado fino decorativo */}
              <div className="absolute inset-2.5 rounded-t-[125px] sm:rounded-t-[145px] border border-white/40 pointer-events-none" />
            </div>

            {/* Cuerpo de la Tarjeta (Sin insignias) */}
            <div className="p-6 sm:p-8 flex flex-col justify-center flex-1 text-center space-y-3.5">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-[32px] font-black tracking-[0.2em] text-[#2B7294] uppercase drop-shadow-xs">
                VISIÓN
              </h3>
              
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#2B7294] to-transparent mx-auto" />

              <p className="text-xs sm:text-sm md:text-[14.5px] text-[#2C484E] font-normal leading-relaxed text-justify sm:text-center pt-1">
                Consolidar a Casa Kinti como un refugio holístico de referencia, donde niños y adultos encuentren las herramientas, terapias y productos de la tierra necesarios para su expresión auténtica, sanación profunda y bienestar absoluto.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
