'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// Re-export server-safe components
export { SectionLabel } from './SectionLabel'
export { SectionHeading } from './SectionHeading'

// ── Button ─────────────────────────────────────────────
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, className, children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric'
    const variants = {
      primary: 'bg-electric hover:bg-electric-glow text-white hover:shadow-electric',
      secondary: 'bg-ash hover:bg-ash/80 text-white border border-white/10 hover:border-electric/30',
      ghost: 'text-mist hover:text-white hover:bg-white/5',
      outline: 'border border-electric/50 text-electric hover:bg-electric/10',
    }
    const sizes = {
      sm: 'text-sm px-4 py-2',
      md: 'text-sm px-5 py-2.5',
      lg: 'text-base px-8 py-4',
    }
    const cls = cn(base, variants[variant], sizes[size], className)
    if (href) return <Link href={href} className={cls}>{children}</Link>
    return <button ref={ref} className={cls} {...props}>{children}</button>
  }
)
Button.displayName = 'Button'

// ── Badge ─────────────────────────────────────────────
interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'electric' | 'gold' | 'success'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-white/5 text-mist border-white/10',
    electric: 'bg-electric/10 text-electric border-electric/20',
    gold: 'bg-gold/10 text-gold border-gold/20',
    success: 'bg-green-500/10 text-green-400 border-green-500/20',
  }
  return (
    <span className={cn('inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border', variants[variant], className)}>
      {children}
    </span>
  )
}

// ── Card ─────────────────────────────────────────────
interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function Card({ children, className, hover = true, glow = false }: CardProps) {
  return (
    <div className={cn(
      'glass rounded-2xl p-6 relative overflow-hidden',
      hover && 'hover-lift',
      glow && 'hover:shadow-electric',
      className
    )}>
      {children}
    </div>
  )
}

// ── GlowOrb ──────────────────────────────────────────
interface GlowOrbProps {
  color?: 'electric' | 'plasma' | 'gold'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function GlowOrb({ color = 'electric', size = 'md', className }: GlowOrbProps) {
  const colors = {
    electric: 'bg-electric',
    plasma: 'bg-plasma',
    gold: 'bg-gold',
  }
  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[600px] h-[600px]',
  }
  return (
    <div className={cn(
      'absolute rounded-full blur-3xl opacity-10 pointer-events-none',
      colors[color], sizes[size], className
    )} />
  )
}
