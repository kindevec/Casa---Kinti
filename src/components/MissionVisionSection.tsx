import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Compass } from 'lucide-react';

export const MissionVisionSection: React.FC = () => {
  return (
    <section
      id="mision-vision"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F7F4EE] to-[#EBF5F4] overflow-hidden"
    >
      {/* Elementos decorativos de fondo sutiles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFD700]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-[#00D2B4]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera de la Sección */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4B26F]/15 border border-[#D4B26F]/35 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B88E44]" />
            <span className="text-[11px] sm:text-xs font-serif font-bold tracking-[0.24em] text-[#8C6420] uppercase">
              PROPÓSITO & ALMA DE CASA KINTI
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#052C34] font-black leading-tight drop-shadow-xs">
            Nuestra <span className="italic text-[#B88E44] font-normal">Misión</span> &{' '}
            <span className="italic text-[#2B7294] font-normal">Visión</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#2C484E] font-medium max-w-2xl mx-auto leading-relaxed">
            El puente sagrado donde la ciencia pedagógica y la medicina ancestral andina se unen para nutrir todas las dimensiones de tu ser.
          </p>
        </div>

        {/* Tarjetas Arqueadas (Estilo Arch / Pórtico Romano) */}
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
            className="group flex flex-col rounded-t-[140px] sm:rounded-t-[160px] rounded-b-3xl overflow-hidden bg-[#FAF8F5] border border-[#D4B26F]/40 shadow-[0_12px_35px_rgba(4,54,81,0.08)] hover:shadow-[0_18px_45px_rgba(212,178,111,0.25)] transition-all duration-400"
          >
            {/* Arco Superior con Fotografía */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-t-[140px] sm:rounded-t-[160px] bg-[#E8E4DA]">
              <img
                src="/mision-johanna-rio.jpg"
                alt="Misión Casa Kinti - Johanna Proaño en conexión con la naturaleza y el río sagrado"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                loading="lazy"
              />
              {/* Velo gradiente fino en la base de la foto */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none" />
              
              {/* Marco arqueado interior fino */}
              <div className="absolute inset-2.5 rounded-t-[130px] sm:rounded-t-[150px] border border-white/40 pointer-events-none" />
            </div>

            {/* Cuerpo de la Tarjeta */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 text-center space-y-4">
              <div>
                <span className="inline-block font-serif text-xs sm:text-[13px] font-black tracking-[0.28em] text-[#B88E44] uppercase mb-2">
                  MISIÓN
                </span>
                
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#D4B26F] to-transparent mx-auto mb-4" />

                <p className="text-xs sm:text-sm md:text-[14.5px] text-[#2C484E] font-normal leading-relaxed text-justify sm:text-center">
                  Acompañar el desarrollo integral y la sanación del ser humano en todas sus etapas. Fusionamos la ciencia de la educación y la terapia de lenguaje con la sabiduría de las medicinas ancestrales para nutrir el cuerpo, la mente, la voz y el espíritu, creando un espacio seguro de evolución personal.
                </p>
              </div>

              {/* Distintivo Inferior */}
              <div className="pt-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4B26F]/15 border border-[#D4B26F]/30 text-[#052C34] text-xs font-serif font-bold">
                  <Heart className="w-3.5 h-3.5 text-[#B88E44]" />
                  <span>Evolución & Sanación Integral</span>
                </div>
              </div>
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
            className="group flex flex-col rounded-t-[140px] sm:rounded-t-[160px] rounded-b-3xl overflow-hidden bg-[#FAF8F5] border border-[#2B7294]/40 shadow-[0_12px_35px_rgba(4,54,81,0.08)] hover:shadow-[0_18px_45px_rgba(43,114,148,0.25)] transition-all duration-400"
          >
            {/* Arco Superior con Fotografía */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-t-[140px] sm:rounded-t-[160px] bg-[#E8E4DA]">
              <img
                src="/vision-ceremonia-mandala.jpg"
                alt="Visión Casa Kinti - Círculo ceremonial sagrado con mandala floral y medicina ancestral"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                loading="lazy"
              />
              {/* Velo gradiente fino en la base de la foto */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none" />
              
              {/* Marco arqueado interior fino */}
              <div className="absolute inset-2.5 rounded-t-[130px] sm:rounded-t-[150px] border border-white/40 pointer-events-none" />
            </div>

            {/* Cuerpo de la Tarjeta */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 text-center space-y-4">
              <div>
                <span className="inline-block font-serif text-xs sm:text-[13px] font-black tracking-[0.28em] text-[#2B7294] uppercase mb-2">
                  VISIÓN
                </span>
                
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#2B7294] to-transparent mx-auto mb-4" />

                <p className="text-xs sm:text-sm md:text-[14.5px] text-[#2C484E] font-normal leading-relaxed text-justify sm:text-center">
                  Consolidar a Casa Kinti como un refugio holístico de referencia, donde niños y adultos encuentren las herramientas, terapias y productos de la tierra necesarios para su expresión auténtica, sanación profunda y bienestar absoluto.
                </p>
              </div>

              {/* Distintivo Inferior */}
              <div className="pt-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B7294]/15 border border-[#2B7294]/30 text-[#052C34] text-xs font-serif font-bold">
                  <Compass className="w-3.5 h-3.5 text-[#2B7294]" />
                  <span>Refugio Holístico de Referencia</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
