"use client"

import { useEffect, useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}

// Use useLayoutEffect on client, useEffect on server (SSR safe)
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

/**
 * GSAP context hook - automatically cleans up animations
 * Replaces Framer Motion's motion components
 */
export function useGSAP(
  callback: (context: gsap.Context) => void | (() => void),
  dependencies: React.DependencyList = []
) {
  const contextRef = useRef<gsap.Context>()

  useIsomorphicLayoutEffect(() => {
    contextRef.current = gsap.context(() => {
      return callback(contextRef.current!)
    })

    return () => contextRef.current?.revert()
  }, dependencies)

  return contextRef
}

/**
 * Fade up animation (replaces Framer Motion fadeUp variant)
 */
export const fadeUp = (
  element: gsap.TweenTarget,
  options: {
    delay?: number
    duration?: number
    y?: number
    stagger?: number
  } = {}
) => {
  const { delay = 0, duration = 0.6, y = 24, stagger = 0 } = options

  return gsap.from(element, {
    opacity: 0,
    y,
    duration,
    delay,
    stagger,
    ease: "power2.out",
  })
}

/**
 * Fade in animation (replaces Framer Motion fade variant)
 */
export const fadeIn = (
  element: gsap.TweenTarget,
  options: {
    delay?: number
    duration?: number
    stagger?: number
  } = {}
) => {
  const { delay = 0, duration = 0.5, stagger = 0 } = options

  return gsap.from(element, {
    opacity: 0,
    duration,
    delay,
    stagger,
    ease: "power2.out",
  })
}

/**
 * Scale animation
 */
export const scaleIn = (
  element: gsap.TweenTarget,
  options: {
    delay?: number
    duration?: number
    scale?: number
  } = {}
) => {
  const { delay = 0, duration = 0.5, scale = 0.95 } = options

  return gsap.from(element, {
    opacity: 0,
    scale,
    duration,
    delay,
    ease: "power2.out",
  })
}

/**
 * Scroll-triggered animation (replaces Framer Motion scroll animations)
 */
export const scrollTriggerAnimation = (
  element: gsap.TweenTarget,
  animation: gsap.TweenVars,
  scrollTriggerOptions: ScrollTrigger.Vars = {}
) => {
  return gsap.from(element, {
    ...animation,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse",
      ...scrollTriggerOptions,
    },
  })
}

/**
 * Parallax scroll effect
 */
export const parallaxScroll = (
  element: gsap.TweenTarget,
  options: {
    y?: number
    scale?: number
    rotation?: number
    scrub?: boolean | number
  } = {}
) => {
  const { y = 100, scale, rotation, scrub = 1 } = options

  const animation: gsap.TweenVars = { y }
  if (scale !== undefined) animation.scale = scale
  if (rotation !== undefined) animation.rotation = rotation

  return gsap.to(element, {
    ...animation,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub,
    },
  })
}

/**
 * Stagger children animation
 */
export const staggerChildren = (
  parent: Element,
  childSelector: string,
  options: {
    delay?: number
    stagger?: number
    y?: number
    duration?: number
  } = {}
) => {
  const { delay = 0, stagger = 0.1, y = 20, duration = 0.6 } = options

  return gsap.from(`${parent} ${childSelector}`, {
    opacity: 0,
    y,
    duration,
    delay,
    stagger,
    ease: "power2.out",
  })
}

/**
 * Initialize smooth scrolling with GSAP ScrollSmoother
 * Call this once in your root layout or app component
 */
export const initSmoothScroll = () => {
  if (typeof window === "undefined") return null

  return ScrollSmoother.create({
    smooth: 1.5, // Smoothness (higher = smoother but heavier)
    effects: true, // Enable data-speed and data-lag effects
    smoothTouch: 0.1, // Smooth scrolling on touch devices (lower = less smooth)
  })
}
