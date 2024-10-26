import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shah Md Ekteder',
  description: 'Portfolio of Shah Md Ekteder, a web developer and designer specializing in modern web technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
      <meta name="google-site-verification" content="gP5gGQwXgain37Oh_AZhWox-igJHBD55-3MvNjlAS9s" />
      </head>
      <body className="bg-gray-900 text-white" suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
