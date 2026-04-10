"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function FinalCTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-foreground text-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3 sm:mb-4">
            Ready to Get Started?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] sm:leading-[1.1] tracking-tight mb-4 sm:mb-6 max-w-3xl mx-auto">
            Start with the Right Service
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-background/70 leading-relaxed mb-7 sm:mb-10 max-w-2xl mx-auto">
            From cybersecurity and IT to websites, apps, design, and AI, CipherX helps Toronto and GTA businesses move forward with practical solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="#consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-accent text-accent-foreground rounded-xl text-sm sm:text-base font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 border border-background/30 text-background rounded-xl text-sm sm:text-base font-semibold hover:border-background/60 active:scale-[0.98] transition-all"
            >
              <Phone className="w-4 h-4" />
              View Contact Page
            </Link>
          </div>

          {/* Trust line */}
          <p className="text-xs sm:text-sm text-background/50 mt-6 sm:mt-8">
            Trusted by 100+ Toronto and GTA businesses
          </p>
        </motion.div>
      </div>
    </section>
  )
}
