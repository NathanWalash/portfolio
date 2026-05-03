import { ArrowRight, Code2, Mail, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"

const stack = [
  "Vite",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Motion",
]

export function Home() {
  return (
    <main>
      <section className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
            React + TypeScript
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-normal text-foreground sm:text-6xl">
            Developer portfolio
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            Focused on clean interfaces, reusable components, and practical web
            projects that are easy to understand and maintain.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/projects">
                Projects
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Code2 aria-hidden="true" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="mailto:hello@example.com">
                <Mail aria-hidden="true" />
                Contact
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((item) => (
            <Card key={item} className="rounded-lg">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  {item}
                </Badge>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-border/80 bg-muted/30 px-6 py-16 sm:px-8"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Contact</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-normal">
              Open to building thoughtful web projects.
            </h2>
          </div>
          <Button asChild size="lg">
            <a href="mailto:hello@example.com">
              <Mail aria-hidden="true" />
              Email
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
