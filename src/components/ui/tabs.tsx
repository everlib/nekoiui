'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '../../lib/utils'

/* ─────────────────────────────────────────────
   Nekoi Tabs  —  flat white underline style
   ───────────────────────────────────────────── */

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-3', className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        // flat white bar with bottom border
        'inline-flex h-10 w-fit items-end justify-start',
        'border-b border-border bg-transparent gap-0',
        className,
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // base
        'relative inline-flex items-center justify-center gap-1.5 px-4 pb-2.5 pt-2',
        'text-sm font-medium whitespace-nowrap',
        'text-muted-foreground transition-colors duration-150',
        'disabled:pointer-events-none disabled:opacity-40',
        'outline-none focus-visible:outline-none',
        // focus ring
        'focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-1 focus-visible:rounded-sm',
        // hover
        'hover:text-foreground',
        // active underline indicator
        'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-full',
        'after:bg-transparent after:transition-all after:duration-150',
        // active state
        'data-[state=active]:text-primary data-[state=active]:font-semibold',
        'data-[state=active]:after:bg-primary',
        '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
        className,
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
