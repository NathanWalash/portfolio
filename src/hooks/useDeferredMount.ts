import { useEffect, useState } from "react"

type DeferredMountOptions = {
  timeout?: number
  /**
   * Mount on the first render instead of waiting for idle time. Use when
   * something needs the full page height to be correct straight away, such as
   * resolving a hash anchor that sits below the deferred content.
   */
  immediate?: boolean
}

export function useDeferredMount(
  enabled: boolean,
  { timeout = 650, immediate = false }: DeferredMountOptions = {},
) {
  const [shouldMount, setShouldMount] = useState(immediate)

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
