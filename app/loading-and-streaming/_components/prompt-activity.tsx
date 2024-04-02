import { logger } from '@/lib/server'
import { sleep } from '@/lib/utils'

interface Activity {
  activity: string
  type: string
  participants: number
  price: number
  link: string
  key: string
  accessibility: number
}
async function getActivity(): Promise<Activity> {
  logger.info('getActivity start')
  const res = await fetch('https://www.boredapi.com/api/activity', {
    cache: 'no-store',
  })
  await sleep(1500)
  logger.info(res, 'getActivity done')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    const e = new Error('Failed to getActivity')
    logger.error(e)
    throw e
  }

  return res.json()
}
export const PromptActivity = async () => {
  const data = await getActivity()
  return (
    <div>
      <h2>Activity: </h2>
      <h4>desc: {data.activity}</h4>
      <p>price: {data.price}</p>
      <p>participants {data.participants}</p>
      <p>accessibility {data.accessibility}</p>
    </div>
  )
}
