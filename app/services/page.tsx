import { Metadata } from 'next'
import { Navigation } from "@/components/platform/navigation"
import { Footer } from "@/components/platform/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { QuickNavSection } from "@/components/services/quick-nav-section"
import { HowWeHelpSection } from "@/components/services/how-we-help-section"
import { ServiceCardsSection } from "@/components/services/service-cards-section"
import { PackagesIntroSection } from "@/components/services/packages-intro-section"
import { ServiceConsultationSection } from "@/components/services/service-consultation-section"
import { FinalCTASection } from "@/components/services/final-cta-section"

export const metadata: Metadata = {
  title: 'Services | Cybersecurity, Managed IT, Websites, Apps & AI | CipherX',
  description: 'Explore CipherX services for Toronto and GTA businesses, including cybersecurity, managed IT, websites, mobile apps, web apps, graphic design, and AI solutions.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicesHero />
      <QuickNavSection />
      <HowWeHelpSection />
      <ServiceCardsSection />
      <PackagesIntroSection />
      <ServiceConsultationSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
