import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="flex flex-col space-y-8">
      <TopLoading />
      <div className="flex space-x-2">
        <SideBarLoading />
        <CenterContentLoading />
      </div>
    </div>
  )
}

export const TopLoading = () => {
  return (
    <div className="flex space-x-2">
      <Skeleton className="h-34 w-2/12" />
      <div className="w-10/12 space-y-2">
        <Skeleton className="h-16" />
        <Skeleton className="h-16 " />
      </div>
    </div>
  )
}

export const SideBarLoading = () => {
  return (
    <div className="flex w-4/12 flex-col space-y-3">
      <Skeleton className="h-16 w-auto" />
      <Skeleton className="h-16 w-4/6" />
      <Skeleton className="h-16 w-5/6" />
      <Skeleton className="h-16 w-3/6" />
    </div>
  )
}

export const CenterContentLoading = () => {
  return (
    <div className="flex w-8/12 flex-col space-y-3">
      {new Array(3).fill(0).map((_, index) => (
        <div
          key={index}
          className="flex space-x-2"
        >
          <Skeleton className="h-22 w-2/12 rounded-xl" />
          <div className="w-10/12  space-y-2">
            <Skeleton className="h-10" />
            <Skeleton className="h-10 " />
          </div>
        </div>
      ))}
    </div>
  )
}
