import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '12 Labs',
  description: 'Sharing beautifully crafted front-end components for web by kartik',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='mx-auto max-w-xl'>
          {children}
        </div>
      </body>
    </html>
  )
}
