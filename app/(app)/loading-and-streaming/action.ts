'use server'

import { revalidatePath } from 'next/cache'

import { logger } from '@/lib/shared'
import { sleep } from '@/lib/utils'

/**
 * Server action to revalidate the current path
 * This will trigger a re-fetch of data on the server
 */
export default async function refresh() {
  await sleep(1000)
  logger.info('Revalidating path: /')
  revalidatePath('/')
}

export type EggGroup = {
  count: number
  results: { name: string; url: string }[]
}

/**
 * Fetches egg group data from the Pokemon API
 * This function is used for initial server-side rendering
 * Client-side refetching should use the /api/egg-groups endpoint
 */
export async function getEggGroup(): Promise<EggGroup> {
  logger.info('getEggGroup start (server-side)')
  const response = await fetch('https://pokeapi.co/api/v2/egg-group', {
    next: { revalidate: 60 }, // Cache for 60 seconds
  })
  await sleep(2000)

  if (!response.ok) {
    const error = new Error('Failed to fetch egg groups')
    logger.error(error)
    throw error
  }

  const data = await response.json()
  logger.info(data, 'getEggGroup done')
  return data
}
