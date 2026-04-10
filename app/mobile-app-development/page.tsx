"use client"

import { Navigation } from "@/components/platform/navigation"
import { Footer } from "@/components/platform/footer"
import { ServicePageTemplate } from "@/components/services/service-page-template"

export default function MobileAppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicePageTemplate
        badge="Mobile App Development"
        title="Turn Your App Idea Into Reality"
        description="Whether you're launching a startup MVP or building a business app, CipherX helps Toronto and GTA businesses create powerful mobile applications for iOS and Android."
        primaryCTA={{ text: "Discuss Your App", href: "#consultation" }}
        secondaryCTA={{ text: "View All Services", href: "/services" }}
        trustLine="50+ mobile apps launched for businesses and startups"
        problemHeading="Building an App is Hard Without the Right Partner"
        problemDescription="Many app projects fail due to poor planning, unclear requirements, or developers who don't understand business needs. The right development partner makes all the difference."
        problemPoints={[
          "Unclear requirements lead to costly rewrites",
          "Poor user experience drives users away",
          "Technical debt makes future updates expensive",
          "No clear path from idea to launch",
          "Developers who don't understand your business",
          "Hidden costs and scope creep",
        ]}
        includedHeading="What's Included in Mobile App Development"
        includedItems={[
          { title: "iOS & Android Development", description: "Native or cross-platform apps for both major platforms." },
          { title: "UI/UX Design", description: "Beautiful, intuitive interfaces that users love." },
          { title: "Backend & API Development", description: "Robust server-side systems to power your app." },
          { title: "App Store Submission", description: "We handle the submission process for you." },
          { title: "Testing & QA", description: "Thorough testing to ensure a polished launch." },
          { title: "Post-Launch Support", description: "Ongoing maintenance and updates after launch." },
        ]}
        whoItsFor={[
          "Startups",
          "Small businesses",
          "Enterprise teams",
          "Healthcare",
          "Retail & e-commerce",
          "Real estate",
          "Fitness & wellness",
          "Food & delivery",
          "Service providers",
          "Non-profits",
        ]}
        packages={[
          {
            name: "App MVP",
            price: "$15,000+",
            description: "Minimum viable product to validate your idea",
            features: [
              "Core features only",
              "Single platform (iOS or Android)",
              "Basic UI design",
              "Essential backend",
              "App store submission",
              "30 days post-launch support",
            ],
            cta: "Get Started",
          },
          {
            name: "App Standard",
            price: "$35,000+",
            description: "Full-featured app for one or both platforms",
            features: [
              "Full feature set",
              "iOS and Android",
              "Custom UI/UX design",
              "Complete backend",
              "Admin dashboard",
              "90 days support",
            ],
            cta: "Get Started",
            popular: true,
          },
          {
            name: "App Enterprise",
            price: "Custom",
            description: "Complex apps with advanced requirements",
            features: [
              "Advanced features",
              "Multiple platforms",
              "Complex integrations",
              "Scalable architecture",
              "Dedicated team",
              "Ongoing partnership",
            ],
            cta: "Contact Us",
          },
        ]}
        whyChoosePoints={[
          { icon: "Shield", title: "Secure Development", description: "Security best practices built into every app." },
          { icon: "Users", title: "Business-Focused", description: "We understand your business goals, not just code." },
          { icon: "MapPin", title: "Local Team", description: "Toronto-based team for easy collaboration." },
          { icon: "Zap", title: "Agile Process", description: "Regular updates and transparent communication." },
        ]}
        formTitle="Discuss Your Mobile App"
        formFields={[
          { name: "name", label: "Name", type: "text", required: true },
          { name: "business", label: "Business Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "phone", label: "Phone", type: "tel", required: true },
          { name: "platform", label: "Target Platform", type: "select", options: ["iOS only", "Android only", "Both iOS and Android", "Not sure yet"] },
          { name: "stage", label: "Project Stage", type: "select", options: ["Just an idea", "Have requirements", "Have designs", "Need rebuild/updates"] },
          { name: "message", label: "Tell us about your app idea", type: "textarea" },
        ]}
        formButtonText="Start App Consultation"
        faqs={[
          { question: "How much does it cost to build an app?", answer: "App costs vary widely based on complexity. Simple apps start around $15,000, while full-featured apps range from $35,000-$100,000+." },
          { question: "How long does app development take?", answer: "MVPs typically take 2-3 months. Full-featured apps take 4-6 months or more depending on complexity." },
          { question: "Should I build for iOS or Android first?", answer: "It depends on your target audience. We can help you analyze your market and make the best decision." },
          { question: "Do you build native or cross-platform apps?", answer: "We offer both options. Cross-platform (React Native, Flutter) is often more cost-effective for most business apps." },
          { question: "What happens after the app launches?", answer: "We provide post-launch support and can offer ongoing maintenance plans for updates, bug fixes, and new features." },
        ]}
        relatedServices={[
          { title: "Web App Development", href: "/web-app-development" },
          { title: "Graphic Design", href: "/graphic-design" },
          { title: "AI Solutions", href: "/ai-solutions" },
        ]}
      />
      <Footer />
    </main>
  )
}
