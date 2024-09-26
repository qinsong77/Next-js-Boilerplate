import { Suspense } from 'react'

import { getEggGroup } from '../action'
import { CenterContentLoading } from '../loading'
import { EggGroupContent } from './egg-group-content'

export async function EggGroup() {
  return (
    <div>
      <h2 className="text-lg font-semibold">
        A list of egg group for available status.
      </h2>
      <div className="flex justify-around gap-2">
        <div className="w-[100px]">Index</div>
        <div className="w-auto">Name</div>
        <div className="w-auto">url</div>
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
