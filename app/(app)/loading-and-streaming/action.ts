'use server'

import { revalidatePath } from 'next/cache'

import { logger } from '@/lib/shared'
import { sleep } from '@/lib/utils'

export default async function refresh() {
  await sleep(1000)
  // only can used in server
  revalidatePath('/')
}

export type EggGroup = {
  count: number
  results: { name: string; url: string }[]
}

export async function getEggGroup(): Promise<EggGroup> {
  logger.info('getEggGroup start')
  const response = await fetch('https://pokeapi.co/api/v2/egg-group')
  await sleep(3000)
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    const error = new Error('Failed to fetch data')
    logger.error(error)
    throw error
  }
  const data = await response.json()
  logger.info(data, 'getEggGroup done')
  return data
}
