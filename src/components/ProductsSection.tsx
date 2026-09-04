import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNicheMode } from '../context/NicheContext';
import { PRODUCTS, TEACHING_METHODS_EDUCACION, WHATSAPP_PHONE } from '../data';
import { ProductItem } from '../types';
import { ButterflyGraphic, FloralBouquet, WhatsAppOfficialIcon } from './FloralDecorations';
import { CardCurtainReveal, CardCurtainSplitCover } from './ui/card-curtain-reveal';
import { MessageCircle, Sparkles, Check, Eye, X, Shield, ArrowUpRight } from 'lucide-react';

import { CardCarousel } from './ui/card-carousel';
import { CelestialTitleGraphic } from './CelestialTitleGraphic';

export const ProductsSection: React.FC = () => {
  const { mode, targetSection } = useNicheMode();
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // En el modo educación se elimina la sección de productos / programas y talleres
  if (mode === 'educacion') {
    return null;
  }

  const currentItems = PRODUCTS;

  const getProductWhatsappUrl = (product: ProductItem) => {
    const message = `Hola Casa Kinti, me gustaría consultar y adquirir el producto: *${product.name}* (${product.price}).`;
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
        <>
          {/* Cabecera Principal de Productos (Estilo Luxe Turquesa & Oro) */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative mb-12 sm:mb-16 md:mb-20">
              <motion.div
                key={`${mode}-products-header-${targetSection?.startsWith('productos') ? targetSection : 'default'}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="space-y-4 relative z-10"
              >
                {/* Separador celestial centrado arriba del título solo en móviles */}
                <div className="flex md:hidden justify-center items-center mb-3 w-full">
                  <CelestialTitleGraphic side="full" className="w-52 xs:w-64 h-auto" />
                </div>

                <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 flex-wrap md:flex-nowrap w-full">
                  <CelestialTitleGraphic side="left" className="hidden md:block w-14 xs:w-20 sm:w-28 md:w-36 lg:w-48 xl:w-56 h-auto shrink-0" />
                  <h2 className="font-serif text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#052C34] font-bold leading-tight drop-shadow-xs whitespace-normal md:whitespace-nowrap text-center">
                    Elementos Sagrados &{' '}
                    <span className="italic bg-gradient-to-r from-[#FFF8D6] via-[#FFD700] to-[#FFA000] bg-clip-text text-transparent font-normal inline">
                      Protección
                    </span>
                  </h2>
                  <CelestialTitleGraphic side="right" className="hidden md:block w-14 xs:w-20 sm:w-28 md:w-36 lg:w-48 xl:w-56 h-auto shrink-0" />
                </div>
              </motion.div>
            </div>

            {/* Grid de Productos con Animación Card Curtain Reveal */}
            <div
              key={`${mode}-products-grid-${targetSection?.startsWith('productos') ? targetSection : 'default'}`}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentItems.map((product, idx) => {
                return (
                  <motion.div
                    key={`${product.id}-${targetSection?.startsWith('productos') ? targetSection : 'default'}`}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
                    className="relative overflow-visible"
                  >
                    <CardCurtainReveal
                      id={`product-card-${product.id}`}
                      className="group relative bg-[#07242C]/90 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_rgba(255,215,0,0.35)] border border-[#FFD700]/40 hover:border-[#FFD700] transition-all duration-300 min-h-[380px] sm:min-h-[400px] flex flex-col justify-between"
                    >
                      <CardCurtainSplitCover
                        image={product.image}
                        title={product.name}
                        price={product.price}
                        badge={product.badge}
                        category={product.category}
                      />

                      <div className="absolute inset-0 z-10 p-5 sm:p-6 flex flex-col justify-center items-center gap-5 w-full bg-gradient-to-b from-[#07242C] via-[#09323A] to-[#051B20] text-white">
                        <div className="flex flex-wrap items-center justify-center gap-1.5 shrink-0 w-full">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFF8D6] bg-[#0A343D] px-3 py-1 rounded-full border border-[#FFD700]/30 shadow-xs">
                            {product.category}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light max-w-xs mx-auto text-center">
                          {product.description}
                        </p>

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
                    </CardCurtainReveal>
                  </motion.div>
                );
              })}
            </div>
          </>
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
                    Propiedades & Beneficios:
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
                <span>Comprar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
