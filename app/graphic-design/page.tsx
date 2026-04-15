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
    title: "Logo & Brand Identity",
    text: "Memorable logos and cohesive brand guidelines.",
  },
  {
    title: "Marketing Materials",
    text: "Brochures, flyers, and promotional designs.",
  },
  {
    title: "Social Media Graphics",
    text: "Scroll-stopping content for your channels.",
  },
  {
    title: "Ad Creatives",
    text: "Banner ads and promotional graphics.",
  },
  {
    title: "Presentation Design",
    text: "Professional decks that impress.",
  },
  {
    title: "Print Production",
    text: "Print-ready files and production coordination.",
  },
]

const problems = [
  "Inconsistent branding confuses customers",
  "DIY designs look unprofessional",
  "Poor marketing materials get ignored",
  "No clear visual identity across channels",
  "Social media graphics that don't stand out",
  "Print materials that don't convert",
]

const packages = [
  {
    name: "Design Starter",
    bestFor: "Essential branding for new businesses",
    points: ["Logo design", "Business cards", "Brand guidelines", "2 rounds of revisions"],
  },
  {
    name: "Design Growth",
    bestFor: "Complete brand package",
    points: ["Full branding", "Marketing templates", "Social templates", "3 rounds of revisions"],
    featured: true,
  },
  {
    name: "Design Retainer",
    bestFor: "Ongoing design support",
    points: ["Dedicated designer", "20 hours/month", "Unlimited requests", "Fast turnaround"],
  },
]

const relatedServices = [
  {
    title: "Website Development",
    text: "Implement your design online.",
    href: "/website-development",
  },
  {
    title: "Web App Development",
    text: "Beautiful interfaces for your app.",
    href: "/web-app-development",
  },
  {
    title: "Mobile App Development",
    text: "Design for iOS and Android.",
    href: "/mobile-app-development",
  },
  {
    title: "AI Solutions",
    text: "AI-powered design tools.",
    href: "/ai-solutions",
  },
]

export const metadata = {
  title: "Graphic Design Toronto | Professional Design Services | CipherX",
  description:
    "CipherX provides professional graphic design services for Toronto and GTA businesses including logos, branding, marketing materials, and social media graphics.",
}

export default function GraphicDesignPage() {
  return (
    <main className="bg-[#f7f7f2] text-[#10210f]">
      <Navigation />

      {/* HERO */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-3">
              {["Professional Design", "Toronto & GTA", "SMB Pricing", "Quick Delivery"].map(
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
              Professional Design That Elevates Your Brand
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
              Stand out with professional graphic design. We create logos, marketing materials, social media graphics, and brand assets that make an impression.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#consultation"
                className="rounded-full bg-[#e67e22] px-6 py-3 text-center text-sm font-bold text-white hover:opacity-90 transition-opacity"
              >
                Get Creative Support
              </Link>

              <Link
                href="#packages"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-bold hover:bg-[#f7f7f2] transition-colors"
              >
                View Design Packages
              </Link>
            </div>

            <p className="mt-5 text-sm font-medium text-gray-500">
              200+ brands elevated with professional design.
            </p>
          </div>
        </div>
      </section>

      {/* BODY GRID */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-8">
        <div className="space-y-8">
          {/* Why It Matters */}
          <SectionHeader title="Why Design Matters" />
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
            <SectionHeader title="Design Packages" />
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-xl border p-6 transition-all ${
                    pkg.featured
                      ? "bg-gray-900 text-white border-gray-900 ring-2 ring-orange-500"
                      : "bg-white border-black/10"
                  }`}
                >
                  {pkg.featured && (
                    <span className="inline-block mb-3 px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">
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
                        ? "bg-orange-600 text-white hover:bg-orange-700"
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
                q: "How long does logo design take?",
                a: "Logo projects typically take 1-2 weeks including revisions.",
              },
              {
                q: "Do I own the final designs?",
                a: "Yes, you receive full ownership and rights to all approved designs.",
              },
              {
                q: "What file formats do you deliver?",
                a: "We provide all necessary formats: AI, EPS, PDF, PNG, and JPG.",
              },
              {
                q: "Do you offer ongoing design support?",
                a: "Yes, our Design Retainer provides dedicated ongoing support.",
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
                <h4 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">{service.text}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
          {/* Consultation */}
          <PanelCard
            heading="Design Consultation"
            text="Discuss your creative project with our team."
            ctaText="Request Consultation"
            ctaHref="#consultation"
            microcopy="No obligation • Free initial consultation"
          />

          {/* Why CipherX */}
          <div className="rounded-lg border border-black/10 bg-white p-5">
            <h3 className="font-bold text-gray-900 mb-3">Why Us</h3>
            <ul className="space-y-2">
              {[
                "Consistent quality standards",
                "SMB-friendly pricing",
                "Toronto market knowledge",
                "Fast turnaround",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Package Recommendation */}
          <div className="rounded-lg border border-black/10 bg-white p-5">
            <p className="text-xs font-semibold text-orange-600 mb-2">RECOMMENDED</p>
            <h3 className="font-bold text-gray-900 mb-1">Design Growth</h3>
            <p className="text-sm text-gray-600 mb-3">Complete brand package</p>
            <Link
              href="#packages"
              className="block w-full text-center py-2 border border-orange-600 text-orange-600 rounded-lg text-sm font-semibold hover:bg-orange-50 transition-colors"
            >
              View Details
            </Link>
          </div>
          </div>
        </aside>
      </section>

      {/* CONSULTATION FORM */}
      <section id="consultation" className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <SectionHeader title="Request Creative Support" />
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
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Design need</option>
                  <option>Logo design</option>
                  <option>Full branding</option>
                  <option>Marketing materials</option>
                  <option>Social media graphics</option>
                  <option>Multiple needs</option>
                </select>
                <select
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Format</option>
                  <option>Digital/online</option>
                  <option>Print</option>
                  <option>Both</option>
                </select>
              </div>
              <textarea
                className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={4}
                placeholder="Tell us about your design project..."
              />
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors"
              >
                Request Design Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
