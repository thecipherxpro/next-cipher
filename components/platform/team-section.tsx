"use client"

import { useState } from "react"
import { Slack } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const team = [
  {
    name: "Tygo Brouwer",
    role: "Chief Data Scientist",
    bio: "I co-founded Platform to fundamentally change how businesses leverage technology. As the lead architect of our AI technology, I guide the innovation and development of Platform's intelligent infrastructure.",
    initials: "TB",
  },
  {
    name: "Philip van der Bosch",
    role: "Founder & Head of Operations",
    bio: "As head of operations, I drive our mission of pioneering AI-powered infrastructure. I'm dedicated to turning complexity into clarity with scalable, intelligent tools that revolutionize how businesses operate.",
    initials: "PB",
  },
]

export function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="team" className="py-24 md:py-32 bg-card/30">
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
            <span className="text-muted-foreground font-mono text-sm">Meet the Team</span>
            <span className="text-muted-foreground/40 font-mono text-sm">007</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Get to know the team behind the work.
          </h2>
          
          <p className="text-muted-foreground max-w-xl">
            Makers, thinkers, and problem-solvers. We shape Platform every day, focusing on clear decisions and getting things done right.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Team members */}
          <div className="space-y-4">
            {team.map((member, index) => (
              <motion.button
                key={member.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-card border-accent/30"
                    : "bg-transparent border-border hover:border-accent/20"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-xl font-medium shrink-0 ${
                    activeIndex === index 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-secondary text-foreground"
                  }`}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                    {activeIndex === index && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Slack CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8 flex flex-col"
          >
            <div className="flex-1">
              <div className="text-sm text-muted-foreground mb-4">Team Platform</div>
              
              <h3 className="text-2xl font-medium mb-4">
                Join our Slack community
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                Connect with the team, get help, share ideas, and stay updated on the latest Platform developments.
              </p>
            </div>

            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4A154B] text-white rounded-full font-medium hover:bg-[#4A154B]/90 transition-all"
            >
              <Slack className="w-5 h-5" />
              Join Slack
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
