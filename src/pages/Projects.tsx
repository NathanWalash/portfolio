import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
        <Card className="rounded-lg">
          <CardHeader>
            <Badge variant="outline" className="w-fit">
              Frontend
            </Badge>
            <CardTitle aria-level={2} role="heading">
              Portfolio Website
            </CardTitle>
            <CardDescription>
              React, TypeScript, Tailwind CSS, shadcn/ui, and Motion.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <Link to="/projects/portfolio-website">
                Details
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
