"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Send, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { SectionBadge, SectionTitle } from "@/components/ui/section-heading"

const serviceOptions = [
  "Cybersecurity",
  "Managed IT Support",
  "Website Development",
  "Mobile App Development",
  "Web App Development",
  "Graphic Design",
  "AI Solutions",
  "Not Sure - Need Guidance",
]

export function ServiceConsultationSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="consultation" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-accent/5 to-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center p-6 sm:p-10 lg:p-12 bg-white rounded-3xl border border-foreground/10"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Thank You!
            </h3>
            <p className="text-foreground/60 mb-6">
              We&apos;ve received your consultation request. A member of our team will reach out within 24 hours.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              Return to Homepage
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="consultation" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-accent/5 to-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Heading + context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge align="left" className="mb-3 sm:mb-4">
              Get started
            </SectionBadge>
            <SectionTitle align="left" className="mb-4 xl:text-5xl sm:mb-6">
              Not Sure Which Service You Need?
            </SectionTitle>
            <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed mb-5 sm:mb-8">
              Tell us about your business and we&apos;ll recommend the right next step. No pressure, no obligation — just helpful guidance.
            </p>
            
            {/* Trust points */}
            <div className="space-y-2.5 sm:space-y-3">
              {[
                "Free consultation with no strings attached",
                "Get a custom recommendation in 24 hours",
                "Understand your options before committing",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base text-foreground/70">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl sm:rounded-3xl border border-foreground/10 p-6 sm:p-8 shadow-soft">
              {/* Service selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-3">
                  What services are you interested in? (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                        selectedServices.includes(service)
                          ? "bg-accent text-white border-accent"
                          : "bg-background border-foreground/15 text-foreground/70 hover:border-foreground/30"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-foreground/15 bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-foreground/70 mb-1.5">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-foreground/15 bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-foreground/15 bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground/70 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-foreground/15 bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    placeholder="(416) 555-0123"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1.5">
                  Tell us about your business needs
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-foreground/15 bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none"
                  placeholder="What challenges are you facing? What are your goals?"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-accent text-accent-foreground rounded-xl text-sm sm:text-base font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
              >
                <Send className="w-4 h-4" />
                Request Free Consultation
              </button>

              <p className="text-xs text-foreground/50 text-center mt-4">
                We&apos;ll respond within 24 hours. No spam, no pressure.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
