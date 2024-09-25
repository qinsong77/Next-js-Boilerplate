import { useCallback, useState } from 'react'

export const useData = <T, F>(initData: T, func: F) => {
  const [data, setData] = useState(initData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | unknown>(null)
  // const [promise, setPromise] = useState(null)
  // if (promise) {
  //   use(promise)
  // }
  const update = useCallback(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    async (...args) => {
      try {
        setLoading(true)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const data = await func(args)
        setData(data.results)
      } catch (error: unknown) {
        setError(error)
      } finally {
        setLoading(false)
      }
    },
    [func],
  )
  return {
    data,
    loading,
    error,
    update,
  }
}
