import Link from 'next/link'

import { cn } from '@/lib/utils'

export function MainNav({
  className,
  ...properties
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...properties}
    >
      <Link
        href="/dashboard#Overview"
        className="hover:text-primary text-sm font-medium transition-colors"
      >
        Overview
      </Link>
      <Link
        href="/dashboard"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Customers
      </Link>
      <Link
        href="/dashboard"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Products
      </Link>
      <Link
        href="/dashboard"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Settings
      </Link>
    </nav>
  )
}
