"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HowWeHelpSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3 sm:mb-4">
              How We Help
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-[1.15] sm:leading-[1.1] tracking-tight">
              Choose the Service That Fits Your Business
            </h2>
          </motion.div>

          {/* Right: Description + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed mb-5 sm:mb-8">
              Whether you need protection, daily IT support, a better online presence, or a custom digital solution, CipherX gives you one place to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-xl text-sm font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
              >
                Get a Service Recommendation
              </Link>
              <Link
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-foreground/20 text-foreground rounded-xl text-sm font-semibold hover:border-foreground/40 active:scale-[0.98] transition-all"
              >
                Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
