"use client"

import Link from "next/link"
import { Navigation } from "@/components/platform/navigation"
import { Footer } from "@/components/platform/footer"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="w-full container-full-wide">
        <div className="max-w-2xl mx-auto text-center w-full">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-teal-100 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-[1.15]"
          >
            Thank You for Your Interest!
          </motion.h1>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-foreground/70 mb-8 sm:mb-10 leading-relaxed"
          >
            We&apos;ve received your consultation request. Our team will review your information and get back to you within 24 business hours to confirm your appointment time.
          </motion.p>

          {/* What Happens Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">What Happens Next</h2>
            <div className="space-y-4 text-left">
              {[
                "We review your information and business needs",
                "Our team prepares for your personalized consultation",
                "We contact you via email or phone to confirm the meeting",
                "We conduct your free 30-minute consultation",
                "We discuss recommendations tailored to your business",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-teal-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-teal-600" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Check Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10 sm:mb-12 p-4 sm:p-5 bg-primary/10 rounded-lg border border-primary/20"
          >
            <p className="text-sm sm:text-base text-foreground/70">
              Please check your email (including spam folder) for our confirmation and calendar invite.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm sm:text-base font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground/20 text-foreground rounded-lg text-sm sm:text-base font-semibold hover:border-foreground/40 active:scale-[0.98] transition-all"
            >
              Back to Home
            </Link>
          </motion.div>

          {/* Footer CTA */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 sm:mt-16 text-xs sm:text-sm text-foreground/50"
          >
            If you need immediate assistance, please call us at{" "}
            <a href="tel:+1234567890" className="text-primary hover:underline font-semibold">
              (123) 456-7890
            </a>
          </motion.p>
        </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
