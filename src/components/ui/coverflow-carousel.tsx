"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { cn } from "../../lib/utils";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export interface CoverflowSlide {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  meta?: { label: string; value: string }[];
  ctaText?: string;
  whatsappMessage?: string;
}

export interface CoverflowCarouselProps {
  slides: CoverflowSlide[];
  /** Degrees the first neighbour tilts. */
  rotate?: number;
  /** How far the first neighbour recedes, as a fraction of card width. */
  depth?: number;
  /** Viewer distance as a multiple of card width — smaller is a wider lens. */
  perspective?: number;
  /** Exponent on distance. Below 1 the rake eases off as cards travel out. */
  falloff?: number;
  /** Opacity lost per step from the centre. */
  fade?: number;
  /** Any CSS length. Everything else is derived from it, so the rake scales. */
  cardWidth?: string;
  /** Space between cards, as a fraction of card width. */
  gap?: number;
  loop?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showCaption?: boolean;
  showPagination?: boolean;
  showNavigation?: boolean;
  /** Names the carousel for assistive tech. */
  label?: string;
  className?: string;
  cardClassName?: string;
  whatsappPhone?: string;
}

export function CoverflowCarousel({
  slides,
  rotate = 44,
  depth = 0.6,
  perspective = 3,
  falloff = 0.56,
  fade = 0.1,
  cardWidth = "clamp(180px, 26vw, 300px)",
  gap = 0.05,
  loop = true,
  autoPlay = true,
  autoPlayInterval = 2400,
  showCaption = false,
  showPagination = false,
  showNavigation = true,
  label = "Cover carousel",
  className,
  cardClassName,
  whatsappPhone,
}: CoverflowCarouselProps) {
  const count = slides.length;

  const frameRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  /** Fractional card index at the centre. The single source of truth. */
  const posRef = React.useRef(0);
  /** Where the current settle is headed. Stepping off `pos` instead would
      swallow a keypress that lands mid-flight, before the round-off moves. */
  const targetRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const rafRef = React.useRef<number | null>(null);
  const dragRef = React.useRef<{
    id: number;
    x: number;
    pos: number;
    v: number;
    t: number;
  } | null>(null);

  const [selected, setSelected] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  /** Nearest whole card, folded back into 0..count-1. */
  const indexAt = React.useCallback(
    (pos: number) => ((Math.round(pos) % count) + count) % count,
    [count],
  );

  // Paint straight to the DOM. Sixty state updates a second would re-render
  // every card for numbers React never needs to see.
  const paint = React.useCallback(() => {
    const width = widthRef.current;
    if (!width) return;
    const pitch = width * (1 + gap);
    const pos = posRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      // Fold the distance into the shorter way round the ring. This is the
      // whole looping mechanism — no cloned nodes, no shuffling the DOM.
      let offset = index - pos;
      if (loop) {
        offset = ((offset % count) + count) % count;
        if (offset > count / 2) offset -= count;
      }

      const distance = Math.abs(offset);
      // Both the tilt and the recession ease off as cards travel out —
      // doubling the distance adds only about half again as much of each.
      // A linear ramp folds the second card shut; this keeps it readable.
      const ramp = Math.pow(distance, falloff);
      // Capped short of edge-on so a far card never turns its back.
      const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);

      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;

      // A card is teleported across the ring at exactly half a turn out, so it
      // has to be gone by then or the jump is visible.
      const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;
      card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
      card.style.zIndex = String(100 - Math.round(distance));
    });
  }, [count, depth, fade, falloff, gap, loop, rotate]);

  const settle = React.useCallback(
    (target: number) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      targetRef.current = target;
      setSelected(indexAt(target));

      const step = () => {
        const remaining = target - posRef.current;
        if (Math.abs(remaining) < 0.0004) {
          posRef.current = target;
          paint();
          rafRef.current = null;
          return;
        }
        // Movimiento continuo, fluido y ligeramente más pausado/elegante
        posRef.current += remaining * 0.16;
        paint();
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [indexAt, paint],
  );

  const clamp = React.useCallback(
    (pos: number) => (loop ? pos : Math.max(0, Math.min(count - 1, pos))),
    [count, loop],
  );

  const goTo = React.useCallback(
    (index: number) => {
      // Take the shorter way round rather than unwinding the whole ring.
      const target = loop
        ? index + Math.round((targetRef.current - index) / count) * count
        : index;
      settle(clamp(target));
    },
    [clamp, count, loop, settle],
  );

  const nudge = React.useCallback(
    (by: number) => {
      const nextTarget = Math.round(targetRef.current) + by;
      settle(clamp(nextTarget));
    },
    [clamp, settle],
  );

  // Auto-play suave continuo cuando no hay interacción
  React.useEffect(() => {
    if (!autoPlay || isHovered) return;
    const interval = setInterval(() => {
      nudge(1);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isHovered, nudge]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    event.currentTarget.setPointerCapture(event.pointerId);
    targetRef.current = posRef.current;
    dragRef.current = {
      id: event.pointerId,
      x: event.clientX,
      pos: posRef.current,
      v: 0,
      t: performance.now(),
    };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    const pitch = widthRef.current * (1 + gap);
    if (!pitch) return;

    const now = performance.now();
    const previous = posRef.current;
    posRef.current = clamp(drag.pos - (event.clientX - drag.x) / pitch);
    // Cards per second, for the throw.
    drag.v = ((posRef.current - previous) / Math.max(now - drag.t, 1)) * 1000;
    drag.t = now;

    const index = indexAt(posRef.current);
    if (index !== selected) setSelected(index);
    paint();
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    dragRef.current = null;
    // Let a flick carry, but never more than two cards.
    const carried = Math.max(-2, Math.min(2, drag.v * 0.18));
    settle(clamp(Math.round(posRef.current + carried)));
  };

  // Card width drives pitch, depth and perspective, so it is the only thing
  // worth measuring — and only when the box actually changes.
  useIsoLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) return;
      widthRef.current = card.offsetWidth;
      paint();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [paint]);

  // Asegura que al cambiar de nicho (nuevas slides) el carrusel se pinte inmediatamente y continúe en movimiento
  React.useEffect(() => {
    const card = cardRefs.current[0];
    if (card && card.offsetWidth) {
      widthRef.current = card.offsetWidth;
    }
    paint();
  }, [slides, paint]);

  React.useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  const active = slides[selected];
  const lastHoverTimeRef = React.useRef(0);
  const arrowIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startArrowHover = React.useCallback(
    (direction: -1 | 1) => {
      if (arrowIntervalRef.current) clearInterval(arrowIntervalRef.current);
      nudge(direction);
      arrowIntervalRef.current = setInterval(() => {
        nudge(direction);
      }, 750); // Giro continuo cómodo y fluido (750ms)
    },
    [nudge]
  );

  const stopArrowHover = React.useCallback(() => {
    if (arrowIntervalRef.current) {
      clearInterval(arrowIntervalRef.current);
      arrowIntervalRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    return () => {
      if (arrowIntervalRef.current) clearInterval(arrowIntervalRef.current);
    };
  }, []);

  const handleFrameMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (dragRef.current) return;
    const now = performance.now();
    // Cooldown cómodo de 480ms para una cadencia relajada
    if (now - lastHoverTimeRef.current < 480) return;

    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const centerX = rect.width / 2;
    const distanceFromCenter = mouseX - centerX;
    const cardW = widthRef.current || rect.width * 0.28;

    // Si el cursor está sobre la tarjeta central, mantener estable para leer
    if (Math.abs(distanceFromCenter) <= cardW * 0.48) {
      return;
    }

    // Si el cursor se desplaza hacia la derecha
    if (distanceFromCenter > cardW * 0.5) {
      lastHoverTimeRef.current = now;
      nudge(1);
    } else if (distanceFromCenter < -cardW * 0.5) {
      // Si el cursor se desplaza hacia la izquierda
      lastHoverTimeRef.current = now;
      nudge(-1);
    }
  };

  return (
    <div
      className={cn("group/carousel relative w-full", className)}
      style={{ ["--cf-card" as string]: cardWidth }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        stopArrowHover();
      }}
    >
      <div className="relative">
        <div
          ref={frameRef}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onMouseMove={handleFrameMouseMove}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              nudge(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              nudge(1);
            }
          }}
          // Vertical padding keeps the drop shadows clear of the overflow clip.
          className="cursor-grab overflow-hidden py-10 outline-none active:cursor-grabbing"
          style={{
            perspective: `calc(var(--cf-card) * ${perspective})`,
            // Horizontal drag is ours; the page keeps vertical scrolling.
            touchAction: "pan-y",
          }}
        >
          <div
            className="relative select-none"
            style={{
              height: "var(--cf-card)",
              transformStyle: "preserve-3d",
            }}
          >
            {slides.map((slide, index) => {
              const isCenter = selected === index;
              return (
                <div
                  key={index}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${count}`}
                  onMouseEnter={() => {
                    if (!dragRef.current && selected !== index) {
                      goTo(index);
                    }
                  }}
                  onClick={() => goTo(index)}
                  className={cn(
                    "absolute left-1/2 top-0 aspect-square overflow-hidden rounded-3xl bg-white shadow-2xl border border-white/60 will-change-transform group/card cursor-pointer",
                    cardClassName,
                  )}
                  style={{ width: "var(--cf-card)" }}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    draggable={false}
                    className="h-full w-full select-none object-cover transition-transform duration-500 group-hover/card:scale-105"
                  />

                  {/* Overlay con información: La imagen en el centro muestra directamente su descripción y botón de WhatsApp */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-[#133238]/95 via-[#133238]/80 to-[#133238]/15 transition-all duration-300 ease-out flex flex-col justify-end p-5 text-white backdrop-blur-[2px] z-30",
                      isCenter
                        ? "opacity-100 pointer-events-auto translate-y-0"
                        : "opacity-0 pointer-events-none translate-y-2"
                    )}
                  >
                    {slide.title && (
                      <h4 className="font-serif-display text-lg sm:text-xl font-bold leading-tight drop-shadow-xs mb-1.5 text-white">
                        {slide.title}
                      </h4>
                    )}
                    {slide.subtitle && (
                      <p className="text-xs sm:text-[13px] text-white/90 line-clamp-3 leading-relaxed mb-3 font-normal">
                        {slide.subtitle}
                      </p>
                    )}
                    {slide.meta && slide.meta.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3.5">
                        {slide.meta.map((row) => (
                          <span
                            key={row.label}
                            className="inline-flex items-center text-[10px] sm:text-xs bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full font-medium text-white shadow-xs"
                          >
                            <span className="text-white/75 mr-1">{row.label}:</span>
                            <span className="font-bold text-[#CEAB67]">{row.value}</span>
                          </span>
                        ))}
                      </div>
                    )}
                    {slide.whatsappMessage && (
                      <div className="pt-1">
                        <a
                          href={`https://wa.me/${whatsappPhone || '593962669994'}?text=${encodeURIComponent(
                            slide.whatsappMessage
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onPointerDown={(e) => e.stopPropagation()}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs sm:text-sm py-2 px-4 rounded-full shadow-lg shadow-[#25D366]/25 transition-transform duration-200 hover:scale-102 active:scale-98 border border-white/20"
                        >
                          <svg
                            className="w-4 h-4 fill-black text-black shrink-0"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          <span>{slide.ctaText || 'Agendar por WhatsApp'}</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Flechas de navegación a los lados del carrusel: aparecen ambas simultáneamente al pasar el cursor sobre el carrusel */}
        {showNavigation && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onMouseEnter={() => startArrowHover(-1)}
              onMouseLeave={stopArrowHover}
              onClick={(e) => {
                e.stopPropagation();
                nudge(-1);
              }}
              className="overflow-hidden absolute -left-2 sm:-left-6 md:-left-10 lg:-left-12 top-1/2 z-[250] -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#E8F0F5] via-[#EDF4F8] to-[#FBF3E1] hover:bg-gradient-to-tr hover:from-[#043651] hover:via-[#2B7294] hover:to-[#CEAB67] flex items-center justify-center text-[#043651] hover:text-white shadow-lg hover:shadow-[0_8px_25px_rgba(4, 54, 81, 0.5)] transition-all duration-300 hover:scale-115 active:scale-95 opacity-0 group-hover/carousel:opacity-100 pointer-events-none group-hover/carousel:pointer-events-auto cursor-pointer group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              <ChevronLeft className="relative z-10 w-6 h-6 text-[#043651] group-hover:text-white group-hover:-translate-x-0.5 transition-all duration-300 stroke-[2.5]" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onMouseEnter={() => startArrowHover(1)}
              onMouseLeave={stopArrowHover}
              onClick={(e) => {
                e.stopPropagation();
                nudge(1);
              }}
              className="overflow-hidden absolute -right-2 sm:-right-6 md:-right-10 lg:-right-12 top-1/2 z-[250] -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#E8F0F5] via-[#EDF4F8] to-[#FBF3E1] hover:bg-gradient-to-tr hover:from-[#043651] hover:via-[#2B7294] hover:to-[#CEAB67] flex items-center justify-center text-[#043651] hover:text-white shadow-lg hover:shadow-[0_8px_25px_rgba(4, 54, 81, 0.5)] transition-all duration-300 hover:scale-115 active:scale-95 opacity-0 group-hover/carousel:opacity-100 pointer-events-none group-hover/carousel:pointer-events-auto cursor-pointer group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              <ChevronRight className="relative z-10 w-6 h-6 text-[#043651] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300 stroke-[2.5]" />
            </button>
          </>
        )}
      </div>

      {showCaption && active?.title && (
        <div
          key={selected}
          className="mt-4 flex flex-col items-center px-6 duration-300 animate-in fade-in text-center"
        >
          <p className="text-xl sm:text-2xl font-serif-display font-bold tracking-tight text-[#133238]">
            {active.title}
          </p>
          {active.subtitle && (
            <p className="mt-1 text-sm sm:text-base text-black max-w-xl leading-relaxed">
              {active.subtitle}
            </p>
          )}
          {active.meta && active.meta.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {active.meta.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-1.5 bg-white/90 rounded-full px-4 py-1.5 text-xs sm:text-sm border border-[#E8F0F5] shadow-xs"
                >
                  <span className="text-black font-medium">{row.label}:</span>
                  <span className="font-bold text-[#043651]">{row.value}</span>
                </div>
              ))}
            </div>
          )}

          {active.whatsappMessage && (
            <div className="mt-5">
              <a
                href={`https://wa.me/${whatsappPhone || '593962669994'}?text=${encodeURIComponent(
                  active.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden inline-flex items-center gap-2 bg-gradient-to-r from-[#E5C985] via-[#D4B26F] to-[#B88E44] hover:from-[#ECD394] hover:via-[#DDBE7E] hover:to-[#C49B52] text-[#0A1C24] text-sm font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-[0_8px_25px_rgba(212,178,111,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <MessageCircle className="relative z-10 w-4 h-4 text-[#0A1C24] group-hover:rotate-12 transition-all duration-300" />
                <span className="relative z-10">{active.ctaText || 'Consultar por WhatsApp'}</span>
              </a>
            </div>
          )}
        </div>
      )}

      {showPagination && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selected}
              onClick={() => goTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === selected
                  ? "w-8 bg-[#043651]"
                  : "w-2 bg-[#2B7294]/40 hover:bg-[#2B7294]/70",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}