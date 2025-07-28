// https://github.com/vercel/next.js/discussions/47227
import { Counter } from '@/components/counter'

import { logger } from '@/lib/shared'

import { DropDown } from './_components/dropdown'

// This part is important! no need for next 15
// export const dynamic = 'force-dynamic'

const fetchPokemon = async (poke: string) => {
  if (!poke) return null

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)

    if (!response.ok) return null

    return await response.json()
  } catch {
    return null
  }
}

export default async function Foo(properties: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParameters = await properties.searchParams
  logger.trace(searchParameters, 'searchParams')
  const selectedSearch = searchParameters?.selected ?? ''
  const selected = Array.isArray(selectedSearch)
    ? selectedSearch[0]
    : selectedSearch

  console.log(selected)
  const pokemon = await fetchPokemon(selected)

  return (
    <>
      <Counter />

      <DropDown selected={selected || ''} />

      {pokemon ? (
        <section className="mt-4">
          {pokemon.name} - {pokemon.id}
        </section>
      ) : (
        <p className="mt-2">Select a pokemon</p>
      )}
    </>
  )
}
