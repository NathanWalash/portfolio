import { Outlet } from "react-router-dom"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"

export function SiteLayout() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
