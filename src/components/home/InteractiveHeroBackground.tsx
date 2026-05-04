import { motion } from "motion/react"

export function InteractiveHeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-position:var(--hero-x,50%)_var(--hero-y,50%)] [background-size:42px_42px]" />
      <div className="absolute inset-0 [background-image:linear-gradient(115deg,transparent_0%,transparent_44%,color-mix(in_oklch,var(--foreground)_8%,transparent)_45%,transparent_46%,transparent_100%)]" />
      <motion.div
        className="absolute bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent"
        style={{ left: "var(--hero-x, 50%)" }}
        animate={{ opacity: [0.2, 0.55, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
        style={{ top: "var(--hero-y, 45%)" }}
        animate={{ opacity: [0.18, 0.5, 0.18] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-border/80" />
    </div>
  )
}
