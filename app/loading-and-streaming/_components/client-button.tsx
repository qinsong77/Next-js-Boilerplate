'use client'

import refresh from '@/app/loading-and-streaming/action'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export const ClientButton = () => {
  const router = useRouter()
  return (
    <div className="gap-1">
      {/*// 页面会刷新*/}
      <Button onClick={() => router.refresh()}>router.refresh</Button>
      <Separator />
      <Button onClick={() => refresh()}>revalidatePath</Button>
    </div>
  )
}
