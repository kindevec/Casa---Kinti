import React from 'react';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { useNicheMode } from '../context/NicheContext';
import { CelestialTitleGraphic } from './CelestialTitleGraphic';


// Íconos vectoriales dorados dibujados al estilo de los Pasos
const IconEducadoraBilingue: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-9 h-9',
  color = '#B88E44',
}) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M32 44 C25 40 16 40 10 42 L10 18 C16 16 25 16 32 20 C39 16 48 16 54 18 L54 42 C48 40 39 40 32 44 Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
      fillOpacity="0.18"
    />
    <path d="M32 20 L32 44" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="11" r="3.5" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.8" />
    <path d="M32 4 L32 6 M24 7 L26 8.5 M40 7 L38 8.5 M23 14 L25 13 M41 14 L39 13" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <path d="M19 28 L23 28 M41 28 L45 28 M18 34 L25 34 M39 34 L46 34" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="1 3" />
  </svg>
);

const IconMasterAprendizaje: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-9 h-9',
  color = '#B88E44',
}) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="32,12 54,22 32,32 10,22" stroke={color} strokeWidth="2.2" strokeLinejoin="round" fill={color} fillOpacity="0.18" />
    <path d="M18 26 L18 38 C18 44 46 44 46 38 L46 26" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M50 25 L50 40 L52 42 L52 46 L48 46 L48 42 L50 40" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill={color} fillOpacity="0.4" />
    <circle cx="32" cy="49" r="2.5" fill={color} />
    <path d="M26 49 L20 49 M38 49 L44 49 M32 43 L32 37 M32 55 L32 58" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconFloresBachHerbolaria: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-9 h-9',
  color = '#B88E44',
}) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M32 48 C32 48 20 42 16 32 C13 24 18 16 26 20 C29 22 32 26 32 26 C32 26 35 22 38 20 C46 16 51 24 48 32 C44 42 32 48 32 48 Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinejoin="round"
      fill={color}
      fillOpacity="0.18"
    />
    <path
      d="M32 16 C32 16 26 24 26 30 C26 34 29 37 32 37 C35 37 38 34 38 30 C38 24 32 16 32 16 Z"
      stroke={color}
      strokeWidth="1.8"
      fill={color}
      fillOpacity="0.35"
    />
    <path d="M12 44 C20 42 26 46 32 54 C38 46 44 42 52 44" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="11" r="2" fill={color} />
  </svg>
);

const IconMedicinaAncestral: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-9 h-9',
  color = '#B88E44',
}) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M26 12 L38 12 L38 20 L46 20 L46 32 L54 32 L54 44 L46 44 L46 52 L38 52 L38 44 L26 44 L26 52 L18 52 L18 44 L10 44 L10 32 L18 32 L18 20 L26 20 Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill={color}
      fillOpacity="0.15"
    />
    <circle cx="32" cy="32" r="6" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.3" />
    <circle cx="32" cy="32" r="2" fill={color} />
    <path d="M32 6 L32 9 M57 32 L60 32 M7 32 L4 32 M32 55 L32 58" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ABOUT_CIRCLES_EDUCACION = [
  {
    title: 'Educadora Infantil Bilingüe',
    IconComponent: IconEducadoraBilingue,
  },
  {
    title: 'Máster en Problemas de Aprendizaje',
    IconComponent: IconMasterAprendizaje,
  },
];

const ABOUT_CIRCLES_HOLISTICA = [
  {
    title: 'Terapeuta en Flores de Bach',
    IconComponent: IconFloresBachHerbolaria,
  },
  {
    title: 'Médica andina certificada en medicina ancestral por el Ministerio de Salud con código ACESS',
    IconComponent: IconMedicinaAncestral,
  },
];


export const AboutSection: React.FC = () => {
  const { mode, targetSection } = useNicheMode();

  return (
    <section id="sobre-mi" className="relative w-full overflow-hidden bg-white">
      {/* ========================================================
          FONDO DIVIDIDO: TURQUESA A LA IZQUIERDA Y BLANCO A LA DERECHA
         ======================================================== */}
      <div className="absolute inset-0 flex pointer-events-none z-0">
        {/* Bloque Turquesa del Header (Cubre la parte izquierda) */}
        <div className="w-full lg:w-[30%] xl:w-[28%] bg-gradient-to-b from-[#4AAEA5] via-[#5CBDB5] to-[#3E9C93] h-[380px] lg:h-full relative overflow-hidden">
          {/* Destellos estelares sutiles */}
          <div className="absolute inset-0 opacity-25">
            <svg viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
              <circle cx="70" cy="120" r="2" fill="#FFFFFF" />
              <circle cx="280" cy="220" r="2.2" fill="#FFF5C0" />
              <circle cx="110" cy="620" r="1.8" fill="#FFEA79" />
              <circle cx="300" cy="720" r="2" fill="#FFFFFF" />
            </svg>
          </div>
        </div>

        {/* Bloque Blanco Puro (Cubre la parte derecha) */}
        <div className="hidden lg:block lg:w-[70%] xl:w-[72%] bg-white h-full" />
      </div>

      {/* ========================================================
          CONTENIDO: FOTO CENTRADA EN EL CORTE & TEXTOS EDITORIALES
         ======================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-center">
          
          {/* ------------------------------------------------------
              FOTO EN ARCO ROMANO CENTRADA EN EL LÍMITE TURQUESA / BLANCO
             ------------------------------------------------------ */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start lg:-ml-4 xl:-ml-8 w-full">
            
            {/* Animación de Entrada hacia la derecha al hacer scroll + Levitación Suave Continua */}
            <motion.div
              key={`${mode}-about-frame-${targetSection?.startsWith('sobre-mi') ? targetSection : 'default'}`}
              initial={{ opacity: 0, x: -70, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex justify-center lg:justify-start"
            >
              <motion.div
                animate={{ y: [0, -8, 0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full flex justify-center lg:justify-start"
              >
            {/* Contenedor del Marco Arqueado — Mismo Ancho y Centrado en Ambos Nichos */}
            <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[490px] pt-4 pb-2 px-2 flex justify-center items-center">
              
              {/* Marco exterior fino en oro con efecto offset */}
              <div className="absolute inset-0 border-2 border-[#D4A346] rounded-t-[200px] sm:rounded-t-[235px] rounded-b-2xl pointer-events-none transform -translate-x-2.5 translate-y-2.5 z-0 shadow-sm" />
              
              {/* 4 Destellos de Estrellas Doradas (✦) exactamente en los 4 ejes */}
              {/* Estrella Superior (Centro) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-[#D4A346] text-lg drop-shadow-[0_0_8px_rgba(212,163,70,0.9)] select-none font-bold">
                ✦
              </div>
              {/* Estrella Izquierda (Lado Turquesa) */}
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 z-20 text-[#FFD700] text-lg drop-shadow-[0_0_8px_rgba(255,215,0,0.9)] select-none font-bold">
                ✦
              </div>
              {/* Estrella Derecha (Lado Blanco) */}
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 z-20 text-[#B88E44] text-lg drop-shadow-[0_0_6px_rgba(184,142,68,0.8)] select-none font-bold">
                ✦
              </div>
              {/* Estrella Inferior */}
              <div className="absolute bottom-0 right-1/4 translate-y-1/2 z-20 text-[#D4A346] text-sm drop-shadow-[0_0_6px_rgba(212,163,70,0.8)] select-none font-bold">
                ✦
              </div>

              {/* Marco Principal del Arco Romano con la Fotografía de Johanna */}
              <div className="relative z-10 w-full h-[400px] xs:h-[440px] sm:h-[480px] md:h-[510px] lg:h-[530px] rounded-t-[190px] sm:rounded-t-[225px] rounded-b-xl overflow-hidden border-[3px] border-[#D4A346] shadow-[0_15px_40px_rgba(0,0,0,0.22)] bg-[#07242C]">
                <motion.img
                  key={mode + '-johanna-photo'}
                  src={mode === 'holistica' ? '/johanna-holistica-sobre-mi.jpg' : '/johanna-sobre-mi.jpg'}
                  alt={mode === 'holistica' ? 'Johanna Proaño - Medicina Ancestral y Terapeuta' : 'Johanna Proaño - Educadora y Máster en Aprendizaje'}
                  initial={{ scale: 1.08, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05 }}
                  className={`w-full h-full object-cover transition-shadow duration-700 ${
                    mode === 'holistica' ? 'object-[center_18%]' : 'object-[center_20%]'
                  }`}
                />
              </div>

            </div>
              </motion.div>
            </motion.div>

          </div>

          {/* ------------------------------------------------------
              LADO DERECHO: BLOQUE EDITORIAL SOBRE FONDO BLANCO
             ------------------------------------------------------ */}
          <motion.div
            key={`${mode}-about-text-${targetSection?.startsWith('sobre-mi') ? targetSection : 'default'}`}
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 lg:pl-4 xl:pl-8 text-[#133238]"
          >
            
            {/* Gráfico Celestial Superior arriba del título centrado (solo nicho holístico) */}
            {mode !== 'educacion' && (
              <div className="flex justify-center items-center mb-4 sm:mb-6 w-full">
                <CelestialTitleGraphic side="full" className="w-48 xs:w-60 sm:w-72 md:w-84 lg:w-96 h-auto" />
              </div>
            )}

            {/* Gran Título en Serif Mayúscula Centrado */}
            <h2 className="text-center font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#133238] uppercase leading-[1.15] tracking-tight">
              Mi Historia{' '}
              <span className="italic bg-gradient-to-r from-[#D4A346] via-[#B88E44] to-[#8C6420] bg-clip-text text-transparent font-normal normal-case block sm:inline">
                Personal
              </span>
            </h2>

            {/* Párrafos Biográficos: Adaptados según el modo */}
            <div className="space-y-4 text-sm sm:text-base text-[#2C484E] leading-relaxed font-normal text-justify">
              {mode === 'educacion' ? (
                <>
                  <p>
                    Mi vocación al servicio nació desde el profundo amor por la educación infantil, enriquecida por más de dos décadas de experiencia y estudio de metodologías activas y respetuosas como Montessori, Piaget y Pikler. Esta búsqueda por comprender el desarrollo integral y el potencial de cada niño me llevó a graduarme con una <strong className="text-[#133238] font-semibold">Maestría en Problemas de Aprendizaje en la Universidad de Salamanca (España)</strong>.
                  </p>
                  <p>
                    En <strong className="text-[#133238] font-semibold">Casa Kinti</strong> creamos un espacio de acompañamiento educativo y terapéutico donde cada niño es visto como un ser único, con su propio ritmo, intereses y talentos. Integramos educación alternativa, estrategias personalizadas y herramientas integrativas desde una mirada respetuosa y humana para que gane confianza, descubra sus capacidades y vuelva a disfrutar el aprendizaje.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Mi camino de sanación comenzó desde adentro: como mujer, como madre y como buscadora del espíritu. Caminante en las <strong className="text-[#133238] font-semibold">medicinas de tradiciones indígenas milenarias de toda Latinoamérica</strong>, aprendí a escuchar la voz de la tierra y de los ancestros. Soy <strong className="text-[#133238] font-semibold">Terapeuta en Flores de Bach</strong> y <strong className="text-[#133238] font-semibold">Médica Andina certificada en medicina ancestral por el Ministerio de Salud con código ACESS</strong>.
                  </p>
                  <p>
                    En <strong className="text-[#133238] font-semibold">Casa Kinti</strong> ofrezco terapias integrativas, productos sagrados de la tierra y ceremonias de sanación para quienes desean reconectar con su esencia, liberar bloqueos y caminar hacia el bienestar del cuerpo, la mente y el espíritu. Cada sesión es un espacio de amor, respeto y transformación profunda.
                  </p>
                </>
              )}
            </div>


            {/* Círculos Dorados Medallón: 2 Centrados en Ambos Nichos con Animaciones, Iluminación y Cambio de Color */}
            <div className="flex justify-center items-center gap-8 sm:gap-14 max-w-md mx-auto w-full pt-4">
              {(mode === 'educacion' ? ABOUT_CIRCLES_EDUCACION : ABOUT_CIRCLES_HOLISTICA).map((pillar, pIdx) => {
                const { IconComponent } = pillar;
                return (
                  <div
                    key={pIdx}
                    className="flex flex-col items-center gap-2.5 group cursor-default"
                  >
                    <motion.div
                      animate={{
                        y: [0, -6, 0, -4, 0],
                        scale: [1, 1.03, 1, 1.02, 1],
                      }}
                      transition={{
                        duration: 4.5 + pIdx * 0.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: pIdx * 0.4,
                      }}
                      whileHover={{
                        scale: 1.12,
                        y: -8,
                        transition: { duration: 0.25 },
                      }}
                      className="relative w-[86px] h-[86px] sm:w-[82px] sm:h-[82px] md:w-[92px] md:h-[92px] shrink-0"
                    >
                      {/* Aura de Iluminación pulsante de fondo con cambio de tono */}
                      <motion.div
                        className="absolute -inset-2 rounded-full blur-md pointer-events-none"
                        animate={{
                          scale: [0.9, 1.2, 0.9],
                          opacity: [0.4, 0.85, 0.4],
                          backgroundColor: [
                            'rgba(255, 215, 0, 0.45)',
                            'rgba(255, 248, 214, 0.7)',
                            'rgba(0, 210, 180, 0.35)',
                            'rgba(212, 163, 70, 0.55)',
                            'rgba(255, 215, 0, 0.45)',
                          ],
                        }}
                        transition={{
                          duration: 4 + pIdx * 0.6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: pIdx * 0.3,
                        }}
                      />

                      {/* Anillo exterior rotatorio con cambio de color en borde */}
                      <motion.div
                        className="absolute inset-[-6px] rounded-full border-2 border-dashed pointer-events-none"
                        animate={{
                          rotate: pIdx % 2 === 0 ? 360 : -360,
                          borderColor: [
                            'rgba(255, 215, 0, 0.65)',
                            'rgba(255, 248, 214, 0.9)',
                            'rgba(0, 210, 180, 0.7)',
                            'rgba(212, 163, 70, 0.85)',
                            'rgba(255, 215, 0, 0.65)',
                          ],
                        }}
                        transition={{
                          rotate: { duration: 18 + pIdx * 3, repeat: Infinity, ease: 'linear' },
                          borderColor: { duration: 4 + pIdx * 0.6, repeat: Infinity, ease: 'easeInOut' },
                        }}
                      />

                      {/* Medallón central con iluminación de borde y sombra */}
                      <motion.div
                        className="w-full h-full rounded-full bg-gradient-to-br from-[#FFFBEE] via-[#FFF3C4] to-[#F5E08A] border-[2.5px] flex items-center justify-center relative overflow-hidden"
                        animate={{
                          borderColor: [
                            '#D4A346',
                            '#FFD700',
                            '#00D2B4',
                            '#FFA000',
                            '#D4A346',
                          ],
                          boxShadow: [
                            '0 4px 18px rgba(212,163,70,0.4)',
                            '0 8px 28px rgba(255,215,0,0.75)',
                            '0 4px 20px rgba(0,210,180,0.45)',
                            '0 6px 24px rgba(255,160,0,0.6)',
                            '0 4px 18px rgba(212,163,70,0.4)',
                          ],
                        }}
                        transition={{
                          duration: 4.2 + pIdx * 0.7,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: pIdx * 0.2,
                        }}
                      >
                        {/* Brillo dinámico pasando sobre el medallón */}
                        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/35 to-transparent -rotate-45 group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                        {/* Ícono animado con cambio de color y resplandor */}
                        <motion.div
                          animate={{
                            scale: [1, 1.08, 1, 1.04, 1],
                            color: [
                              '#8C6420',
                              '#B88E44',
                              '#043651',
                              '#B8860B',
                              '#8C6420',
                            ],
                            filter: [
                              'drop-shadow(0 0 2px rgba(255,215,0,0.4))',
                              'drop-shadow(0 0 8px rgba(255,215,0,0.9))',
                              'drop-shadow(0 0 6px rgba(0,210,180,0.6))',
                              'drop-shadow(0 0 7px rgba(255,160,0,0.8))',
                              'drop-shadow(0 0 2px rgba(255,215,0,0.4))',
                            ],
                          }}
                          transition={{
                            duration: 3.6 + pIdx * 0.6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: pIdx * 0.25,
                          }}
                          className="flex items-center justify-center"
                        >
                          <IconComponent className="w-10 h-10 sm:w-9 sm:h-9 md:w-11 md:h-11" color="currentColor" />
                        </motion.div>
                      </motion.div>

                      {/* Estrellita mágica ✦ pulsando e iluminada */}
                      <motion.div
                        className="absolute -top-1.5 -right-1.5 text-[11px] select-none font-bold leading-none pointer-events-none"
                        animate={{
                          scale: [0.85, 1.35, 0.85],
                          rotate: [0, 20, -20, 0],
                          opacity: [0.7, 1, 0.7],
                          color: ['#D4A346', '#FFD700', '#00D2B4', '#FFA000', '#D4A346'],
                          filter: [
                            'drop-shadow(0 0 4px rgba(212,163,70,0.9))',
                            'drop-shadow(0 0 10px rgba(255,215,0,1))',
                            'drop-shadow(0 0 8px rgba(0,210,180,0.9))',
                            'drop-shadow(0 0 4px rgba(212,163,70,0.9))',
                          ],
                        }}
                        transition={{
                          duration: 2.8 + pIdx * 0.4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        ✦
                      </motion.div>
                    </motion.div>
                    <span className="text-[11px] sm:text-[11px] md:text-xs font-semibold text-[#133238] text-center leading-tight group-hover:text-[#0A343D] transition-colors max-w-[150px] sm:max-w-[170px]">
                      {pillar.title}
                    </span>
                  </div>
                );
              })}
            </div>


            {/* Botón Central Dorado Agendar Consulta */}
            <div className="pt-6 sm:pt-8 flex justify-center items-center border-t border-[#133238]/10">
              <a
                href="#contacto"
                className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#ECD394] hover:to-[#DEC080] text-[#0A1C24] font-serif text-xs sm:text-sm font-bold px-10 sm:px-12 py-3.5 sm:py-4 rounded-sm uppercase tracking-[0.18em] shadow-md hover:shadow-[0_6px_25px_rgba(212,178,111,0.6)] transition-all hover:scale-105 active:scale-95 cursor-pointer group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <Calendar className="w-4 h-4 text-[#0A1C24] shrink-0 stroke-[2.2]" />
                <span className="relative z-10">Agendar Consulta</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
