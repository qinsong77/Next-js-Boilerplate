import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="flex flex-col gap-5">
      <HeroLoading />
      <section className="grid gap-4 lg:grid-cols-3">
        <SideBarLoading />
        <CenterContentLoading />
      </section>
    </div>
  )
}

const HeroLoading = () => {
  return (
    <Card className="overflow-hidden py-0 shadow-lg">
      <CardHeader className="space-y-1 bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50 px-5 py-4 dark:from-violet-950/50 dark:via-purple-950/50 dark:to-fuchsia-950/50">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-3 w-full" />
      </CardHeader>
      <CardContent className="px-5 py-4">
        <div className="flex items-start gap-4">
          <Skeleton className="h-14 w-14 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-3 w-full" />
            <div className="grid gap-1.5 pt-1 sm:grid-cols-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const SideBarLoading = () => {
  return (
    <Card className="flex h-full flex-col overflow-hidden py-0 shadow-md lg:col-span-1">
      <CardHeader className="space-y-1 border-b bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-3 dark:from-amber-950/50 dark:to-orange-950/50">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-full" />
      </CardHeader>
      <CardContent className="flex-1 space-y-3 px-4 py-3">
        <Skeleton className="h-16 w-full" />
        <div className="space-y-1">
          <Skeleton className="h-3 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
        <div className="bg-border h-px" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-20" />
          <div className="grid gap-1.5">
            <Skeleton className="h-7 w-full" />
            <Skeleton className="h-7 w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const CenterContentLoading = () => {
  return (
    <Card className="flex h-full flex-col overflow-hidden py-0 shadow-md lg:col-span-2">
      <CardHeader className="from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/15 space-y-1 border-b bg-gradient-to-r px-4 py-3">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-full" />
      </CardHeader>
      <CardContent className="flex-1 space-y-3 px-4 py-3">
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
      </CardContent>
    </Card>
  )
}
