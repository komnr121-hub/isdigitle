import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Users, Globe, Award, Zap } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'About IsDigitle — Premium Digital Agency Network',
  description: 'Learn about IsDigitle — the premium digital services platform where 60+ elite specialists collaborate to deliver results that single agencies can\'t match.',
}

const TEAM = [
  { name: 'Zain Al-Hassan', role: 'Founder & CEO', specialty: 'Growth Strategy', initials: 'ZH', color: '#6C63FF' },
  { name: 'Aisha Mirza', role: 'Head of SEO', specialty: 'Technical SEO & Content', initials: 'AM', color: '#00D4FF' },
  { name: 'Omar Sheikh', role: 'Head of Development', specialty: 'Next.js & Shopify', initials: 'OS', color: '#F4C542' },
  { name: 'Fatima Khan', role: 'Creative Director', specialty: 'UI/UX & Branding', initials: 'FK', color: '#FF6B6B' },
  { name: 'Bilal Raza', role: 'Amazon Lead', specialty: 'Private Label & PPC', initials: 'BR', color: '#FF9900' },
  { name: 'Sarah Chen', role: 'Performance Marketing', specialty: 'Google & Meta Ads', initials: 'SC', color: '#4CAF50' },
]

const VALUES = [
  { icon: Users, title: 'Specialist-First', description: 'Every discipline served by someone who lives and breathes only that. No generalists pretending.' },
  { icon: Globe, title: 'Globally Minded', description: 'Clients in 40+ countries. Strategies that work in competitive global markets.' },
  { icon: Award, title: 'Results Accountability', description: 'We measure ourselves by your business outcomes. Vanity metrics don\'t pay your bills.' },
  { icon: Zap, title: 'Relentless Innovation', description: 'The digital landscape evolves fast. Our team stays 6 months ahead, not 6 months behind.' },
]

export default function AboutPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl">
          <div className="mb-6"><SectionLabel>About IsDigitle</SectionLabel></div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            We didn't build an agency.<br />
            <span className="text-gradient">We built a network.</span>
          </h1>
          <p className="text-mist text-xl leading-relaxed mb-6">
            IsDigitle was born from a simple frustration: the best digital specialists don&apos;t work at agencies. They&apos;re independent — running their own practices, doing exceptional work for a handful of clients.
          </p>
          <p className="text-mist text-lg leading-relaxed">
            So we built the infrastructure to unite them. 60+ elite practitioners — SEO experts, developers, Amazon specialists, paid media managers — coordinated under one strategy layer, one account management team, and one shared commitment to client outcomes.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-deep-space border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-14">
            What we <span className="text-gradient">stand for</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="glass rounded-2xl p-6 border border-white/5 hover:border-electric/20 transition-all duration-300 hover:-translate-y-0.5 text-center">
                <div className="w-12 h-12 rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-electric" />
                </div>
                <h3 className="font-display font-bold text-white mb-2">{title}</h3>
                <p className="text-mist text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-display text-4xl font-bold text-white text-center mb-4">
          The core <span className="text-gradient">leadership team</span>
        </h2>
        <p className="text-mist text-center mb-14 max-w-xl mx-auto">The orchestrators. They coordinate the partner network, own client strategy, and ensure every engagement delivers.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member) => (
            <div key={member.name} className="group glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${member.color}40, ${member.color}20)`, border: `1px solid ${member.color}30` }}
              >
                {member.initials}
              </div>
              <div>
                <p className="font-display font-bold text-white">{member.name}</p>
                <p className="text-sm font-medium mb-0.5" style={{ color: member.color }}>{member.role}</p>
                <p className="text-xs text-mist">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission statement */}
      <div className="bg-deep-space border-t border-white/5 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-display text-3xl md:text-4xl font-bold text-white leading-relaxed mb-8">
            "Our mission is to make specialist-grade digital expertise accessible to every ambitious business — regardless of size, industry, or location."
          </p>
          <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric">
            Work With Us
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
