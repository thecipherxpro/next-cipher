"use client"

import { ArrowRight, Lock, Wrench, Globe, Smartphone } from "lucide-react"
import Link from "next/link"
import {
  SectionLead,
  SectionTitle,
  SectionBadge,
  sectionHeadingSpacing,
} from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

const packageGroups = [
  {
    icon: Lock,
    title: "Security Packages",
    packages: ["Starter Security", "Growth Security", "Business Security+"],
    cta: "See Security Packages",
    href: "/cybersecurity",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: Wrench,
    title: "IT Packages",
    packages: ["Startup IT", "Business IT", "Managed IT Complete"],
    cta: "See IT Packages",
    href: "/managed-it-support",
    accent: "bg-section-coral/10 text-section-coral",
  },
  {
    icon: Globe,
    title: "Website Packages",
    packages: ["Launch Website", "Growth Website", "Business Presence Complete"],
    cta: "See Website Packages",
    href: "/website-development",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: Smartphone,
    title: "App & AI Packages",
    packages: ["MVP Starter", "Startup App Build", "Custom AI Build"],
    cta: "See App & AI Packages",
    href: "/ai-solutions",
    accent: "bg-section-coral/10 text-section-coral",
  },
]

export function PackagesSection() {
  return (
    <section id="packages" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="w-full container-full-wide">
        {/* Header */}
        <div className={cn(sectionHeadingSpacing, "text-center")}>
          <SectionBadge>Packages</SectionBadge>
          <SectionTitle before="Simple " highlight="Packages" />
          <SectionLead className="mb-7 sm:mb-9">
            Start with a package or request a custom solution built around your business needs.
          </SectionLead>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-section-coral rounded-xl transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              View Packages
            </Link>
            <Link
              href="#consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-foreground border border-border bg-background rounded-xl transition-colors hover:bg-secondary active:scale-[0.98]"
            >
              Get Custom Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Package groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {packageGroups.map((group) => {
            const Icon = group.icon
            return (
              <div
                key={group.title}
                className="flex flex-col rounded-2xl border border-border/60 bg-card p-6 sm:p-7 transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${group.accent}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground">{group.title}</h3>
                </div>

                <div className="mb-6 flex flex-1 flex-col gap-2">
                  {group.packages.map((pkg, j) => (
                    <div key={pkg} className="flex items-start gap-3 rounded-lg bg-background/60 px-4 py-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                        {j + 1}
                      </span>
                      <span className="text-sm text-foreground">{pkg}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={group.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  {group.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
