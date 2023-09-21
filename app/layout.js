import './globals.css'
import { Inter, Concert_One } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })
const concert = Concert_One({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Armstrong English',
  description: 'Online ESL Lessons and English Courses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
