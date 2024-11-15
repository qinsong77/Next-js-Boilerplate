'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/hooks/use-toast'

export const ClientComponent = ({
  children,
  rsc,
}: {
  children?: React.ReactNode
  rsc?: React.ReactNode
}) => {
  const [value, setValue] = useState(0)
  const { toast } = useToast()
  useEffect(() => {
    if (value === 2) {
      toast({
        title: 'clicked, condition RSC render',
        description: 'val is: ' + value,
      })
    }
  }, [toast, value])

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <p>Counter: {value}</p>
        <Button
          className="mr-2"
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
            toast({
              title: 'Scheduled: Catch up ',
              description: 'Friday, February 10, 2023 at 5:57 PM',
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            })
          }}
        >
          Add to calendar
        </Button>
      </div>
      <h2>Client component nested rsc</h2>
      {children}
      <h2>Client component nested rsc, condition render</h2>
      {value > 2 && rsc}
    </div>
  )
}
