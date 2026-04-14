"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@/lib/gsap"
import gsap from "gsap"

const slides = [
  {
    eyebrow: "Protect, Support, and",
    titleAccent: "Grow Your Business",
    titleEnd: "Without Enterprise-Level Costs",
    subtitle: "CipherX helps small to mid-sized businesses in Toronto and the GTA stay secure, reduce downtime, build digital services, and modernize operations with affordable packages and custom solutions.",
    primaryCTA: "Get a Free Consultation",
    secondaryCTA: "Request a Security Breakdown",
    supportText: "For startups, small businesses, clinics, offices, retail, and growing companies across Toronto and the GTA.",
  },
]

export function HeroSection() {
  const slide = slides[0]
  const badgeRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const supportTextRef = useRef<HTMLParagraphElement>(null)
  const logoContainerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Clean entry animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } })

    // Staggered entrance from top
    tl.from(badgeRef.current, { opacity: 0, y: 20, duration: 0.5 }, 0)
      .from(headlineRef.current, { opacity: 0, y: 20, duration: 0.6 }, 0.1)
      .from(subtitleRef.current, { opacity: 0, y: 16, duration: 0.5 }, 0.2)
      .from(ctaRef.current, { opacity: 0, y: 16, duration: 0.5 }, 0.3)
      .from(supportTextRef.current, { opacity: 0, y: 12, duration: 0.5 }, 0.4)
      .from(logoContainerRef.current, { opacity: 0, y: 24, duration: 0.6 }, 0.2)
  }, [])

  return (
    <section className="relative flex flex-col overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-28 min-h-[70vh] md:min-h-[75vh]">
      {/* Lightweight CSS background - no canvas animations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-dot-pattern" />
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-teal-radial" />
        
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
      
      <div className="relative z-20 flex-1 flex items-center">
        <div className="w-full container-full-wide">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-20 w-full">

            {/* Text column */}
            <div className="relative z-30 flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:w-[60%] xl:w-[58%]">

              {/* Badge */}
              <div
                ref={badgeRef}
                className="inline-flex items-center gap-2 mb-5 sm:mb-6 bg-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm border border-border"
              >
                <span className="bg-accent text-accent-foreground text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full tracking-wide uppercase">
                  New
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground/70 pr-1">
                  Advanced threat protection
                </span>
              </div>

              {/* Headline */}
              <div 
                ref={headlineRef}
                className="w-full mb-5 sm:mb-6"
              >
                <h1 className="font-sans tracking-tight leading-[1.1]">
                  <span className="block font-normal text-foreground/70 text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 sm:mb-2">{slide.eyebrow}</span>
                  <span className="block font-extrabold text-accent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-1 sm:mb-2">{slide.titleAccent}</span>
                  <span className="block font-normal text-foreground/60 text-lg sm:text-xl md:text-2xl lg:text-3xl">{slide.titleEnd}</span>
                </h1>
              </div>

              {/* Sub-headline */}
              <p
                ref={subtitleRef}
                className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8"
              >
                {slide.subtitle}
              </p>

              {/* CTAs */}
              <div
                ref={ctaRef}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto"
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 bg-accent text-accent-foreground rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-md"
                >
                  {slide.primaryCTA}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 bg-white text-foreground rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-secondary active:scale-[0.98] transition-all border border-border"
                >
                  {slide.secondaryCTA}
                </Link>
              </div>

              {/* Support text */}
              <p
                ref={supportTextRef}
                className="text-xs sm:text-sm text-foreground/50 mt-6 sm:mt-8 max-w-md mx-auto lg:mx-0"
              >
                {slide.supportText}
              </p>
            </div>

            {/* Logo + Ribbon column */}
            <div
              ref={logoContainerRef}
              className="relative flex items-center justify-center mt-6 lg:mt-0 flex-1 h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72"
            >
              {/* Ribbon behind logo */}
              <div className="absolute -inset-20 sm:-inset-28 md:-inset-36 lg:-inset-32 xl:-inset-40 z-10 pointer-events-none select-none">
                <Image
                  src="/hero-ribbon.png"
                  alt=""
                  fill
                  className="object-cover object-center opacity-80"
                  aria-hidden
                  loading="eager"
                  priority
                />
              </div>

              {/* Radial glow - teal */}
              <div className="absolute inset-0 z-10 rounded-full blur-3xl opacity-30 pointer-events-none glow-teal" />

              {/* Logo */}
              <div ref={logoRef} className="relative z-20">
                <Image
                  src="/cipherx-logo.png"
                  alt="CipherX Security Shield"
                  width={360}
                  height={360}
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
