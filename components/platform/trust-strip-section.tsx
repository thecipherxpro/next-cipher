"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Award, Shield, Zap } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
}

const badges = [
  {
    icon: CheckCircle2,
    title: "Free service-based consultation",
    description: "No pressure, no sales pitch. Just guidance.",
  },
  {
    icon: Award,
    title: "Small business friendly pricing",
    description: "Affordable packages designed for growing companies.",
  },
  {
    icon: Shield,
    title: "Security-first approach",
    description: "Every solution built with protection in mind.",
  },
  {
    icon: Zap,
    title: "Custom and package-based solutions",
    description: "Choose what works for your stage and budget.",
  },
]

export function TrustStripSection() {
  return (
    <section className="relative py-8 bg-card border-y border-border">
      <div className="w-full container-full-wide">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 max-w-[684px] text-center text-sm text-muted-foreground sm:mb-8 sm:text-base md:mb-10 md:text-lg"
        >
          Built for Toronto and GTA small businesses that need reliable, affordable, and practical technology solutions.
        </motion.p>

        <div className="grid grid-cols-2 gap-0 md:grid-cols-4">
          {badges.map((badge, i) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
                className="flex flex-col items-center text-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl hover:bg-secondary/50 transition-colors"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0" />
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-foreground leading-tight">{badge.title}</h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed hidden sm:block">{badge.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
