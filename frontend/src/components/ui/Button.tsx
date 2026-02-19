import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition will-change-transform focus-ring disabled:opacity-60 disabled:pointer-events-none'

  const sizes: Record<Size, string> = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
  }

  const variants: Record<Variant, string> = {
    primary:
      'bg-primary text-white shadow-glow hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-card text-fg border border-border hover:border-primary/60 hover:-translate-y-0.5 active:translate-y-0',
    ghost: 'bg-transparent text-fg hover:bg-white/5 border border-transparent hover:border-border',
  }

  return (
    <button className={[base, sizes[size], variants[variant], className].join(' ')} {...props} />
  )
}


