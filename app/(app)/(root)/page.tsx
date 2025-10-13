import Image from 'next/image'
import Link from 'next/link'

import { TextSplitter } from '@/components/text-splitter'
import { Separator } from '@/components/ui/separator'

import { logger } from '@/lib/shared'

export default function Home() {
  logger.trace('entering home')
  return (
    <div className="space-y-4 md:space-y-8 lg:space-y-12">
      <div className="flex flex-row flex-wrap justify-center">
        <div className="relative min-h-80 w-full shrink self-center sm:w-9/12 md:w-1/2 lg:px-18">
          <Image
            src="/hero.svg"
            alt="hero Logo"
            className="h-auto w-full dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            priority
            fill={true}
          />
        </div>
        <div className="w-full shrink self-center text-center sm:w-9/12 md:w-1/2 md:text-left">
          <TextSplitter />
          <div className="mt-6">
            <h3 className="text-xl font-bold">Check the demos: </h3>
            <div className="flex flex-row flex-wrap">
              <Link
                className="bg-primary text-primary-foreground ring-offset-background hover:bg-primary/90 focus-visible:ring-ring mt-4 mr-2 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                href="/loading-and-streaming"
              >
                Loading and streaming
              </Link>
              <Link
                className="bg-primary text-primary-foreground ring-offset-background hover:bg-primary/90 focus-visible:ring-ring mt-4 mr-2 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                href="/dashboard"
              >
                dashboard
              </Link>
              <Link
                className="bg-primary text-primary-foreground ring-offset-background hover:bg-primary/90 focus-visible:ring-ring mt-4 mr-2 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                href="/todo"
              >
                Todo demo
              </Link>
              <Link
                className="bg-primary text-primary-foreground ring-offset-background hover:bg-primary/90 focus-visible:ring-ring mt-4 mr-2 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                href="/demos"
              >
                demos
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-1 justify-between gap-10 md:grid-cols-2">
        <p className="flex max-w-96 justify-center border-b border-gray-300 bg-gray-200 bg-gradient-to-b from-zinc-200 pt-8 pb-6 backdrop-blur-2xl md:static md:w-auto md:rounded-xl md:p-4 lg:border dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit md:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="flex">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            &
          </a>
          <a
            className="pointer-events-none flex place-items-center p-4 lg:pointer-events-auto"
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="relative ml-2 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <Separator />
      <div className="grid text-left md:grid-cols-2 lg:grid-cols-4">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://github.com/qinsong77/Next-js-Boilerplate"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm text-balance opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
      <Separator />
    </div>
  )
}
