"use client"

import { motion } from "framer-motion"
import FeatureCard, { type FeatureCardLayout } from "@/components/FeatureCard"
import { cn } from "@/lib/utils"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

const services: Array<{
  title: string
  description: string
  badges: string[]
  primaryCTA: { text: string; href: string }
  secondaryCTA: { text: string; href: string }
  layout: FeatureCardLayout
  /** Full-width bento row on sm+ */
  wide?: boolean
  /** Half-cell: image left, 450px media, edge scrims (Lexend split row) */
  bentoSplit?: boolean
  heroImage?: { src: string; alt: string; priority?: boolean; width?: number; height?: number }
  contentClassName?: string
  innerGridClassName?: string
  imageFigureClassName?: string
  imageShellClassName?: string
  imageMediaClassName?: string
  heroImageClassName?: string
}> = [
  {
    title: "Cybersecurity",
    description:
      "Protect your business with practical testing, monitoring, backup, and secure systems.",
    badges: ["Pen Testing", "Compliance Testing", "Backup", "Secure Infrastructure"],
    primaryCTA: { text: "Explore Cybersecurity", href: "/cybersecurity" },
    secondaryCTA: { text: "Get Security Consultation", href: "#consultation" },
    layout: "left-content",
    wide: true,
    contentClassName: "sm:w-[642px] sm:max-w-[642px]",
    innerGridClassName: "sm:h-[374px]",
    imageFigureClassName: "bg-muted/20 sm:h-[374px] sm:max-h-[374px]",
    imageShellClassName: "sm:max-h-[374px]",
    imageMediaClassName: "p-2 sm:p-4",
    heroImage: {
      src: "/services-cybersecurity.png",
      alt: "Cybersecurity illustration with shield, lock, and digital protection visuals",
      priority: true,
      width: 2000,
      height: 2000,
    },
  },
  {
    title: "Managed IT",
    description: "Get dependable support, troubleshooting, setup, software help, and remote monitoring.",
    badges: ["24/7 IT Support", "Network Setup", "Software Install", "Malware Help"],
    primaryCTA: { text: "Explore Managed IT", href: "/managed-it-support" },
    secondaryCTA: { text: "Get IT Support Quote", href: "#consultation" },
    layout: "left-content",
    bentoSplit: true,
    heroImage: {
      src: "https://lexend-nuxt.vercel.app/_nuxt/home-11-feature-02.jcxu1PaP.png",
      alt: "",
    },
  },
  {
    title: "Website Services",
    description:
      "Launch a modern website with strong structure, bookings, payments, and local visibility.",
    badges: ["Small Business Websites", "SEO Setup", "Payment Setup", "Booking Setup"],
    primaryCTA: { text: "Explore Website Services", href: "/website-development" },
    secondaryCTA: { text: "Start My Website", href: "#consultation" },
    layout: "left-content",
    bentoSplit: true,
  },
  {
    title: "App Development",
    description: "Build mobile apps, web apps, portals, and startup products from idea to deployment.",
    badges: ["iOS & Android", "Web Apps", "Startup MVPs", "Full Deployment"],
    primaryCTA: { text: "Explore App Development", href: "/mobile-app-development" },
    secondaryCTA: { text: "Discuss My App Idea", href: "#consultation" },
    layout: "left-content",
    wide: true,
  },
  {
    title: "AI Solutions",
    description: "Use AI to automate tasks, support customers, and improve business workflows.",
    badges: ["AI Assistants", "Automation", "Estimate Tools", "Data Analysis"],
    primaryCTA: { text: "Explore AI Solutions", href: "/ai-solutions" },
    secondaryCTA: { text: "Ask About AI", href: "#consultation" },
    layout: "left-content",
    bentoSplit: true,
  },
  {
    title: "Creative Services",
    description:
      "Support your business with design, visuals, and content for online and physical branding.",
    badges: ["Graphic Design", "Business Cards", "Photography", "Videography"],
    primaryCTA: { text: "Explore Creative Services", href: "/graphic-design" },
    secondaryCTA: { text: "Request Creative Quote", href: "#consultation" },
    layout: "left-content",
    bentoSplit: true,
  },
]

const topBadges = ["Dedicated Service Pages", "Clear Packages", "Custom Options", "SMB Focused"]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-card">
      <div className="w-full container-full-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-12 md:mb-14 lg:mb-16"
        >
          <div className="mb-5 flex flex-wrap justify-center gap-2 sm:mb-6 sm:gap-2.5">
            {topBadges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground sm:px-4 sm:py-1.5 sm:text-sm"
              >
                {b}
              </span>
            ))}
          </div>
          <h2 className="mb-4 text-2xl font-bold leading-[1.1] tracking-tight text-foreground sm:mb-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Choose a service to view full details, package options, and consultation info.
          </p>
        </motion.div>

        {/*
          Bento (sm+): | full (wide) |
                      | half | half |
                      | full (wide) |
                      | half | half |
        */}
        <div className="grid grid-cols-1 items-start gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              className={cn("min-w-0 w-full self-start", service.wide && "sm:col-span-2")}
            >
              <FeatureCard
                title={service.title}
                description={service.description}
                badges={service.badges}
                primaryCta={service.primaryCTA}
                secondaryCta={service.secondaryCTA}
                layout={service.layout}
                heroImage={service.heroImage}
                bentoSplit={service.bentoSplit}
                contentClassName={service.contentClassName}
                innerGridClassName={service.innerGridClassName}
                imageFigureClassName={service.imageFigureClassName}
                imageShellClassName={service.imageShellClassName}
                imageMediaClassName={service.imageMediaClassName}
                heroImageClassName={service.heroImageClassName}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
