import { Route, Routes } from "react-router-dom"

import { SiteLayout } from "@/components/layout/SiteLayout"
import { About } from "@/pages/About"
import { Home } from "@/pages/Home"
import { NotFound } from "@/pages/NotFound"
import { ProjectDetail } from "@/pages/ProjectDetail"
import { Projects } from "@/pages/Projects"

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
