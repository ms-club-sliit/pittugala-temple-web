import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import Navbar from '@/components/Navbar'
import DonationButton from '@/components/DonationButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ශ්‍රී සුදර්ශනාරාම විහාරස්ථානය',
  description: ' ශ්‍රී සුදර්ශන්රාම පුරාණ විහාරස්ථානයේ නිල වෙබ් අඩවිය',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <DonationButton />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
