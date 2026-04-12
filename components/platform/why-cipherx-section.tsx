"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  SectionBadge,
  SectionLead,
  SectionTitle,
} from "@/components/ui/section-heading"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const problems = [
  {
    number: "01",
    title: "Security Gaps",
    description: "Weak infrastructure, poor backups, and hidden vulnerabilities can put your business at risk.",
  },
  {
    number: "02",
    title: "Costly IT Problems",
    description: "Recurring IT issues waste time, interrupt work, and hurt productivity.",
  },
  {
    number: "03",
    title: "Weak Online Presence",
    description: "An outdated website or missing digital systems can cost you customers.",
  },
  {
    number: "04",
    title: "Too Many Vendors",
    description: "Using separate providers for IT, security, development, and design creates delays and confusion.",
  },
]

const benefits = [
  {
    title: "1 Team",
    description: "For security, IT, websites, and digital systems.",
  },
  {
    title: "Less Delay",
    description: "Fewer vendors, fewer gaps, and clearer execution.",
  },
]

export function WhyBusinessesNeedSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-accent/5 to-background">
      <div className="w-full container-full-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge align="left" className="mb-4 sm:mb-5">
                Problem / value
              </SectionBadge>
            </motion.div>

            <motion.div variants={fadeUp} custom={1}>
              <SectionTitle align="left" className="mb-5 max-w-lg sm:mb-6">
                Too Many Businesses Are Still Left Vulnerable
              </SectionTitle>
            </motion.div>

            <motion.div variants={fadeUp} custom={2}>
              <SectionLead align="left" className="mt-3 max-w-lg mb-5 sm:mt-4 sm:mb-6">
                Many small businesses delay proper security, IT support, websites, and digital systems because
                providers are too costly, too limited, or too fragmented. That leads to downtime, weak protection,
                outdated systems, and missed growth.
              </SectionLead>
            </motion.div>

            {/* Value prop */}
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-8 sm:mb-10"
            >
              CipherX gives your business one team to help secure, support, and build what you actually need.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-accent text-accent-foreground rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-md"
              >
                Get a Business Consultation
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 border border-border text-foreground rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-secondary active:scale-[0.98] transition-all"
              >
                View All Services
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>

            {/* Benefit cards */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="grid grid-cols-2 gap-4 sm:gap-5"
            >
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-4 sm:p-5 md:p-6 border border-border rounded-xl sm:rounded-2xl bg-white"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-snug">{benefit.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column: Problem cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative flex flex-col gap-5 sm:gap-6 lg:gap-7"
          >
            {/* Vertical line indicator */}
            <div className="absolute left-7 sm:left-8 lg:left-9 top-4 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden md:block" />

            {problems.map((problem, index) => (
              <motion.div
                key={problem.number}
                variants={fadeUp}
                custom={index + 6}
                className="relative flex gap-4 sm:gap-5 lg:gap-6 group"
              >
                {/* Numbered circle */}
                <div className="relative flex-shrink-0 pt-0.5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-accent flex items-center justify-center font-bold text-base sm:text-lg lg:text-xl text-accent-foreground shadow-lg flex-shrink-0">
                    {problem.number}
                  </div>
                </div>

                {/* Card content */}
                <div className="flex-1 pt-1 sm:pt-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
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
