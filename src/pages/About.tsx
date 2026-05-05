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

const timeline = [
  {
    date: "2026",
    title: "Final-year machine learning project",
    meta: "University of Leeds",
    description:
      "Developing a physics-aware machine learning framework for modelling drug diffusion through human skin, combining a PDE solver with black-box and constrained neural networks.",
    Icon: Sparkles,
  },
  {
    date: "2026",
    title: "Leeds Hackathon winner",
    meta: "PredictPal forecasting platform",
    description:
      "Built a time-series forecasting product with a guided upload, modelling, visual review, and story-style interpretation flow for communicating decisions.",
    Icon: Trophy,
  },
  {
    date: "Summer 2025",
    title: "Junior Software Developer",
    meta: "Rebuilding Society",
    description:
      "Selected after a hackathon win to help turn the prototype into production-facing software, working across React, Node.js, Solidity, Hardhat, Laravel, MariaDB, architecture, deployment, and UX iteration.",
    Icon: BriefcaseBusiness,
  },
  {
    date: "2025",
    title: "Leeds Hackathon winner",
    meta: "DAO marketplace prototype",
    description:
      "Created a blockchain-based DAO marketplace prototype with smart contracts, later evolving the idea into a more modular DAO factory architecture.",
    Icon: Network,
  },
  {
    date: "Summer 2024",
    title: "Sports sponsorship metadata researcher",
    meta: "Ampere Analysis",
    description:
      "Researched, queried, and validated sports sponsorship datasets for market intelligence and client-facing analysis, using SQL and structured data workflows.",
    Icon: Database,
  },
  {
    date: "2023 - 2026",
    title: "Computer Science with Artificial Intelligence",
    meta: "University of Leeds",
    description:
      "Studying software engineering, algorithms and data structures, AI and machine learning, databases, operating systems, networks, secure computing, robotics, and graphics.",
    Icon: GraduationCap,
  },
  {
    date: "Oct 2022 - Apr 2023",
    title: "Games metadata researcher",
    meta: "Ampere Analysis",
    description:
      "Researched and maintained video game metadata for strategic analytics and industry reporting, while building Python automation tools for collection, cleansing, and validation workflows before starting university.",
    Icon: Database,
  },
] as const

export function About() {
  return (
    <main className="min-h-[calc(100svh-4rem)]">
      <section className="px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto w-full max-w-6xl">
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

          <div className="relative mt-10 max-w-4xl sm:mt-12">
            <div
              aria-hidden="true"
              className="absolute bottom-3 left-4 top-3 w-px bg-border"
            >
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-0 top-0 h-full origin-top bg-foreground/35"
              />
            </div>

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

  return (
    <motion.li
      variants={staggerItem}
      className="relative list-none pl-12"
    >
      <motion.div
        initial={{ scale: 0.82 }}
        whileInView={{ scale: [0.82, 1.04, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.48, ease: "easeOut" }}
        className="absolute left-0 top-4 z-10 grid size-8 place-items-center rounded-lg border border-border bg-background text-muted-foreground shadow-sm"
      >
        <Icon className="size-4" aria-hidden="true" />
      </motion.div>

      <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
        <Card className="rounded-lg transition-shadow duration-200 hover:shadow-lg hover:shadow-foreground/5">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{item.date}</Badge>
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
      </motion.div>
    </motion.li>
  )
}
