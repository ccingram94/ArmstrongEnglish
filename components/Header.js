'use client';

import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import TopHeader from './TopHeader';

import {
    ChatBubbleLeftIcon, ChatBubbleLeftEllipsisIcon, ChatBubbleLeftRightIcon,
    AcademicCapIcon, Bars3Icon, MapPinIcon,
    UserIcon, UserGroupIcon, LanguageIcon,
  } from '@heroicons/react/24/outline';

import { 
    ChevronDownIcon, ChevronUpIcon, PlayCircleIcon, BookOpenIcon,
    CalendarDaysIcon, PuzzlePieceIcon, UserCircleIcon,
  } from '@heroicons/react/20/solid';

  const learnOptions = [
    { name: 'Beginner', description: 'CEFR Level A1 and A2', href: '/beginner', icon: ChatBubbleLeftIcon },
    { name: 'Intermediate', description: 'CEFR Level B1 and B2', href: '/intermediate', icon: ChatBubbleLeftEllipsisIcon },
    { name: 'Advanced', description: 'CEFR Level C1 and C2', href: '/advanced', icon: ChatBubbleLeftRightIcon },
    { name: 'Classes', description: 'study with our teachers', href: '/class', icon: AcademicCapIcon },
  ]
  const learnCTA = [
    { name: 'Videos', href: '#', icon: PlayCircleIcon },
    { name: 'Practice', href: '#', icon: BookOpenIcon },
  ]

const classOptions = [
    { name: 'Tutoring', description: '1-on-1 online classes (25 or 50 minutes)', href: '/class', icon: UserIcon },
    { name: 'Group Classes', description: 'up to 6 students per class (50 minutes)', href: '/class', icon: UserGroupIcon },
]

  const classCTA = [
    { name: 'Teachers', href: '#', icon: LanguageIcon },
    { name: 'Book a Class', href: '#', icon: CalendarDaysIcon },
  ]


function Header () {
    const [ mobileOpen, setMobileOpen ] = useState(false);
    const [ langOpen, setLangOpen ] = useState(false);
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang ] = useState('English (EN)');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }

    const languageOptions = {
    'en': "English",
    'cn': "中文",
    'es': "Español",
    }

    useEffect(() => {
        setCurrentLang(languageOptions[i18n.language]);
    }, [i18n.language])

    return (
        <>
            <TopHeader />
            <header className="header top-0 w-full sticky bg-white drop-shadow-2xl">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6">

                    <div className="flex lg:flex-1 items-center">
                        <Link href="/" className='-m-1.5 p-1.5'>
                            <span className="sr-only">Armstrong English</span>
                            <ChatBubbleLeftRightIcon className="h-8 w-auto text-violet-900" />
                        </Link>
                    </div>

                    <div className='flex lg:hidden items-center'>
                        <button type='button' className='m-2 inline-flex items-center justify-center p-2'
                        onClick={() => setMobileOpen(!mobileOpen)}>
                            <span className="sr-only">open main menu</span>
                            { !mobileOpen &&  <Bars3Icon className="h-6 w-6" aria-hidden="true" /> }
                            { mobileOpen && <ChevronUpIcon className="h-6 w-6" aria-hidden="true" /> }
                        </button>
                    </div>


                    <Popover.Group className="hidden lg:flex lg:gap-x-12">
                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                {t('Learn')}
                                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
                                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                        {learnOptions.map((item) => (
                                            <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-violet-500/30 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-white group-hover:text-violet-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                { t(`${ item.name }`) }
                                                <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{ t(`${ item.description }`) }</p>
                                            </div>
                                            </div>
                                        ))}
                                        </div>
                                        <div className="grid grid-cols-2 divide-x divide-violet-900/5 bg-violet-50">
                                        {learnCTA.map((item) => (
                                            <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-violet-900 hover:bg-violet-100"
                                            >
                                            <item.icon className="h-5 w-5 flex-none text-violet-400" aria-hidden="true" />
                                            { t(`${ item.name }`) }
                                            </a>
                                        ))}
                                        </div>
                                    </Popover.Panel>
                            </Transition>
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                {t('Classes')}
                                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
                                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                        {classOptions.map((item) => (
                                            <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-violet-500/30 group-hover:bg-white">
                                                    <item.icon className="h-6 w-6 text-white group-hover:text-violet-600" aria-hidden="true" />
                                                </div>
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-semibold text-gray-900">
                                                    { t(`${ item.name }`) }
                                                    <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">{ t(`${ item.description }`) }</p>
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                        <div className="grid grid-cols-2 divide-x divide-violet-900/5 bg-violet-50">
                                        {classCTA.map((item) => (
                                            <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-violet-900 hover:bg-violet-100"
                                            >
                                            <item.icon className="h-5 w-5 flex-none text-violet-400" aria-hidden="true" />
                                            { t(`${ item.name }`) }
                                            </a>
                                        ))}
                                        </div>
                                    </Popover.Panel>
                            </Transition>
                        </Popover>
                        <Link href="/" className='text-sm font-semibold leading-6'>{t('Teachers')}</Link>
                    </Popover.Group>
                    

                    <div className='hidden lg:flex lg:flex-1 m-2 items-center justify-end text-sm font-semibold leading-6'>
                        <p className='text-indigo-900/50 m-2 p-2'>{t('Login')}</p>
                        <Link href="/class">
                            <button className='rounded-md bg-violet-600 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                                <p className='p-2.5'>{t('Book a Class')}</p>
                            </button>
                        </Link>
                    </div>

                </nav>

            { mobileOpen && 
                <div className='bg-white w-full'>
                        <div className='bg-violet-900 text-white w-full flex flex-row justify-center items-center'>
                            <LanguageIcon className='h-8 opacity-50' />
                            <p className="font-extrabold opacity-50 text-lg p-2">{ currentLang }</p>
                            <button onClick={() => {i18n.changeLanguage('en') }} className='p-2 text-sm font-bold rounded-xl opacity-80 hover:opacity-100 transition-all'> 🇺🇸 English</button>
                            <button onClick={() => {i18n.changeLanguage('cn') }} className='p-2 text-sm font-bold rounded-xl opacity-80 hover:opacity-100 transition-all'> 🇨🇳 中文</button>
                            <button onClick={() => {i18n.changeLanguage('es') }} className='p-2 text-sm font-bold rounded-xl opacity-80 hover:opacity-100 hover:bg-purple-600/5 transition-all'> 🇲🇽 Español</button>
                        </div>
                        <div className='flex flex-col justify-center items-center text-violet-900'>
                            <Link href="/beginner" className='p-2 m-2 font-extrabold text-lg'>{t('Learn')}</Link>
                            <Link href="/class" className='p-2 m-2 font-extrabold text-lg'>{t('Classes')}</Link>
                            <Link href="/" className='p-2 m-2 font-extrabold text-lg'>{t('Teachers')}</Link>
                        </div>
                    </div>
            }

            </header>
        </>
    )
}

export default Header;