import { Suspense } from 'react'

import { ExternalLink } from '@/components/site-layout/external-link'
import { Separator } from '@/components/ui/separator'

import { logger } from '@/lib/shared'
import { sleep } from '@/lib/utils'

import { ClientComponent } from './_components/client-component'
import { EggGroup } from './_components/egg-groups'
import { PromptActivity } from './_components/prompt-activity'
import { RscComponent } from './_components/rsc-component'
import { SideBarLoading } from './loading'

type Response = {
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
async function getUserInfo(): Promise<Response> {
  logger.info('Critical data: getUserInfo starting ')
  const response = await fetch('https://randomuser.me/api/')
  await sleep(1000)
  logger.info(response, 'Critical data: getUserInfo done')

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    const error = new Error('Failed to getUserInfo')
    logger.error(error)
    throw error
  }

  return await response.json()
}
export default async function HomePage() {
  const data = (await getUserInfo())?.results?.[0] ?? {}

  return (
    <div className="flex flex-col space-y-8">
      <div className="rounded border p-8">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Show{' '}
          <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming">
            loading UI and streaming page
          </ExternalLink>
        </h2>
        <Separator className="my-3" />
        <h3 className="text-xl -tracking-normal">
          This is critical data, which will block the whole page, fallback to
          layout loading.
        </h3>
        <p className="text-gray-700">email: {data.email}</p>
        <p className="text-gray-700">phone: {data.phone}</p>
        <p className="text-gray-700">gender: {data.gender}</p>
      </div>
      <section className="flex flex-col gap-2 md:flex-row md:gap-2">
        <Suspense fallback={<SideBarLoading />}>
          <div className="flex flex-col gap-3 md:basis-1/3">
            <PromptActivity />
          </div>
        </Suspense>
        <div className="flex flex-col gap-3 md:basis-2/3">
          <EggGroup />
        </div>
      </section>
      <Separator />
      <ClientComponent rsc={<RscComponent id={2} />}>
        <RscComponent id={3} />
      </ClientComponent>
    </div>
  )
}
