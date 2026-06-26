'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star, ArrowRight, CheckCircle2, Network, Microscope, BarChart3, Headphones } from 'lucide-react'
import { GlowOrb, Card } from '@/components/ui'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TESTIMONIALS, PROCESS_STEPS, FAQS } from '@/lib/data'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// ── Why Choose Us ─────────────────────────────────────
const WHY_ITEMS = [
  {
    icon: Network,
    title: 'The Partner Network Advantage',
    description: 'Access 60+ vetted specialist agencies and experts — not generalists trying to do everything. You get the right expert for every deliverable, without managing multiple vendor relationships.',
    highlight: '60+ Expert Partners',
  },
  {
    icon: Microscope,
    title: 'Data-Driven Everything',
    description: 'Every strategy, every decision, every optimization is rooted in data. We build custom reporting dashboards so you always know exactly what\'s working and why.',
    highlight: 'Full Transparency',
  },
  {
    icon: BarChart3,
    title: 'Business Outcomes, Not Vanity Metrics',
    description: 'We measure ourselves by revenue, leads, and growth — not clicks and impressions. Every engagement is mapped to real business outcomes from day one.',
    highlight: 'ROI Obsessed',
  },
  {
    icon: Headphones,
    title: 'White-Glove Account Management',
    description: 'Your dedicated account manager owns every aspect of your engagement. Direct access, weekly updates, and proactive communication — always.',
    highlight: 'Dedicated Support',
  },
]

export function WhyUsSection() {
  return (
    <section className="relative section-pad bg-obsidian overflow-hidden">
      <GlowOrb color="electric" size="lg" className="top-1/2 -translate-y-1/2 -left-48 opacity-[0.06]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-strong rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-electric uppercase">Why IsDigitle</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Not just an agency.<br />
              <span className="text-gradient">An unfair advantage.</span>
            </h2>
            <p className="text-mist text-lg leading-relaxed mb-8">
              Most agencies hire mid-level generalists and put them on every account. We built something fundamentally different — a network of specialists who are elite at exactly one thing, coordinated by a world-class strategy team.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-electric hover:text-electric-glow font-medium transition-colors group"
            >
              Learn how we work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right */}
          <div className="space-y-4">
            {WHY_ITEMS.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group glass rounded-2xl p-5 border border-white/5 hover:border-electric/20 transition-all duration-300 hover:-translate-y-0.5 flex gap-4"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center group-hover:bg-electric/20 transition-colors">
                    <Icon className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-bold text-white text-sm">{item.title}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-electric/10 text-electric">{item.highlight}</span>
                    </div>
                    <p className="text-mist text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Process Section ───────────────────────────────────
export function ProcessSection() {
  return (
    <section className="relative section-pad bg-deep-space overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            label="How We Work"
            title="From Strategy to"
            titleHighlight="Dominance"
            subtitle="A disciplined process that turns ambitious goals into compounding results."
          />
        </motion.div>

        <div className="mt-14 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[8.33%] right-[8.33%] h-px bg-gradient-to-r from-electric/0 via-electric/30 to-electric/0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative glass rounded-2xl p-6 border border-white/5 hover:border-electric/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-4xl font-bold text-gradient opacity-50">{step.step}</span>
                  <span className="ml-auto text-xs px-2.5 py-1 rounded-full glass border border-white/10 text-mist">{step.duration}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Testimonials ──────────────────────────────────────
export function TestimonialsSection() {
  return (
    <section className="relative section-pad bg-obsidian overflow-hidden">
      <GlowOrb color="plasma" size="lg" className="top-0 right-0 opacity-[0.05]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            label="Client Stories"
            title="Results speak"
            titleHighlight="louder than promises"
            subtitle="From local businesses to global brands — here's what our clients say about working with us."
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-silver text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric to-plasma flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-mist text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── FAQ Section ───────────────────────────────────────
export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="relative section-pad bg-deep-space overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            label="FAQ"
            title="Questions we get"
            titleHighlight="all the time"
          />
        </motion.div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl border border-white/5 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-electric flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-mist text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA Banner ────────────────────────────────────────
export function CTASection() {
  return (
    <section className="relative section-pad bg-obsidian overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-electric/10 via-transparent to-transparent" />
      <GlowOrb color="electric" size="xl" className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-[0.08]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-medium rounded-3xl p-12 md:p-16 border border-electric/10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-strong rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-electric uppercase">Free Strategy Session</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to outgrow<br />
            <span className="text-gradient">your competition?</span>
          </h2>
          <p className="text-mist text-lg mb-8 max-w-xl mx-auto">
            Book a 60-minute strategy call. We'll audit your digital presence, identify your highest-leverage opportunities, and outline a custom growth plan. No pitch, no pressure — just real insight.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-consultation"
              className="group flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric"
            >
              Book Your Free Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="text-mist hover:text-white text-sm font-medium transition-colors">
              Or send us a message →
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-mist">
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-electric" /> No commitment required</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-electric" /> Actionable insights guaranteed</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-electric" /> Spots limited</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
