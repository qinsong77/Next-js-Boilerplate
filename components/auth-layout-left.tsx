'use client'

import { Codesandbox } from 'lucide-react'
import Link from 'next/link'

import { siteConfig } from '@/constants/site'

export default function AuthLayoutLeft() {
  return (
    <div className="bg-muted/30 hidden h-full flex-col lg:flex lg:w-1/2">
      <div className="flex flex-1 flex-col justify-between p-12">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Codesandbox className="size-8" />
            <span className="text-lg font-medium">Next.js Boilerplate</span>
          </Link>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-foreground mb-3 text-3xl font-semibold">
              Build Better, Ship Faster
            </h2>
            <p className="text-muted-foreground mb-6">
              A modern Next.js starter with authentication, beautiful UI, and
              best practices built in.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground text-sm font-medium">
              Key Features
            </h3>
            <ul className="text-muted-foreground marker:text-foreground list-disc space-y-2 pl-5 text-sm">
              <li>
                Complete dev tooling: ESLint v9, Prettier, Husky, and Commitlint
              </li>
              <li>
                Modern styling with Tailwind CSS v4 and shadcn/ui components
              </li>
              <li>Authentication system with secure cookie-based sessions</li>
              <li>
                Testing setup with Vitest, React Testing Library, and Playwright
              </li>
              <li>Production logging with Pino and bundle analysis tools</li>
              <li>Docker configuration and GitHub Actions CI/CD ready</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={siteConfig.links.repoGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-sm underline-offset-4 transition-colors hover:underline"
          >
            GitHub Repository
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link
            href={siteConfig.links.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-sm underline-offset-4 transition-colors hover:underline"
          >
            Blog
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-sm underline-offset-4 transition-colors hover:underline"
          >
            Documentation
          </Link>
        </div>
      </div>
    </div>
  )
}
