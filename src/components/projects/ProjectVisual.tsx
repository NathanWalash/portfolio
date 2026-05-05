import { Blocks, Database, ImageIcon, LineChart, Search } from "lucide-react"
import { motion } from "motion/react"

import { type Project } from "@/data/projects"
import { cn } from "@/lib/utils"

const stackBarWidths = ["basis-16", "basis-20", "basis-14", "basis-24"]

const visualStyles = {
  "Backend/API": {
    panel:
      "from-sky-50 via-background to-emerald-50 dark:from-sky-950/40 dark:via-background dark:to-emerald-950/30",
    accent: "bg-sky-500",
    secondary: "bg-emerald-500",
    Icon: Database,
    signal: "indexed endpoints",
  },
  Algorithms: {
    panel:
      "from-violet-50 via-background to-cyan-50 dark:from-violet-950/40 dark:via-background dark:to-cyan-950/30",
    accent: "bg-violet-500",
    secondary: "bg-cyan-500",
    Icon: Search,
    signal: "ranked results",
  },
  "ML Product": {
    panel:
      "from-rose-50 via-background to-amber-50 dark:from-rose-950/40 dark:via-background dark:to-amber-950/30",
    accent: "bg-rose-500",
    secondary: "bg-amber-500",
    Icon: LineChart,
    signal: "forecast flow",
  },
  Blockchain: {
    panel:
      "from-lime-50 via-background to-indigo-50 dark:from-lime-950/30 dark:via-background dark:to-indigo-950/40",
    accent: "bg-lime-500",
    secondary: "bg-indigo-500",
    Icon: Blocks,
    signal: "module router",
  },
} satisfies Record<
  Project["category"],
  {
    panel: string
    accent: string
    secondary: string
    Icon: typeof Blocks
    signal: string
  }
>

export function ProjectVisual({
  project,
  className,
}: {
  project: Project
  className?: string
}) {
  const visual = visualStyles[project.category]
  const Icon = visual.Icon
  const visibleStack = project.stack.slice(0, 4)

  return (
    <div
      className={cn(
        "relative isolate grid aspect-[4/3] place-items-center overflow-hidden bg-muted/40 min-[480px]:aspect-[16/9]",
        className,
      )}
    >
      {project.image.src ? (
        <img
          src={project.image.src}
          alt={project.image.alt}
          className="size-full object-cover"
        />
      ) : (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            visual.panel,
          )}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
          <div className="absolute inset-x-3 top-3 h-7 rounded-lg border border-border/80 bg-background/80 backdrop-blur sm:inset-x-4 sm:top-4 sm:h-8" />
          <div className="absolute left-6 top-[1.625rem] flex gap-1.5 sm:left-7 sm:top-7">
            <span className={cn("size-2 rounded-full", visual.accent)} />
            <span className={cn("size-2 rounded-full", visual.secondary)} />
            <span className="size-2 rounded-full bg-muted-foreground/30" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-x-3 bottom-3 top-12 rounded-lg border border-border/80 bg-card/85 p-3 shadow-sm backdrop-blur sm:inset-x-4 sm:bottom-4 sm:top-16 sm:p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{project.title}</p>
                <p className="mt-1 truncate text-xs text-muted-foreground">
                  {project.category}
                </p>
              </div>
              <motion.div
                className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-background"
                whileInView={{ scale: [0.96, 1.05, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
              >
                <Icon className="size-4" aria-hidden="true" />
              </motion.div>
            </div>

            <div className="mt-3 grid gap-1.5 sm:mt-4 sm:gap-2">
              {visibleStack.map((item, index) => (
                <div
                  key={item}
                  className={cn(
                    "flex min-w-0 items-center gap-2",
                    index === 3 && "hidden min-[420px]:flex",
                  )}
                >
                  <motion.span
                    className={cn(
                      "h-2 shrink-0 rounded-full",
                      index % 2 === 0 ? visual.accent : visual.secondary,
                      stackBarWidths[index],
                    )}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: 0.16 + index * 0.07,
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                  <span className="truncate text-xs text-muted-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 right-4 hidden items-center gap-2 rounded-lg border border-border bg-background/80 px-2 py-1 text-xs text-muted-foreground min-[420px]:flex">
              <motion.span
                className={cn("size-1.5 rounded-full", visual.secondary)}
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
              {visual.signal}
              <ImageIcon className="size-3" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
