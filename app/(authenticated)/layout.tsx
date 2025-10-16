import { AuthenticatedLayout } from '@/components/authenticated-layout'

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AuthenticatedLayout>{children}</AuthenticatedLayout>
}
