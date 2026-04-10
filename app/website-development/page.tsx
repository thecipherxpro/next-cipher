"use client"

import { Navigation } from "@/components/platform/navigation"
import { Footer } from "@/components/platform/footer"
import { ServicePageTemplate } from "@/components/services/service-page-template"

export default function WebsiteDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicePageTemplate
        badge="Website Development"
        title="Build a Website That Brings in Customers"
        description="Your website is often the first impression customers have of your business. CipherX creates modern, fast, SEO-optimized websites that help Toronto and GTA businesses stand out and convert visitors."
        primaryCTA={{ text: "Request Website Consultation", href: "#consultation" }}
        secondaryCTA={{ text: "View All Services", href: "/services" }}
        trustLine="100+ websites launched for Toronto and GTA businesses"
        problemHeading="Your Website Should Work Harder for You"
        problemDescription="Many small business websites are outdated, slow, or invisible to search engines. A weak online presence costs you customers every day."
        problemPoints={[
          "Outdated design makes your business look unprofessional",
          "Slow loading times drive visitors away",
          "Poor SEO means customers can't find you on Google",
          "No mobile optimization loses mobile searchers",
          "Missing contact forms and booking systems hurt conversions",
          "No clear call-to-action leaves visitors confused",
        ]}
        includedHeading="What's Included in Website Development"
        includedItems={[
          { title: "Custom Website Design", description: "Unique designs that reflect your brand and connect with customers." },
          { title: "SEO Optimization", description: "Built-in SEO to help you rank higher in local searches." },
          { title: "E-commerce & Online Stores", description: "Sell products online with secure payment processing." },
          { title: "Booking & Contact Forms", description: "Let customers book appointments or reach out easily." },
          { title: "Mobile-Responsive Design", description: "Looks great and works perfectly on all devices." },
          { title: "Hosting & Maintenance", description: "Reliable hosting and ongoing updates included." },
        ]}
        whoItsFor={[
          "Local businesses",
          "Restaurants & cafes",
          "Medical clinics",
          "Law firms",
          "Real estate agents",
          "Contractors",
          "Retail stores",
          "Service providers",
          "Consultants",
          "Non-profits",
        ]}
        packages={[
          {
            name: "Website Starter",
            price: "$2,499",
            description: "Professional website for small businesses",
            features: [
              "5-page custom website",
              "Mobile-responsive design",
              "Basic SEO setup",
              "Contact form",
              "1 year hosting included",
              "2 rounds of revisions",
            ],
            cta: "Get Started",
          },
          {
            name: "Website Growth",
            price: "$4,999",
            description: "Feature-rich website for growing businesses",
            features: [
              "Up to 10 pages",
              "Advanced SEO optimization",
              "Booking/scheduling system",
              "Blog setup",
              "Google Analytics integration",
              "3 rounds of revisions",
            ],
            cta: "Get Started",
            popular: true,
          },
          {
            name: "Website Enterprise",
            price: "Custom",
            description: "E-commerce and complex websites",
            features: [
              "Unlimited pages",
              "E-commerce functionality",
              "Custom integrations",
              "Advanced features",
              "Priority support",
              "Ongoing maintenance",
            ],
            cta: "Contact Us",
          },
        ]}
        whyChoosePoints={[
          { icon: "Shield", title: "Secure by Default", description: "SSL, security updates, and best practices built in." },
          { icon: "Users", title: "SMB Pricing", description: "Quality websites at small business prices." },
          { icon: "MapPin", title: "Local SEO Focus", description: "Optimized to rank in Toronto and GTA searches." },
          { icon: "Zap", title: "Fast Delivery", description: "Most websites launched within 4-6 weeks." },
        ]}
        formTitle="Request a Website Consultation"
        formFields={[
          { name: "name", label: "Name", type: "text", required: true },
          { name: "business", label: "Business Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "phone", label: "Phone", type: "tel", required: true },
          { name: "type", label: "Website Type", type: "select", options: ["Business website", "E-commerce store", "Portfolio", "Blog", "Landing page", "Other"] },
          { name: "existing", label: "Do you have an existing website?", type: "select", options: ["Yes, needs redesign", "Yes, needs updates", "No, starting fresh"] },
          { name: "message", label: "Tell us about your website goals", type: "textarea" },
        ]}
        formButtonText="Request Website Consultation"
        faqs={[
          { question: "How long does it take to build a website?", answer: "Most websites are completed within 4-6 weeks. E-commerce and complex sites may take 8-12 weeks." },
          { question: "Do you help with content and images?", answer: "We can help with content writing and provide guidance on images. Stock photo packages are also available." },
          { question: "Will my website work on mobile phones?", answer: "Yes, all our websites are fully responsive and optimized for mobile devices, tablets, and desktops." },
          { question: "What about website hosting?", answer: "We include reliable hosting with all packages. First year is included, then affordable monthly rates apply." },
          { question: "Can I update the website myself?", answer: "Yes, we build on user-friendly platforms and provide training so you can make basic updates yourself." },
        ]}
        relatedServices={[
          { title: "Graphic Design", href: "/graphic-design" },
          { title: "AI Solutions", href: "/ai-solutions" },
          { title: "Web App Development", href: "/web-app-development" },
        ]}
      />
      <Footer />
    </main>
  )
}
