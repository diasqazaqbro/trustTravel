import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './styles/index.sass'
const inter = Montserrat({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'TrustTravel',
  description: 'Generated by diasqazaqbro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
