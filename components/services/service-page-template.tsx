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
      <div className="lg:grid lg:grid-cols-3 lg:gap-8 relative container-full-wide">
        {/* Left Content - 2 columns */}
        <div className="lg:col-span-2">
          {/* Problem Points Section */}
          <section className="py-12 sm:py-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-10"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                {problemHeading}
              </h2>
              <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
                {problemDescription}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {problemPoints.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex items-start gap-3 p-4 bg-card rounded-lg border border-foreground/[0.06]"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground/80">{point}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* What's Included Section */}
          <section className="py-12 sm:py-16 lg:py-20 border-t border-foreground/[0.06]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-10"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                {includedHeading}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {includedItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="p-4 sm:p-5 bg-card rounded-xl border border-foreground/[0.06]"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1.5 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Who It's For Section */}
          <section className="py-12 sm:py-16 lg:py-20 border-t border-foreground/[0.06]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Who This Service Is For
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              {whoItsFor.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-card rounded-full text-xs sm:text-sm font-medium text-foreground/80 border border-foreground/[0.06]"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </section>

          {/* Packages Section */}
          <section className="py-12 sm:py-16 lg:py-20 border-t border-foreground/[0.06]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-10"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Service Packages
              </h2>
              <p className="text-sm sm:text-base text-foreground/60">
                Choose a package that fits your needs or request a custom quote.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {packages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className={`relative p-5 sm:p-6 rounded-xl border ${
                    pkg.popular
                      ? "bg-foreground text-background border-foreground"
                      : "bg-card border-foreground/[0.06]"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`text-lg sm:text-xl font-bold mb-1.5 ${pkg.popular ? "text-background" : "text-foreground"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xl sm:text-2xl font-bold mb-3 ${pkg.popular ? "text-primary-foreground" : "text-primary"}`}>
                    {pkg.price}
                  </p>
                  <p className={`text-xs sm:text-sm mb-4 ${pkg.popular ? "text-background/70" : "text-foreground/60"}`}>
                    {pkg.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {pkg.features.map((feature) => (
                      <li key={feature} className={`flex items-start gap-2 text-xs sm:text-sm ${pkg.popular ? "text-background/80" : "text-foreground/70"}`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${pkg.popular ? "text-primary-foreground" : "text-primary"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#consultation"
                    className={`block w-full text-center px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                      pkg.popular
                        ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                        : "bg-primary text-primary-foreground hover:opacity-90"
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Why Choose CipherX Section */}
          <section className="py-12 sm:py-16 lg:py-20 border-t border-foreground/[0.06]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-10"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Why Choose CipherX
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {whyChoosePoints.map((point, i) => {
                const Icon = iconMap[point.icon] || Shield
                return (
                  <motion.div
                    key={point.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={i}
                    className="text-center p-4 sm:p-6"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{point.title}</h3>
                    <p className="text-xs sm:text-sm text-foreground/60">{point.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </section>

          {/* Consultation Form Section */}
          <section id="consultation" className="py-12 sm:py-16 lg:py-20 border-t border-foreground/[0.06]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                {formTitle}
              </h2>
            </motion.div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-6 sm:p-8 bg-card rounded-xl border border-primary/30"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5">Thank You!</h3>
                <p className="text-sm sm:text-base text-foreground/60">We&apos;ll be in touch within 1 business day.</p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={(e) => {
                  e.preventDefault()
                  setFormSubmitted(true)
                }}
                className="bg-card rounded-xl border border-foreground/[0.06] p-4 sm:p-6 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {formFields.slice(0, 4).map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      {field.type === "select" ? (
                        <select
                          name={field.name}
                          required={field.required}
                          className="w-full px-3 py-2.5 rounded-lg border border-foreground/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                          <option value="">Select...</option>
                          {field.options?.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          required={field.required}
                          className="w-full px-3 py-2.5 rounded-lg border border-foreground/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {formFields.slice(4).map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5">
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        rows={4}
                        className="w-full px-3 py-2.5 rounded-lg border border-foreground/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      />
                    ) : field.type === "select" ? (
                      <select
                        name={field.name}
                        required={field.required}
                        className="w-full px-3 py-2.5 rounded-lg border border-foreground/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Select...</option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        className="w-full px-3 py-2.5 rounded-lg border border-foreground/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full px-5 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
                >
                  {formButtonText}
                </button>
              </motion.form>
            )}
          </section>

          {/* FAQ Section */}
          <section className="py-12 sm:py-16 lg:py-20 border-t border-foreground/[0.06]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={index}
                  className="border border-foreground/[0.06] rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full flex items-start justify-between gap-3 p-4 hover:bg-card transition-colors text-left"
                  >
                    <span className="font-semibold text-foreground text-sm sm:text-base leading-snug">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 transition-transform ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="px-4 pb-4 bg-card"
                    >
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Related Services */}
          {relatedServices && relatedServices.length > 0 && (
            <section className="py-12 sm:py-16 lg:py-20 border-t border-foreground/[0.06]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 sm:mb-8"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                  Related Services
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedServices.map((service, i) => (
                  <motion.div
                    key={service.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={i}
                  >
                    <Link
                      href={service.href}
                      className="block p-4 sm:p-5 bg-card rounded-xl border border-foreground/[0.06] hover:border-primary/30 transition-colors group"
                    >
                      <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-xs sm:text-sm text-foreground/50 group-hover:text-foreground/70 transition-colors inline-flex items-center gap-1">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
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
