'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, Code2, Layers, ShoppingBag, Megaphone, FileText, ArrowUpRight, Zap, Target, Globe } from 'lucide-react'
import { GlowOrb } from '@/components/ui'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SERVICES } from '@/lib/data'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp, Code2, Layers, ShoppingBag, Megaphone, FileText,
  Zap, Target, Globe,
}

const ALL_SERVICES = [
  ...SERVICES,
  { id: 'branding', title: 'Branding', shortTitle: 'Branding', slug: '/services/digital-marketing', icon: 'Zap', color: '#9B59B6', description: 'Build a brand identity that commands premium positioning and wins market trust.', features: ['Logo Design', 'Brand Guidelines', 'Identity System', 'Brand Voice', 'Messaging Strategy', 'Visual Identity'] },
  { id: 'lead-gen', title: 'Lead Generation', shortTitle: 'Lead Gen', slug: '/services/digital-marketing', icon: 'Target', color: '#E74C3C', description: 'Systematic lead gen systems that fill your pipeline with high-intent prospects, 24/7.', features: ['Cold Outreach', 'LinkedIn Automation', 'Email Sequences', 'Landing Pages', 'CRM Integration', 'Lead Scoring'] },
  { id: 'ai-auto', title: 'AI Automation', shortTitle: 'AI Auto', slug: '/services/digital-marketing', icon: 'Globe', color: '#1ABC9C', description: 'AI-powered workflow automation that multiplies your team\'s output without adding headcount.', features: ['Workflow Automation', 'Chatbots', 'AI Content', 'Process Mapping', 'CRM Automation', 'Reporting'] },
]

export function ServicesSection() {
  return (
    <section className="relative section-pad bg-deep-space overflow-hidden">
      <GlowOrb color="electric" size="lg" className="top-0 right-0 opacity-[0.05]" />
      <GlowOrb color="plasma" size="md" className="bottom-0 left-0 opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            label="What We Do"
            title="Every Service. One"
            titleHighlight="Unified Platform."
            subtitle="From search to social, development to automation — our expert partner network covers every dimension of digital growth."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {ALL_SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || TrendingUp
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link href={service.slug} className="group block glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-card h-full">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15`, border: `1px solid ${service.color}20` }}
                  >
                    <span style={{ color: service.color }} className="flex"><Icon className="w-6 h-6" /></span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-electric transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-mist text-sm leading-relaxed mb-4">{service.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.slice(0, 3).map((f) => (
                      <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-mist border border-white/5">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1 text-sm font-medium" style={{ color: service.color }}>
                    Learn more
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}08 0%, transparent 70%)` }}
                  />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-mist mb-4">Don't see what you need? We likely have a specialist for it.</p>
          <Link href="/contact" className="text-electric hover:text-electric-glow font-medium text-sm transition-colors inline-flex items-center gap-1">
            Talk to our team <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
