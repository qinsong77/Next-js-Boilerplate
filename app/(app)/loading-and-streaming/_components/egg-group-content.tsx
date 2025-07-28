'use client'

import { Button } from '@/components/ui/button'

import { useData } from '@/hooks/client'

import { EggGroup, getEggGroup } from '../action'
import { CenterContentLoading } from '../loading'

export const EggGroupContent = ({ initData }: { initData: EggGroup }) => {
  console.log(initData)
  const { data, loading, update } = useData(initData, getEggGroup)
  if (loading) return <CenterContentLoading />
  return (
    <>
      <div className="divide-y divide-gray-200 rounded border bg-white">
        {data.results?.slice(0, 5).map((item, index) => (
          <div
            key={item.url}
            className="flex items-center gap-4 px-4 py-2 text-sm"
          >
            <div className="w-12 text-center font-medium">{index + 1}</div>
            <div className="flex-1">{item.name}</div>
            <div className="flex-3 truncate text-gray-500">{item.url}</div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-end gap-2">
        <span className="font-semibold">Total:</span>
        <span className="text-left">{data.count}</span>
      </div>
      <Button
        className="mt-2"
        onClick={() => update()}
      >
        update
      </Button>
    </>
  )
}
