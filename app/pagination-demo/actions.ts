'use server'

import { logger } from '@/lib/shared'
import { sleep } from '@/lib/utils'

import { Task } from './_data/schema'
import allTasks from './_data/task.json'

export type GetTaskListResponse = {
  data: Task[]
  pageIndex: number
  pageSize: number
  total: number
}

export async function getTaskList({
  pageIndex,
  pageSize,
}: {
  pageIndex: number
  pageSize: number
}): Promise<GetTaskListResponse> {
  logger.info(pageIndex, 'getTaskList start, page is: ')
  const startIndex = (pageIndex - 1) * pageSize
  const endIndex = startIndex + pageSize

  const paginatedData: GetTaskListResponse = {
    data: allTasks.slice(startIndex, endIndex),
    total: allTasks.length,
    pageIndex,
    pageSize,
  }
  await sleep(3000)

  logger.info(paginatedData, 'getTaskList done')
  return paginatedData
}
