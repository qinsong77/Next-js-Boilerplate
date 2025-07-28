'use client'

import { startTransition, useState } from 'react'

import { useCustomerInterval } from '@/hooks/client'

const orgText = 'React & Next.js 15'
export const TextSplitter = () => {
  const [count, setCount] = useState(0)
  const pausedTimeReference = useCustomerInterval(() => {
    startTransition(() => {
      setCount((previousState) => {
        if (previousState === orgText.length) {
          return 0
        }
        const value = previousState + 1
        if (value === orgText.length - 1) {
          pausedTimeReference.current = 1000
        }
        return value
      })
    })
  }, 100)
  return (
    <h1 className="min-h-28 text-xl leading-relaxed font-bold md:text-2xl xl:text-4xl">
      This is a Next.js Boilerplate
      <br />
      Base on <span>{orgText.slice(0, count)}</span>
      {count > 0 && (
        <span
          className="ml-1"
          aria-hidden="true"
        >
          |
        </span>
      )}
    </h1>
  )
}
