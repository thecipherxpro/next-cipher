"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

const topBadges = ["Affordable Solutions", "One Trusted Team", "Toronto & GTA", "Free Consultation"]

export function CTASection() {
  const { scrollY } = useScroll()
  
  const ribbon1Y = useTransform(scrollY, [0, 4000], [0, 80])
  const ribbon1Rotate = useTransform(scrollY, [0, 4000], [200, 220])
  const ribbon2Y = useTransform(scrollY, [0, 4000], [0, 100])
  const ribbon2Rotate = useTransform(scrollY, [0, 4000], [290, 310])
  const ribbon3Y = useTransform(scrollY, [0, 4000], [0, 60])
  const ribbon3Rotate = useTransform(scrollY, [0, 4000], [110, 130])

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-background">
      <div className="w-full container-full-wide">
        <div
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[32px] lg:rounded-[40px] px-6 py-12 sm:px-10 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24"
          style={{ background: "linear-gradient(135deg, oklch(0.20 0.04 240) 0%, oklch(0.16 0.06 155) 100%)" }}
        >
          {/* Parallax ribbon decorations */}
          <motion.div 
            className="pointer-events-none select-none absolute -top-20 -left-20 sm:-top-24 sm:-left-24 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-20 sm:opacity-25 hidden sm:block"
            style={{ y: ribbon1Y, rotate: ribbon1Rotate }}
          >
            <Image src="/hero-ribbon.png" alt="" fill className="object-cover" aria-hidden />
          </motion.div>
          <motion.div 
            className="pointer-events-none select-none absolute -top-20 -right-20 sm:-top-24 sm:-right-24 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-20 sm:opacity-25 hidden sm:block"
            style={{ y: ribbon2Y, rotate: ribbon2Rotate }}
          >
            <Image src="/hero-ribbon.png" alt="" fill className="object-cover" aria-hidden />
          </motion.div>
          <motion.div 
            className="pointer-events-none select-none absolute -bottom-20 -right-20 sm:-bottom-24 sm:-right-24 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] opacity-15 sm:opacity-20 hidden sm:block"
            style={{ y: ribbon3Y, rotate: ribbon3Rotate }}
          >
            <Image src="/hero-ribbon.png" alt="" fill className="object-cover" aria-hidden />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Badges */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
              className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8"
            >
              {topBadges.map((b) => (
                <span key={b} className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium text-white/70 border border-white/15">
                  {b}
                </span>
              ))}
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-5 sm:mb-6 text-balance"
            >
              Ready to Improve Your Business Technology?
            </motion.h2>

            {/* Body */}
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
              className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl mb-8 sm:mb-10 leading-relaxed"
            >
              Get stronger security, better IT support, and the digital tools your business needs to grow.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold text-white hover:opacity-90 active:scale-[0.98] transition-all shadow-lg"
                style={{ background: "oklch(0.58 0.16 155)" }}
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold text-white/80 border border-white/20 hover:border-white/40 active:scale-[0.98] transition-all"
              >
                Explore Services
              </Link>
              <Link
                href="#packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold text-white/80 border border-white/20 hover:border-white/40 active:scale-[0.98] transition-all"
              >
                View Packages
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
