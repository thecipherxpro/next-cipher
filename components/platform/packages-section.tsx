"use client"

import { motion } from "framer-motion"
import { ArrowRight, Lock, Wrench, Globe, Smartphone } from "lucide-react"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
}

const packageGroups = [
  {
    icon: Lock,
    title: "Security Packages",
    packages: ["Starter Security", "Growth Security", "Business Security+"],
    cta: "See Security Packages",
    href: "/cybersecurity",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: Wrench,
    title: "IT Packages",
    packages: ["Startup IT", "Business IT", "Managed IT Complete"],
    cta: "See IT Packages",
    href: "/managed-it-support",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Globe,
    title: "Website Packages",
    packages: ["Launch Website", "Growth Website", "Business Presence Complete"],
    cta: "See Website Packages",
    href: "/website-development",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: Smartphone,
    title: "App & AI Packages",
    packages: ["MVP Starter", "Startup App Build", "Custom AI Build"],
    cta: "See App & AI Packages",
    href: "/ai-solutions",
    accent: "bg-primary/10 text-primary",
  },
]

const topBadges = ["Startup Friendly", "SMB Pricing", "Custom Available", "Growth Ready"]

export function PackagesSection() {
  return (
    <section id="packages" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
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
            Simple Packages
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Start with a package or request a custom solution built around your business needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-accent text-accent-foreground rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-md"
            >
              View Packages
            </Link>
            <Link
              href="#consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 border border-border text-foreground rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-secondary active:scale-[0.98] transition-all"
            >
              Get Custom Quote
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Package groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {packageGroups.map((group, i) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="group flex flex-col p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl sm:rounded-3xl border border-border bg-card hover:bg-secondary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 ${group.accent}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">{group.title}</h3>
                </div>

                <div className="flex flex-col gap-2.5 sm:gap-3 mb-5 sm:mb-6 md:mb-7 flex-1">
                  {group.packages.map((pkg, j) => (
                    <div key={pkg} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-background border border-border">
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-bold flex items-center justify-center shrink-0">{j + 1}</span>
                      <span className="text-sm sm:text-base text-foreground font-medium">{pkg}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={group.href}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-accent hover:underline group-hover:gap-3 transition-all"
                >
                  {group.cta}
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
