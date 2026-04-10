"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Globe, Smartphone, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
}

const useCases = [
  {
    icon: ShieldCheck,
    title: "Secure Office Setup",
    description: "Devices, monitoring, backup, malware protection, and network support.",
    href: "#consultation",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: Globe,
    title: "Business Website Launch",
    description: "Modern website, forms, booking, payments, and local SEO structure.",
    href: "#consultation",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Smartphone,
    title: "Custom App Build",
    description: "Patient apps, startup apps, portals, internal tools, and e-commerce systems.",
    href: "#consultation",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: Sparkles,
    title: "AI Workflow Setup",
    description: "Assistants, estimate tools, chat systems, and data-based automations.",
    href: "#consultation",
    accent: "bg-primary/10 text-primary",
  },
]

const topBadges = ["Office Setup", "Website Launch", "App Build", "AI Automation"]

export function UseCaseSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="w-full container-full-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-5 sm:mb-6">
            {topBadges.map((b) => (
              <span key={b} className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-secondary text-muted-foreground border border-border">
                {b}
              </span>
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-4 sm:mb-5">
            What We Can Help Build
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8">
            CipherX helps businesses solve real-world problems with practical systems and support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-accent text-accent-foreground rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-md"
            >
              See Solutions
            </Link>
            <Link
              href="#consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 border border-border text-foreground rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-secondary active:scale-[0.98] transition-all"
            >
              Talk About My Project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {useCases.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="group flex flex-col p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl border border-border bg-card hover:bg-secondary/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 ${item.accent}`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1 mb-5 sm:mb-6">{item.description}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-accent hover:underline group-hover:gap-3 transition-all"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
