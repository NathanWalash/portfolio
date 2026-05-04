import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { Reveal } from "@/components/animation/Reveal"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  projectCategories,
  projects,
} from "@/data/projects"

const filterOptions = ["All", ...projectCategories] as const

type ProjectFilter = (typeof filterOptions)[number]

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
          forecasting product work, and smart-contract architecture.
        </p>
      </Reveal>

      <Reveal className="mt-8 flex flex-col gap-4 border-y border-border/80 py-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
        <Tabs
          value={activeFilter}
          onValueChange={(value) => setActiveFilter(value as ProjectFilter)}
        >
          <TabsList className="h-auto max-w-full flex-wrap justify-start">
            {filterOptions.map((option) => (
              <TabsTrigger key={option} value={option} className="h-8 px-3">
                {option}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <Badge variant="secondary" className="w-fit">
          {filteredProjects.length} of {projects.length} shown
        </Badge>
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
