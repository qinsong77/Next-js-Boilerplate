import { Suspense } from 'react'

import { getEggGroup } from '../action'
import { CenterContentLoading } from '../loading'
import { EggGroupContent } from './egg-group-content'

export async function EggGroup() {
  return (
    <div className="rounded border bg-white p-3 shadow">
      <h2 className="mb-2 text-lg font-semibold">
        A list of egg group for available status.
      </h2>
      <div className="mb-2 flex items-center gap-4 border-b pb-2 font-bold text-gray-700">
        <div className="w-12 text-center">Index</div>
        <div className="flex-1">Name</div>
        <div className="flex-3">URL</div>
      </div>
      <Suspense fallback={<CenterContentLoading />}>
        <ContendWrap />
      </Suspense>
    </div>
  )
}

const ContendWrap = async () => {
  const data = await getEggGroup()
  return <EggGroupContent initData={data} />
}
