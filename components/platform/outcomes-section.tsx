"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Lock, Globe2, CreditCard, Code2, Palette, Sparkles } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06 },
  }),
}

const outcomes = [
  {
    icon: Shield,
    title: "Better business protection",
    description: "Reduce vulnerabilities and improve your cybersecurity posture.",
  },
  {
    icon: Zap,
    title: "More reliable daily operations",
    description: "Keep your systems, devices, and networks working with fewer interruptions.",
  },
  {
    icon: Lock,
    title: "Stronger infrastructure",
    description: "Build safer server, storage, backup, and network environments.",
  },
  {
    icon: Globe2,
    title: "Better online presence",
    description: "Launch a modern website that reflects your business and helps generate leads.",
  },
  {
    icon: CreditCard,
    title: "Easier customer access",
    description: "Set up booking systems, online payments, and digital services.",
  },
  {
    icon: Code2,
    title: "Smarter custom systems",
    description: "Build the applications your business or startup actually needs.",
  },
  {
    icon: Palette,
    title: "Better branding and visuals",
    description: "Improve how your business looks online and offline.",
  },
  {
    icon: Sparkles,
    title: "Smarter automation with AI",
    description: "Use AI tools to save time, improve customer support, and streamline tasks.",
  },
]

export function OutcomesSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What CipherX helps your business achieve
          </h2>
        </motion.div>

        {/* Outcomes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {outcomes.map((outcome, i) => {
            const Icon = outcome.icon
            return (
              <motion.div
                key={outcome.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="grovia-card grovia-card-hover p-6 flex flex-col gap-3"
              >
                <div className="grovia-inner-card w-11 h-11 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground text-base">{outcome.title}</h3>
                <p className="text-[13px] text-foreground/60 leading-relaxed">{outcome.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
