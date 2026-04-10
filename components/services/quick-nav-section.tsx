"use client"

import { motion } from "framer-motion"
import { Lock, Wrench, Globe, Smartphone, Code2, Palette, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  { icon: Lock, name: "Cybersecurity", href: "#cybersecurity", color: "bg-emerald-100 text-emerald-700" },
  { icon: Wrench, name: "Managed IT", href: "#managed-it", color: "bg-purple-100 text-purple-700" },
  { icon: Globe, name: "Website Development", href: "#websites", color: "bg-blue-100 text-blue-700" },
  { icon: Smartphone, name: "Mobile Apps", href: "#mobile-apps", color: "bg-orange-100 text-orange-700" },
  { icon: Code2, name: "Web Apps", href: "#web-apps", color: "bg-indigo-100 text-indigo-700" },
  { icon: Palette, name: "Graphic Design", href: "#design", color: "bg-pink-100 text-pink-700" },
  { icon: Sparkles, name: "AI Solutions", href: "#ai", color: "bg-lime-100 text-lime-700" },
]

export function QuickNavSection() {
  return (
    <section className="py-6 sm:py-10 bg-background border-b border-foreground/[0.06]">
      <div className="container-wide">
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Service navigation chips */}
          <div className="flex flex-wrap gap-2">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-foreground/10 bg-white hover:bg-secondary transition-all text-xs sm:text-sm font-medium text-foreground"
                  >
                    <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md ${service.color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </span>
                    {service.name}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center"
          >
            <Link
              href="#consultation"
              className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 bg-accent text-accent-foreground rounded-xl text-xs sm:text-sm font-semibold hover:opacity-90 transition-all"
            >
              Find the Right Service
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
