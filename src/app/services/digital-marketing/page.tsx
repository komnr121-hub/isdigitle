import type { Metadata } from 'next'
import Link from 'next/link'
import { Target, Megaphone, TrendingUp, Bot, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Digital Marketing — Google Ads, Meta Ads, Social Media & AI Automation',
  description: 'Full-funnel digital marketing that fills pipelines. Google Ads, Meta, social media marketing, and AI-powered automation working in unified precision.',
}

const CHANNELS = [
  { icon: Target, color: '#6C63FF', name: 'Google Ads', desc: 'Search, Display, Shopping & YouTube campaigns optimized for maximum ROAS.' },
  { icon: Megaphone, color: '#FF6B6B', name: 'Meta Ads', desc: 'Facebook & Instagram campaigns with creative-first strategy and rigorous testing.' },
  { icon: TrendingUp, color: '#00D4FF', name: 'Social Media', desc: 'Organic social strategy, content creation, and community management across all platforms.' },
  { icon: Bot, color: '#4CAF50', name: 'AI Automation', desc: 'AI-powered lead nurturing, chatbots, and workflow automation that work 24/7.' },
]

export default function DigitalMarketingPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-8"><SectionLabel>Digital Marketing</SectionLabel></div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
          Full-funnel growth.<br />
          <span className="text-gradient">Every channel. Mastered.</span>
        </h1>
        <p className="text-mist text-xl max-w-2xl mb-12">
          From awareness to conversion, we build and manage full-funnel marketing systems that generate predictable pipeline and measurable ROI.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[{ v: '680%', l: 'Peak ROAS Achieved' }, { v: '$50M+', l: 'Ad Spend Managed' }, { v: '38%', l: 'Avg CPL Reduction' }, { v: '4.2×', l: 'Average ROAS' }].map(({ v, l }) => (
            <div key={l} className="glass rounded-2xl p-5 border border-white/5 text-center">
              <div className="font-display text-3xl font-bold text-gradient mb-1">{v}</div>
              <div className="text-mist text-xs">{l}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {CHANNELS.map(({ icon: Icon, color, name, desc }) => (
            <div key={name} className="glass rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${color}15`, border: `1px solid ${color}25` }}>
                <span style={{ color }} className="flex"><Icon className="w-5 h-5" /></span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">{name}</h3>
              <p className="text-mist text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric">
            Get a Free Marketing Audit <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
