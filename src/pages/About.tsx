import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
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
import {
  liftHover,
  staggerContainer,
  staggerItem,
} from "@/components/animation/motionPresets"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { projects } from "@/data/projects"
import { profile } from "@/data/profile"
import { skills } from "@/data/skills"

const proofStats = [
  {
    label: "Degree",
    value: "BSc Computer Science with AI",
    detail: "University of Leeds, predicted First Class",
  },
  {
    label: "Wins",
    value: "Leeds Hackathon 2025 + 2026",
    detail: "Built winning Web3 and forecasting prototypes",
  },
  {
    label: "Experience",
    value: "Junior Software Developer",
    detail: "React, Node.js, Solidity, Laravel, and databases",
  },
]

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
    date: "2024",
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
]

const workingStyle = [
  {
    title: "I like building complete systems",
    description:
      "The strongest projects here are not just interfaces or isolated scripts. They connect product flow, APIs, data modelling, deployment, and user-facing decisions.",
    Icon: Code2,
  },
  {
    title: "I care about the engineering around the feature",
    description:
      "Branches, CI, tests, typed data models, deployment notes, and clear tradeoffs matter because they make projects easier to trust and improve.",
    Icon: Network,
  },
  {
    title: "I turn technical work into usable products",
    description:
      "Whether it is forecasting, research discovery, search ranking, or smart contracts, the goal is to make the technical system understandable and useful.",
    Icon: Sparkles,
  },
]

const proofProjects = projects.filter((project) => project.featured)

export function About() {
  return (
    <main className="min-h-[calc(100svh-4rem)]">
      <section className="px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <Reveal>
            <p className="text-sm font-medium text-muted-foreground">About</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-normal sm:text-5xl">
              A full-stack developer building practical software across web, AI,
              data, and smart contracts.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
              I am a final-year Computer Science with Artificial Intelligence
              student at the University of Leeds. I am drawn to projects where
              the interesting part is making the whole system work: product
              flow, backend logic, data, model behaviour, deployment, and the
              small details users actually notice.
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
            className="grid gap-3"
            aria-label="Profile highlights"
          >
            {proofStats.map((stat) => (
              <Card key={stat.label} className="rounded-lg" size="sm">
                <CardHeader>
                  <CardDescription>{stat.label}</CardDescription>
                  <CardTitle aria-level={2} role="heading">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  {stat.detail}
                </CardContent>
              </Card>
            ))}
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

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative mt-10 space-y-4 border-l border-border pl-5 sm:mt-12 sm:pl-7"
          >
            {timeline.map(({ date, title, meta, description, Icon }) => (
              <motion.li
                key={`${date}-${title}`}
                variants={staggerItem}
                className="relative list-none"
              >
                <div className="absolute -left-[1.0625rem] mt-4 grid size-8 place-items-center rounded-lg border border-border bg-background text-muted-foreground sm:-left-[1.3125rem] sm:size-10">
                  <Icon className="size-4" aria-hidden="true" />
                </div>
                <Card className="rounded-lg transition-shadow duration-200 hover:shadow-lg hover:shadow-foreground/5">
                  <CardHeader className="gap-3 sm:flex sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <Badge variant="outline">{date}</Badge>
                      <CardTitle
                        aria-level={3}
                        role="heading"
                        className="mt-3"
                      >
                        {title}
                      </CardTitle>
                      <CardDescription className="mt-1">{meta}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm leading-6 text-muted-foreground">
                    {description}
                  </CardContent>
                </Card>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <section className="border-t border-border/80 bg-muted/30 px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">
              How I Build
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal sm:text-3xl">
              Product thinking with engineering discipline.
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid gap-4 md:grid-cols-3"
          >
            {workingStyle.map(({ title, description, Icon }) => (
              <motion.div key={title} variants={staggerItem} whileHover={liftHover}>
                <Card className="h-full rounded-lg transition-shadow duration-200 hover:shadow-lg hover:shadow-foreground/5">
                  <CardHeader>
                    <div className="grid size-9 place-items-center rounded-lg border border-border bg-background text-muted-foreground">
                      <Icon className="size-4" aria-hidden="true" />
                    </div>
                    <CardTitle aria-level={3} role="heading">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-6 text-muted-foreground">
                    {description}
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
                Selected Proof
              </p>
              <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-normal sm:text-3xl">
                Projects that show different sides of my work.
              </h2>
            </div>
            <Button asChild variant="outline" className="w-full min-[420px]:w-auto">
              <Link to="/projects">
                All projects
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid gap-4 md:grid-cols-2"
          >
            {proofProjects.map((project) => (
              <motion.div
                key={project.slug}
                variants={staggerItem}
                whileHover={liftHover}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="block h-full rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <Card className="h-full rounded-lg transition-shadow duration-200 hover:shadow-lg hover:shadow-foreground/5">
                    <CardHeader>
                      <Badge variant="outline">{project.category}</Badge>
                      <CardTitle aria-level={3} role="heading">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 5).map((item) => (
                          <Badge key={item} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border/80 px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">
              Tech Stack
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal sm:text-3xl">
              Tools I have used across coursework, projects, and commercial
              work.
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
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
