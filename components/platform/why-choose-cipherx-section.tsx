"use client"

import { motion } from "framer-motion"
import { DollarSign, Users, MessageSquare, Sliders, ArrowRight } from "lucide-react"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
}

const keyPoints = [
  {
    icon: DollarSign,
    title: "Affordable Packages",
    description: "Built for startups, small businesses, and growing teams.",
  },
  {
    icon: Users,
    title: "One Partner",
    description: "Work with one team for security, IT, websites, apps, and AI.",
  },
  {
    icon: MessageSquare,
    title: "Practical Recommendations",
    description: "Clear advice without confusing technical language.",
  },
  {
    icon: Sliders,
    title: "Flexible Solutions",
    description: "Choose preset packages or custom plans.",
  },
]

const topBadges = ["Affordable Options", "One Team", "Security First", "Local Focus"]

export function WhyChooseCipherXSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-card">
      <div className="w-full container-full-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* Left: heading + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-5 sm:mb-6">
              {topBadges.map((b) => (
                <span key={b} className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-background text-muted-foreground border border-border">
                  {b}
                </span>
              ))}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-4 sm:mb-5">
              Why Choose CipherX
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-lg">
              We make security, IT, and digital growth more practical for Toronto and GTA small businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-accent text-accent-foreground rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-md"
              >
                Why Businesses Choose Us
              </Link>
              <Link
                href="#consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 border border-border text-foreground rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-secondary active:scale-[0.98] transition-all"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right: key point cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {keyPoints.map((point, i) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={point.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-border bg-background hover:bg-secondary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground">{point.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{point.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
