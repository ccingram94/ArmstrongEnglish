'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react'

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
    { name: 'Beginner', description: 'CEFR Level A1 and A2', href: '#', icon: ChatBubbleLeftIcon },
    { name: 'Intermediate', description: 'CEFR Level B1 and B2', href: '#', icon: ChatBubbleLeftEllipsisIcon },
    { name: 'Advanced', description: 'CEFR Level C1 and C2', href: '#', icon: ChatBubbleLeftRightIcon },
    { name: 'Online Class', description: 'study with our teachers', href: '#', icon: AcademicCapIcon },
  ]
  const learnCTA = [
    { name: 'Videos', href: '#', icon: PlayCircleIcon },
    { name: 'Practice', href: '#', icon: BookOpenIcon },
  ]

const classOptions = [
    { name: 'Tutoring', description: '1-on-1 online classes (25 or 50 minutes)', href: '#', icon: UserIcon },
    { name: 'Group Courses', description: 'up to 6 students per class (50 minutes)', href: '#', icon: UserGroupIcon },
]

  const classCTA = [
    { name: 'Teachers', href: '#', icon: LanguageIcon },
    { name: 'Book a Class', href: '#', icon: CalendarDaysIcon },
  ]


function Header () {
    const [ mobileOpen, setMobileOpen ] = useState(false)
    return (
        <>
            <div className='flex w-full justify-between items-center bg-gradient-to-br from-purple-900 to-violet-800 text-white z-2'>
                <div className='flex flex-auto justify-center items-center hidden lg:flex'>
                    <MapPinIcon className='h-4 w-auto m-2'/>
                    <p className='font-bold text-sm'>United States + Online </p>
                </div>
                <div className="flex flex-auto justify-center items-center hidden lg:flex">
                    <AcademicCapIcon className='h-4 w-auto m-2' />
                    <p className="font-bold text-sm">classes available now </p>
                    <button className='bg-white hover:bg-opacity-100 bg-opacity-80 transition-all rounded-full mx-2'>
                        <p className="font-bold text-sm text-purple-900 px-2 transition-all">see calendar</p>
                    </button>
                </div>
                <div className="flex flex-auto justify-center items-center">
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
            
            <header className="top-0 w-full sticky bg-white drop-shadow-2xl">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6">

                    <div className="flex lg:flex-1 items-center">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Armstrong English</span>
                            <ChatBubbleLeftRightIcon className="h-8 w-auto text-purple-900" />
                        </a>
                    </div>

                    <div className='flex lg:hidden items-center'>
                        <button type='button' className='m-2 inline-flex items-center justify-center p-2'
                        onClick={() => setMobileOpen(true)}>
                            <span className="sr-only">open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <Popover.Group className="hidden lg:flex lg:gap-x-12">
                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                Learn
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
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-purple-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                            </div>
                                        ))}
                                        </div>
                                        <div className="grid grid-cols-2 divide-x divide-purple-900/5 bg-purple-50">
                                        {learnCTA.map((item) => (
                                            <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-purple-900 hover:bg-purple-100"
                                            >
                                            <item.icon className="h-5 w-5 flex-none text-purple-400" aria-hidden="true" />
                                            {item.name}
                                            </a>
                                        ))}
                                        </div>
                                    </Popover.Panel>
                            </Transition>
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                Classes
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
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-purple-600" aria-hidden="true" />
                                                </div>
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                        <div className="grid grid-cols-2 divide-x divide-purple-900/5 bg-purple-50">
                                        {classCTA.map((item) => (
                                            <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-purple-900 hover:bg-purple-100"
                                            >
                                            <item.icon className="h-5 w-5 flex-none text-purple-400" aria-hidden="true" />
                                            {item.name}
                                            </a>
                                        ))}
                                        </div>
                                    </Popover.Panel>
                            </Transition>
                        </Popover>
                        <Link href="/" className='text-sm font-semibold leading-6'>Teachers</Link>
                    </Popover.Group>
                    

                    <div className='hidden lg:flex lg:flex-1 m-2 items-center justify-end text-sm font-semibold leading-6'>
                        <p className='text-indigo-900 m-2'>Login</p>
                        <button className='bg-gradient-to-br from-purple-900 to-violet-800 text-white rounded-full mx-2'>
                            <p className='p-2'>Book a Class</p>
                        </button>
                        
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Header;