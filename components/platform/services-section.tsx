"use client"

import { motion } from "framer-motion"
import FeatureCard, { type FeatureCardLayout } from "@/components/FeatureCard"
import {
  SectionBadge,
  SectionLead,
  SectionTitle,
  sectionHeadingSpacing,
} from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

/** Half-width stacked cards (sm+): shared height so paired rows align. */
const TOP_SERVICE_CARD_GRID_H = "sm:h-[600px]"
/** Full-width horizontal cards (sm+): shared row height. */
const WIDE_SERVICE_CARD_GRID_H = "sm:h-[420px]"
const WIDE_SERVICE_MEDIA_H = "sm:h-[420px] sm:max-h-[420px] sm:min-h-0"

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
  /** Legacy: image-left bento row (unused in services grid; kept for FeatureCard API) */
  bentoSplit?: boolean
  heroImage?: { src: string; alt: string; priority?: boolean; width?: number; height?: number }
  contentClassName?: string
  innerGridClassName?: string
  imageFigureClassName?: string
  imageShellClassName?: string
  imageMediaClassName?: string
  heroImageClassName?: string
  badgesClassName?: string
  ctaRowClassName?: string
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
    innerGridClassName: WIDE_SERVICE_CARD_GRID_H,
    imageFigureClassName: WIDE_SERVICE_MEDIA_H,
    imageShellClassName: "sm:max-h-[420px]",
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
    layout: "top-content",
    innerGridClassName: TOP_SERVICE_CARD_GRID_H,
    heroImage: {
      src: "/Tech-support.png",
      alt: "Managed IT and technical support illustration",
      width: 933,
      height: 884,
    },
  },
  {
    title: "Website Services",
    description:
      "Launch a modern website with strong structure, bookings, payments, and local visibility.",
    badges: ["Business Websites", "SEO Setup", "Payment Setup", "Booking Setup"],
    primaryCTA: { text: "Explore Website Services", href: "/website-development" },
    secondaryCTA: { text: "Start My Website", href: "#consultation" },
    layout: "top-content",
    innerGridClassName: TOP_SERVICE_CARD_GRID_H,
    heroImage: {
      src: "/Website-services.png",
      alt: "Website services illustration with design, hosting, and online presence visuals",
      width: 933,
      height: 884,
    },
  },
  {
    title: "App Development",
    description: "Build mobile apps, web apps, portals, and startup products from idea to deployment.",
    badges: ["iOS & Android", "Web Apps", "Startup MVPs", "Full Deployment"],
    primaryCTA: { text: "Explore App Development", href: "/mobile-app-development" },
    secondaryCTA: { text: "Discuss My App Idea", href: "#consultation" },
    layout: "left-content",
    wide: true,
    innerGridClassName: WIDE_SERVICE_CARD_GRID_H,
    imageFigureClassName: WIDE_SERVICE_MEDIA_H,
    imageShellClassName: "sm:max-h-[420px]",
    heroImage: {
      src: "/App.png",
      alt: "App development illustration with mobile and web app visuals",
      width: 415,
      height: 393,
    },
  },
  {
    title: "AI Solutions",
    description: "Use AI to automate tasks, support customers, and improve business workflows.",
    badges: ["AI Assistants", "Automation", "Estimate Tools", "Data Analysis"],
    primaryCTA: { text: "Explore AI Solutions", href: "/ai-solutions" },
    secondaryCTA: { text: "Ask About AI", href: "#consultation" },
    layout: "top-content",
    innerGridClassName: TOP_SERVICE_CARD_GRID_H,
    heroImage: {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copy%20of%20Untitled%20%28415%20x%20393%20px%29%20%285%29-FF8IXMyzjfdCijNu1QuoC8hOfdmN5Y.png",
      alt: "AI Solutions illustration with AI icons and chat interface",
      width: 415,
      height: 393,
    },
  },
  {
    title: "Creative Services",
    description:
      "Support your business with design, visuals, and content for online and physical branding.",
    badges: ["Graphic Design", "Business Cards", "Photography", "Videography"],
    primaryCTA: { text: "Explore Creative Services", href: "/graphic-design" },
    secondaryCTA: { text: "Request Creative Quote", href: "#consultation" },
    layout: "top-content",
    innerGridClassName: TOP_SERVICE_CARD_GRID_H,
    heroImage: {
      src: "/Creative%20service.png",
      alt: "Creative services illustration with design and branding visuals",
      width: 415,
      height: 393,
    },
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[rgba(245,243,239,0.5)] py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="w-full container-full-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(sectionHeadingSpacing, "text-center")}
        >
          <SectionBadge>Our services</SectionBadge>
          <SectionTitle before="Our " highlight="Services" />
          <SectionLead>
            Choose a service to view full details, package options, and consultation info.
          </SectionLead>
        </motion.div>

        {/*
          sm+: full-width rows use horizontal layout (text | media). Half-width cards use stacked layout (media on top, content below).
        */}
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              className={cn(
                "flex min-h-0 min-w-0 w-full",
                service.wide && "sm:col-span-2",
              )}
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
                badgesClassName={service.badgesClassName}
                ctaRowClassName={service.ctaRowClassName}
                className="flex min-h-0 w-full flex-1 flex-col"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
