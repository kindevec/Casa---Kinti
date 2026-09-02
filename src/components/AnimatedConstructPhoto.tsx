import React, { useRef, useLayoutEffect, useId } from 'react';
import gsap from 'gsap';

interface AnimatedConstructPhotoProps {
  imageSrc: string | string[];
  alt?: string;
  className?: string;
  aspectRatio?: 'landscape' | 'portrait';
}

export const AnimatedConstructPhoto: React.FC<AnimatedConstructPhotoProps> = ({
  imageSrc,
  alt = 'Casa Kinti',
  className = '',
  aspectRatio = 'landscape',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainGroupRef = useRef<SVGGElement>(null);
  const imageElRef = useRef<SVGImageElement>(null);
  const currentClipIndex = useRef(0);
  const currentImageIndex = useRef(0);
  const masterTl = useRef<gsap.core.Timeline | null>(null);

  const imagesList = Array.isArray(imageSrc) ? imageSrc : [imageSrc];
  const isLandscape = aspectRatio === 'landscape';

  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9_-]/g, '');

  const clipIds = [
    `clip-mosaic-blocks-${uid}`,
    `clip-pixel-grid-${uid}`,
    `clip-vertical-bars-${uid}`,
    `clip-geometric-cells-${uid}`,
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const playNextLoop = () => {
        const activeClipId = clipIds[currentClipIndex.current];
        const selector = `#${activeClipId} .path-piece`;

        if (mainGroupRef.current) {
          mainGroupRef.current.setAttribute('clip-path', `url(#${activeClipId})`);
        }

        // Reset pieces of current pattern
        gsap.set(selector, { scale: 0, transformOrigin: '50% 50%' });

        const tl = gsap.timeline({
          onComplete: () => {
            currentClipIndex.current = (currentClipIndex.current + 1) % clipIds.length;
            currentImageIndex.current = (currentImageIndex.current + 1) % imagesList.length;
            
            // Cambiar dinámicamente a la siguiente imagen mientras las piezas están en escala 0
            if (imageElRef.current) {
              imageElRef.current.setAttribute('href', imagesList[currentImageIndex.current]);
            }

            playNextLoop();
          },
        });

        // 1. IN: Construcción de la imagen (Expo Out con entrada aleatoria)
        tl.to(selector, {
          scale: 1,
          duration: 0.65,
          stagger: { amount: 0.3, from: 'random' },
          ease: 'expo.out',
        })
        // 2. IDLE: Respiración y visualización nítida
        .to(selector, {
          scale: 1.03,
          duration: 1.2,
          yoyo: true,
          repeat: 1,
          ease: 'sine.inOut',
          stagger: { amount: 0.15, from: 'center' },
        })
        // 3. OUT: Destrucción / desintegración de la imagen (Expo In)
        .to(selector, {
          scale: 0,
          duration: 0.5,
          stagger: { amount: 0.25, from: 'center' },
          ease: 'expo.in',
        });

        masterTl.current = tl;
      };

      playNextLoop();
    }, containerRef);

    return () => {
      if (masterTl.current) masterTl.current.kill();
      ctx.revert();
    };
  }, [imageSrc, isLandscape]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full flex items-center justify-center select-none overflow-visible ${className}`}
    >
      {/* Resplandor ambiental suave pastel */}
      <div className="absolute w-[110%] h-[110%] bg-[#2B7294]/15 blur-[60px] rounded-full pointer-events-none -z-5" />

      <svg
        viewBox={isLandscape ? "0 0 560 490" : "0 0 540 680"}
        className="w-full h-auto drop-shadow-2xl z-10 overflow-visible"
        aria-label={alt}
      >
        <defs>
          {isLandscape ? (
            <>
              {/* Patrón 1 Landscape: Bloques Mosaico Calibrados */}
              <clipPath id={clipIds[0]}>
                <rect className="path-piece" x="0" y="0" width="290" height="260" rx="8" />
                <rect className="path-piece" x="290" y="0" width="270" height="170" rx="8" />
                <rect className="path-piece" x="290" y="170" width="270" height="170" rx="8" />
                <rect className="path-piece" x="0" y="260" width="290" height="230" rx="8" />
                <rect className="path-piece" x="290" y="340" width="270" height="150" rx="8" />
              </clipPath>

              {/* Patrón 2 Landscape: Cuadrícula 4x3 Calibrada */}
              <clipPath id={clipIds[1]}>
                {Array.from({ length: 12 }).map((_, i) => {
                  const col = i % 4;
                  const row = Math.floor(i / 4);
                  return (
                    <rect
                      key={i}
                      className="path-piece"
                      x={col * 140}
                      y={row * 163.3}
                      width={140}
                      height={163.4}
                      rx="6"
                    />
                  );
                })}
              </clipPath>

              {/* Patrón 3 Landscape: Franjas Verticales Anchas */}
              <clipPath id={clipIds[2]}>
                <rect className="path-piece" x="0" y="0" width="140" height="490" rx="8" />
                <rect className="path-piece" x="140" y="0" width="140" height="490" rx="8" />
                <rect className="path-piece" x="280" y="0" width="140" height="490" rx="8" />
                <rect className="path-piece" x="420" y="0" width="140" height="490" rx="8" />
              </clipPath>

              {/* Patrón 4 Landscape: 6 Paneles Horizontales */}
              <clipPath id={clipIds[3]}>
                <rect className="path-piece" x="0" y="0" width="186.6" height="245" rx="8" />
                <rect className="path-piece" x="186.6" y="0" width="186.8" height="245" rx="8" />
                <rect className="path-piece" x="373.4" y="0" width="186.6" height="245" rx="8" />
                <rect className="path-piece" x="0" y="245" width="186.6" height="245" rx="8" />
                <rect className="path-piece" x="186.6" y="245" width="186.8" height="245" rx="8" />
                <rect className="path-piece" x="373.4" y="245" width="186.6" height="245" rx="8" />
              </clipPath>
            </>
          ) : (
            <>
              {/* Patrón 1 Portrait */}
              <clipPath id={clipIds[0]}>
                <rect className="path-piece" x="0" y="0" width="270" height="350" rx="6" />
                <rect className="path-piece" x="270" y="0" width="270" height="210" rx="6" />
                <rect className="path-piece" x="270" y="210" width="270" height="250" rx="6" />
                <rect className="path-piece" x="0" y="350" width="270" height="330" rx="6" />
                <rect className="path-piece" x="270" y="460" width="270" height="220" rx="6" />
              </clipPath>

              {/* Patrón 2 Portrait */}
              <clipPath id={clipIds[1]}>
                {Array.from({ length: 12 }).map((_, i) => {
                  const col = i % 3;
                  const row = Math.floor(i / 3);
                  return (
                    <rect
                      key={i}
                      className="path-piece"
                      x={col * 180}
                      y={row * 170}
                      width={180}
                      height={170}
                      rx="6"
                    />
                  );
                })}
              </clipPath>

              {/* Patrón 3 Portrait */}
              <clipPath id={clipIds[2]}>
                <rect className="path-piece" x="0" y="0" width="180" height="680" rx="8" />
                <rect className="path-piece" x="180" y="0" width="180" height="680" rx="8" />
                <rect className="path-piece" x="360" y="0" width="180" height="680" rx="8" />
              </clipPath>

              {/* Patrón 4 Portrait */}
              <clipPath id={clipIds[3]}>
                <rect className="path-piece" x="0" y="0" width="270" height="226" rx="6" />
                <rect className="path-piece" x="270" y="0" width="270" height="226" rx="6" />
                <rect className="path-piece" x="0" y="226" width="270" height="227" rx="6" />
                <rect className="path-piece" x="270" y="226" width="270" height="227" rx="6" />
                <rect className="path-piece" x="0" y="453" width="270" height="227" rx="6" />
                <rect className="path-piece" x="270" y="453" width="270" height="227" rx="6" />
              </clipPath>
            </>
          )}
        </defs>

        <g ref={mainGroupRef} clipPath={`url(#${clipIds[0]})`}>
          <image
            ref={imageElRef}
            href={imagesList[0]}
            width={isLandscape ? "560" : "540"}
            height={isLandscape ? "490" : "680"}
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>
    </div>
  );
};
export default AnimatedConstructPhoto;
