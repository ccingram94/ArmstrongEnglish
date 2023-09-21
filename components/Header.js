'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    ChatBubbleLeftRightIcon,
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
  } from '@heroicons/react/24/outline';

function Header () {
    const [ mobileOpen, setMobileOpen ] = useState(false)
    return (
        <>
            <header className="bg-white bg-opacity-20">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6">

                    <div className="flex items-center">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Armstrong English</span>
                            <ChatBubbleLeftRightIcon className="h-8 w-auto" />
                        </a>
                    </div> 

                    <div className='hidden lg:flex items-center justify-center'>
                        <h2 className='p-2'>Learn</h2>
                        <h2 className='p-2'>Classes</h2>
                        <h2 className='p-2'>About</h2>
                    </div>

                    <div className='flex lg:hidden items-center'>
                        <button type='button' className='m-2 inline-flex items-center justify-center p-2'
                        onMouseOver={() => setMobileOpen(true)}>
                            <span className="sr-only">open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className='hidden lg:flex m-2 items-center'>
                        <p className='p-2'>Login</p>
                        <button className='bg-black text-white rounded-full'>
                            <p className='p-2'>Book a Class</p>
                        </button>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Header;