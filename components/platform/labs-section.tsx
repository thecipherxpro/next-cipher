"use client"

import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const articles = [
  {
    title: "Ethical AI Systems for Scalable Products",
    subtitle: "Why responsible AI isn't optional in high-growth tech",
    author: "Bruce Sommers",
    date: "Monday, April 28, 2025",
  },
  {
    title: "Zero-Latency Infrastructure for Real-Time AI",
    subtitle: "Speed isn't a feature—it's the foundation of AI-based systems",
    author: "Leon Hartmann",
    date: "Wednesday, April 2, 2025",
  },
  {
    title: "Automated Infrastructure Observability Made Simple",
    subtitle: "Why automation and observability should always go together",
    author: "Rafael Noor",
    date: "Wednesday, March 5, 2025",
  },
  {
    title: "AI-Powered Process Automation for Small Teams",
    subtitle: "How small teams can do more with intelligent workflows",
    author: "Marius Ortega",
    date: "Sunday, March 2, 2025",
  },
]

export function LabsSection() {
  return (
    <section id="labs" className="py-24 md:py-32 bg-card/30">
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
            <span className="text-muted-foreground font-mono text-sm">Platform Labs<sup className="text-[8px]">®</sup></span>
            <span className="text-muted-foreground/40 font-mono text-sm">009</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Fresh takes on systems, workflows, and the tools behind today&apos;s digital infrastructure.
          </h2>
          
          <p className="text-muted-foreground max-w-xl">
            Stay ahead with cutting-edge trends and expert analyses driving the future of technology.
          </p>
        </motion.div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {article.subtitle}
              </p>
            </motion.article>
          ))}
        </div>

        {/* More articles link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            More articles from Platform Labs<sup className="text-[8px]">®</sup>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
