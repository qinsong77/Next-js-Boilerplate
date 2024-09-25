import { Skeleton } from '@/components/ui/skeleton'

export const TableLoading = () => {
  return (
    <div className="flex w-full flex-col space-y-3">
      {new Array(3).fill(0).map((_, index) => (
        <div
          key={index}
          className="flex space-x-2"
        >
          <Skeleton className="h-22 w-2/12 rounded-xl" />
          <div className="w-10/12 space-y-2">
            <Skeleton className="h-10" />
            <Skeleton className="h-10" />
          </div>
        </div>
      ))}
    </div>
  )
}
