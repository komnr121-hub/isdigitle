'use client'

import { useState } from 'react'

const CATEGORIES = ['All', 'SEO', 'Development', 'Amazon', 'Design', 'Marketing']

export function PortfolioCategoryFilter() {
  const [active, setActive] = useState('All')

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
            active === cat
              ? 'bg-electric text-white'
              : 'glass border border-white/10 text-mist hover:text-white hover:border-electric/30'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
