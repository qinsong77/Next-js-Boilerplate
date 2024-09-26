'use server'

import { readFile } from 'fs/promises'

import { logger } from '@/lib/shared'

export const SeverComponentOne = async (props: { value: string }) => {
  logger.info(props, 'SeverComponentOne props')
  const tsconfig = await readFile('tsconfig.json', 'utf8')

  // await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <div>
      My server component2 with val: {props.value}
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        show tsconfig.json from server:
      </h4>
      <div className="mt-4 max-w-3xl">
        <code>{tsconfig}</code>
      </div>
    </div>
  )
}
