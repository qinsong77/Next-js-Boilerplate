import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { siteConfig } from '@/config/site'

import { Providers } from '@/components/providers'
import { SiteFooter, SiteHeader } from '@/components/site-layout'

import { cn } from '@/lib/utils'

import '../styles/globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Boilerplate',
    'Tailwind CSS',
    'shadcn.ui',
    'Template',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
    >
      <body
        className={cn('bg-background font-sans antialiased', fontSans.variable)}
      >
        <div className="relative mx-auto flex min-h-screen max-w-screen-lg flex-col px-4 2xl:max-w-screen-xl">
          <Providers>
            <SiteHeader />
            <main className="flex-1 py-2 md:py-4">{children}</main>
            <SiteFooter />
          </Providers>
        </div>
      </body>
    </html>
  )
}
