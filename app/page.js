'use client'; 

import Image from 'next/image';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import BookingCalendar from '../components/BookingCalendar';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import AboutUs from '../components/AboutUs';
import TestHero from '../components/TestHero';

const lngs = {
  en: { nativeName: 'English' },
  cn: { nativeName: '中文' },
  es: { nativeName: 'Español'},
};

export default function Home() {
  const { t, i18n } = useTranslation('en-US');
  
  return (
    <>
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <main className="flex flex-col items-center bg-center min-h-screen w-full">
        <Hero />
        <Pricing />
        <AboutUs />
        <TestHero />
      </main>
    </I18nextProvider>
    </>
  )
}
