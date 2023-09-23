import './globals.css';
import './i18n';
import { Inter } from 'next/font/google';
import Header from '../components/Header';

export const metadata = {
  title: 'Armstrong English',
  description: 'Online ESL Lessons and English Courses',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <>
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
    </>
  )
}
