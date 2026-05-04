export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: "Programming",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "C#", "PHP", "SQL", "Solidity"],
  },
  {
    category: "Web & Backend",
    items: ["React", "Next.js", "Node.js", "FastAPI", "Flask", "Django", "Laravel"],
  },
  {
    category: "Data & ML",
    items: ["scikit-learn", "pandas", "NumPy", "Matplotlib", "PostgreSQL", "pgvector", "MySQL"],
  },
  {
    category: "Workflow & Tools",
    items: ["Git", "GitHub Actions", "Docker", "Hardhat", "Vercel", "Railway"],
  },
]
