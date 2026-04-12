"use client"

import { ArrowRight, TriangleAlert } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
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

const problems = [
  {
    number: "01",
    title: "Security Gaps",
    description:
      "Weak infrastructure, poor backups, and hidden vulnerabilities put your business at risk every day.",
  },
  {
    number: "02",
    title: "Costly IT Downtime",
    description:
      "Recurring IT issues waste time, interrupt work, and quietly erode your bottom line.",
  },
  {
    number: "03",
    title: "Weak Online Presence",
    description:
      "An outdated website or missing digital systems actively costs you customers and credibility.",
  },
  {
    number: "04",
    title: "Too Many Vendors",
    description:
      "Juggling separate providers for IT, security, and development creates delays, gaps, and confusion.",
  },
]

const stats = [
  {
    value: "1 Team",
    label: "Security, IT, websites & digital systems — all under one roof.",
  },
  {
    value: "No Gaps",
    label: "Fewer handoffs, clearer accountability, faster execution.",
  },
]

export function WhyBusinessesNeedSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-background overflow-hidden">
      {/* Subtle background tint */}
      <div className="pointer-events-none absolute inset-0 bg-primary/[0.03]" aria-hidden />

      <div className="container-full-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">

          {/* ── Left column ───────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge align="left">Problem / Value</SectionBadge>
            </motion.div>

            <motion.div variants={fadeUp} custom={1}>
              <SectionTitle
                align="left"
                className="mt-1 max-w-[520px] text-balance"
              >
                Too Many Businesses Are Left Vulnerable
              </SectionTitle>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-5 max-w-[480px] text-sm sm:text-[0.9375rem] leading-relaxed text-muted-foreground"
            >
              Most small businesses delay proper security, IT support, and digital systems because providers are
              too costly, too limited, or too fragmented — leading to downtime, weak protection, and missed growth.
            </motion.p>

            {/* Value statement */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-6 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 px-5 py-4"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M2 5.5L4.2 7.5L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
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
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="flex flex-col gap-1.5 rounded-xl border border-border bg-card p-5 sm:p-6"
                >
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {s.value}
                  </span>
                  <span className="text-xs sm:text-sm leading-snug text-muted-foreground">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column: Problems ────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative flex flex-col gap-0"
          >
            {/* Timeline rail */}
            <div
              className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-border via-border/60 to-transparent hidden sm:block"
              aria-hidden
            />

            {problems.map((problem, index) => (
              <motion.div
                key={problem.number}
                variants={fadeUp}
                custom={index + 4}
                className="relative flex gap-4 sm:gap-6 pb-6 last:pb-0"
              >
                {/* Number bubble */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-card text-xs font-bold text-muted-foreground">
                    {problem.number}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-border bg-card p-5 sm:p-6 transition-colors hover:border-primary/30 hover:bg-primary/[0.02]">
                  <div className="flex items-start gap-3 mb-2">
                    <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-section-coral" aria-hidden />
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground">
                      {problem.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-[0.9375rem] leading-relaxed text-muted-foreground pl-7">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
