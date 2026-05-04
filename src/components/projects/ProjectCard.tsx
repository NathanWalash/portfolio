import { ArrowRight, Code2, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

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
import { type Project } from "@/data/projects"

export function ProjectCard({
  project,
  headingLevel = 2,
}: {
  project: Project
  headingLevel?: 2 | 3
}) {
  return (
    <Card className="rounded-lg">
      <ProjectVisual project={project} className="border-b border-border" />
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{project.category}</Badge>
          {project.featured ? <Badge variant="secondary">Featured</Badge> : null}
        </div>
        <CardTitle aria-level={headingLevel} role="heading">
          {project.title}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>

        <div className="grid gap-2 min-[420px]:flex min-[420px]:flex-wrap">
          <Button asChild variant="outline" className="w-full min-[420px]:w-auto">
            <Link to={`/projects/${project.slug}`}>
              Details
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>

          {project.live ? (
            <Button asChild variant="ghost" className="w-full min-[420px]:w-auto">
              <a href={project.live} target="_blank" rel="noreferrer">
                Live
                <ExternalLink aria-hidden="true" />
              </a>
            </Button>
          ) : null}

          {project.github ? (
            <Button asChild variant="ghost" className="w-full min-[420px]:w-auto">
              <a href={project.github} target="_blank" rel="noreferrer">
                Source
                <Code2 aria-hidden="true" />
              </a>
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
