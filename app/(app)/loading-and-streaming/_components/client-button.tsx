'use client'

import refresh from '@/app/(app)/loading-and-streaming/action'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export const ClientButton = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-3">
      {/* 页面会刷新 */}
      <Button
        className="w-full"
        onClick={() => router.refresh()}
      >
        router.refresh
      </Button>
      <Separator />
      <Button
        className="w-full"
        onClick={() => refresh()}
      >
        revalidatePath
      </Button>
    </div>
  )
}
