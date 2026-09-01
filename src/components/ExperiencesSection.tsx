import React from 'react';
import { useNicheMode } from '../context/NicheContext';
import { CoverflowCarousel, CoverflowSlide } from './ui/coverflow-carousel';
import { WHATSAPP_PHONE } from '../data';

const HOLISTICA_COVERFLOW_SLIDES: CoverflowSlide[] = [
  {
    src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    alt: 'Kit de Sahumerios Naturales & Sales de Baño',
    title: 'Kit de Sahumerios & Sales de Baño',
    price: '$12.00',
    badge: 'Kit Purificación',
    subtitle:
      'Kit ritual completo con sahumerios de hierbas naturales y sales de baño con aceites esenciales para baños de limpieza y purificación en casa.',
    meta: [
      { label: 'Contenido', value: 'Sahumerio + Sales' },
      { label: 'Esencias', value: 'Aceites Puros' },
    ],
    ctaText: 'Pedir Kit por WhatsApp',
    whatsappMessage:
      'Hola Johanna, deseo encargar el Kit de Sahumerios Naturales & Sales de Baño ($12 USD).',
  },
  {
    src: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    alt: 'Aceites Esenciales Personalizados 20ml',
    title: 'Aceites Esenciales Personalizados',
    price: '$15.00',
    badge: 'Mezclas Personales',
    subtitle:
      'Mezclas personales formuladas a medida según tu energía y necesidad terapéutica en frasco de vidrio de 20ml con esencias puras.',
    meta: [
      { label: 'Presentación', value: 'Frasco 20ml' },
      { label: 'Fórmula', value: 'Personalizada' },
    ],
    ctaText: 'Pedir mi Aceite por WhatsApp',
    whatsappMessage:
      'Hola Johanna, deseo pedir un frasco de Aceite Esencial Personalizado de 20ml ($15 USD).',
  },
  {
    src: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80',
    alt: 'Cuarzos Consagrados para Protección',
    title: 'Cuarzos Consagrados de Protección',
    price: '$15.00',
    badge: 'Consagración Ritual',
    subtitle:
      'Cristales naturales activados y consagrados ritualmente para actuar como escudo protector y transmutar energías densas.',
    meta: [
      { label: 'Piedra', value: '100% Natural' },
      { label: 'Energía', value: 'Escudo Protector' },
    ],
    ctaText: 'Pedir Cuarzo por WhatsApp',
    whatsappMessage:
      'Hola Johanna, deseo encargar un Cuarzo Consagrado para Protección ($15 USD).',
  },
  {
    src: '/pulseras-amuletos.png',
    alt: 'Pulseras de Protección Consagradas',
    title: 'Pulseras de Protección Consagradas',
    price: '$12.00',
    badge: 'Amuleto Protector',
    subtitle:
      'Pulseras protectoras consagradas elaboradas con elementos de poder natural para acompañarte en tu día a día blindando tu aura.',
    meta: [
      { label: 'Cuentas', value: 'Piedras Naturales' },
      { label: 'Intención', value: 'Blindaje Áurico' },
    ],
    ctaText: 'Pedir mi Pulsera por WhatsApp',
    whatsappMessage:
      'Hola Johanna, deseo encargar una Pulsera de Protección Consagrada ($12 USD).',
  },
  {
    src: '/tarot-hero.png',
    alt: 'Lectura de Tarot Completa',
    title: 'Lectura de Tarot Completa',
    price: '$35.00',
    badge: 'Más Solicitada',
    subtitle:
      'Sesión profunda que incluye lectura general de tu momento vital, respuesta a 6 preguntas específicas y lectura de Ángeles y Ancestros.',
    meta: [
      { label: 'Preguntas', value: '6 Específicas' },
      { label: 'Canalización', value: 'Ángeles & Ancestros' },
    ],
    ctaText: 'Reservar Tarot Completo',
    whatsappMessage:
      'Hola Johanna, deseo reservar la Lectura de Tarot Completa con 6 preguntas y Ángeles/Ancestros ($35 USD).',
  },
  {
    src: '/johanna-hero.png',
    alt: 'Lectura Express de Tarot',
    title: 'Lectura Express de Tarot',
    price: '$20.00',
    badge: 'Sesión Express',
    subtitle:
      'Orientación clara y al punto para resolver dudas inmediatas. Incluye lectura general del panorama y 3 preguntas específicas.',
    meta: [
      { label: 'Preguntas', value: '3 Específicas' },
      { label: 'Enfoque', value: 'Directo y Ágil' },
    ],
    ctaText: 'Reservar Lectura Express',
    whatsappMessage:
      'Hola Johanna, deseo reservar la Lectura Express de Tarot ($20 USD).',
  },
  {
    src: '/hero-holistica-tambor.jpg',
    alt: 'Psicoterapia Asistida con Honguitos',
    title: 'Psicoterapia Asistida con Honguitos',
    price: '$120.00',
    badge: '4 Sesiones',
    subtitle:
      'Proceso terapéutico profundo de medicina enteógena guiada por Johanna Proaño. Paquete integral de 4 sesiones de sanación e integración.',
    meta: [
      { label: 'Paquete', value: '4 Sesiones' },
      { label: 'Guía', value: 'Terapéutica Experta' },
    ],
    ctaText: 'Consultar por WhatsApp',
    whatsappMessage:
      'Hola Johanna, me interesa el Paquete de 4 sesiones de Psicoterapia Asistida con Honguitos ($120 USD).',
  },
  {
    src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    alt: 'Psicoterapia con Registros Akáshicos',
    title: 'Psicoterapia con Registros Akáshicos',
    price: '$80.00',
    badge: '2 Sesiones',
    subtitle:
      'Apertura de tus memorias del alma para comprender el origen de bloqueos, patrones repetitivos y sanar contratos kármicos.',
    meta: [
      { label: 'Paquete', value: '2 Sesiones' },
      { label: 'Enfoque', value: 'Memorias del Alma' },
    ],
    ctaText: 'Reservar Registros Akáshicos',
    whatsappMessage:
      'Hola Johanna, deseo reservar las 2 sesiones de Psicoterapia con Registros Akáshicos ($80 USD).',
  },
  {
    src: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80',
    alt: 'Ceremonia de Ayahuasca en el Puyo',
    title: 'Ceremonia de Ayahuasca en el Puyo',
    price: '$160.00',
    badge: 'Retiro 2 Días',
    subtitle:
      'Inmersión ceremonial de 2 días en la selva del Puyo con la medicina sagrada Ayahuasca, purga, dietas y acompañamiento chamánico.',
    meta: [
      { label: 'Lugar', value: 'Puyo (Selva)' },
      { label: 'Duración', value: '2 Días Completos' },
    ],
    ctaText: 'Reservar Retiro en Puyo',
    whatsappMessage:
      'Hola Johanna, deseo reservar mi cupo para la Ceremonia de Ayahuasca en el Puyo ($160 USD).',
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    alt: 'Ceremonia de Unión de Pareja',
    title: 'Ceremonia de Unión de Pareja',
    price: '$120.00',
    badge: 'Ritual Sagrado',
    subtitle:
      'Ritual de bendición consciente de almas con los cuatro elementos sagrados, armonización energética y consagración de votos de amor.',
    meta: [
      { label: 'Elementos', value: 'Fuego, Agua, Tierra, Aire' },
      { label: 'Duración', value: '90 - 120 min' },
    ],
    ctaText: 'Agendar Ceremonia de Unión',
    whatsappMessage:
      'Hola Johanna, deseo agendar una Ceremonia de Unión de Pareja ($120 USD).',
  },
  {
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    alt: 'Ceremonia de Cacao y Círculo de Mujeres',
    title: 'Ceremonia de Cacao & Círculo de Mujeres',
    price: '$120.00',
    badge: 'Círculo Sagrado',
    subtitle:
      'Medicina del corazón con cacao puro ceremonial, cantos sagrados, meditación, danza y tejido de sabiduría femenina compartida.',
    meta: [
      { label: 'Medicina', value: 'Cacao Puro Ancestral' },
      { label: 'Duración', value: '3 Horas' },
    ],
    ctaText: 'Participar en Círculo de Cacao',
    whatsappMessage:
      'Hola Johanna, deseo participar en la Ceremonia de Cacao y Círculo de Mujeres ($120 USD).',
  },
];

const EDUCACION_COVERFLOW_SLIDES: CoverflowSlide[] = [
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    alt: 'Diagnóstico Psicopedagógico Integral',
    title: 'Diagnóstico Psicopedagógico Integral',
    price: '$40.00',
    badge: 'Evaluación Completa',
    subtitle:
      'Evaluación especializada de dificultades de aprendizaje, desarrollo del lenguaje y estilo cognitivo con informe para escuela y hogar.',
    meta: [
      { label: 'Duración', value: '60 a 75 min' },
      { label: 'Informe', value: 'Completo Incluido' },
    ],
    ctaText: 'Agendar Diagnóstico',
    whatsappMessage:
      'Hola Johanna, me gustaría agendar un Diagnóstico Psicopedagógico Integral para mi hijo(a).',
  },
  {
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80',
    alt: 'Play & Learn: Inmersión Bilingüe',
    title: 'Play & Learn: Inmersión Bilingüe',
    price: '$45.00',
    badge: 'Taller Continuo',
    subtitle:
      'Estimulación temprana del lenguaje en inglés y español a través de canciones, juegos sensoriales y dinámicas vivenciales.',
    meta: [
      { label: 'Edades', value: '2 a 6 años' },
      { label: 'Grupos', value: 'Personalizados' },
    ],
    ctaText: 'Inscribir a mi Hijo(a)',
    whatsappMessage:
      'Hola Johanna, deseo información para inscribir a mi hijo(a) en el Taller de Inmersión Bilingüe Infantil.',
  },
  {
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    alt: 'Asesoría y Pautas de Estudio en el Hogar',
    title: 'Escuela & Pautas de Estudio en el Hogar',
    price: '$35.00',
    badge: 'Pautas para Padres',
    subtitle:
      'Orientación para padres con estrategias pedagógicas concretas para crear rutinas de estudio amigables y apoyar la autonomía.',
    meta: [
      { label: 'Duración', value: '60 min' },
      { label: 'Modalidad', value: 'Presencial u Online' },
    ],
    ctaText: 'Solicitar Asesoría',
    whatsappMessage:
      'Hola Johanna, quiero una sesión de asesoría pedagógica y pautas para el hogar.',
  },
  {
    src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
    alt: 'Kit Didáctico de Lectoescritura & Atención',
    title: 'Kit Didáctico de Lectoescritura & Atención',
    price: '$28.00',
    badge: 'Kit Didáctico',
    subtitle:
      'Pack de fichas táctiles, tarjetas fonéticas bilingües y juegos de motricidad diseñados para reforzar el aprendizaje lúdico en casa.',
    meta: [
      { label: 'Material', value: 'Sensorial Plastificado' },
      { label: 'Guía', value: 'Para Padres Incluida' },
    ],
    ctaText: 'Adquirir Kit Didáctico',
    whatsappMessage:
      'Hola Johanna, deseo adquirir el Kit Didáctico Multisensorial de Refuerzo.',
  },
  {
    src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80',
    alt: 'Seguridad y Éxito Escolar en Niños Felices',
    title: 'Acompañamiento & Autonomía Escolar',
    price: '$60.00',
    badge: 'Acompañamiento',
    subtitle:
      'Seguimiento pedagógico continuo para construir seguridad, motivación y felicidad en su etapa escolar con bases sólidas.',
    meta: [
      { label: 'Enfoque', value: 'Pedagogía Positiva' },
      { label: 'Impacto', value: 'Autonomía & Éxito' },
    ],
    ctaText: 'Solicitar Acompañamiento',
    whatsappMessage:
      'Hola Johanna, deseo información sobre el plan de Acompañamiento y Autonomía Escolar.',
  },
];

export const ExperiencesSection: React.FC = () => {
  const { mode } = useNicheMode();
  const coverflowSlides = mode === 'educacion' ? EDUCACION_COVERFLOW_SLIDES : HOLISTICA_COVERFLOW_SLIDES;

  return (
    <section id="experiencias" className="relative py-14 sm:py-18 md:py-24 overflow-hidden bg-[#FAFCFD] text-[#133238] border-t border-[#D4A346]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título de las Promociones y Carrusel */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-serif tracking-[0.22em] text-[#B88E44] uppercase font-bold drop-shadow-xs block">
            ✦ PROMOCIONES & EXPERIENCIAS DESTACADAS ✦
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#133238] font-bold leading-tight drop-shadow-xs">
            {mode === 'educacion' ? (
              <>
                Programas &{' '}
                <span className="italic bg-gradient-to-r from-[#D4A346] via-[#B88E44] to-[#8C6420] bg-clip-text text-transparent font-normal">
                  Talleres en Promoción
                </span>
              </>
            ) : (
              <>
                Kits &{' '}
                <span className="italic bg-gradient-to-r from-[#D4A346] via-[#B88E44] to-[#8C6420] bg-clip-text text-transparent font-normal">
                  Terapias en Promoción
                </span>
              </>
            )}
          </h3>
          <p className="text-xs sm:text-sm text-[#2C484E] font-light max-w-md mx-auto leading-relaxed">
            Explora las tarjetas interactivas de nuestros kits y experiencias sagradas, con sus precios oficiales y reserva directa por WhatsApp.
          </p>
        </div>

        {/* Componente 3D CoverflowCarousel con información estructurada en tarjetas */}
        <CoverflowCarousel
          slides={coverflowSlides}
          cardWidth="clamp(260px, 28vw, 330px)"
          cardHeight="clamp(410px, 44vw, 475px)"
          rotate={36}
          depth={0.55}
          autoPlayInterval={2800}
          showCaption={false}
          showNavigation={true}
          showPagination={true}
          whatsappPhone={WHATSAPP_PHONE}
        />

      </div>
    </section>
  );
};

export default ExperiencesSection;
