import {
  ArrowRight,
  BriefcaseBusiness,
  Database,
  GraduationCap,
  Mail,
  Network,
  Sparkles,
  Trophy,
} from "lucide-react"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

import { Reveal } from "@/components/animation/Reveal"
import { staggerContainer, staggerItem } from "@/components/animation/motionPresets"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"

const snapshotItems = [
  { label: "Current", value: "Final-year CS with AI" },
  { label: "Based", value: "United Kingdom" },
  { label: "Focus", value: "Full-stack software" },
]

const timeline = [
  {
    date: "2026",
    title: "Final-year machine learning project",
    meta: "University of Leeds",
    description:
      "Developing a physics-aware machine learning framework for modelling drug diffusion through human skin, combining a PDE solver with black-box and constrained neural networks.",
    Icon: Sparkles,
    accent: "bg-fuchsia-500",
    softAccent: "bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300",
    side: "left",
  },
  {
    date: "2026",
    title: "Leeds Hackathon winner",
    meta: "PredictPal forecasting platform",
    description:
      "Built a time-series forecasting product with a guided upload, modelling, visual review, and story-style interpretation flow for communicating decisions.",
    Icon: Trophy,
    accent: "bg-amber-500",
    softAccent: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
    side: "right",
  },
  {
    date: "Summer 2025",
    title: "Junior Software Developer",
    meta: "Rebuilding Society",
    description:
      "Selected after a hackathon win to help turn the prototype into production-facing software, working across React, Node.js, Solidity, Hardhat, Laravel, MariaDB, architecture, deployment, and UX iteration.",
    Icon: BriefcaseBusiness,
    accent: "bg-emerald-500",
    softAccent: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    side: "left",
  },
  {
    date: "2025",
    title: "Leeds Hackathon winner",
    meta: "DAO marketplace prototype",
    description:
      "Created a blockchain-based DAO marketplace prototype with smart contracts, later evolving the idea into a more modular DAO factory architecture.",
    Icon: Network,
    accent: "bg-violet-500",
    softAccent: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
    side: "right",
  },
  {
    date: "Summer 2024",
    title: "Sports sponsorship metadata researcher",
    meta: "Ampere Analysis",
    description:
      "Researched, queried, and validated sports sponsorship datasets for market intelligence and client-facing analysis, using SQL and structured data workflows.",
    Icon: Database,
    accent: "bg-sky-500",
    softAccent: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
    side: "left",
  },
  {
    date: "2023 - 2026",
    title: "Computer Science with Artificial Intelligence",
    meta: "University of Leeds",
    description:
      "Studying software engineering, algorithms and data structures, AI and machine learning, databases, operating systems, networks, secure computing, robotics, and graphics.",
    Icon: GraduationCap,
    accent: "bg-cyan-500",
    softAccent: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
    side: "right",
  },
  {
    date: "Oct 2022 - Apr 2023",
    title: "Games metadata researcher",
    meta: "Ampere Analysis",
    description:
      "Researched and maintained video game metadata for strategic analytics and industry reporting, while building Python automation tools for collection, cleansing, and validation workflows before starting university.",
    Icon: Database,
    accent: "bg-rose-500",
    softAccent: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
    side: "left",
  },
] as const

export function About() {
  return (
    <main className="min-h-[calc(100svh-4rem)]">
      <section className="px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start">
          <Reveal>
            <p className="text-sm font-medium text-muted-foreground">About</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-normal sm:text-5xl">
              A full-stack developer building practical software across web,
              AI, data, and smart contracts.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
              I am a final-year Computer Science with Artificial Intelligence
              student at the University of Leeds. I like projects where the
              interesting part is making the whole system work: product flow,
              backend logic, data, model behaviour, deployment, and the small
              details users actually notice.
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
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
                <a href={profile.socials.email.href}>
                  <Mail aria-hidden="true" />
                  {profile.socials.email.label}
                </a>
              </Button>
            </div>
          </Reveal>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: "easeOut", delay: 0.08 }}
            aria-label="Profile snapshot"
          >
            <Card className="rounded-lg">
              <CardContent className="pt-0">
                <div className="overflow-hidden rounded-lg border border-border bg-muted/50">
                  <img
                    src={profile.profileImage.src}
                    alt={profile.profileImage.alt}
                    className="aspect-square size-full object-cover object-center"
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-semibold tracking-normal">
                    {profile.name}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {profile.summary}
                  </p>
                </div>
                <div className="mt-4 grid gap-2">
                  {snapshotItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-3 rounded-lg border border-border bg-muted/40 px-3 py-2"
                    >
                      <span className="text-xs text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="text-right text-xs font-medium">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.aside>
        </div>
      </section>

      <section className="border-t border-border/80 px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">
              Timeline
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal sm:text-3xl">
              The path behind the projects.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              A mix of university work, production-facing development,
              hackathon builds, and data research has shaped how I approach
              software.
            </p>
          </Reveal>

          <div className="relative mt-10 sm:mt-12">
            <motion.div
              aria-hidden="true"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-4 top-0 w-px origin-top bg-gradient-to-b from-fuchsia-500 via-sky-500 to-rose-500 md:left-1/2"
            />

            <motion.ol
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-5"
            >
              {timeline.map((item) => (
                <TimelineItem key={`${item.date}-${item.title}`} item={item} />
              ))}
            </motion.ol>
          </div>
        </div>
      </section>

      <section className="border-t border-border/80 bg-muted/30 px-4 py-12 sm:px-8 sm:py-16">
        <Reveal className="mx-auto flex w-full max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Contact</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal sm:text-3xl">
              Want to talk about a role or project?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              {profile.contactNote}
            </p>
          </div>
          <div className="flex flex-col gap-3 min-[420px]:flex-row sm:shrink-0">
            <Button asChild className="w-full min-[420px]:w-auto">
              <a href={profile.socials.email.href}>
                <Mail aria-hidden="true" />
                Email
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full min-[420px]:w-auto">
              <a
                href={profile.socials.linkedin.href}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>
      </section>
    </main>
  )
}

function TimelineItem({ item }: { item: (typeof timeline)[number] }) {
  const Icon = item.Icon
  const isLeft = item.side === "left"

  return (
    <motion.li
      variants={staggerItem}
      className="relative list-none md:grid md:grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)] md:gap-5"
    >
      <div
        className={cn(
          "ml-12 md:ml-0",
          isLeft ? "md:col-start-1" : "md:col-start-3",
        )}
      >
        <Card className="rounded-lg transition-shadow duration-200 hover:shadow-lg hover:shadow-foreground/5">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className={item.softAccent} variant="secondary">
                {item.date}
              </Badge>
              <CardDescription>{item.meta}</CardDescription>
            </div>
            <CardTitle aria-level={3} role="heading">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            {item.description}
          </CardContent>
        </Card>
      </div>

      <motion.div
        initial={{ scale: 0.82 }}
        whileInView={{ scale: [0.82, 1.08, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.48, ease: "easeOut" }}
        className="absolute left-0 top-4 z-10 grid size-8 place-items-center rounded-lg border border-border bg-background shadow-sm md:static md:col-start-2 md:row-start-1 md:mt-4 md:size-10"
      >
        <span
          className={cn(
            "absolute inset-1 rounded-md opacity-15 blur-sm",
            item.accent,
          )}
        />
        <Icon className="relative size-4 text-foreground" aria-hidden="true" />
      </motion.div>
    </motion.li>
  )
}
