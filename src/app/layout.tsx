import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Sahaj's Portfolio",
  description: 'A developer building Fullstack web apps, terminal tools, and other cool stuff',
  keywords: ['portfolio', 'developer', 'fullstack', 'linux', 'web development', 'terminal tools'],
  authors: [{ name: 'Sahaj' }],
  icons: {
    icon: '/pfp.webp',
  },
  openGraph: {
    type: 'website',
    url: 'https://sahaj.dev',
    title: "Sahaj's Portfolio",
    description: 'A developer building fullstack apps, terminal tools, and other cool stuff',
    images: [
      {
        url: 'https://sahaj.dev/og-banner.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://sahaj.dev',
    title: "Sahaj's Portfolio",
    description: 'A developer building fullstack apps, terminal tools, and other cool stuff',
    images: ['https://sahaj.dev/og-banner.webp'],
  },
  robots: 'index, follow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
