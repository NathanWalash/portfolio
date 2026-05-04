import { Braces, Database, ImageIcon, LayoutTemplate, Wrench } from "lucide-react"
import { motion } from "motion/react"

import { type Project } from "@/data/projects"
import { cn } from "@/lib/utils"

const visualStyles = {
  "Web App": {
    panel:
      "from-sky-50 via-background to-emerald-50 dark:from-sky-950/40 dark:via-background dark:to-emerald-950/30",
    accent: "bg-sky-500",
    secondary: "bg-emerald-500",
    Icon: Braces,
  },
  "Full-stack": {
    panel:
      "from-violet-50 via-background to-cyan-50 dark:from-violet-950/40 dark:via-background dark:to-cyan-950/30",
    accent: "bg-violet-500",
    secondary: "bg-cyan-500",
    Icon: Database,
  },
  UI: {
    panel:
      "from-rose-50 via-background to-amber-50 dark:from-rose-950/40 dark:via-background dark:to-amber-950/30",
    accent: "bg-rose-500",
    secondary: "bg-amber-500",
    Icon: LayoutTemplate,
  },
  Tools: {
    panel:
      "from-lime-50 via-background to-indigo-50 dark:from-lime-950/30 dark:via-background dark:to-indigo-950/40",
    accent: "bg-lime-500",
    secondary: "bg-indigo-500",
    Icon: Wrench,
  },
} satisfies Record<
  Project["category"],
  {
    panel: string
    accent: string
    secondary: string
    Icon: typeof Braces
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
        "relative isolate grid aspect-[16/9] place-items-center overflow-hidden bg-muted/40",
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
          <div className="absolute inset-x-4 top-4 h-8 rounded-lg border border-border/80 bg-background/80 backdrop-blur" />
          <div className="absolute left-7 top-7 flex gap-1.5">
            <span className={cn("size-2 rounded-full", visual.accent)} />
            <span className={cn("size-2 rounded-full", visual.secondary)} />
            <span className="size-2 rounded-full bg-muted-foreground/30" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-x-4 bottom-4 top-16 rounded-lg border border-border/80 bg-card/85 p-4 shadow-sm backdrop-blur"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{project.title}</p>
                <p className="mt-1 truncate text-xs text-muted-foreground">
                  {project.category}
                </p>
              </div>
              <div className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-background">
                <Icon className="size-4" aria-hidden="true" />
              </div>
            </div>

            <div className="mt-4 grid gap-2">
              {visibleStack.map((item, index) => (
                <div key={item} className="flex items-center gap-2">
                  <span
                    className={cn(
                      "h-2 rounded-full",
                      index % 2 === 0 ? visual.accent : visual.secondary,
                      index === 0
                        ? "w-1/2"
                        : index === 1
                          ? "w-2/3"
                          : index === 2
                            ? "w-5/12"
                            : "w-7/12",
                    )}
                  />
                  <span className="truncate text-xs text-muted-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 right-4 hidden size-7 place-items-center rounded-lg border border-border bg-background/80 text-muted-foreground min-[420px]:grid">
              <ImageIcon className="size-3" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
