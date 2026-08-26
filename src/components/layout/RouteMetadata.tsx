import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { getProjectBySlug } from "@/data/projects"

const siteUrl = "https://www.nathanwalsh.me"
const previewImage = `${siteUrl}/og-image.svg`

function setNamedMeta(name: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(
    `meta[name="${name}"]`,
  )

  if (!meta) {
    meta = document.createElement("meta")
    meta.name = name
    document.head.append(meta)
  }

  meta.content = content
}

function setPropertyMeta(property: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  )

  if (!meta) {
    meta = document.createElement("meta")
    meta.setAttribute("property", property)
    document.head.append(meta)
  }

  meta.content = content
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  )

  if (!link) {
    link = document.createElement("link")
    link.rel = "canonical"
    document.head.append(link)
  }

  link.href = url
}

function getRouteMetadata(pathname: string) {
  const normalisedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "")
  const projectSlug = normalisedPath.startsWith("/projects/")
    ? normalisedPath.split("/projects/")[1]
    : undefined
  const project = getProjectBySlug(projectSlug)

  if (project) {
    return {
      title: `${project.title} | Nathan Walsh`,
      description: project.description,
      path: `/projects/${project.slug}`,
    }
  }

  if (normalisedPath === "/about") {
    return {
      title: "About | Nathan Walsh",
      description:
        "Learn more about Nathan Walsh, a full-stack developer from Cambridge based in Leeds, working as a Software Developer at Parallax after graduating in Computer Science with Artificial Intelligence.",
      path: "/about",
    }
  }

  if (normalisedPath === "/projects") {
    return {
      title: "Projects | Nathan Walsh",
      description:
        "Selected software engineering projects from Nathan Walsh, including APIs, search systems, machine learning products, and smart contracts.",
      path: "/projects",
    }
  }

  if (normalisedPath !== "/") {
    return {
      title: "Page Not Found | Nathan Walsh",
      description:
        "The page could not be found. Return to Nathan Walsh's developer portfolio, projects, or contact links.",
      path: normalisedPath,
    }
  }

  return {
    title: "Nathan Walsh | Full-Stack Developer",
    description:
      "Nathan Walsh, full-stack developer and software engineer, building practical web apps with React, TypeScript, APIs, and reliable delivery workflows.",
    path: "/",
  }
}

export function RouteMetadata() {
  const location = useLocation()

  useEffect(() => {
    const metadata = getRouteMetadata(location.pathname)
    const url = `${siteUrl}${metadata.path === "/" ? "/" : metadata.path}`

    document.title = metadata.title
    setNamedMeta("description", metadata.description)
    setNamedMeta("twitter:card", "summary_large_image")
    setNamedMeta("twitter:title", metadata.title)
    setNamedMeta("twitter:description", metadata.description)
    setNamedMeta("twitter:image", previewImage)
    setPropertyMeta("og:title", metadata.title)
    setPropertyMeta("og:description", metadata.description)
    setPropertyMeta("og:type", "website")
    setPropertyMeta("og:url", url)
    setPropertyMeta("og:image", previewImage)
    setPropertyMeta("og:image:alt", "Nathan Walsh developer portfolio preview")
    setCanonical(url)
  }, [location.pathname])

  return null
}
