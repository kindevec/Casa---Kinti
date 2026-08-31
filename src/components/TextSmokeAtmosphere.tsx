import React, { useEffect, useRef } from 'react';

/**
 * TextSmokeAtmosphere
 * Genera humo sagrado ascendente con trayectoria orientada hacia la palabra "INICIO"
 * en la barra superior de navegación, con mayor presencia y nitidez visual.
 */
export const TextSmokeAtmosphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    interface SmokeParticle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      opacity: number;
      maxOpacity: number;
      growth: number;
      life: number;
      maxLife: number;
      color: string;
      rotation: number;
      vRot: number;
      waveFreq: number;
      waveAmp: number;
    }

    const smokeParticles: SmokeParticle[] = [];
    const maxSmoke = 38;

    const createSmokeParticle = (): SmokeParticle => {
      // Origen en la base de la sección de texto
      const originX = width * (0.2 + Math.random() * 0.75);
      const originY = height * (0.84 + Math.random() * 0.16);

      // Destino: hacia la palabra "INICIO" en la barra de navegación superior (zona superior izquierda del bloque)
      const targetX = width * (0.15 + Math.random() * 0.35);
      const targetY = -40; // Hacia el menú INICIO arriba

      const maxLife = 270 + Math.random() * 210;

      const dx = targetX - originX;
      const dy = targetY - originY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const speed = (dist / maxLife) * (0.95 + Math.random() * 0.25);

      return {
        x: originX,
        y: originY,
        radius: 40 + Math.random() * 55,
        vx: (dx / dist) * speed,
        vy: (dy / dist) * speed,
        opacity: 0,
        maxOpacity: 0.26 + Math.random() * 0.16, // Humo más visible, nítido y elegante
        growth: 0.32 + Math.random() * 0.38,
        life: 0,
        maxLife,
        color: Math.random() > 0.35 ? 'rgba(225, 240, 255, ' : 'rgba(250, 230, 185, ',
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.007,
        waveFreq: 0.015 + Math.random() * 0.012,
        waveAmp: 0.35 + Math.random() * 0.45,
      };
    };

    for (let i = 0; i < maxSmoke; i++) {
      const p = createSmokeParticle();
      p.life = Math.random() * p.maxLife;
      p.x += p.vx * p.life;
      p.y += p.vy * p.life;
      p.radius += p.growth * p.life * 0.45;
      smokeParticles.push(p);
    }

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < smokeParticles.length; i++) {
        const p = smokeParticles[i];
        p.life++;

        // Ondulación natural en la trayectoria ascendente hacia INICIO
        const wave = Math.sin(tick * p.waveFreq + i) * p.waveAmp;
        p.x += p.vx + wave;
        p.y += p.vy;
        p.radius += p.growth;
        p.rotation += p.vRot;

        const progress = p.life / p.maxLife;
        if (progress < 0.18) {
          p.opacity = (progress / 0.18) * p.maxOpacity;
        } else if (progress > 0.72) {
          p.opacity = ((1 - progress) / 0.28) * p.maxOpacity;
        } else {
          p.opacity = p.maxOpacity;
        }

        if (p.life >= p.maxLife || p.y < -p.radius - 60) {
          smokeParticles[i] = createSmokeParticle();
          continue;
        }

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `${p.color}${p.opacity})`);
        grad.addColorStop(0.42, `${p.color}${p.opacity * 0.6})`);
        grad.addColorStop(0.8, `${p.color}${p.opacity * 0.18})`);
        grad.addColorStop(1, `${p.color}0)`);

        ctx.save();
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute -inset-x-12 -top-28 -bottom-16 pointer-events-none -z-10 overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
};
