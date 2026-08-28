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
>(({ children, className, ...props }, ref) => {
  const [isMouseIn, setIsMouseIn] = React.useState(false)
  const handleMouseEnter = React.useCallback(() => setIsMouseIn(true), [])
  const handleMouseLeave = React.useCallback(() => setIsMouseIn(false), [])

  return (
    <CardCurtainRevealContext.Provider value={{ isMouseIn }}>
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col overflow-hidden group cursor-pointer select-none rounded-3xl",
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </div>
    </CardCurtainRevealContext.Provider>
  )
})
CardCurtainReveal.displayName = "CardCurtainReveal"

/**
 * Cortina dividida en dos hojas que se abren hacia los lados al pasar el mouse por encima
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
  const { isMouseIn } = useCardCurtainRevealContext()

  return (
    <div className="absolute inset-0 z-20 pointer-events-none w-full h-full overflow-hidden">
      {/* Hoja Izquierda de la Cortina (Se desliza hacia la izquierda) */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full overflow-hidden bg-[#EBF3FC] border-r border-[#C9DCF8]/60 shadow-lg"
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C3B63]/85 via-[#2C3B63]/25 via-40% to-transparent" />
        </div>
        {/* Sombra de pliegue sutil en azul claro */}
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#3E4D7A]/20 to-transparent" />
      </motion.div>

      {/* Hoja Derecha de la Cortina (Se desliza hacia la derecha) */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full overflow-hidden bg-[#EBF3FC] border-l border-[#C9DCF8]/60 shadow-lg"
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C3B63]/85 via-[#2C3B63]/25 via-40% to-transparent" />
        </div>
        {/* Sombra de pliegue sutil en azul claro */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#3E4D7A]/20 to-transparent" />
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
        {/* Footer Inferior: Título y Precio */}
        <div className="space-y-1.5">
          <h3 className="font-serif-display text-2xl font-bold text-white leading-snug drop-shadow-md">
            {title}
          </h3>

          <div className="flex items-center justify-between pt-0.5">
            <div>
              {promoPrice && (
                <span className="text-xs text-white/80 line-through block">
                  {promoPrice}
                </span>
              )}
              <span className="text-2xl font-bold font-serif-display text-[#FBE4F0] drop-shadow-md">
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
