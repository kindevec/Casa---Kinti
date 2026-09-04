import React, { useState, useEffect, useRef } from 'react';
import { useNicheMode } from '../context/NicheContext';
import { AnimatedTabBar, TabItem } from './ui/animated-tab-bar';
import { WhatsAppOfficialIcon } from './FloralDecorations';
import { Home, User, BookOpen, ShoppingBag, Flower2 } from 'lucide-react';

export const MobileTabBar: React.FC = () => {
  const { mode, triggerNav } = useNicheMode();
  const [activeIndex, setActiveIndex] = useState(0);
  const isNavigatingRef = useRef(false);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (href: string) => {
    triggerNav(href);
    isNavigatingRef.current = true;
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }
    navigationTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1100);

    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Las 5 secciones oficiales de la página web adaptadas según el nicho activo
  const mobileTabItems: TabItem[] = [
    {
      label: 'Inicio',
      href: '#inicio',
      color: '#D4B26F',
      icon: <Home className="icon" />,
      onClick: () => scrollToSection('#inicio'),
    },
    {
      label: 'Sobre Mí',
      href: '#sobre-mi',
      color: '#D4B26F',
      icon: <User className="icon" />,
      onClick: () => scrollToSection('#sobre-mi'),
    },
    {
      label: mode === 'educacion' ? 'Cursos' : 'Productos',
      href: mode === 'educacion' ? '#cursos' : '#productos',
      color: '#D4B26F',
      icon: mode === 'educacion' ? <BookOpen className="icon" /> : <ShoppingBag className="icon" />,
      onClick: () => scrollToSection(mode === 'educacion' ? '#cursos' : '#productos'),
    },
    {
      label: 'Servicios',
      href: '#servicios',
      color: '#D4B26F',
      icon: <Flower2 className="icon" />,
      onClick: () => scrollToSection('#servicios'),
    },
    {
      label: 'WhatsApp',
      href: '#contacto',
      color: '#D4B26F',
      icon: <WhatsAppOfficialIcon className="w-5 h-5 fill-current" />,
      onClick: () => scrollToSection('#contacto'),
    },
  ];

  // Escuchar el scroll para actualizar la pestaña activa de forma ultra fluida con requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    let rafId: number | null = null;

    const checkScrollPosition = () => {
      ticking = false;

      // Si el usuario acaba de presionar una pestaña, ignorar el scroll intermedio para que el salto sea directo
      if (isNavigatingRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Si llegó al fondo de la página, fijar Contacto / WhatsApp (última sección)
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveIndex(mobileTabItems.length - 1);
        return;
      }

      const triggerPoint = scrollY + windowHeight * 0.38;

      // Mapear cada pestaña a su posición vertical real en la página (offsetTop)
      const tabPositions = mobileTabItems
        .map((item, index) => {
          const id = item.href?.replace('#', '');
          const el = id ? document.getElementById(id) : null;
          return {
            index,
            id,
            top: el ? el.offsetTop : -1,
          };
        })
        .filter((item) => item.top >= 0)
        // Ordenar de abajo hacia arriba de la página para detectar la sección activa correcta
        .sort((a, b) => b.top - a.top);

      for (const tab of tabPositions) {
        if (triggerPoint >= tab.top) {
          setActiveIndex((prev) => (prev !== tab.index ? tab.index : prev));
          break;
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = window.requestAnimationFrame(checkScrollPosition);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    checkScrollPosition();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [mode]);

  const handleTabChange = (index: number) => {
    // Bloquear eventos de scroll durante el salto directo y asegurar que no haya dobles saltos
    isNavigatingRef.current = true;
    setActiveIndex(index);

    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }
    navigationTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1100);
  };

  return (
    <aside
      aria-label="Navegación móvil inferior"
      className="fixed -bottom-[1px] inset-x-0 z-40 w-full md:hidden pointer-events-auto select-none shadow-[0_-4px_20px_rgba(0,0,0,0.12)]"
    >
      <AnimatedTabBar
        items={mobileTabItems}
        activeIndex={activeIndex}
        onTabChange={handleTabChange}
      />
    </aside>
  );
};

