'use client'
import { useRouter } from 'next/navigation'
import { FormEvent, startTransition } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const AddTodo = () => {
  const router = useRouter()
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget as HTMLFormElement)
    const { name } = Object.fromEntries(formData)
    await fetch(`/api/todo`, {
      method: 'POST',
      body: JSON.stringify({ completed: false, title: name }),
    })

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh()
    })
  }
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex space-x-2"
      >
        <Input
          name="name"
          placeholder="todo name"
          className="max-w-80"
        />
        <Button type="submit">submit</Button>
      </form>
    </div>
  )
}
