"use client"

import * as React from "react"
import { motion, HTMLMotionProps, Variants } from "framer-motion"
import { Eye } from "lucide-react"
import { cn } from "../../lib/utils"

const curtainVariants: Variants = {
  visible: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      duration: 0.45,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  hidden: {
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1],
    },
  },
}

interface CardCurtainRevealContextValue {
  isMouseIn: boolean
  setIsMouseIn: React.Dispatch<React.SetStateAction<boolean>>
}

const CardCurtainRevealContext = React.createContext<
  CardCurtainRevealContextValue | undefined
>(undefined)

export function useCardCurtainRevealContext() {
  const context = React.useContext(CardCurtainRevealContext)
  if (!context) {
    throw new Error(
      "useCardCurtainRevealContext must be used within a CardCurtainReveal Component"
    )
  }
  return context
}

export const CardCurtainReveal = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, onClick, ...props }, ref) => {
  const [isMouseIn, setIsMouseIn] = React.useState(false)

  const handlePointerEnter = React.useCallback(() => setIsMouseIn(true), [])
  const handlePointerLeave = React.useCallback(() => setIsMouseIn(false), [])

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement
      // Si se hizo click en un enlace o botón interno (ej. WhatsApp), permitir su acción
      if (target.closest('a') || target.closest('button')) {
        return
      }
      // Al tocar cualquier otra parte de la tarjeta, abrir/cerrar la cortina para leer la descripción
      setIsMouseIn((prev) => !prev)
      if (onClick) onClick(e)
    },
    [onClick]
  )

  return (
    <CardCurtainRevealContext.Provider value={{ isMouseIn, setIsMouseIn }}>
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col overflow-hidden group cursor-pointer select-none rounded-3xl touch-manipulation",
          className
        )}
        onMouseEnter={handlePointerEnter}
        onMouseLeave={handlePointerLeave}
        onClick={handleClick}
        {...props}
      >
        {children}
      </div>
    </CardCurtainRevealContext.Provider>
  )
})
CardCurtainReveal.displayName = "CardCurtainReveal"

/**
 * Cortina dividida en dos hojas que se abren hacia los lados al pasar el mouse o al tocar la tarjeta
 */
export const CardCurtainSplitCover = ({
  image,
  title,
  price,
  promoPrice,
  badge,
  duration,
  category,
  icon,
}: {
  image: string
  title: string
  price: string
  promoPrice?: string
  badge?: string
  duration?: string
  category?: string
  icon?: React.ReactNode
}) => {
  const { isMouseIn, setIsMouseIn } = useCardCurtainRevealContext()

  return (
    <div
      className={cn(
        "absolute inset-0 z-20 w-full h-full overflow-hidden transition-opacity duration-300",
        isMouseIn ? "pointer-events-none" : "pointer-events-auto cursor-pointer"
      )}
      onClick={(e) => {
        // Bloquear que el clic atraviese al botón de WhatsApp subyacente cuando la cortina está cerrada
        e.stopPropagation()
        setIsMouseIn(true)
      }}
    >
      {/* Hoja Izquierda de la Cortina (Se desliza hacia la izquierda) */}
      <motion.div
        className="absolute top-0 left-0 w-[calc(50%+1px)] h-full overflow-hidden"
        initial={false}
        animate={{
          x: isMouseIn ? "-102%" : "0%",
        }}
        transition={{
          duration: 0.5,
          ease: [0.32, 0.72, 0, 1],
        }}
      >
        <div className="absolute top-0 left-0 w-[200%] h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Degradado sutil y claro en la base para lectura de texto, imagen 100% clara y nítida arriba */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#133238]/85 via-[#133238]/25 via-40% to-transparent" />
        </div>
      </motion.div>

      {/* Hoja Derecha de la Cortina (Se desliza hacia la derecha) */}
      <motion.div
        className="absolute top-0 right-0 w-[calc(50%+1px)] h-full overflow-hidden"
        initial={false}
        animate={{
          x: isMouseIn ? "102%" : "0%",
        }}
        transition={{
          duration: 0.5,
          ease: [0.32, 0.72, 0, 1],
        }}
      >
        <div className="absolute top-0 right-0 w-[200%] h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Degradado sutil y claro en la base para lectura de texto, imagen 100% clara y nítida arriba */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#133238]/85 via-[#133238]/25 via-40% to-transparent" />
        </div>
      </motion.div>

      {/* Textos de la Portada (Título y Precio en la parte inferior, desaparecen suavemente al abrir la cortina) */}
      <motion.div
        className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end z-30"
        initial={false}
        animate={{
          opacity: isMouseIn ? 0 : 1,
          scale: isMouseIn ? 0.94 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Footer Inferior: Título + Precio */}
        <div className="space-y-1.5">
          {/* Título en blanco encima del precio */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            {title}
          </h3>
          <div className="flex items-center justify-between pt-0.5">
            <div>
              {promoPrice && (
                <span className="text-xs text-white/80 line-through block">
                  {promoPrice}
                </span>
              )}
              <span className="text-2xl font-bold font-serif-display text-[#FBF3E1] drop-shadow-md">
                {price}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export const CardCurtainRevealFooter = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, ...props }, ref) => {
  const { isMouseIn } = useCardCurtainRevealContext()

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={curtainVariants}
      animate={isMouseIn ? "visible" : "hidden"}
      {...props}
    />
  )
})
CardCurtainRevealFooter.displayName = "CardCurtainRevealFooter"

export const CardCurtainRevealBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("flex-1", className)} {...props} />
})
CardCurtainRevealBody.displayName = "CardCurtainRevealBody"

export const CardCurtainRevealDescription = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, ...props }, ref) => {
  const { isMouseIn } = useCardCurtainRevealContext()

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={curtainVariants}
      animate={isMouseIn ? "visible" : "hidden"}
      {...props}
    />
  )
})
CardCurtainRevealDescription.displayName = "CardCurtainRevealDescription"
