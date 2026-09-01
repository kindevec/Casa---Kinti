import React, { useState } from 'react';
import { useNicheMode } from '../context/NicheContext';
import { WHATSAPP_PHONE } from '../data';
import { Check, Sparkles, Gift, Tag, ExternalLink, X, ZoomIn } from 'lucide-react';
import { WhatsAppOfficialIcon } from './FloralDecorations';

interface KitCardData {
  id: string;
  kitNumber: string;
  title: string;
  subtitle: string;
  price: string;
  badge: string;
  isFeatured?: boolean;
  image: string;
  duration: string;
  description: string;
  features: string[];
  whatsappMessage: string;
}

const KITS_ABRE_CAMINOS: KitCardData[] = [
  {
    id: 'kit-1',
    kitNumber: 'KIT 1',
    title: 'Baños de Despojo & Florecimiento',
    subtitle: 'Armonización Canalizada Personal',
    price: '50 usd',
    badge: 'Acompañamiento Terapéutico',
    image: '/kit-1-abre-caminos.jpg',
    duration: '2 a 3 horas de duración',
    description:
      'Baños de despojo y florecimiento con aceites y plantas, armonización canalizada personal de centros energéticos: consiste en una limpia energética con plantas y sahumos naturales con previo acompañamiento terapéutico para diagnosticar qué centro energético está bloqueado por medio del péndulo. Totalmente personalizado.',
    features: [
      'Limpia energética con plantas y sahumos naturales',
      'Diagnóstico previo con péndulo de centros bloqueados',
      'Baños de despojo y florecimiento con aceites',
      'Sesión totalmente personalizada (2 a 3 horas)',
    ],
    whatsappMessage:
      'Hola Johanna, deseo adquirir el Kit 1 Abre Caminos ($50 USD): Baños de despojo, florecimiento y armonización personal.',
  },
  {
    id: 'kit-2',
    kitNumber: 'KIT 2',
    title: 'Limpia Integral & Armonización de Espacio',
    subtitle: 'Equilibrio de los 7 Chakras y tu Hogar',
    price: '100 usd',
    badge: 'Más Completo',
    isFeatured: true,
    image: '/kit-2-abre-caminos.jpg',
    duration: 'Sesión Integral Personal + Espacio',
    description:
      'Limpia con plantas, humos + armonización canalizada personal + limpia y armonización de espacio: Un kit completo para equilibrar tus 7 centros energéticos y el espacio inmediato en el que habitas.',
    features: [
      'Limpia profunda con plantas y humos sagrados',
      'Armonización canalizada personal de alta vibración',
      'Equilibrio completo de tus 7 centros energéticos',
      'Limpia y armonización energética del espacio/hogar',
    ],
    whatsappMessage:
      'Hola Johanna, deseo adquirir el Kit 2 Abre Caminos ($100 USD): Limpia integral de 7 centros y armonización de espacio.',
  },
  {
    id: 'kit-3',
    kitNumber: 'KIT 3',
    title: 'Limpias con Medicina del Rapé',
    subtitle: 'Cuencos Tibetanos & Ondas Binaurales',
    price: '50 usd',
    badge: 'Medicina Sagrada',
    image: '/kit-3-abre-caminos.jpg',
    duration: 'Ceremonia & Meditación Profunda',
    description:
      'Limpias Abre caminos con medicina del Rapé, medicina milenaria que libera patrones de comportamiento obsoletos y memorias erróneas, se complementa con una meditación profunda canalizada mientras tus centros energéticos se limpian con cuarzos, acompañada de los sonidos de los cuencos y ondas binaurales.',
    features: [
      'Medicina milenaria de Rapé sagrado liberador',
      'Liberación de patrones y memorias erróneas',
      'Limpieza de centros energéticos con cuarzos',
      'Meditación con cuencos sagrados y ondas binaurales',
    ],
    whatsappMessage:
      'Hola Johanna, deseo adquirir el Kit 3 Abre Caminos ($50 USD): Limpias con medicina del Rapé, cuencos y ondas binaurales.',
  },
];

const KITS_EDUCACION: KitCardData[] = [
  {
    id: 'edu-1',
    kitNumber: 'PROGRAMA 1',
    title: 'Diagnóstico Psicopedagógico Integral',
    subtitle: 'Evaluación Cognitiva y del Lenguaje',
    price: '40 usd',
    badge: 'Evaluación Completa',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    duration: '60 a 75 min',
    description:
      'Evaluación especializada de dificultades de aprendizaje, desarrollo del lenguaje y estilo cognitivo. Incluye informe pedagógico detallado con pautas para la escuela y el hogar.',
    features: [
      'Evaluación personalizada de estilo cognitivo',
      'Detección temprana de bloqueos de aprendizaje',
      'Informe psicopedagógico formal para escuela y hogar',
      'Plan de intervención y recomendaciones familiares',
    ],
    whatsappMessage:
      'Hola Johanna, me gustaría agendar un Diagnóstico Psicopedagógico Integral para mi hijo(a) ($40 USD).',
  },
  {
    id: 'edu-2',
    kitNumber: 'PROGRAMA 2',
    title: 'Play & Learn: Inmersión Bilingüe',
    subtitle: 'Estimulación Temprana Lúdica',
    price: '45 usd',
    badge: 'Más Solicitado',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80',
    duration: 'Taller Continuo Mensual',
    description:
      'Estimulación temprana del lenguaje en inglés y español a través de canciones, dinámicas sensoriales y juegos vivenciales que potencian la plasticidad neuronal en edades tempranas (2 a 6 años).',
    features: [
      'Inmersión lingüística natural e interactiva',
      'Desarrollo de motricidad fina y socialización',
      'Grupos reducidos con seguimiento cercano',
      'Material sensorial y lúdico incluido',
    ],
    whatsappMessage:
      'Hola Johanna, deseo información para inscribir a mi hijo(a) en el Taller de Inmersión Bilingüe ($45 USD).',
  },
  {
    id: 'edu-3',
    kitNumber: 'PROGRAMA 3',
    title: 'Kit Didáctico Multisensorial',
    subtitle: 'Lectoescritura & Atención en Casa',
    price: '28 usd',
    badge: 'Material Físico',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
    duration: 'Pack de Material + Guía Familiar',
    description:
      'Pack de fichas táctiles, tarjetas fonéticas bilingües y juegos de concentración diseñados para reforzar el aprendizaje lúdico en casa sin estrés ni frustración.',
    features: [
      'Fichas sensoriales plastificadas de alta duración',
      'Tarjetas fonéticas bilingües inglés/español',
      'Guía paso a paso para padres con dinámicas de juego',
      'Foco en lectoescritura, memoria y atención',
    ],
    whatsappMessage:
      'Hola Johanna, deseo adquirir el Kit Didáctico Multisensorial de Refuerzo ($28 USD).',
  },
];

export const ExperiencesSection: React.FC = () => {
  const { mode } = useNicheMode();
  const [selectedFlyer, setSelectedFlyer] = useState<{ src: string; alt: string; title: string } | null>(null);

  const kits = mode === 'educacion' ? KITS_EDUCACION : KITS_ABRE_CAMINOS;

  return (
    <section id="experiencias" className="relative py-14 sm:py-18 md:py-24 overflow-hidden bg-[#FAFCFD] text-[#133238] border-t border-[#D4A346]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de la Sección */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-serif tracking-[0.22em] text-[#B88E44] uppercase font-bold drop-shadow-xs block">
            ✦ PROMOCIONES & KITS DESTACADOS ✦
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
                Kits Abre Caminos de{' '}
                <span className="italic bg-gradient-to-r from-[#D4A346] via-[#B88E44] to-[#8C6420] bg-clip-text text-transparent font-normal">
                  Casa Kinti
                </span>
              </>
            )}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-[#2C484E] font-light max-w-2xl mx-auto leading-relaxed">
            {mode === 'educacion'
              ? 'Programas especializados diseñados para acompañar el neurodesarrollo y la autonomía escolar con amor y rigor científico.'
              : 'Experimenta el gozo de liberar emociones bloqueadas para abrir los nuevos caminos de prosperidad.'}
          </p>
        </div>

        {/* Cuadrícula de 3 Tarjetas de Kits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {kits.map((kit) => {
            const isKit2 = kit.isFeatured;
            return (
              <div
                key={kit.id}
                className={`group relative rounded-3xl overflow-hidden bg-white transition-all duration-400 flex flex-col justify-between ${
                  isKit2
                    ? 'border-2 border-[#D4A346] shadow-[0_16px_40px_rgba(212,163,70,0.24)] ring-1 ring-[#FFD700]/50 md:-translate-y-2'
                    : 'border border-[#D4A346]/30 shadow-[0_10px_28px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_35px_rgba(212,178,111,0.18)] hover:-translate-y-1'
                }`}
              >
                {/* Zona Superior: Imagen con Badges y Precio */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-[#041A20] shrink-0">
                  <img
                    src={kit.image}
                    alt={kit.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Sombra sutil para legibilidad de badges */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/35 pointer-events-none" />

                  {/* Insignia de Número de Kit / Categoría */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="bg-[#052C34]/90 backdrop-blur-md text-[#FFEA79] font-serif text-[11px] sm:text-xs font-bold tracking-wider px-3 py-1 rounded-full border border-[#FFEA79]/40 shadow-sm">
                      {kit.kitNumber}
                    </span>
                    {kit.isFeatured && (
                      <span className="bg-gradient-to-r from-[#D4A346] to-[#B88E44] text-[#0A1C24] font-serif text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        ★ Más Completo
                      </span>
                    )}
                  </div>

                  {/* Cápsula de Precio Oficial */}
                  <span className="absolute top-3 right-3 bg-gradient-to-r from-[#FFF8D6] via-[#FFD700] to-[#E5A824] text-[#0A1C24] font-serif font-black text-xs sm:text-sm px-3.5 py-1 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.35)] border border-white/70">
                    Precio: {kit.price}
                  </span>

                  {/* Botón de lupa para ver flyer completo */}
                  <button
                    type="button"
                    onClick={() => setSelectedFlyer({ src: kit.image, alt: kit.title, title: kit.title })}
                    className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/85 text-white/90 hover:text-white p-2 rounded-full backdrop-blur-md border border-white/30 transition-all hover:scale-110 cursor-pointer"
                    title="Ver flyer completo"
                    aria-label="Ver flyer completo"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>

                  {/* Duración en la parte inferior de la foto */}
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/85 backdrop-blur-sm text-[#133238] font-medium text-[11px] px-2.5 py-0.5 rounded-md border border-[#D4A346]/40 shadow-xs">
                      ⏱ {kit.duration}
                    </span>
                  </div>
                </div>

                {/* Zona Inferior: Contenido Estructurado */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-white via-[#FCFDFE] to-[#F7FAFA] border-t border-[#E5C985]/30">
                  <div>
                    {/* Título & Subtítulo */}
                    <div className="mb-3">
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-[#0A1C24] group-hover:text-[#8C6420] transition-colors leading-snug">
                        {kit.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#B88E44] font-semibold tracking-wide mt-0.5">
                        {kit.subtitle}
                      </p>
                    </div>

                    {/* Descripción completa */}
                    <p className="text-xs sm:text-[13px] text-[#2C484E] leading-relaxed mb-4 font-normal">
                      {kit.description}
                    </p>

                    {/* Lista de Puntos Clave */}
                    <div className="space-y-1.5 mb-5">
                      {kit.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-[12.5px] text-[#133238]">
                          <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Beneficio de Regalo y Botón WhatsApp */}
                  <div className="pt-3 border-t border-[#E5C985]/30 space-y-3">
                    {mode === 'holistica' && (
                      <div className="bg-[#FFF8D6]/80 border border-[#E5C985]/60 rounded-xl p-2.5 text-[11px] sm:text-xs text-[#133238] flex items-center gap-2">
                        <Gift className="w-4 h-4 text-[#B88E44] shrink-0" />
                        <span>
                          <strong>Regalo:</strong> Amuleto protector o lectura de péndulo (3 preguntas).
                        </span>
                      </div>
                    )}

                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(kit.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-[#25D366] to-[#1EBE5D] hover:from-[#20bd5a] hover:to-[#17a84e] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-full shadow-md shadow-[#25D366]/20 transition-all duration-200 hover:scale-102 active:scale-98 flex items-center justify-center gap-2 cursor-pointer select-none"
                    >
                      <WhatsAppOfficialIcon className="w-4 h-4 text-white shrink-0" />
                      <span>Pedir {kit.kitNumber} por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Promoción Especial */}
        {mode === 'holistica' && (
          <div className="max-w-4xl mx-auto mt-10 sm:mt-14 bg-gradient-to-r from-[#041A20] via-[#072B33] to-[#041A20] border-2 border-[#E5C985]/40 rounded-3xl p-6 sm:p-8 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD700] uppercase tracking-wider bg-[#FFF8D6]/10 px-3 py-1 rounded-full border border-[#FFD700]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" /> Promoción de Apertura de Caminos
              </span>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF8D6]">
                Con la compra de 2 kits obtendrás el 10% de descuento
              </h4>

              <p className="text-xs sm:text-sm text-[#D7E3E5] max-w-2xl mx-auto leading-relaxed">
                Por cada kit recibe un amuleto de protección como regalo o si deseas una lectura de péndulo de 3 preguntas.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#E5C985]">
                <span>WhatsApp: <strong>0983 442 341</strong></span>
                <span>•</span>
                <span>Facebook: <strong>casakinti</strong></span>
                <span>•</span>
                <span>Instagram: <strong>@casa_kinti_</strong></span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Modal Lightbox para ver flyer en grande */}
      {selectedFlyer && (
        <div
          className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedFlyer(null)}
        >
          <div
            className="relative max-w-lg w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 bg-[#041A20] text-white flex items-center justify-between border-b border-[#D4A346]/40">
              <span className="font-serif text-sm font-bold text-[#FFD700]">{selectedFlyer.title}</span>
              <button
                type="button"
                onClick={() => setSelectedFlyer(null)}
                className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 overflow-y-auto flex items-center justify-center bg-[#07242B]">
              <img
                src={selectedFlyer.src}
                alt={selectedFlyer.alt}
                className="w-full h-auto max-h-[78vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperiencesSection;
