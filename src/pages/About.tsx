import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from "@/data/skills"

const focusAreas = ["Frontend craft", "Reusable components", "Clean delivery"]

export function About() {
  return (
    <main className="mx-auto min-h-[calc(100svh-4rem)] w-full max-w-6xl px-6 py-16 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-muted-foreground">About</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">
          Building a portfolio around clear projects and practical progress.
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A concise profile for current focus, developer values, learning progress,
          and the kind of work that makes the best use of careful frontend craft.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {focusAreas.map((area) => (
          <Badge key={area} variant="secondary">
            {area}
          </Badge>
        ))}
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
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
