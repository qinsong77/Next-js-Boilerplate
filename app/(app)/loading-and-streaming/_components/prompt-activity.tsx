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
  const response = await fetch('https://api.chucknorris.io/jokes/random')
  await sleep(1500)

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
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
    <div className="space-y-3 rounded border bg-white p-4 shadow">
      <h2 className="mb-2 text-lg font-semibold">Random Joke</h2>
      <div className="text-sm break-words text-gray-500">
        URL:{' '}
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {data.url}
        </a>
      </div>
      <div className="text-xs text-gray-400">Updated: {data.updated_at}</div>
      <p className="mt-2 text-base">{data.value}</p>
      <div className="mt-4">
        <ClientButton />
      </div>
    </div>
  )
}
