import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"
import { afterEach } from "vitest"

class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null
  readonly rootMargin = ""
  readonly scrollMargin = ""
  readonly thresholds = []

  constructor(
    _callback: IntersectionObserverCallback,
    _options?: IntersectionObserverInit,
  ) {
    void _callback
    void _options
  }

  disconnect() {
    return undefined
  }

  observe() {
    return undefined
  }

  takeRecords() {
    return []
  }

  unobserve() {
    return undefined
  }
}

globalThis.IntersectionObserver = MockIntersectionObserver

// jsdom does not implement scrolling; stub it so production code can call the
// real API without branching on the environment.
window.scrollTo = () => undefined
Element.prototype.scrollIntoView = () => undefined

afterEach(() => {
  cleanup()
})
