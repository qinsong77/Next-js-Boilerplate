import { redirect } from 'next/navigation'

import { SessionProvider } from '@/components/providers/session-context'

import { getSessionCached } from '@/lib/auth'

export async function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { user, session } = await getSessionCached()

  if (!session || !user) {
    redirect('/login')
  }

  return <SessionProvider user={user}>{children}</SessionProvider>
}
