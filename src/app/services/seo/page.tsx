import type { Metadata } from 'next'
import Link from 'next/link'
import { TrendingUp, Search, MapPin, Settings, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'SEO Services — Technical, Local & E-commerce SEO',
  description: 'Enterprise-grade SEO that delivers compounding organic growth. Technical SEO, local SEO, link building, and content strategy by specialists who\'ve ranked thousands of pages.',
}

const SEO_PACKAGES = [
  {
    name: 'Local SEO',
    icon: MapPin,
    color: '#4CAF50',
    description: 'Dominate local search results and Google Maps across your service areas.',
    features: ['Google Business Profile Optimization', 'Local Citation Building', 'Review Strategy & Management', 'Local Keyword Strategy', 'Competitor Gap Analysis', 'Monthly Local Reports'],
  },
  {
    name: 'Technical SEO',
    icon: Settings,
    color: '#00D4FF',
    description: 'Fix the foundation. Technical SEO that Google\'s crawlers reward.',
    features: ['Full Technical Audit', 'Core Web Vitals Optimization', 'Schema Markup Implementation', 'Crawl Budget Optimization', 'Site Architecture Review', 'Page Speed Optimization'],
  },
  {
    name: 'Authority SEO',
    icon: TrendingUp,
    color: '#6C63FF',
    description: 'Build domain authority through strategic link acquisition and content.',
    features: ['DR-qualified Link Building', 'Digital PR Campaigns', 'Competitor Backlink Analysis', 'Guest Post Outreach', 'HARO & Media Coverage', 'Link Velocity Management'],
  },
  {
    name: 'Content SEO',
    icon: Search,
    color: '#F4C542',
    description: 'Content that ranks, converts, and builds topical authority.',
    features: ['Topical Authority Mapping', 'Pillar & Cluster Content', 'SERP Feature Optimization', 'Content Refresh Strategy', 'AI-assisted Production', 'Performance Tracking'],
  },
]

const RESULTS = [
  { metric: '340%', label: 'Average Organic Traffic Increase', period: 'within 6 months' },
  { metric: '#1–3', label: 'Target Keyword Rankings', period: 'for 80% of campaigns' },
  { metric: '8×', label: 'Average ROI on SEO Investment', period: 'measured over 12 months' },
  { metric: '90 days', label: 'First Measurable Results', period: 'guaranteed or strategy revised' },
]

export default function SEOPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6"><SectionLabel>SEO Services</SectionLabel></div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Organic growth that<br />
              <span className="text-gradient">compounds forever</span>
            </h1>
            <p className="text-mist text-lg leading-relaxed mb-8">
              Paid ads stop working the moment you stop paying. SEO builds an asset that grows in value over time. Our SEO specialists have collectively ranked thousands of pages across every industry — from local service businesses to enterprise SaaS platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-consultation" className="flex items-center justify-center gap-2 px-7 py-3.5 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric">
                Get Free SEO Audit
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="flex items-center justify-center gap-2 px-7 py-3.5 glass border border-white/10 hover:border-white/20 text-white font-medium rounded-xl transition-all duration-200">
                Talk to an SEO Specialist
              </Link>
            </div>
          </div>

          {/* Results grid */}
          <div className="grid grid-cols-2 gap-4">
            {RESULTS.map(({ metric, label, period }) => (
              <div key={label} className="glass rounded-2xl p-5 border border-white/5 hover:border-electric/20 transition-colors">
                <div className="font-display text-3xl font-bold text-gradient mb-1">{metric}</div>
                <div className="text-white text-sm font-semibold mb-0.5">{label}</div>
                <div className="text-mist text-xs">{period}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-deep-space border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-12">
            Our SEO <span className="text-gradient">Specializations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SEO_PACKAGES.map((pkg) => {
              const Icon = pkg.icon
              return (
                <div key={pkg.name} className="glass rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${pkg.color}15`, border: `1px solid ${pkg.color}25` }}>
                      <Icon className="w-5 h-5" style={{ color: pkg.color }} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">{pkg.name}</h3>
                  </div>
                  <p className="text-mist text-sm leading-relaxed mb-5">{pkg.description}</p>
                  <ul className="space-y-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-silver text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: pkg.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="font-display text-4xl font-bold text-white mb-4">
          Start ranking. <span className="text-gradient">Stop paying for clicks.</span>
        </h2>
        <p className="text-mist mb-8 max-w-xl mx-auto">Free SEO audit included with every discovery call. We'll show you exactly what's holding your rankings back.</p>
        <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric">
          Claim Your Free SEO Audit
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
