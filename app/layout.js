import './globals.css';
import './i18n';
import Header from '../components/Header';

export const metadata = {
  title: 'Armstrong English',
  description: 'Online ESL Lessons and English Courses',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
