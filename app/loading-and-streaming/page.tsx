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
  logger.info('getUserInfo starting ')
  const response = await fetch('https://randomuser.me/api/')
  await sleep(1000)
  logger.info(response, 'getUserInfo done')

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    const error = new Error('Failed to getUserInfo')
    logger.error(error)
    throw error
  }

  return await response.json()
}
const Page = async () => {
  const data = (await getUserInfo())?.results?.[0] ?? {}

  return (
    <div className="flex flex-col space-y-8">
      <div className="h-30 rounded border p-8">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Show{' '}
          <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming">
            loading UI and streaming page
          </ExternalLink>
        </h2>
        <p>email: {data.email}</p>
        <p>phone: {data.phone}</p>
        <p>gender: {data.gender}</p>
      </div>
      <section className="flex flex-col space-y-2 md:flex-row md:space-x-2">
        <Suspense fallback={<SideBarLoading />}>
          <div className="flex flex-col space-y-3 md:w-4/12">
            <PromptActivity />
          </div>
        </Suspense>
        <div className="flex flex-col space-y-3 md:w-8/12">
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

export default Page
