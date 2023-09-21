import './globals.css'
import { Inter, Concert_One } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const concert = Concert_One({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Armstrong English',
  description: 'Online ESL Lessons and English Courses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
