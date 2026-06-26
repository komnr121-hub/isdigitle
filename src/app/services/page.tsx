import type { Metadata } from 'next'
import { Metadata as M } from 'next'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SERVICES } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Digital Services — SEO, Development, Amazon, Marketing',
  description: 'Explore our full suite of premium digital services. From SEO to web development, Amazon to digital marketing — IsDigitle delivers specialist-grade expertise across every channel.',
}

const ALL_SUB_SERVICES = [
  'Technical SEO', 'Local SEO', 'E-commerce SEO', 'Link Building',
  'WordPress Development', 'Shopify Development', 'Next.js Development', 'Custom CMS',
  'UI/UX Design', 'Brand Identity', 'Figma Prototyping', 'Design Systems',
  'Amazon Private Label', 'Amazon PPC', 'Product Hunting', 'A+ Content',
  'Google Ads', 'Meta Ads', 'LinkedIn Ads', 'TikTok Ads',
  'Funnel Building', 'Email Marketing', 'Content Strategy', 'AI Automation',
]

export default function ServicesPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <div className="mb-6">
          <SectionLabel>Our Services</SectionLabel>
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
          Every Digital Service.<br />
          <span className="text-gradient">Expert-Level Only.</span>
        </h1>
        <p className="text-mist text-xl max-w-2xl mx-auto">
          We don't do average. Every service is delivered by a specialist who does only that — one discipline, mastered completely.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={service.slug}
              className="group glass rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-mono tracking-widest uppercase mb-2 block" style={{ color: service.color }}>
                    Service
                  </span>
                  <h2 className="font-display text-2xl font-bold text-white group-hover:text-gradient transition-all">
                    {service.title}
                  </h2>
                </div>
                <ArrowUpRight className="w-5 h-5 text-mist group-hover:text-electric group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-200" />
              </div>
              <p className="text-mist text-sm leading-relaxed mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span key={f} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-silver">
                    <CheckCircle2 className="w-3 h-3" style={{ color: service.color }} />
                    {f}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Sub-services grid */}
      <div className="bg-deep-space border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            Every specialty. <span className="text-gradient">Covered.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {ALL_SUB_SERVICES.map((s) => (
              <span key={s} className="px-4 py-2 glass border border-white/5 hover:border-electric/20 text-silver text-sm rounded-xl hover:text-white transition-all duration-200 cursor-default">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="font-display text-4xl font-bold text-white mb-4">
          Not sure which service you need?
        </h2>
        <p className="text-mist mb-8">Book a free call. We'll identify your highest-leverage opportunity in 60 minutes.</p>
        <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric">
          Book Free Strategy Call
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
