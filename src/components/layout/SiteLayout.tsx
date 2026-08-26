import { useEffect } from "react"
import { AnimatePresence, motion } from "motion/react"
import { useLocation, useNavigationType, useOutlet } from "react-router-dom"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { RouteMetadata } from "@/components/layout/RouteMetadata"
import { ScrollProgress } from "@/components/layout/ScrollProgress"

const pageTransitionEase = [0.16, 1, 0.3, 1] as const

export function SiteLayout() {
  const location = useLocation()
  // Snapshot the route element. Rendering <Outlet /> here would let the
  // exiting wrapper read live route context and animate the incoming page,
  // which also remounts every route.
  const outlet = useOutlet()

  return (
    <div className="min-h-svh bg-background text-foreground">
      <RouteMetadata />
      <RouteScrollManager />
      <ScrollProgress />
      <a
        href="#main-content"
        className="sr-only rounded-lg bg-background px-4 py-2 text-sm font-medium text-foreground ring-2 ring-ring focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        Skip to content
      </a>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.24, ease: pageTransitionEase }}
          id="main-content"
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

function RouteScrollManager() {
  const { hash, pathname, search } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    // On back and forward the browser restores the previous offset itself.
    if (navigationType === "POP" && !hash) {
      return
    }

    const frame = window.requestAnimationFrame(() => {
      if (!hash) {
        scrollToPageTop()
        return
      }

      document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView({ behavior: scrollBehavior(), block: "start" })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [hash, navigationType, pathname, search])

  return null
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth"
}

function scrollToPageTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" })
}
