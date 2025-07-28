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
  const response = await fetch(`https://pokeapi.co/api/v2/egg-group/${id}`)
  await sleep(1500)

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    const error = new Error('Failed to getEggById')
    logger.error(error, 'getPetById')
    throw error
  }

  return await response.json()
}

export const RscComponent = async ({ id }: { id: number }) => {
  const egg = await getEggById(id)
  logger.info(egg, 'getEggById done')

  return (
    <div className="space-y-2 rounded border bg-white p-4 shadow">
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Egg group: {id} info
      </h3>
      <p className="leading-7 font-medium text-gray-700">{egg.name}</p>
      <p className="text-sm text-gray-500">
        Main series: {egg.is_main_series ? 'Yes' : 'No'}
      </p>
    </div>
  )
}
