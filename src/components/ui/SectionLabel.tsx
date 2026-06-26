import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn('inline-flex items-center gap-2 px-4 py-2 glass-strong rounded-full', className)}>
      <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
      <span className="text-xs font-mono font-medium tracking-widest text-electric uppercase">{children}</span>
    </div>
  )
}
