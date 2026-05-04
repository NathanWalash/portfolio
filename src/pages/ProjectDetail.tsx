import { ArrowLeft, Code2, ExternalLink } from "lucide-react"
import { motion } from "motion/react"
import { Link, useParams } from "react-router-dom"

import {
  Reveal,
} from "@/components/animation/Reveal"
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
          <Card className="rounded-lg transition-shadow duration-200 hover:shadow-lg hover:shadow-foreground/5">
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

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {sections.map((section) => (
          <motion.div
            key={section.title}
            variants={staggerItem}
            whileHover={liftHover}
          >
            <InfoCard title={section.title} items={section.items} />
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="h-full rounded-lg transition-shadow duration-200 hover:shadow-lg hover:shadow-foreground/5">
      <CardHeader>
        <CardTitle aria-level={2} role="heading">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
