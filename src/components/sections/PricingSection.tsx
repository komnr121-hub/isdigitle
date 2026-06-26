'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Zap } from 'lucide-react'
import { SectionHeading, GlowOrb } from '@/components/ui'
import { PRICING_PLANS } from '@/lib/data'

export function PricingSection({ preview = false }: { preview?: boolean }) {
  const plans = preview ? PRICING_PLANS : PRICING_PLANS

  return (
    <section className="relative section-pad bg-obsidian overflow-hidden" id="pricing">
      <GlowOrb color="plasma" size="lg" className="top-0 left-0 opacity-[0.05]" />
      <GlowOrb color="electric" size="md" className="bottom-0 right-0 opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            label="Pricing"
            title="Transparent. Scalable."
            titleHighlight="No surprises."
            subtitle="Simple monthly retainers. No lock-in contracts. Cancel or upgrade any time. Custom enterprise packages available."
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <span className="flex items-center gap-1.5 px-4 py-1.5 bg-electric text-white text-xs font-semibold rounded-full">
                    <Zap className="w-3.5 h-3.5" /> Most Popular
                  </span>
                </div>
              )}
              <div
                className={`h-full glass rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-card flex flex-col ${
                  plan.popular ? 'border-electric/30 shadow-electric/20 shadow-lg' : 'border-white/5 hover:border-white/10'
                }`}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: plan.color }}>
                    {plan.name}
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-5xl font-bold text-white">${plan.price.toLocaleString()}</span>
                    <span className="text-mist text-sm">/ {plan.period}</span>
                  </div>
                  <p className="text-mist text-sm">{plan.description}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 mb-6" />

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
                      <span className="text-silver text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/book-consultation"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={{
                    backgroundColor: plan.popular ? plan.color : 'transparent',
                    color: plan.popular ? '#fff' : plan.color,
                    border: `1px solid ${plan.color}${plan.popular ? '' : '40'}`,
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-mist text-sm"
        >
          Need something custom?{' '}
          <Link href="/contact" className="text-electric hover:text-electric-glow transition-colors font-medium">
            Let's talk enterprise
          </Link>
        </motion.p>
      </div>
    </section>
  )
}
