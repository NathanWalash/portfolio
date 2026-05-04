import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"
import type { PointerEvent, ReactNode } from "react"

import { cn } from "@/lib/utils"

export function TiltCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reducedMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [3, -3]), {
    stiffness: 360,
    damping: 32,
  })
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-3, 3]), {
    stiffness: 360,
    damping: 32,
  })

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType !== "mouse") {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function handlePointerLeave() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileHover={reducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={reducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      className={cn("h-full transform-gpu", className)}
    >
      {children}
    </motion.div>
  )
}
