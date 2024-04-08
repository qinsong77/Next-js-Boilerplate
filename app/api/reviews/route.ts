// https://github.com/vercel/app-playground-api/blob/main/app/api/reviews/route.ts

import { logger } from '@/lib/shared'

import type { Review } from './review'

export async function GET(request: Request) {
  logger.trace(
    {
      req: request,
    },
    '"Request received"',
  )
  const res = await fetch(`https://app-playground-api.vercel.app/api/reviews`)

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!')
  }

  const reviews = (await res.json()) as Review[]
  const response = Response.json({ reviews })
  logger.trace(
    {
      res: response,
    },
    '"response"',
  )
  return response
}
