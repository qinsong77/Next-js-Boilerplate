'use client'

import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

import { Checkbox } from '@/components/ui/checkbox'

import type { TODO } from '../../api/todo/type'

export default function Todo(todo: TODO) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)

  // Create inline loading UI
  const isMutating = isFetching || isPending

  async function handleChange() {
    setIsFetching(true)
    // Mutate external data source
    await fetch(`/api/todo`, {
      method: 'PUT',
      body: JSON.stringify({ completed: !todo.completed, id: todo.id }),
    })
    setIsFetching(false)

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh()
    })
  }

  return (
    <li style={{ opacity: !isMutating ? 1 : 0.7 }}>
      <div className="flex h-8 items-center space-x-2">
        <Checkbox
          id={todo.id}
          checked={todo.completed}
          onCheckedChange={handleChange}
          disabled={isPending}
        />
        <label
          htmlFor={todo.id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {todo.title}
        </label>
      </div>
    </li>
  )
}
