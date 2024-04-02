'use client'
import { startTransition, useState } from 'react'

import { useCustomerInterval } from '@/hooks/client'

const orgText = 'React & Next.js 14'
export const TextSplitter = () => {
  const [count, setCount] = useState(0)
  const pausedTimeRef = useCustomerInterval(() => {
    startTransition(() => {
      setCount((prevState) => {
        if (prevState === orgText.length) {
          return 0
        }
        const val = prevState + 1
        if (val === orgText.length - 1) {
          pausedTimeRef.current = 1000
        }
        return val
      })
    })
  }, 100)
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold leading-normal md:text-4xl">
        This is a Next.js Boilerplate
        <br />
        Base on <span>{orgText.slice(0, count)}</span>
        {count > 0 && (
          <span
            style={{ verticalAlign: '0.25rem' }}
            className="ml-1 text-2xl"
            aria-hidden="true"
          >
            |
          </span>
        )}
      </h1>
    </div>
  )
}
