'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { SITE, SERVICES } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-void border-t border-white/5">
      {/* CTA Band */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-mist text-sm font-mono tracking-widest uppercase mb-4">Ready to dominate?</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Let's build something<br />
            <span className="text-gradient">extraordinary</span> together
          </h2>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric"
          >
            Book Free Strategy Call
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-electric to-plasma rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">ID</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Is<span className="text-gradient">Digitle</span>
              </span>
            </Link>
            <p className="text-mist text-sm leading-relaxed max-w-xs mb-6">
              Premium digital services platform. Where elite agencies and experts converge to deliver results that matter.
            </p>
            <div className="space-y-3">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-mist hover:text-white transition-colors text-sm group">
                <Mail className="w-4 h-4 text-electric" />
                {SITE.email}
              </a>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-mist hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4 text-electric" />
                {SITE.phone}
              </a>
              <div className="flex items-center gap-2 text-mist text-sm">
                <MapPin className="w-4 h-4 text-electric flex-shrink-0" />
                {SITE.address}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={s.slug} className="text-mist hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</h3>
            <ul className="space-y-3">
              {[
                ['About Us', '/about'],
                ['Partner Network', '/partners'],
                ['Portfolio', '/portfolio'],
                ['Blog', '/blog'],
                ['Pricing', '/pricing'],
                ['Contact', '/contact'],
                ['Book a Call', '/book-consultation'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-mist hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Connect</h3>
            <ul className="space-y-3">
              {Object.entries(SITE.social).map(([platform, url]) => (
                <li key={platform}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-mist hover:text-white text-sm transition-colors capitalize">
                    {platform}
                    <ArrowUpRight className="w-3 h-3 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
            {/* Newsletter */}
            <div className="mt-8">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Newsletter</h3>
              <p className="text-mist text-xs mb-3">Growth insights, direct to inbox.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-ash border border-white/10 text-white text-sm rounded-lg px-3 py-2 placeholder:text-mist/50 focus:outline-none focus:border-electric/50 min-w-0"
                />
                <button type="submit" className="px-3 py-2 bg-electric hover:bg-electric-glow text-white text-sm rounded-lg transition-colors whitespace-nowrap">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-mist text-xs">
            © {new Date().getFullYear()} IsDigitle. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-mist hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-mist hover:text-white text-xs transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="text-mist hover:text-white text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
