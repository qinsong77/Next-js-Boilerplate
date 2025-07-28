import { Separator } from '@/components/ui/separator'

import { TodoRccDemo } from './_components/todo-rcc-demo'
import { TodoRscDemo } from './_components/todo-rsc-demo'

export default function Page() {
  return (
    <>
      <TodoRccDemo />
      <Separator className="my-4" />
      <TodoRscDemo />
    </>
  )
}
