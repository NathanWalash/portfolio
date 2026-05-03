import { Code2, Mail } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl flex-wrap items-center gap-3 px-6 py-3 sm:px-8">
        <Link
          to="/"
          className="mr-auto inline-flex items-center gap-2 rounded-lg text-sm font-semibold tracking-normal text-foreground outline-none transition-colors hover:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="Home"
        >
          <span className="grid size-8 place-items-center rounded-lg border border-border bg-card">
            <Code2 className="size-4" aria-hidden="true" />
          </span>
          <span>Developer Portfolio</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="order-3 flex w-full items-center gap-1 sm:order-none sm:w-auto"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
                  isActive && "bg-muted text-foreground",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:ml-0">
          <Button asChild variant="outline" size="sm">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Code2 aria-hidden="true" />
              GitHub
            </a>
          </Button>
          <Button asChild size="sm">
            <Link to="/#contact">
              <Mail aria-hidden="true" />
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
