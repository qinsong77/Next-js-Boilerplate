import { Suspense } from 'react'

import { TableLoading } from '@/app/pagination-demo/_components/table-loading'
import { getTaskList } from '@/app/pagination-demo/actions'
import { Separator } from '@/components/ui/separator'

import { TableDemo } from './_components/table-demo'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const getTaskListPromise = getTaskList({ pageIndex: 1, pageSize: 10 })
  return (
    <div>
      <h1>Table Demo</h1>
      <h2>
        user will see this immediately, if we didn&apos;t await any function
        above
      </h2>
      <Separator className="my-4" />
      <Suspense fallback={<TableLoading />}>
        <TableDemo initGetTaskListPromise={getTaskListPromise} />
      </Suspense>
    </div>
  )
}
