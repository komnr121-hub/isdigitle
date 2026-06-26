import type { Metadata } from 'next'
import { PricingSection } from '@/components/sections/PricingSection'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SectionLabel } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Pricing — Transparent Monthly Retainers',
  description: 'Simple, transparent pricing for premium digital services. No hidden fees, no lock-in contracts. Scale up or down as your needs change.',
}

const ADD_ONS = [
  { name: 'Additional Blog Posts', price: '$150', per: 'per post' },
  { name: 'Extra Link Building', price: '$120', per: 'per link' },
  { name: 'Landing Page Design', price: '$800', per: 'one-time' },
  { name: 'Email Sequence (5-part)', price: '$600', per: 'one-time' },
  { name: 'Video Ad Creative', price: '$400', per: 'per video' },
  { name: 'Competitor Deep Dive', price: '$500', per: 'one-time' },
]

export default function PricingPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 text-center">
        <div className="mb-6"><SectionLabel>Pricing</SectionLabel></div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
          Premium service.<br />
          <span className="text-gradient">Transparent pricing.</span>
        </h1>
        <p className="text-mist text-xl max-w-2xl mx-auto">
          No hidden fees. No lock-in contracts. No surprises. Scale up or down at any time.
        </p>
      </div>

      <PricingSection />

      {/* Add-ons */}
      <div className="bg-deep-space border-y border-white/5 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-4">
            À la carte <span className="text-gradient">add-ons</span>
          </h2>
          <p className="text-mist text-center mb-12">Bolt on exactly what you need. All add-ons can be added to any monthly plan.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADD_ONS.map(({ name, price, per }) => (
              <div key={name} className="glass rounded-xl p-5 border border-white/5 hover:border-electric/20 transition-all duration-200 flex items-center justify-between">
                <div>
                  <p className="text-white font-medium text-sm">{name}</p>
                  <p className="text-mist text-xs mt-0.5">{per}</p>
                </div>
                <div className="font-display font-bold text-electric">{price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ strip */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-display text-3xl font-bold text-white text-center mb-12">Pricing FAQ</h2>
        <div className="space-y-4">
          {[
            { q: 'Is there a minimum contract length?', a: 'No. All plans are month-to-month. We recommend committing to at least 3 months for SEO to see meaningful results, but we never lock you in.' },
            { q: 'Can I upgrade or downgrade my plan?', a: 'Yes, at any time. Upgrades take effect immediately. Downgrades take effect at the start of the next billing cycle.' },
            { q: 'Do you offer custom enterprise packages?', a: 'Absolutely. If your needs exceed the Dominate plan or require custom deliverables, we\'ll build a bespoke package. Contact us to discuss.' },
            { q: 'What payment methods do you accept?', a: 'We accept bank transfer, credit card, PayPal, and Wise for international clients. All prices are in USD.' },
          ].map(({ q, a }) => (
            <div key={q} className="glass rounded-xl p-6 border border-white/5">
              <h3 className="font-display font-bold text-white mb-2 text-sm">{q}</h3>
              <p className="text-mist text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-deep-space border-t border-white/5 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Not sure which plan? <span className="text-gradient">Talk to us.</span>
          </h2>
          <p className="text-mist mb-8">We'll recommend the right starting point based on your goals, competition, and budget. Free, no-obligation call.</p>
          <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric">
            Book Free Strategy Call
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
