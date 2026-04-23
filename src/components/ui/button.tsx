import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  [
    // base
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium',
    'transition-all duration-100 ease-out',
    'disabled:pointer-events-none disabled:opacity-40',
    '[&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0',
    'outline-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
    'select-none cursor-pointer',
  ].join(' '),
  {
    variants: {
      variant: {
        /* ── Primary: deep slate with 3D top-light + bottom-shadow ── */
        default: [
          'bg-primary text-primary-foreground border border-primary/80',
          'shadow-[0_2px_0px_oklch(0.18_0.012_255/0.35),inset_0_1px_0_oklch(1_0_0/0.15)]',
          'hover:bg-primary/90 hover:shadow-[0_4px_6px_oklch(0.18_0.012_255/0.25),inset_0_1px_0_oklch(1_0_0/0.15)] hover:-translate-y-px',
          'active:shadow-[inset_0_2px_4px_oklch(0.18_0.012_255/0.20)] active:translate-y-px active:bg-primary',
        ].join(' '),

        /* ── Secondary: white flat with subtle border ── */
        secondary: [
          'bg-card text-foreground border border-border',
          'shadow-[0_1px_3px_oklch(0.18_0.012_255/0.08),inset_0_1px_0_oklch(1_0_0/0.9)]',
          'hover:bg-secondary hover:border-border/80 hover:shadow-[0_2px_6px_oklch(0.18_0.012_255/0.10),inset_0_1px_0_oklch(1_0_0/0.9)] hover:-translate-y-px',
          'active:shadow-[inset_0_1px_3px_oklch(0.18_0.012_255/0.12)] active:translate-y-px active:bg-secondary',
        ].join(' '),

        /* ── Outline: transparent flat ── */
        outline: [
          'bg-transparent text-foreground border border-border',
          'hover:bg-secondary hover:border-border/70',
          'active:bg-muted',
        ].join(' '),

        /* ── Accent: sky blue vibrant 3D ── */
        accent: [
          'bg-accent text-accent-foreground border border-accent/80',
          'shadow-[0_2px_0px_oklch(0.45_0.15_225/0.40),inset_0_1px_0_oklch(1_0_0/0.20)]',
          'hover:bg-accent/90 hover:shadow-[0_4px_8px_oklch(0.45_0.15_225/0.30),inset_0_1px_0_oklch(1_0_0/0.20)] hover:-translate-y-px',
          'active:shadow-[inset_0_2px_4px_oklch(0.45_0.15_225/0.25)] active:translate-y-px',
        ].join(' '),

        /* ── Ghost: zero chrome ── */
        ghost: [
          'bg-transparent text-foreground border border-transparent',
          'hover:bg-secondary hover:text-foreground',
          'active:bg-muted',
        ].join(' '),

        /* ── Destructive ── */
        destructive: [
          'bg-destructive text-destructive-foreground border border-destructive/80',
          'shadow-[0_2px_0px_oklch(0.38_0.17_27/0.35),inset_0_1px_0_oklch(1_0_0/0.15)]',
          'hover:bg-destructive/90 hover:shadow-[0_4px_6px_oklch(0.38_0.17_27/0.25),inset_0_1px_0_oklch(1_0_0/0.15)] hover:-translate-y-px',
          'active:shadow-[inset_0_2px_4px_oklch(0.38_0.17_27/0.20)] active:translate-y-px',
        ].join(' '),

        /* ── Link ── */
        link: 'bg-transparent text-accent underline-offset-4 hover:underline border-transparent',
      },
      size: {
        default: 'h-9  px-4  py-2   has-[>svg]:px-3',
        sm:      'h-8  px-3  py-1.5 has-[>svg]:px-2.5 text-xs rounded-md gap-1.5',
        lg:      'h-11 px-6  py-2.5 has-[>svg]:px-4   text-base rounded-lg',
        xl:      'h-13 px-8  py-3   has-[>svg]:px-5   text-base rounded-lg',
        icon:    'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
