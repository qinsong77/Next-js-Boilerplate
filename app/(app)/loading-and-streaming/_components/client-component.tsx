'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export const ClientComponent = ({
  children,
  rsc,
}: {
  children?: React.ReactNode
  rsc?: React.ReactNode
}) => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (value === 2) {
      toast.success('clicked, condition RSC render', {
        description: 'val is: ' + value,
      })
    }
  }, [value])

  return (
    <div className="space-y-6 rounded border bg-white p-4 shadow">
      <div className="flex items-center gap-4">
        <p className="font-medium">Counter: {value}</p>
        <Button
          onClick={() => {
            setValue((previousState) => previousState + 1)
          }}
        >
          Add
        </Button>
        <Separator orientation="vertical" />
        <Button
          variant="outline"
          onClick={() => {
            toast('My action toast', {
              action: (
                <Button onClick={() => console.log('Action!')}>Action</Button>
              ),
            })
          }}
        >
          Add to calendar
        </Button>
      </div>
      <h2 className="mt-4 text-base font-semibold">
        Client component nested rsc
      </h2>
      <div className="pl-2">{children}</div>
      <h2 className="mt-4 text-base font-semibold">
        Client component nested rsc, condition render:
      </h2>
      <div className="pl-2">{value >= 2 && rsc}</div>
    </div>
  )
}
