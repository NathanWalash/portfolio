import { ArrowLeft } from "lucide-react"
import { Link, useParams } from "react-router-dom"

import { Button } from "@/components/ui/button"

export function ProjectDetail() {
  const { slug } = useParams()

  return (
    <main className="mx-auto min-h-[calc(100svh-4rem)] w-full max-w-6xl px-6 py-16 sm:px-8">
      <Button asChild variant="outline">
        <Link to="/projects">
          <ArrowLeft aria-hidden="true" />
          Projects
        </Link>
      </Button>

      <div className="mt-10 max-w-3xl">
        <p className="text-sm font-medium text-muted-foreground">Case study</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">
          Project: {slug ?? "detail"}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A focused case study covering intent, implementation, tradeoffs, and
          improvements.
        </p>
      </div>
    </main>
  )
}
