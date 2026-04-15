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
    title: "Help Desk & Remote Support",
    text: "Support for day-to-day technical issues, staff questions, and remote troubleshooting.",
  },
  {
    title: "Hardware Setup & Repairs",
    text: "Device setup, repair support, and troubleshooting for business equipment.",
  },
  {
    title: "Network Setup & Maintenance",
    text: "Reliable network setup and maintenance for offices, clinics, and growing teams.",
  },
  {
    title: "Software Installation & Licensing",
    text: "Business software setup, licensing guidance, and configuration support.",
  },
  {
    title: "Data Backup & Recovery",
    text: "Backup planning and recovery support to reduce business disruption.",
  },
  {
    title: "Vendor Coordination",
    text: "Help with technology vendors, procurement, setup, and service coordination.",
  },
]

const problems = [
  "Recurring computer or network issues",
  "No internal IT person",
  "Slow systems or poor setup",
  "Missing backup process",
  "Staff losing time on technical problems",
  "Unmanaged software, vendors, or devices",
]

const packages = [
  {
    name: "Starter",
    bestFor: "Startups and very small businesses",
    points: ["Basic support", "Setup help", "Essential troubleshooting", "Foundational systems"],
  },
  {
    name: "Growth",
    bestFor: "Active small businesses",
    points: ["Expanded support", "Remote monitoring", "Network help", "Software support"],
    featured: true,
  },
  {
    name: "Scale",
    bestFor: "Growing teams",
    points: ["Advanced support", "Broader coverage", "Custom setup", "Ongoing improvements"],
  },
]

const relatedServices = [
  {
    title: "Cybersecurity",
    text: "Protect your systems and reduce security risk.",
    href: "/cybersecurity",
  },
  {
    title: "Website Development",
    text: "Build a stronger online presence.",
    href: "/website-development",
  },
  {
    title: "AI Solutions",
    text: "Automate tasks and improve workflows.",
    href: "/ai-solutions",
  },
  {
    title: "Graphic Design",
    text: "Improve your business image and brand visuals.",
    href: "/graphic-design",
  },
]

export const metadata = {
  title: "Managed IT Support Toronto | Small Business IT Services | CipherX",
  description:
    "CipherX provides managed IT support for Toronto and GTA small businesses, including help desk support, repairs, network setup, monitoring, backup, and business systems.",
}

export default function ManagedITSupportPage() {
  return (
    <main className="bg-[#f7f7f2] text-[#10210f]">
      <Navigation />

      {/* HERO */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-3">
              {["24/7 IT Support", "Toronto & GTA", "SMB Friendly", "Free Consultation"].map(
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
              Managed IT Support for Toronto and GTA Small Businesses
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
              Get reliable support, setup, repairs, monitoring, and business system help for your
              small or mid-size business.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#consultation"
                className="rounded-full bg-[#25a244] px-6 py-3 text-center text-sm font-bold text-white hover:opacity-90 transition-opacity"
              >
                Book Free IT Consultation
              </Link>

              <Link
                href="#packages"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-bold hover:bg-[#f7f7f2] transition-colors"
              >
                View IT Packages
              </Link>
            </div>

            <p className="mt-5 text-sm font-medium text-gray-500">
              Built for startups, small businesses, and growing teams across Toronto and the GTA.
            </p>
          </div>
        </div>
      </section>

      {/* BODY GRID */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-[1fr_360px] lg:px-8">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          {/* WHY IT MATTERS */}
          <SectionCard>
            <SectionHeader
              eyebrow="Why it matters"
              title="Why Managed IT Matters"
              text="Small businesses lose time and money when systems are unreliable, support is slow, or setup is incomplete."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard title="Less Downtime" text="Keep your business running with fewer interruptions." />
              <InfoCard title="Faster Support" text="Get help when technical issues slow your team down." />
              <InfoCard title="Better Setup" text="Build stronger systems from the beginning." />
              <InfoCard
                title="Ongoing Monitoring"
                text="Catch issues before they affect operations."
              />
            </div>
          </SectionCard>

          {/* WHAT'S INCLUDED */}
          <SectionCard>
            <SectionHeader
              eyebrow="Included services"
              title="What's Included"
              text="Practical IT support for daily operations, setup, maintenance, and business systems."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {includedServices.map((item) => (
                <InfoCard key={item.title} title={item.title} text={item.text} />
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#consultation"
                className="rounded-full bg-[#25a244] px-6 py-3 text-center text-sm font-bold text-white hover:opacity-90 transition-opacity"
              >
                Request IT Consultation
              </Link>
              <Link
                href="#packages"
                className="rounded-full border border-black/10 px-6 py-3 text-center text-sm font-bold hover:bg-white transition-colors"
              >
                Ask About IT Packages
              </Link>
            </div>
          </SectionCard>

          {/* WHO IT'S FOR */}
          <SectionCard>
            <SectionHeader
              eyebrow="Best fit"
              title="Who We Help"
              text="This service is built for businesses that need reliable technology support without hiring a full internal IT team."
            />

            <div className="flex flex-wrap gap-3">
              {["Startups", "Small Offices", "Clinics", "Retail", "Service Businesses", "Growing Teams"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </SectionCard>

          {/* COMMON PROBLEMS */}
          <SectionCard>
            <SectionHeader
              eyebrow="Problems solved"
              title="Common IT Problems We Solve"
              text="CipherX helps remove technical friction so your team can stay focused on running the business."
            />

            <div className="grid gap-3 md:grid-cols-2">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold"
                >
                  ✓ {problem}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="#consultation"
                className="rounded-full bg-[#25a244] px-6 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity inline-block"
              >
                Talk to IT Support
              </Link>
            </div>
          </SectionCard>

          {/* HOW IT WORKS */}
          <SectionCard>
            <SectionHeader
              eyebrow="Process"
              title="How It Works"
              text="A simple process built for busy business owners."
            />

            <div className="grid gap-4 md:grid-cols-4">
              <StepCard number="1" title="Tell Us What You Need" text="Share your setup, issue, or goal." />
              <StepCard
                number="2"
                title="Get a Consultation"
                text="We review your needs and recommend the best path."
              />
              <StepCard number="3" title="Choose a Plan" text="Select a package or custom solution." />
              <StepCard
                number="4"
                title="We Handle the Work"
                text="We set up, support, and improve your systems."
              />
            </div>
          </SectionCard>

          {/* PACKAGES */}
          <SectionCard id="packages">
            <SectionHeader
              eyebrow="SMB packages"
              title="Managed IT Packages"
              text="Start with a structured package or request a custom support plan based on your business needs."
            />

            <div className="grid gap-4 md:grid-cols-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-[28px] border p-6 ${
                    pkg.featured
                      ? "border-[#25a244] bg-[#edf9f0]"
                      : "border-black/10 bg-white"
                  }`}
                >
                  {pkg.featured && (
                    <span className="mb-4 inline-flex rounded-full bg-[#25a244] px-3 py-1 text-xs font-bold text-white">
                      Most Popular
                    </span>
                  )}

                  <h3 className="text-2xl font-bold text-[#10210f]">{pkg.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{pkg.bestFor}</p>

                  <ul className="mt-5 space-y-2 text-sm font-medium text-gray-700">
                    {pkg.points.map((point) => (
                      <li key={point}>✓ {point}</li>
                    ))}
                  </ul>

                  <Link
                    href="#consultation"
                    className="mt-6 inline-flex rounded-full bg-[#10210f] px-5 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity"
                  >
                    Ask About {pkg.name}
                  </Link>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* RELATED SERVICES MOBILE / CONTENT */}
          <SectionCard>
            <SectionHeader
              eyebrow="Connected services"
              title="Related Services"
              text="Many businesses combine managed IT with security, websites, automation, or brand support."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {relatedServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="rounded-[24px] border border-black/10 bg-white p-5 transition hover:bg-[#f7f7f2]"
                >
                  <h3 className="text-lg font-bold text-[#10210f]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{service.text}</p>
                  <span className="mt-4 inline-flex text-sm font-bold text-[#25a244]">
                    Explore {service.title} →
                  </span>
                </Link>
              ))}
            </div>
          </SectionCard>

          {/* FULL FORM */}
          <SectionCard id="consultation">
            <SectionHeader
              eyebrow="Free consultation"
              title="Book Your Free Managed IT Consultation"
              text="Tell us what kind of support your business needs and we'll recommend the right next step."
            />

            <form className="grid gap-4 md:grid-cols-2">
              <Input placeholder="Full Name" />
              <Input placeholder="Business Name" />
              <Input placeholder="Email" />
              <Input placeholder="Phone" />
              <Input placeholder="Business Location" />
              <Input placeholder="Number of Employees" />

              <select className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none md:col-span-2 text-gray-700">
                <option>Main IT Need</option>
                <option>General IT Support</option>
                <option>Repairs</option>
                <option>Network Setup</option>
                <option>Software Installation</option>
                <option>Startup IT Setup</option>
                <option>Remote Monitoring</option>
                <option>Backup and Recovery</option>
                <option>Custom Support</option>
              </select>

              <textarea
                placeholder="Tell us about your current setup or issue"
                rows={5}
                className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none md:col-span-2 text-gray-700 placeholder:text-gray-400"
              />

              <button className="rounded-full bg-[#25a244] px-6 py-3 text-sm font-bold text-white md:col-span-2 hover:opacity-90 transition-opacity">
                Request My Free IT Consultation
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-gray-500">
              Clear next steps. No obligation.
            </p>
          </SectionCard>

          {/* FAQ */}
          <SectionCard>
            <SectionHeader eyebrow="FAQs" title="Managed IT FAQs" />

            <div className="space-y-3">
              <FAQ
                q="What does managed IT support include?"
                a="Managed IT support can include help desk support, troubleshooting, setup, monitoring, software help, backup support, and ongoing assistance."
              />
              <FAQ
                q="Do you work with small businesses?"
                a="Yes. CipherX focuses on startups, small businesses, and mid-size companies in Toronto and the GTA."
              />
              <FAQ
                q="Can you help set up a new business office?"
                a="Yes. We can help with startup IT setup, network systems, software, devices, and related business technology needs."
              />
              <FAQ
                q="Do you offer custom support plans?"
                a="Yes. We offer both package-based and custom support options."
              />
            </div>
          </SectionCard>

          {/* FINAL CTA */}
          <section className="rounded-[32px] bg-[#10210f] p-8 text-white md:p-10">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
              Free IT Consultation
            </span>

            <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
              Get Reliable IT Support for Your Business
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              CipherX helps Toronto and GTA businesses reduce downtime, improve setup, and keep
              systems running with practical managed IT support.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#consultation"
                className="rounded-full bg-[#25a244] px-6 py-3 text-center text-sm font-bold text-white hover:opacity-90 transition-opacity"
              >
                Book Free IT Consultation
              </Link>
              <Link
                href="/cybersecurity"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-[#10210f] hover:opacity-90 transition-opacity"
              >
                Explore Cybersecurity
              </Link>
            </div>
          </section>
        </div>

        {/* RIGHT STICKY PANEL */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <PanelCard>
              <span className="rounded-full bg-[#e9f8ed] px-3 py-1 text-xs font-bold text-[#25a244]">
                Free Consultation
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#10210f]">Need Managed IT Support?</h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Get a practical support recommendation based on your business needs.
              </p>

              <Link
                href="#consultation"
                className="mt-5 flex w-full justify-center rounded-full bg-[#25a244] px-5 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity"
              >
                Book Free IT Consultation
              </Link>

              <p className="mt-3 text-center text-xs text-gray-500">
                No pressure. Clear next steps.
              </p>
            </PanelCard>

            <PanelCard>
              <h3 className="text-lg font-bold text-[#10210f]">Related Services</h3>

              <div className="mt-4 space-y-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block rounded-2xl border border-black/10 bg-white p-4 transition hover:bg-[#f7f7f2]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-bold text-[#10210f]">{service.title}</h4>
                        <p className="mt-1 text-xs leading-5 text-gray-600">{service.text}</p>
                      </div>
                      <span className="text-[#25a244]">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </PanelCard>

            <PanelCard>
              <h3 className="text-lg font-bold text-[#10210f]">Need Fast Help?</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Have an IT issue, setup problem, or support question?
              </p>

              <div className="mt-5 grid gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#10210f] px-5 py-3 text-center text-sm font-bold text-white hover:opacity-90 transition-opacity"
                >
                  Talk to CipherX
                </Link>
                <Link
                  href="#consultation"
                  className="rounded-full border border-black/10 px-5 py-3 text-center text-sm font-bold hover:bg-white transition-colors"
                >
                  Request Support
                </Link>
              </div>
            </PanelCard>

            <PanelCard>
              <span className="rounded-full bg-[#f7f7f2] px-3 py-1 text-xs font-bold text-[#10210f]">
                SMB Packages
              </span>
              <h3 className="mt-4 text-lg font-bold text-[#10210f]">Not Sure Which Package Fits?</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Start with Starter, Growth, or Scale, or request a custom plan.
              </p>

              <Link
                href="#consultation"
                className="mt-5 flex justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-bold hover:bg-white transition-colors"
              >
                Get Package Recommendation
              </Link>
            </PanelCard>

            <PanelCard>
              <h3 className="text-lg font-bold text-[#10210f]">Why CipherX</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Toronto & GTA",
                  "SMB Focused",
                  "Fast Support",
                  "Security First",
                  "Clear Pricing",
                  "Dedicated Team",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </PanelCard>
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  )
}
