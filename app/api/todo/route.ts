import { NextResponse } from 'next/server'

// import cors from '@/lib/cros'
import type { TODO } from './type'

// temporary way, will share it in all request
const todos: TODO[] = [
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
export async function GET(request: Request) {
  return NextResponse.json(todos)
}

export async function PUT(request: Request) {
  const data = await request.json()
  const id = data.id
  const item = todos.find((item) => item.id === id)
  if (item) {
    item.title = 'updated:' + Date.now().toString()
    item.completed = !item.completed
  }
  return NextResponse.json(todos)
}

export async function POST(request: Request, req: any) {
  if (todos.length > 10) {
    throw new Error('exceed limit')
  }
  const data = await request.json()
  const id = Date.now().toString()
  const todo = {
    id,
    ...data,
  }
  todos.push(todo)
  return NextResponse.json(todo)
}

// export async function OPTIONS(request: Request) {
//   return cors(
//     request,
//     new Response(null, {
//       status: 204,
//     }),
//   )
// }
