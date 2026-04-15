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
    title: "Vulnerability Scanning",
    text: "Automated and manual scans to identify security weaknesses.",
  },
  {
    title: "Penetration Testing",
    text: "Authorized security testing to find vulnerabilities before attackers.",
  },
  {
    title: "Security Infrastructure",
    text: "Firewalls, access controls, and secure network design.",
  },
  {
    title: "Compliance Support",
    text: "Meet industry standards like PIPEDA, SOC 2, and HIPAA.",
  },
  {
    title: "Incident Response",
    text: "Fast containment and recovery from security incidents.",
  },
  {
    title: "Employee Training",
    text: "Security awareness training to prevent social engineering.",
  },
]

const problems = [
  "43% of cyber attacks target small businesses",
  "60% of businesses close within 6 months of a breach",
  "Most breaches go undetected for months",
  "Ransomware attacks increased 150% year-over-year",
  "Weak passwords remain the #1 security issue",
  "No clear security incident plan in place",
]

const packages = [
  {
    name: "Security Starter",
    bestFor: "Essential protection for small teams",
    points: ["Monthly scans", "Basic firewall setup", "Password policy", "Quarterly reports"],
  },
  {
    name: "Security Growth",
    bestFor: "Comprehensive protection for growing businesses",
    points: ["Annual pen testing", "24/7 monitoring", "Incident response plan", "Employee training"],
    featured: true,
  },
  {
    name: "Security Enterprise",
    bestFor: "Advanced protection for complex environments",
    points: ["Quarterly pen testing", "Advanced threat detection", "SIEM setup", "Dedicated advisor"],
  },
]

const relatedServices = [
  {
    title: "Penetration Testing",
    text: "Deep-dive security testing.",
    href: "/penetration-testing",
  },
  {
    title: "Managed IT Support",
    text: "Reliable IT infrastructure.",
    href: "/managed-it-support",
  },
  {
    title: "Web App Development",
    text: "Secure custom applications.",
    href: "/web-app-development",
  },
  {
    title: "AI Solutions",
    text: "Smart security automation.",
    href: "/ai-solutions",
  },
]

export const metadata = {
  title: "Cybersecurity Services Toronto | Small Business Security | CipherX",
  description:
    "CipherX provides affordable cybersecurity services for Toronto and GTA small businesses, including security assessments, penetration testing, compliance support, and incident response.",
}

export default function CybersecurityPage() {
  return (
    <main className="bg-[#f7f7f2] text-[#10210f]">
      <Navigation />

      {/* HERO */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-3">
              {["Security First", "Toronto & GTA", "SMB Pricing", "Free Assessment"].map(
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
              Cybersecurity That Protects Toronto Businesses
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
              From vulnerability assessments to incident response, CipherX helps you secure your systems, reduce breach risk, and meet compliance requirements.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#consultation"
                className="rounded-full bg-[#e74c3c] px-6 py-3 text-center text-sm font-bold text-white hover:opacity-90 transition-opacity"
              >
                Request Security Assessment
              </Link>

              <Link
                href="#packages"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-bold hover:bg-[#f7f7f2] transition-colors"
              >
                View Security Packages
              </Link>
            </div>

            <p className="mt-5 text-sm font-medium text-gray-500">
              Get protected against cyber threats and reduce your security risk.
            </p>
          </div>

      {/* BODY GRID */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-8">
        <div className="space-y-8">
          {/* Why It Matters */}
          <SectionHeader title="Why Small Businesses Get Targeted" />
          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((problem, i) => (
              <div key={i} className="p-4 bg-white rounded-lg border border-black/5">
                <p className="text-sm font-medium text-gray-700">{problem}</p>
              </div>
            ))}
          </div>

          {/* What's Included */}
          <SectionHeader title="What's Included in Our Services" />
          <div className="grid sm:grid-cols-2 gap-4">
            {includedServices.map((service) => (
              <SectionCard key={service.title} title={service.title} text={service.text} />
            ))}
          </div>

          {/* Packages */}
          <div id="packages">
            <SectionHeader title="Security Packages" />
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
                q: "How much does cybersecurity cost?",
                a: "Our packages start at $499/month. We also offer one-time assessments.",
              },
              {
                q: "How long does a penetration test take?",
                a: "1-2 weeks depending on scope. Results include detailed recommendations.",
              },
              {
                q: "What if we get breached?",
                a: "Our incident response service helps contain, investigate, and recover quickly.",
              },
              {
                q: "Are you HIPAA/SOC 2 compliant?",
                a: "Yes, we help businesses meet industry compliance requirements.",
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
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1 space-y-4">
          {/* Consultation */}
          <PanelCard
            heading="Request Free Assessment"
            text="Discuss your security needs with our experts."
            ctaText="Book Consultation"
            ctaHref="#consultation"
            microcopy="No obligation • Response within 24 hours"
          />

          {/* Why CipherX */}
          <div className="rounded-lg border border-black/10 bg-white p-5">
            <h3 className="font-bold text-gray-900 mb-3">Why CipherX</h3>
            <ul className="space-y-2">
              {[
                "Toronto-based security team",
                "SMB-focused pricing",
                "Fast incident response",
                "Compliance-ready approach",
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
            <h3 className="font-bold text-gray-900 mb-1">Security Growth</h3>
            <p className="text-sm text-gray-600 mb-3">Most popular for small businesses</p>
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
          <SectionHeader title="Request Your Security Assessment" />
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
                  <option value="">Select team size</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>200+</option>
                </select>
                <select
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Main concern</option>
                  <option>General security review</option>
                  <option>Penetration testing</option>
                  <option>Compliance requirements</option>
                  <option>Recent incident</option>
                  <option>Other</option>
                </select>
              </div>
              <textarea
                className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Tell us about your security needs..."
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Request Assessment
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
