'use client'

import {
  type Column,
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { Ban, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import React, { type HTMLAttributes, useState } from 'react'

import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

function isNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value)
}

// eslint-disable-next-line unicorn/prefer-export-from
export type { ColumnDef }

interface DataTableColumnHeaderProperties<TData, TValue>
  extends HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProperties<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn('w-full text-center', className)}>{title}</div>
  }

  return (
    <div
      className={cn('flex items-center justify-center space-x-1.5', className)}
    >
      <div className="w-full truncate">{title}</div>
      <div className="flex flex-col">
        <TooltipProvider>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  'h-3 w-4 p-0',
                  column.getIsSorted() === 'asc' && 'text-primary',
                )}
                onClick={() => {
                  column.toggleSorting(false)
                }}
              >
                <ChevronUpIcon className="size-3" />
                <span className="sr-only">升序排序</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>升序排序</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  'h-3 w-4 p-0',
                  column.getIsSorted() === 'desc' && 'text-primary',
                )}
                onClick={() => {
                  column.toggleSorting(true)
                }}
              >
                <ChevronDownIcon className="size-3" />
                <span className="sr-only">降序排序</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>降序排序</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}

interface DataTableProperties<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  className?: string
  maxHeight?: number
  minWidth?: number
  isLoading?: boolean
}

export function DataTable<TData, TValue>({
  columns,
  data,
  className,
  maxHeight,
  minWidth,
  isLoading,
}: DataTableProperties<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div className={cn(minWidth && 'flex')}>
      {isLoading ? (
        <Skeleton
          className={cn(
            'h-52 w-full',
            maxHeight && `h-[${String(maxHeight)}px]`,
          )}
        />
      ) : data.length > 0 ? (
        <ScrollArea
          style={{
            ...(isNumber(maxHeight) ? { maxHeight } : {}),
          }}
          className={cn('border-b', minWidth && 'w-1 flex-1')}
        >
          <Table
            className={cn('w-full table-auto text-center', className)}
            style={{
              ...(isNumber(minWidth) ? { minWidth } : {}),
            }}
          >
            <TableHeader className="sticky top-0 z-10 bg-secondary">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="border-none"
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        colSpan={header.colSpan}
                        // rowSpan={header.column.columnDef?.meta?.rowSpan ?? 1}
                        className={cn(
                          'relative text-center',
                          header.index + 1 !==
                            header.headerGroup.headers.length &&
                            'before:absolute before:inset-y-1/4 before:right-0 before:w-px before:bg-gray-300 before:content-[""]',
                        )}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="h-12"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      className="text-center"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar
            orientation="horizontal"
            className="w-full"
          />
        </ScrollArea>
      ) : (
        <div
          className={cn(
            'flex h-52 w-full flex-col items-center justify-center',
            maxHeight && `h-[${String(maxHeight)}px]`,
          )}
        >
          <Ban
            className="text-slate-500 dark:text-slate-400"
            size={48}
          />
          <p className="mt-2 text-slate-500 dark:text-slate-400">暂无数据</p>
        </div>
      )}
    </div>
  )
}