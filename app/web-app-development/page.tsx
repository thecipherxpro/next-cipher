"use client"

import { Navigation } from "@/components/platform/navigation"
import { Footer } from "@/components/platform/footer"
import { ServicePageTemplate } from "@/components/services/service-page-template"

export default function WebAppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicePageTemplate
        badge="Web App Development"
        title="Custom Web Applications for Your Business"
        description="Build internal tools, customer portals, booking systems, or full SaaS products. CipherX creates custom web applications that solve real business problems for Toronto and GTA companies."
        primaryCTA={{ text: "Start Your Project", href: "#consultation" }}
        secondaryCTA={{ text: "View All Services", href: "/services" }}
        trustLine="40+ web applications powering Toronto businesses"
        problemHeading="Off-the-Shelf Software Doesn't Always Fit"
        problemDescription="Generic software often comes with features you don't need and lacks the ones you do. Custom web apps are built around your specific workflows and business requirements."
        problemPoints={[
          "Spreadsheets and manual processes slow you down",
          "Generic software doesn't fit your workflow",
          "Multiple disconnected tools create data silos",
          "No visibility into business operations",
          "Customer-facing processes are clunky or manual",
          "Scaling means adding more manual work",
        ]}
        includedHeading="What's Included in Web App Development"
        includedItems={[
          { title: "Custom Application Development", description: "Built from scratch to match your exact requirements." },
          { title: "User Interface Design", description: "Clean, intuitive interfaces your team and customers will love." },
          { title: "Database & API Development", description: "Robust backend systems to power your application." },
          { title: "Integrations", description: "Connect with your existing tools and services." },
          { title: "Cloud Deployment", description: "Hosted on reliable, scalable cloud infrastructure." },
          { title: "Training & Documentation", description: "Ensure your team can use the system effectively." },
        ]}
        whoItsFor={[
          "Growing businesses",
          "Startups building MVPs",
          "Companies replacing spreadsheets",
          "Teams needing internal tools",
          "Businesses with booking needs",
          "Service providers",
          "Agencies",
          "Healthcare practices",
          "Property managers",
          "Operations teams",
        ]}
        packages={[
          {
            name: "Web App Starter",
            price: "$10,000+",
            description: "Simple internal tools and dashboards",
            features: [
              "Single-purpose application",
              "Basic user management",
              "Simple dashboard",
              "Data import/export",
              "Cloud hosting setup",
              "30 days support",
            ],
            cta: "Get Started",
          },
          {
            name: "Web App Standard",
            price: "$25,000+",
            description: "Full-featured business applications",
            features: [
              "Multi-feature application",
              "Advanced user roles",
              "Reporting & analytics",
              "Third-party integrations",
              "Mobile-responsive",
              "90 days support",
            ],
            cta: "Get Started",
            popular: true,
          },
          {
            name: "Web App Enterprise",
            price: "Custom",
            description: "Complex platforms and SaaS products",
            features: [
              "Full SaaS platform",
              "Advanced architecture",
              "Multi-tenant support",
              "Payment integration",
              "Scalable infrastructure",
              "Ongoing development",
            ],
            cta: "Contact Us",
          },
        ]}
        whyChoosePoints={[
          { icon: "Shield", title: "Security Built In", description: "Enterprise-grade security for your data." },
          { icon: "Users", title: "User-Centered", description: "Designed around how your team actually works." },
          { icon: "MapPin", title: "Local Development", description: "Toronto team for easy collaboration." },
          { icon: "Zap", title: "Scalable", description: "Built to grow with your business." },
        ]}
        formTitle="Start Your Web App Project"
        formFields={[
          { name: "name", label: "Name", type: "text", required: true },
          { name: "business", label: "Business Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "phone", label: "Phone", type: "tel", required: true },
          { name: "type", label: "Application Type", type: "select", options: ["Internal tool", "Customer portal", "Booking system", "SaaS product", "Dashboard", "Other"] },
          { name: "users", label: "Expected Users", type: "select", options: ["1-10 internal", "11-50 internal", "Public facing (hundreds)", "Public facing (thousands)"] },
          { name: "message", label: "Describe the problem you want to solve", type: "textarea" },
        ]}
        formButtonText="Request Project Review"
        faqs={[
          { question: "What's the difference between a website and a web app?", answer: "Websites primarily display information. Web apps are interactive tools where users log in, enter data, and perform tasks." },
          { question: "How long does web app development take?", answer: "Simple tools take 2-3 months. Complex applications can take 4-8 months or more depending on requirements." },
          { question: "Can you integrate with our existing software?", answer: "Yes, we regularly integrate with CRMs, accounting software, payment processors, and other business tools." },
          { question: "Who hosts the application?", answer: "We deploy to reliable cloud providers (AWS, Google Cloud, or Vercel) and can manage hosting for you." },
          { question: "What technologies do you use?", answer: "We use modern frameworks like React, Next.js, Node.js, and PostgreSQL to build fast, maintainable applications." },
        ]}
        relatedServices={[
          { title: "Mobile App Development", href: "/mobile-app-development" },
          { title: "Website Development", href: "/website-development" },
          { title: "AI Solutions", href: "/ai-solutions" },
        ]}
      />
      <Footer />
    </main>
  )
}
