import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { RouteMetadata } from "@/components/layout/RouteMetadata"
import { ScrollProgress } from "@/components/layout/ScrollProgress"

export function SiteLayout() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <RouteMetadata />
      <HashScroll />
      <ScrollProgress />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

function HashScroll() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      return
    }

    window.requestAnimationFrame(() => {
      document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }, [hash])

  return null
}
