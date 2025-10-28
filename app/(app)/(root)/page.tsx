import {
  ArrowRight,
  CheckSquare,
  LayoutDashboard,
  Table,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { TextSplitter } from '@/components/text-splitter'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { logger } from '@/lib/shared'

const demos = [
  {
    href: '/loading-and-streaming',
    icon: Zap,
    title: 'Loading & Streaming',
    description: 'Async data loading patterns',
  },
  {
    href: '/dashboard',
    icon: LayoutDashboard,
    title: 'Dashboard',
    description: 'Analytics and data visualization',
  },
  {
    href: '/pagination-demo',
    icon: Table,
    title: 'Pagination',
    description: 'Data table with pagination',
  },
  {
    href: '/task-sequence-progress',
    icon: CheckSquare,
    title: 'Task Sequence Progress',
    description: 'Sequential tasks progress with RSC and Suspense',
  },
]

const resources = [
  {
    href: 'https://nextjs.org/docs',
    title: 'Docs',
    description: 'Find in-depth information about Next.js features and API.',
  },
  {
    href: 'https://nextjs.org/learn',
    title: 'Learn',
    description: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    href: 'https://github.com/qinsong77/Next-js-Boilerplate',
    title: 'Templates',
    description: 'Explore starter templates for Next.js.',
  },
  {
    href: 'https://vercel.com/new',
    title: 'Deploy',
    description:
      'Instantly deploy your Next.js site to a shareable URL with Vercel.',
  },
]

export default function Home() {
  return (
    <div className="container mx-auto space-y-6 px-4 md:space-y-12 lg:space-y-12">
      {/* Hero Section */}
      <section className="space-y-8 md:space-y-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <Image
              src="/hero.svg"
              alt="Hero Logo"
              className="transition-all duration-500 hover:scale-105 dark:drop-shadow-[0_0_0.5rem_#ffffff70] dark:invert"
              priority
              fill
            />
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <TextSplitter />
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
              A modern Next.js boilerplate with best practices and interactive
              demos
            </p>
          </div>
        </div>

        {/* Demos Section */}
        <div className="space-y-6">
          <div className="space-y-3 text-center">
            <h2 className="text-xl font-bold tracking-tight md:text-2xl lg:text-3xl">
              Check the demos
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Explore interactive examples and features
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {demos.map((demo) => {
              const Icon = demo.icon
              return (
                <Link
                  key={demo.href}
                  href={demo.href}
                  className="group"
                >
                  <Card className="hover:border-primary hover:shadow-primary/20 dark:hover:shadow-primary/10 h-full border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <CardContent className="flex h-full flex-col items-center gap-3 p-5 text-center">
                      <div className="bg-primary/10 group-hover:bg-primary/20 dark:bg-primary/20 dark:group-hover:bg-primary/30 flex size-12 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
                        <Icon className="text-primary dark:text-primary size-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm leading-tight font-semibold">
                          {demo.title}
                        </h3>
                        <p className="text-muted-foreground text-xs">
                          {demo.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Get Started Section */}
      <section className="grid gap-6 md:grid-cols-2 lg:gap-8">
        <Card className="hover:border-primary/50 border-2 transition-all duration-300 hover:shadow-lg">
          <CardContent className="flex h-full items-center justify-center p-8 md:p-10">
            <p className="text-center text-base md:text-lg">
              Get started by editing{' '}
              <code className="bg-muted text-primary rounded-md px-2.5 py-1 font-mono text-sm font-semibold">
                app/(app)/(root)/page.tsx
              </code>
            </p>
          </CardContent>
        </Card>
        <Card className="hover:border-primary/50 border-2 transition-all duration-300 hover:shadow-lg">
          <CardContent className="flex h-full flex-wrap items-center justify-center gap-3 p-8 md:p-10">
            <span className="text-muted-foreground text-base md:text-lg">
              Built with
            </span>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-110 hover:opacity-80"
            >
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
            <span className="text-muted-foreground">&</span>
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-110 hover:opacity-80"
            >
              <Image
                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={100}
                height={24}
                priority
              />
            </a>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Resources Section */}
      <section className="space-y-8">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Explore Resources
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {resources.map((resource) => (
            <Card
              key={resource.href}
              className="group hover:border-primary hover:shadow-primary/20 dark:hover:shadow-primary/10 overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <a
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <CardContent className="space-y-3 p-6">
                  <h3 className="flex items-center gap-2 text-xl font-semibold md:text-2xl">
                    {resource.title}
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
