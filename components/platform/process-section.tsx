"use client"

import { motion } from "framer-motion"
import { MessageSquare, Search, ClipboardList, Wrench, ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  SectionBadge,
  SectionLead,
  SectionTitle,
  sectionHeadingSpacing,
} from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "1",
    title: "Talk",
    description: "We learn about your business and goals.",
    icon: MessageSquare,
  },
  {
    number: "2",
    title: "Review",
    description: "We identify gaps, risks, or missing systems.",
    icon: Search,
  },
  {
    number: "3",
    title: "Recommend",
    description: "We match you with the right package or custom solution.",
    icon: ClipboardList,
  },
  {
    number: "4",
    title: "Deliver",
    description: "We build, secure, support, and improve your systems.",
    icon: Wrench,
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="w-full container-full-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(sectionHeadingSpacing, "text-center")}
        >
          <SectionBadge>Our process</SectionBadge>
          <SectionTitle before="How It " highlight="Works" />
          <SectionLead className="mb-6 max-w-xl sm:mb-8">
            We keep the process simple from first contact to final setup.
          </SectionLead>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-accent text-accent-foreground rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-md"
          >
            Start the Process
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="relative flex flex-col p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl border border-border bg-card"
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent text-accent-foreground text-sm sm:text-base font-bold flex items-center justify-center shrink-0">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>

                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 z-10">
                    <ArrowRight className="w-5 h-5 text-border" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
