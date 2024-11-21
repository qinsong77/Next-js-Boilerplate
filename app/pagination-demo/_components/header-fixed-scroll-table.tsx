'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
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

const orderData = [
  {
    name: 'Long Order Name #1',
    total: 2500,
    food: 1000,
    beverage: 800,
    dessert: 500,
    other: 200,
    online: 1500,
    offline: 1000,
  },
  {
    name: 'Order #2',
    total: 1800,
    food: 800,
    beverage: 600,
    dessert: 300,
    other: 100,
    online: 1200,
    offline: 600,
  },
  {
    name: 'Very Long Order Name #3',
    total: 3200,
    food: 1500,
    beverage: 900,
    dessert: 600,
    other: 200,
    online: 2000,
    offline: 1200,
  },
  {
    name: 'Order #4',
    total: 1900,
    food: 900,
    beverage: 500,
    dessert: 400,
    other: 100,
    online: 1100,
    offline: 800,
  },
  {
    name: 'Long Order Name #5',
    total: 2800,
    food: 1200,
    beverage: 800,
    dessert: 600,
    other: 200,
    online: 1800,
    offline: 1000,
  },
  {
    name: 'Order #6',
    total: 2100,
    food: 1000,
    beverage: 600,
    dessert: 400,
    other: 100,
    online: 1300,
    offline: 800,
  },
  {
    name: 'Very Long Order Name #7',
    total: 3500,
    food: 1600,
    beverage: 1000,
    dessert: 700,
    other: 200,
    online: 2200,
    offline: 1300,
  },
  {
    name: 'Order #8',
    total: 2300,
    food: 1100,
    beverage: 700,
    dessert: 400,
    other: 100,
    online: 1400,
    offline: 900,
  },
  {
    name: 'Very Long Order Name #9',
    total: 2900,
    food: 1300,
    beverage: 800,
    dessert: 600,
    other: 200,
    online: 1800,
    offline: 1100,
  },
  {
    name: 'Order #10',
    total: 2000,
    food: 900,
    beverage: 600,
    dessert: 400,
    other: 100,
    online: 1200,
    offline: 800,
  },
  {
    name: 'Order #11',
    total: 2400,
    food: 1100,
    beverage: 700,
    dessert: 500,
    other: 100,
    online: 1500,
    offline: 900,
  },
]

export function HeaderFixedScrollTable() {
  return (
    <ScrollArea className="h-[400px] rounded-md border">
      <Table className="table-fixed text-center">
        <TableHeader className="sticky top-0 z-10 bg-secondary">
          <TableRow className="border-none">
            <TableHead
              className="w-1/5 text-center"
              rowSpan={2}
            >
              Order
            </TableHead>
            <TableHead
              className="text-center"
              rowSpan={2}
            >
              Total
            </TableHead>
            <TableHead
              className="text-center"
              colSpan={4}
            >
              Category
            </TableHead>
            <TableHead
              className="text-center"
              colSpan={2}
            >
              Channel
            </TableHead>
          </TableRow>
          <TableRow className="border-none">
            <TableHead className="text-center">Food</TableHead>
            <TableHead className="text-center">Beverage</TableHead>
            <TableHead className="text-center">Dessert</TableHead>
            <TableHead className="text-center">Other</TableHead>
            <TableHead className="text-center">Online</TableHead>
            <TableHead className="text-center">Offline</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderData.map((order, index) => (
            <TableRow
              key={index}
              className="h-12"
            >
              <TableCell>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="block truncate">{order.name}</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{order.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>{order.food}</TableCell>
              <TableCell>{order.beverage}</TableCell>
              <TableCell>{order.dessert}</TableCell>
              <TableCell>{order.other}</TableCell>
              <TableCell>{order.online}</TableCell>
              <TableCell>{order.offline}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  )
}
