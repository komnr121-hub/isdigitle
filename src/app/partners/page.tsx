import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, Users, Globe, Award, Zap, Star } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Partner Network — 60+ Elite Digital Specialists',
  description: 'Meet the IsDigitle partner network — 60+ vetted specialist agencies and experts collaborating under one platform to deliver world-class digital results.',
}

const PARTNER_CATEGORIES = [
  {
    title: 'SEO Specialists',
    count: '12+',
    color: '#6C63FF',
    description: 'Technical SEO architects, local SEO experts, and link building specialists with proven track records across 30+ industries.',
    skills: ['Technical SEO', 'Local SEO', 'E-commerce SEO', 'Link Building', 'Content SEO'],
  },
  {
    title: 'Web Developers',
    count: '15+',
    color: '#00D4FF',
    description: 'Full-stack engineers specialising in Next.js, Shopify, WordPress, and custom platform development at enterprise scale.',
    skills: ['Next.js / React', 'Shopify Expert', 'WordPress', 'PHP / Laravel', 'API Dev'],
  },
  {
    title: 'UI/UX Designers',
    count: '8+',
    color: '#F4C542',
    description: 'Award-winning designers who craft digital experiences that convert. Figma, Webflow, and full design system expertise.',
    skills: ['UI/UX Design', 'Brand Identity', 'Figma', 'Design Systems', 'Motion Design'],
  },
  {
    title: 'Amazon Experts',
    count: '6+',
    color: '#FF9900',
    description: 'Amazon PPC managers and private label launch specialists who\'ve collectively scaled brands past $10M on the platform.',
    skills: ['Amazon PPC', 'Private Label', 'Listing SEO', 'A+ Content', 'DSP Ads'],
  },
  {
    title: 'Paid Media Buyers',
    count: '10+',
    color: '#FF6B6B',
    description: 'Google, Meta, TikTok, and LinkedIn advertising specialists managing $50M+ in annual ad spend across all verticals.',
    skills: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn Ads', 'Programmatic'],
  },
  {
    title: 'Content & Copywriters',
    count: '9+',
    color: '#4CAF50',
    description: 'Strategic content creators who blend SEO expertise with persuasive copywriting to drive rankings and conversions simultaneously.',
    skills: ['Blog & Articles', 'Sales Copy', 'Email Marketing', 'Video Scripts', 'Brand Voice'],
  },
]

const PARTNER_BENEFITS = [
  { icon: Globe, title: 'Global Reach', description: 'Partners across 15+ countries, serving clients in every major market.' },
  { icon: Award, title: 'Rigorous Vetting', description: 'Every partner undergoes a multi-stage review. Less than 15% of applicants are accepted.' },
  { icon: Users, title: 'Collaborative Culture', description: 'Partners collaborate across disciplines to deliver integrated, holistic strategies.' },
  { icon: Zap, title: 'Performance-Driven', description: 'Partners are measured on client outcomes. Results are everything.' },
]

const PARTNER_LOGOS = [
  { name: 'NovaSEO Agency', specialty: 'Technical SEO', rating: 4.9 },
  { name: 'PixelForge Studio', specialty: 'UI/UX Design', rating: 5.0 },
  { name: 'CartKing Dev', specialty: 'Shopify Development', rating: 4.8 },
  { name: 'AmazonAce PPC', specialty: 'Amazon Advertising', rating: 4.9 },
  { name: 'MetaBlast Media', specialty: 'Meta & Google Ads', rating: 5.0 },
  { name: 'ContentHQ', specialty: 'Content Marketing', rating: 4.7 },
  { name: 'LocalDominate', specialty: 'Local SEO', rating: 4.9 },
  { name: 'FunnelArchitects', specialty: 'Funnel Building', rating: 4.8 },
]

export default function PartnersPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <div className="mb-6"><SectionLabel>Partner Network</SectionLabel></div>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          60+ elite specialists.<br />
          <span className="text-gradient">One unified team.</span>
        </h1>
        <p className="text-mist text-xl max-w-2xl mx-auto mb-10">
          Our partner network is the backbone of everything we do. Carefully vetted specialists who are the best in their discipline — not available staff, but the right experts for every brief.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-mist">
          {[
            { value: '60+', label: 'Active Partners' },
            { value: '15+', label: 'Countries' },
            { value: '98%', label: 'Acceptance Vetting' },
            { value: '4.9★', label: 'Avg Partner Rating' },
          ].map(({ value, label }) => (
            <div key={label} className="glass px-6 py-4 rounded-xl border border-white/5 text-center">
              <div className="font-display text-2xl font-bold text-gradient mb-0.5">{value}</div>
              <div className="text-mist text-xs">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Categories */}
      <div className="bg-deep-space border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-4">
            Specialists in <span className="text-gradient">every discipline</span>
          </h2>
          <p className="text-mist text-center mb-14 max-w-xl mx-auto">
            We don't have departments — we have specialists. Each partner category represents genuine experts whose entire practice is dedicated to one discipline.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNER_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="group glass rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg font-bold text-white">{cat.title}</h3>
                  <span
                    className="text-sm font-mono font-bold px-3 py-1 rounded-full"
                    style={{ color: cat.color, backgroundColor: `${cat.color}15`, border: `1px solid ${cat.color}25` }}
                  >
                    {cat.count}
                  </span>
                </div>
                <p className="text-mist text-sm leading-relaxed mb-5">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ color: cat.color, backgroundColor: `${cat.color}10`, border: `1px solid ${cat.color}20` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Partners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-display text-4xl font-bold text-white text-center mb-4">
          Featured <span className="text-gradient">partner agencies</span>
        </h2>
        <p className="text-mist text-center mb-14">A selection of our top-rated partner agencies available for your projects.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PARTNER_LOGOS.map((partner) => (
            <div
              key={partner.name}
              className="glass rounded-2xl p-5 border border-white/5 hover:border-electric/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric/30 to-plasma/30 flex items-center justify-center mb-3 font-display font-bold text-white text-sm">
                {partner.name.substring(0, 2)}
              </div>
              <h3 className="font-display font-bold text-white text-sm mb-0.5">{partner.name}</h3>
              <p className="text-mist text-xs mb-3">{partner.specialty}</p>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-gold text-gold" />
                <span className="text-gold text-xs font-bold">{partner.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why our network */}
      <div className="bg-deep-space border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-14">
            Why the network model <span className="text-gradient">wins</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNER_BENEFITS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-electric" />
                </div>
                <h3 className="font-display font-bold text-white mb-2">{title}</h3>
                <p className="text-mist text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join the network CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* For clients */}
          <div className="glass rounded-2xl p-8 border border-white/5 hover:border-electric/20 transition-all duration-300">
            <h2 className="font-display text-2xl font-bold text-white mb-3">For Clients</h2>
            <p className="text-mist text-sm leading-relaxed mb-6">
              Get access to the full partner network. One relationship, 60+ specialists on demand. Book a discovery call to see who's the right fit for your project.
            </p>
            {['Access to 60+ vetted specialists', 'One account manager, multiple experts', 'Coordinated strategy across all disciplines', 'Flexible engagement models'].map((item) => (
              <div key={item} className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0" />
                <span className="text-silver text-sm">{item}</span>
              </div>
            ))}
            <Link href="/book-consultation" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric">
              Book Strategy Call <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* For partners */}
          <div className="glass rounded-2xl p-8 border border-white/5 hover:border-gold/20 transition-all duration-300">
            <h2 className="font-display text-2xl font-bold text-white mb-3">For Specialists</h2>
            <p className="text-mist text-sm leading-relaxed mb-6">
              Are you an exceptional digital specialist or agency? Apply to join our partner network and get access to a consistent pipeline of premium clients.
            </p>
            {['Consistent high-quality client referrals', 'Premium pricing clients expect', 'Collaborative environment with other specialists', 'Full operational support from IsDigitle'].map((item) => (
              <div key={item} className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-silver text-sm">{item}</span>
              </div>
            ))}
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-gold/40 text-gold hover:bg-gold/10 font-semibold rounded-xl transition-all duration-200">
              Apply to Join <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
