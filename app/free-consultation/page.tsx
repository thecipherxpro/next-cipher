"use client"

import { Navigation } from "@/components/platform/navigation"
import { Footer } from "@/components/platform/footer"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function FreeConsultationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="w-full container-full-wide">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial="hidden"
            animate="show"
            className="text-center"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 bg-teal-100 text-teal-700"
            >
              Schedule Your Consultation
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-[1.15] tracking-tight"
            >
              Let&apos;s Discuss Your Business Challenges
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base sm:text-lg text-foreground/70 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Whether you need cybersecurity, managed IT, a new website, mobile app, or AI solutions, our team is ready to help. Schedule a free consultation to explore what&apos;s possible for your business.
            </motion.p>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="w-full container-full-wide">
        <div className="max-w-3xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 border border-border"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">Your Information</h2>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5 sm:space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Business Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Business Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your Business"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Services Interested In */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">What services are you interested in? *</label>
                <select
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Select a service</option>
                  <option value="cybersecurity">Cybersecurity & Penetration Testing</option>
                  <option value="managed-it">Managed IT Support</option>
                  <option value="website">Website Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="web-app">Web App Development</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="ai">AI Solutions</option>
                  <option value="multiple">Multiple Services</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              {/* Number of Employees */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Number of Employees *</label>
                <select
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Select range</option>
                  <option value="1-5">1-5</option>
                  <option value="6-15">6-15</option>
                  <option value="16-50">16-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Tell us about your needs</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Describe your main business challenges and what you'd like to explore..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 sm:py-3.5 bg-primary text-primary-foreground rounded-lg text-sm sm:text-base font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
              >
                Schedule Your Free Consultation
              </button>

              <p className="text-xs sm:text-sm text-foreground/50 text-center">
                We typically respond within 24 business hours. Your information is secure and will only be used to contact you about your consultation.
              </p>
            </form>
          </motion.div>
        </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="w-full container-full-wide">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">What to Expect</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Your free consultation is a no-pressure conversation about your business and goals.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {[
              {
                number: "1",
                title: "30-Minute Call",
                description: "We discuss your business, challenges, and goals in a relaxed conversation.",
              },
              {
                number: "2",
                title: "Expert Listening",
                description: "Our team listens carefully to understand your specific situation and needs.",
              },
              {
                number: "3",
                title: "Tailored Recommendations",
                description: "We provide honest recommendations on what services could help you most.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-6 sm:p-7 lg:p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-lg sm:text-xl font-bold text-teal-700">{item.number}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
