'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ChatBubbleLeftRightIcon, MapPinIcon, LanguageIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Popover, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';

function Footer() {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang ] = useState('English (EN)');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const languageOptions = {
    'en': "English (EN)",
    'cn': "中文 (CN)",
    'es': "Español (ES)",
}

  useEffect(() => {
    setCurrentLang(languageOptions[i18n.language]);
  }, [i18n.language])

    return (
      <footer className='bg-hero bg-cover bg-bottom lg:bg-top'>
      <div className="bg-violet-900/90 text-white py-8">
        <div className="flex flex-wrap justify-center text-center">
          {/* First Column */}
          <div className="w-full md:w-1/3 m-auto p-6">
            <div className='flex flex-row flex-wrap opacity-80 p-2 justify-center items-center'>
                <h2 className="text-2xl font-extrabold">{t('Armstrong English')}</h2>
                <MapPinIcon className='h-4 w-4 m-2' />
                <p className='text-md'>{t('United States')}</p>
                <Popover.Group className="flex lg:gap-x-12">
                        <Popover className="relative">
                        <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute z-10 w-full bottom-auto mt-[-10rem]
                                    max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                      {({ close }) => (
                                        <div className="p-4 font-semibold text-purple-900">
                                            <div className='text-sm group relative flex flex-col items-start gap-x-6 leading-6'>
                                                <button onClick={() => {i18n.changeLanguage('en'), close() }} className='p-2 rounded-xl hover:bg-purple-600/5 transition-all'> 🇺🇸 English (EN)</button>
                                                <button onClick={() => {i18n.changeLanguage('cn'), close() }} className='p-2 rounded-xl hover:bg-purple-600/5 transition-all'> 🇨🇳 中文 (CN)</button>
                                                <button onClick={() => {i18n.changeLanguage('es'), close() }} className='p-2 rounded-xl hover:bg-purple-600/5 transition-all'> 🇲🇽 Español (ES)</button>
                                            </div>
                                        </div>
                                      )}
                                    </Popover.Panel>
                            </Transition>
                            <Popover.Button className="flex items-center gap-x-1 leading-6">
                                <LanguageIcon className='h-6 w-auto m-2' />
                                <p className="font-bold text-sm"> { currentLang } </p>
                                <ChevronDownIcon className="h-6 w-auto ui-open:rotate-180 ui-open:transform transition-all" />
                            </Popover.Button>
                        </Popover>
                    </Popover.Group>
            </div>
            <p className="opacity-80 text-sm font-semibold">{t('© 2023 Armstrong English')}</p>
            <p className="opacity-80 text-sm font-semibold">{t('All rights reserved.')}</p>
          </div>
  
          {/* Second Column */}
          <div className="w-full md:w-fit m-auto p-6">
            <h2 className="text-xl font-extrabold mb-4">{t('Learn')}</h2>
            <ul className="opacity-80 font-semibold">
              <Link href="/beginner">
                <li>{t('Beginner')}</li>
              </Link>
              <Link href="/intermediate">
                <li>{t('Intermediate')}</li>
              </Link>
              <Link href="/advanced">
                <li>{t('Advanced')}</li>
              </Link>
            </ul>
          </div>
  
          <div className="w-full md:w-fit m-auto p-6">
            <h2 className="text-xl font-extrabold mb-4">{t('Classes')}</h2>
            <ul className='opacity-80 font-semibold'>
              <Link href="/class">
                <li>{t('Book a Class')}</li>
              </Link>
              <Link href="/class">
                <li>{t('Tutoring')}</li>
              </Link>
              <Link href="/class">
                <li>{t('Group Classes')}</li>
              </Link>
            </ul>
          </div>

          <div className="w-full md:w-fit m-auto p-6">
            <h2 className="text-xl font-extrabold mb-4">{t('Practice')}</h2>
            <ul className='opacity-80 font-semibold'>
              <Link href="/beginner">
                <li>{t('Lessons')}</li>
              </Link>
              <li>{t('Quiz')}</li>
            </ul>
          </div>

        </div>
      </div>
      </footer>
    );
  }
  
  export default Footer;