"use client"

import { ArrowRight, Grip, Eye } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function ProductsSection() {
  return (
    <section id="solutions" className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="w-full container-full-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-3 sm:mb-4 text-foreground">
            Security Solutions
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
            Enterprise-grade security tools designed to protect your business from evolving cyber threats.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="space-y-3 sm:space-y-4">
          {/* Penetration Testing Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden min-h-[350px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px]"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
                alt="Penetration Testing"
                fill
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col p-5 sm:p-6 md:p-8 lg:p-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-auto">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground">Penetration Testing</h3>
                <Grip className="w-5 sm:w-6 h-5 sm:h-6 text-muted-foreground" />
              </div>
              
              {/* Bottom content */}
              <div className="mt-auto">
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 max-w-md">
                  Simulated cyber attacks to identify vulnerabilities in your systems before real attackers do.
                </p>
                
                <button className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-accent rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-accent/90 active:scale-95 transition-all">
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-accent-foreground" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Two-column layout for tablet+ */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Security Audits Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[380px]"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80"
                  alt="Security Audits"
                  fill
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col p-5 sm:p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-auto">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-foreground">Security Audits</h3>
                  <Grip className="w-5 h-5 text-muted-foreground" />
                </div>
                
                {/* Bottom content */}
                <div className="mt-auto">
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-sm">
                    Comprehensive assessment of your security posture with actionable recommendations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Compliance Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[380px]"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
                  alt="Compliance & Risk"
                  fill
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col p-5 sm:p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-auto">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-foreground">Compliance & Risk</h3>
                  <Grip className="w-5 h-5 text-muted-foreground" />
                </div>
                
                {/* Bottom content */}
                <div className="mt-auto">
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-sm">
                    HIPAA, PCI-DSS, SOC 2, GDPR compliance solutions with ongoing monitoring.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 24/7 Monitoring Card - Accent color */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-accent rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-5 sm:p-6 md:p-8 lg:p-10">
              {/* Header */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-accent-foreground mb-2 sm:mb-4">
                  24/7 Threat Monitoring
                </h3>
                <p className="text-sm sm:text-base text-accent-foreground/80 max-w-lg">
                  Continuous surveillance of your network and systems to detect and respond to threats in real-time. Our SOC team monitors your infrastructure around the clock.
                </p>
              </div>
              
              {/* Image */}
              <div className="relative aspect-[16/9] sm:aspect-[2/1] md:aspect-[5/2] w-full bg-background rounded-lg sm:rounded-xl overflow-hidden my-2 sm:my-4">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="24/7 Monitoring Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Footer */}
              <div className="flex items-center justify-between mt-2 sm:mt-4">
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-foreground/20 rounded-lg flex items-center justify-center hover:bg-accent-foreground/30 transition-colors">
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-accent-foreground" />
                </button>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 sm:w-5 h-4 sm:h-5 text-accent-foreground/60" />
                  <span className="text-xs sm:text-sm text-accent-foreground/80">real-time monitoring</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
