import { ImageIcon } from "lucide-react"

import { type Project } from "@/data/projects"
import { cn } from "@/lib/utils"

export function ProjectVisual({
  project,
  className,
}: {
  project: Project
  className?: string
}) {
  return (
    <div
      className={cn(
        "grid aspect-[16/9] place-items-center overflow-hidden bg-muted/40",
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
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ImageIcon className="size-4" aria-hidden="true" />
          {project.title}
        </div>
      )}
    </div>
  )
}
