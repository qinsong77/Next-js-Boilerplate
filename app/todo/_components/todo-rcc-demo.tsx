// https://stackoverflow.com/questions/75124513/update-server-component-after-data-has-been-changed-by-client-component-in-next

import { logger } from '@/lib/shared'

import type { TODO } from '../../api/todo/type'
import { AddTodo } from './add-todo'
import Todo from './todo'

async function getTodos(): Promise<TODO[]> {
  // todo fix deployed not working
  const response = await fetch('http://localhost:3000/api/todo', {
    cache: 'no-store',
  })
  logger.trace(response, 'getTodos done:')
  return await response.json()
}

export async function TodoRccDemo() {
  const todos = await getTodos()
  return (
    <div>
      <h2 className="my-2 text-2xl">Todo demo with RCC</h2>
      <p className="mb-2">
        todo list is a server component with rcc: TODO and AddTodo, submit will
        call api and use
        <code>router.refresh()</code>to refresh rsc.
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
          />
        ))}
      </ul>
      <AddTodo />
    </div>
  )
}
