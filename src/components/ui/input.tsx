import * as React from 'react'
import { cn } from '../../lib/utils'

/* ─────────────────────────────────────────────
   Nekoi Input  —  flat white, inner-shadow depth
   ───────────────────────────────────────────── */

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // layout
        'h-9 w-full min-w-0 rounded-md px-3 py-1 text-sm',
        // colors
        'bg-card text-foreground border border-border',
        'placeholder:text-muted-foreground/60',
        // inner-shadow for depth
        'shadow-[inset_0_1px_3px_oklch(0.18_0.012_255/0.07)]',
        // transitions
        'transition-[color,box-shadow,border-color] duration-150',
        // file input
        'file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',
        // focus
        'outline-none focus-visible:border-ring',
        'focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-0',
        'focus-visible:shadow-[inset_0_1px_3px_oklch(0.18_0.012_255/0.07),0_0_0_3px_oklch(from_var(--ring)_l_c_h_/_0.15)]',
        // disabled
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        // invalid
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
