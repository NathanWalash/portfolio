import { ArrowLeft, CheckCircle2, Code2, ExternalLink } from "lucide-react"
import { motion } from "motion/react"
import { Link, useParams } from "react-router-dom"

import { Reveal } from "@/components/animation/Reveal"
import {
  liftHover,
  staggerContainer,
  staggerItem,
} from "@/components/animation/motionPresets"
import { ProjectVisual } from "@/components/projects/ProjectVisual"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getProjectBySlug } from "@/data/projects"
import { NotFound } from "@/pages/NotFound"

export function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <NotFound />
  }

  const sections = [
    { title: "Overview", items: [project.overview] },
    { title: "Problem", items: [project.problem] },
    { title: "Solution", items: [project.solution] },
    { title: "Features", items: project.features },
    { title: "Challenges", items: project.challenges },
    { title: "What I learned", items: project.learned },
    { title: "Future improvements", items: project.futureImprovements },
  ]

  return (
    <main className="mx-auto min-h-[calc(100svh-4rem)] w-full max-w-6xl px-4 py-12 sm:px-8 sm:py-16">
      <Button asChild variant="outline">
        <Link to="/projects">
          <ArrowLeft aria-hidden="true" />
          Projects
        </Link>
      </Button>

      <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-10">
        <Reveal>
          <p className="text-sm font-medium text-muted-foreground">
            {project.category} case study
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
            {project.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            {project.live ? (
              <Button asChild className="w-full min-[420px]:w-auto">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live demo
                  <ExternalLink aria-hidden="true" />
                </a>
              </Button>
            ) : null}
            {project.github ? (
              <Button asChild variant="outline" className="w-full min-[420px]:w-auto">
                <a href={project.github} target="_blank" rel="noreferrer">
                  Source
                  <Code2 aria-hidden="true" />
                </a>
              </Button>
            ) : null}
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: "easeOut", delay: 0.08 }}
          whileHover={liftHover}
        >
          <Card className="relative isolate overflow-hidden rounded-lg transition-shadow duration-200 hover:shadow-lg hover:shadow-[oklch(0.62_0.2_305_/_0.1)]">
            <div className="absolute inset-0 -z-10 opacity-45 [background-image:radial-gradient(circle,oklch(0.62_0.2_305_/_0.16)_1px,transparent_1.9px)] [background-size:20px_20px]" />
            <CardHeader>
              <Badge variant="outline" className="w-fit">
                {project.category}
              </Badge>
              <CardTitle aria-level={2} role="heading">
                At a glance
              </CardTitle>
              <CardDescription>
                Key project metadata and technology choices.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Reveal className="mt-12">
        <ProjectVisual project={project} className="rounded-lg border border-border" />
      </Reveal>

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mt-10 space-y-4 border-l border-[oklch(0.62_0.2_305_/_0.22)] pl-5 sm:mt-12 sm:pl-7"
      >
        {sections.map((section, index) => (
          <motion.li
            key={section.title}
            variants={staggerItem}
            whileHover={liftHover}
            className="relative list-none"
          >
            <span className="absolute -left-[2.08rem] top-5 grid size-8 place-items-center rounded-lg border border-[oklch(0.62_0.2_305_/_0.24)] bg-background text-xs font-medium text-muted-foreground shadow-sm sm:-left-[2.58rem]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <InfoCard title={section.title} items={section.items} index={index} />
          </motion.li>
        ))}
      </motion.ol>
    </main>
  )
}

function InfoCard({
  title,
  items,
  index,
}: {
  title: string
  items: string[]
  index: number
}) {
  return (
    <Card className="h-full rounded-lg transition-shadow duration-200 hover:shadow-lg hover:shadow-[oklch(0.62_0.2_305_/_0.1)]">
      <CardHeader className="sm:flex sm:flex-row sm:items-start sm:justify-between">
        <div>
          <CardTitle aria-level={2} role="heading">
            {title}
          </CardTitle>
        </div>
        <Badge variant="secondary" className="w-fit">
          Step {index + 1}
        </Badge>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <CheckCircle2
                className="mt-0.5 size-4 shrink-0 text-foreground/60"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
