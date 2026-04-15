"use client"

import { Navigation } from "@/components/platform/navigation"
import { Footer } from "@/components/platform/footer"
import { ServicePageTemplate } from "@/components/services/service-page-template"

export default function ManagedITPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicePageTemplate
        badge="Managed IT Services"
        title="Reliable IT Support for Your Business"
        description="Get the IT help you need without the overhead of a full-time team. CipherX provides responsive, affordable managed IT support for Toronto and GTA businesses."
        primaryCTA={{ text: "Talk to IT Support", href: "#consultation" }}
        secondaryCTA={{ text: "View All Services", href: "/services" }}
        trustLine="Supporting 200+ businesses with reliable IT services"
        problemHeading="IT Problems Slow Down Your Business"
        problemDescription="When technology fails, your team stops working. Many small businesses struggle with unreliable systems, slow support, and IT providers who don't understand their needs."
        problemPoints={[
          "Slow computers and network issues waste hours every week",
          "Unreliable backup systems put your data at risk",
          "Software problems interrupt work and frustrate staff",
          "No clear point of contact when issues arise",
          "Reactive fixes instead of proactive maintenance",
          "Paying enterprise prices for small business needs",
        ]}
        includedHeading="What's Included in Managed IT Support"
        includedItems={[
          { title: "Help Desk & Remote Support", description: "Get fast answers and remote fixes for everyday IT issues.", image: "/included/help-desk.jpg", icon: "Headphones" },
          { title: "Hardware Setup & Repairs", description: "Computers, printers, servers, and equipment handled.", image: "/included/hardware.jpg", icon: "HardDrive" },
          { title: "Network Setup & Maintenance", description: "Reliable WiFi, wired networks, and connectivity.", image: "/included/network.jpg", icon: "Wifi" },
          { title: "Software Installation & Licensing", description: "Keep your software updated, licensed, and working.", image: "/included/software.jpg", icon: "PackageCheck" },
          { title: "Data Backup & Recovery", description: "Protect your business data with automated backups.", image: "/included/backup.jpg", icon: "DatabaseBackup" },
          { title: "Vendor Coordination", description: "We handle your tech vendors so you don't have to.", image: "/included/vendor.jpg", icon: "Handshake" },
        ]}
        whoItsFor={[
          "Small offices",
          "Medical clinics",
          "Law firms",
          "Accounting firms",
          "Retail stores",
          "Real estate agencies",
          "Construction companies",
          "Non-profits",
          "Growing startups",
          "Professional services",
        ]}
        packages={[
          {
            name: "IT Starter",
            price: "$399/mo",
            description: "Essential support for small teams",
            features: [
              "Help desk support (business hours)",
              "Remote troubleshooting",
              "Basic monitoring",
              "Monthly system health check",
              "Up to 10 devices",
            ],
            cta: "Get Started",
          },
          {
            name: "IT Growth",
            price: "$799/mo",
            description: "Complete support for growing businesses",
            features: [
              "Everything in Starter",
              "Extended support hours",
              "Proactive maintenance",
              "Backup management",
              "Software updates",
              "Up to 25 devices",
            ],
            cta: "Get Started",
            popular: true,
          },
          {
            name: "IT Enterprise",
            price: "Custom",
            description: "Full-scale IT for larger operations",
            features: [
              "Everything in Growth",
              "24/7 support available",
              "On-site support",
              "Server management",
              "Network infrastructure",
              "Unlimited devices",
            ],
            cta: "Contact Us",
          },
        ]}
        whyChoosePoints={[
          { icon: "Shield", title: "Security-First", description: "Every IT solution built with security in mind." },
          { icon: "Users", title: "SMB Focused", description: "Services sized and priced for small businesses." },
          { icon: "MapPin", title: "Local Support", description: "Toronto and GTA based team for on-site needs." },
          { icon: "Zap", title: "Fast Response", description: "Quick turnaround on support requests." },
        ]}
        formTitle="Talk to Managed IT Support"
        formFields={[
          { name: "name", label: "Name", type: "text", required: true },
          { name: "business", label: "Business Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "phone", label: "Phone", type: "tel", required: true },
          { name: "staff", label: "Number of Staff", type: "select", options: ["1-5", "6-15", "16-50", "50+"] },
          { name: "need", label: "Main IT Need", type: "select", options: ["General IT support", "Network issues", "Hardware problems", "Software help", "Backup & recovery", "Other"] },
          { name: "message", label: "Tell us about your IT challenges", type: "textarea" },
        ]}
        formButtonText="Request IT Consultation"
        faqs={[
          { question: "How quickly can you respond to IT issues?", answer: "We aim to respond to support tickets within 1 hour during business hours. Critical issues receive priority attention." },
          { question: "Do you provide on-site support?", answer: "Yes, on-site support is available for issues that can't be resolved remotely. It's included in our Enterprise plan or available on-demand." },
          { question: "Can you support both Mac and Windows?", answer: "Yes, we support both Mac and Windows environments, as well as most common business software." },
          { question: "What about after-hours emergencies?", answer: "Our Growth plan includes extended hours, and our Enterprise plan offers 24/7 support for critical issues." },
          { question: "How do you handle our existing software?", answer: "We work with your existing tools and can help optimize, update, or replace them as needed." },
        ]}
        relatedServices={[
          { title: "Cybersecurity", href: "/cybersecurity" },
          { title: "Website Development", href: "/website-development" },
          { title: "AI Solutions", href: "/ai-solutions" },
        ]}
      />
      <Footer />
    </main>
  )
}
