"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { X, ArrowRight, AlignJustify, Sun, Moon } from "lucide-react"
import { motion, AnimatePresence, animate } from "framer-motion"
import { useTheme } from "next-themes"

const smoothEasing = [0.22, 1, 0.36, 1] as const

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary shrink-0" />
  const isDark = resolvedTheme === "dark"
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:bg-secondary transition-colors shrink-0"
    >
      {isDark ? (
        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70" />
      ) : (
        <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70" />
      )}
    </button>
  )
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return
      e.preventDefault()
      setIsOpen(false)
      const target = document.querySelector(href)
      if (!target) return
      
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - 80
      const startPosition = window.scrollY
      
      animate(startPosition, targetPosition, {
        duration: 0.9,
        ease: smoothEasing,
        onUpdate: (value) => window.scrollTo(0, value),
      })
      
      window.history.pushState(null, "", href)
    },
    []
  )

  return (
    <>
      {/* Nav bar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="w-full container-full-wide pt-3 sm:pt-4 md:pt-5">
          <div
            className={`flex items-center justify-between px-4 sm:px-5 md:px-6 h-14 sm:h-16 md:h-[68px] transition-all duration-300 ${
              scrolled
                ? "bg-background/90 backdrop-blur-xl border border-border shadow-sm"
                : "bg-transparent"
            }`}
            style={{ borderRadius: scrolled ? 999 : 0 }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/cipherx-logo.png"
                alt="CipherX"
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="px-4 md:px-5 py-2 sm:py-2.5 text-sm md:text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/60"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />

              {/* Desktop CTA */}
              <Link
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-accent text-accent-foreground rounded-full text-sm md:text-base font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden flex items-center gap-2 pl-3 sm:pl-4 pr-2.5 sm:pr-3 py-2 sm:py-2.5 bg-primary text-primary-foreground rounded-full text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity"
                aria-label="Open menu"
              >
                <span className="hidden xs:inline">Menu</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <AlignJustify className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-foreground/10 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed top-4 sm:top-5 right-4 sm:right-5 left-4 sm:left-5 z-50 bg-background/95 backdrop-blur-xl border border-border lg:hidden overflow-hidden"
              style={{ borderRadius: 24 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 sm:px-6 pt-5 sm:pt-6 pb-4 sm:pb-5 border-b border-border">
              <div className="flex items-center shrink-0">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <img src="/cipherx-logo.png" alt="CipherX" className="h-12 sm:h-14 w-auto" />
                </Link>
              </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <ThemeToggle />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                  </button>
                </div>
              </div>

              {/* Nav links */}
              <nav className="px-3 sm:px-4 py-3 sm:py-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 + 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        handleAnchorClick(e, link.href)
                        setIsOpen(false)
                      }}
                      className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-5 text-base sm:text-lg font-medium text-foreground hover:bg-secondary rounded-xl sm:rounded-2xl transition-colors"
                    >
                      {link.label}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer CTA */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 sm:pt-3">
                <Link
                  href="#contact"
                  onClick={(e) => {
                    handleAnchorClick(e, "#contact")
                    setIsOpen(false)
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 sm:py-4 bg-accent text-accent-foreground rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
