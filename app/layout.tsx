import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js Marketplace Boilerplate',
  description: 'Production-ready Next.js 14 marketplace boilerplate with TypeScript, PostgreSQL, Prisma, and more',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
