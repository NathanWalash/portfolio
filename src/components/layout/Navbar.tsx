import { Code2, Mail } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

import { ThemeToggle } from "@/components/layout/ThemeToggle"
import { Button } from "@/components/ui/button"
import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto grid min-h-16 w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4 py-3 sm:flex sm:gap-3 sm:px-8">
        <Link
          to="/"
          className="inline-flex min-w-0 items-center gap-2 rounded-lg text-sm font-semibold tracking-normal text-foreground outline-none transition-colors hover:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/50 sm:mr-auto"
          aria-label="Home"
        >
          <span className="truncate">{profile.name}</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="order-3 col-span-2 grid w-full grid-cols-3 gap-1 rounded-lg bg-muted/70 p-1 sm:order-none sm:col-span-1 sm:flex sm:w-auto sm:bg-transparent sm:p-0"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                cn(
                  "min-w-0 rounded-lg px-2.5 py-2 text-center text-sm font-medium text-muted-foreground transition-colors hover:bg-background/80 hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 sm:px-3 sm:text-left sm:hover:bg-muted",
                  isActive && "bg-background text-foreground shadow-sm sm:bg-muted sm:shadow-none",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 sm:ml-0">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm" className="hidden min-[540px]:inline-flex">
            <a href={profile.socials.github.href} target="_blank" rel="noreferrer">
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
