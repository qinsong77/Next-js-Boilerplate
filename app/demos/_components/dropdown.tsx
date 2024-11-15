'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const options = ['mew', 'mewtwo', 'pikachu']

export const DropDown = ({ selected }: { selected: string }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParameters = useSearchParams()

  const onValueChange = (value: string) => {
    const current = new URLSearchParams(searchParameters)

    if (value === 'none' || !value) {
      current.delete('selected')
    } else {
      current.set('selected', value)
    }

    const search = current.toString()
    const query = search ? `?${search}` : ''

    router.push(`${pathname}${query}`)
  }

  return (
    <>
      <Select
        onValueChange={onValueChange}
        value={selected}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a pokemon" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Pokemon</SelectLabel>
            <SelectItem value="none">None</SelectItem>
            {options.map((opt) => (
              <SelectItem
                key={opt}
                value={opt}
              >
                {opt}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}
