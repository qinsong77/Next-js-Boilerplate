'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/config/site'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { cn } from '@/lib/utils'

const navItems = [
  {
    href: '/loading-and-streaming',
    label: 'Loading and streaming',
    shortLabel: 'streaming ui',
  },
  { href: '/dashboard', label: 'dashboard' },
  { href: '/line-chart', label: 'line chart' },
  {
    href: '/pagination-demo',
    label: 'table pagination',
    shortLabel: 'pagination',
  },
  { href: '/todo', label: 'Todo demo' },
  {
    href: '/task-sequence-progress',
    label: 'Task Sequence Progress demo',
    shortLabel: 'Sequence Progress',
  },
  { href: siteConfig.links.repoGithub, label: 'GitHub', external: true },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex w-full items-center">
      <Link
        href="/"
        className="mr-3 flex items-center"
      >
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          className="h-6 w-16 dark:invert"
          width={100}
          height={24}
        />
        <span className="ml-2 text-sm font-bold sm:text-base">
          15 Boilerplate
        </span>
      </Link>

      <nav className="hidden items-center space-x-1 sm:flex md:space-x-2 lg:space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'hover:text-foreground/80 text-xs transition-colors sm:text-sm',
              pathname?.startsWith(item.href)
                ? 'text-foreground'
                : 'text-foreground/60',
            )}
            {...(item.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {item.shortLabel || item.label}
          </Link>
        ))}
      </nav>

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger
          asChild
          className="sm:hidden"
        >
          <Button
            variant="outline"
            size="icon"
          >
            <Menu className="size-[1.2rem]" />
            <span className="sr-only">打开菜单</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {navItems.map((item) => (
            <DropdownMenuItem
              key={item.href}
              asChild
            >
              <Link
                href={item.href}
                className={cn(
                  'w-full',
                  pathname?.startsWith(item.href)
                    ? 'text-foreground'
                    : 'text-foreground/60',
                )}
                {...(item.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {item.shortLabel || item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
