'use client';

import { useTranslation } from 'react-i18next';

function Hero () {
    const { t, i18n } = useTranslation('en-US');
    return (
         <div class="relative isolate px-6 pt-14 lg:px-8">
            <div class="mx-auto max-w-2xl">
                <div class="text-center p-4">
                    <h1 class="text-4xl pt-6 font-bold tracking-tight text-violet-600 sm:text-6xl">{t('Explore the World')}</h1>
                    <h1 class="text-4xl pb-6 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-violet-600 to-indigo-800 sm:text-6xl">{t('In English!')}</h1>
                    <p class="mt-6 text-lg leading-8 text-gray-600">book an online class or try our free English placement test</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" class="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Classes</a>
                        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Free English Test <span aria-hidden="true">→</span></a>
                    </div>
                </div>
            </div>
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
            </div>
        </div>
    )
}

export default Hero;