import { motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

export function TypewriterText({
  text,
  className,
  delay = 0.2,
  characterDelay = 0.045,
}: {
  text: string
  className?: string
  delay?: number
  characterDelay?: number
}) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <>{text}</>
  }

  return (
    <span className={cn("inline-flex flex-wrap", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {Array.from(text).map((character, index) => (
          <motion.span
            key={`${character}-${index}`}
            initial={{ opacity: 0, y: "0.18em" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.18,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + index * characterDelay,
            }}
            className="inline-block"
          >
            {character === " " ? "\u00a0" : character}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + text.length * characterDelay,
          }}
          className="ml-1 inline-block h-[0.82em] w-[0.08em] translate-y-[0.08em] rounded-full bg-[oklch(0.62_0.2_305)]"
        />
      </span>
    </span>
  )
}
