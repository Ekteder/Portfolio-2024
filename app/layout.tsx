import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'Your portfolio description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          rel="preload"
          href="/IMG_2841.jpg"
          as="image"
        />
        {/* Add other critical assets here */}
      </head>
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  )
}
