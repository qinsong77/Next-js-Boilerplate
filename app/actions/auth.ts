'use server'

import { redirect } from 'next/navigation'

import { deleteSessionCookie, getAuth, setSessionCookie } from '@/lib/auth'

export async function signUpAction(formData: FormData) {
  const email = formData.get('email') as string
  // const password = formData.get('password') as string
  // const userName = formData.get('userName') as string

  try {
    const sessionId = `${crypto.randomUUID()}_${encodeURIComponent(email)}`
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)

    await setSessionCookie(sessionId, expiresAt)

    return { success: true }
  } catch (error) {
    console.error('Sign up error:', error)
    return { error: 'Failed to create account', formData }
  }
}
export async function signInAction(formData: FormData) {
  const email = formData.get('email') as string
  try {
    const sessionId = `${crypto.randomUUID()}_${encodeURIComponent(email)}`
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)

    await setSessionCookie(sessionId, expiresAt)

    return { success: true }
  } catch (error) {
    console.error('Sign in error:', error)
    return { error: 'Failed to sign in', formData }
  }
}

export async function signOutAction() {
  const { session } = await getAuth()

  if (!session) {
    redirect('/login')
  }

  await deleteSessionCookie()

  redirect('/login')
}
