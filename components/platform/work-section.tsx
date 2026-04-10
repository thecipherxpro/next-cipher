"use client"

import { motion } from "framer-motion"

export function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="w-full container-full-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-muted-foreground font-mono text-sm">Our Work</span>
            <span className="text-muted-foreground/40 font-mono text-sm">001</span>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            We run your infrastructure so you can focus on building great products.
          </p>
        </motion.div>

        {/* Work description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          <div>
            <p className="text-muted-foreground leading-relaxed">
              Designed with purpose, automated for speed and built to help you move faster, with less friction.
            </p>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              Every solution is designed to solve real problems, delivering practical value over mere aesthetics.
            </p>
          </div>
        </motion.div>

        {/* Featured Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 overflow-hidden group hover:border-accent/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Featured Product</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-medium mb-4">Neural Core</h3>
              
              <p className="text-muted-foreground max-w-2xl leading-relaxed mb-8">
                Transform how your infrastructure thinks and evolves. Neural Core combines AI-driven automation with intelligent scaling to create a self-evolving system.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <span className="text-sm text-accent">Active</span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-8 right-8 opacity-20">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
                <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
                <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
                <circle cx="60" cy="60" r="10" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
