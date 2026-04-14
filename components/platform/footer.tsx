"use client"

import Link from "next/link"
import { Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/services" },
  { label: "Contact", href: "#contact" },
]

const serviceLinks = [
  { label: "Cybersecurity", href: "/cybersecurity" },
  { label: "Managed IT", href: "/managed-it-support" },
  { label: "Website Services", href: "/website-development" },
  { label: "App Development", href: "/mobile-app-development" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Creative Services", href: "/graphic-design" },
]

const locationLinks = [
  "Toronto", "Mississauga", "Brampton", "Vaughan",
  "Markham", "Richmond Hill", "North York", "Scarborough", "Etobicoke",
]

const footerBadges = ["Local Business Focus", "Security-First", "Startup Friendly", "Custom Solutions"]

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card">
        <div className="w-full container-full-wide py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-14">

          {/* Brand col */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 lg:col-span-2"
          >
            <Link href="/" className="flex items-center mb-4 sm:mb-5">
              <img src="/cipherx-logo.png" alt="CipherX Logo" className="h-8 sm:h-9 md:h-10 w-auto" />
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 max-w-xs leading-relaxed">
              Affordable cybersecurity, managed IT, websites, apps, and AI solutions for Toronto and GTA small businesses.
            </p>
            {/* Footer badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
              {footerBadges.map((b) => (
                <span key={b} className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-background text-muted-foreground border border-border">
                  {b}
                </span>
              ))}
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-2 sm:gap-2.5 mb-5 sm:mb-6">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <Link key={s.label} href={s.href} aria-label={s.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </Link>
                )
              })}
            </div>
            {/* Footer CTAs */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <Link href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-accent text-accent-foreground rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold hover:opacity-90 transition-all">
                Contact Us
              </Link>
              <Link href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 border border-border text-foreground rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold hover:bg-secondary transition-all">
                Book Consultation
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Main links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <h4 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-widest mb-4 sm:mb-5">Main</h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <h4 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-widest mb-4 sm:mb-5">Services</h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="col-span-2 sm:col-span-1"
          >
            <h4 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-widest mb-4 sm:mb-5">Locations</h4>
            <ul className="flex flex-wrap sm:flex-col gap-x-3 gap-y-2 sm:gap-2.5 sm:gap-3">
              {locationLinks.map((city) => (
                <li key={city}>
                  <span className="text-sm sm:text-base text-muted-foreground">{city}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 sm:pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} CipherX Security Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
