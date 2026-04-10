"use client"

import { Navigation } from "@/components/platform/navigation"
import { Footer } from "@/components/platform/footer"
import { ServicePageTemplate } from "@/components/services/service-page-template"

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicePageTemplate
        badge="Cybersecurity Services"
        title="Protect Your Business with Expert Cybersecurity"
        description="CipherX helps Toronto and GTA businesses identify vulnerabilities, prevent breaches, and build stronger security infrastructure with practical, affordable cybersecurity services."
        primaryCTA={{ text: "Free Security Consultation", href: "#consultation" }}
        secondaryCTA={{ text: "View All Services", href: "/services" }}
        trustLine="Trusted by 200+ businesses across Toronto and the GTA"
        problemHeading="Why Small Businesses Are Prime Targets"
        problemDescription="Many small and mid-size businesses assume they're too small to be targeted by cybercriminals. In reality, they're often the easiest targets due to limited security resources and outdated systems."
        problemPoints={[
          "43% of cyber attacks target small businesses",
          "60% of small businesses close within 6 months of a major breach",
          "Most breaches go undetected for months",
          "Ransomware attacks on SMBs increased 150% in the past year",
          "Weak passwords and unpatched software are the top entry points",
          "Employee mistakes account for 95% of security incidents",
        ]}
        includedHeading="What's Included in Our Cybersecurity Services"
        includedItems={[
          { title: "Penetration Testing", description: "Simulate real attacks to find vulnerabilities before hackers do." },
          { title: "Vulnerability Assessment", description: "Comprehensive scans and analysis of your systems and networks." },
          { title: "Malware & Threat Analysis", description: "Identify, analyze, and remove malicious software from your systems." },
          { title: "Security Infrastructure Setup", description: "Build secure networks, firewalls, and access controls." },
          { title: "Compliance Support", description: "Meet industry standards like PIPEDA, SOC 2, and HIPAA." },
          { title: "Employee Training", description: "Security awareness training to prevent social engineering attacks." },
        ]}
        whoItsFor={[
          "Small businesses",
          "Medical clinics",
          "Law firms",
          "Financial services",
          "Retail stores",
          "E-commerce",
          "Startups",
          "Professional offices",
          "Construction companies",
          "Real estate agencies",
        ]}
        packages={[
          {
            name: "Security Starter",
            price: "$499/mo",
            description: "Essential protection for small businesses",
            features: [
              "Monthly vulnerability scans",
              "Basic firewall setup",
              "Password policy setup",
              "Email security review",
              "Quarterly security report",
            ],
            cta: "Get Started",
          },
          {
            name: "Security Growth",
            price: "$999/mo",
            description: "Comprehensive protection for growing businesses",
            features: [
              "Everything in Starter",
              "Annual penetration test",
              "24/7 monitoring setup",
              "Incident response plan",
              "Employee security training",
              "Compliance documentation",
            ],
            cta: "Get Started",
            popular: true,
          },
          {
            name: "Security Enterprise",
            price: "Custom",
            description: "Full-scale security for complex environments",
            features: [
              "Everything in Growth",
              "Quarterly penetration tests",
              "Advanced threat detection",
              "SIEM implementation",
              "Dedicated security advisor",
              "Custom compliance programs",
            ],
            cta: "Contact Us",
          },
        ]}
        whyChoosePoints={[
          { icon: "Shield", title: "Security-First", description: "Every solution built with security as the foundation." },
          { icon: "Users", title: "SMB Focused", description: "Pricing and services designed for small businesses." },
          { icon: "MapPin", title: "Toronto & GTA", description: "Local team that understands your market." },
          { icon: "Zap", title: "Fast Response", description: "Quick turnaround on assessments and incidents." },
        ]}
        formTitle="Request a Free Security Consultation"
        formFields={[
          { name: "name", label: "Name", type: "text", required: true },
          { name: "business", label: "Business Name", type: "text", required: true },
          { name: "email", label: "Work Email", type: "email", required: true },
          { name: "phone", label: "Phone", type: "tel", required: true },
          { name: "employees", label: "Number of Employees", type: "select", options: ["1-10", "11-50", "51-200", "200+"] },
          { name: "concern", label: "Main Security Concern", type: "select", options: ["General security review", "Penetration testing", "Compliance requirements", "Recent incident", "Other"] },
          { name: "message", label: "Tell us more about your needs", type: "textarea" },
        ]}
        formButtonText="Request Security Consultation"
        faqs={[
          { question: "How long does a penetration test take?", answer: "A typical penetration test takes 1-2 weeks depending on the scope and complexity of your systems. We provide detailed findings and remediation recommendations." },
          { question: "Do you offer ongoing security monitoring?", answer: "Yes, we offer 24/7 security monitoring as part of our Growth and Enterprise packages, or as a standalone service." },
          { question: "What industries do you work with?", answer: "We work with businesses across all industries, with particular expertise in healthcare, legal, financial services, and retail." },
          { question: "How much does cybersecurity cost for a small business?", answer: "Our packages start at $499/month for essential protection. We also offer one-time assessments and custom solutions based on your needs." },
          { question: "What happens if we have a security incident?", answer: "We provide incident response services to help contain, investigate, and recover from security incidents. Response time depends on your service level." },
        ]}
        relatedServices={[
          { title: "Penetration Testing", href: "/penetration-testing" },
          { title: "Compliance Testing", href: "/compliance-testing" },
          { title: "Managed IT Support", href: "/managed-it-support" },
          { title: "AI Solutions", href: "/ai-solutions" },
        ]}
      />
      <Footer />
    </main>
  )
}
