export const projectCategories = ["Web App", "Full-stack", "UI", "Tools"] as const

export type ProjectCategory = (typeof projectCategories)[number]

export type Project = {
  title: string
  slug: string
  description: string
  category: ProjectCategory
  stack: string[]
  image: {
    src: string
    alt: string
  }
  github?: string
  live?: string
  featured?: boolean
  overview: string
  problem: string
  solution: string
  features: string[]
  challenges: string[]
  learned: string[]
  futureImprovements: string[]
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "A custom developer portfolio built as a maintainable React app with TypeScript, Tailwind CSS, shadcn/ui, and Motion.",
    category: "Web App",
    stack: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion"],
    image: {
      src: "",
      alt: "Portfolio website screenshot",
    },
    github: "https://github.com/NathanWalash",
    live: "https://example.com",
    featured: true,
    overview:
      "A personal portfolio designed to present projects, skills, and developer direction through a clean React app.",
    problem:
      "A generic template would be quick, but it would not show enough product thinking or code ownership.",
    solution:
      "Use a small Vite app with structured project data, reusable UI components, routed case studies, and lightweight CI.",
    features: [
      "Responsive app shell",
      "Static project data model",
      "Project detail routing",
      "Subtle Motion interactions",
    ],
    challenges: [
      "Keeping the first version focused",
      "Balancing a custom look with reusable shadcn/ui components",
    ],
    learned: [
      "Planning a software project in small milestones",
      "Using React Router with shared layouts",
      "Keeping CI useful without overcomplicating the app",
    ],
    futureImprovements: [
      "Add richer project visuals",
      "Replace placeholder contact links",
      "Write deeper case studies as real projects are added",
    ],
  },
  {
    title: "Component Practice Lab",
    slug: "component-practice-lab",
    description:
      "A collection of focused UI exercises for forms, cards, states, and responsive layout patterns.",
    category: "UI",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image: {
      src: "",
      alt: "Component practice lab screenshot",
    },
    github: "https://github.com/NathanWalash",
    featured: true,
    overview:
      "A practice space for improving component composition, layout decisions, and interface polish.",
    problem:
      "UI practice can become scattered when experiments live in unrelated files or sandboxes.",
    solution:
      "Group small interface exercises into a single project with consistent styling and reviewable examples.",
    features: [
      "Reusable layout patterns",
      "Responsive UI examples",
      "Component state demonstrations",
    ],
    challenges: [
      "Keeping experiments organized",
      "Making small components feel production-like",
    ],
    learned: [
      "More consistent spacing and hierarchy",
      "Better handling of empty, loading, and active states",
    ],
    futureImprovements: [
      "Add accessibility notes",
      "Add more form and dashboard examples",
    ],
  },
  {
    title: "API Notes Tool",
    slug: "api-notes-tool",
    description:
      "A small notes-style app concept for practicing API flows, state boundaries, and application data handling.",
    category: "Full-stack",
    stack: ["React", "TypeScript", "Node.js", "APIs"],
    image: {
      src: "",
      alt: "API notes tool screenshot",
    },
    github: "https://github.com/NathanWalash",
    overview:
      "A planned project for demonstrating how a web app can organize create, read, update, and delete flows.",
    problem:
      "Portfolio projects are stronger when they show data flow and user tasks, not just static layouts.",
    solution:
      "Build a compact app around notes, request states, validation, and practical UI feedback.",
    features: [
      "List and detail views",
      "Create and edit flows",
      "Request state handling",
    ],
    challenges: [
      "Designing simple API boundaries",
      "Keeping state predictable without heavy global state",
    ],
    learned: [
      "Planning data-heavy UI before adding backend complexity",
      "Separating app state from display components",
    ],
    futureImprovements: [
      "Add persistence",
      "Add tests around user flows",
      "Add deployment notes",
    ],
  },
]

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured)
}

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}
