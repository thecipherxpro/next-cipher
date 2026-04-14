"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Shield, Users, MapPin, Zap, Clock, Globe, Code, Palette, Brain, Smartphone, Monitor, Wrench, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Users,
  MapPin,
  Zap,
  Clock,
  Globe,
  Code,
  Palette,
  Brain,
  Smartphone,
  Monitor,
  Wrench,
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

interface ServicePageProps {
  badge: string
  title: string
  description: string
  primaryCTA: { text: string; href: string }
  secondaryCTA: { text: string; href: string }
  trustLine: string
  problemHeading: string
  problemDescription: string
  problemPoints: string[]
  includedHeading: string
  includedItems: { title: string; description: string }[]
  whoItsFor: string[]
  packages: {
    name: string
    price: string
    description: string
    features: string[]
    cta: string
    popular?: boolean
  }[]
  whyChoosePoints: { icon: string; title: string; description: string }[]
  formTitle: string
  formFields: { name: string; label: string; type: string; options?: string[]; required?: boolean }[]
  formButtonText: string
  faqs: { question: string; answer: string }[]
  relatedServices: { title: string; href: string }[]
  howItWorksSteps?: { number: string; title: string; description: string }[]
  commonProblems?: string[]
  commonProblemsHeading?: string
  commonProblemsCTA?: { text: string; href: string }
}

export function ServicePageTemplate({
  badge,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  trustLine,
  problemHeading,
  problemDescription,
  problemPoints,
  includedHeading,
  includedItems,
  whoItsFor,
  packages,
  whyChoosePoints,
  formTitle,
  formFields,
  formButtonText,
  faqs,
  relatedServices,
  howItWorksSteps,
  commonProblems,
  commonProblemsHeading,
  commonProblemsCTA,
}: ServicePageProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [stickyVisible, setStickyVisible] = useState(true)

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-blue-50/30 to-background overflow-hidden">
        <div className="container-full-wide">
          <motion.div
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="inline-block px-2.5 py-1 sm:px-3 rounded-full text-[11px] sm:text-xs font-semibold mb-4 sm:mb-6 bg-teal-100 text-teal-700"
            >
              {badge}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-[1.15] tracking-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-sm sm:text-base lg:text-lg text-foreground/70 mb-6 sm:mb-8 leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-6 sm:mb-8"
            >
              <Link
                href={primaryCTA.href}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 bg-primary text-primary-foreground rounded-lg text-sm sm:text-base font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
              >
                {primaryCTA.text}
              </Link>
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 border border-foreground/20 text-foreground rounded-lg text-sm sm:text-base font-semibold hover:border-foreground/40 active:scale-[0.98] transition-all"
              >
                {secondaryCTA.text}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={4}
              className="text-xs sm:text-sm text-foreground/50"
            >
              {trustLine}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-8 relative">
        {/* Left Content - 2 columns */}
        <div className="lg:col-span-2">
          {/* All main sections go here */}
        </div>

        {/* Sticky Right Panel - 1 column (Desktop only) */}
        <motion.div
          className="hidden lg:flex sticky top-24 col-span-1 h-fit"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: stickyVisible ? 1 : 0, x: stickyVisible ? 0 : 20 }}
        >
          <div className="w-full bg-card border border-foreground/[0.06] rounded-xl p-5 sm:p-6">
            <span className="inline-block px-2.5 py-1 bg-teal-100 text-teal-700 rounded-full text-[10px] font-semibold mb-3 sm:mb-4">
              Free Consultation
            </span>

            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
              Need Help With This Service?
            </h3>

            <p className="text-xs sm:text-sm text-foreground/60 mb-4 sm:mb-6 leading-relaxed">
              Tell us what your business needs and get a practical next-step recommendation.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
              {[
                "Toronto & GTA focused",
                "Small business friendly",
                "Custom or package options",
                "Clear next steps",
                "No obligation",
              ].map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/70">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5 text-primary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#consultation"
              className="w-full block px-4 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg text-xs sm:text-sm font-semibold hover:opacity-90 active:scale-[0.98] transition-all text-center mb-2 sm:mb-3"
            >
              Request My Consultation
            </Link>

            <p className="text-[10px] sm:text-xs text-foreground/50 text-center">
              No pressure. No generic sales pitch.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
