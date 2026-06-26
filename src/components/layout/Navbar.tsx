'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SITE } from '@/lib/data'

const NAV_ITEMS = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'SEO Services', href: '/services/seo', desc: 'Dominate search rankings' },
      { label: 'Web Development', href: '/services/web-development', desc: 'High-performance websites' },
      { label: 'Web Design', href: '/services/web-design', desc: 'Premium digital identities' },
      { label: 'Amazon Services', href: '/services/amazon', desc: 'Scale on Amazon' },
      { label: 'Digital Marketing', href: '/services/digital-marketing', desc: 'Full-funnel growth' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Partners', href: '/partners' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'glass border-b border-white/5 shadow-card' : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-electric rounded-lg opacity-20 group-hover:opacity-40 transition-opacity blur-md" />
              <div className="relative w-8 h-8 bg-gradient-to-br from-electric to-plasma rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">ID</span>
              </div>
            </div>
            <span className="font-display font-bold text-xl text-white">
              Is<span className="text-gradient">Digitle</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-mist hover:text-white transition-colors text-sm font-medium rounded-lg hover:bg-white/5"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 glass-medium rounded-2xl p-2 shadow-card border border-white/5"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex flex-col px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <span className="text-white text-sm font-medium group-hover:text-electric transition-colors">{child.label}</span>
                            <span className="text-mist text-xs mt-0.5">{child.desc}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="text-mist hover:text-white text-sm font-medium transition-colors px-4 py-2">
              Contact
            </Link>
            <Link
              href="/book-consultation"
              className="relative group px-5 py-2.5 bg-electric hover:bg-electric-glow text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-electric"
            >
              <span className="relative z-10">Book Free Call</span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-mist hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden glass-medium border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-white font-medium hover:text-electric transition-colors rounded-xl hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-mist text-sm hover:text-white transition-colors rounded-lg hover:bg-white/5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-mist text-center">Contact</Link>
                <Link
                  href="/book-consultation"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 bg-electric text-white font-semibold text-center rounded-xl"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
