"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

export interface TabItem {
  icon: React.ReactNode;
  color?: string;
  label?: string;
  href?: string;
  onClick?: () => void;
}

export interface AnimatedTabBarProps {
  items: TabItem[];
  defaultIndex?: number;
  activeIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
}

export const AnimatedTabBar: React.FC<AnimatedTabBarProps> = ({
  items,
  defaultIndex = 0,
  activeIndex: controlledIndex,
  onTabChange,
  className = "",
}) => {
  const [internalIndex, setInternalIndex] = useState(defaultIndex);
  const activeIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(380);

  const ballControls = useAnimationControls();
  const pathControls = useAnimationControls();

  const isMountedRef = useRef(false);
  const prevIndexRef = useRef(activeIndex);

  // Medir el ancho del contenedor dinámicamente
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const measured = containerRef.current.offsetWidth;
        if (measured > 0) {
          setWidth(measured);
        }
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const itemCount = items.length || 1;
  const itemWidth = width / itemCount;
  const activeCenterX = (activeIndex + 0.5) * itemWidth;

  // Generador de curva SVG con profundidad dinámica (notch en U o superficie plana)
  const generatePath = (cx: number, w: number, depth: number = 48, h: number = 74) => {
    const yTop = 16;
    const r = 24;
    const halfNotch = 46;
    const currentDepth = Math.max(yTop, depth);
    const cp = 18;

    const x0 = Math.max(r, cx - halfNotch);
    const x3 = Math.min(w - r, cx + halfNotch);

    return `
      M 0,${yTop + r}
      Q 0,${yTop} ${r},${yTop}
      L ${x0},${yTop}
      C ${x0 + cp},${yTop} ${cx - cp},${currentDepth} ${cx},${currentDepth}
      C ${cx + cp},${currentDepth} ${x3 - cp},${yTop} ${x3},${yTop}
      L ${w - r},${yTop}
      Q ${w},${yTop} ${w},${yTop + r}
      L ${w},${h}
      L 0,${h}
      Z
    `.replace(/\s+/g, " ").trim();
  };

  // Efecto maestro: Controla reposo inicial y salto parabólico garantizado en todo cambio
  useEffect(() => {
    // 1. Al cargar la página: fijar reposo absoluto sin saltos
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      prevIndexRef.current = activeIndex;
      ballControls.set({
        x: activeCenterX - 26,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        rotate: 0,
      });
      pathControls.set({
        d: generatePath(activeCenterX, width, 48),
      });
      return;
    }

    // 2. Si cambia de sección (cercana o lejana): ejecutar el salto en arco y el hundimiento al caer
    if (prevIndexRef.current !== activeIndex) {
      const fromIdx = prevIndexRef.current;
      const toIdx = activeIndex;
      const fromCx = (fromIdx + 0.5) * itemWidth;
      const toCx = (toIdx + 0.5) * itemWidth;
      const distance = Math.max(1, Math.abs(toIdx - fromIdx));
      const direction = toIdx > fromIdx ? 1 : -1;

      // Calcular altura del salto proporcional a la distancia (salto alto y visible)
      const jumpHeight = Math.min(68, 40 + distance * 8);
      const jumpDuration = Math.min(0.76, 0.54 + distance * 0.05);
      const rotateAngle = direction * Math.min(48, 24 + distance * 8);

      prevIndexRef.current = activeIndex;

      // Disparar la trayectoria parabólica de la pelotita
      ballControls.start({
        x: toCx - 26,
        y: [0, -jumpHeight, -jumpHeight * 0.85, -2, 6, 0],
        scaleX: [1, 0.76, 0.86, 1, 1.28, 1],
        scaleY: [1, 1.36, 1.18, 1, 0.74, 1],
        rotate: [0, rotateAngle, rotateAngle * 0.5, 0, 0, 0],
        transition: {
          x: { duration: jumpDuration, ease: [0.25, 1, 0.5, 1] },
          y: { duration: jumpDuration, times: [0, 0.35, 0.55, 0.72, 0.88, 1], ease: "easeInOut" },
          scaleX: { duration: jumpDuration, times: [0, 0.25, 0.55, 0.72, 0.88, 1] },
          scaleY: { duration: jumpDuration, times: [0, 0.25, 0.55, 0.72, 0.88, 1] },
          rotate: { duration: jumpDuration, times: [0, 0.3, 0.55, 0.72, 0.88, 1] },
        },
      });

      // Disparar el allanado de la barra en vuelo y el hundimiento al impacto
      pathControls.start({
        d: [
          generatePath(fromCx, width, 48), // Inicia con muesca en el origen
          generatePath(fromCx, width, 16), // Despega: la muesca de origen se allana
          generatePath(toCx, width, 16),   // En vuelo: barra plana
          generatePath(toCx, width, 54),   // Impacto: al caer la pelotita se hunde
          generatePath(toCx, width, 48),   // Reposo: se asienta en la muesca
        ],
        transition: {
          duration: jumpDuration,
          times: [0, 0.2, 0.65, 0.88, 1],
          ease: "easeInOut",
        },
      });
    } else {
      // Ajuste de redimensionamiento si no hay cambio de índice
      ballControls.set({ x: activeCenterX - 26 });
      pathControls.set({ d: generatePath(activeCenterX, width, 48) });
    }
  }, [activeIndex, activeCenterX, width, itemWidth, ballControls, pathControls]);

  const handleItemClick = (index: number) => {
    if (controlledIndex === undefined) {
      setInternalIndex(index);
    }
    const item = items[index];
    if (item?.onClick) {
      item.onClick();
    } else if (item?.href) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (onTabChange) {
      onTabChange(index);
    }
  };

  const activeItem = items[activeIndex];

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none ${className}`}
      style={{ height: "74px" }}
    >
      {/* Fondo SVG con muesca controlada imperativamente */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_-4px_24px_rgba(19, 50, 56, 0.14)]"
        viewBox={`0 0 ${width} 74`}
        preserveAspectRatio="none"
      >
        <motion.path
          d={generatePath(activeCenterX, width, 48)}
          fill="#FFFFFF"
          animate={pathControls}
        />
      </svg>

      {/* Botón Pelotita Flotante con Control Imperativo de Salto */}
      <motion.div
        className="absolute top-[2px] z-20 w-[52px] h-[52px] rounded-full flex items-center justify-center cursor-pointer overflow-hidden shadow-[0_8px_24px_rgba(4, 54, 81, 0.48)] ring-2 ring-white/85"
        style={{
          background:
            activeItem?.color && activeItem.color.startsWith("bg-")
              ? undefined
              : activeItem?.color
              ? `linear-gradient(135deg, ${activeItem.color}, #2B7294, #CEAB67)`
              : "linear-gradient(135deg, #043651 0%, #2B7294 50%, #CEAB67 100%)",
        }}
        animate={ballControls}
      >
        {/* Destello de luz reflectante diagonal */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse pointer-events-none" />

        {/* Ícono Activo en Blanco Brillante con aparición suave */}
        <motion.div
          key={activeIndex}
          initial={{ scale: 0.4, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 440, damping: 22, delay: 0.08 }}
          className="relative z-10 text-white [&_svg]:stroke-white [&_svg]:fill-white [&_svg]:w-6 [&_svg]:h-6 drop-shadow-sm flex items-center justify-center"
        >
          {activeItem?.icon}
        </motion.div>
      </motion.div>

      {/* Elementos de Navegación (Iconos Inactivos y Etiquetas) */}
      <div className="relative z-10 w-full h-full flex items-center justify-around pt-3">
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={index}
              type="button"
              onClick={() => handleItemClick(index)}
              className="flex-1 h-full flex flex-col items-center justify-center cursor-pointer transition-all duration-200 outline-none group"
              aria-label={item.label || `Pestaña ${index + 1}`}
            >
              <div
                className={`transition-all duration-300 flex flex-col items-center justify-center ${
                  isActive
                    ? "opacity-0 pointer-events-none translate-y-3 scale-75"
                    : "opacity-80 group-hover:opacity-100 group-hover:scale-110"
                }`}
              >
                <div className="w-6 h-6 text-[#133238] group-hover:text-[#043651] transition-colors duration-200 flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5">
                  {item.icon}
                </div>
                {item.label && (
                  <span className="text-[10px] font-bold text-[#133238] group-hover:text-[#043651] transition-colors duration-200 mt-1 leading-none">
                    {item.label}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
