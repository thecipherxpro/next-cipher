"use client"

import { motion } from "framer-motion"
import { CheckCircle2, MessageSquare, Lightbulb, Rocket } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

const steps = [
  {
    icon: CheckCircle2,
    number: "01",
    title: "Choose your service",
    description: "Select the service you need through our free consultation form.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Get a free consultation",
    description: "We review your business needs, current setup, and challenges, then recommend the best path forward.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Receive a clear solution",
    description: "We provide either a custom plan or recommend the most suitable package for your stage and budget.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Build, secure, support, and improve",
    description: "Once approved, we handle setup, implementation, support, optimization, and long-term growth.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            How it works
          </h2>
          <p className="text-[15px] sm:text-base text-foreground/60 leading-relaxed">
            Getting started with CipherX is simple. We begin by understanding your business, your risks, your goals, and the service you need most.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="flex flex-col gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="grovia-inner-card w-12 h-12 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-3xl font-bold text-accent/30">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-[14px] text-foreground/60 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[15px] text-foreground/60 leading-relaxed pt-8 border-t border-muted-foreground/10 max-w-2xl"
        >
          Whether you need a quick fix, full business setup, or long-term support, CipherX can guide the process from start to finish.
        </motion.p>
      </div>
    </section>
  )
}
