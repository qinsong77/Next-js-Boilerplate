'use client'

import { DataTable, DataTableColumnHeader } from '@/components/data-table'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

function toRatioText(ratio: unknown, decimal = 1) {
  if (typeof ratio !== 'number') {
    return '-'
  }
  return `${(ratio * 100).toFixed(decimal)}%`
}

const toWholeRatioText = (ratio: unknown) => toRatioText(ratio, 0)

function generateMockData(count: number) {
  const mockData = []
  for (let index = 0; index < count; index++) {
    mockData.push({
      id: index + 1,
      name: `Product ${index + 1}`,
      total: Math.floor(Math.random() * 1000),
      salesRate: Number.parseFloat(Math.random().toFixed(2)),
      profitRate: Number.parseFloat(Math.random().toFixed(2)),
      onlineCount: Math.floor(Math.random() * 500),
      onlineSalesRate: Number.parseFloat(Math.random().toFixed(2)),
      onlineProfitRate: Number.parseFloat(Math.random().toFixed(2)),
      retailCount: Math.floor(Math.random() * 500),
      retailSalesRate: Number.parseFloat(Math.random().toFixed(2)),
      retailProfitRate: Number.parseFloat(Math.random().toFixed(2)),
      wholesaleCount: Math.floor(Math.random() * 500),
      wholesaleSalesRate: Number.parseFloat(Math.random().toFixed(2)),
      wholesaleProfitRate: Number.parseFloat(Math.random().toFixed(2)),
      exportCount: Math.floor(Math.random() * 500),
      exportSalesRate: Number.parseFloat(Math.random().toFixed(2)),
      exportProfitRate: Number.parseFloat(Math.random().toFixed(2)),
      b2bCount: Math.floor(Math.random() * 500),
      b2bSalesRate: Number.parseFloat(Math.random().toFixed(2)),
      b2bProfitRate: Number.parseFloat(Math.random().toFixed(2)),
    })
  }
  return mockData
}

const records = generateMockData(20)

export const TableExample = () => {
  return (
    <div>
      <Card>
        <CardHeader>Product Performance Analysis</CardHeader>
        <CardContent>
          <DataTable
            data={records}
            maxHeight={380}
            minWidth={1620}
            columns={[
              {
                header: () => <p className="min-w-20">Product Name</p>,
                accessorKey: 'name',
              },
              {
                header: 'Overall Performance',
                columns: [
                  {
                    header: ({ column }) => (
                      <DataTableColumnHeader
                        column={column}
                        title="Units"
                      />
                    ),
                    accessorKey: 'total',
                    cell: ({ row }) => {
                      return row.original.total ?? '-'
                    },
                  },
                  {
                    header: 'Sales Rate',
                    accessorKey: 'salesRate',
                    cell: ({ row }) => {
                      return toWholeRatioText(row.original.salesRate)
                    },
                  },
                  {
                    header: 'Profit Rate',
                    accessorKey: 'profitRate',
                    cell: ({ row }) => {
                      return toWholeRatioText(row.original.profitRate)
                    },
                  },
                ],
              },
              {
                header: 'Online Sales',
                columns: [
                  {
                    header: 'Units',
                    accessorKey: 'onlineCount',
                    cell: ({ row }) => {
                      return row.original.onlineCount ?? '-'
                    },
                  },
                  {
                    header: 'Sales Rate',
                    accessorKey: 'onlineSalesRate',
                    cell: ({ row }) => {
                      return toWholeRatioText(row.original.onlineSalesRate)
                    },
                  },
                  {
                    header: 'Profit Rate',
                    accessorKey: 'onlineProfitRate',
                    cell: ({ row }) => {
                      return toWholeRatioText(row.original.onlineProfitRate)
                    },
                  },
                ],
              },
              {
                header: 'Retail Sales',
                columns: [
                  {
                    header: 'Units',
                    accessorKey: 'retailCount',
                    cell: ({ row }) => {
                      return row.original.retailCount ?? '-'
                    },
                  },
                  {
                    header: 'Sales Rate',
                    accessorKey: 'retailSalesRate',
                    cell: ({ row }) => {
                      return toWholeRatioText(row.original.retailSalesRate)
                    },
                  },
                  {
                    header: 'Profit Rate',
                    accessorKey: 'retailProfitRate',
                    cell: ({ row }) => {
                      return toWholeRatioText(row.original.retailProfitRate)
                    },
                  },
                ],
              },
              {
                header: 'Wholesale',
                columns: [
                  {
                    header: 'Units',
                    accessorKey: 'wholesaleCount',
                    cell: ({ row }) => {
                      return row.original.wholesaleCount ?? '-'
                    },
                  },
                  {
                    header: 'Sales Rate',
                    accessorKey: 'wholesaleSalesRate',
                    cell: ({ row }) => {
                      return toWholeRatioText(row.original.wholesaleSalesRate)
                    },
                  },
                  {
                    header: 'Profit Rate',
                    accessorKey: 'wholesaleProfitRate',
                    cell: ({ row }) => {
                      return toWholeRatioText(row.original.wholesaleProfitRate)
                    },
                  },
                ],
              },
              {
                header: 'Export Sales',
                columns: [
                  {
                    header: 'Units',
                    accessorKey: 'exportCount',
                    cell: ({ row }) => {
                      return row.original.exportCount ?? '-'
                    },
                  },
                  {
                    header: 'Sales Rate',
                    accessorKey: 'exportSalesRate',
                    cell: ({ row }) => {
                      return toWholeRatioText(row.original.exportSalesRate)
                    },
                  },
                  {
                    header: 'Profit Rate',
                    accessorKey: 'exportProfitRate',
                    cell: ({ row }) => {
                      return toWholeRatioText(row.original.exportProfitRate)
                    },
                  },
                ],
              },
              {
                header: 'B2B Sales',
                columns: [
                  {
                    header: 'Units',
                    accessorKey: 'b2bCount',
                    cell: ({ row }) => {
                      return row.original.b2bCount ?? '-'
                    },
                  },
                  {
                    header: 'Sales Rate',
                    accessorKey: 'b2bSalesRate',
                    cell: ({ row }) => {
                      return toWholeRatioText(row.original.b2bSalesRate)
                    },
                  },
                  {
                    header: 'Profit Rate',
                    accessorKey: 'b2bProfitRate',
                    cell: ({ row }) => {
                      return toWholeRatioText(row.original.b2bProfitRate)
                    },
                  },
                ],
              },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  )
}
