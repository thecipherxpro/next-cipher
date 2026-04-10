"use client"

import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06 },
  }),
}

const businessTypes = [
  "Startups",
  "Small offices",
  "Clinics",
  "Local service businesses",
  "Retail businesses",
  "Professional services",
  "eCommerce businesses",
  "Growing mid-size businesses",
]

export function WhoWeHelpSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Built for businesses that need more than basic support
          </h2>
        </motion.div>

        {/* Business Types Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {businessTypes.map((type, i) => (
            <motion.div
              key={type}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              className="grovia-card grovia-card-hover p-6 flex items-center justify-center text-center min-h-[120px]"
            >
              <p className="font-semibold text-foreground text-sm">{type}</p>
            </motion.div>
          ))}
        </div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[15px] text-foreground/60 leading-relaxed max-w-3xl pt-8 border-t border-muted-foreground/10"
        >
          Whether you are starting from zero, upgrading outdated systems, launching new services, or trying to reduce ongoing technology issues, CipherX helps you move forward with practical solutions that fit your stage of business.
        </motion.p>
      </div>
    </section>
  )
}
