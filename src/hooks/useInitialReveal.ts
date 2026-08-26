import { useEffect, useState } from "react"

export function useInitialReveal() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    let secondFrame: number | null = null
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        setIsReady(true)
      })
    })

    // Browsers do not service animation frames in a background tab, which
    // would leave the hero at opacity 0 for anyone opening the site in one.
    const fallback = globalThis.setTimeout(() => setIsReady(true), 300)

    return () => {
      window.cancelAnimationFrame(firstFrame)
      globalThis.clearTimeout(fallback)

      if (secondFrame !== null) {
        window.cancelAnimationFrame(secondFrame)
      }
    }
  }, [])

  return isReady
}
