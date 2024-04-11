'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="mb-4">
      <span className="mr-4">{count}</span>
      <Button onClick={() => setCount((x) => x + 1)}>{count} + 1</Button>
    </div>
  )
}
