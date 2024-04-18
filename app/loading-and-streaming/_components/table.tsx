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

type EggGroup = {
  count: number
  results: { name: string; url: string }[]
}

async function getEggGroup(): Promise<EggGroup> {
  logger.info('getEggGroup start')
  const res = await fetch('https://pokeapi.co/api/v2/egg-group', {
    cache: 'no-store',
  })
  await sleep(3000)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    const e = new Error('Failed to fetch data')
    logger.error(e)
    throw e
  }

  return res.json()
}
export async function TableDemo() {
  const data = await getEggGroup()
  logger.info(data, 'getEggGroup done')

  return (
    <>
      <Table>
        <TableCaption>A list of egg group for available status.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Index</TableHead>
            <TableHead className="w-auto">Name</TableHead>
            <TableHead className="w-auto">url</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.results.map((item, index) => (
            <TableRow key={item.url}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-left">{data.count}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  )
}
