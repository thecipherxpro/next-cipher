"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Globe, Smartphone } from "lucide-react"
import {
  SectionBadge,
  SectionTitle,
  SectionLead,
  sectionHeadingSpacing,
} from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

type ProjectCategory = "all" | "websites" | "apps"

interface Project {
  title: string
  url: string
  description: string
  category: "websites" | "apps"
  image?: string
}

const projects: Project[] = [
  {
    title: "Thornhill Drug Mart",
    url: "https://thornhilldrugmart.ca",
    description: "Pharmacy & healthcare services website with online booking and prescription services.",
    category: "websites",
    image: "/showcase/thornhilldrugmart.jpg",
  },
  {
    title: "TSCP",
    url: "https://tscp.ca",
    description: "Professional corporate website with modern design and service showcase.",
    category: "websites",
    image: "/showcase/tscp.jpg",
  },
  {
    title: "Tow Daddy",
    url: "https://towdaddy.ca",
    description: "Towing service platform with real-time dispatch and customer booking system.",
    category: "websites",
    image: "/showcase/towdaddy.jpg",
  },
  {
    title: "Kitkin Express",
    url: "https://kitkinexpress.ca",
    description: "Express delivery and logistics website with tracking capabilities.",
    category: "websites",
    image: "/showcase/kitkinexpress.jpg",
  },
  {
    title: "PharmaNet",
    url: "https://pharmanet.ca",
    description: "Pharmacy management application with inventory, prescriptions, and patient records.",
    category: "apps",
    image: "/showcase/pharmanet.jpg",
  },
  {
    title: "Request by Tow Daddy",
    url: "https://request.towdaddy.ca",
    description: "Real-time tow request management app with driver dispatch and customer tracking.",
    category: "apps",
    image: "/showcase/request-towdaddy.jpg",
  },
]

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "websites", label: "Websites" },
  { value: "apps", label: "Applications" },
]

export function ShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background overflow-hidden">
      <div className="container-full-wide">
        {/* Header */}
        <div className={cn(sectionHeadingSpacing, "text-center")}>
          <SectionBadge>Our Work</SectionBadge>
          <SectionTitle before="Projects We've " highlight="Built" />
          <SectionLead className="max-w-xl">
            A selection of websites and applications we&apos;ve designed and developed for our clients.
          </SectionLead>
        </div>

        {/* Category filter */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1 rounded-xl border border-border bg-card p-1">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-all",
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/30 hover:shadow-soft"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] w-full bg-muted overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-tertiary/10">
                    <span className="text-2xl font-bold text-primary/40">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                {/* Category badge */}
                <div className="flex items-center gap-2 mb-3">
                  {project.category === "websites" ? (
                    <Globe className="h-3.5 w-3.5 text-primary" />
                  ) : (
                    <Smartphone className="h-3.5 w-3.5 text-primary" />
                  )}
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {project.category === "websites" ? "Website" : "Application"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                {/* Link indicator */}
                <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
                  <span>Visit site</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
