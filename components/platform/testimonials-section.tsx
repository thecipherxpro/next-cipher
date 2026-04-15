"use client"

import { motion } from "framer-motion"
import { SectionBadge, SectionTitle, SectionLead, sectionHeadingSpacing } from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote: "CipherX helped us streamline our operations and scale faster than we imagined. Their mix of strategy and execution is unmatched.",
    author: "Talia Smith",
    role: "Head of Product",
    company: "Forma",
    initials: "TS",
    color: "from-blue-200/80 to-purple-200/80",
  },
  {
    quote: "Working with CipherX felt like having an extension of our team. They understood our challenges and delivered real, measurable results.",
    author: "Jordan Johnson",
    role: "COO",
    company: "Metricon",
    initials: "JJ",
    color: "from-teal-200/80 to-cyan-200/80",
  },
  {
    quote: "From the first meeting, CipherX brought clarity and momentum to our security strategy. We have seen a major improvement in performance.",
    author: "Samuel Torres",
    role: "Founder",
    company: "Bloomtech",
    initials: "ST",
    color: "from-orange-200/80 to-rose-200/80",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container-wide">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(sectionHeadingSpacing, "text-center")}
        >
          <SectionBadge>Client Reviews</SectionBadge>
          <SectionTitle before="Trusted by " highlight="Businesses" />
          <SectionLead>See what our clients say about working with CipherX.</SectionLead>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="grovia-card p-7 sm:p-8 flex flex-col gap-6"
            >
              {/* Quote */}
              <blockquote className="text-[14.5px] sm:text-[15px] leading-[1.7] text-foreground/80 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author row */}
              <div className="flex items-center gap-3">
                {/* Avatar with pastel gradient */}
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center shrink-0`}>
                  <span className="text-[12px] font-bold text-foreground/60">{t.initials}</span>
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-foreground">{t.author}</div>
                  <div className="text-[12.5px] text-muted-foreground">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
