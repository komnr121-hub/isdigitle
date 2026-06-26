import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PORTFOLIO } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { PortfolioCategoryFilter } from '@/components/ui/PortfolioCategoryFilter'

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies — Real Results for Real Businesses',
  description: 'Explore IsDigitle\'s case studies. Real results across SEO, web development, Amazon, and digital marketing. Proof over promises.',
}


export default function PortfolioPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <div className="mb-6"><SectionLabel>Case Studies</SectionLabel></div>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
          Proof over<br />
          <span className="text-gradient">promises</span>
        </h1>
        <p className="text-mist text-xl max-w-2xl mx-auto">
          Every project tells a story. These are the brands we&apos;ve helped grow — and the numbers that prove it.
        </p>
      </div>

      {/* Filter tabs — Client Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <PortfolioCategoryFilter />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO.map((project) => (
            <article
              key={project.title}
              className="group glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              {/* Image */}
              <div className="relative h-52 bg-ash overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-xs px-2.5 py-1 rounded-full glass border border-white/10 text-white font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-electric flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="font-display font-bold text-white mb-2 group-hover:text-electric transition-colors">
                  {project.title}
                </h2>
                <p className="text-mist text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Results */}
                <div className="space-y-2 mb-5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <p className="text-xs font-mono tracking-wide text-mist uppercase mb-3">Key Results</p>
                  {project.results.map((result) => (
                    <div key={result} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: project.color }} />
                      <span className="text-silver">{result}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-mist">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-deep-space border-t border-white/5 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Your results could be <span className="text-gradient">next</span>
          </h2>
          <p className="text-mist mb-8">Let's discuss your goals and build a strategy to achieve them.</p>
          <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric-glow text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-electric">
            Start Your Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
