'use client'

import React from 'react'

import { Button } from '@/components/ui/button'

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log('logging error:', error)
  }, [error])

  return (
    <div>
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Error</h2>
        <p className="text-sm text-red-900">{error?.message}</p>
        <div>
          <Button onClick={() => reset()}>Try Again</Button>
        </div>
      </div>
    </div>
  )
}
