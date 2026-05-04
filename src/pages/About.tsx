import { motion } from "motion/react"

import {
  Reveal,
} from "@/components/animation/Reveal"
import {
  liftHover,
  staggerContainer,
  staggerItem,
} from "@/components/animation/motionPresets"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { profile } from "@/data/profile"
import { skills } from "@/data/skills"

const focusAreas = ["Full-stack thinking", "Clean architecture", "Reliable delivery"]

export function About() {
  return (
    <main className="mx-auto min-h-[calc(100svh-4rem)] w-full max-w-6xl px-4 py-12 sm:px-8 sm:py-16">
      <Reveal className="max-w-3xl">
        <p className="text-sm font-medium text-muted-foreground">About</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
          About {profile.name}.
        </h1>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
          {profile.summary} I am shaping this portfolio around practical projects,
          steady learning, and sound software engineering habits.
        </p>
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 flex flex-wrap gap-3"
      >
        {focusAreas.map((area) => (
          <motion.div key={area} variants={staggerItem}>
            <Badge variant="secondary">{area}</Badge>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((group) => (
          <motion.div
            key={group.category}
            variants={staggerItem}
            whileHover={liftHover}
          >
            <Card className="h-full rounded-lg transition-shadow duration-200 hover:shadow-lg hover:shadow-foreground/5">
              <CardHeader>
                <CardTitle aria-level={2} role="heading">
                  {group.category}
                </CardTitle>
                <div className="flex flex-wrap gap-2 pt-3">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
