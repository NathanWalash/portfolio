# Developer Portfolio Project Decisions

## Project Goal

Build a custom developer portfolio that feels homemade, polished, and maintainable without starting completely from scratch.

The site should use reusable components, clean routing, tasteful animation, and a simple structure that can grow over time.

The goal is not to use a full portfolio template. Instead, use component libraries and UI building blocks to speed up development while keeping the design custom.

---

## Core Tech Stack

Use the following stack:

```txt
Vite
React
TypeScript
Tailwind CSS
shadcn/ui
Motion
Lucide React
React Router
Vercel
GitHub
```

### Why This Stack

#### Vite + React + TypeScript

Use Vite for a lightweight React setup. It is simpler than a full framework and gives full control over the app structure.

TypeScript should be used from the start for better maintainability and cleaner component/data modeling.

#### Tailwind CSS

Use Tailwind for styling. It keeps styling close to components and works well with shadcn/ui.

#### shadcn/ui

Use shadcn/ui for base components such as:

```txt
Button
Card
Badge
Tabs
Dialog
Tooltip
Dropdown
Navigation components
Form components
```

shadcn/ui is preferred because components are copied into the project and can be customized directly. This keeps the site from feeling like a generic UI library.

#### Motion

Use Motion for animations.

Use it for tasteful interactions such as:

```txt
Hero text fade/slide animations
Project card hover effects
Section entrance animations
Button hover/tap animations
Staggered skill badges
Smooth project card transitions
```

Do not overuse animation. The site should feel polished, not gimmicky.

#### Lucide React

Use Lucide React for icons.

Examples:

```txt
GitHub icon
LinkedIn icon
External link icon
Mail icon
Arrow icons
Technology or section icons
```

#### React Router

Use React Router for client-side routing.

#### Vercel

Deploy the first version on Vercel.

#### GitHub

Use GitHub for source control and project links.

---

## Tools Not Needed Initially

Do not use these in version 1 unless a strong reason appears later:

```txt
Docker
Kubernetes
Backend server
Database
Authentication
CMS
Redux
Complex global state management
Monorepo
Testing framework on day one
```

### Docker Decision

Docker is overkill for this portfolio version.

Only consider Docker later if the project grows to include:

```txt
Custom backend API
Database
Authentication
Self-hosted services
Multiple containers
Complex local development setup
```

For now, this is a static web portfolio and should stay simple.

---

## Main Site Structure

Use three main pages in the navbar:

```txt
Home
About
Projects
```

The site should also support project detail pages, but those should not appear as top-level navbar links.

Final route structure:

```txt
/
 /about
 /projects
 /projects/:slug
```

Project detail pages should be reached by clicking project cards from the Projects page or Featured Projects section.

---

## Navbar Decision

The navbar should be simple and should not include "Project Details."

Recommended navbar options:

### Option A

```txt
[Name / Logo]    Home    About    Projects    GitHub    Contact
```

### Option B

```txt
[Name / Logo]    About    Projects    Contact
```

In Option B, the name/logo links back to the home page.

`Contact` can scroll to the contact section on the home page:

```txt
/#contact
```

or to a contact section on the About page if preferred.

Do not create a separate Contact page for version 1.

---

## Page Plan

## 1. Home Page `/`

The home page is the main landing page and quick summary.

It should answer:

```txt
Who are you?
What do you build?
What tech do you use?
What are your best projects?
How can someone contact you?
```

Recommended sections:

```txt
Hero
Short intro
Featured Projects
Skills / Tech Stack preview
About preview
Contact CTA
```

### Home Page Details

#### Hero

The hero should include:

```txt
Name
Developer title or short positioning statement
One-sentence value statement
Primary CTA: View Projects
Secondary CTA: GitHub / LinkedIn / Contact
```

Example direction:

```txt
Hi, I'm [Name].
I build clean, fast, user-focused web apps.
```

Motion ideas:

```txt
Hero text fades/slides in
Buttons animate on hover/tap
Small staggered intro animation
```

#### Featured Projects

Show only the best 2-3 projects.

Each featured project card should include:

```txt
Project title
Short description
Tech stack badges
Live demo link
GitHub link
Link to project detail page
```

Motion ideas:

```txt
Cards lift slightly on hover
Cards fade/slide in as they enter viewport
```

#### Skills / Tech Stack Preview

Show primary technologies as badges or small cards.

Example categories:

```txt
Programming
Web & Backend
Data & ML
Workflow & Tools
```

Potential technologies:

```txt
React
TypeScript
Tailwind CSS
shadcn/ui
Motion
Node.js
Git
Vite
```

#### About Preview

Short personal/dev summary with a link to the About page.

#### Contact CTA

A simple section at the bottom with professional contact links.

Use LinkedIn and GitHub links for version 1 instead of publishing a direct email address or building a backend form.

---

## 2. About Page `/about`

The About page should provide more personal context and developer background.

Recommended sections:

```txt
Intro / story
Current focus
What I enjoy building
Tech I like working with
Experience / education / learning timeline
Developer values
Contact/social links
```

### About Page Purpose

The About page should make the portfolio feel human.

It should explain:

```txt
Who you are
What you are learning
What kind of development interests you
How you approach building projects
Where you are trying to go next
```

Avoid making it only a list of tools.

Motion ideas:

```txt
Timeline items animate as they enter viewport
Skill cards stagger in
Subtle section transitions
```

---

## 3. Projects Page `/projects`

The Projects page is the full work gallery.

Recommended sections:

```txt
Page title
Short intro
Filter tabs
Project grid
Project cards
```

Use this page to show:

```txt
Featured projects
Smaller experiments
Application builds
Backend/API projects
Algorithmic systems
ML products
Blockchain projects
```

Recommended filters:

```txt
All
Backend/API
Algorithms
ML Product
Blockchain
```

Use shadcn/ui components:

```txt
Tabs
Card
Badge
Button
```

Motion ideas:

```txt
Project cards animate in with a stagger
Cards scale or lift slightly on hover
Filter transitions feel smooth
```

Each project card should include:

```txt
Title
Description
Tech stack
Category
Image or visual placeholder
GitHub link
Live demo link
Details link
```

---

## 4. Project Detail Pages `/projects/:slug`

Project detail pages exist but are not navbar pages.

They are reached by clicking a project card.

Each project detail page should work like a mini case study.

Recommended sections:

```txt
Project hero
Short summary
Screenshot or preview
Live Demo button
GitHub button
Overview
Problem
Solution
Tech stack
Features
Challenges
What I learned
Future improvements
```

### Project Detail Purpose

These pages should show developer thinking, not just screenshots.

They should explain:

```txt
Why the project exists
What problem it solves
What technologies were used
What was difficult
What was learned
What could be improved next
```

This makes the portfolio stronger than a simple project gallery.

---

## Suggested File Structure

```txt
src/
  components/
    layout/
      Navbar.tsx
      Footer.tsx

    sections/
      Hero.tsx
      FeaturedProjects.tsx
      Skills.tsx
      AboutPreview.tsx
      ContactCTA.tsx

    projects/
      ProjectCard.tsx
      ProjectHero.tsx
      ProjectDetails.tsx

    ui/
      shadcn components live here

  data/
    projects.ts
    skills.ts

  pages/
    Home.tsx
    About.tsx
    Projects.tsx
    ProjectDetail.tsx

  App.tsx
  main.tsx
```

---

## Routing Plan

Install React Router:

```bash
npm install react-router-dom
```

Routes should look like:

```tsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/projects" element={<Projects />} />
<Route path="/projects/:slug" element={<ProjectDetail />} />
```

---

## Project Data Model

Start with a simple local data file instead of a CMS.

Create:

```txt
src/data/projects.ts
```

Example model:

```ts
export type Project = {
  title: string;
  slug: string;
  description: string;
  category: "Backend/API" | "Algorithms" | "ML Product" | "Blockchain";
  stack: string[];
  image?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  overview?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  challenges?: string[];
  learned?: string[];
  futureImprovements?: string[];
};

export const projects: Project[] = [
  {
    title: "Research Assistant API",
    slug: "research-assistant-api",
    description:
      "A production-style scholarly discovery backend combining FastAPI, PostgreSQL, pgvector, citation traversal, auth, and deployment-grade CI/CD.",
    category: "Backend/API",
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Docker"],
    github: "https://github.com/NathanWalash/research-assistant-api",
    featured: true,
    overview:
      "A personal portfolio designed to showcase projects, skills, and developer personality.",
    problem:
      "I wanted a custom portfolio that did not rely on a generic template.",
    solution:
      "I built a reusable component structure with project data, animated UI, and clean routing.",
    features: [
      "Responsive layout",
      "Project filtering",
      "Project detail pages",
      "Animated hero and cards"
    ],
    challenges: [
      "Balancing custom design with reusable components",
      "Keeping animation tasteful and not distracting"
    ],
    learned: [
      "Better component organization",
      "React Router dynamic routes",
      "Motion animation patterns"
    ],
    futureImprovements: [
      "Add blog or writing section",
      "Add contact form",
      "Improve project case studies"
    ]
  }
];
```

---

## Skills Data Model

Create:

```txt
src/data/skills.ts
```

Example:

```ts
export const skills = [
  {
    category: "Programming",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "C#", "PHP", "SQL", "Solidity"]
  },
  {
    category: "Web & Backend",
    items: ["React", "Next.js", "Node.js", "FastAPI", "Flask", "Django", "Laravel"]
  },
  {
    category: "Data & ML",
    items: ["scikit-learn", "pandas", "NumPy", "Matplotlib", "PostgreSQL", "pgvector", "MySQL"]
  },
  {
    category: "Workflow & Tools",
    items: ["Git", "GitHub Actions", "Docker", "Hardhat", "Vercel", "Railway"]
  }
];
```

---

## Initial shadcn/ui Components

Start with only what is needed:

```bash
npx shadcn@latest add button card badge tabs
```

Add more later only when needed.

Potential later additions:

```bash
npx shadcn@latest add dialog tooltip dropdown-menu navigation-menu form input textarea
```

---

## Animation Guidelines

Use Motion, but keep animations subtle.

Recommended animation types:

```txt
Fade in
Slide up
Small hover lift
Button scale on hover/tap
Staggered badges/cards
```

Avoid:

```txt
Too many moving backgrounds
Overly dramatic 3D effects
Animations on every element
Slow transitions
Effects that distract from the projects
```

Recommended animation helper:

```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};
```

Example usage:

```tsx
import { motion } from "motion/react";

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeUp}
  transition={{ duration: 0.4 }}
>
  Content
</motion.div>
```

---

## Visual Direction

The portfolio should feel:

```txt
Clean
Modern
Developer-focused
Personal
Fast
Responsive
Not overly templated
```

Good visual ideas:

```txt
Dark mode or dark-first design
Subtle gradient background
Clean cards
Rounded corners
Soft borders
Muted text hierarchy
Tech badges
Tasteful hover states
One memorable animated element
```

Avoid making the site look like a generic template.

Borrow inspiration from UI/component sites, but customize the final design.

---

## Optional UI Inspiration Sources

Use these for components or inspiration, not full templates:

```txt
shadcn/ui
Magic UI free components
Aceternity UI
React Bits
Lucide Icons
Awwwards
Godly.website
Land-book
Dribbble
Mobbin
One Page Love
```

Use Magic UI or Aceternity sparingly, mainly for one or two standout effects.

---

## Version 1 Scope

Build the first version with:

```txt
Home page
About page
Projects page
Project detail route
Static project data
Responsive design
shadcn cards/buttons/badges/tabs
Basic Motion animations
GitHub links
Live demo links
LinkedIn/GitHub contact CTA
Vercel deployment
```

Do not add:

```txt
Backend contact form
Authentication
Database
Blog
CMS
Docker
Complex testing setup
```

---

## Version 2 Ideas

After version 1 is complete, consider adding:

```txt
Blog or notes section
MDX project writeups
Real contact form
Better SEO metadata
Open Graph images
Theme toggle
Command menu
Analytics
More detailed project case studies
```

---

## Implementation Priorities

Build in this order:

```txt
1. Set up Vite React TypeScript project
2. Install Tailwind CSS
3. Initialize shadcn/ui
4. Add button, card, badge, and tabs
5. Install React Router
6. Install Motion
7. Create page routes
8. Create layout components
9. Create project data file
10. Build Home page
11. Build Projects page
12. Build ProjectDetail page
13. Build About page
14. Add responsive polish
15. Add tasteful Motion animations
16. Deploy to Vercel
```

---

## Final Decision Summary

Use:

```txt
Vite + React + TypeScript
Tailwind CSS
shadcn/ui
Motion
Lucide React
React Router
Vercel
```

Main pages:

```txt
Home
About
Projects
```

Additional hidden/dynamic route:

```txt
/projects/:slug
```

Do not use Docker for version 1.

Build the portfolio mostly custom, using shadcn/ui as the base component system and Motion for tasteful animation.
