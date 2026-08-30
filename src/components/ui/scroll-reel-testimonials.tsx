"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

/* ----------------------------------------------------------------
 * ScrollReelTestimonials
 *
 * Counter-rotating scroll reel + per-character text rise.
 * The middle column is a real vertical list of portraits that
 * translates by one "pitch" per step; the outer columns counter-
 * rotate the opposite way. Text animates in character-by-character
 * with a stagger; the old block exits as a whole before the new
 * characters rise in sequence.
 * ---------------------------------------------------------------- */

export interface ScrollReelTestimonial {
  /** The quote text */
  quote: string;
  /** Author name shown below the quote */
  author: string;
  /** Portrait image URL for the featured tile */
  image: string;
  /** Optional alt text for the portrait */
  alt?: string;
  /** Optional role */
  role?: string;
}

export interface ScrollReelTestimonialsProps {
  /** Testimonials to cycle through (one featured tile is generated per entry) */
  testimonials: ScrollReelTestimonial[];
  /** Per-character stagger in ms (default 6) */
  charStaggerMs?: number;
  /** Auto-play interval in ms (default 3800 for 3.8 seconds) */
  autoPlayInterval?: number;
  /** Extra classes for the outer container */
  className?: string;
}

/* Geometry — middle column pitch between portrait centers:
 * 3 * (cell 168px + gap 12px) = 540px */
const CELL = 168;
const GAP = 12;
const STEP = 3 * (CELL + GAP);

const EXIT_MS = 280; // old text removed / new text mounted
const SLIDE_MS = 900; // column slide duration + interaction lock
const HOVER_SCROLL_INTERVAL = 1800; // time between transitions while holding cursor on arrow (1.8s)

const EASE_INOUT = "cubic-bezier(0.65,0,0.35,1)";

const QUOTE_CLASSES =
  "m-0 text-sm xs:text-base sm:text-lg font-serif-display font-medium leading-[1.6] tracking-[-0.01em] text-black italic text-justify";
const AUTHOR_CLASSES =
  "m-0 text-xs sm:text-sm font-bold leading-[1.3] text-[#6B7FD1]";

const FEATURED_SHADOW =
  "0 1.008px 0.705px -0.563px rgba(0,0,0,0.18), 0 2.389px 1.672px -1.125px rgba(0,0,0,0.17), 0 4.357px 3.05px -1.688px rgba(0,0,0,0.17), 0 7.244px 5.07px -2.25px rgba(0,0,0,0.16), 0 11.698px 8.188px -2.813px rgba(0,0,0,0.15), 0 19.148px 13.404px -3.375px rgba(0,0,0,0.13), 0 32.972px 23.08px -3.938px rgba(0,0,0,0.09), 0 60px 42px -4.5px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(0,0,0,0.6)";

/* Placeholder cell with visible brand colors */
function Cell() {
  return (
    <div
      aria-hidden="true"
      className="shrink-0 rounded-2xl border-2 border-[#9B8FD9]/60 bg-gradient-to-br from-[#C9D4F5] via-[#DCEEFB] to-[#9B8FD9]/35 shadow-md shadow-[#9B8FD9]/15 flex items-center justify-center relative overflow-hidden"
      style={{ width: CELL, height: CELL }}
    >
      {/* Decorative subtle radial sheen */}
      <div className="absolute inset-0 bg-radial from-white/60 to-transparent pointer-events-none" />
      <svg
        className="w-7 h-7 text-[#3E4A7A]/30"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
      </svg>
    </div>
  );
}

/* Featured portrait tile with desaturation + gradient sheen overlays */
interface FeaturedProps {
  src: string;
  alt?: string;
  key?: React.Key;
}

const Featured: React.FC<FeaturedProps> = ({ src, alt }) => {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-2xl bg-[#DCEEFB] border-2 border-[#9B8FD9]/60 shadow-lg"
      style={{ width: CELL, height: CELL, boxShadow: FEATURED_SHADOW }}
    >
      <img
        src={src}
        alt={alt ?? "Foto de testimonio Casa Kinti"}
        loading="eager"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
      />
      {/* subtle saturation blend */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] bg-white/10 mix-blend-saturation"
      />
      {/* diagonal gradient sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] blur-[6px] mix-blend-overlay"
        style={{
          background:
            "linear-gradient(220.99deg, rgba(108,92,255,0) 32%, rgb(108,92,255) 41%, rgb(173,177,255) 47%, rgba(130,189,237,0.57) 54%, rgba(130,189,237,0) 65%)",
        }}
      />
    </div>
  );
};

/* Per-character split. Spaces live between word spans as plain text
 * nodes so natural line-wrapping is preserved. Each char rises in
 * with an inline animation-delay; while the block is exiting, the
 * char animation is removed so in-flight rises are killed. */
function Chars({
  text,
  startIndex,
  staggerMs,
}: {
  text: string;
  startIndex: number;
  staggerMs: number;
}) {
  let idx = startIndex;
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wi) => {
        const wordSpan = (
          <span key={wi} className="inline-block whitespace-nowrap">
            {Array.from(word).map((ch, ci) => {
              const delay = idx * staggerMs;
              idx++;
              return (
                <span
                  key={ci}
                  className="scroll-reel-char"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {ch}
                </span>
              );
            })}
          </span>
        );
        if (wi < words.length - 1) idx++;
        return (
          <React.Fragment key={`frag-${wi}`}>
            {wordSpan}
            {wi < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </>
  );
}

export function ScrollReelTestimonials({
  testimonials,
  charStaggerMs = 6,
  autoPlayInterval = 3800,
  className,
}: ScrollReelTestimonialsProps) {
  /* Navigation state vs display state are kept separate so the
   * exiting block and the entering block never render together. */
  const [index, setIndex] = React.useState(0);
  const [displayIndex, setDisplayIndex] = React.useState(0);
  const [exiting, setExiting] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const animating = React.useRef(false);
  const timeouts = React.useRef<ReturnType<typeof setTimeout>[]>([]);

  // Touch gesture support
  const touchStartX = React.useRef<number | null>(null);
  const touchStartY = React.useRef<number | null>(null);

  const count = testimonials.length;
  const currentIndexRef = React.useRef(index);
  currentIndexRef.current = index;
  const hoverScrollTimer = React.useRef<ReturnType<typeof setInterval> | null>(null);

  React.useEffect(() => {
    /* Enable column transitions only after first paint so the reel
     * appears at its starting offset without a slide-in. */
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setMounted(true))
    );
    return () => {
      cancelAnimationFrame(raf);
      timeouts.current.forEach(clearTimeout);
      if (hoverScrollTimer.current) clearInterval(hoverScrollTimer.current);
    };
  }, []);

  const paginate = React.useCallback(
    (dir: 1 | -1, loop = true) => {
      if (animating.current || count <= 1) return;
      const currentIdx = currentIndexRef.current;
      let next = currentIdx + dir;
      if (loop) {
        if (next >= count) next = 0;
        if (next < 0) next = count - 1;
      } else {
        if (next < 0 || next >= count) return;
      }
      if (next === currentIdx) return;
      animating.current = true;

      setIndex(next);
      setExiting(true);

      timeouts.current.push(
        setTimeout(() => {
          setDisplayIndex(next);
          setExiting(false);
        }, EXIT_MS)
      );
      timeouts.current.push(
        setTimeout(() => {
          animating.current = false;
        }, SLIDE_MS)
      );
    },
    [count]
  );

  const startContinuousScroll = React.useCallback(
    (dir: 1 | -1) => {
      paginate(dir, true);
      if (hoverScrollTimer.current) clearInterval(hoverScrollTimer.current);
      hoverScrollTimer.current = setInterval(() => {
        paginate(dir, true);
      }, HOVER_SCROLL_INTERVAL);
    },
    [paginate]
  );

  const stopContinuousScroll = React.useCallback(() => {
    if (hoverScrollTimer.current) {
      clearInterval(hoverScrollTimer.current);
      hoverScrollTimer.current = null;
    }
  }, []);

  // Auto-play timer every autoPlayInterval ms, pauses on hover
  React.useEffect(() => {
    if (!autoPlayInterval || autoPlayInterval <= 0 || count <= 1 || isHovered) return;
    const timer = setInterval(() => {
      paginate(1, true);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval, count, paginate, isHovered]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      paginate(1);
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      paginate(-1);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Horizontal swipe threshold 40px
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        paginate(1); // Swipe left -> next
      } else {
        paginate(-1); // Swipe right -> prev
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  /* Middle column: 3 leading cells, then featured + 2 cells between
   * each testimonial, then 3 trailing cells. */
  const middleItems = React.useMemo(() => {
    const items: Array<{ type: "cell" } | { type: "featured"; i: number }> = [];
    for (let i = 0; i < 3; i++) items.push({ type: "cell" });
    testimonials.forEach((_, i) => {
      items.push({ type: "featured", i });
      if (i < count - 1) {
        items.push({ type: "cell" }, { type: "cell" });
      }
    });
    for (let i = 0; i < 3; i++) items.push({ type: "cell" });
    return items;
  }, [testimonials, count]);

  const sideCellCount = 4 + 2 * count;
  const centerIdx = (count - 1) / 2;
  const middleY = (centerIdx - index) * STEP;
  const sideY = -middleY;

  const colStyle = (y: number): React.CSSProperties => ({
    transform: `translateY(${y}px)`,
    transition: mounted ? `transform ${SLIDE_MS}ms ${EASE_INOUT}` : "none",
  });

  const current = testimonials[displayIndex];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Historias de Transformación Casa Kinti"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        stopContinuousScroll();
      }}
      className={cn(
        "group relative flex w-full max-w-[1240px] mx-auto flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 outline-hidden md:min-h-[340px] md:flex-row py-2",
        className
      )}
    >
      {/* Reel de Fotos (Columna Izquierda con escala responsive mobile-first y máscara segura) */}
      <div className="flex justify-center items-center shrink-0 w-full md:w-auto overflow-hidden">
        <div
          aria-hidden="true"
          className="relative h-60 xs:h-68 sm:h-76 md:h-[340px] w-full max-w-[340px] xs:max-w-[390px] sm:max-w-[480px] md:w-[540px] shrink-0 overflow-hidden flex items-center justify-center"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
          }}
        >
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 scale-[0.62] xs:scale-[0.72] sm:scale-[0.85] md:scale-100 origin-center transition-transform duration-300">
            {/* Left column */}
            <div
              className="flex shrink-0 flex-col gap-3 will-change-transform motion-reduce:[transition:none!important]"
              style={colStyle(sideY)}
            >
              {Array.from({ length: sideCellCount }).map((_, i) => (
                <Cell key={`left-${i}`} />
              ))}
            </div>

            {/* Middle column */}
            <div
              className="flex shrink-0 flex-col gap-3 will-change-transform motion-reduce:[transition:none!important]"
              style={colStyle(middleY)}
            >
              {middleItems.map((item, i) =>
                item.type === "featured" ? (
                  <Featured
                    key={`feat-${i}`}
                    src={testimonials[item.i].image}
                    alt={testimonials[item.i].alt}
                  />
                ) : (
                  <Cell key={`mid-${i}`} />
                )
              )}
            </div>

            {/* Right column */}
            <div
              className="flex shrink-0 flex-col gap-3 will-change-transform motion-reduce:[transition:none!important]"
              style={colStyle(sideY)}
            >
              {Array.from({ length: sideCellCount }).map((_, i) => (
                <Cell key={`right-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content section + Retrato del autor + Flechas de navegación */}
      <div className="flex min-w-0 flex-1 items-center justify-between gap-4 self-stretch px-2 sm:px-4 w-full">
        
        {/* Bloque de Texto y Estrellas */}
        <div className="flex flex-col gap-3 min-w-0 flex-1">
          
          {/* 5 Estrellas Doradas arriba del texto */}
          <div className="flex items-center gap-1 text-[#F5C84C] mb-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current drop-shadow-xs"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Text stage con quote adaptable */}
          <div
            className="relative w-full max-w-[480px] overflow-hidden"
            aria-live="polite"
          >
            {/* Invisible in-flow copy sizes the stage to the current
              * quote at any viewport width, so wrapped text never clips. */}
            <div
              aria-hidden="true"
              className="invisible flex min-h-[110px] flex-col gap-2.5"
            >
              <p className={QUOTE_CLASSES}>{current.quote}</p>
              <div>
                <p className={AUTHOR_CLASSES}>{current.author}</p>
                {current.role && (
                  <span className="text-[11px] text-black font-medium block">
                    {current.role}
                  </span>
                )}
              </div>
            </div>
            <div
              key={displayIndex}
              className={cn(
                "absolute inset-x-0 top-0 flex flex-col gap-2.5 will-change-[transform,opacity]",
                exiting && "scroll-reel-exit"
              )}
            >
              <p className={QUOTE_CLASSES}>
                <Chars
                  text={current.quote}
                  startIndex={0}
                  staggerMs={charStaggerMs}
                />
              </p>
              <div>
                <p className={AUTHOR_CLASSES}>
                  <Chars
                    text={current.author}
                    startIndex={current.quote.length + 4}
                    staggerMs={charStaggerMs}
                  />
                </p>
                {current.role && (
                  <span className="text-[11px] text-black font-medium block mt-0.5">
                    {current.role}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Indicadores de Puntos (Dots) para fácil navegación móvil */}
          <div className="flex items-center gap-1.5 pt-1">
            {testimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => {
                  if (dotIdx !== index) {
                    paginate(dotIdx > index ? 1 : -1);
                  }
                }}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  dotIdx === displayIndex
                    ? "w-6 bg-gradient-to-r from-[#6B7FD1] to-[#9B8FD9]"
                    : "w-2 bg-[#C9D4F5] hover:bg-[#9B8FD9]/60"
                )}
                aria-label={`Ir al testimonio ${dotIdx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Flechas de navegación: ocultas por defecto, aparecen ambas al mismo tiempo cuando se pasa el cursor por la sección */}
        <div
          className={cn(
            "flex flex-col gap-2.5 justify-center items-center shrink-0 transition-all duration-300",
            isHovered
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-3 pointer-events-none"
          )}
        >
          <button
            type="button"
            onClick={() => paginate(-1, true)}
            onMouseEnter={() => startContinuousScroll(-1)}
            onMouseLeave={stopContinuousScroll}
            aria-label="Historia anterior"
            className="relative overflow-hidden grid h-9 w-9 sm:h-10 sm:w-10 cursor-pointer place-items-center rounded-2xl bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] hover:bg-gradient-to-tr hover:from-[#6B7FD1] hover:via-[#8E82DA] hover:to-[#E8A2C2] text-[#6B7FD1] hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-xs group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            <svg
              className="relative z-10 h-4 w-4 sm:h-4.5 sm:w-4.5 text-[#6B7FD1] group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => paginate(1, true)}
            onMouseEnter={() => startContinuousScroll(1)}
            onMouseLeave={stopContinuousScroll}
            aria-label="Siguiente historia"
            className="relative overflow-hidden grid h-9 w-9 sm:h-10 sm:w-10 cursor-pointer place-items-center rounded-2xl bg-gradient-to-tr from-[#DDEBFC] via-[#ECE6FB] to-[#FCE5F1] hover:bg-gradient-to-tr hover:from-[#6B7FD1] hover:via-[#8E82DA] hover:to-[#E8A2C2] text-[#6B7FD1] hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-xs group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            <svg
              className="relative z-10 h-4 w-4 sm:h-4.5 sm:w-4.5 text-[#6B7FD1] group-hover:text-white group-hover:translate-y-0.5 transition-all duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}

export default ScrollReelTestimonials;
