import { siteConfig } from '@/constants/site'

import { cn } from '@/lib/utils'

import { ExternalLink } from './external-link'

export function SiteFooter({ className }: React.ComponentProps<'footer'>) {
  return (
    <footer className={cn('py-2 md:py-4', className)}>
      <p className="text-muted-foreground text-center text-xs leading-relaxed text-balance md:text-left md:text-sm">
        Basically built by{' '}
        <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>. The
        source code is available on{' '}
        <ExternalLink href={siteConfig.links.repoGithub}>GitHub</ExternalLink>.
      </p>
    </footer>
  )
}
