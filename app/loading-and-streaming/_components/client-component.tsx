'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

export const ClientComponent = ({
  children,
  rsc,
}: {
  children?: React.ReactNode
  rsc?: React.ReactNode
}) => {
  const [val, setVal] = useState(0)
  const { toast } = useToast()
  useEffect(() => {
    if (val === 2) {
      toast({
        title: 'clicked, condition RSC render',
        description: 'val is: ' + val,
      })
    }
  }, [toast, val])
  return (
    <div>
      <div className="flex items-center space-x-4">
        <p>Counter: {val}</p>
        <Button
          className="mr-2"
          onClick={() => {
            setVal((prevState) => prevState + 1)
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
      {val > 2 && rsc}
    </div>
  )
}
