import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akinrinde Joel | Dev-cyberbot501 | Oni Imo Ero Cyberbot501',
  description: 'Yoruba Tech Content Creator, Developer & DevRel - Happy New Year 2026',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="yo">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

