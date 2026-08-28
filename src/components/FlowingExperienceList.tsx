import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

// Icono Checkmark Púrpura subido por el usuario (Círculo morado con check lavanda redondeado)
export const PurpleCheckCircleIcon: React.FC<{ className?: string; inverted?: boolean }> = ({
  className = 'w-6 h-6',
  inverted = false,
}) => (
  <svg
    viewBox="0 0 100 100"
    className={`shrink-0 ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="50" fill={inverted ? '#FFFFFF' : '#4B166F'} />
    <path
      d="M33 51L45 63L68 37"
      stroke={inverted ? '#4B166F' : '#DDB8FF'}
      strokeWidth="11"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface FlowingBenefitItemProps {
  text: string;
  speed?: number;
}

export const FlowingBenefitItem: React.FC<FlowingBenefitItemProps> = ({
  text,
  speed = 14,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [repetitions, setRepetitions] = useState(4);

  const animationDefaults = { duration: 0.55, ease: 'expo.out' };

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const distMetric = (x: number, y: number, x2: number, y2: number) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part') as HTMLElement;
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth || 300;
      const containerWidth = itemRef.current?.offsetWidth || window.innerWidth;
      const needed = Math.ceil(containerWidth / contentWidth) + 3;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [text]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part') as HTMLElement;
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1,
      });
    };

    const timer = setTimeout(setupMarquee, 60);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [text, repetitions, speed]);

  const handleMouseEnter = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  return (
    <div
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-2xl bg-white/90 p-3.5 sm:p-4 border border-[#C9D4F5]/70 shadow-2xs backdrop-blur-xs cursor-pointer transition-all duration-300 hover:shadow-md hover:border-[#9B8FD9]/60 select-none group"
    >
      {/* Capa de Hover en el FONDO (z-0): Efecto Tipo Agua con Sliding Marquee Dinámico */}
      <div
        ref={marqueeRef}
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-gradient-to-r from-[#DCEEFB] via-[#C9D4F5]/85 to-[#9B8FD9]/50 border border-white/80 rounded-2xl shadow-[inset_0_1px_3px_rgba(255,255,255,0.9),0_4px_20px_rgba(107,127,209,0.18)] flex items-center"
        style={{ transform: 'translate3d(0, 101%, 0)' }}
      >
        {/* Reflejo acuático superior de brillo */}
        <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />

        <div
          className="w-full h-full flex items-center relative z-1"
          style={{ transform: 'translate3d(0, -101%, 0)' }}
        >
          <div
            ref={marqueeInnerRef}
            className="flex items-center whitespace-nowrap will-change-transform opacity-40 select-none"
            aria-hidden="true"
          >
            {[...Array(repetitions)].map((_, idx) => (
              <div
                key={idx}
                className="marquee__part flex items-center shrink-0 px-6 gap-3 text-xs sm:text-sm font-semibold tracking-wide text-[#4B166F]"
              >
                <PurpleCheckCircleIcon className="w-5 h-5 shrink-0 opacity-70" />
                <span>{text}</span>
                <span className="text-[#6B7FD1] text-base font-normal select-none">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido Principal al FRENTE (z-10): Siempre 100% Nítido y Visible */}
      <div className="flex items-center gap-3.5 relative z-10">
        <PurpleCheckCircleIcon className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110 drop-shadow-xs" />
        <span className="text-xs sm:text-sm text-[#3E4A7A] font-semibold leading-relaxed group-hover:text-[#2A1045] transition-colors">
          {text}
        </span>
      </div>
    </div>
  );
};

interface FlowingExperienceListProps {
  items: string[];
  speed?: number;
  className?: string;
}

export const FlowingExperienceList: React.FC<FlowingExperienceListProps> = ({
  items,
  speed = 14,
  className = 'space-y-3',
}) => {
  return (
    <div className={className}>
      {items.map((item, idx) => (
        <FlowingBenefitItem key={idx} text={item} speed={speed} />
      ))}
    </div>
  );
};

export default FlowingExperienceList;