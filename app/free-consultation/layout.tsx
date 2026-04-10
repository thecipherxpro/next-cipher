import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Consultation | CipherX",
  description:
    "Book a free consultation with the CipherX team to discuss your business challenges and explore solutions tailored to your needs.",
}

export default function FreeConsultationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
