import Header from '@/components/header/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reown - Your Vehicle History Database',
  description: 'Reown - Your Vehicle History Database',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=''>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
