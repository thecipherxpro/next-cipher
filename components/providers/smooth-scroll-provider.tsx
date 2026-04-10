"use client"

import { useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"
import { animate } from "framer-motion"

/**
 * Custom easing function for smooth, professional scroll feel
 * Similar to power3.inOut but using Framer Motion
 */
const smoothEasing = [0.22, 1, 0.36, 1] as const

/**
 * Smoothly scrolls to a target element using Framer Motion's animate()
 */
function smoothScrollTo(target: Element, offsetY = 80, duration = 0.9) {
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offsetY
  const startPosition = window.scrollY

  animate(startPosition, targetPosition, {
    duration,
    ease: smoothEasing,
    onUpdate: (value) => window.scrollTo(0, value),
  })
}

/**
 * Intercepts all anchor clicks where href starts with "#" and smoothly
 * scrolls to the target element using Framer Motion's animate().
 * Also handles hash links that arrive on page load (e.g. /services#consultation).
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Scroll to hash on initial load / route change
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    // Give the DOM time to paint before scrolling
    const timer = setTimeout(() => {
      const target = document.querySelector(hash)
      if (!target) return
      smoothScrollTo(target, 80, 1)
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname])

  // Intercept anchor clicks globally
  const handleClick = useCallback(
    (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href) return

      // Pure hash link on the same page: e.g. href="#services"
      if (href.startsWith("#")) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (!target) return
        smoothScrollTo(target, 80, 0.9)
        // Update URL hash without scroll jump
        window.history.pushState(null, "", href)
        return
      }

      // Path + hash on same route: e.g. href="/services#consultation"
      const [path, hash] = href.split("#")
      if (hash && (path === pathname || path === "")) {
        e.preventDefault()
        const target = document.querySelector(`#${hash}`)
        if (!target) return
        smoothScrollTo(target, 80, 0.9)
        window.history.pushState(null, "", `#${hash}`)
      }
    },
    [pathname]
  )

  useEffect(() => {
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [handleClick])

  return <>{children}</>
}

/**
 * Hook to get scroll progress for parallax effects
 * Returns a function to manually trigger smooth scroll
 */
export function useSmoothScroll() {
  const scrollTo = useCallback((selector: string, offsetY = 80) => {
    const target = document.querySelector(selector)
    if (!target) return
    smoothScrollTo(target, offsetY, 0.9)
  }, [])

  return { scrollTo }
}
