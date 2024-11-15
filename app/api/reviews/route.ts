// https://github.com/vercel/app-playground-api/blob/main/app/api/reviews/route.ts

import { logger } from '@/lib/shared'

import type { Review } from './type'

export async function GET(request: Request) {
  logger.trace(
    {
      req: request,
    },
    '"Request received"',
  )
  const response = await fetch(
    `https://app-playground-api.vercel.app/api/reviews`,
  )

  if (!response.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!')
  }

  const reviews = (await response.json()) as Review[]
  const jsonResponse = Response.json({ reviews })
  logger.trace(
    {
      res: jsonResponse,
    },
    '"response"',
  )
  return jsonResponse
}
