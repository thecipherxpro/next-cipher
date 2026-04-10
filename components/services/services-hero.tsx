"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Users, Shield, Settings } from "lucide-react"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const badges = [
  { icon: MapPin, text: "Toronto & GTA Focused" },
  { icon: Users, text: "Small Business Friendly" },
  { icon: Shield, text: "Security-First" },
  { icon: Settings, text: "Custom & Package Options" },
]

export function ServicesHero() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-24 bg-gradient-to-b from-accent/5 to-background overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/50 mb-4 sm:mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Services</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.15] sm:leading-[1.1] tracking-tight mb-4 sm:mb-6"
          >
            Business Technology Services for Toronto and GTA Companies
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed mb-6 sm:mb-8 max-w-2xl"
          >
            CipherX helps small and mid-size businesses protect systems, solve IT problems, build stronger websites, launch applications, and improve operations with practical, affordable services.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10"
          >
            <Link
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 bg-accent text-accent-foreground rounded-xl text-sm sm:text-base font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
            >
              Book Free Consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 border border-foreground/20 text-foreground rounded-xl text-sm sm:text-base font-semibold hover:border-foreground/40 active:scale-[0.98] transition-all"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Badges */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="flex flex-wrap gap-2 sm:gap-3"
          >
            {badges.map((badge) => {
              const Icon = badge.icon
              return (
                <div
                  key={badge.text}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-foreground/10 rounded-full text-xs sm:text-sm text-foreground/70"
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                  {badge.text}
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-20">
        <div className="absolute top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 sm:right-40 w-32 sm:w-48 h-32 sm:h-48 bg-accent/10 rounded-full blur-2xl" />
      </div>
    </section>
  )
}
