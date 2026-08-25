import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

function getInitialDarkMode() {
  if (typeof document === "undefined") {
    return false
  }

  return document.documentElement.classList.contains("dark")
}

function setThemeColor(isDark: boolean) {
  const meta = document.head.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]',
  )

  if (meta) {
    meta.content = isDark ? "#111827" : "#ffffff"
  }
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialDarkMode)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)

    try {
      localStorage.setItem("portfolio-theme", isDark ? "dark" : "light")
    } catch {
      // Storage is unavailable in private browsing and in runtimes that do
      // not provide it. The theme still applies, it just will not persist.
    }

    setThemeColor(isDark)
  }, [isDark])

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-sm"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={() => setIsDark((current) => !current)}
    >
      {isDark ? (
        <Sun className="size-3.5" aria-hidden="true" />
      ) : (
        <Moon className="size-3.5" aria-hidden="true" />
      )}
    </Button>
  )
}
