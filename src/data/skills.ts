export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: "Core Web",
    items: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion"],
  },
  {
    category: "APIs & Backend",
    items: ["Node.js", "APIs", "Testing", "Backend basics"],
  },
  {
    category: "Engineering Workflow",
    items: ["Git", "GitHub", "Vite", "Vercel", "CI"],
  },
]
