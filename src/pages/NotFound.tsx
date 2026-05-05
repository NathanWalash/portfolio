import { ArrowLeft, FolderGit2, Home, Mail, SearchX } from "lucide-react"
import { Link } from "react-router-dom"

import { Reveal } from "@/components/animation/Reveal"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { profile } from "@/data/profile"

export function NotFound() {
  return (
    <main className="relative isolate grid min-h-[calc(100svh-4rem)] place-items-center overflow-hidden px-4 py-12 sm:px-8 sm:py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(circle,oklch(0.62_0.2_305_/_0.18)_1px,transparent_1.9px)] [background-size:22px_22px]"
      />
      <Reveal className="w-full max-w-xl">
        <Card className="rounded-lg bg-background/90 shadow-xl shadow-foreground/5 backdrop-blur">
          <CardHeader className="text-center">
            <div className="mx-auto grid size-12 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground">
              <SearchX className="size-5" aria-hidden="true" />
            </div>
            <CardDescription>404</CardDescription>
            <CardTitle
              aria-level={1}
              role="heading"
              className="text-3xl tracking-normal sm:text-4xl"
            >
              Page not found.
            </CardTitle>
            <CardDescription className="mx-auto max-w-md leading-6">
              This route does not exist, but the portfolio, projects, and
              contact links are still available.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 min-[480px]:grid-cols-3">
            <Button asChild className="w-full">
              <Link to="/">
                <Home aria-hidden="true" />
                Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/projects">
                <FolderGit2 aria-hidden="true" />
                Projects
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <a href={profile.socials.email.href}>
                <Mail aria-hidden="true" />
                Email
              </a>
            </Button>
          </CardContent>
        </Card>

        <Button
          asChild
          className="mx-auto mt-6 flex w-full min-[420px]:w-fit"
          variant="ghost"
        >
          <Link to="/">
            <ArrowLeft aria-hidden="true" />
            Back to the start
          </Link>
        </Button>
      </Reveal>
    </main>
  )
}
