"use client"

import { Navigation } from "@/components/platform/navigation"
import { Footer } from "@/components/platform/footer"
import { ServicePageTemplate } from "@/components/services/service-page-template"

export default function AISolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicePageTemplate
        badge="AI Solutions"
        title="Put AI to Work for Your Business"
        description="From chatbots that handle customer questions to automation that saves hours of manual work, CipherX helps Toronto and GTA businesses harness the power of AI in practical, affordable ways."
        primaryCTA={{ text: "Ask About AI", href: "#consultation" }}
        secondaryCTA={{ text: "View All Services", href: "/services" }}
        trustLine="Helping businesses automate smarter with AI"
        problemHeading="Your Competitors Are Already Using AI"
        problemDescription="AI isn't just for big tech companies anymore. Small businesses that embrace AI are gaining advantages in customer service, efficiency, and decision-making."
        problemPoints={[
          "Staff spending hours on repetitive tasks",
          "Customers waiting too long for responses",
          "Manual data entry causing errors",
          "Missing insights hidden in your data",
          "Falling behind competitors using AI",
          "Not sure where to start with AI",
        ]}
        includedHeading="What's Included in AI Solutions"
        includedItems={[
          { title: "Custom Chatbots", description: "AI assistants that handle customer questions 24/7." },
          { title: "Workflow Automation", description: "Automate repetitive tasks and processes." },
          { title: "AI Integration", description: "Add AI capabilities to your existing tools." },
          { title: "Data Analysis", description: "Extract insights from your business data." },
          { title: "Content Generation", description: "AI-powered content for marketing and communications." },
          { title: "Strategy & Implementation", description: "Guidance on where AI can help most." },
        ]}
        whoItsFor={[
          "Customer service teams",
          "Sales teams",
          "Marketing teams",
          "Operations managers",
          "Healthcare practices",
          "E-commerce businesses",
          "Professional services",
          "Real estate agencies",
          "Financial services",
          "Growing startups",
        ]}
        packages={[
          {
            name: "AI Starter",
            price: "$2,500",
            description: "Simple AI implementation",
            features: [
              "AI chatbot setup",
              "Basic knowledge base",
              "Website integration",
              "Monthly performance report",
              "30 days support",
            ],
            cta: "Get Started",
          },
          {
            name: "AI Growth",
            price: "$7,500",
            description: "Advanced AI implementation",
            features: [
              "Custom AI assistant",
              "Workflow automation",
              "Multiple integrations",
              "Analytics dashboard",
              "Training & documentation",
              "90 days support",
            ],
            cta: "Get Started",
            popular: true,
          },
          {
            name: "AI Enterprise",
            price: "Custom",
            description: "Complex AI solutions",
            features: [
              "Custom AI development",
              "Advanced automation",
              "Multi-system integration",
              "Dedicated AI strategist",
              "Ongoing optimization",
              "Priority support",
            ],
            cta: "Contact Us",
          },
        ]}
        whyChoosePoints={[
          { icon: "Shield", title: "Secure AI", description: "Your data stays private and protected." },
          { icon: "Users", title: "Human-Centered", description: "AI that enhances, not replaces, your team." },
          { icon: "MapPin", title: "Local Experts", description: "Toronto team that understands your market." },
          { icon: "Zap", title: "Quick Results", description: "Start seeing benefits in weeks, not months." },
        ]}
        formTitle="Discuss AI for Your Business"
        formFields={[
          { name: "name", label: "Name", type: "text", required: true },
          { name: "business", label: "Business Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "phone", label: "Phone", type: "tel", required: true },
          { name: "usecase", label: "Primary Use Case", type: "select", options: ["Customer service chatbot", "Workflow automation", "Data analysis", "Content generation", "Multiple uses", "Not sure yet"] },
          { name: "goal", label: "Main Business Goal", type: "select", options: ["Save time", "Reduce costs", "Improve customer service", "Scale operations", "Competitive advantage", "Other"] },
          { name: "message", label: "Tell us what you want AI to help with", type: "textarea" },
        ]}
        formButtonText="Request AI Consultation"
        faqs={[
          { question: "Is AI practical for small businesses?", answer: "Absolutely. Many AI tools are now affordable and easy to implement. We focus on practical applications that deliver real ROI for small businesses." },
          { question: "Will AI replace my employees?", answer: "Our approach is to use AI to enhance your team's capabilities, not replace them. AI handles repetitive tasks so your team can focus on higher-value work." },
          { question: "How long does AI implementation take?", answer: "Simple chatbots can be up in 2-4 weeks. More complex automation projects typically take 4-8 weeks." },
          { question: "What about data privacy?", answer: "We take data privacy seriously. Your data stays secure, and we help you implement AI in compliance with privacy regulations." },
          { question: "Do I need technical expertise to use AI?", answer: "No, we handle the technical setup and provide training so your team can use the AI tools without technical knowledge." },
        ]}
        relatedServices={[
          { title: "Web App Development", href: "/web-app-development" },
          { title: "Website Development", href: "/website-development" },
          { title: "Managed IT Support", href: "/managed-it-support" },
        ]}
      />
      <Footer />
    </main>
  )
}
