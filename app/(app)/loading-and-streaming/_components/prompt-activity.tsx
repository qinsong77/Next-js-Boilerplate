import { ExternalLink as ExternalLinkIcon, Laugh } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { logger } from '@/lib/shared'
import { sleep } from '@/lib/utils'

import { ClientButton } from './client-button'

interface Joke {
  categories: []
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

async function getRandomJoke(): Promise<Joke> {
  logger.info('getRandomJoke start')
  const response = await fetch('https://api.chucknorris.io/jokes/random', {
    next: { revalidate: 0 }, // Always fetch fresh data
  })
  await sleep(1500)

  if (!response.ok) {
    const error = new Error('Failed to getRandomJoke')
    logger.error(error)
    throw error
  }
  const data = await response.json()
  logger.info(data, 'getRandomJoke done')

  return data
}

export const PromptActivity = async () => {
  const data = await getRandomJoke()

  return (
    <Card className="flex h-full flex-col overflow-hidden py-0 shadow-md">
      <CardHeader className="space-y-1 border-b bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-3 dark:from-amber-950/50 dark:to-orange-950/50">
        <CardTitle className="flex items-center gap-2 text-base">
          <Laugh className="h-4 w-4 text-amber-600 dark:text-amber-500" />
          Random Joke
        </CardTitle>
        <p className="text-muted-foreground text-xs">Streaming with Suspense</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col space-y-3 px-4 py-3">
        <blockquote className="text-foreground flex-1 border-l-4 border-amber-500 pl-3 text-sm italic dark:border-amber-600">
          {data.value}
        </blockquote>

        <div className="text-muted-foreground space-y-1 text-xs">
          <div className="flex items-center gap-1.5">
            <ExternalLinkIcon className="h-3 w-3" />
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary underline"
            >
              View on API
            </a>
          </div>
          <div className="text-muted-foreground/70">
            {new Date(data.updated_at).toLocaleDateString()}
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <h3 className="text-foreground text-xs font-semibold">
            Cache & Data Management
          </h3>
          <ClientButton />
        </div>
      </CardContent>
    </Card>
  )
}
