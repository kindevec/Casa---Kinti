import React, { useState, useEffect, useRef } from 'react';
import { useNicheMode } from '../context/NicheContext';
import { AnimatedTabBar, TabItem } from './ui/animated-tab-bar';
import { WhatsAppOfficialIcon } from './FloralDecorations';
import { Home, User, BookOpen, ShoppingBag, Flower2 } from 'lucide-react';

export const MobileTabBar: React.FC = () => {
  const { mode } = useNicheMode();
  const [activeIndex, setActiveIndex] = useState(0);
  const isNavigatingRef = useRef(false);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Escuchar el scroll para actualizar la pestaña activa automáticamente sólo en scroll manual
  useEffect(() => {
    const sections = ['inicio', 'sobre-mi', 'productos', 'servicios', 'contacto'];

    const handleScroll = () => {
      // Si el usuario acaba de presionar una pestaña, ignorar el scroll intermedio para que el salto sea directo
      if (isNavigatingRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Si llegó al fondo de la página, fijar Contacto (última sección)
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveIndex(sections.length - 1);
        return;
      }

      const triggerPoint = scrollY + windowHeight * 0.38;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (triggerPoint >= top) {
            setActiveIndex((prev) => (prev !== i ? i : prev));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
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

  // Las 5 secciones oficiales de la página web adaptadas según el nicho activo
  const mobileTabItems: TabItem[] = [
    {
      label: 'Inicio',
      href: '#inicio',
      color: '#D4B26F',
      icon: <Home className="icon" />,
    },
    {
      label: 'Sobre Mí',
      href: '#sobre-mi',
      color: '#D4B26F',
      icon: <User className="icon" />,
    },
    {
      label: mode === 'educacion' ? 'Cursos' : 'Productos',
      href: '#productos',
      color: '#D4B26F',
      icon: mode === 'educacion' ? <BookOpen className="icon" /> : <ShoppingBag className="icon" />,
    },
    {
      label: 'Servicios',
      href: '#servicios',
      color: '#D4B26F',
      icon: <Flower2 className="icon" />,
    },
    {
      label: 'WhatsApp',
      href: '#contacto',
      color: '#D4B26F',
      icon: <WhatsAppOfficialIcon className="w-5 h-5 fill-current" />,
    },
  ];

  return (
    <aside
      aria-label="Navegación móvil inferior"
      className="fixed bottom-[calc(0.875rem+env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-[390px] md:hidden pointer-events-auto"
    >
      <AnimatedTabBar
        items={mobileTabItems}
        activeIndex={activeIndex}
        onTabChange={handleTabChange}
      />
    </aside>
  );
};
