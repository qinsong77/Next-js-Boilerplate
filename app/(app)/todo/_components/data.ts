import 'server-only'

import type { TODO } from '../../../api/todo/type'

export const todos: TODO[] = [
  {
    id: '1',
    title: '1',
    completed: false,
  },
  {
    id: '2',
    title: '2',
    completed: true,
  },
]

export const addTodo = (data: Omit<TODO, 'id'>) => {
  if (todos.length > 10) {
    throw new Error('exceed limit')
  }
  const id = Date.now().toString()
  const todo = {
    id,
    ...data,
  }
  todos.push(todo)
  return todo
}
