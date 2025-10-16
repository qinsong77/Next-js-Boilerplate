import { Database } from 'lucide-react'
import { Suspense } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

import { getEggGroup } from '../action'
import { EggGroupContent } from './egg-group-content'

export async function EggGroup() {
  return (
    <Card className="flex h-full flex-col overflow-hidden py-0 shadow-md">
      <CardHeader className="from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/15 space-y-1 border-b bg-gradient-to-r px-4 py-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Database className="text-primary h-4 w-4" />
          Pokémon Egg Groups
        </CardTitle>
        <p className="text-muted-foreground text-xs">React Query with SSR</p>
      </CardHeader>
      <CardContent className="flex-1 px-4 py-3">
        <Suspense fallback={<EggGroupSkeleton />}>
          <ContentWrapper />
        </Suspense>
      </CardContent>
    </Card>
  )
}

const ContentWrapper = async () => {
  const data = await getEggGroup()
  return <EggGroupContent initData={data} />
}

const EggGroupSkeleton = () => {
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
