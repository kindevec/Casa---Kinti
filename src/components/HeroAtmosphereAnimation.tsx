import React, { useMemo } from 'react';
import { motion } from 'motion/react';

// Partículas de Pétalos de Rosas y Hojas en Oro 24K con ráfagas multidireccionales
interface BotanicalParticle {
  id: number;
  type:
    | 'gold-rock-rose'
    | 'gold-wild-rose'
    | 'gold-star-petal'
    | 'gold-amber-rose'
    | 'gold-herbal-leaf'
    | 'gold-willow-leaf';
  left: number;
  size: number;
  duration: number;
  delay: number;
  initialY: number;
  // Trayectoria de viento multidireccional
  windX: number[];
  rotationSpeed: number;
  opacity: number;
  blur: number;
}

// Ondas de brisa de aire ambiental en ambas direcciones
interface BreezeGust {
  id: number;
  top: number;
  height: number;
  duration: number;
  delay: number;
  opacity: number;
  direction: 'left-to-right' | 'right-to-left';
}

export const HeroAtmosphereAnimation: React.FC = () => {
  // Configuración de las partículas doradas con dispersión hacia la izquierda, derecha y ondulaciones
  const particles: BotanicalParticle[] = useMemo(() => {
    const items: BotanicalParticle[] = [];
    const count = 35;

    const types: BotanicalParticle['type'][] = [
      'gold-rock-rose',
      'gold-rock-rose',
      'gold-wild-rose',
      'gold-star-petal',
      'gold-amber-rose',
      'gold-herbal-leaf',
      'gold-herbal-leaf',
      'gold-willow-leaf',
      'gold-willow-leaf',
    ];

    for (let i = 0; i < count; i++) {
      const type = types[i % types.length];
      const isForeground = i % 4 === 0;
      const isBackground = i % 3 === 0;
      const isLeaf = type === 'gold-herbal-leaf' || type === 'gold-willow-leaf';

      // Tamaños
      const size = isLeaf
        ? isForeground
          ? 32 + Math.random() * 18 // Hojas en primer plano (32px - 50px)
          : isBackground
          ? 16 + Math.random() * 8 // Fondo (16px - 24px)
          : 24 + Math.random() * 12 // Plano medio (24px - 36px)
        : isForeground
        ? 28 + Math.random() * 16 // Pétalos en primer plano (28px - 44px)
        : isBackground
        ? 15 + Math.random() * 7 // Fondo (15px - 22px)
        : 20 + Math.random() * 12; // Plano medio (20px - 32px)

      // DIRECCIÓN DE LA BRISA: 33% hacia la derecha, 33% hacia la izquierda, 34% ondulante S-Curve
      const dirChoice = i % 3;
      const offset = 35 + Math.random() * 65;
      const sway = 20 + Math.random() * 40;

      let windX: number[];
      if (dirChoice === 0) {
        // Hacia la DERECHA
        windX = [0, sway * 0.4, offset * 0.75, offset * 0.5, offset * 1.1];
      } else if (dirChoice === 1) {
        // Hacia la IZQUIERDA
        windX = [0, -sway * 0.4, -offset * 0.75, -offset * 0.5, -offset * 1.1];
      } else {
        // ONDULACIÓN EN S (izquierda y derecha oscilante)
        windX = [0, sway, -sway * 0.85, sway * 0.7, -sway * 0.4];
      }

      items.push({
        id: i,
        type,
        left: Math.random() * 105 - 2.5, // Distribución equilibrada
        size,
        duration: 3.8 + Math.random() * 4.2, // Caída fluida (3.8s a 8.0s)
        delay: (i / count) * 4.5,
        initialY: Math.random() * 130 - 30, // Cobertura total inmediata
        windX,
        rotationSpeed: 360 * (Math.random() > 0.5 ? 1 : -1) * (1.2 + Math.random() * 1.5),
        opacity: isBackground ? 0.50 + Math.random() * 0.20 : 0.82 + Math.random() * 0.18,
        blur: isBackground ? 1.2 : 0,
      });
    }
    return items;
  }, []);

  // Ondas de brisa de aire ambiental en ambas direcciones
  const breezeGusts: BreezeGust[] = useMemo(() => {
    return [
      { id: 1, top: 18, height: 120, duration: 6.5, delay: 0, opacity: 0.18, direction: 'left-to-right' },
      { id: 2, top: 45, height: 150, duration: 7.0, delay: 2.0, opacity: 0.20, direction: 'right-to-left' },
      { id: 3, top: 72, height: 140, duration: 6.8, delay: 4.2, opacity: 0.16, direction: 'left-to-right' },
    ];
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-10">
      {/* EFECTO BRISA: CORRIENTES MULTIDIRECCIONALES DE AIRE */}
      {breezeGusts.map((gust) => (
        <motion.div
          key={gust.id}
          className="absolute w-[60%] rounded-full pointer-events-none"
          style={{
            top: `${gust.top}%`,
            height: `${gust.height}px`,
            background:
              'radial-gradient(ellipse at center, rgba(255,234,121,0.15) 0%, rgba(92,189,181,0.08) 45%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          initial={{
            x: gust.direction === 'left-to-right' ? '-60vw' : '130vw',
            opacity: 0,
            scaleX: 0.8,
          }}
          animate={{
            x: gust.direction === 'left-to-right' ? ['-60vw', '130vw'] : ['130vw', '-60vw'],
            opacity: [0, gust.opacity, gust.opacity * 0.8, 0],
            scaleX: [0.8, 1.4, 1.1],
          }}
          transition={{
            duration: gust.duration,
            delay: gust.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* LLUVIA MULTIDIRECCIONAL DE PÉTALOS DE ROSA Y HOJAS EN ORO METÁLICO */}
      {particles.map((p) => {
        return (
          <motion.div
            key={p.id}
            initial={{
              y: `${p.initialY}vh`,
              x: 0,
              rotate: Math.random() * 360,
              rotateX: 0,
              rotateY: 0,
              opacity: p.opacity,
            }}
            animate={{
              y: ['-10vh', '110vh'],
              x: p.windX,
              rotate: [0, p.rotationSpeed * 0.45, p.rotationSpeed],
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 360],
              opacity: [0, p.opacity, p.opacity, p.opacity * 0.85, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              filter: p.blur > 0 ? `blur(${p.blur}px)` : undefined,
              transformStyle: 'preserve-3d',
            }}
          >
            {p.type === 'gold-rock-rose' && (
              /* Pétalo de Rosa en Oro Pulido Radiante */
              <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-[0_2px_10px_rgba(255,215,0,0.55)]">
                <path
                  d="M16 2 C24 8, 30 18, 22 28 C16 32, 10 28, 6 20 C2 12, 8 4, 16 2 Z"
                  fill="url(#gold-rockrose-grad)"
                />
                <path d="M16 5 Q17 18 19 27" stroke="#FFF7C2" strokeWidth="0.9" strokeOpacity="0.85" fill="none" />
              </svg>
            )}

            {p.type === 'gold-wild-rose' && (
              /* Pétalo de Rosa Silvestre en Oro Champagne / Oro Rosado */
              <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-[0_3px_10px_rgba(255,200,80,0.6)]">
                <path
                  d="M16 2 C26 6, 31 17, 24 27 C18 31, 10 29, 6 23 C2 15, 8 5, 16 2 Z"
                  fill="url(#gold-wildrose-grad)"
                />
                <path d="M16 4 Q17 16 20 27" stroke="#FFF9D2" strokeWidth="0.8" strokeOpacity="0.75" fill="none" />
              </svg>
            )}

            {p.type === 'gold-star-petal' && (
              /* Pétalo en Oro Blanco Metálico / Platino Brillante */
              <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-[0_2px_8px_rgba(255,234,121,0.6)]">
                <path
                  d="M16 2 C23 7, 29 17, 23 27 C17 31, 11 28, 7 21 C3 13, 9 5, 16 2 Z"
                  fill="url(#gold-starpetal-grad)"
                />
                <path d="M16 5 Q16.5 17 18 27" stroke="#FFFCE6" strokeWidth="0.8" strokeOpacity="0.9" fill="none" />
              </svg>
            )}

            {p.type === 'gold-amber-rose' && (
              /* Pétalo en Oro Ámbar / Oro Imperial 24K */
              <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-[0_2px_10px_rgba(255,180,0,0.6)]">
                <path
                  d="M16 2 C22 6, 28 16, 24 26 C20 30, 12 30, 8 24 C4 16, 10 6, 16 2 Z"
                  fill="url(#gold-amberrose-grad)"
                />
                <path d="M16 4 Q16 16 18 26" stroke="#FFEBA4" strokeWidth="0.8" strokeOpacity="0.8" fill="none" />
              </svg>
            )}

            {p.type === 'gold-herbal-leaf' && (
              /* Hoja Botánica Sagrada en Oro Metálico (con nervaduras doradas brillantes) */
              <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-[0_3px_12px_rgba(255,215,0,0.65)]">
                <path
                  d="M4 28 C10 24, 28 20, 28 4 C24 16, 16 26, 4 28 Z"
                  fill="url(#gold-herballeaf-grad)"
                />
                <path d="M6 26 Q18 18 26 6" stroke="#FFF7C2" strokeWidth="1.1" strokeOpacity="0.9" fill="none" />
                <path d="M14 20 Q18 22 22 21" stroke="#FFF7C2" strokeWidth="0.7" strokeOpacity="0.75" fill="none" />
                <path d="M10 14 Q14 16 18 15" stroke="#FFF7C2" strokeWidth="0.7" strokeOpacity="0.75" fill="none" />
              </svg>
            )}

            {p.type === 'gold-willow-leaf' && (
              /* Hoja Esbelta de Sauce Sagrado en Oro 24K */
              <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-[0_3px_12px_rgba(255,200,40,0.6)]">
                <path
                  d="M16 2 C21 10, 23 22, 16 30 C9 22, 11 10, 16 2 Z"
                  fill="url(#gold-willowleaf-grad)"
                />
                <path d="M16 3 L16 29" stroke="#FFFCE6" strokeWidth="1" strokeOpacity="0.85" />
              </svg>
            )}
          </motion.div>
        );
      })}

      {/* DEFINICIÓN DE DEGRADADOS EN ORO METÁLICO 24K: PÉTALOS Y HOJAS */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          {/* Oro Solar 24K (Rock Rose) */}
          <linearGradient id="gold-rockrose-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFCE6" />
            <stop offset="25%" stopColor="#FFEA79" />
            <stop offset="65%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#D4A346" />
          </linearGradient>

          {/* Oro Champagne Pulido (Wild Rose) */}
          <linearGradient id="gold-wildrose-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF0" />
            <stop offset="30%" stopColor="#FFE599" />
            <stop offset="70%" stopColor="#E5B54E" />
            <stop offset="100%" stopColor="#C59336" />
          </linearGradient>

          {/* Oro Blanco Luminoso / Platino (Star Petal) */}
          <linearGradient id="gold-starpetal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FFF5C4" />
            <stop offset="80%" stopColor="#FFEA79" />
            <stop offset="100%" stopColor="#E2A93A" />
          </linearGradient>

          {/* Oro Ámbar Imperial (Amber Rose) */}
          <linearGradient id="gold-amberrose-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF3B0" />
            <stop offset="35%" stopColor="#FFC72C" />
            <stop offset="75%" stopColor="#E5A020" />
            <stop offset="100%" stopColor="#B87B00" />
          </linearGradient>

          {/* Hoja Botánica en Oro Metálico Puro */}
          <linearGradient id="gold-herballeaf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFCE6" />
            <stop offset="20%" stopColor="#FFE082" />
            <stop offset="60%" stopColor="#FFD700" />
            <stop offset="90%" stopColor="#E5A823" />
            <stop offset="100%" stopColor="#B37400" />
          </linearGradient>

          {/* Hoja de Sauce en Oro Bruñido */}
          <linearGradient id="gold-willowleaf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8D6" />
            <stop offset="30%" stopColor="#FFD23F" />
            <stop offset="70%" stopColor="#E59B20" />
            <stop offset="100%" stopColor="#9E6200" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
