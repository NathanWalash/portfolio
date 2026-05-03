import { render, screen, within } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"

import App from "./App"

function renderRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  )
}

describe("App routing", () => {
  it("renders the app shell and home route", () => {
    renderRoute("/")

    expect(
      screen.getByRole("heading", { level: 1, name: /nathan walsh/i }),
    ).toBeInTheDocument()

    const navigation = within(
      screen.getByRole("navigation", { name: /main navigation/i }),
    )
    expect(navigation.getByRole("link", { name: /home/i })).toHaveAttribute(
      "href",
      "/",
    )
    expect(navigation.getByRole("link", { name: /about/i })).toHaveAttribute(
      "href",
      "/about",
    )
    expect(navigation.getByRole("link", { name: /projects/i })).toHaveAttribute(
      "href",
      "/projects",
    )
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
    expect(screen.getAllByRole("link", { name: /github/i })[0]).toHaveAttribute(
      "href",
      "https://github.com/NathanWalash",
    )
    expect(
      screen.getByRole("heading", { name: /portfolio website/i }),
    ).toBeInTheDocument()
  })

  it("renders a data-driven project detail route", () => {
    renderRoute("/projects/portfolio-website")

    expect(
      screen.getByRole("heading", { name: /portfolio website/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /overview/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /live demo/i })).toHaveAttribute(
      "href",
      "https://example.com",
    )
  })
})
