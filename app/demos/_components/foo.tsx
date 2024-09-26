// https://github.com/vercel/next.js/discussions/47227
import { Counter } from '@/components/counter'

import { DropDown } from './dropdown'

// This part is important!
export const dynamic = 'force-dynamic'

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

export default async function Foo({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  console.log(searchParams)
  const selectedSearch = searchParams?.selected ?? ''
  const selected = Array.isArray(selectedSearch)
    ? selectedSearch[0]
    : selectedSearch

  console.log(selected)
  const pokemon = await fetchPokemon(selected)

  console.log(pokemon)

  return (
    <>
      <Counter />

      <DropDown selected={selected || ''} />

      {pokemon ? (
        <section>
          {pokemon.name} - {pokemon.id}
        </section>
      ) : (
        <p>Select a pokemon</p>
      )}
    </>
  )
}
