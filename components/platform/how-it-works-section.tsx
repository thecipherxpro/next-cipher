"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, MessageSquare, Lightbulb, Rocket } from "lucide-react"
import {
  SectionBadge,
  SectionTitle,
  SectionLead,
} from "@/components/ui/section-heading"

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Choose Your Service",
    description: "Select the service you need through our free consultation form — no commitment required.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Free Consultation",
    description: "We review your business needs, current setup, and challenges, then recommend the best path forward.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Clear Solution",
    description: "We provide a custom plan or recommend the most suitable package for your stage and budget.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Build & Grow",
    description: "We handle setup, implementation, ongoing support, optimization, and long-term growth.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container-wide">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16 max-w-2xl"
        >
          <SectionBadge align="left">How it works</SectionBadge>
          <SectionTitle align="left" className="mt-1">
            Simple Steps to Get Started
          </SectionTitle>
          <SectionLead align="left" className="mt-4 max-w-xl">
            Getting started with CipherX is simple. We begin by understanding your business, your risks, your goals, and the service you need most.
          </SectionLead>
        </motion.div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

          {/* Desktop connector line */}
          <div
            className="pointer-events-none absolute top-[2.375rem] left-[calc(12.5%+1.25rem)] right-[calc(12.5%+1.25rem)] hidden h-px bg-border lg:block"
            aria-hidden
          />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                className="relative flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-7 gap-5 hover:border-primary/30 hover:shadow-soft transition-all"
              >
                {/* Icon + step number row */}
                <div className="flex items-center justify-between">
                  {/* Icon bubble */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  </div>
                  {/* Step number */}
                  <span className="text-xs font-bold tracking-widest text-muted-foreground/50 uppercase">
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base sm:text-[1.0625rem] font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-sm text-muted-foreground leading-relaxed border-t border-border pt-8 max-w-2xl"
        >
          Whether you need a quick fix, full business setup, or long-term support — CipherX can guide the process from start to finish.
        </motion.p>
      </div>
    </section>
  )
}
