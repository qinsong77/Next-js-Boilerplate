import { AuthenticatedLayout } from '@/components/authenticated-layout'

export default function AuthenticatedPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AuthenticatedLayout>{children}</AuthenticatedLayout>
}
