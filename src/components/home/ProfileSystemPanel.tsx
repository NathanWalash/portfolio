import { Cpu, GitBranch, Layers3, Terminal, Trophy } from "lucide-react"
import { motion } from "motion/react"

import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"

const statusRows = [
  { label: "Focus", value: "Full-stack + AI", Icon: Cpu },
  { label: "Projects", value: "APIs / ML / Web3", Icon: Layers3 },
  { label: "Workflow", value: "GitHub + CI", Icon: GitBranch },
  { label: "Hackathons", value: "Leeds x2", Icon: Trophy },
]

const signalBars = ["w-8", "w-14", "w-11", "w-16", "w-10"]

export function ProfileSystemPanel() {
  if (profile.profileImage.src) {
    return (
      <div className="grid aspect-square place-items-center overflow-hidden rounded-lg border border-border bg-muted/50">
        <img
          src={profile.profileImage.src}
          alt={profile.profileImage.alt}
          className="size-full object-cover object-center"
        />
      </div>
    )
  }

  return (
    <div className="relative isolate aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted/40 p-4 sm:aspect-square">
      <div className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />
      <motion.div
        className="absolute inset-x-4 top-12 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
        animate={{ y: [0, 150, 0], opacity: [0.1, 0.45, 0.1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="flex items-center justify-between rounded-lg border border-border bg-background/85 px-3 py-2 backdrop-blur">
        <div className="flex items-center gap-2">
          <Terminal className="size-4 text-muted-foreground" aria-hidden="true" />
          <span className="text-xs font-medium text-muted-foreground">
            nathan.dev
          </span>
        </div>
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-emerald-500" />
          <span className="size-2 rounded-full bg-sky-500" />
          <span className="size-2 rounded-full bg-violet-500" />
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-border bg-card/85 p-4 shadow-sm backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="grid size-14 place-items-center rounded-lg border border-border bg-background text-xl font-semibold">
            {profile.initials}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{profile.name}</p>
            <p className="mt-1 truncate text-xs text-muted-foreground">
              {profile.title}
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-2">
          {statusRows.map(({ label, value, Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.12 + index * 0.06 }}
              className="flex items-center justify-between gap-3 rounded-lg border border-border bg-background/70 px-3 py-2"
            >
              <span className="flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
                <Icon className="size-3.5 shrink-0" aria-hidden="true" />
                <span className="truncate">{label}</span>
              </span>
              <span className="truncate text-xs font-medium">{value}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 hidden items-end justify-between gap-2 min-[420px]:flex">
        {signalBars.map((width, index) => (
          <motion.span
            key={`${width}-${index}`}
            className={cn("h-1 rounded-full bg-foreground/20", width)}
            animate={{ opacity: [0.18, 0.45, 0.18] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.12,
            }}
          />
        ))}
      </div>
    </div>
  )
}
