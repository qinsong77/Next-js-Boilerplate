import 'server-only'

import { logger } from '@/lib/shared'
import { sleep } from '@/lib/utils'

type RES = {
  id: number
  name: string
  is_main_series: boolean
}

async function getEggById(id: number): Promise<RES> {
  logger.info({ id }, 'getEggById start')
  const res = await fetch(`https://pokeapi.co/api/v2/egg-group/${id}`)
  await sleep(1500)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    const e = new Error('Failed to getEggById')
    logger.error(e, 'getPetById')
    throw e
  }

  return await res.json()
}

export const RscComponent = async ({ id }: { id: number }) => {
  const egg = await getEggById(id)
  logger.info(egg, 'getEggById done')

  return (
    <div className="space-x-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Egg group: {id} info
      </h3>
      <p className="leading-7">{egg.name}</p>
    </div>
  )
}
