'use client'

import { useQuery } from '@tanstack/react-query'
import { RefreshCw } from 'lucide-react'

import { EggGroup } from '@/app/api/egg-groups/route'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

interface EggGroupContentProps {
  initData: EggGroup
}

export const EggGroupContent = ({ initData }: EggGroupContentProps) => {
  const {
    data = initData,
    isLoading,
    isFetching,
    refetch,
  } = useQuery<EggGroup>({
    queryKey: ['egg-groups'],
    queryFn: async () => {
      const response = await fetch('/api/egg-groups')
      if (!response.ok) {
        throw new Error('Failed to fetch egg groups')
      }
      return response.json()
    },
    initialData: initData,
    staleTime: 60 * 1000, // Consider data fresh for 60 seconds
  })

  if (isLoading) {
    return <EggGroupContentSkeleton />
  }

  return (
    <div className="space-y-3">
      <div className="divide-border divide-y overflow-hidden rounded-lg border">
        {data.results?.slice(0, 5).map((item, index) => (
          <div
            key={item.url}
            className="hover:bg-muted/50 flex items-center gap-3 px-3 py-2 text-sm transition-colors"
          >
            <div className="bg-primary/10 text-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
              {index + 1}
            </div>
            <div className="text-foreground flex-1 truncate font-medium capitalize">
              {item.name}
            </div>
            <div className="text-muted-foreground hidden truncate text-xs md:block md:flex-[2]">
              {item.url}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-muted-foreground font-medium">Total:</span>
          <span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 font-bold">
            {data.count}
          </span>
        </div>
        <Button
          onClick={() => refetch()}
          disabled={isFetching}
          variant="outline"
          size="sm"
          className="h-7 gap-1.5 px-2.5 text-xs"
        >
          <RefreshCw
            className={`h-3.5 w-3.5 ${isFetching ? 'animate-spin' : ''}`}
          />
          {isFetching ? 'Loading...' : 'Refresh'}
        </Button>
      </div>
    </div>
  )
}

const EggGroupContentSkeleton = () => {
  return (
    <div className="space-y-3">
      <div className="divide-border divide-y overflow-hidden rounded-lg border">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-3 py-2"
          >
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 flex-1" />
            <Skeleton className="hidden h-3 flex-[2] md:block" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-7 w-20" />
      </div>
    </div>
  )
}
