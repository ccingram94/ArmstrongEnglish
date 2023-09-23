'use client';

import Link from 'next/link';
import { CheckCircleIcon, AcademicCapIcon, LightBulbIcon, BoltIcon } from '@heroicons/react/24/outline';
import { Popover, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

function TestHero() {
    function Feature({ icon, text }) {
        return (
          <div className="flex items-start justify-start text-start p-4 m-2">
            <span className="m-2">{icon}</span>
            <p className="font-semibold text-white m-2">{text}</p>
          </div>
        );
      }

    return (
      <section className="w-full bg-gradient-to-br from-violet-800 to-indigo-900 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-center text-center">
        <div className="bg-gradient-to-br from-violet-800 to-indigo-900 text-white py-14">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column */}
        <div className="flex flex-col text-center justify-center lg:justify-start lg:text-left w-full lg:w-1/2">
          <h2 className="p-2 m-2 text-3xl sm:text-4xl font-semibold">
            Ready to Test Your English Skills?
          </h2>
          <p className="px-12 lg:p-2 m-2 text-center lg:text-start">
            try our free online English test and get immediate scores
          </p>
          <Link href="/freeenglishtest">
            <p className="p-2 m-2 mt-6 inline-block bg-violet-600 px-6 py-3 rounded-lg text-lg sm:text-xl font-semibold text-white hover:bg-violet-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Start Test
            </p>
          </Link>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 m-6">
          <Feature 
            icon={<CheckCircleIcon className="h-8 w-8 text-violet-300" />}
            text="get an English level placement from CEFR Levels A1 to C2"
          />
          <Feature 
            icon={<AcademicCapIcon className="h-8 w-8 text-violet-300" />}
            text="comprehensive test of reading, writing, and grammar"
          />
          <Feature 
            icon={<LightBulbIcon className="h-8 w-8 text-violet-300" />}
            text="immediate results with detailed diagnostic"
          />
          <Feature 
            icon={<BoltIcon className="h-8 w-8 text-violet-300" />}
            text="fast and free"
          />
        </div>
      </div>
    </div>
        </div>
      </section>
    );
  }
  
  export default TestHero;