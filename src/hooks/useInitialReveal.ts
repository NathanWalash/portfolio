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

    return () => {
      window.cancelAnimationFrame(firstFrame)

      if (secondFrame !== null) {
        window.cancelAnimationFrame(secondFrame)
      }
    }
  }, [])

  return isReady
}
