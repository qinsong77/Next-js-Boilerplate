import { logger } from '@/lib/shared'

import { AddTodoRsc } from './add-todo-rsc'
import { todos } from './data'

export async function TodoRscDemo() {
  logger.trace('TodoRscDemo render')
  return (
    <div>
      <h2 className="my-2 text-2xl">Todo demo with RSC</h2>
      <p className="mb-2">
        This is all server components, add new todo will call AddTodo action and
        use
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <code>revalidatePath('/todo')</code>to refresh rsc
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <p className="my-3">AddTodoRsc is a rsc</p>
      <AddTodoRsc />
    </div>
  )
}
