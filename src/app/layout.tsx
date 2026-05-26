import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Klasik Ajans — Tasarım, Video, İçerik, Web',
  description:
    'Klasik Ajans; tasarım, video animasyon, içerik ve web alanlarında hızlı ve etkili çözümler üretir. Fazla toplantı yok, uzun süreç yok. Sadece iş.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
