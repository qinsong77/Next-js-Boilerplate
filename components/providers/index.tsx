'use client'

import { Toaster } from '@/components/ui/sonner'

import { QueryProvider } from './query-provider'
import { ThemeProvider } from './theme-provider'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <Toaster position="top-center" />
      <QueryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryProvider>
    </>
  )
}
