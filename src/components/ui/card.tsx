import * as React from 'react'
import { cn } from '../../lib/utils'

/* ─────────────────────────────────────────────
   Nekoi Card  —  three surface variants:
   • default  : white flat  (clean, soft shadow)
   • glass    : glassmorphism  (backdrop-blur)
   • float    : elevated white (larger shadow)
   ───────────────────────────────────────────── */

type CardVariant = 'default' | 'glass' | 'float'

function Card({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & { variant?: CardVariant }) {
  return (
    <div
      data-slot="card"
      data-variant={variant}
      className={cn(
        'flex flex-col gap-6 rounded-xl py-6 text-card-foreground',
        // default
        variant === 'default' && [
          'bg-card border border-border',
          'shadow-[0_2px_8px_oklch(0.18_0.012_255/0.06),0_1px_2px_oklch(0.18_0.012_255/0.04)]',
          '[box-shadow:var(--shadow-card),inset_0_1px_0_oklch(1_0_0/0.8)]',
        ],
        // glass
        variant === 'glass' && [
          'backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)]',
          'bg-[oklch(1_0_0/0.72)] border border-[oklch(1_0_0/0.55)]',
          'shadow-[0_4px_20px_oklch(0.18_0.012_255/0.08),0_1px_4px_oklch(0.18_0.012_255/0.05),inset_0_1px_0_oklch(1_0_0/0.85)]',
        ],
        // float
        variant === 'float' && [
          'bg-card border border-border',
          'shadow-[0_8px_40px_oklch(0.18_0.012_255/0.12),0_2px_8px_oklch(0.18_0.012_255/0.07),inset_0_1px_0_oklch(1_0_0/0.9)]',
        ],
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6',
        'has-data-[slot=card-action]:grid-cols-[1fr_auto]',
        '[.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold tracking-tight', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm leading-relaxed', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="card-content" className={cn('px-6', className)} {...props} />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }
