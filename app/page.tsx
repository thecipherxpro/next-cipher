import { Navigation } from "@/components/platform/navigation"
import { HeroSection } from "@/components/platform/hero-section"
import { TrustStripSection } from "@/components/platform/trust-strip-section"
import { WhyBusinessesNeedSection } from "@/components/platform/why-cipherx-section"
import { ServicesSection } from "@/components/platform/services-section"
import { PackagesSection } from "@/components/platform/packages-section"
import { WhyChooseCipherXSection } from "@/components/platform/why-choose-cipherx-section"
import { ShowcaseSection } from "@/components/platform/showcase-section"
import { UseCaseSection } from "@/components/platform/use-case-section"
import { ConsultationFormSection } from "@/components/platform/consultation-form-section"
import { ProcessSection } from "@/components/platform/process-section"
import { FAQSection } from "@/components/platform/faq-section"
import { ContactSection } from "@/components/platform/contact-section"
import { CTASection } from "@/components/platform/cta-section"
import { Footer } from "@/components/platform/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrustStripSection />
      <WhyBusinessesNeedSection />
      <ServicesSection />
      <PackagesSection />
      <WhyChooseCipherXSection />
      <ShowcaseSection />
      <UseCaseSection />
      <ConsultationFormSection />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  )
}
