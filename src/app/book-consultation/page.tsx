import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, ArrowUpRight, Shield, MessageSquare } from 'lucide-react'
import { SITE } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Book a Free Strategy Consultation — IsDigitle',
  description: 'Book a 60-minute free strategy session with IsDigitle\'s digital growth experts. No pitch, no pressure — just a clear plan for your digital growth.',
}

const WHAT_TO_EXPECT = [
  { step: '01', title: 'Digital Audit', description: 'We review your current website, SEO, ads, and overall digital presence before the call.' },
  { step: '02', title: 'Gap Analysis', description: 'We identify the highest-leverage opportunities specific to your business and market.' },
  { step: '03', title: 'Strategy Outline', description: 'You leave with a clear, actionable growth roadmap — regardless of whether you work with us.' },
  { step: '04', title: 'Q&A', description: 'Open floor for any questions about our approach, team, pricing, or anything else.' },
]

export default function BookConsultationPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="mb-6"><SectionLabel>Free Consultation</SectionLabel></div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              60 minutes that could<br />
              <span className="text-gradient">change everything</span>
            </h1>
            <p className="text-mist text-lg leading-relaxed mb-8">
              Our strategy sessions aren&apos;t sales pitches. They&apos;re working sessions — you&apos;ll leave with real insights about your digital position and a clear picture of what&apos;s possible. Book a slot that works for you.
            </p>

            {/* What&apos;s included */}
            <div className="space-y-4 mb-10">
              {[
                'Full digital presence audit (done before the call)',
                'Market & competitor analysis',
                'Custom growth strategy outline',
                'Priority action items you can implement today',
                'Zero pressure, zero obligation',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                  <span className="text-silver text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Trust */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: Clock, label: '60 min call' },
                { icon: Shield, label: 'No commitment' },
                { icon: CheckCircle2, label: 'Expert-led' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 glass rounded-xl border border-white/10">
                  <Icon className="w-4 h-4 text-electric" />
                  <span className="text-silver text-sm">{label}</span>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h2 className="font-display font-bold text-white mb-5">What to expect</h2>
              <div className="space-y-4">
                {WHAT_TO_EXPECT.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="font-mono text-2xl font-bold text-gradient opacity-50 leading-none flex-shrink-0">{item.step}</span>
                    <div>
                      <p className="font-semibold text-white text-sm mb-0.5">{item.title}</p>
                      <p className="text-mist text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Calendly embed placeholder + direct form */}
          <div>
            {/* Calendly integration */}
            <div className="glass rounded-2xl border border-white/5 overflow-hidden mb-6">
              <div className="p-6 border-b border-white/5">
                <h2 className="font-display text-xl font-bold text-white">Choose a time</h2>
                <p className="text-mist text-sm">Slots available Monday–Saturday, 9am–7pm PKT</p>
              </div>
              {/* Replace this div with actual Calendly embed */}
              <div
                className="min-h-[500px] flex flex-col items-center justify-center p-10 text-center bg-ash/30"
              >
                <div className="w-16 h-16 rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-electric" />
                </div>
                <h3 className="font-display text-white font-bold mb-2">Calendly Calendar</h3>
                <p className="text-mist text-sm mb-6 max-w-xs">
                  Integrate your Calendly widget here. Replace this placeholder with the Calendly embed script for <strong className="text-white">isdigitle.com</strong>
                </p>
                <a
                  href={SITE.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric"
                >
                  Open Calendar
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Alternative contact */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Hi, I&apos;d like to book a strategy call with IsDigitle`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 glass rounded-xl p-5 border border-[#25D366]/20 hover:bg-[#25D366]/5 transition-all text-center"
              >
                <MessageSquare className="w-6 h-6 text-[#25D366]" />
                <span className="text-white text-sm font-medium">WhatsApp Us</span>
                <span className="text-mist text-xs">Instant response</span>
              </a>
              <Link
                href="/contact"
                className="flex flex-col items-center gap-2 glass rounded-xl p-5 border border-white/10 hover:border-electric/20 transition-all text-center"
              >
                <ArrowUpRight className="w-6 h-6 text-electric" />
                <span className="text-white text-sm font-medium">Send Message</span>
                <span className="text-mist text-xs">24-hour reply</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
