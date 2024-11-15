'use server'

import { readFile } from 'node:fs/promises'

import { logger } from '@/lib/shared'

export const SeverComponentOne = async (properties: { value: string }) => {
  logger.info(properties, 'SeverComponentOne props')
  const tsconfig = await readFile('tsconfig.json', 'utf8')

  // await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <div>
      My server component2 with val: {properties.value}
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        show tsconfig.json from server:
      </h4>
      <div className="mt-4 max-w-3xl">
        <code>{tsconfig}</code>
      </div>
    </div>
  )
}
