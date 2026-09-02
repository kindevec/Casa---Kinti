import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

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
}

const SLIDE_SPEED = 600;   // animation duration ms
const SLIDE_INTERVAL = 850; // interval between auto-steps ms while hovering

export const CardCarousel: React.FC<CardCarouselProps> = ({
  items,
  images,
  autoplayDelay = 3000,
  showPagination = true,
  showNavigation = true,
  badgeText,
  title = "Áreas de Acompañamiento",
  subtitle,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const currentDirRef = useRef<"prev" | "next" | null>(null);

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
    if (!swiper || swiper.animating) return;
    if (dir === "prev") swiper.slidePrev(SLIDE_SPEED);
    else swiper.slideNext(SLIDE_SPEED);
  };

  const startContinuous = (dir: "prev" | "next") => {
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
     Left 40% → slidePrev | Right 40% → slideNext | Center → pause
  --------------------------------------------------------------- */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    const x = e.clientX - left;
    const pct = x / width;
    if (pct < 0.40) {
      startContinuous("prev");
    } else if (pct > 0.60) {
      startContinuous("next");
    } else {
      stopContinuous();
    }
  };

  const handleMouseLeave = () => stopContinuous();

  /* ---------------------------------------------------------------
     CSS
  --------------------------------------------------------------- */
  const css = `
  .card-carousel-swiper {
    width: 100%;
    padding-top: 24px;
    padding-bottom: 56px;
    overflow: visible !important;
  }

  .card-carousel-swiper .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 280px;
    max-width: 82vw;
    will-change: transform, opacity;
    opacity: 0.58;
    filter: brightness(0.88);
    transition: opacity 0.45s ease, filter 0.45s ease;
  }

  @media (min-width: 640px) {
    .card-carousel-swiper .swiper-slide {
      width: 320px;
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
        ← Mueve el cursor a los lados para navegar →
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
            depth: 140,
            modifier: 1.3,
            scale: 0.85,
            slideShadows: false,
          }}
          pagination={showPagination ? { clickable: true } : false}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {cardItems.map((item, index) => (
            <SwiperSlide key={item.id || index}>
              <div className="group/card relative flex flex-col h-[360px] sm:h-[400px] rounded-3xl overflow-hidden bg-[#FFFDE7] border-2 border-[#FFD700] shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_45px_rgba(212,178,111,0.55)] transition-shadow duration-500 cursor-pointer">
                {/* Image */}
                <div className="relative flex-1 w-full overflow-hidden bg-[#EDF4F8]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDE7]/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Pastel yellow footer */}
                <div className="relative p-4 sm:p-5 border-t-2 border-[#FFD700]/50 text-center flex items-center justify-center min-h-[72px] bg-[#FFFDE7]">
                  <div
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,215,0,0.35) 0%, transparent 70%)' }}
                  />
                  <h4 className="relative z-10 font-serif text-base sm:text-lg font-bold text-[#133238] group-hover/card:text-[#8C6420] transition-colors duration-300 leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
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
