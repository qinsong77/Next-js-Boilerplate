import { ExternalLink } from '@/components/external-link'
import { cn } from '@/lib/utils'

export function SiteFooter({
  className,
  ...props
}: React.ComponentProps<'footer'>) {
  return (
    <footer className={cn('py-2 md:py-4', className)}>
      <p className="text-balance text-center text-xs leading-relaxed text-muted-foreground md:text-left md:text-sm">
        Basically built by{' '}
        <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>. The
        source code is available on{' '}
        <ExternalLink href="https://github.com/qinsong77">GitHub</ExternalLink>.
      </p>
    </footer>
  )
}
