import type { TargetAndTransition, Variants } from "motion/react"

const easeOut = [0.16, 1, 0.3, 1] as const

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: easeOut },
  },
}

export const liftHover: TargetAndTransition = {
  y: -4,
  transition: { duration: 0.2, ease: easeOut },
}
