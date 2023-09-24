'use client'; 

import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import BookingCalendar from '../components/BookingCalendar';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import AboutUs from '../components/AboutUs';
import TestHero from '../components/TestHero';
import TeachersSection from '../components/TeachersSection';

const lngs = {
  en: { nativeName: 'English' },
  cn: { nativeName: '中文' },
  es: { nativeName: 'Español'},
};

export default function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <>
      <main className="flex flex-col items-center bg-center min-h-screen w-full">
        <Hero />
        <Pricing />
        <TestHero />
        <TeachersSection />
      </main>
    </>
  )
}
