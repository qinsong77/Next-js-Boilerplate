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

const projectData = [
  {
    name: 'long name project 1',
    total: 100,
    ba: 10,
    dev: 50,
    qa: 30,
    pm: 10,
    internal: 80,
    external: 20,
  },
  {
    name: 'project 2',
    total: 150,
    ba: 15,
    dev: 75,
    qa: 45,
    pm: 15,
    internal: 100,
    external: 50,
  },
  {
    name: 'long name project 3',
    total: 200,
    ba: 20,
    dev: 100,
    qa: 60,
    pm: 20,
    internal: 150,
    external: 50,
  },
  {
    name: 'project 4',
    total: 120,
    ba: 12,
    dev: 60,
    qa: 36,
    pm: 12,
    internal: 90,
    external: 30,
  },
  {
    name: 'long name project 5',
    total: 180,
    ba: 18,
    dev: 90,
    qa: 54,
    pm: 18,
    internal: 120,
    external: 60,
  },
  {
    name: 'project 6',
    total: 90,
    ba: 9,
    dev: 45,
    qa: 27,
    pm: 9,
    internal: 60,
    external: 30,
  },
  {
    name: 'very long name project 7',
    total: 220,
    ba: 22,
    dev: 110,
    qa: 66,
    pm: 22,
    internal: 170,
    external: 50,
  },
  {
    name: 'project 8',
    total: 130,
    ba: 13,
    dev: 65,
    qa: 39,
    pm: 13,
    internal: 100,
    external: 30,
  },
  {
    name: 'very long name project 9',
    total: 170,
    ba: 17,
    dev: 85,
    qa: 51,
    pm: 17,
    internal: 130,
    external: 40,
  },
  {
    name: 'project 10',
    total: 110,
    ba: 11,
    dev: 55,
    qa: 33,
    pm: 11,
    internal: 80,
    external: 30,
  },
  {
    name: 'project 11',
    total: 110,
    ba: 11,
    dev: 55,
    qa: 33,
    pm: 11,
    internal: 80,
    external: 30,
  },
]

export function HeaderFixedScrollTable() {
  return (
    <ScrollArea className="h-[400px] rounded-md border">
      {/*<Table wrapperClassName="h-[400px] overflow-auto relative">*/}
      <Table className="table-fixed text-center">
        <TableHeader className="sticky top-0 z-10 bg-secondary">
          {/*<TableHeader>*/}
          <TableRow className="border-none">
            <TableHead
              className="w-1/5 text-center"
              rowSpan={2}
            >
              项目
            </TableHead>
            <TableHead
              className="text-center"
              rowSpan={2}
            >
              总数
            </TableHead>
            <TableHead
              className="text-center"
              colSpan={4}
            >
              角色
            </TableHead>
            <TableHead
              className="text-center"
              colSpan={2}
            >
              归属
            </TableHead>
          </TableRow>
          <TableRow className="border-none">
            <TableHead className="text-center">BA</TableHead>
            <TableHead className="text-center">DEV</TableHead>
            <TableHead className="text-center">QA</TableHead>
            <TableHead className="text-center">PM</TableHead>
            <TableHead className="text-center">内</TableHead>
            <TableHead className="text-center">外</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projectData.map((project, index) => (
            <TableRow
              key={index}
              className="h-12"
            >
              <TableCell>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="block truncate">{project.name}</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{project.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell className="">{project.total}</TableCell>
              <TableCell className="">{project.ba}</TableCell>
              <TableCell className="">{project.dev}</TableCell>
              <TableCell className="">{project.qa}</TableCell>
              <TableCell className="">{project.pm}</TableCell>
              <TableCell className="">{project.internal}</TableCell>
              <TableCell className="">{project.external}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  )
}
