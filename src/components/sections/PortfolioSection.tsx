'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PORTFOLIO } from '@/lib/data'

export function PortfolioSection() {
  return (
    <section className="relative section-pad bg-deep-space overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <SectionHeading
            label="Case Studies"
            title="Proof over"
            titleHighlight="promises"
            subtitle="Real results for real businesses. Explore a selection of our most impactful work."
            center={false}
          />
          <Link
            href="/portfolio"
            className="flex items-center gap-2 px-5 py-2.5 glass border border-white/10 hover:border-electric/30 text-white text-sm font-medium rounded-xl transition-all duration-200 whitespace-nowrap"
          >
            View All Work
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO.slice(0, 6).map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-ash">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs px-2.5 py-1 rounded-full glass border border-white/10 text-white font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-white mb-2 group-hover:text-electric transition-colors">
                  {project.title}
                </h3>
                <p className="text-mist text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Results */}
                <div className="space-y-1.5 mb-4">
                  {project.results.map((result) => (
                    <div key={result} className="flex items-center gap-2 text-xs text-silver">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: project.color }} />
                      {result}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-mist">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
