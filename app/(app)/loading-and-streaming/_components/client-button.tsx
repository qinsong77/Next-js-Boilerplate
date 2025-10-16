'use client'

import refresh from '@/app/(app)/loading-and-streaming/action'
import { Loader2, RefreshCw, RotateCw } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

import { Button } from '@/components/ui/button'

export const ClientButton = () => {
  const router = useRouter()
  const [isRevalidating, setIsRevalidating] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleRouterRefresh = () => {
    startTransition(() => {
      router.refresh()
    })
  }

  const handleRevalidate = async () => {
    setIsRevalidating(true)
    try {
      await refresh()
    } finally {
      setIsRevalidating(false)
    }
  }

  return (
    <div className="grid gap-1.5">
      <Button
        variant="outline"
        size="sm"
        className="h-7 w-full gap-1.5 text-xs"
        onClick={handleRouterRefresh}
        disabled={isPending}
      >
        {isPending ? (
          <Loader2 className="h-3 w-3 animate-spin" />
        ) : (
          <RotateCw className="h-3 w-3" />
        )}
        {isPending ? 'Refreshing...' : 'Router Refresh'}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="h-7 w-full gap-1.5 text-xs"
        onClick={handleRevalidate}
        disabled={isRevalidating}
      >
        {isRevalidating ? (
          <Loader2 className="h-3 w-3 animate-spin" />
        ) : (
          <RefreshCw className="h-3 w-3" />
        )}
        {isRevalidating ? 'Revalidating...' : 'Revalidate Path'}
      </Button>
    </div>
  )
}
