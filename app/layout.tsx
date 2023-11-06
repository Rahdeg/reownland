import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Header from '../components/header/header'
import Footer from '../components/footer'




const inter = Montserrat({ subsets: ['latin'] })

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
        <main className=' w-full'>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}