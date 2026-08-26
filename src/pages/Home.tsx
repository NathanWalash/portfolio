import {
  ArrowRight,
  BrainCircuit,
  Braces,
  Code2,
  ExternalLink,
  GitBranch,
  Mail,
  MapPin,
  Server,
  Sparkles,
} from "lucide-react"
import { motion } from "motion/react"
import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type PointerEvent,
} from "react"
import { Link, useLocation } from "react-router-dom"

import { Reveal } from "@/components/animation/Reveal"
import {
  liftHover,
  staggerContainer,
  staggerItem,
} from "@/components/animation/motionPresets"
import { TiltCard } from "@/components/animation/TiltCard"
import { TypewriterText } from "@/components/animation/TypewriterText"
import { InteractiveHeroBackground } from "@/components/home/InteractiveHeroBackground"
import { ProfileSystemPanel } from "@/components/home/ProfileSystemPanel"
import { Badge } from "@/components/ui/badge"
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
import { useDeferredMount } from "@/hooks/useDeferredMount"
import { useInitialReveal } from "@/hooks/useInitialReveal"
import { cn } from "@/lib/utils"

const featuredProjects = getFeaturedProjects()

const skillVisuals = {
  Programming: {
    Icon: Braces,
    detail: "Languages for app logic, data work, systems, and contracts.",
  },
  "Web & Backend": {
    Icon: Server,
    detail: "Frontend flows, backend APIs, and production-style services.",
  },
  "Data & ML": {
    Icon: BrainCircuit,
    detail: "Forecasting, analysis, vector search, and data-heavy tools.",
  },
  "Workflow & Tools": {
    Icon: GitBranch,
    detail: "Delivery habits around Git, CI, deployment, and local tooling.",
  },
}

type PointerPosition = {
  clientX: number
  clientY: number
}

function resetHeroBackground(element: HTMLElement | null) {
  element?.style.setProperty("--hero-x", "58%")
  element?.style.setProperty("--hero-y", "38%")
  element?.style.setProperty("--hero-far-x", "0px")
  element?.style.setProperty("--hero-far-y", "0px")
  element?.style.setProperty("--hero-mid-x", "0px")
  element?.style.setProperty("--hero-mid-y", "0px")
  element?.style.setProperty("--hero-near-x", "0px")
  element?.style.setProperty("--hero-near-y", "0px")
}

function applyHeroPointer(element: HTMLElement | null, pointer: PointerPosition) {
  if (!element) {
    return
  }

  const rect = element.getBoundingClientRect()
  const isInside =
    pointer.clientX >= rect.left &&
    pointer.clientX <= rect.right &&
    pointer.clientY >= rect.top &&
    pointer.clientY <= rect.bottom

  if (!isInside) {
    resetHeroBackground(element)
    return
  }

  const x = pointer.clientX - rect.left
  const y = pointer.clientY - rect.top
  const xRatio = x / rect.width - 0.5
  const yRatio = y / rect.height - 0.5

  element.style.setProperty("--hero-x", `${Math.round((x / rect.width) * 100)}%`)
  element.style.setProperty("--hero-y", `${Math.round((y / rect.height) * 100)}%`)
  element.style.setProperty("--hero-far-x", `${xRatio * -10}px`)
  element.style.setProperty("--hero-far-y", `${yRatio * -10}px`)
  element.style.setProperty("--hero-mid-x", `${xRatio * -24}px`)
  element.style.setProperty("--hero-mid-y", `${yRatio * -24}px`)
  element.style.setProperty("--hero-near-x", `${xRatio * -44}px`)
  element.style.setProperty("--hero-near-y", `${yRatio * -44}px`)
}

export function Home() {
  const initialRevealReady = useInitialReveal()
  const { hash } = useLocation()
  // #contact sits below the deferred sections, so deferring them while the
  // browser is scrolling to an anchor moves the target out from under it.
  const showDeferredSections = useDeferredMount(initialRevealReady, {
    immediate: Boolean(hash),
  })
  const heroRef = useRef<HTMLElement>(null)
  const lastPointerRef = useRef<PointerPosition | null>(null)
  const heroFrameRef = useRef<number | null>(null)
  const heroStyle = {
    "--hero-x": "58%",
    "--hero-y": "38%",
    "--hero-far-x": "0px",
    "--hero-far-y": "0px",
    "--hero-mid-x": "0px",
    "--hero-mid-y": "0px",
    "--hero-near-x": "0px",
    "--hero-near-y": "0px",
  } as CSSProperties

  const scheduleHeroBackgroundUpdate = useCallback(() => {
    if (!initialRevealReady) {
      return
    }

    if (heroFrameRef.current !== null) {
      return
    }

    heroFrameRef.current = window.requestAnimationFrame(() => {
      heroFrameRef.current = null
      const pointer = lastPointerRef.current

      if (!pointer) {
        resetHeroBackground(heroRef.current)
        return
      }

      applyHeroPointer(heroRef.current, pointer)
    })
  }, [initialRevealReady])

  useEffect(() => {
    if (!initialRevealReady) {
      return
    }

    function handleScroll() {
      scheduleHeroBackgroundUpdate()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)

      if (heroFrameRef.current !== null) {
        window.cancelAnimationFrame(heroFrameRef.current)
      }
    }
  }, [initialRevealReady, scheduleHeroBackgroundUpdate])

  function handleHeroPointerMove(event: PointerEvent<HTMLElement>) {
    if (!initialRevealReady) {
      return
    }

    lastPointerRef.current = {
      clientX: event.clientX,
      clientY: event.clientY,
    }
    scheduleHeroBackgroundUpdate()
  }

  function handleHeroPointerLeave() {
    if (!initialRevealReady) {
      return
    }

    lastPointerRef.current = null
    scheduleHeroBackgroundUpdate()
  }

  function handleHeroPointerEnd(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "mouse") {
      return
    }

    if (!initialRevealReady) {
      return
    }

    lastPointerRef.current = null
    scheduleHeroBackgroundUpdate()
  }

  return (
    <main>
      <section
        ref={heroRef}
        style={heroStyle}
        onPointerMove={handleHeroPointerMove}
        onPointerDown={handleHeroPointerMove}
        onPointerLeave={handleHeroPointerLeave}
        onPointerUp={handleHeroPointerEnd}
        onPointerCancel={handleHeroPointerEnd}
        onWheel={() => {
          scheduleHeroBackgroundUpdate()
        }}
        className="relative isolate overflow-hidden"
      >
        <InteractiveHeroBackground />
        <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center gap-8 px-4 py-10 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1fr)_23rem]">
          <motion.div
            initial="hidden"
            animate={initialRevealReady ? "show" : "hidden"}
            variants={staggerContainer}
            className="max-w-3xl rounded-lg border border-border bg-background/88 p-5 shadow-xl shadow-foreground/5 backdrop-blur-md will-change-[transform,opacity] sm:p-7"
          >
            <motion.div
              variants={staggerItem}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-3 py-1 text-sm text-muted-foreground shadow-sm backdrop-blur"
            >
              <Sparkles className="size-4 text-primary" aria-hidden="true" />
              {profile.title}
            </motion.div>

            <motion.h1
              variants={staggerItem}
            className="text-balance text-4xl font-semibold tracking-normal text-foreground sm:text-6xl"
          >
              <TypewriterText
                text={profile.name}
                delay={0.12}
                play={initialRevealReady}
              />
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
            animate={
              initialRevealReady
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.96, y: 14 }
            }
            transition={{ duration: 0.42, ease: "easeOut", delay: 0.14 }}
            whileHover={liftHover}
            className="mx-auto w-full max-w-sm rounded-lg border border-border bg-card/90 p-4 shadow-lg shadow-foreground/5 backdrop-blur will-change-[transform,opacity] lg:mx-0"
          >
            <ProfileSystemPanel />

            <div className="mt-5">
              <h2 className="text-xl font-semibold tracking-normal">
                {profile.name}
              </h2>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4" aria-hidden="true" />
                {profile.location}
              </div>
            </div>

            <div className="mt-5 grid gap-2">
              <SocialButton icon="mail" social={profile.socials.email} />
              <SocialButton icon="code" social={profile.socials.github} />
              <SocialButton icon="external" social={profile.socials.linkedin} />
            </div>
          </motion.aside>
        </div>
      </section>

      {showDeferredSections ? <DeferredHomeSections /> : null}

      <section
        id="contact"
        className="border-t border-border/80 bg-muted/30 px-4 py-12 sm:px-8 sm:py-16"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <Reveal>
            <p className="text-sm font-medium text-muted-foreground">Contact</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-normal sm:text-3xl">
              Open to software engineering and full-stack opportunities.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              {profile.contactNote}
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

function DeferredHomeSections() {
  return (
    <>
      <section className="border-t border-border/80 px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">Stack</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal sm:text-3xl">
              Tools I use to move from idea to working software.
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {skills.map((group, index) => (
              <motion.div
                key={group.category}
                variants={staggerItem}
              >
                <SkillClusterCard group={group} index={index} />
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
                Project Highlights
              </p>
              <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-normal sm:text-3xl">
                A quick route into the work behind the portfolio.
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
            className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.slug}
                variants={staggerItem}
                className="min-w-[17rem] snap-start sm:min-w-[21rem] lg:min-w-[23rem]"
              >
                <CompactProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

function CompactProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard reveal={false}>
      <Card className="group relative isolate h-full overflow-hidden rounded-lg transition-shadow duration-200 hover:shadow-xl hover:shadow-[oklch(0.62_0.2_305_/_0.12)]">
        <div className="absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(circle,oklch(0.62_0.2_305_/_0.15)_1px,transparent_1.8px)] [background-size:18px_18px]" />
        <CardHeader>
          <div className="mb-1 overflow-hidden rounded-lg border border-border bg-background/80 p-3">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-[oklch(0.62_0.2_305)]" />
              <span className="size-2 rounded-full bg-muted-foreground/25" />
              <span className="size-2 rounded-full bg-muted-foreground/20" />
            </div>
            <div className="grid gap-2">
              {[0, 1, 2].map((item) => (
                <motion.span
                  key={item}
                  initial={{ scaleX: 0.55 }}
                  whileInView={{ scaleX: 1 }}
                  whileHover={{ scaleX: 1.04 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                    delay: item * 0.06,
                  }}
                  style={{ transformOrigin: "left" }}
                  className={cn(
                    "h-2 rounded-full bg-[oklch(0.62_0.2_305_/_0.32)]",
                    item === 0 ? "w-3/4" : item === 1 ? "w-1/2" : "w-5/6",
                  )}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{project.category}</Badge>
            <Badge variant="secondary">{project.stack[0]}</Badge>
          </div>
          <CardTitle aria-level={3} role="heading">
            {project.title}
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <Button asChild variant="outline" className="w-full">
            <Link to={`/projects/${project.slug}`}>
              View case study
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </TiltCard>
  )
}

function SkillClusterCard({
  group,
  index,
}: {
  group: (typeof skills)[number]
  index: number
}) {
  const visual =
    skillVisuals[group.category as keyof typeof skillVisuals] ?? skillVisuals.Programming
  const Icon = visual.Icon

  return (
    <TiltCard reveal={false}>
      <Card className="group relative isolate h-full overflow-hidden rounded-lg transition-shadow duration-200 hover:shadow-xl hover:shadow-[oklch(0.62_0.2_305_/_0.1)]">
        <div className="absolute inset-0 -z-10 opacity-45 [background-image:radial-gradient(circle,oklch(0.62_0.2_305_/_0.18)_1px,transparent_1.9px)] [background-size:20px_20px]" />
        <div className="absolute inset-x-4 top-0 h-px origin-left scale-x-0 bg-[oklch(0.62_0.2_305)] transition-transform duration-300 group-hover:scale-x-100" />
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div className="grid size-10 place-items-center rounded-lg border border-[oklch(0.62_0.2_305_/_0.22)] bg-[oklch(0.62_0.2_305_/_0.08)] text-foreground">
              <Icon className="size-4" aria-hidden="true" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              0{index + 1}
            </span>
          </div>
          <CardTitle aria-level={3} role="heading">
            {group.category}
          </CardTitle>
          <CardDescription>{visual.detail}</CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-wrap gap-2"
          >
            {group.items.map((item) => (
              <motion.div
                key={item}
                variants={staggerItem}
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ duration: 0.18 }}
              >
                <Badge variant="secondary">{item}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </TiltCard>
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
