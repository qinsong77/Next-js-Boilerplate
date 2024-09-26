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
  const res = await fetch('https://api.chucknorris.io/jokes/random', {
    cache: 'no-store',
  })
  await sleep(1500)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    const e = new Error('Failed to getRandomJoke')
    logger.error(e)
    throw e
  }
  const data = res.json()
  logger.info(data, 'getRandomJoke done')

  return data
}
export const PromptActivity = async () => {
  const data = await getRandomJoke()
  return (
    <div>
      <h2>Random Joke: </h2>
      <p className="break-words">url: {data.url}</p>
      <p>updated_at: {data.updated_at}</p>
      <p>{data.value}</p>
      <div>
        <ClientButton />
      </div>
    </div>
  )
}
