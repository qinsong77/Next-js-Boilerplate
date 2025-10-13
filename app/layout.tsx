import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { siteConfig } from '@/config/site'

import { Providers } from '@/components/providers'

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
  authors: [
    {
      name: 'Notend',
      url: siteConfig.links.github,
    },
  ],
  creator: 'Notend',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={cn('bg-background font-sans antialiased', fontSans.variable)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
