"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}

export function GSAPSmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const smootherRef = useRef<ScrollSmoother | null>(null)

  useEffect(() => {
    // Initialize ScrollSmoother
    smootherRef.current = ScrollSmoother.create({
      smooth: 1.5, // Smoothness level (0-3, higher = smoother)
      effects: true, // Enable data-speed parallax effects
      smoothTouch: 0.1, // Smooth on touch devices
      normalizeScroll: false, // Keep browser's scroll behavior
    })

    // Cleanup on unmount
    return () => {
      smootherRef.current?.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
