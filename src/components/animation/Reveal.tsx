import { motion } from "motion/react"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

const easeOut = [0.16, 1, 0.3, 1] as const

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.45, ease: easeOut, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
