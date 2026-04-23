import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

/* ─────────────────────────────────────────────
   Nekoi Badge  —  flat pill with subtle border
   ───────────────────────────────────────────── */

const badgeVariants = cva(
  [
    'inline-flex items-center justify-center rounded-full px-2.5 py-0.5',
    'text-xs font-medium w-fit whitespace-nowrap shrink-0',
    '[&>svg]:size-3 gap-1 [&>svg]:pointer-events-none',
    'border transition-colors duration-150 overflow-hidden',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'bg-primary/10 text-primary border-primary/20',
          '[a&]:hover:bg-primary/15',
        ].join(' '),
        secondary: [
          'bg-secondary text-secondary-foreground border-border',
          '[a&]:hover:bg-secondary/80',
        ].join(' '),
        accent: [
          'bg-accent/10 text-accent border-accent/20',
          '[a&]:hover:bg-accent/15',
        ].join(' '),
        success: [
          'bg-[oklch(0.72_0.14_165/0.12)] text-[oklch(0.45_0.14_165)] border-[oklch(0.72_0.14_165/0.25)]',
          '[a&]:hover:bg-[oklch(0.72_0.14_165/0.18)]',
        ].join(' '),
        warning: [
          'bg-[oklch(0.82_0.16_85/0.12)] text-[oklch(0.55_0.16_85)] border-[oklch(0.82_0.16_85/0.25)]',
          '[a&]:hover:bg-[oklch(0.82_0.16_85/0.18)]',
        ].join(' '),
        destructive: [
          'bg-destructive/10 text-destructive border-destructive/20',
          '[a&]:hover:bg-destructive/15',
        ].join(' '),
        outline: [
          'bg-transparent text-foreground border-border',
          '[a&]:hover:bg-secondary',
        ].join(' '),
        solid: [
          'bg-primary text-primary-foreground border-primary/80',
          'shadow-[0_1px_0_oklch(0.18_0.012_255/0.25),inset_0_1px_0_oklch(1_0_0/0.15)]',
          '[a&]:hover:bg-primary/90',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
