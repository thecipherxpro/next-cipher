"use client"

import { Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { SectionHeader, sectionHeadingSpacing } from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    tagline: "For early-stage teams",
    price: 24,
    features: [
      "Access to core features",
      "Basic performance reporting",
      "Email support",
      "Strategy onboarding guide",
      "Monthly check-in summary",
    ],
    popular: false,
  },
  {
    name: "Growth",
    tagline: "Most popular",
    price: 49,
    features: [
      "Everything in Starter",
      "Advanced threat detection",
      "Priority support",
      "Weekly security reports",
      "Custom integrations",
      "Team collaboration tools",
    ],
    popular: true,
  },
  {
    name: "Scale",
    tagline: "For fast-scaling teams",
    price: 99,
    features: [
      "Everything in Growth",
      "Dedicated account manager",
      "24/7 SOC monitoring",
      "Custom compliance reports",
      "API access",
      "On-site training",
      "SLA guarantee",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container-wide">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(sectionHeadingSpacing, "text-center")}
        >
          <SectionHeader
            badge="Pricing plans"
            titleAs="h1"
            titleBefore="Transparent Pricing,"
            titleHighlight="No Surprises"
            description="Clear and competitive pricing with no hidden fees. Choose the plan that fits your needs."
          />
        </motion.div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative grovia-card p-6 sm:p-8 flex flex-col ${
                plan.popular
                  ? "ring-2 ring-foreground/10"
                  : ""
              }`}
            >
              {/* Popular pill — sits inside the card top */}
              {plan.popular && (
                <span className="self-start mb-4 px-3 py-1 bg-foreground text-background text-[11px] font-semibold rounded-full tracking-wide">
                  Most popular
                </span>
              )}

              {/* Tagline */}
              <p className="text-[12px] font-medium text-muted-foreground/60 uppercase tracking-widest mb-1.5">
                {plan.tagline}
              </p>

              {/* Plan name */}
              <h3 className="text-xl font-semibold text-foreground mb-4">{plan.name}</h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold text-foreground tracking-tight">${plan.price}</span>
                <span className="text-[13px] text-muted-foreground">/ mo</span>
              </div>

              {/* CTA */}
              <Link
                href="#contact"
                className={`block w-full text-center py-3.5 rounded-2xl text-[14px] font-medium transition-all mb-7 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-foreground hover:bg-secondary/70"
                }`}
              >
                Schedule a demo
              </Link>

              {/* Divider */}
              <div className="h-px bg-border/50 mb-6" />

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[13.5px]">
                    <div className="w-4 h-4 rounded-full bg-accent/12 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
