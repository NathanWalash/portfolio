import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

export function NotFound() {
  return (
    <main className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-6xl place-items-center px-6 py-16 sm:px-8">
      <div className="max-w-lg text-center">
        <p className="text-sm font-medium text-muted-foreground">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-normal">
          Page not found.
        </h1>
        <Button asChild className="mt-8" variant="outline">
          <Link to="/">
            <ArrowLeft aria-hidden="true" />
            Home
          </Link>
        </Button>
      </div>
    </main>
  )
}
