import 'server-only'

import { cookies } from 'next/headers'
import { cache } from 'react'

import type { AuthSession, User } from './types'

const SESSION_COOKIE_NAME = 'session_id'

export async function setSessionCookie(
  token: string,
  expiresAt: Date,
): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    expires: expiresAt,
    path: '/',
  })
}

export async function deleteSessionCookie(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 0,
    path: '/',
  })
}

export async function getSessionToken(): Promise<string | undefined> {
  const cookieStore = await cookies()
  return cookieStore.get(SESSION_COOKIE_NAME)?.value
}

export async function getAuth(): Promise<AuthSession> {
  const token = await getSessionToken()

  if (!token) {
    return { user: null, session: null }
  }

  // const session = await validateSessionToken(token)
  //
  // if (!session) {
  //   return { user: null, session: null }
  // }

  const email = decodeURIComponent(token.split('_').pop() ?? 'demo@example.com')

  const user: User = {
    id: token.split('_').shift() ?? crypto.randomUUID(),
    email: email,
    name: email,
    createdAt: new Date(),
  }

  return {
    user,
    session: {
      id: token,
      userId: user.id,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      user: user,
    },
  }
}

export const getSessionCached = cache(getAuth)
