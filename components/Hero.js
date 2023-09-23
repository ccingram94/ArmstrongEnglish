'use client';

import { useTranslation } from 'react-i18next';

function Hero () {
    const { t, i18n } = useTranslation('en-US');
    return (
         <div class="bg-heromesh bg-cover w-full min-h-screen relative isolate px-6 pt-14 lg:px-8">
            <div class="mx-auto max-w-2xl">
                <div class="text-center p-4">
                    <h1 class="text-4xl pt-6 font-bold tracking-tight text-violet-100 sm:text-6xl">{t('Explore the World')}</h1>
                    <h1 class="text-4xl pb-6 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-violet-100 to-indigo-100 sm:text-6xl">{t('In English!')}</h1>
                    <p class="mt-6 text-lg leading-8 text-violet-50">book an online class or try our free English placement test</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" class="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Classes</a>
                        <a href="#" class="text-sm font-semibold leading-6 text-violet-50">Free English Test <span aria-hidden="true">→</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;