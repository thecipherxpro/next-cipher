import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You | CipherX",
  description:
    "Thank you for scheduling your consultation with CipherX. We'll be in touch soon.",
}

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
