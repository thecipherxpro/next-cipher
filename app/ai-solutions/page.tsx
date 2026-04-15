import Link from "next/link"
import { Navigation } from "@/components/platform/navigation"
import { Footer } from "@/components/platform/footer"
import {
  SectionCard,
  SectionHeader,
  InfoCard,
  StepCard,
  FAQ,
  PanelCard,
  Input,
} from "@/components/services/service-components"

const includedServices = [
  {
    title: "Custom Chatbots",
    text: "AI assistants handling customer questions 24/7.",
  },
  {
    title: "Workflow Automation",
    text: "Automate repetitive tasks and save your team's time.",
  },
  {
    title: "Data Analysis",
    text: "Extract insights from your business data with AI.",
  },
  {
    title: "Content Generation",
    text: "AI-powered content for marketing and sales.",
  },
  {
    title: "Custom Integration",
    text: "Connect AI to your existing tools and systems.",
  },
  {
    title: "Strategy & Training",
    text: "Plan your AI roadmap and train your team.",
  },
]

const problems = [
  "Staff spending hours on repetitive, manual tasks",
  "Customers waiting too long for responses",
  "Manual data entry causing errors and delays",
  "Missing insights hidden in your business data",
  "Competitors already using AI for competitive advantage",
  "Not sure where to start with AI implementation",
]

const packages = [
  {
    name: "AI Starter",
    bestFor: "Simple AI implementation",
    points: ["Custom chatbot", "Website integration", "Basic automation", "30 days support"],
  },
  {
    name: "AI Growth",
    bestFor: "Advanced AI features",
    points: ["Advanced chatbot", "Workflow automation", "Analytics dashboard", "90 days support"],
    featured: true,
  },
  {
    name: "AI Enterprise",
    bestFor: "Complex AI systems",
    points: ["Custom AI models", "Advanced automation", "Dedicated AI strategist", "Ongoing support"],
  },
]

const relatedServices = [
  {
    title: "Web App Development",
    text: "Build custom applications with AI.",
    href: "/web-app-development",
  },
  {
    title: "Website Development",
    text: "Integrate AI into your website.",
    href: "/website-development",
  },
  {
    title: "Managed IT Support",
    text: "Keep your AI systems running smoothly.",
    href: "/managed-it-support",
  },
  {
    title: "Cybersecurity",
    text: "Secure your AI implementations.",
    href: "/cybersecurity",
  },
]

export const metadata = {
  title: "AI Solutions Toronto | Business Automation | CipherX",
  description:
    "CipherX provides AI solutions for Toronto and GTA businesses including chatbots, workflow automation, data analysis, and custom AI implementations.",
}

export default function AISolutionsPage() {
  return (
    <main className="bg-[#f7f7f2] text-[#10210f]">
      <Navigation />

      {/* HERO */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-3">
              {["AI-Powered", "Toronto & GTA", "Custom Solutions", "Quick Implementation"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-black/10 bg-[#f7f7f2] px-4 py-2 text-sm font-semibold"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              AI Solutions That Make Your Business Smarter
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
              From chatbots that handle customer service to automation that saves hours of manual work, harness AI to streamline operations and boost efficiency.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#consultation"
                className="rounded-full bg-purple-600 px-6 py-3 text-center text-sm font-bold text-white hover:opacity-90 transition-opacity"
              >
                Discuss AI Opportunities
              </Link>

              <Link
                href="#packages"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-bold hover:bg-[#f7f7f2] transition-colors"
              >
                View AI Packages
              </Link>
            </div>

            <p className="mt-5 text-sm font-medium text-gray-500">
              Start automating smarter and competing harder with AI.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Why It Matters */}
          <SectionHeader title="Why Your Business Needs AI Now" />
          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((problem, i) => (
              <div key={i} className="p-4 bg-white rounded-lg border border-black/5">
                <p className="text-sm font-medium text-gray-700">{problem}</p>
              </div>
            ))}
          </div>

          {/* What's Included */}
          <SectionHeader title="What's Included in AI Solutions" />
          <div className="grid sm:grid-cols-2 gap-4">
            {includedServices.map((service) => (
              <SectionCard key={service.title} title={service.title} text={service.text} />
            ))}
          </div>

          {/* Packages */}
          <div id="packages">
            <SectionHeader title="AI Solution Packages" />
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-xl border p-6 transition-all ${
                    pkg.featured
                      ? "bg-gray-900 text-white border-gray-900 ring-2 ring-purple-500"
                      : "bg-white border-black/10"
                  }`}
                >
                  {pkg.featured && (
                    <span className="inline-block mb-3 px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`text-xl font-bold mb-1 ${pkg.featured ? "text-white" : ""}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-4 ${pkg.featured ? "text-gray-300" : "text-gray-600"}`}>
                    {pkg.bestFor}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {pkg.points.map((point) => (
                      <li
                        key={point}
                        className={`text-sm flex items-center gap-2 ${
                          pkg.featured ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#consultation"
                    className={`block w-full py-2 text-center rounded-lg font-semibold text-sm transition-colors ${
                      pkg.featured
                        ? "bg-purple-600 text-white hover:bg-purple-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <SectionHeader title="Frequently Asked Questions" />
          <div className="space-y-4">
            {[
              {
                q: "Is AI practical for small businesses?",
                a: "Absolutely. Many AI tools are now affordable and easy to implement with real ROI.",
              },
              {
                q: "Will AI replace my employees?",
                a: "No, we use AI to enhance your team by automating repetitive tasks.",
              },
              {
                q: "How long does AI implementation take?",
                a: "Simple chatbots launch in 2-4 weeks. Complex automation takes 4-8 weeks.",
              },
              {
                q: "What about data privacy?",
                a: "We take privacy seriously and help you stay compliant with regulations.",
              },
            ].map((item, i) => (
              <FAQ key={i} question={item.q} answer={item.a} />
            ))}
          </div>

          {/* Related Services */}
          <SectionHeader title="Related Services" />
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="p-4 bg-white rounded-lg border border-black/5 hover:border-black/20 transition-colors group"
              >
                <h4 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">{service.text}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:col-span-1 space-y-4 pt-0 lg:pt-0">
          {/* Consultation */}
          <PanelCard
            heading="AI Consultation"
            text="Explore AI opportunities for your business."
            ctaText="Schedule Call"
            ctaHref="#consultation"
            microcopy="No obligation • Free 30-min call"
          />

          {/* Why CipherX */}
          <div className="rounded-lg border border-black/10 bg-white p-5">
            <h3 className="font-bold text-gray-900 mb-3">Why Choose Us</h3>
            <ul className="space-y-2">
              {[
                "Local AI expertise in Toronto",
                "SMB-focused pricing",
                "Fast implementation",
                "Practical, business-focused approach",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Package Recommendation */}
          <div className="rounded-lg border border-black/10 bg-white p-5">
            <p className="text-xs font-semibold text-purple-600 mb-2">RECOMMENDED</p>
            <h3 className="font-bold text-gray-900 mb-1">AI Growth</h3>
            <p className="text-sm text-gray-600 mb-3">Most value for growing businesses</p>
            <Link
              href="#packages"
              className="block w-full text-center py-2 border border-purple-600 text-purple-600 rounded-lg text-sm font-semibold hover:bg-purple-50 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>

      {/* CONSULTATION FORM */}
      <section id="consultation" className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <SectionHeader title="Discuss AI for Your Business" />
          <div className="mt-8 mx-auto max-w-2xl">
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Name" type="text" required />
                <Input label="Business" type="text" required />
                <Input label="Email" type="email" required />
                <Input label="Phone" type="tel" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <select
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Use case</option>
                  <option>Customer service chatbot</option>
                  <option>Workflow automation</option>
                  <option>Data analysis</option>
                  <option>Content generation</option>
                  <option>Multiple uses</option>
                </select>
                <select
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Main goal</option>
                  <option>Save time</option>
                  <option>Reduce costs</option>
                  <option>Better customer service</option>
                  <option>Scale operations</option>
                </select>
              </div>
              <textarea
                className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={4}
                placeholder="What do you want AI to help with?"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
              >
                Request AI Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
