import type { Metadata } from 'next'
import Link from 'next/link'
import { ShoppingBag, BarChart, Search, Star, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SectionLabel } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Amazon Services — Private Label Launch, PPC & Product Hunting',
  description: 'Full-cycle Amazon growth services. From product research and private label launch to PPC management and brand scaling. We\'ve launched 200+ Amazon brands.',
}

const AMAZON_SERVICES = [
  { icon: Search, color: '#FF9900', title: 'Product Hunting', desc: 'Data-driven product research identifying high-demand, low-competition opportunities. Every product is validated before a penny is spent on inventory.' },
  { icon: ShoppingBag, color: '#6C63FF', title: 'Private Label Launch', desc: 'End-to-end private label strategy from supplier sourcing to listing optimization. We handle the entire launch process with precision.' },
  { icon: BarChart, color: '#00D4FF', title: 'Amazon PPC Management', desc: 'Advanced PPC campaign architecture optimized for ACoS, TACoS, and organic rank uplift. We manage campaigns with the precision of a machine.' },
  { icon: Star, color: '#4CAF50', title: 'Listing & Brand Optimization', desc: 'Keyword-optimized listings, A+ Content, brand store design, and review strategy that convert browsers to buyers.' },
]

export default function AmazonPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-8"><SectionLabel>Amazon Services</SectionLabel></div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
          Amazon growth.<br />
          <span className="text-gradient">Done by people who live it.</span>
        </h1>
        <p className="text-mist text-xl max-w-2xl mb-10">
          We've collectively launched 200+ private label brands on Amazon. We know what product research criteria actually predict success, which PPC structures perform, and what listing elements move conversion rate.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[{ v: '200+', l: 'Brands Launched' }, { v: '$10M+', l: 'Amazon Revenue' }, { v: '4.7★', l: 'Avg Product Rating' }, { v: '#1', l: 'BSR Positions Achieved' }].map(({ v, l }) => (
            <div key={l} className="glass rounded-2xl p-5 border border-white/5 text-center">
              <div className="font-display text-3xl font-bold text-gradient mb-1">{v}</div>
              <div className="text-mist text-xs">{l}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {AMAZON_SERVICES.map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="glass rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${color}15`, border: `1px solid ${color}25` }}>
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-mist text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-8 border border-[#FF9900]/20 mb-12">
          <h2 className="font-display text-2xl font-bold text-white mb-6">What's included in every Amazon engagement</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {['Product research report', 'Supplier sourcing & vetting', 'Full listing creation', 'A+ Content design', 'Launch PPC strategy', 'Keyword research', 'Review strategy', 'Competitor analysis', 'Monthly performance report'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF9900] flex-shrink-0" />
                <span className="text-silver text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric">
            Discuss Your Amazon Strategy <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
