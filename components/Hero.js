'use client';

import Link from 'next/link';
import Image from 'next/image'
import { useTranslation } from 'react-i18next';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

function Hero () {
    const { t, i18n } = useTranslation();
    return (
        <div className='w-full h-full bg-violet-900'>
        <div className="bg-hero bg-cover bg-center w-full relative isolate">
            <div class="w-full bg-gradient-to-b from-violet-900/30 to-violet-800">
                <div class="flex flex-col items-center text-center p-4">
                    <h1 class="text-4xl pt-6 pt-12 font-bold tracking-tight text-white sm:text-6xl">{t('Explore the World')}</h1>
                    <h1 class="text-4xl pb-6 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-violet-100 sm:text-6xl">{t('In English!')}</h1>
                    <p class="mt-6 text-lg max-w-sm text-center leading-8 text-white/90">{t('book a class or try our free online English lessons')}</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/class" class="p-2 rounded-md bg-violet-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-violet-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{t('Classes')}</Link>
                        <Link href="/beginner" class="p-2 rounded-xl text-sm font-semibold leading-6 text-violet-50 hover:ring-2 ring-white/30 transition-all"> {t('Free Lessons')} <ArrowLongRightIcon className='h-6 w-6 inline' /></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero;