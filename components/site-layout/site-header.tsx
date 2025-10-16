import { GithubIcon, RssIcon, User } from 'lucide-react'
import Link from 'next/link'

import { siteConfig } from '@/constants/site'

import { buttonVariants } from '@/components/ui/button'

import { getSessionCached } from '@/lib/auth'
import { cn } from '@/lib/utils'

import { ThemeSwitcherLight } from '../theme-switch-light'
import { MainNav } from './main-nav'
import { UserMenu } from './user-menu'

export async function SiteHeader() {
  const { user } = await getSessionCached()

  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 flex min-h-14 border-b backdrop-blur">
      <MainNav />
      <nav className="flex flex-1 items-center justify-end space-x-0.5 sm:space-x-1 lg:space-x-2">
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={cn(
              buttonVariants({
                variant: 'ghost',
              }),
              'w-8 px-0 sm:w-9',
            )}
          >
            <GithubIcon className="size-3.5 sm:size-4" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <Link
          href={siteConfig.links.blog}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={cn(
              buttonVariants({
                variant: 'ghost',
              }),
              'w-8 px-0 sm:w-9',
            )}
          >
            <RssIcon className="size-2.5 fill-current sm:size-3" />
            <span className="sr-only">Blog</span>
          </div>
        </Link>
        <ThemeSwitcherLight />

        {user ? (
          <UserMenu user={user} />
        ) : (
          <Link
            href="/login"
            className={cn(
              buttonVariants({
                variant: 'ghost',
                size: 'sm',
              }),
              'px-2 sm:px-3',
            )}
          >
            <User className="mr-0.5 size-3.5 sm:size-4" />
            <span className="text-xs sm:text-sm">Sign in</span>
          </Link>
        )}
      </nav>
    </header>
  )
}
