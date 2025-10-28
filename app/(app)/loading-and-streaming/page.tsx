import { Sparkles, User } from 'lucide-react'
import { connection } from 'next/server'
import { Suspense } from 'react'

import { ExternalLink } from '@/components/site-layout/external-link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

import { logger } from '@/lib/shared'
import { sleep } from '@/lib/utils'

import { EggGroup } from './_components/egg-groups'
import { PromptActivity } from './_components/prompt-activity'

type UserResponse = {
  results: {
    gender: string
    phone: string
    name: {
      title: string
      first: string
      last: string
    }
    email: string
    login: {
      uuid: string
    }
    picture: {
      large: string
      medium: string
    }
  }[]
}

async function getUserInfo(): Promise<UserResponse> {
  await connection()
  logger.info('Critical data: getUserInfo starting')
  const response = await fetch('https://randomuser.me/api/', {
    next: { revalidate: 0 }, // Always fetch fresh data
  })
  await sleep(1000)
  logger.info(response, 'Critical data: getUserInfo done')

  if (!response.ok) {
    const error = new Error('Failed to getUserInfo')
    logger.error(error)
    throw error
  }

  return await response.json()
}

export default async function LoadingStreamingPage() {
  const data = (await getUserInfo())?.results?.[0] ?? {}
  const fullName = `${data.name?.first || ''} ${data.name?.last || ''}`.trim()

  return (
    <div className="flex flex-col gap-5">
      {/* Hero Section */}
      <Card className="overflow-hidden py-0 shadow-lg">
        <CardHeader className="space-y-1 bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50 px-5 py-4 dark:from-violet-950/50 dark:via-purple-950/50 dark:to-fuchsia-950/50">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <CardTitle className="text-xl">
              Loading UI & Streaming Demo
            </CardTitle>
          </div>
          <p className="text-muted-foreground text-xs">
            Demonstrates{' '}
            <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming">
              Next.js loading states, streaming, and Suspense
            </ExternalLink>{' '}
            with React Server Components
          </p>
        </CardHeader>
        <CardContent className="px-5 py-4">
          <div className="flex items-start gap-4">
            <Avatar className="border-primary/20 h-14 w-14 border-2">
              <AvatarImage
                src={data.picture?.large}
                alt={fullName}
              />
              <AvatarFallback className="bg-primary/10">
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <div>
                <h3 className="text-foreground text-base font-semibold">
                  Critical Blocking Data
                </h3>
                <p className="text-muted-foreground text-xs">
                  Blocks entire page, shows layout loading
                </p>
              </div>
              <div className="grid gap-1.5 text-sm sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground text-xs font-medium">
                    Name:
                  </span>
                  <span className="text-foreground truncate font-semibold capitalize">
                    {fullName || 'N/A'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground text-xs font-medium">
                    Gender:
                  </span>
                  <span className="text-foreground font-semibold capitalize">
                    {data.gender || 'N/A'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground text-xs font-medium">
                    Email:
                  </span>
                  <span className="text-foreground truncate">
                    {data.email || 'N/A'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground text-xs font-medium">
                    Phone:
                  </span>
                  <span className="text-foreground">{data.phone || 'N/A'}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Streaming Section */}
      <section className="grid gap-4 lg:grid-cols-3">
        <Suspense fallback={<SideBarLoadingSkeleton />}>
          <div className="lg:col-span-1">
            <PromptActivity />
          </div>
        </Suspense>
        <div className="lg:col-span-2">
          <EggGroup />
        </div>
      </section>
    </div>
  )
}

const SideBarLoadingSkeleton = () => {
  return (
    <Card className="flex h-full flex-col overflow-hidden py-0 shadow-md">
      <CardHeader className="space-y-1 border-b px-4 py-3">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-full" />
      </CardHeader>
      <CardContent className="flex-1 space-y-3 px-4 py-3">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-3 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <div className="bg-border h-px" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-20" />
          <div className="grid gap-1.5">
            <Skeleton className="h-7 w-full" />
            <Skeleton className="h-7 w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
