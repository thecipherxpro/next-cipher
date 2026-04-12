"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  SectionBadge,
  SectionLead,
  SectionTitle,
  sectionHeadingSpacing,
} from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Do you work with startups and small businesses?",
    answer: "Yes. CipherX is built for startups, small businesses, and growing companies. We offer affordable packages and custom solutions designed for smaller business budgets.",
  },
  {
    question: "Do you offer affordable packages?",
    answer: "Yes. We offer preset packages and custom solutions designed for smaller business budgets. You can start with a package or build a fully custom plan around your needs.",
  },
  {
    question: "Can you help with both security and IT?",
    answer: "Yes. We provide cybersecurity, testing, support, setup, monitoring, backup, and more — all under one team. No need to work with separate vendors.",
  },
  {
    question: "Can you build websites and apps too?",
    answer: "Yes. We build websites, booking systems, payment systems, mobile apps, and web apps. Whether you need a simple business site or a full custom application, we can help.",
  },
  {
    question: "Do you offer a free consultation?",
    answer: "Yes. You can request a free consultation and initial review. We will learn about your business and recommend the right service or package with no pressure.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-card">
      <div className="w-full container-full-wide">
        <div className="w-full max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(sectionHeadingSpacing, "text-center")}
        >
          <SectionBadge>FAQ</SectionBadge>
          <SectionTitle before="Frequently Asked " highlight="Questions" />
          <SectionLead className="mb-5 max-w-xl sm:mb-6">
            Quick answers to common questions about our services and pricing.
          </SectionLead>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-border text-foreground rounded-xl text-sm sm:text-base font-semibold hover:bg-secondary active:scale-[0.98] transition-all"
          >
            Contact Us for More Answers
          </Link>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl sm:rounded-2xl border border-border bg-background overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 md:p-7 text-left hover:bg-secondary/30 transition-colors"
              >
                <span className="font-medium text-sm sm:text-base md:text-lg pr-4 text-foreground">
                  {faq.question}
                </span>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 md:px-7 pb-5 sm:pb-6 md:pb-7 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
