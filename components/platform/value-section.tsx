"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Wrench, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const pillars = [
  {
    icon: ShieldCheck,
    title: "Protect",
    description: "Cybersecurity, testing, backup, malware cleanup, and secure infrastructure.",
    cta: "Explore Security",
    href: "/cybersecurity",
    accent: "bg-accent/10 text-accent",
    border: "border-accent/20",
  },
  {
    icon: Wrench,
    title: "Support",
    description: "Managed IT, software setup, repairs, monitoring, and network help.",
    cta: "Explore IT Support",
    href: "/managed-it-support",
    accent: "bg-blue-100 text-blue-600",
    border: "border-blue-200/60",
  },
  {
    icon: Rocket,
    title: "Build",
    description: "Websites, apps, online systems, branding, and AI solutions.",
    cta: "Explore Digital Services",
    href: "/services",
    accent: "bg-orange-100 text-orange-600",
    border: "border-orange-200/60",
  },
]

const badges = ["Security", "IT Support", "Digital Growth"]

export function ValueSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-background">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {badges.map((b) => (
              <span key={b} className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-foreground/70 border border-foreground/[0.07]">
                {b}
              </span>
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-[1.15] sm:leading-[1.1] tracking-tight mb-4">
            Protect. Support. Build.
          </h2>
          <p className="text-sm sm:text-base text-foreground/60 max-w-xl mx-auto leading-relaxed">
            Everything CipherX offers fits into three simple business goals.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-10">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className={`group relative flex flex-col p-6 sm:p-7 rounded-2xl sm:rounded-3xl border ${pillar.border} bg-card hover:bg-secondary/40 transition-all duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${pillar.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed flex-1 mb-6">{pillar.description}</p>
                <Link
                  href={pillar.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70 hover:text-accent transition-colors group-hover:gap-2.5"
                >
                  {pillar.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl text-sm font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
          >
            View All Services
          </Link>
          <Link
            href="#consultation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground/20 text-foreground rounded-xl text-sm font-semibold hover:border-foreground/40 active:scale-[0.98] transition-all"
          >
            Start with a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
