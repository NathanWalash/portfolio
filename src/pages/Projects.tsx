import { ArrowRight } from "lucide-react"
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
import { projects } from "@/data/projects"

export function Projects() {
  return (
    <main className="mx-auto min-h-[calc(100svh-4rem)] w-full max-w-6xl px-6 py-16 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-muted-foreground">Projects</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">
          Selected builds and case studies.
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A focused gallery for featured projects, smaller experiments, UI builds,
          and tools.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.slug} className="rounded-lg">
            <ProjectVisual project={project} className="border-b border-border" />
            <CardHeader>
              <Badge variant="outline" className="w-fit">
                {project.category}
              </Badge>
              <CardTitle aria-level={2} role="heading">
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
              <Button asChild variant="outline">
                <Link to={`/projects/${project.slug}`}>
                  Details
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
