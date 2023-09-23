'use client'; 

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import BookingCalendar from '../components/BookingCalendar';

const lngs = {
  en: { nativeName: 'English' },
  cn: { nativeName: '中文' },
  es: { nativeName: 'Español'},
};

export default function Home() {
  const { t, i18n } = useTranslation('en-US');
  
  return (
    <>
        <main className="flex flex-col items-center bg-violet-900 bg-center min-h-screen">
          <h1 className='text-3xl w-fit h-fit'>{t('Explore the World')}</h1>
          <h2 className='text-3xl w-fit h-fit'>{t('In English!')}</h2>
        </main>
    </>
  )
}
