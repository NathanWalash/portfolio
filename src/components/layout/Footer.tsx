import { Code2, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <Link
            to="/"
            className="font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            Developer Portfolio
          </Link>
          <p className="mt-2 max-w-md">
            Clean React portfolio for projects, background, and contact.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-2 py-1 transition-colors hover:bg-background hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <Code2 className="size-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-lg px-2 py-1 transition-colors hover:bg-background hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <Mail className="size-4" aria-hidden="true" />
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
