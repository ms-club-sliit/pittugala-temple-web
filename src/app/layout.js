import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pittugala Temple Web',
  description: 'Official Webstite of Pittugala Temple, Malabe, Sri Lanka',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
