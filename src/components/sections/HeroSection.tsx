'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Shield, Award, Users } from 'lucide-react'
import { GlowOrb } from '@/components/ui'

const TRUST_ITEMS = [
  { icon: Shield, label: '850+ Projects Delivered' },
  { icon: Award, label: 'Award-Winning Agency' },
  { icon: Users, label: '60+ Expert Partners' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-hero-mesh" />
      <GlowOrb color="electric" size="xl" className="-top-40 -left-40 opacity-[0.07]" />
      <GlowOrb color="plasma" size="lg" className="top-1/4 -right-32 opacity-[0.06]" />
      <GlowOrb color="gold" size="md" className="bottom-20 left-1/4 opacity-[0.04]" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-electric/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass-strong rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
          <span className="text-xs font-mono font-medium tracking-widest text-electric uppercase">
            Premium Digital Agency Network
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6"
        >
          Where Digital
          <br />
          <span className="text-gradient">Excellence</span>
          <br />
          Converges
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-mist text-lg md:text-xl leading-relaxed mb-10"
        >
          60+ elite specialists. One unified platform. From SEO to Amazon, web development to AI automation — we architect digital dominance for brands that refuse mediocrity.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            href="/book-consultation"
            className="group flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric text-base"
          >
            Book Free Strategy Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 px-8 py-4 glass hover:glass-medium text-white font-medium rounded-xl transition-all duration-200 text-base border border-white/10 hover:border-white/20"
          >
            <Play className="w-4 h-4" />
            View Our Work
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-mist text-sm">
              <Icon className="w-4 h-4 text-electric" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Animated stats band */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '850+', label: 'Projects Delivered' },
            { value: '$42M+', label: 'Revenue Generated' },
            { value: '60+', label: 'Expert Partners' },
            { value: '96%', label: 'Client Retention' },
          ].map(({ value, label }) => (
            <div key={label} className="glass rounded-2xl p-5 border border-white/5 hover:border-electric/20 transition-colors">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">{value}</div>
              <div className="text-mist text-sm">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />
    </section>
  )
}
