import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Clock, User } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { NewsletterForm } from '@/components/ui/NewsletterForm'
import { BlogCategoryFilter } from '@/components/ui/BlogCategoryFilter'

export const metadata: Metadata = {
  title: 'Blog — Digital Marketing Insights & Growth Strategies',
  description: 'Expert insights on SEO, web development, Amazon, and digital marketing from the IsDigitle team. Actionable strategies you can implement today.',
}

const BLOG_POSTS = [
  {
    title: 'The 2025 Technical SEO Checklist That Actually Moves Rankings',
    excerpt: 'A comprehensive technical SEO audit framework covering Core Web Vitals, crawlability, schema markup, and indexation strategies that drive real ranking improvements.',
    category: 'SEO',
    author: 'Aisha Mirza',
    date: 'Jun 15, 2025',
    readTime: '12 min read',
    image: 'https://picsum.photos/800/500?random=10',
    featured: true,
    color: '#6C63FF',
    slug: 'technical-seo-checklist-2025',
  },
  {
    title: 'Amazon Private Label Launch Framework: $0 to $100K in 90 Days',
    excerpt: 'The exact product research criteria, launch strategy, and PPC structure we use to take new private label products from zero to six figures in their first quarter.',
    category: 'Amazon',
    author: 'Bilal Raza',
    date: 'Jun 10, 2025',
    readTime: '15 min read',
    image: 'https://picsum.photos/800/500?random=11',
    featured: false,
    color: '#FF9900',
    slug: 'amazon-private-label-launch-framework',
  },
  {
    title: 'Why Most Meta Ads Fail (And the Framework That Fixes Them)',
    excerpt: 'Diagnosing the three most common Meta Ads failure points — creative fatigue, audience mismatch, and offer-market fit — with a testing framework that consistently delivers 4x+ ROAS.',
    category: 'Paid Media',
    author: 'Sarah Chen',
    date: 'Jun 5, 2025',
    readTime: '10 min read',
    image: 'https://picsum.photos/800/500?random=12',
    featured: false,
    color: '#FF6B6B',
    slug: 'meta-ads-failure-framework',
  },
  {
    title: 'Next.js vs WordPress in 2025: The Honest Comparison for Business Owners',
    excerpt: 'A no-nonsense breakdown of when to choose Next.js and when WordPress is the right call. We cover performance, cost, flexibility, and long-term considerations.',
    category: 'Development',
    author: 'Omar Sheikh',
    date: 'May 28, 2025',
    readTime: '8 min read',
    image: 'https://picsum.photos/800/500?random=13',
    featured: false,
    color: '#00D4FF',
    slug: 'nextjs-vs-wordpress-2025',
  },
  {
    title: 'The B2B Lead Generation System That Generated 1,200 Qualified Leads/Month',
    excerpt: 'A complete breakdown of the multi-channel lead generation system we built for a real estate developer — combining LinkedIn outreach, landing pages, and CRM automation.',
    category: 'Lead Generation',
    author: 'Zain Al-Hassan',
    date: 'May 20, 2025',
    readTime: '13 min read',
    image: 'https://picsum.photos/800/500?random=14',
    featured: false,
    color: '#4CAF50',
    slug: 'b2b-lead-generation-system',
  },
  {
    title: 'How to Build a Brand Identity That Commands Premium Pricing',
    excerpt: 'The psychology of premium brand positioning and the practical design decisions that make customers perceive higher value — before they even read your copy.',
    category: 'Branding',
    author: 'Fatima Khan',
    date: 'May 14, 2025',
    readTime: '9 min read',
    image: 'https://picsum.photos/800/500?random=15',
    featured: false,
    color: '#F4C542',
    slug: 'premium-brand-identity',
  },
]

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <div className="bg-obsidian min-h-screen pt-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <div className="mb-6"><SectionLabel>Insights & Strategies</SectionLabel></div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
          The <span className="text-gradient">IsDigitle</span> Blog
        </h1>
        <p className="text-mist text-xl max-w-2xl mx-auto">
          Actionable digital growth insights from practitioners who execute at the highest level — no fluff, no theory, just what actually works.
        </p>
      </div>

      {/* Category filter — Client Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <BlogCategoryFilter />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-10">
          <article className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-card lg:flex">
            <div className="relative lg:w-1/2 h-64 lg:h-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-obsidian/20" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-electric text-white">Featured</span>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full" style={{ color: featured.color, backgroundColor: `${featured.color}15` }}>
                  {featured.category}
                </span>
                <span className="text-mist text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" />{featured.readTime}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-electric transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="text-mist text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-mist">
                  <User className="w-3.5 h-3.5" />
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                </div>
                <span className="flex items-center gap-1 text-electric text-sm font-medium group-hover:gap-2 transition-all">
                  Read more <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </article>
        </Link>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-card h-full flex flex-col">
                <div className="relative h-48 overflow-hidden bg-ash">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ color: post.color, backgroundColor: `${post.color}20` }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="font-display font-bold text-white mb-2 group-hover:text-electric transition-colors leading-snug flex-1">
                    {post.title}
                  </h2>
                  <p className="text-mist text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-mist pt-4 border-t border-white/5">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA — uses Client Component form */}
        <div className="mt-16 glass rounded-2xl p-10 border border-white/5 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-3">
            Get insights <span className="text-gradient">in your inbox</span>
          </h2>
          <p className="text-mist mb-6">Weekly growth strategies from practitioners who are actively executing. No fluff.</p>
          <NewsletterForm />
          <p className="text-mist text-xs mt-3">Join 4,200+ subscribers. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  )
}
