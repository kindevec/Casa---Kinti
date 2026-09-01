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
  price?: string;
  badge?: string;
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
  /** Card height CSS length. */
  cardHeight?: string;
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
  cardHeight = "clamp(390px, 46vw, 475px)",
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
  const posRef = React.useRef(0);
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

  const indexAt = React.useCallback(
    (pos: number) => ((Math.round(pos) % count) + count) % count,
    [count],
  );

  const paint = React.useCallback(() => {
    const width = widthRef.current;
    if (!width) return;
    const pitch = width * (1 + gap);
    const pos = posRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      let offset = index - pos;
      if (loop) {
        offset = ((offset % count) + count) % count;
        if (offset > count / 2) offset -= count;
      }

      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, falloff);
      const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);

      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;

      const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;
      const opacity = Math.max(0, 1 - distance * fade) * edge;
      card.style.opacity = String(opacity);
      card.style.pointerEvents = opacity > 0.05 ? "auto" : "none";
      card.style.zIndex = String(Math.round(100 - distance * 10));
    });
  }, [count, depth, fade, falloff, gap, loop, rotate]);

  const cancelAnimation = React.useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const startSpring = React.useCallback(
    (target: number) => {
      targetRef.current = target;
      if (rafRef.current !== null) return;

      let lastTime: number | null = null;
      let velocity = 0;

      const step = (time: number) => {
        if (lastTime === null) lastTime = time;
        const dt = Math.min((time - lastTime) / 1000, 0.05);
        lastTime = time;

        const current = posRef.current;
        let delta = targetRef.current - current;
        if (loop) {
          delta = ((delta % count) + count) % count;
          if (delta > count / 2) delta -= count;
        }

        const springAccel = delta * 120 - velocity * 22;
        velocity += springAccel * dt;
        posRef.current = current + velocity * dt;

        paint();

        if (Math.abs(delta) < 0.002 && Math.abs(velocity) < 0.02) {
          posRef.current = targetRef.current;
          paint();
          setSelected(indexAt(targetRef.current));
          rafRef.current = null;
          return;
        }

        setSelected(indexAt(posRef.current));
        rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
    },
    [count, indexAt, loop, paint],
  );

  const goTo = React.useCallback(
    (index: number) => {
      cancelAnimation();
      let delta = index - indexAt(posRef.current);
      if (loop) {
        delta = ((delta % count) + count) % count;
        if (delta > count / 2) delta -= count;
      }
      startSpring(posRef.current + delta);
    },
    [cancelAnimation, count, indexAt, loop, startSpring],
  );

  const nudge = React.useCallback(
    (dir: number) => {
      cancelAnimation();
      const current = Math.round(posRef.current);
      startSpring(current + dir);
    },
    [cancelAnimation, startSpring],
  );

  useIsoLayoutEffect(() => {
    const el = cardRefs.current[0];
    if (!el) return;
    const update = () => {
      widthRef.current = el.offsetWidth;
      paint();
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [paint]);

  const onPointerDown = (event: React.PointerEvent) => {
    if (dragRef.current) return;
    cancelAnimation();
    dragRef.current = {
      id: event.pointerId,
      x: event.clientX,
      pos: posRef.current,
      v: 0,
      t: performance.now(),
    };
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    const width = widthRef.current || 1;
    const pitch = width * (1 + gap);
    const dx = event.clientX - drag.x;
    const now = performance.now();
    const dt = Math.max(now - drag.t, 1);

    const targetPos = drag.pos - dx / pitch;
    drag.v = -(dx / pitch / dt) * 1000;
    drag.t = now;
    drag.x = event.clientX;
    drag.pos = targetPos;

    posRef.current = targetPos;
    setSelected(indexAt(targetPos));
    paint();
  };

  const endDrag = (event: React.PointerEvent) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    dragRef.current = null;

    const v = Math.max(-25, Math.min(25, drag.v));
    const projected = posRef.current + v * 0.12;
    const nearest = Math.round(projected);
    startSpring(nearest);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      nudge(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      nudge(1);
    }
  };

  React.useEffect(() => {
    if (!autoPlay || isHovered) return;
    const id = setInterval(() => nudge(1), autoPlayInterval);
    return () => clearInterval(id);
  }, [autoPlay, autoPlayInterval, isHovered, nudge]);

  React.useEffect(() => () => cancelAnimation(), [cancelAnimation]);

  const [mousePos, setMousePos] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [arrowSide, setArrowSide] = React.useState<"left" | "right" | null>(null);
  const arrowHoverIntervalRef = React.useRef<number | null>(null);

  const startArrowHover = (side: "left" | "right") => {
    setArrowSide(side);
    if (arrowHoverIntervalRef.current) clearInterval(arrowHoverIntervalRef.current);
    nudge(side === "right" ? 1 : -1);
    arrowHoverIntervalRef.current = window.setInterval(() => {
      nudge(side === "right" ? 1 : -1);
    }, 1800);
  };

  const stopArrowHover = () => {
    setArrowSide(null);
    if (arrowHoverIntervalRef.current) {
      clearInterval(arrowHoverIntervalRef.current);
      arrowHoverIntervalRef.current = null;
    }
  };

  const handleFrameMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const active = slides[selected];

  return (
    <div
      className={cn("group/carousel relative w-full", className)}
      style={{
        ["--cf-card" as string]: cardWidth,
        ["--cf-card-height" as string]: cardHeight,
      }}
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
          onKeyDown={onKeyDown}
          className="cursor-grab overflow-hidden py-6 sm:py-8 outline-none active:cursor-grabbing"
          style={{
            perspective: `calc(var(--cf-card) * ${perspective})`,
            touchAction: "pan-y",
          }}
        >
          <div
            className="relative select-none"
            style={{
              height: "var(--cf-card-height)",
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
                    "absolute left-1/2 top-0 overflow-hidden rounded-2xl sm:rounded-3xl bg-white will-change-transform group/card cursor-pointer flex flex-col select-none transition-shadow duration-300",
                    isCenter
                      ? "border-2 border-[#D4A346] shadow-[0_16px_40px_rgba(212,163,70,0.28),0_4px_16px_rgba(0,0,0,0.12)] ring-1 ring-[#FFD700]/50"
                      : "border border-[#D4A346]/30 shadow-[0_10px_25px_rgba(0,0,0,0.12)] opacity-90",
                    cardClassName,
                  )}
                  style={{ width: "var(--cf-card)", height: "var(--cf-card-height)" }}
                >
                  <div className="relative h-[48%] w-full overflow-hidden bg-[#051C22]/10 shrink-0">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      draggable={false}
                      className="h-full w-full select-none object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/20 pointer-events-none" />

                    {slide.badge && (
                      <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#052C34]/90 backdrop-blur-md text-[#FFEA79] font-serif text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 sm:py-1 rounded-full border border-[#FFEA79]/40 shadow-sm">
                        {slide.badge}
                      </span>
                    )}

                    {slide.price && (
                      <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-gradient-to-r from-[#FFF8D6] via-[#FFD700] to-[#E5A824] text-[#0A1C24] font-serif font-black text-xs sm:text-sm px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] border border-white/60">
                        {slide.price}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 w-full p-4 sm:p-4.5 flex flex-col justify-between bg-gradient-to-b from-white to-[#FAFCFC] text-[#133238] border-t border-[#E5C985]/30">
                    <div>
                      {slide.title && (
                        <h4 className="font-serif text-sm sm:text-base md:text-lg font-bold leading-snug text-[#0A1C24] line-clamp-1 mb-1 drop-shadow-xs">
                          {slide.title}
                        </h4>
                      )}
                      {slide.subtitle && (
                        <p className="text-[11px] sm:text-xs text-[#2C484E] line-clamp-3 leading-relaxed font-normal">
                          {slide.subtitle}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2 sm:space-y-2.5 pt-1.5">
                      {slide.meta && slide.meta.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {slide.meta.map((row) => (
                            <span
                              key={row.label}
                              className="inline-flex items-center text-[9px] sm:text-[10px] bg-[#FFF8D6]/80 border border-[#E5C985]/50 px-2 py-0.5 rounded-md font-medium text-[#133238]"
                            >
                              <span className="text-[#8C6420] font-bold mr-1">{row.label}:</span>
                              <span className="font-bold text-[#0A1C24]">{row.value}</span>
                            </span>
                          ))}
                        </div>
                      )}

                      {slide.whatsappMessage && (
                        <a
                          href={`https://wa.me/${whatsappPhone || '593962669994'}?text=${encodeURIComponent(
                            slide.whatsappMessage
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onPointerDown={(e) => e.stopPropagation()}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center gap-1.5 w-full bg-gradient-to-r from-[#25D366] to-[#1EBE5D] hover:from-[#20bd5a] hover:to-[#17a84e] text-white font-bold text-xs sm:text-[13px] py-1.5 sm:py-2 px-3 rounded-full shadow-md shadow-[#25D366]/20 transition-transform duration-200 hover:scale-102 active:scale-98 cursor-pointer select-none"
                        >
                          <svg
                            className="w-3.5 h-3.5 fill-white text-white shrink-0"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          <span>{slide.ctaText || 'Consultar por WhatsApp'}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {showNavigation && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onMouseEnter={() => startArrowHover("left")}
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
              onMouseEnter={() => startArrowHover("right")}
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