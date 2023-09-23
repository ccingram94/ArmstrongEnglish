'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

import {
    ChatBubbleLeftIcon, ChatBubbleLeftEllipsisIcon, ChatBubbleLeftRightIcon,
    AcademicCapIcon, Bars3Icon, MapPinIcon,
    UserIcon, UserGroupIcon, LanguageIcon,
  } from '@heroicons/react/24/outline';

import { 
    ChevronDownIcon, ChevronUpIcon, PlayCircleIcon, BookOpenIcon,
    CalendarDaysIcon, PuzzlePieceIcon, UserCircleIcon,
  } from '@heroicons/react/20/solid';


function TopHeader () {
    const [ mobileOpen, setMobileOpen ] = useState(false);
    const { t, i18n } = useTranslation('en-US');
    return (
        <>
            <div className='popoverheader flex w-full justify-between items-center bg-gradient-to-br from-indigo-800 to-violet-800 text-white z-2'>
                <div className='flex flex-auto justify-center items-center hidden lg:flex'>
                    <MapPinIcon className='h-4 w-auto m-2'/>
                    <p className='font-bold text-sm'>{t('United States + Online')}</p>
                </div>
                <div className="flex flex-auto justify-center items-center hidden lg:flex">
                    <AcademicCapIcon className='h-4 w-auto m-2' />
                    <p className="font-bold text-sm">classes available now </p>
                    <button className='bg-white hover:bg-opacity-100 bg-opacity-80 transition-all rounded-full mx-2'>
                        <p className="font-bold text-sm text-violet-900 px-2 transition-all">see calendar</p>
                    </button>
                </div>
                <div className="popoverheader flex flex-auto justify-center items-center">
                    <Popover.Group className="hidden lg:flex lg:gap-x-12">
                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 leading-6">
                                <LanguageIcon className='h-6 w-auto m-2' />
                                <p className="font-bold text-sm">English (EN) </p>
                                <ChevronDownIcon className="h-6 w-auto ui-open:rotate-180 ui-open:transform transition-all" />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute top-full z-10 mt-3 w-full
                                    max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4 font-semibold text-purple-900">
                                            <div onClick={() => close } className='text-sm group relative flex flex-col items-start gap-x-6 leading-6'>
                                                <button onClick={() => close } className='p-2 rounded-xl hover:bg-purple-600/5 transition-all'> 🇺🇸 English (EN)</button>
                                                <button className='p-2 rounded-xl hover:bg-purple-600/5 transition-all'> 🇨🇳 中文 (CN)</button>
                                                <button className='p-2 rounded-xl hover:bg-purple-600/5 transition-all'> 🇲🇽 Español (ES)</button>
                                            </div>
                                        </div>

                                    </Popover.Panel>
                            </Transition>
                        </Popover>
                    </Popover.Group>
                </div>
            </div>
        </>
    )
}

export default TopHeader;