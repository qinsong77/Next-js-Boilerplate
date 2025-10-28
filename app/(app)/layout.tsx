import { SiteFooter, SiteHeader } from '@/components/site-layout'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-screen-lg flex-col px-4 2xl:max-w-screen-xl">
      <SiteHeader />
      <main className="flex-1 py-2 md:py-4 lg:py-6">{children}</main>
      <SiteFooter />
    </div>
  )
}
