import { type ColumnDef } from '@tanstack/react-table'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { DataTable, DataTableColumnHeader } from '@/components/data-table'

type Person = {
  id: string
  name: string
  email: string
  role: string
}

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Name"
      />
    ),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Email"
      />
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'role',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Role"
      />
    ),
  },
]

const data: Person[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
]

describe('[component]-DataTable', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <DataTable
        columns={columns}
        data={data}
      />,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
