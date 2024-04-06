import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { logger } from '@/lib/shared'
import { sleep } from '@/lib/utils'

type Tag = {
  id: number
  name: string
}

type Animal = {
  id: number
  category: {
    id: number
    name: string
  }
  name: string
  photoUrls: string[]
  tags: Tag[]
  status: 'available' | 'pending' | 'sold'
}

async function getPets(): Promise<Animal[]> {
  logger.info('get pets by status start')
  const res = await fetch(
    'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available',
    {
      cache: 'no-store',
    },
  )
  await sleep(3000)
  logger.info(res, 'get pets by status done')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    const e = new Error('Failed to fetch data')
    logger.error(e)
    throw e
  }

  return res.json()
}
export async function TableDemo() {
  const data = await getPets()
  return (
    <>
      <Table>
        <TableCaption>A list of pets for available status.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="min-w-50">Tags</TableHead>
            <TableHead className="text-left">Photo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.slice(0, 10).map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.category.name}</TableCell>
              <TableCell>
                {item.tags.map((tag) => (
                  <Badge
                    key={tag.id}
                    className="ml-2"
                  >
                    {tag.name}
                  </Badge>
                ))}
              </TableCell>
              <TableCell className="text-left">
                {item.photoUrls.reduce(
                  (pre, cur) => pre + (pre ? ', ' : '') + cur,
                  '',
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-left">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  )
}
