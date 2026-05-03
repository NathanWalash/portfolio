import { ArrowLeft, ExternalLink } from "lucide-react"
import { Link, useParams } from "react-router-dom"

import { ProjectVisual } from "@/components/projects/ProjectVisual"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { getProjectBySlug } from "@/data/projects"
import { NotFound } from "@/pages/NotFound"

export function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <NotFound />
  }

  return (
    <main className="mx-auto min-h-[calc(100svh-4rem)] w-full max-w-6xl px-6 py-16 sm:px-8">
      <Button asChild variant="outline">
        <Link to="/projects">
          <ArrowLeft aria-hidden="true" />
          Projects
        </Link>
      </Button>

      <div className="mt-10 max-w-3xl">
        <p className="text-sm font-medium text-muted-foreground">
          {project.category} case study
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.live ? (
            <Button asChild>
              <a href={project.live} target="_blank" rel="noreferrer">
                Live demo
                <ExternalLink aria-hidden="true" />
              </a>
            </Button>
          ) : null}
          {project.github ? (
            <Button asChild variant="outline">
              <a href={project.github} target="_blank" rel="noreferrer">
                Source
                <ExternalLink aria-hidden="true" />
              </a>
            </Button>
          ) : null}
        </div>
      </div>

      <ProjectVisual
        project={project}
        className="mt-12 rounded-lg border border-border"
      />

      <div className="mt-10 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Badge key={item} variant="secondary">
            {item}
          </Badge>
        ))}
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        <InfoCard title="Overview" items={[project.overview]} />
        <InfoCard title="Problem" items={[project.problem]} />
        <InfoCard title="Solution" items={[project.solution]} />
        <InfoCard title="Features" items={project.features} />
        <InfoCard title="Challenges" items={project.challenges} />
        <InfoCard title="What I learned" items={project.learned} />
        <InfoCard title="Future improvements" items={project.futureImprovements} />
      </div>
    </main>
  )
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="rounded-lg">
      <CardHeader>
        <CardTitle aria-level={2} role="heading">
          {title}
        </CardTitle>
        <ul className="space-y-3 pt-3 text-sm leading-6 text-muted-foreground">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardHeader>
    </Card>
  )
}
