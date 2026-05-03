import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Mail,
  Route,
  Sparkles,
} from "lucide-react"
import { motion } from "motion/react"
import { Link, Route as RouterRoute, Routes, useParams } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const stack = [
  "Vite",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Motion",
]

function App() {
  return (
    <Routes>
      <RouterRoute path="/" element={<Home />} />
      <RouterRoute path="/about" element={<PlaceholderPage title="About" />} />
      <RouterRoute path="/projects" element={<PlaceholderPage title="Projects" />} />
      <RouterRoute path="/projects/:slug" element={<ProjectDetailPlaceholder />} />
      <RouterRoute path="*" element={<PlaceholderPage title="Page not found" />} />
    </Routes>
  )
}

function Home() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <section className="mx-auto flex min-h-svh w-full max-w-5xl flex-col justify-center px-6 py-16 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
            Version 1 foundation
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-normal text-foreground sm:text-6xl">
            Developer portfolio
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            A custom React portfolio foundation for project case studies, a human
            about page, and clean contact paths.
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
    </main>
  )
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="grid min-h-svh place-items-center bg-background px-6 text-foreground">
      <Card className="w-full max-w-xl rounded-lg">
        <CardHeader>
          <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-border">
            <Route className="size-5" aria-hidden="true" />
          </div>
          <CardTitle aria-level={1} role="heading">
            {title}
          </CardTitle>
          <CardDescription>
            This route is wired for the next implementation milestone.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="outline">
            <Link to="/">
              <ArrowLeft aria-hidden="true" />
              Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}

function ProjectDetailPlaceholder() {
  const { slug } = useParams()

  return <PlaceholderPage title={`Project: ${slug ?? "detail"}`} />
}

export default App
