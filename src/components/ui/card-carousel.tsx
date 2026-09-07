import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WhatsAppOfficialIcon } from "../FloralDecorations";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { cn } from "../../lib/utils";

export interface CarouselCardItem {
  id?: string;
  title: string;
  image: string;
  subtitle?: string;
  badge?: string;
  description?: string;
  benefits?: string[];
  price?: string;
  whatsappMessage?: string;
}

interface CardCarouselProps {
  items?: CarouselCardItem[];
  images?: { src: string; alt: string }[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
  badgeText?: string;
  title?: string;
  subtitle?: string;
  slideWidth?: string;
  renderCard?: (item: CarouselCardItem, index: number) => React.ReactNode;
}

const SLIDE_SPEED = 700;   // animation duration ms - smooth and fluid
const SLIDE_INTERVAL = 1100; // interval between auto-steps ms while hovering

export const CardCarousel: React.FC<CardCarouselProps> = ({
  items,
  images,
  autoplayDelay = 3000,
  showPagination = true,
  showNavigation = true,
  badgeText,
  title = "Áreas de Acompañamiento",
  subtitle,
  slideWidth,
  renderCard,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const currentDirRef = useRef<"prev" | "next" | null>(null);
  const isDraggingRef = useRef<boolean>(false);

  const cardItems: CarouselCardItem[] =
    items ||
    (images || []).map((img, idx) => ({
      id: `card-${idx}`,
      title: img.alt || `Área ${idx + 1}`,
      image: img.src,
    }));

  /* ---------------------------------------------------------------
     Continuous sliding helpers
  --------------------------------------------------------------- */
  const doSlide = (dir: "prev" | "next") => {
    const swiper = swiperRef.current;
    if (!swiper || swiper.animating || isDraggingRef.current) return;
    if (dir === "prev") swiper.slidePrev(SLIDE_SPEED);
    else swiper.slideNext(SLIDE_SPEED);
  };

  const startContinuous = (dir: "prev" | "next") => {
    if (isDraggingRef.current) return;
    if (currentDirRef.current === dir) return; // already running this direction
    stopContinuous();
    currentDirRef.current = dir;
    doSlide(dir); // immediate first step
    intervalRef.current = window.setInterval(() => doSlide(dir), SLIDE_INTERVAL);
  };

  const stopContinuous = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    currentDirRef.current = null;
  };

  /* ---------------------------------------------------------------
     Mouse-zone detection on the container
     Leaves a generous central calm zone and disables during drag
  --------------------------------------------------------------- */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDraggingRef.current) {
      stopContinuous();
      return;
    }
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    const x = e.clientX - left;
    const pct = x / width;
    if (pct < 0.28) {
      startContinuous("prev");
    } else if (pct > 0.72) {
      startContinuous("next");
    } else {
      stopContinuous();
    }
  };

  const handleMouseLeave = () => stopContinuous();

  /* ---------------------------------------------------------------
     CSS — Ultra-fluid bezier curve and zero bounce
  --------------------------------------------------------------- */
  const css = `
  .card-carousel-swiper {
    width: 100%;
    padding-top: 24px;
    padding-bottom: 56px;
    overflow: visible !important;
  }

  .card-carousel-swiper .swiper-wrapper {
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  .card-carousel-swiper .swiper-slide {
    background-position: center;
    background-size: cover;
    width: ${slideWidth || '280px'};
    max-width: 86vw;
    will-change: transform, opacity;
    opacity: 0.58;
    filter: brightness(0.88);
    transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @media (min-width: 640px) {
    .card-carousel-swiper .swiper-slide {
      width: ${slideWidth || '320px'};
    }
  }

  .card-carousel-swiper .swiper-slide-active {
    opacity: 1 !important;
    filter: brightness(1) !important;
    z-index: 10 !important;
  }

  /* Adjacent slides brighten subtly to hint interactivity */
  .card-carousel-swiper .swiper-slide-prev,
  .card-carousel-swiper .swiper-slide-next {
    opacity: 0.78 !important;
    filter: brightness(0.94) !important;
  }

  .card-carousel-swiper .swiper-pagination {
    bottom: 8px !important;
  }

  .card-carousel-swiper .swiper-pagination-bullet {
    background: #00D2B4;
    opacity: 0.35;
    width: 9px;
    height: 9px;
    transition: all 0.4s ease;
  }

  .card-carousel-swiper .swiper-pagination-bullet-active {
    background: #D4A346;
    opacity: 1;
    width: 28px;
    border-radius: 9999px;
  }

  .card-carousel-swiper .swiper-3d .swiper-slide-shadow-left,
  .card-carousel-swiper .swiper-3d .swiper-slide-shadow-right {
    background-image: none !important;
    display: none !important;
  }
  `;

  return (
    <div className="w-full space-y-6 select-none relative">
      <style>{css}</style>

      {/* Header — only rendered when title or badgeText are set */}
      {(badgeText || title || subtitle) && (
        <div className="text-center max-w-3xl mx-auto space-y-3 px-4 mb-6 sm:mb-8">
          {badgeText && (
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD700]/40 bg-[#07242C]/70 backdrop-blur-xs text-[#FFD700] text-xs sm:text-sm font-semibold px-4 py-1.5 shadow-sm">
              <span>{badgeText}</span>
            </div>
          )}
          {title && (
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#052C34] font-black leading-tight drop-shadow-xs">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm md:text-base text-[#07242C]/85 max-w-2xl mx-auto font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Instrucción de navegación */}
      <p className="text-center text-[11px] sm:text-xs text-[#133238]/55 font-medium pb-1 tracking-wide">
        ← Desliza o usa las flechas para explorar →
      </p>

      {/* Carousel container — mouse zones for navigation */}
      <div
        ref={containerRef}
        className="w-full relative px-4 sm:px-10 max-w-6xl mx-auto overflow-hidden group/carousel"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          className="card-carousel-swiper"
          speed={SLIDE_SPEED}
          spaceBetween={20}
          resistance={false}
          resistanceRatio={0}
          touchRatio={1}
          touchAngle={45}
          touchReleaseOnEdges={true}
          threshold={3}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slideToClickedSlide={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 1,
            scale: 0.88,
            slideShadows: false,
          }}
          onTouchStart={() => {
            isDraggingRef.current = true;
            stopContinuous();
          }}
          onTouchEnd={() => {
            setTimeout(() => {
              isDraggingRef.current = false;
            }, 250);
          }}
          onSliderMove={() => {
            isDraggingRef.current = true;
            stopContinuous();
          }}
          pagination={showPagination ? { clickable: true } : false}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {cardItems.map((item, index) => (
            <SwiperSlide key={item.id || index}>
              {renderCard ? (
                renderCard(item, index)
              ) : (
                <div className="group/card relative flex flex-col h-[380px] sm:h-[420px] rounded-3xl overflow-hidden bg-white border-2 border-[#FFD700] shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_45px_rgba(212,178,111,0.55)] transition-shadow duration-500 cursor-pointer">
                  {/* Image */}
                  <div className="relative flex-1 w-full overflow-hidden bg-[#EDF4F8]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={cn(
                        "w-full h-full object-cover transition-transform duration-700 [image-rendering:-webkit-optimize-contrast]",
                        item.image?.includes('comprension-lectora') ? 'object-[center_35%]' :
                        item.image?.includes('habitos-estudio') ? 'object-[center_25%]' :
                        item.image?.includes('inmersion-ingles') ? 'object-[center_30%]' :
                        item.image?.includes('lengua-literatura') ? 'object-[center_40%]' :
                        item.image?.includes('terapia-lenguaje') ? 'object-[center_25%]' :
                        item.image?.includes('asesoria-aprendizaje') ? 'object-[center_30%]' :
                        item.image?.includes('evaluacion-psicopedagogica') ? 'object-[center_25%]' :
                        item.image?.includes('principios-montessori') ? 'object-[center_30%]' :
                        item.image?.includes('terapias-integrativas') ? 'object-[center_20%]' :
                        item.image?.includes('nivelacion-escolar') ? 'object-[center_14%]' :
                        item.image?.includes('educacion-alternativa') ? 'object-[center_16%]' :
                        item.image?.includes('estrategias-pedagogicas') ? 'object-[center_18%]' :
                        'object-[center_18%]',
                        "group-hover/card:scale-102"
                      )}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge & Price pill on top/overlay */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                      {item.badge && (
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#052C34] bg-[#FFF8D6] px-2.5 py-1 rounded-full border border-[#FFD700] shadow-sm backdrop-blur-xs">
                          {item.badge}
                        </span>
                      )}
                      {item.price && (
                        <span className="text-xs sm:text-sm font-bold font-serif-display text-white bg-[#052C34]/85 px-2.5 py-0.5 rounded-full border border-[#FFD700]/60 shadow-sm ml-auto">
                          {item.price}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer with Title and optional WhatsApp button */}
                  <div className="relative p-4 sm:p-5 border-t-2 border-[#FFD700]/40 text-center flex flex-col items-center justify-center gap-2.5 bg-gradient-to-b from-white to-[#F9FCFD]">
                    <h4 className="relative z-10 font-serif text-sm sm:text-base font-bold text-[#133238] group-hover/card:text-[#8C6420] transition-colors duration-300 leading-snug line-clamp-2">
                      {item.title}
                    </h4>

                    {item.whatsappMessage && (
                      <a
                        href={`https://wa.me/593962669994?text=${encodeURIComponent(item.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#ECD394] hover:to-[#DEC080] text-[#0A1C24] text-[11px] font-serif font-bold uppercase tracking-wider shadow-xs hover:shadow-md transition-all active:scale-97 cursor-pointer z-20"
                      >
                        <WhatsAppOfficialIcon className="w-4 h-4 text-[#0A1C24] shrink-0" />
                        <span>Consultar</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrow buttons — appear on hover over the container */}
        {showNavigation && (
          <>
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => { stopContinuous(); doSlide("prev"); }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#07242C]/90 hover:bg-[#07242C] text-[#FFD700] border-2 border-[#FFD700]/60 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 opacity-0 pointer-events-none group-hover/carousel:opacity-100 group-hover/carousel:pointer-events-auto hover:scale-115 hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => { stopContinuous(); doSlide("next"); }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#07242C]/90 hover:bg-[#07242C] text-[#FFD700] border-2 border-[#FFD700]/60 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 opacity-0 pointer-events-none group-hover/carousel:opacity-100 group-hover/carousel:pointer-events-auto hover:scale-115 hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CardCarousel;
