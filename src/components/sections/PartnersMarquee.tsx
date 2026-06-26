'use client'

import { motion } from 'framer-motion'

const PARTNER_LOGOS = [
  'Shopify', 'WordPress', 'Google', 'Meta', 'Amazon', 'Semrush',
  'Ahrefs', 'HubSpot', 'Klaviyo', 'Figma', 'Webflow', 'Stripe',
  'Salesforce', 'Mailchimp', 'ClickFunnels', 'Monday.com',
]

export function PartnersMarquee() {
  return (
    <section className="relative py-14 bg-deep-space border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-mist text-sm font-mono tracking-widest uppercase">Trusted tools & platforms we master</p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-deep-space to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-deep-space to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ width: 'max-content' }}
        >
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="flex-shrink-0 px-6 py-2 glass rounded-xl border border-white/5 text-mist font-mono text-sm font-medium hover:text-white hover:border-electric/20 transition-all duration-200 cursor-default"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stat strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: '8+', label: 'Years in Market' },
            { value: '25+', label: 'Industries Served' },
            { value: '40+', label: 'Countries Reached' },
            { value: '100%', label: 'Satisfaction Rate' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-display text-2xl font-bold text-white mb-0.5">{value}</div>
              <div className="text-mist text-xs">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
