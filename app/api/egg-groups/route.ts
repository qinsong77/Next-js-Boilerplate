import { NextResponse } from 'next/server'

import { logger } from '@/lib/shared'
import { sleep } from '@/lib/utils'

export type EggGroup = {
  count: number
  results: { name: string; url: string }[]
}

export async function GET() {
  try {
    logger.info('GET /api/egg-groups start')
    const response = await fetch('https://pokeapi.co/api/v2/egg-group', {
      next: { revalidate: 60 }, // Cache for 60 seconds
    })

    await sleep(1500) // Simulate delay for demo purposes

    if (!response.ok) {
      const error = new Error('Failed to fetch egg groups')
      logger.error(error)
      return NextResponse.json(
        { error: 'Failed to fetch egg groups' },
        { status: 500 },
      )
    }

    const data: EggGroup = await response.json()
    logger.info(data, 'GET /api/egg-groups done')

    return NextResponse.json(data)
  } catch (error) {
    logger.error(error, 'GET /api/egg-groups error')
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
