import { MessageSquare, ScanSearch, ClipboardList, Wrench, ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  SectionBadge,
  SectionLead,
  SectionTitle,
  sectionHeadingSpacing,
} from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Talk",
    description: "We learn about your business, your goals, and the challenges you face right now.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Review",
    description: "We identify gaps, risks, and missing systems that could be holding you back.",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "Recommend",
    description: "We match you with the right package or build a custom solution for your stage and budget.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Deliver",
    description: "We build, secure, support, and continuously improve your systems over time.",
    icon: Wrench,
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="w-full container-full-wide">

        {/* Header */}
        <div className={cn(sectionHeadingSpacing, "text-center")}>
          <SectionBadge>Our process</SectionBadge>
          <SectionTitle before="How It " highlight="Works" />
          <SectionLead className="mb-7 max-w-xl sm:mb-9">
            We keep the process simple — from first contact to full delivery.
          </SectionLead>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-tertiary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 active:scale-[0.98]"
          >
            Start the Process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">

          {/* Desktop connector line */}
          <div
            className="pointer-events-none absolute top-[2.375rem] left-[calc(12.5%+1.25rem)] right-[calc(12.5%+1.25rem)] hidden h-px bg-border lg:block"
            aria-hidden
          />

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-7 transition-colors hover:border-primary/30"
              >
                {/* Icon + step number row */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-muted-foreground/50 uppercase">
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base sm:text-[1.0625rem] font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
