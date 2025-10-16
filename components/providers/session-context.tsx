'use client'

import { createContext, useContext } from 'react'

import type { User } from '@/lib/auth/types'

type SessionContextType = {
  user: User
}

const SessionContext = createContext<SessionContextType | undefined>(undefined)

export function useSessionContext() {
  const value = useContext(SessionContext)
  if (value === undefined) {
    throw new Error('useSessionContext must be used within a SessionProvider')
  }
  return value
}

export function SessionProvider({
  children,
  user,
}: {
  children: React.ReactNode
  user: User
}) {
  return (
    <SessionContext.Provider value={{ user }}>
      {children}
    </SessionContext.Provider>
  )
}
