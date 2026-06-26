import { cn } from '@/lib/utils'
import { SectionLabel } from './SectionLabel'

interface SectionHeadingProps {
  label?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  center?: boolean
  className?: string
}

export function SectionHeading({ label, title, titleHighlight, subtitle, center = true, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', center && 'mx-auto text-center', className)}>
      {label && (
        <div className="mb-4">
          <SectionLabel>{label}</SectionLabel>
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
        {title}{' '}
        {titleHighlight && <span className="text-gradient">{titleHighlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-mist text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
