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
      className="relative pt-14 sm:pt-20 md:pt-24 pb-14 sm:pb-20 bg-gradient-to-b from-[#4AAEA5] via-[#5CBDB5] to-[#3E9C93] text-white overflow-hidden transition-colors duration-500"
    >
      {/* Destellos y polvo estelar dorado */}
      <div className="absolute inset-0 pointer-events-none opacity-20 -z-5">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <circle cx="180" cy="140" r="2" fill="#FFD700" />
          <circle cx="500" cy="280" r="1.6" fill="#FFFFFF" />
          <circle cx="1100" cy="180" r="2.2" fill="#FFF5C0" />
          <circle cx="850" cy="550" r="1.8" fill="#FFEA79" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera Principal de Productos / Cursos (Estilo Luxe Turquesa & Oro) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative mb-12 sm:mb-16 md:mb-20">
          <div key={mode + '-products-header'} className="space-y-4 relative z-10 animate-in fade-in duration-300">
            <span className="text-[11px] sm:text-xs font-serif tracking-[0.24em] text-[#FFD700] uppercase font-bold drop-shadow-xs block">
              {mode === 'educacion' ? '✦ FORMACIÓN & ESTIMULACIÓN INFANTIL ✦' : '✦ ELEMENTOS SAGRADOS & PROTECCIÓN ✦'}
            </span>

            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#052C34] font-bold leading-tight drop-shadow-xs">
              {mode === 'educacion' ? (
                <>
                  Cursos &{' '}
                  <span className="italic bg-gradient-to-r from-[#FFF8D6] via-[#FFD700] to-[#FFA000] bg-clip-text text-transparent font-normal block sm:inline">
                    Talleres
                  </span>
                </>
              ) : (
                <>
                  Productos &{' '}
                  <span className="italic bg-gradient-to-r from-[#FFF8D6] via-[#FFD700] to-[#FFA000] bg-clip-text text-transparent font-normal block sm:inline">
                    Amuletos
                  </span>
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#052C34]/95 font-medium leading-relaxed max-w-3xl mx-auto">
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
                <CardCurtainReveal
                  id={`product-card-${product.id}`}
                  className="group relative bg-[#07242C]/90 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_rgba(255,215,0,0.35)] border border-[#FFD700]/40 hover:border-[#FFD700] transition-all duration-300 min-h-[380px] sm:min-h-[400px] flex flex-col justify-between"
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
                  <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between h-full w-full bg-gradient-to-b from-[#07242C] via-[#09323A] to-[#051B20] text-white">
                    
                    {/* Categoría e Insignias centradas */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 border-b border-white/10 pb-2.5 shrink-0 w-full">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFF8D6] bg-[#0A343D] px-3 py-1 rounded-full border border-[#FFD700]/30 shadow-xs">
                        {product.category}
                      </span>

                      {product.badge && (
                        <div
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs uppercase tracking-wider flex items-center gap-1 bg-[#FFD700] text-[#0A1C24]"
                        >
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>{product.badge}</span>
                        </div>
                      )}
                    </div>

                    {/* Contenido: Descripción y Beneficios adaptados al alto del contenedor */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center my-auto py-2.5 space-y-3 w-full">
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light max-w-xs mx-auto">
                        {product.description}
                      </p>

                      {product.benefits && (
                        <ul className="flex flex-col items-center justify-center space-y-1.5 pt-2.5 border-t border-white/10 w-full max-w-xs mx-auto">
                          {product.benefits.slice(0, 3).map((benefit, bIdx) => (
                            <li key={bIdx} className="text-xs sm:text-sm text-white/95 flex items-center justify-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Botón de Contactar en Oro 24K */}
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-center shrink-0 w-full">
                      <a
                        href={getProductWhatsappUrl(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden w-full py-3.5 px-4 rounded-sm bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#ECD394] hover:to-[#DEC080] text-[#0A1C24] text-xs sm:text-sm font-serif font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-[0_6px_22px_rgba(255,215,0,0.5)] flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-97 group/btn"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                        <WhatsAppOfficialIcon className="relative z-10 w-5 h-5 text-[#0A1C24] shrink-0" />
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#133238]/50 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E8F0F5] p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#FFFFFF] text-[#133238] hover:bg-[#E8F0F5] transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-16/9 rounded-2xl overflow-hidden bg-[#FFFFFF]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#043651]">
                  {selectedProduct.category}
                </span>
                <span className="text-2xl font-bold font-serif-display text-[#133238]">
                  {selectedProduct.price}
                </span>
              </div>

              <h4 className="font-serif-display text-2xl font-bold text-[#133238]">
                {selectedProduct.name}
              </h4>

              <p className="text-sm text-black leading-relaxed">
                {selectedProduct.description}
              </p>

              {selectedProduct.benefits && (
                <div className="space-y-2 pt-3 border-t border-[#E8F0F5]/40">
                  <span className="text-xs font-bold uppercase text-black block">
                    {mode === 'educacion' ? 'Lo que incluye el curso / material:' : 'Propiedades & Beneficios:'}
                  </span>
                  <ul className="space-y-1.5">
                    {selectedProduct.benefits.map((b, idx) => (
                      <li key={idx} className="text-xs text-black flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#2B7294] shrink-0" />
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
