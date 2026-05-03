export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vite", "Vercel", "VS Code"],
  },
  {
    category: "Learning",
    items: ["Node.js", "APIs", "Testing", "Backend basics"],
  },
]
