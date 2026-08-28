import React, { useState } from 'react';
import { PRODUCTS, WHATSAPP_PHONE } from '../data';
import { ProductItem } from '../types';
import { ButterflyGraphic, FloralBouquet } from './FloralDecorations';
import { MessageCircle, Sparkles, Check, Eye, X, Shield, ArrowUpRight } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const getProductWhatsappUrl = (product: ProductItem) => {
    const message = `Hola Casa Kinti, me gustaría consultar y adquirir el producto: *${product.name}* (${product.price}).`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="productos"
      className="relative py-24 bg-gradient-to-b from-[#C9D4F5]/30 via-[#FFFFFF] to-[#DCEEFB]/40 overflow-hidden"
    >
      {/* Botánicos en esquinas */}
      <FloralBouquet className="absolute top-8 right-0 w-40 h-40 opacity-40 -z-5" />
      <FloralBouquet className="absolute bottom-8 left-0 w-40 h-40 opacity-40 -z-5" flip />
      <ButterflyGraphic className="absolute top-16 left-[10%] opacity-65" size={32} color="blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado Editorial */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#DCEEFB] text-[#6B7FD1] text-xs font-bold uppercase tracking-[0.2em] border border-[#9B8FD9]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#9B8FD9]" />
            <span>Tienda Holística & Sagrada</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#3E4A7A]">
            Productos &{' '}
            <span className="font-script text-[#9B8FD9] text-4xl sm:text-5xl md:text-6xl font-normal">
              Amuletos
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#3E4A7A]/80 font-normal">
            Elementos naturales consagrados, aceites puros y amuletos con estudio radiestésico para proteger y armonizar tu energía.
          </p>
        </div>

        {/* Grid de Productos Catálogo Editorial */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => {
            const isBracelets = product.id === 'pulseras-amuletos';
            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-[#C9D4F5]/80 hover:border-[#9B8FD9] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Badge flotante destacado */}
                {product.badge && (
                  <div
                    className={`absolute top-4 left-4 z-20 px-3.5 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5 ${
                      isBracelets
                        ? 'bg-[#12A89D] text-white border border-white/60'
                        : 'bg-[#9B8FD9] text-white border border-white/60'
                    }`}
                  >
                    <Sparkles className="w-3 h-3 text-[#F5C84C]" />
                    <span>{product.badge}</span>
                  </div>
                )}

                {/* Imagen Cuadrada con Efecto Zoom */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#F0C6D9]/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  
                  {/* Overlay sutil al hover con botón de vista rápida */}
                  <div className="absolute inset-0 bg-[#3E4A7A]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="bg-white/95 text-[#3E4A7A] hover:text-[#6B7FD1] text-xs font-bold px-4 py-2 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ver Detalles</span>
                    </button>
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-6 flex flex-col flex-grow justify-between text-center space-y-4">
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#9B8FD9] uppercase block mb-1">
                      {product.category}
                    </span>

                    <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#3E4A7A] group-hover:text-[#6B7FD1] transition-colors leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#3E4A7A]/75 mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#C9D4F5]/40 space-y-3">
                    {/* Precio en Negrita */}
                    <div className="text-xl font-bold font-serif-display text-[#3E4A7A]">
                      {product.price}
                    </div>

                    {/* Botón pequeño Consultar por WhatsApp */}
                    <div className="flex gap-2">
                      <a
                        href={getProductWhatsappUrl(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#6B7FD1] hover:bg-[#9B8FD9] text-white text-xs font-semibold py-2.5 px-4 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 active:scale-95"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-white" />
                        <span>Consultar por WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Nota de asesoría personalizada */}
        <div className="mt-12 text-center bg-white/80 p-5 rounded-2xl border border-[#9B8FD9]/30 max-w-xl mx-auto shadow-xs">
          <p className="text-xs sm:text-sm text-[#3E4A7A] font-medium flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#12A89D]" />
            <span>¿No sabes qué piedra necesitas? Agenda tu <strong>estudio radiestésico gratuito</strong> al solicitar tus pulseras.</span>
          </p>
        </div>

      </div>

      {/* Modal de Detalle de Producto */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3E4A7A]/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#C9D4F5] overflow-hidden"
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

            <div className="space-y-5">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#DCEEFB]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                {selectedProduct.badge && (
                  <span className="absolute bottom-3 left-3 bg-[#6B7FD1] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {selectedProduct.badge}
                  </span>
                )}
              </div>

              <div>
                <span className="text-xs font-bold text-[#9B8FD9] uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                <h3 className="font-serif-display text-2xl font-bold text-[#3E4A7A] mt-1">
                  {selectedProduct.name}
                </h3>
                <p className="text-xl font-bold text-[#6B7FD1] mt-1 font-serif-display">
                  {selectedProduct.price}
                </p>
                <p className="text-sm text-[#3E4A7A]/80 mt-3 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {selectedProduct.benefits && (
                <div className="bg-[#DCEEFB]/40 p-4 rounded-2xl border border-[#9B8FD9]/20">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7FD1] mb-2 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Propiedades y Beneficios:</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProduct.benefits.map((b, idx) => (
                      <li key={idx} className="text-xs text-[#3E4A7A] flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#12A89D] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                href={getProductWhatsappUrl(selectedProduct)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all duration-200 hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Pedir o Consultar por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
