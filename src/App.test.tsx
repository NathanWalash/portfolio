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
      screen.getByRole("heading", { name: /developer portfolio/i }),
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
  })

  it("renders the project detail placeholder route", () => {
    renderRoute("/projects/example-project")

    expect(
      screen.getByRole("heading", { name: /project: example-project/i }),
    ).toBeInTheDocument()
  })
})
