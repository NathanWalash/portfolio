import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { SiteLayout } from "@/components/layout/SiteLayout"
import { Home } from "@/pages/Home"

const About = lazy(() =>
  import("@/pages/About").then((module) => ({ default: module.About })),
)
const Projects = lazy(() =>
  import("@/pages/Projects").then((module) => ({ default: module.Projects })),
)
const ProjectDetail = lazy(() =>
  import("@/pages/ProjectDetail").then((module) => ({
    default: module.ProjectDetail,
  })),
)
const NotFound = lazy(() =>
  import("@/pages/NotFound").then((module) => ({ default: module.NotFound })),
)

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<RouteFallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ProjectDetail />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteFallback />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

function RouteFallback() {
  return <main className="min-h-[calc(100svh-4rem)]" />
}

export default App
