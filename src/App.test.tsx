import { render, screen } from "@testing-library/react"
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
  it("renders the portfolio foundation on the home route", () => {
    renderRoute("/")

    expect(
      screen.getByRole("heading", { name: /developer portfolio/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /projects/i })).toHaveAttribute(
      "href",
      "/projects",
    )
  })

  it("renders the project detail placeholder route", () => {
    renderRoute("/projects/example-project")

    expect(
      screen.getByRole("heading", { name: /project: example-project/i }),
    ).toBeInTheDocument()
  })
})
