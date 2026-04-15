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
    title: "Custom Web App Development",
    text: "Built from scratch to match your exact requirements.",
  },
  {
    title: "UI/UX Design",
    text: "Beautiful, intuitive interfaces your users will love.",
  },
  {
    title: "Database & Backend",
    text: "Robust systems powering your application.",
  },
  {
    title: "Third-Party Integrations",
    text: "Connect with your existing tools and services.",
  },
  {
    title: "Cloud Deployment",
    text: "Hosted on reliable, scalable infrastructure.",
  },
  {
    title: "Training & Support",
    text: "Your team gets documentation and training.",
  },
]

const problems = [
  "Spreadsheets and manual processes slow you down",
  "Generic software doesn't fit your workflow",
  "Multiple tools create data silos",
  "No visibility into business operations",
  "Customer-facing processes are clunky",
  "Scaling means adding more manual work",
]

const packages = [
  {
    name: "Web App Starter",
    bestFor: "Simple internal tools",
    points: ["Single-purpose app", "Basic dashboard", "Simple database", "30 days support"],
  },
  {
    name: "Web App Standard",
    bestFor: "Full-featured applications",
    points: ["Multi-feature app", "Advanced dashboard", "Integrations", "90 days support"],
    featured: true,
  },
  {
    name: "Web App Enterprise",
    bestFor: "Complex SaaS platforms",
    points: ["Custom development", "Multi-tenant", "Scalable architecture", "Ongoing support"],
  },
]

const relatedServices = [
  {
    title: "Mobile App Development",
    text: "Bring your app to iOS and Android.",
    href: "/mobile-app-development",
  },
  {
    title: "Website Development",
    text: "Powerful websites that convert.",
    href: "/website-development",
  },
  {
    title: "AI Solutions",
    text: "Add AI capabilities to your app.",
    href: "/ai-solutions",
  },
  {
    title: "Cybersecurity",
    text: "Enterprise-grade app security.",
    href: "/cybersecurity",
  },
]

export const metadata = {
  title: "Web App Development Toronto | Custom Applications | CipherX",
  description:
    "CipherX builds custom web applications for Toronto and GTA businesses including internal tools, customer portals, booking systems, and full SaaS products.",
}

export default function WebAppDevelopmentPage() {
  return (
    <main className="bg-[#f7f7f2] text-[#10210f]">
      <Navigation />

      {/* HERO */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-3">
              {["Custom Built", "Toronto & GTA", "Scalable", "Fully Supported"].map(
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
              Custom Web Apps Built for Your Business
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
              From internal tools to customer portals, we build custom web applications that solve real business problems and grow with your company.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#consultation"
                className="rounded-full bg-[#3498db] px-6 py-3 text-center text-sm font-bold text-white hover:opacity-90 transition-opacity"
              >
                Start Your Project
              </Link>

              <Link
                href="#packages"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-bold hover:bg-[#f7f7f2] transition-colors"
              >
                View Packages
              </Link>
            </div>

            <p className="mt-5 text-sm font-medium text-gray-500">
              40+ web applications powering Toronto businesses.
            </p>
          </div>
        </div>
      </section>

      {/* BODY GRID */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-8">
        <div className="space-y-8">
          {/* Why It Matters */}
          <SectionHeader title="Why Custom Web Apps Win" />
          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((problem, i) => (
              <div key={i} className="p-4 bg-white rounded-lg border border-black/5">
                <p className="text-sm font-medium text-gray-700">{problem}</p>
              </div>
            ))}
          </div>

          {/* What's Included */}
          <SectionHeader title="What's Included" />
          <div className="grid sm:grid-cols-2 gap-4">
            {includedServices.map((service) => (
              <SectionCard key={service.title} title={service.title} text={service.text} />
            ))}
          </div>

          {/* Packages */}
          <div id="packages">
            <SectionHeader title="Web App Packages" />
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-xl border p-6 transition-all ${
                    pkg.featured
                      ? "bg-gray-900 text-white border-gray-900 ring-2 ring-blue-500"
                      : "bg-white border-black/10"
                  }`}
                >
                  {pkg.featured && (
                    <span className="inline-block mb-3 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
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
                        ? "bg-blue-600 text-white hover:bg-blue-700"
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
                q: "What's the difference between a website and a web app?",
                a: "Websites display information. Web apps are interactive tools where users log in, enter data, and perform tasks.",
              },
              {
                q: "How long does development take?",
                a: "Simple apps take 2-3 months. Complex applications take 4-8+ months depending on requirements.",
              },
              {
                q: "Can you integrate with our existing software?",
                a: "Yes, we regularly integrate with CRMs, accounting software, payment processors, and other tools.",
              },
              {
                q: "What about hosting?",
                a: "We deploy to reliable cloud providers and can manage hosting for you.",
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
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">{service.text}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <aside className="hidden lg:block h-screen sticky top-0">
          <div className="h-full overflow-y-auto pr-2 space-y-4 flex flex-col">
          {/* Consultation */}
          <PanelCard
            heading="Project Review"
            text="Discuss your app requirements with our team."
            ctaText="Request Review"
            ctaHref="#consultation"
            microcopy="Free consultation • No obligation"
          />

          {/* Why CipherX */}
          <div className="rounded-lg border border-black/10 bg-white p-5">
            <h3 className="font-bold text-gray-900 mb-3">Why Us</h3>
            <ul className="space-y-2">
              {[
                "User-centered design approach",
                "SMB-friendly pricing",
                "Toronto-based development team",
                "Scalable from day one",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Package Recommendation */}
          <div className="rounded-lg border border-black/10 bg-white p-5">
            <p className="text-xs font-semibold text-blue-600 mb-2">RECOMMENDED</p>
            <h3 className="font-bold text-gray-900 mb-1">Web App Standard</h3>
            <p className="text-sm text-gray-600 mb-3">Best for business applications</p>
            <Link
              href="#packages"
              className="block w-full text-center py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              View Details
            </Link>
          </div>
        </aside>
      </section>

      {/* CONSULTATION FORM */}
      <section id="consultation" className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <SectionHeader title="Start Your Web App Project" />
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
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">App type</option>
                  <option>Internal tool</option>
                  <option>Customer portal</option>
                  <option>Booking system</option>
                  <option>SaaS product</option>
                  <option>Dashboard</option>
                </select>
                <select
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Expected users</option>
                  <option>1-10 internal</option>
                  <option>11-50 internal</option>
                  <option>Public facing (hundreds)</option>
                  <option>Public facing (thousands)</option>
                </select>
              </div>
              <textarea
                className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Describe the problem you want to solve..."
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Request Project Review
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
