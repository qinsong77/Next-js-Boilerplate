import { Suspense } from 'react'

import { TableLoading } from '@/app/pagination-demo/_components/table-loading'
import { getTaskList } from '@/app/pagination-demo/actions'
import { Separator } from '@/components/ui/separator'

import { HeaderFixedScrollTable } from './_components/header-fixed-scroll-table'
import { TableDemo } from './_components/table-demo'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const getTaskListPromise = getTaskList({ pageIndex: 1, pageSize: 10 })
  return (
    <div>
      <h1>Table Demo</h1>
      <h2>
        user will see this text immediately, if we didn&apos;t await any
        function on Page component.
      </h2>
      <Separator className="my-4" />
      <Suspense fallback={<TableLoading />}>
        <TableDemo initGetTaskListPromise={getTaskListPromise} />
      </Suspense>

      <Separator className="my-4" />

      <div>
        <h3 className="my-4 scroll-m-20 text-2xl font-semibold tracking-tight">
          Header fixed scroll table
        </h3>
        <HeaderFixedScrollTable />
      </div>
    </div>
  )
}
