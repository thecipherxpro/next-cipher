"use client"

import { Navigation } from "@/components/platform/navigation"
import { Footer } from "@/components/platform/footer"
import { ServicePageTemplate } from "@/components/services/service-page-template"

export default function GraphicDesignPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicePageTemplate
        badge="Graphic Design Services"
        title="Professional Design That Elevates Your Brand"
        description="Stand out with professional graphic design. CipherX creates logos, marketing materials, social media graphics, and brand assets that help Toronto and GTA businesses make a strong impression."
        primaryCTA={{ text: "Get Creative Support", href: "#consultation" }}
        secondaryCTA={{ text: "View All Services", href: "/services" }}
        trustLine="200+ brands elevated with professional design"
        problemHeading="Bad Design Costs You Customers"
        problemDescription="Your visual identity shapes how customers perceive your business. Inconsistent or amateur design can undermine your credibility and make it harder to compete."
        problemPoints={[
          "Inconsistent branding confuses customers",
          "DIY designs look unprofessional",
          "Poor marketing materials get ignored",
          "No clear visual identity across channels",
          "Social media graphics that don't stand out",
          "Print materials that don't convert",
        ]}
        includedHeading="What's Included in Graphic Design Services"
        includedItems={[
          { title: "Logo & Brand Identity", description: "Memorable logos and cohesive brand guidelines." },
          { title: "Marketing Materials", description: "Brochures, flyers, and promotional materials." },
          { title: "Social Media Graphics", description: "Scroll-stopping content for your social channels." },
          { title: "Ad Creatives", description: "Banner ads, display ads, and promotional graphics." },
          { title: "Presentation Design", description: "Professional decks that impress." },
          { title: "Print Production", description: "Print-ready files and production coordination." },
        ]}
        whoItsFor={[
          "New businesses",
          "Rebranding companies",
          "Marketing teams",
          "Real estate agents",
          "Restaurants & cafes",
          "Professional services",
          "Retail stores",
          "E-commerce brands",
          "Event organizers",
          "Non-profits",
        ]}
        packages={[
          {
            name: "Design Starter",
            price: "$999",
            description: "Essential branding for new businesses",
            features: [
              "Logo design (3 concepts)",
              "Business card design",
              "Basic brand guidelines",
              "Social media profile graphics",
              "2 rounds of revisions",
            ],
            cta: "Get Started",
          },
          {
            name: "Design Growth",
            price: "$2,499",
            description: "Complete brand package",
            features: [
              "Everything in Starter",
              "Full brand guidelines",
              "Marketing templates",
              "Social media templates",
              "Email signature design",
              "3 rounds of revisions",
            ],
            cta: "Get Started",
            popular: true,
          },
          {
            name: "Design Retainer",
            price: "$999/mo",
            description: "Ongoing design support",
            features: [
              "Dedicated designer",
              "20 hours per month",
              "Unlimited requests",
              "Fast turnaround",
              "Brand consistency",
              "Rollover hours",
            ],
            cta: "Contact Us",
          },
        ]}
        whyChoosePoints={[
          { icon: "Shield", title: "Consistent Quality", description: "Every design meets professional standards." },
          { icon: "Users", title: "SMB Pricing", description: "Agency quality at small business prices." },
          { icon: "MapPin", title: "Local Understanding", description: "We know the Toronto market." },
          { icon: "Zap", title: "Fast Delivery", description: "Quick turnaround on projects." },
        ]}
        formTitle="Request Creative Support"
        formFields={[
          { name: "name", label: "Name", type: "text", required: true },
          { name: "business", label: "Business Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "phone", label: "Phone", type: "tel", required: true },
          { name: "need", label: "Design Need", type: "select", options: ["Logo design", "Full branding", "Marketing materials", "Social media graphics", "Multiple needs", "Other"] },
          { name: "format", label: "Primary Format", type: "select", options: ["Digital/online", "Print", "Both"] },
          { name: "message", label: "Tell us about your design project", type: "textarea" },
        ]}
        formButtonText="Request Design Consultation"
        faqs={[
          { question: "How long does logo design take?", answer: "Logo projects typically take 1-2 weeks including revisions. Rush delivery is available for urgent needs." },
          { question: "Do I own the final designs?", answer: "Yes, you receive full ownership and rights to all final approved designs." },
          { question: "What file formats do you deliver?", answer: "We provide all necessary formats including AI, EPS, PDF, PNG, and JPG files." },
          { question: "Can you match our existing brand?", answer: "Absolutely. We can work within your existing brand guidelines or help evolve your visual identity." },
          { question: "Do you offer ongoing design support?", answer: "Yes, our Design Retainer plan provides dedicated ongoing design support for a monthly fee." },
        ]}
        relatedServices={[
          { title: "Website Development", href: "/website-development" },
          { title: "Mobile App Development", href: "/mobile-app-development" },
          { title: "AI Solutions", href: "/ai-solutions" },
        ]}
      />
      <Footer />
    </main>
  )
}
