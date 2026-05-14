import { useEffect } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Outlet, useLocation } from "react-router-dom"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { RouteMetadata } from "@/components/layout/RouteMetadata"
import { ScrollProgress } from "@/components/layout/ScrollProgress"

const pageTransitionEase = [0.16, 1, 0.3, 1] as const

export function SiteLayout() {
  const location = useLocation()

  return (
    <div className="min-h-svh bg-background text-foreground">
      <RouteMetadata />
      <RouteScrollManager />
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.24, ease: pageTransitionEase }}
          className="will-change-[transform,opacity]"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

function RouteScrollManager() {
  const { hash, pathname, search } = useLocation()

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
  }, [])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (!hash) {
        scrollToPageTop()
        return
      }

      document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [hash, pathname, search])

  return null
}

function scrollToPageTop() {
  if (navigator.userAgent.toLowerCase().includes("jsdom")) {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    return
  }

  window.scrollTo({ top: 0, left: 0, behavior: "auto" })
}
