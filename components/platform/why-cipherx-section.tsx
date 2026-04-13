"use client"

import {
  ArrowRight,
  ShieldAlert,
  ServerCrash,
  Globe,
  Layers,
  CheckCircle2,
  Users,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import {
  SectionBadge,
  SectionTitle,
} from "@/components/ui/section-heading"

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
}

const problems: { number: string; icon: LucideIcon; title: string; description: string }[] = [
  {
    number: "01",
    icon: ShieldAlert,
    title: "Security Gaps",
    description:
      "Weak infrastructure, poor backups, and hidden vulnerabilities put your business at risk every day.",
  },
  {
    number: "02",
    icon: ServerCrash,
    title: "Costly IT Downtime",
    description:
      "Recurring IT issues waste time, interrupt work, and quietly erode your bottom line.",
  },
  {
    number: "03",
    icon: Globe,
    title: "Weak Online Presence",
    description:
      "An outdated website or missing digital systems actively costs you customers and credibility.",
  },
  {
    number: "04",
    icon: Layers,
    title: "Too Many Vendors",
    description:
      "Juggling separate providers for IT, security, and development creates delays, gaps, and confusion.",
  },
]

const stats = [
  {
    icon: Users,
    value: "1 Team",
    label: "Security, IT, websites & digital systems — all under one roof.",
  },
  {
    icon: CheckCircle2,
    value: "No Gaps",
    label: "Fewer handoffs, clearer accountability, faster execution.",
  },
]

export function WhyBusinessesNeedSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-primary/[0.025]" aria-hidden />

      <div className="container-full-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">

          {/* ── Left column ───────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col lg:sticky lg:top-24"
          >
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge align="left">Problem / Value</SectionBadge>
            </motion.div>

            <motion.div variants={fadeUp} custom={1}>
              <SectionTitle align="left" className="mt-2 max-w-[500px] text-balance">
                Too Many Businesses Are Left Vulnerable
              </SectionTitle>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-4 max-w-[460px] text-sm sm:text-[0.9375rem] leading-relaxed text-muted-foreground"
            >
              Most small businesses delay proper security, IT support, and digital systems because providers are
              too costly, too limited, or too fragmented — leading to downtime, weak protection, and missed growth.
            </motion.p>

            {/* Value callout */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-6 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 px-5 py-4"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <p className="text-sm sm:text-[0.9375rem] font-semibold text-foreground leading-snug">
                CipherX gives your business one team to secure, support, and build exactly what you need.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-tertiary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 active:scale-[0.98]"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary active:scale-[0.98]"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Stat cards */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="mt-10 grid grid-cols-2 gap-3 sm:gap-4"
            >
              {stats.map((s) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.value}
                    className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 sm:p-6"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                        {s.value}
                      </span>
                      <span className="text-xs sm:text-sm leading-snug text-muted-foreground">
                        {s.label}
                      </span>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* ── Right column: Vertical stepper ───────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative flex flex-col"
          >
            {problems.map((problem, index) => {
              const Icon = problem.icon
              const isLast = index === problems.length - 1
              return (
                <motion.div
                  key={problem.number}
                  variants={fadeUp}
                  custom={index + 4}
                  className="relative flex gap-5"
                >
                  {/* Stepper rail column */}
                  <div className="relative flex flex-col items-center">
                    {/* Icon bubble */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-card shadow-soft">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                    </div>
                    {/* Connector line */}
                    {!isLast && (
                      <div className="mt-1 w-px flex-1 bg-gradient-to-b from-border to-border/20 mb-1" aria-hidden />
                    )}
                  </div>

                  {/* Card content */}
                  <div className={`flex-1 pb-6 ${isLast ? "pb-0" : ""}`}>
                    {/* Step label + number */}
                    <div className="flex items-center gap-2 mb-2 mt-3">
                      <span className="step-number">Step {problem.number}</span>
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 transition-all hover:border-primary/25 hover:shadow-soft">
                      <h3 className="text-base sm:text-[1.0625rem] font-bold tracking-tight text-foreground mb-1.5">
                        {problem.title}
                      </h3>
                      <p className="text-sm sm:text-[0.9375rem] leading-relaxed text-muted-foreground">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
