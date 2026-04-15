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
    title: "iOS & Android Development",
    text: "Native or cross-platform apps for both platforms.",
  },
  {
    title: "UI/UX Design",
    text: "Beautiful interfaces users love.",
  },
  {
    title: "Backend Development",
    text: "Robust server systems powering your app.",
  },
  {
    title: "App Store Submission",
    text: "We handle the submission process.",
  },
  {
    title: "Testing & QA",
    text: "Thorough testing for a polished launch.",
  },
  {
    title: "Post-Launch Support",
    text: "Maintenance and updates after launch.",
  },
]

const problems = [
  "Unclear requirements lead to costly rewrites",
  "Poor user experience drives users away",
  "Technical debt makes future updates expensive",
  "No clear path from idea to launch",
  "Developers who don't understand your business",
  "Hidden costs and scope creep",
]

const packages = [
  {
    name: "App MVP",
    bestFor: "Validate your idea",
    points: ["Core features", "Single platform", "Basic UI", "30 days support"],
  },
  {
    name: "App Standard",
    bestFor: "Full-featured app for market",
    points: ["Full features", "Both platforms", "Custom UI/UX", "90 days support"],
    featured: true,
  },
  {
    name: "App Enterprise",
    bestFor: "Complex apps with advanced needs",
    points: ["Advanced features", "Multiple platforms", "Scalable architecture", "Ongoing support"],
  },
]

const relatedServices = [
  {
    title: "Web App Development",
    text: "Build web-based applications.",
    href: "/web-app-development",
  },
  {
    title: "Graphic Design",
    text: "Professional app design.",
    href: "/graphic-design",
  },
  {
    title: "AI Solutions",
    text: "Add intelligence to your app.",
    href: "/ai-solutions",
  },
  {
    title: "Cybersecurity",
    text: "Secure your app and user data.",
    href: "/cybersecurity",
  },
]

export const metadata = {
  title: "Mobile App Development Toronto | iOS Android Apps | CipherX",
  description:
    "CipherX develops custom mobile applications for Toronto and GTA startups and businesses for iOS and Android platforms.",
}

export default function MobileAppDevelopmentPage() {
  return (
    <main className="bg-[#f7f7f2] text-[#10210f]">
      <Navigation />

      {/* HERO */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-3">
              {["iOS & Android", "Toronto & GTA", "Startup Friendly", "End-to-End"].map(
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
              Turn Your App Idea Into Reality
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
              From MVP to full-featured app, we build powerful mobile applications for iOS and Android that solve real business problems.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#consultation"
                className="rounded-full bg-[#8e44ad] px-6 py-3 text-center text-sm font-bold text-white hover:opacity-90 transition-opacity"
              >
                Discuss Your App
              </Link>

              <Link
                href="#packages"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-bold hover:bg-[#f7f7f2] transition-colors"
              >
                View App Packages
              </Link>
            </div>

            <p className="mt-5 text-sm font-medium text-gray-500">
              50+ mobile apps launched for businesses and startups.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Why It Matters */}
          <SectionHeader title="Building an App is Hard Without a Partner" />
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
            <SectionHeader title="Mobile App Packages" />
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
                q: "How much does app development cost?",
                a: "MVPs start around $15,000. Full apps range $35,000-$100,000+ depending on complexity.",
              },
              {
                q: "How long does development take?",
                a: "MVPs take 2-3 months. Full-featured apps take 4-6+ months.",
              },
              {
                q: "Should I build iOS or Android first?",
                a: "We analyze your target audience and help you choose the best platform strategy.",
              },
              {
                q: "What happens after launch?",
                a: "We provide post-launch support and ongoing maintenance for updates and bug fixes.",
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
            heading="App Consultation"
            text="Discuss your app idea with our team."
            ctaText="Schedule Call"
            ctaHref="#consultation"
            microcopy="Free 30-min call • No obligation"
          />

          {/* Why CipherX */}
          <div className="rounded-lg border border-black/10 bg-white p-5">
            <h3 className="font-bold text-gray-900 mb-3">Why Us</h3>
            <ul className="space-y-2">
              {[
                "Business-focused development",
                "Startup-friendly pricing",
                "Toronto-based team",
                "Transparent communication",
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
            <h3 className="font-bold text-gray-900 mb-1">App Standard</h3>
            <p className="text-sm text-gray-600 mb-3">Best for market launch</p>
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
          <SectionHeader title="Discuss Your Mobile App" />
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
                  <option value="">Target platform</option>
                  <option>iOS only</option>
                  <option>Android only</option>
                  <option>Both iOS and Android</option>
                </select>
                <select
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Project stage</option>
                  <option>Just an idea</option>
                  <option>Have requirements</option>
                  <option>Have designs</option>
                  <option>Need rebuild</option>
                </select>
              </div>
              <textarea
                className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={4}
                placeholder="Tell us about your app idea..."
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
              >
                Start App Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
