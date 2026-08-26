import { render, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
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
  it("renders the app shell and home route", async () => {
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
      await screen.findByRole(
        "heading",
        { name: /research assistant api/i },
        // Lives inside the deferred sections, which wait on idle time.
        { timeout: 3000 },
      ),
    ).toBeInTheDocument()
  })

  it("renders a data-driven project detail route", async () => {
    renderRoute("/projects/research-assistant-api")

    expect(
      await screen.findByRole("heading", { name: /research assistant api/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /overview/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /source/i })).toHaveAttribute(
      "href",
      "https://github.com/NathanWalash/research-assistant-api",
    )
  })

  it("filters the projects page by category", async () => {
    const user = userEvent.setup()

    renderRoute("/projects")

    expect(
      await screen.findByRole("heading", { name: /research assistant api/i }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole("tab", { name: /blockchain/i }))

    expect(
      screen.getByRole("heading", { name: /modular dao factory/i }),
    ).toBeInTheDocument()
    await waitFor(() => {
      expect(
        screen.queryByRole("heading", { name: /research assistant api/i }),
      ).not.toBeInTheDocument()
    })
  })

  it("renders a helpful not found route", async () => {
    renderRoute("/does-not-exist")

    expect(
      await screen.findByRole("heading", { name: /page not found/i }),
    ).toBeInTheDocument()
    const main = within(screen.getByRole("main"))
    expect(main.getByRole("link", { name: /^home$/i })).toHaveAttribute(
      "href",
      "/",
    )
    expect(main.getByRole("link", { name: /projects/i })).toHaveAttribute(
      "href",
      "/projects",
    )
  })
})
