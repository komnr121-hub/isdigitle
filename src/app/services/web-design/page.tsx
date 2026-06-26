import type { Metadata } from 'next'
import Link from 'next/link'
import { Layers, Eye, Palette, Monitor, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SectionLabel } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Web Design — Premium UI/UX & Brand Identity',
  description: 'Premium web design and UI/UX that communicates authority and converts visitors. From design systems to brand identity, we craft experiences people remember.',
}

const DESIGN_SERVICES = [
  { icon: Eye, color: '#F4C542', title: 'UI/UX Design', desc: 'User experience design grounded in data and psychology. We design for how people actually think and behave, not how we wish they did.' },
  { icon: Palette, color: '#6C63FF', title: 'Brand Identity', desc: 'Visual identity systems that communicate positioning instantly. Logo, typography, color systems, and brand guidelines that scale.' },
  { icon: Monitor, color: '#00D4FF', title: 'Design Systems', desc: 'Component libraries and design systems that bring consistency at scale. Built in Figma, ready for your development team.' },
  { icon: Layers, color: '#FF6B6B', title: 'Conversion Design', desc: 'Landing pages and web experiences optimized for conversion. Every design decision is measured against a business outcome.' },
]

export default function WebDesignPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-8"><SectionLabel>Web Design</SectionLabel></div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
          Design that stops<br />
          <span className="text-gradient">the scroll. Starts the sale.</span>
        </h1>
        <p className="text-mist text-xl max-w-2xl mb-12">
          Great design isn't about aesthetics — it's about communication. Every visual decision tells your potential customer something about your brand. We make sure it says exactly the right thing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {DESIGN_SERVICES.map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="glass rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${color}15`, border: `1px solid ${color}25` }}>
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-mist text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-8 border border-white/5 mb-12">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Our design process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Brand positioning, audience analysis, and competitive landscape review.' },
              { step: '02', title: 'Wireframes', desc: 'Low-fidelity UX wireframes and user flow mapping before any visual design.' },
              { step: '03', title: 'Design', desc: 'High-fidelity Figma designs with full design system and component library.' },
              { step: '04', title: 'Handoff', desc: 'Developer-ready specs, assets, and Figma access. Or we build it for you.' },
            ].map(({ step, title, desc }) => (
              <div key={step}>
                <div className="font-mono text-3xl font-bold text-gradient opacity-40 mb-2">{step}</div>
                <h3 className="font-display font-bold text-white mb-1">{title}</h3>
                <p className="text-mist text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric">
            Start Your Design Project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
