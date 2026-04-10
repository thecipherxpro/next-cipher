"use client"

import { motion } from "framer-motion"
import { ArrowRight, Package, Settings } from "lucide-react"
import Link from "next/link"

export function PackagesIntroSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grovia-card p-5 sm:p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3 sm:mb-4">
                Flexible Options
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-[1.15] tracking-tight mb-3 sm:mb-4">
                Packages and Custom Solutions
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-5 sm:mb-8">
                Start with a structured package or request a custom service plan based on your business size, goals, and budget. Our packages are designed to grow with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-xl text-sm font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
                >
                  <Package className="w-4 h-4" />
                  Compare Packages
                </Link>
                <Link
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-foreground/20 text-foreground rounded-xl text-sm font-semibold hover:border-foreground/40 active:scale-[0.98] transition-all"
                >
                  Ask Which Fits
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Package preview — stacked on mobile, row on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "Starter", desc: "Essential protection", price: "From $299/mo" },
                { name: "Growth", desc: "Full IT + Security", price: "From $599/mo" },
                { name: "Scale", desc: "Enterprise-ready", price: "Custom" },
              ].map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className={`p-4 rounded-xl border flex sm:flex-col items-start sm:items-center sm:text-center gap-3 sm:gap-0 ${i === 1 ? 'bg-accent/5 border-accent/30' : 'bg-white border-foreground/10'}`}
                >
                  <div className="flex-1 sm:mb-1">
                    <h3 className="font-bold text-foreground text-sm sm:text-base">{pkg.name}</h3>
                    <p className="text-xs text-foreground/50 sm:mt-1">{pkg.desc}</p>
                  </div>
                  <p className="text-sm font-semibold text-accent whitespace-nowrap">{pkg.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
