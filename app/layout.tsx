import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shah Md. Ekteder - Creative Developer',
  description: 'Portfolio of Shah Md. Ekteder, a creative developer crafting digital experiences that inspire and engage.',
  openGraph: {
    title: 'Shah Md. Ekteder - Creative Developer',
    description: 'Portfolio of Shah Md. Ekteder, a creative developer crafting digital experiences that inspire and engage.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  )
}
