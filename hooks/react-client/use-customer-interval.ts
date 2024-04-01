'use client'

import { useCallback, useEffect, useRef } from 'react'

export const useCustomerInterval = (cb: () => void, interval: number) => {
  const cbRef = useRef(cb)
  const pausedTimeRef = useRef(0)
  cbRef.current = cb
  const customizeSetInterval = useCallback((): number => {
    let startTime = Date.now()
    const loop = () => {
      const endTime = Date.now()
      if (endTime - startTime >= interval) {
        startTime = Date.now() + interval

        cbRef?.current() // pausedTimeRef might update if set in the callback
        if (pausedTimeRef.current > 0) {
          // debugger
          startTime = startTime + pausedTimeRef.current
        }
        pausedTimeRef.current = 0
      }
      return window.requestAnimationFrame(loop)
    }
    return loop()
  }, [interval])

  useEffect(() => {
    const interval = customizeSetInterval()
    return () => cancelAnimationFrame(interval)
  }, [customizeSetInterval])

  return pausedTimeRef
}
