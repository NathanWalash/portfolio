import { Outlet } from "react-router-dom"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { RouteMetadata } from "@/components/layout/RouteMetadata"
import { ScrollProgress } from "@/components/layout/ScrollProgress"

export function SiteLayout() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <RouteMetadata />
      <ScrollProgress />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
