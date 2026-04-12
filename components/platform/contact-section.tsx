"use client"

import { useState } from "react"
import { Phone, ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  SectionBadge,
  SectionLead,
  SectionTitle,
  sectionHeadingSpacing,
} from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

const serviceOptions = [
  "Cybersecurity",
  "Managed IT",
  "Website Services",
  "App Development",
  "AI Solutions",
  "Creative Services",
  "Custom Solution",
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    businessLocation: "",
    service: "",
    projectDetails: "",
  })
  const [selectedService, setSelectedService] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = "w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-card border border-border rounded-xl sm:rounded-2xl text-foreground text-sm sm:text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all"

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="w-full container-full-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(sectionHeadingSpacing, "text-center")}
        >
          <SectionBadge>Contact</SectionBadge>
          <SectionTitle before="Get " highlight="Started" />
          <SectionLead className="max-w-xl">
            Send us your details and we&apos;ll point you in the right direction.
          </SectionLead>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start max-w-5xl mx-auto">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5 sm:gap-6"
          >
            <div className="p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl border border-border bg-card">
              <p className="text-sm sm:text-base font-semibold text-foreground mb-4 sm:mb-5">Contact us directly</p>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">Phone</p>
                  <Link href="tel:+12068371232" className="text-sm sm:text-base md:text-lg font-medium text-foreground hover:text-accent transition-colors">
                    +1 (206) 837-1232
                  </Link>
                </div>
              </div>
              <Link
                href="tel:+12068371232"
                className="w-full inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-border text-foreground rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-secondary active:scale-[0.98] transition-all"
              >
                Call Our Team
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-1">
              No pressure. Clear recommendations. Built for Toronto and GTA businesses.
            </p>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-border bg-card text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Request received!</h3>
                <p className="text-sm sm:text-base text-muted-foreground">We&apos;ll be in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-2.5">Full Name *</label>
                    <input type="text" required placeholder="Your name" value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-2.5">Company Name</label>
                    <input type="text" placeholder="Your company" value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-2.5">Email *</label>
                    <input type="email" required placeholder="your@email.com" value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-2.5">Phone</label>
                    <input type="tel" placeholder="+1 (416) 555-0000" value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-2.5">Business Location</label>
                  <input type="text" placeholder="Toronto, GTA..." value={formData.businessLocation}
                    onChange={(e) => setFormData({ ...formData, businessLocation: e.target.value })}
                    className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2.5 sm:mb-3">Service Needed</label>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {serviceOptions.map((s) => (
                      <button key={s} type="button"
                        onClick={() => { setSelectedService(s); setFormData({ ...formData, service: s }) }}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all border ${
                          selectedService === s
                            ? "bg-accent text-accent-foreground border-accent"
                            : "border-border text-muted-foreground hover:border-accent/40"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-2.5">Project Details</label>
                  <textarea rows={4} placeholder="Tell us about your business needs..." value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className={`${inputClass} resize-none`} />
                </div>
                <button type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-accent text-accent-foreground rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-md"
                >
                  Request Free Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
