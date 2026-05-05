import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { Reveal } from "@/components/animation/Reveal"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  projectCategories,
  projects,
} from "@/data/projects"

const filterOptions = ["All", ...projectCategories] as const

type ProjectFilter = (typeof filterOptions)[number]

const filterLabels: Record<ProjectFilter, string> = {
  All: "All",
  "Backend/API": "Backend / API",
  Algorithms: "Algorithms",
  "ML Product": "ML Product",
  Blockchain: "Blockchain",
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All")
  const filteredProjects = getFilteredProjects(activeFilter)

  return (
    <main className="mx-auto min-h-[calc(100svh-4rem)] w-full max-w-6xl px-4 py-12 sm:px-8 sm:py-16">
      <Reveal className="max-w-3xl">
        <p className="text-sm font-medium text-muted-foreground">Projects</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
          Selected builds and case studies.
        </h1>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
          Four focused projects that show backend API design, search algorithms,
          forecasting product work, and modular systems architecture.
        </p>
      </Reveal>

      <Reveal className="mt-8 sm:mt-10">
        <div className="rounded-lg border border-border bg-card/80 p-3 shadow-sm shadow-foreground/5 backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Filter work
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
            </div>

            <Tabs
              value={activeFilter}
              onValueChange={(value) => setActiveFilter(value as ProjectFilter)}
              className="min-w-0"
            >
              <TabsList
                aria-label="Project filters"
                className="flex h-auto w-full max-w-full justify-start gap-2 overflow-x-auto bg-transparent p-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {filterOptions.map((option) => (
                  <TabsTrigger
                    key={option}
                    value={option}
                    className="h-10 flex-none rounded-full border border-border bg-background px-3.5 text-sm data-active:border-[oklch(0.62_0.2_305_/_0.34)] data-active:bg-[oklch(0.62_0.2_305_/_0.1)] data-active:text-foreground data-active:shadow-none"
                  >
                    <span>{filterLabels[option]}</span>
                    <span className="rounded-full bg-muted px-1.5 py-0.5 text-[0.68rem] leading-none text-muted-foreground">
                      {getProjectCount(option)}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </Reveal>

      <motion.div layout className="mt-10 grid gap-4 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  )
}

function getFilteredProjects(filter: ProjectFilter) {
  if (filter === "All") {
    return projects
  }

  return projects.filter((project) => project.category === filter)
}

function getProjectCount(filter: ProjectFilter) {
  return getFilteredProjects(filter).length
}
