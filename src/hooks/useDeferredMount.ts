import { useEffect, useState } from "react"

export function useDeferredMount(enabled: boolean, timeout = 650) {
  const [shouldMount, setShouldMount] = useState(false)

  useEffect(() => {
    if (!enabled || shouldMount) {
      return
    }

    if ("requestIdleCallback" in window) {
      const idleHandle = window.requestIdleCallback(
        () => setShouldMount(true),
        { timeout },
      )

      return () => window.cancelIdleCallback(idleHandle)
    }

    const timeoutHandle = globalThis.setTimeout(
      () => setShouldMount(true),
      timeout,
    )
    return () => globalThis.clearTimeout(timeoutHandle)
  }, [enabled, shouldMount, timeout])

  return shouldMount
}
