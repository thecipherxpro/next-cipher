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
    title: "Custom Website Design",
    text: "Unique designs that reflect your brand.",
  },
  {
    title: "SEO Optimization",
    text: "Built-in SEO to rank higher on Google.",
  },
  {
    title: "Mobile Optimization",
    text: "Perfect experience on all devices.",
  },
  {
    title: "E-commerce Integration",
    text: "Sell products online with secure payments.",
  },
  {
    title: "Booking & Forms",
    text: "Let customers easily contact or book.",
  },
  {
    title: "Hosting & Maintenance",
    text: "Reliable hosting and ongoing updates.",
  },
]

const problems = [
  "Outdated design makes you look unprofessional",
  "Slow websites lose customers and rankings",
  "Poor SEO means customers can't find you",
  "Not mobile-optimized loses mobile shoppers",
  "No clear call-to-action or contact options",
  "Manual content updates are time-consuming",
]

const packages = [
  {
    name: "Website Starter",
    bestFor: "Professional websites for small businesses",
    points: ["5-page website", "Mobile responsive", "Basic SEO", "1 year hosting"],
  },
  {
    name: "Website Growth",
    bestFor: "Feature-rich sites for growing businesses",
    points: ["10+ pages", "Advanced SEO", "Blog setup", "Analytics"],
    featured: true,
  },
  {
    name: "Website Enterprise",
    bestFor: "E-commerce and complex websites",
    points: ["Unlimited pages", "E-commerce", "Custom features", "Priority support"],
  },
]

const relatedServices = [
  {
    title: "Web App Development",
    text: "Custom interactive applications.",
    href: "/web-app-development",
  },
  {
    title: "Graphic Design",
    text: "Professional brand and marketing materials.",
    href: "/graphic-design",
  },
  {
    title: "AI Solutions",
    text: "Smart features for your website.",
    href: "/ai-solutions",
  },
  {
    title: "Managed IT Support",
    text: "Keep your website running smoothly.",
    href: "/managed-it-support",
  },
]

export const metadata = {
  title: "Website Development Toronto | Custom Websites | CipherX",
  description:
    "CipherX builds fast, SEO-optimized websites for Toronto and GTA businesses including e-commerce sites, booking systems, and content management.",
}

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-[#f7f7f2] text-[#10210f]">
      <Navigation />

      {/* HERO */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-3">
              {["SEO Optimized", "Toronto & GTA", "Mobile Ready", "Fast Delivery"].map(
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
              Websites That Bring in Customers
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
              Your website is your first impression. We create fast, beautiful, SEO-optimized websites that help Toronto and GTA businesses convert visitors into customers.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#consultation"
                className="rounded-full bg-green-600 px-6 py-3 text-center text-sm font-bold text-white hover:opacity-90 transition-opacity"
              >
                Request Website Consultation
              </Link>

              <Link
                href="#packages"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-bold hover:bg-[#f7f7f2] transition-colors"
              >
                View Packages
              </Link>
            </div>

            <p className="mt-5 text-sm font-medium text-gray-500">
              100+ websites launched for Toronto and GTA businesses.
            </p>
          </div>
        </div>
      </section>

      {/* BODY GRID */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-8">
        <div className="space-y-8">
          {/* Why It Matters */}
          <SectionHeader title="Your Website Should Work Harder" />
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
            <SectionHeader title="Website Packages" />
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-xl border p-6 transition-all ${
                    pkg.featured
                      ? "bg-gray-900 text-white border-gray-900 ring-2 ring-green-500"
                      : "bg-white border-black/10"
                  }`}
                >
                  {pkg.featured && (
                    <span className="inline-block mb-3 px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
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
                        ? "bg-green-600 text-white hover:bg-green-700"
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
                q: "How long does website development take?",
                a: "Most websites launch within 4-6 weeks. E-commerce sites may take 8-12 weeks.",
              },
              {
                q: "Do you help with content and images?",
                a: "We can help with copywriting and recommend stock photos or original photography.",
              },
              {
                q: "Will my website work on mobile?",
                a: "Yes, all our websites are fully responsive and optimized for mobile devices.",
              },
              {
                q: "What about hosting and maintenance?",
                a: "We include reliable hosting and handle updates and security patches.",
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
                <h4 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
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
            heading="Website Consultation"
            text="Get a free quote for your website project."
            ctaText="Request Consultation"
            ctaHref="#consultation"
            microcopy="No obligation • Free quote"
          />

          {/* Why CipherX */}
          <div className="rounded-lg border border-black/10 bg-white p-5">
            <h3 className="font-bold text-gray-900 mb-3">Why Choose Us</h3>
            <ul className="space-y-2">
              {[
                "Local SEO expertise for Toronto market",
                "SMB-friendly pricing",
                "Fast delivery (4-6 weeks typical)",
                "Mobile-optimized by default",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Package Recommendation */}
          <div className="rounded-lg border border-black/10 bg-white p-5">
            <p className="text-xs font-semibold text-green-600 mb-2">RECOMMENDED</p>
            <h3 className="font-bold text-gray-900 mb-1">Website Growth</h3>
            <p className="text-sm text-gray-600 mb-3">Most features for the price</p>
            <Link
              href="#packages"
              className="block w-full text-center py-2 border border-green-600 text-green-600 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors"
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
          <SectionHeader title="Request Your Website Consultation" />
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
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Website type</option>
                  <option>Business website</option>
                  <option>E-commerce store</option>
                  <option>Portfolio/showcase</option>
                  <option>Blog/content site</option>
                  <option>Landing page</option>
                </select>
                <select
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Current status</option>
                  <option>Starting fresh</option>
                  <option>Need redesign</option>
                  <option>Need updates</option>
                </select>
              </div>
              <textarea
                className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={4}
                placeholder="Tell us about your website goals..."
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
