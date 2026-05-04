import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { profile } from "@/data/profile"
import { skills } from "@/data/skills"

const focusAreas = ["Frontend craft", "Reusable components", "Clean delivery"]

export function About() {
  return (
    <main className="mx-auto min-h-[calc(100svh-4rem)] w-full max-w-6xl px-4 py-12 sm:px-8 sm:py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-muted-foreground">About</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
          About {profile.name}.
        </h1>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
          {profile.summary} I am shaping this portfolio around practical projects,
          steady learning, and frontend craft.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {focusAreas.map((area) => (
          <Badge key={area} variant="secondary">
            {area}
          </Badge>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3">
        {skills.map((group) => (
          <Card key={group.category} className="rounded-lg">
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
        ))}
      </div>
    </main>
  )
}
