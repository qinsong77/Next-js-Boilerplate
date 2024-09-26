import { revalidatePath } from 'next/cache'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { logger } from '@/lib/shared'

import { addTodo } from './data'

export const AddTodoRsc = () => {
  async function createTodo(formData: FormData) {
    'use server'
    logger.trace({ formData }, 'createTodo action with formData:')
    const title = formData.get('name') as string
    logger.info({ title }, 'createTodo title')
    const todo = addTodo({ title, completed: false })
    console.log(todo)
    revalidatePath('/todo')
  }
  return (
    <div>
      <form
        action={createTodo}
        className="flex"
      >
        <Input
          name="name"
          placeholder="todo name"
          className="max-w-80"
        />
        <Button
          type="submit"
          className="ml-2"
        >
          submit
        </Button>
      </form>
    </div>
  )
}
