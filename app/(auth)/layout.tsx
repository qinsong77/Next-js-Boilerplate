import { redirect } from 'next/navigation'

import AuthLayoutLeft from '@/components/auth-layout-left'

import { getSessionCached } from '@/lib/auth'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { session } = await getSessionCached()
  if (session) redirect('/')
  return (
    <div className="bg-background flex h-screen items-center justify-between">
      <AuthLayoutLeft />
      <div className="flex h-full w-full flex-col items-center justify-center px-4 md:px-8 lg:w-1/2">
        {children}
      </div>
    </div>
  )
}
