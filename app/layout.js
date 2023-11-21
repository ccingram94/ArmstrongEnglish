import './globals.css';
import i18n from './i18n';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Provider from '../components/Provider';

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
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
    </>
  )
}
