import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Zap, ShieldCheck, BarChart3, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Web Development Services — Next.js, Shopify, WordPress',
  description: 'High-performance websites engineered for speed, conversion, and scale. Next.js, Shopify, WordPress, and custom development by specialist teams.',
}

const TECH_STACK = [
  { name: 'Next.js', category: 'Frontend', icon: '▲' },
  { name: 'React', category: 'Frontend', icon: '⚛' },
  { name: 'TypeScript', category: 'Language', icon: 'TS' },
  { name: 'Shopify', category: 'E-commerce', icon: '🛍' },
  { name: 'WordPress', category: 'CMS', icon: 'W' },
  { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
  { name: 'Framer Motion', category: 'Animation', icon: '✨' },
  { name: 'Node.js', category: 'Backend', icon: '⬢' },
  { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
  { name: 'Stripe', category: 'Payments', icon: '💳' },
  { name: 'Vercel', category: 'Hosting', icon: '▲' },
  { name: 'AWS', category: 'Cloud', icon: '☁' },
]

const SERVICES = [
  { icon: Code2, color: '#6C63FF', title: 'Custom Web Applications', desc: 'Next.js and React applications built for performance, SEO, and scale. Complex functionality, clean code architecture.', items: ['SaaS Platforms', 'Client Portals', 'Booking Systems', 'Custom E-commerce'] },
  { icon: ShieldCheck, color: '#FF9900', title: 'Shopify Development', desc: 'Expert Shopify development from custom themes to complex app integrations. We build stores that convert.', items: ['Custom Theme Dev', 'App Integration', 'Shopify Plus', 'Store Migrations'] },
  { icon: Zap, color: '#00D4FF', title: 'WordPress Development', desc: 'WordPress sites that are fast, secure, and actually scalable. Custom themes, plugins, and WooCommerce builds.', items: ['Custom Themes', 'WooCommerce', 'Plugin Development', 'Speed Optimization'] },
  { icon: BarChart3, color: '#4CAF50', title: 'Performance Optimization', desc: 'Turn your existing website into a speed machine. Core Web Vitals, image optimization, and caching done right.', items: ['Core Web Vitals', 'Lighthouse 95+', 'CDN Setup', 'Database Optimization'] },
]

export default function WebDevPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6"><SectionLabel>Web Development</SectionLabel></div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Websites that work<br />
              <span className="text-gradient">as hard as you do</span>
            </h1>
            <p className="text-mist text-lg leading-relaxed mb-8">
              We don&apos;t build pretty brochures. We engineer high-performance digital experiences optimized for speed, conversion, and long-term scale. Every project starts with a performance budget and a conversion goal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-consultation" className="flex items-center justify-center gap-2 px-7 py-3.5 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric">
                Start Your Project <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/portfolio" className="flex items-center justify-center gap-2 px-7 py-3.5 glass border border-white/10 hover:border-white/20 text-white font-medium rounded-xl transition-all duration-200">
                View Portfolio
              </Link>
            </div>
          </div>
          {/* Performance scores */}
          <div className="glass rounded-2xl p-8 border border-white/5">
            <h3 className="font-display text-white font-bold mb-6 text-center">Our average project scores</h3>
            {[
              { label: 'Performance', score: 97, color: '#4CAF50' },
              { label: 'SEO', score: 100, color: '#6C63FF' },
              { label: 'Accessibility', score: 98, color: '#00D4FF' },
              { label: 'Best Practices', score: 100, color: '#F4C542' },
            ].map(({ label, score, color }) => (
              <div key={label} className="mb-4">
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm text-silver">{label}</span>
                  <span className="text-sm font-bold" style={{ color }}>{score}</span>
                </div>
                <div className="h-2 bg-ash rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${score}%`, backgroundColor: color }} />
                </div>
              </div>
            ))}
            <p className="text-mist text-xs text-center mt-4">Based on Google Lighthouse scores across 200+ delivered projects</p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-deep-space border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-14">
            What we <span className="text-gradient">build</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map(({ icon: Icon, color, title, desc, items }) => (
              <div key={title} className="glass rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${color}15`, border: `1px solid ${color}25` }}>
                  <span style={{ color }} className="flex"><Icon className="w-5 h-5" /></span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-mist text-sm leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-white/5 border border-white/5 text-silver">
                      <span style={{ color }} className="flex"><CheckCircle2 className="w-3 h-3" /></span>{item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-display text-4xl font-bold text-white text-center mb-14">
          Our <span className="text-gradient">tech stack</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {TECH_STACK.map(({ name, category, icon }) => (
            <div key={name} className="glass rounded-xl px-5 py-3 border border-white/5 hover:border-electric/20 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-3">
              <span className="text-lg">{icon}</span>
              <div>
                <p className="text-white text-sm font-medium">{name}</p>
                <p className="text-mist text-xs">{category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-deep-space border-t border-white/5 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Ready to build something <span className="text-gradient">fast?</span>
          </h2>
          <p className="text-mist mb-8">Most projects kick off within 5 business days of the discovery call. Let's talk scope.</p>
          <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric">
            Discuss Your Project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
