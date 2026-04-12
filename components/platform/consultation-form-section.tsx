"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  SectionBadge,
  SectionLead,
  SectionTitle,
} from "@/components/ui/section-heading"

const included = [
  "Business needs review",
  "Basic security discussion",
  "IT setup review",
  "Service recommendation",
  "Package or custom solution guidance",
]

export function ConsultationFormSection() {
  return (
    <section id="consultation" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-card">
      <div className="w-full container-full-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center">

          {/* Left: heading + included list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge align="left" className="mb-4 sm:mb-5">
              Free consultation
            </SectionBadge>
            <SectionTitle before="Free " highlight="Consultation" align="left" />
            <SectionLead align="left" className="mb-8 mt-4 max-w-lg sm:mb-10 sm:mt-5">
              Tell us what your business needs and we&apos;ll recommend the right next step.
            </SectionLead>
            <div className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl border border-border bg-background">
              <p className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">What&apos;s included:</p>
              {included.map((item) => (
                <div key={item} className="flex items-center gap-3 sm:gap-4">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5 sm:gap-6 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-border bg-background"
          >
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3">Ready to get started?</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                No pressure. Clear recommendations. Built for Toronto and GTA businesses.
              </p>
            </div>
            <Link
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-accent text-accent-foreground rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-md"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 border border-border text-foreground rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-secondary active:scale-[0.98] transition-all"
            >
              Request a Breakdown
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground text-center">No spam. No pushy sales calls. Just practical advice.</p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
