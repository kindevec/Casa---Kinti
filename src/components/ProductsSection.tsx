import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNicheMode } from '../context/NicheContext';
import { PRODUCTS, COURSES_EDUCACION, WHATSAPP_PHONE } from '../data';
import { ProductItem } from '../types';
import { ButterflyGraphic, FloralBouquet, WhatsAppOfficialIcon } from './FloralDecorations';
import { CardCurtainReveal, CardCurtainSplitCover } from './ui/card-curtain-reveal';
import { MessageCircle, Sparkles, Check, Eye, X, Shield, ArrowUpRight } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const { mode } = useNicheMode();
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const currentItems = mode === 'educacion' ? COURSES_EDUCACION : PRODUCTS;

  const getProductWhatsappUrl = (product: ProductItem) => {
    const prefix = mode === 'educacion' ? 'inscribirme en el curso / taller' : 'consultar y adquirir el producto';
    const message = `Hola Casa Kinti, me gustaría ${prefix}: *${product.name}* (${product.price}).`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="productos"
      data-mode={mode}
      className="relative pt-10 sm:pt-16 md:pt-20 pb-4 sm:pb-8 bg-gradient-to-b from-[#E8F3FD] via-[#F4F9FE] to-[#E8F3FD] overflow-hidden transition-colors duration-500"
    >
      {/* Botánicos en esquinas */}
      <FloralBouquet className="absolute top-8 right-0 w-40 h-40 opacity-40 -z-5" />
      <FloralBouquet className="absolute bottom-8 left-0 w-40 h-40 opacity-40 -z-5" flip />
      <ButterflyGraphic className="absolute top-16 left-[10%] opacity-65" size={32} color="blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera Principal de Productos / Cursos (Diseño unificado con espaciado estandarizado) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative mb-8 sm:mb-12 md:mb-16">
          <FloralBouquet className="absolute -top-6 -left-6 w-32 h-32 opacity-60 pointer-events-none hidden sm:block" />
          <FloralBouquet className="absolute -bottom-6 -right-6 w-32 h-32 opacity-60 pointer-events-none hidden sm:block" flip />
          <ButterflyGraphic className="absolute top-4 right-6 sm:right-10" size={36} color="purple" />
          <ButterflyGraphic className="absolute bottom-2 left-6 sm:left-10" size={28} color="pink" />

          <div key={mode + '-products-header'} className="space-y-4 relative z-10 animate-in fade-in duration-300">
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#3E4A7A]">
              {mode === 'educacion' ? (
                <>
                  Cursos &{' '}
                  <span className="font-script text-[#9B8FD9] text-5xl sm:text-6xl font-normal block sm:inline">
                    Talleres
                  </span>
                </>
              ) : (
                <>
                  Productos &{' '}
                  <span className="font-script text-[#9B8FD9] text-5xl sm:text-6xl font-normal block sm:inline">
                    Amuletos
                  </span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-black font-normal leading-relaxed max-w-2xl mx-auto">
              {mode === 'educacion'
                ? 'Programas de inmersión bilingüe, escuela para familias y kits didácticos multisensoriales para potenciar el aprendizaje y desarrollo infantil.'
                : 'Elementos naturales consagrados, aceites puros y amuletos con estudio radiestésico para proteger y armonizar tu energía.'}
            </p>
          </div>
        </div>

        {/* Grid de Productos o Cursos con Animación Card Curtain Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((product, idx) => {
            const isBracelets = product.id === 'pulseras-amuletos';
            return (
              <div key={product.id} className="relative overflow-visible">
                {/* Mariposa con movimiento continuo flotando POR FUERA del contenedor */}
                <motion.div
                  className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 z-40 pointer-events-none"
                  animate={{
                    x: [0, 4, -4, 3, 0],
                    y: [0, -6, 3, -4, 0],
                    rotate: [-6, 8, -8, 6, -6],
                    scale: [0.95, 1.08, 0.96, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 5.5 + (idx % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ButterflyGraphic
                    size={30}
                    color={idx % 2 === 0 ? 'pink' : 'purple'}
                  />
                </motion.div>

                <CardCurtainReveal
                  id={`product-card-${product.id}`}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-[#C9D4F5] hover:border-[#9B8FD9] transition-all duration-300 min-h-[380px] sm:min-h-[400px] flex flex-col justify-between"
                >
                  {/* ========================================================
                      1. CORTINA FRONTAL QUE SE ABRE EN 2 HOJAS (IZQ Y DER)
                      Muestra imagen completa sin recortar, título y precio
                     ======================================================== */}
                  <CardCurtainSplitCover
                    image={product.image}
                    title={product.name}
                    price={product.price}
                    badge={product.badge}
                    category={product.category}
                  />

                  {/* ========================================================
                      2. CONTENIDO INTERIOR REVELADO (ADAPTADO AL CONTENEDOR)
                     ======================================================== */}
                  <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between h-full w-full bg-gradient-to-br from-[#FFFFFF] via-[#F3F7FE] to-[#DCEEFB] text-[#3E4A7A]">
                    
                    {/* Categoría e Insignias centradas */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 border-b border-[#C9D4F5]/60 pb-2.5 shrink-0 w-full">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7FD1] bg-[#DCEEFB] px-3 py-1 rounded-full border border-[#C9D4F5]/80 shadow-xs">
                        {product.category}
                      </span>

                      {product.badge && (
                        <div
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs uppercase tracking-wider flex items-center gap-1 ${
                            isBracelets
                              ? 'bg-[#F5C84C] text-[#3E4A7A]'
                              : 'bg-[#7F93D8] text-white'
                          }`}
                        >
                          {isBracelets && <Sparkles className="w-2.5 h-2.5" />}
                          <span>{product.badge}</span>
                        </div>
                      )}
                    </div>

                    {/* Contenido: Descripción y Beneficios adaptados al alto del contenedor */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center my-auto py-2.5 space-y-3 w-full">
                      <p className="text-xs sm:text-sm text-black leading-relaxed font-normal max-w-xs mx-auto">
                        {product.description}
                      </p>

                      {product.benefits && (
                        <ul className="flex flex-col items-center justify-center space-y-1.5 pt-2.5 border-t border-[#C9D4F5]/60 w-full max-w-xs mx-auto">
                          {product.benefits.slice(0, 3).map((benefit, bIdx) => (
                            <li key={bIdx} className="text-xs sm:text-sm text-black flex items-center justify-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#12A89D] shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Botón de Contactar con Barra Pastel Animada */}
                    <div className="pt-2.5 border-t border-[#C9D4F5]/60 flex items-center justify-center shrink-0 w-full">
                      <a
                        href={getProductWhatsappUrl(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden w-full py-3 px-4 rounded-2xl bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] hover:bg-gradient-to-tr hover:from-[#6B7FD1] hover:via-[#8E82DA] hover:to-[#E8A2C2] text-black hover:text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-[0_6px_18px_rgba(107,127,209,0.45)] flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-95 group/btn"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                        <WhatsAppOfficialIcon className="relative z-10 w-5 h-5 text-[#6B7FD1] group-hover/btn:text-white group-hover/btn:rotate-12 transition-all duration-300 shrink-0" />
                        <span className="relative z-10">Contactar por WhatsApp</span>
                      </a>
                    </div>

                  </div>

                </CardCurtainReveal>
            </div>
          );
        })}
      </div>

      </div>

      {/* Modal Detalle de Producto o Curso */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3E4A7A]/50 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#C9D4F5] p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#DCEEFB] text-[#3E4A7A] hover:bg-[#C9D4F5] transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-16/9 rounded-2xl overflow-hidden bg-[#DCEEFB]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B7FD1]">
                  {selectedProduct.category}
                </span>
                <span className="text-2xl font-bold font-serif-display text-[#3E4A7A]">
                  {selectedProduct.price}
                </span>
              </div>

              <h4 className="font-serif-display text-2xl font-bold text-[#3E4A7A]">
                {selectedProduct.name}
              </h4>

              <p className="text-sm text-black leading-relaxed">
                {selectedProduct.description}
              </p>

              {selectedProduct.benefits && (
                <div className="space-y-2 pt-3 border-t border-[#C9D4F5]/40">
                  <span className="text-xs font-bold uppercase text-black block">
                    {mode === 'educacion' ? 'Lo que incluye el curso / material:' : 'Propiedades & Beneficios:'}
                  </span>
                  <ul className="space-y-1.5">
                    {selectedProduct.benefits.map((b, idx) => (
                      <li key={idx} className="text-xs text-black flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#12A89D] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getProductWhatsappUrl(selectedProduct)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                <span>
                  {mode === 'educacion'
                    ? 'Inscribirme por WhatsApp'
                    : 'Comprar por WhatsApp'}
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
