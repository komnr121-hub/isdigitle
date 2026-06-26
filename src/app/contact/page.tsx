import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react'
import { SITE } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Contact IsDigitle — Let\'s Talk',
  description: 'Get in touch with the IsDigitle team. Book a strategy call, send us a message, or reach out on WhatsApp. We respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6"><SectionLabel>Get In Touch</SectionLabel></div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Let's build something<br />
            <span className="text-gradient">remarkable</span>
          </h1>
          <p className="text-mist text-xl max-w-xl mx-auto">
            Whether you have a project in mind, a question, or just want to explore what&apos;s possible — we&apos;re here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
              { icon: Phone, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone}` },
              { icon: MapPin, label: 'Location', value: SITE.address, href: '#' },
              { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: '#' },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 glass rounded-2xl p-5 border border-white/5 hover:border-electric/20 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-electric" />
                </div>
                <div>
                  <p className="text-mist text-xs mb-0.5">{label}</p>
                  <p className="text-white font-medium text-sm group-hover:text-electric transition-colors">{value}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl p-5 border border-[#25D366]/20 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <p className="text-mist text-xs mb-0.5">WhatsApp</p>
                <p className="text-white font-medium text-sm group-hover:text-[#25D366] transition-colors flex items-center gap-1">
                  Chat directly <ArrowUpRight className="w-3.5 h-3.5" />
                </p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form className="glass rounded-2xl p-8 border border-white/5 space-y-5">
              <h2 className="font-display text-2xl font-bold text-white mb-6">Send us a message</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-mist text-sm mb-2">First Name *</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-ash border border-white/10 focus:border-electric/50 text-white placeholder:text-mist/50 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-mist text-sm mb-2">Last Name *</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full bg-ash border border-white/10 focus:border-electric/50 text-white placeholder:text-mist/50 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-mist text-sm mb-2">Email *</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-ash border border-white/10 focus:border-electric/50 text-white placeholder:text-mist/50 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-mist text-sm mb-2">Service Needed</label>
                <select className="w-full bg-ash border border-white/10 focus:border-electric/50 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors appearance-none">
                  <option value="">Select a service...</option>
                  <option>SEO Services</option>
                  <option>Website Development</option>
                  <option>Web Design</option>
                  <option>Amazon Services</option>
                  <option>Digital Marketing</option>
                  <option>Multiple Services</option>
                  <option>Not sure — need guidance</option>
                </select>
              </div>

              <div>
                <label className="block text-mist text-sm mb-2">Monthly Budget Range</label>
                <select className="w-full bg-ash border border-white/10 focus:border-electric/50 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors appearance-none">
                  <option value="">Select budget...</option>
                  <option>Under $1,000/month</option>
                  <option>$1,000 – $3,000/month</option>
                  <option>$3,000 – $7,500/month</option>
                  <option>$7,500 – $15,000/month</option>
                  <option>$15,000+/month</option>
                </select>
              </div>

              <div>
                <label className="block text-mist text-sm mb-2">Tell us about your project *</label>
                <textarea
                  rows={5}
                  placeholder="Describe your goals, challenges, and what you&apos;re looking to achieve..."
                  className="w-full bg-ash border border-white/10 focus:border-electric/50 text-white placeholder:text-mist/50 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric"
              >
                Send Message
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <p className="text-mist text-xs text-center">
                We respond within 24 hours. Your information is kept completely private.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
