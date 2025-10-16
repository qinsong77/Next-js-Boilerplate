import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { META_THEME_COLORS } from '@/constants/config'
import { siteConfig } from '@/constants/site'

import { AppProvider } from '@/components/providers'

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
          }}
        />
        <meta
          name="theme-color"
          content={META_THEME_COLORS.light}
        />
      </head>
      <body
        suppressHydrationWarning
        className={cn('bg-background font-sans antialiased', fontSans.variable)}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
