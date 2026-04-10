"use client"

import { ArrowRight, Shield, Users, Building } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

function UptimeIcon() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 sm:w-16 h-18 sm:h-20 border-2 border-border rounded-lg p-1.5 flex flex-col justify-end relative">
        <Shield className="w-8 sm:w-10 h-8 sm:h-10 text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="space-y-0.5 sm:space-y-1 mt-auto">
          <div className="h-2.5 sm:h-3 bg-accent rounded-sm" />
          <div className="h-2.5 sm:h-3 bg-accent rounded-sm" />
          <div className="h-2.5 sm:h-3 bg-accent rounded-sm" />
          <div className="h-2.5 sm:h-3 bg-muted rounded-sm" />
        </div>
      </div>
    </div>
  )
}

function PartnerIcon() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-secondary rounded-lg flex items-center justify-center">
        <Building className="w-5 sm:w-6 h-5 sm:h-6 text-muted-foreground/50" />
      </div>
      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-secondary rounded-lg flex items-center justify-center">
        <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-muted-foreground/50" />
      </div>
      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-secondary rounded-lg flex items-center justify-center">
        <Users className="w-5 sm:w-6 h-5 sm:h-6 text-muted-foreground/50" />
      </div>
      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-secondary rounded-lg flex items-center justify-center">
        <Building className="w-5 sm:w-6 h-5 sm:h-6 text-muted-foreground/50" />
      </div>
    </div>
  )
}

export function AnalyticsSection() {
  return (
    <section id="analytics" className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="w-full container-full-wide">
        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {/* Security Uptime card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center min-h-[220px] sm:min-h-[260px] md:min-h-[280px]"
          >
            <div className="px-3 sm:px-4 py-1 sm:py-1.5 bg-secondary rounded-full text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
              Security Uptime
            </div>
            <UptimeIcon />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-medium text-foreground"
            >
              99.9%
            </motion.div>
          </motion.div>

          {/* Trusted Partners card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center min-h-[220px] sm:min-h-[260px] md:min-h-[280px]"
          >
            <div className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 text-center">
              Trusted<br />Partners
            </div>
            <PartnerIcon />
          </motion.div>
        </div>

        {/* Track Record */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-3 sm:mb-4"
        >
          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6">
              Our Track Record
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">200+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Clients Protected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">0</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Security Breaches</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Monitoring</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center py-8 sm:py-10 lg:py-12"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 sm:mb-8">
            See why businesses trust us
          </h3>
          <Link 
            href="#testimonials"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 md:py-5 bg-accent text-accent-foreground rounded-full text-sm sm:text-base lg:text-lg font-medium hover:bg-accent/90 active:scale-[0.98] transition-all w-full sm:w-auto max-w-md"
          >
            View Testimonials
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
