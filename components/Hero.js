'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

function Hero () {
    const { t, i18n } = useTranslation();
    return (
         <div class="bg-heromesh bg-cover w-full relative isolate pt-14">
            <div class="mx-auto w-full bg-gradient-to-b from-transparent to-violet-800">
                <div class="text-center p-4">
                    <h1 class="text-4xl pt-6 font-bold tracking-tight text-violet-100 sm:text-6xl">{t('Explore the World')}</h1>
                    <h1 class="text-4xl pb-6 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-violet-100 to-indigo-100 sm:text-6xl">{t('In English!')}</h1>
                    <p class="mt-6 text-lg leading-8 text-violet-50">{t('book a class or try our free online English lessons')}</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/" class="p-2 rounded-md bg-violet-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-violet-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{t('Classes')}</Link>
                        <Link href="/beginner" class="p-2 rounded-xl text-sm font-semibold leading-6 text-violet-50 hover:ring-2 ring-white/30 transition-all"> {t('Free Lessons')} <ArrowLongRightIcon className='h-6 w-6 inline' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;