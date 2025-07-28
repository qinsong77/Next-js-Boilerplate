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
      <div>
        {data.results.map((item, index) => (
          <div
            key={item.url}
            className="flex justify-around gap-2"
          >
            <div className="font-medium">{index + 1}</div>
            <div>{item.name}</div>
            <div>{item.url}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-around gap-2">
        <div>Total</div>
        <div className="text-left">{data.count}</div>
      </div>
      <Button onClick={() => update()}>update</Button>
    </>
  )
}
