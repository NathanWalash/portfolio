import {
  ArrowRight,
  Code2,
  ExternalLink,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { ProjectVisual } from "@/components/projects/ProjectVisual"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getFeaturedProjects, type Project } from "@/data/projects"
import { profile, type SocialLink } from "@/data/profile"
import { skills } from "@/data/skills"
import { cn } from "@/lib/utils"

const featuredProjects = getFeaturedProjects()

export function Home() {
  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
            {profile.title}
          </div>

          <h1 className="text-balance text-5xl font-semibold tracking-normal text-foreground sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/projects">
                View projects
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href={profile.socials.github.href}
                target="_blank"
                rel="noreferrer"
              >
                <Code2 aria-hidden="true" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#contact">
                <Mail aria-hidden="true" />
                Contact
              </a>
            </Button>
          </div>
        </motion.div>

        <aside
          aria-label="Profile snapshot"
          className="rounded-lg border border-border bg-card p-4"
        >
          <div className="grid aspect-square place-items-center overflow-hidden rounded-lg border border-border bg-muted/50">
            {profile.profileImage.src ? (
              <img
                src={profile.profileImage.src}
                alt={profile.profileImage.alt}
                className="size-full object-cover"
              />
            ) : (
              <div className="grid size-24 place-items-center rounded-lg border border-border bg-background text-3xl font-semibold">
                {profile.initials}
              </div>
            )}
          </div>

          <div className="mt-5">
            <h2 className="text-xl font-semibold tracking-normal">{profile.name}</h2>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </div>
          </div>

          <div className="mt-5 grid gap-2">
            <SocialButton icon="code" social={profile.socials.github} />
            <SocialButton icon="external" social={profile.socials.linkedin} />
            <SocialButton icon="mail" social={profile.socials.email} />
          </div>
        </aside>
      </section>

      <section className="border-t border-border/80 px-6 py-16 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">Skills</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal">
              Tools and technologies I am building with.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {skills.map((group) => (
              <Card key={group.category} className="rounded-lg">
                <CardHeader>
                  <CardTitle aria-level={3} role="heading">
                    {group.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/80 px-6 py-16 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Featured Projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal">
                Work that shows the direction of the portfolio.
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/projects">
                View all
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-border/80 bg-muted/30 px-6 py-16 sm:px-8"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Contact</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-normal">
              Open to building thoughtful web projects.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Find me on GitHub and use this section as the main place for
              professional contact links.
            </p>
          </div>

          <Card className="rounded-lg">
            <CardHeader>
              <CardTitle aria-level={3} role="heading">
                Contact Nathan
              </CardTitle>
              <CardDescription>Best places to find me online.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <SocialButton icon="mail" social={profile.socials.email} />
              <SocialButton icon="code" social={profile.socials.github} />
              <SocialButton icon="external" social={profile.socials.linkedin} />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="rounded-lg">
      <ProjectVisual project={project} className="border-b border-border" />
      <CardHeader>
        <Badge variant="outline" className="w-fit">
          {project.category}
        </Badge>
        <CardTitle aria-level={3} role="heading">
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
  )
}

function SocialButton({
  icon,
  social,
}: {
  icon: "code" | "external" | "mail"
  social: SocialLink
}) {
  const Icon = icon === "code" ? Code2 : icon === "mail" ? Mail : ExternalLink
  const content = (
    <>
      <Icon aria-hidden="true" />
      {social.label}
    </>
  )

  const className = cn(
    "inline-flex h-9 items-center gap-2 rounded-lg border border-border px-3 text-sm font-medium transition-colors focus-visible:ring-3 focus-visible:ring-ring/50",
    social.href
      ? "hover:bg-muted hover:text-foreground"
      : "cursor-default text-muted-foreground",
  )

  if (!social.href) {
    return (
      <span aria-disabled="true" className={className}>
        {content}
      </span>
    )
  }

  return (
    <a
      href={social.href}
      target={social.external ? "_blank" : undefined}
      rel={social.external ? "noreferrer" : undefined}
      className={className}
    >
      {content}
    </a>
  )
}
