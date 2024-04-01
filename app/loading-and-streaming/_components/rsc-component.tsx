import 'server-only'

import logger from '@/lib/logger'
import { sleep } from '@/lib/utils'

interface Category {
  id: number
  name: string
}

interface PhotoUrls {
  [index: number]: string
}

interface Tag {
  id: number
  name: string
}

interface Pet {
  id: number
  name: string
  category: Category
  photoUrls: PhotoUrls
  tags: Tag[]
  status: 'available' | 'pending' | 'sold'
}

async function getPetById(id: number): Promise<Pet> {
  logger.info({ id }, 'getPetById start')
  const res = await fetch(`https://petstore3.swagger.io/api/v3/pet/${id}`, {
    cache: 'no-store',
  })
  await sleep(1500)
  logger.info(res, 'getPetById done')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    const e = new Error('Failed to getPetById')
    logger.error(e, 'getPetById')
    throw e
  }

  return res.json()
}

export const RscComponent = async ({ id }: { id: number }) => {
  const pet = await getPetById(id)
  return (
    <div>
      <h3>Pet {id} info</h3>
      <p>{pet.name}</p>
      <p>{pet.status}</p>
    </div>
  )
}
