"use client"

import { motion } from "framer-motion"
import { Lock, Wrench, Globe, Smartphone, Code2, Palette, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

const services = [
  {
    id: "cybersecurity",
    icon: Lock,
    title: "Cybersecurity",
    tagline: "Protect your business with practical security testing, analysis, and infrastructure hardening.",
    bullets: [
      "Penetration testing and vulnerability assessment",
      "Malware and threat analysis",
      "Secure infrastructure setup",
      "Security policies and compliance support",
      "Employee security awareness training",
      "24/7 security monitoring options",
    ],
    primaryCTA: { text: "Explore Cybersecurity", href: "/cybersecurity" },
    secondaryCTA: { text: "Free Security Consultation", href: "#consultation" },
    accent: "bg-emerald-100 text-emerald-700 border-emerald-200",
    iconBg: "bg-emerald-50",
  },
  {
    id: "managed-it",
    icon: Wrench,
    title: "Managed IT",
    tagline: "Get reliable support, setup, repairs, monitoring, and business system help.",
    bullets: [
      "Help desk and remote support",
      "Hardware setup and repairs",
      "Network setup and maintenance",
      "Software installation and licensing",
      "Data backup and recovery",
      "Vendor coordination and procurement",
    ],
    primaryCTA: { text: "Explore Managed IT", href: "/managed-it-support" },
    secondaryCTA: { text: "Talk to IT Support", href: "#consultation" },
    accent: "bg-purple-100 text-purple-700 border-purple-200",
    iconBg: "bg-purple-50",
  },
  {
    id: "websites",
    icon: Globe,
    title: "Website Development",
    tagline: "Build a modern, SEO-ready website that helps bring in customers.",
    bullets: [
      "Custom website design and development",
      "SEO optimization and local ranking",
      "E-commerce and online stores",
      "Booking and contact forms",
      "Mobile-responsive design",
      "Hosting and maintenance plans",
    ],
    primaryCTA: { text: "Explore Websites", href: "/website-development" },
    secondaryCTA: { text: "Request Website Consultation", href: "#consultation" },
    accent: "bg-blue-100 text-blue-700 border-blue-200",
    iconBg: "bg-blue-50",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Turn your mobile app idea into a complete product for iOS and Android.",
    bullets: [
      "iOS and Android native development",
      "Cross-platform solutions",
      "UI/UX design for mobile",
      "App store submission and launch",
      "Backend and API integration",
      "Post-launch support and updates",
    ],
    primaryCTA: { text: "Explore Mobile Apps", href: "/mobile-app-development" },
    secondaryCTA: { text: "Discuss Your App", href: "#consultation" },
    accent: "bg-orange-100 text-orange-700 border-orange-200",
    iconBg: "bg-orange-50",
  },
  {
    id: "web-apps",
    icon: Code2,
    title: "Web App Development",
    tagline: "Build internal tools, startup platforms, booking systems, or business applications.",
    bullets: [
      "Custom web application development",
      "SaaS and startup MVPs",
      "Internal business tools",
      "Booking and scheduling systems",
      "Database and API development",
      "Cloud deployment and scaling",
    ],
    primaryCTA: { text: "Explore Web Apps", href: "/web-app-development" },
    secondaryCTA: { text: "Start a Project Review", href: "#consultation" },
    accent: "bg-indigo-100 text-indigo-700 border-indigo-200",
    iconBg: "bg-indigo-50",
  },
  {
    id: "design",
    icon: Palette,
    title: "Graphic Design",
    tagline: "Improve your business image with strong visuals for print, web, and ads.",
    bullets: [
      "Logo and brand identity design",
      "Marketing materials and brochures",
      "Social media graphics",
      "Ad creatives and banners",
      "Presentation design",
      "Print-ready files and production",
    ],
    primaryCTA: { text: "Explore Design", href: "/graphic-design" },
    secondaryCTA: { text: "Get Creative Support", href: "#consultation" },
    accent: "bg-pink-100 text-pink-700 border-pink-200",
    iconBg: "bg-pink-50",
  },
  {
    id: "ai",
    icon: Sparkles,
    title: "AI Solutions",
    tagline: "Use AI to automate tasks, support users, and improve workflows.",
    bullets: [
      "Custom chatbots and virtual assistants",
      "Workflow automation with AI",
      "Data analysis and insights",
      "AI-powered content generation",
      "Integration with existing systems",
      "AI strategy and implementation",
    ],
    primaryCTA: { text: "Explore AI Solutions", href: "/ai-solutions" },
    secondaryCTA: { text: "Ask About AI", href: "#consultation" },
    accent: "bg-lime-100 text-lime-700 border-lime-200",
    iconBg: "bg-lime-50",
  },
]

export function ServiceCardsSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3 sm:mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-[1.15] sm:leading-[1.1] tracking-tight mb-3 sm:mb-4">
            What We Offer
          </h2>
          <p className="text-sm sm:text-base text-foreground/60 max-w-2xl mx-auto">
            From cybersecurity and IT support to websites, apps, and AI — everything your business needs to stay protected, connected, and growing.
          </p>
        </motion.div>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                id={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                className="group flex h-full flex-col rounded-2xl sm:rounded-3xl border border-foreground/[0.06] bg-background p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-foreground/10 hover:shadow-soft-lg"
              >
                <div className="mb-4 flex items-start gap-3 sm:gap-4 sm:mb-5">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${service.iconBg}`}
                  >
                    <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${service.accent.split(" ")[1]}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-snug text-foreground/60">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                <ul className="mb-5 flex-1 space-y-2 sm:mb-6">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-xs text-foreground/70 sm:text-sm">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent sm:h-4 sm:w-4" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-2 border-t border-foreground/[0.06] pt-4 sm:flex-row sm:flex-wrap sm:gap-3">
                  <Link
                    href={service.primaryCTA.href}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-xs font-semibold text-accent-foreground transition-all hover:opacity-90 active:scale-[0.98] sm:text-sm min-w-0 sm:min-w-[8rem]"
                  >
                    {service.primaryCTA.text}
                  </Link>
                  <Link
                    href={service.secondaryCTA.href}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-foreground/15 px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-foreground/30 active:scale-[0.98] sm:text-sm min-w-0"
                  >
                    {service.secondaryCTA.text}
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
