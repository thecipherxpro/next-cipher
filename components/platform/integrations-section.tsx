"use client"

import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const integrations = [
  "Slack", "Microsoft", "Google", "Okta", "AWS", "Azure",
  "Splunk", "Datadog", "PagerDuty", "Jira", "ServiceNow", "Zendesk",
]

export function IntegrationsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-5 text-foreground tracking-[-0.02em]">
              Powerful integrations
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Seamlessly integrate with your favorite tools to streamline workflows and keep everything in sync.
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity mb-8"
            >
              Get started
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="space-y-3.5">
              {[
                "Explore 50+ supported integrations",
                "Securely link your account",
                "Sync and streamline your workflow",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[15px] text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Integration grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grovia-card p-5 sm:p-6"
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {integrations.map((name, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="aspect-square grovia-inner-card flex items-center justify-center hover:shadow-soft-lg transition-shadow group cursor-default"
                >
                  <span className="text-[11px] font-semibold text-muted-foreground group-hover:text-foreground transition-colors text-center px-1">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-5">
              + many more integrations
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
