import type { ComponentType, PropsWithChildren } from 'react'

export function SectionHeading({
  eyebrow,
  icon: Icon,
  title,
  subtitle,
  align = 'left',
  children,
}: PropsWithChildren<{
  eyebrow?: string
  icon?: ComponentType<{ size?: number; className?: string }>
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}>) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={['max-w-2xl', alignCls].join(' ')}>
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-semibold text-muted">
          {Icon ? (
            <span className="grid h-5 w-5 place-items-center rounded-md bg-white/5 ring-1 ring-border">
              <Icon size={14} className="text-accent" />
            </span>
          ) : (
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          )}
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-base text-muted sm:text-lg">{subtitle}</p> : null}
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  )
}


