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

import {
  Reveal,
} from "@/components/animation/Reveal"
import {
  liftHover,
  staggerContainer,
  staggerItem,
} from "@/components/animation/motionPresets"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getFeaturedProjects } from "@/data/projects"
import { profile, type SocialLink } from "@/data/profile"
import { skills } from "@/data/skills"
import { cn } from "@/lib/utils"

const featuredProjects = getFeaturedProjects()

export function Home() {
  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center gap-8 px-4 py-10 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.div
            variants={staggerItem}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground shadow-sm"
          >
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
            {profile.title}
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-balance text-4xl font-semibold tracking-normal text-foreground sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap"
          >
            <Button asChild size="lg" className="w-full min-[420px]:w-auto">
              <Link to="/projects">
                View projects
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full min-[420px]:w-auto"
            >
              <a
                href={profile.socials.github.href}
                target="_blank"
                rel="noreferrer"
              >
                <Code2 aria-hidden="true" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="w-full min-[420px]:w-auto"
            >
              <a href="#contact">
                <Mail aria-hidden="true" />
                Contact
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.aside
          aria-label="Profile snapshot"
          initial={{ opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.42, ease: "easeOut", delay: 0.14 }}
          whileHover={liftHover}
          className="mx-auto w-full max-w-sm rounded-lg border border-border bg-card p-4 shadow-lg shadow-foreground/5 lg:mx-0"
        >
          <div className="grid aspect-[4/3] place-items-center overflow-hidden rounded-lg border border-border bg-muted/50 sm:aspect-square">
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

          <div className="mt-5 grid grid-cols-2 gap-2">
            {["React", "APIs", "CI", "Vercel"].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-border bg-muted/40 px-3 py-2 text-center text-xs font-medium text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-5 grid gap-2">
            <SocialButton icon="code" social={profile.socials.github} />
            <SocialButton icon="external" social={profile.socials.linkedin} />
            <SocialButton icon="mail" social={profile.socials.email} />
          </div>
        </motion.aside>
      </section>

      <section className="border-t border-border/80 px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">Skills</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal sm:text-3xl">
              Tools and technologies I am building with.
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {skills.map((group) => (
              <motion.div
                key={group.category}
                variants={staggerItem}
                whileHover={liftHover}
              >
                <Card className="h-full rounded-lg transition-shadow duration-200 hover:shadow-lg hover:shadow-foreground/5">
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border/80 px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Featured Projects
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-normal sm:text-3xl">
                Work that shows the direction of the portfolio.
              </h2>
            </div>
            <Button asChild variant="outline" className="w-full min-[420px]:w-auto">
              <Link to="/projects">
                View all
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid gap-4 lg:grid-cols-2"
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.slug} variants={staggerItem}>
                <ProjectCard project={project} headingLevel={3} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-border/80 bg-muted/30 px-4 py-12 sm:px-8 sm:py-16"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <Reveal>
            <p className="text-sm font-medium text-muted-foreground">Contact</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-normal sm:text-3xl">
              Open to building thoughtful web projects.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Find me on GitHub and use this section as the main place for
              professional contact links.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
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
          </Reveal>
        </div>
      </section>
    </main>
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
