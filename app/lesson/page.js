'use client';
import Image from "next/image";
import Link from "next/link";
import BookingCalendar from "../../components/BookingCalendar";
import { LockClosedIcon, PlayCircleIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowUturnLeftIcon, BookOpenIcon } from "@heroicons/react/20/solid";
import { useTranslation } from 'react-i18next';
import a1_lessons from '../../data'
import a1data from "../../a1data";
import a1grammardata from "../../a1grammardata";

function Lesson() {
  const { t, i18n } = useTranslation();
  const vocablist = a1data[0].vocab;
  return (
    <>
    <div className="flex flex-col lg:flex-row bg-violet-900 w-full text-center">
      <div className="w-full lg:w-1/3 flex flex-col justify-center items-center text-center bg-violet-50 text-violet-900 p-2">
        <p className="font-bold">Level 1 Lesson 1</p>
        <h2 className="text-3xl font-extrabold p-2 m-2">Lesson Name</h2>
        <p className="font-bold">Lesson Description Translation Etc</p>
        <div className="flex flex-row justify-center items-center p-2 m-2">
          <button className="flex flex-row justify-center items-center text-center bg-violet-200/90 text-violet-900 rounded-md p-2 m-2">
            <ArrowLeftCircleIcon className="h-8 p-1" />
            <p>Last Lesson</p>
          </button>
          <button className="flex flex-row justify-center items-center text-center bg-violet-200/90 text-violet-900 rounded-md p-2 m-2">
            <p>Next Lesson</p>
            <ArrowRightCircleIcon className="h-8 p-1" />
          </button>
        </div>
      </div>
      <div className="w-full lg:w-2/3 bg-hero bg-cover bg-center">
        <div className="flex flex-col justify-center items-center w-full h-max bg-violet-600/80">
          <div className="flex flex-row flex-wrap justify-center items-center text-center w-2/3 h-full md:h-96 bg-white text-violet-900 rounded-sm shadow-xl p-4 m-6">
            <Image src={'https://d20etpig7obrzj.cloudfront.net/tefl160.jpg'} width={300} height={300} className='rounded-md m-1 shadow-xl'  />
            <div className="flex flex-col p-2 m-2 justify-center items-center text-center">
              <p className="font-extrabold text-3xl p-2 m-2">Vocabulary</p>
              <p className="font-bold text-2xl opacity-90">translation</p>
              <PlayCircleIcon className="h-16 m-2" />
            </div>
          </div>
        </div>
      </div>
      <div>
    </div>
  </div>
  <div className="flex flex-col justify-center items-center text-center bg-violet-900 w-full">
    <h2 className="p-2 m-4 text-3xl text-white font-extrabold">Vocabulary Words</h2>
    <div className="flex flex-row flex-wrap justify-center items-center text-center p-2 m-4">
    { vocablist.map((vocabword) => (
                <div className="bg-white/90 rounded-xl shadow-xl p-4 m-2">
                  <p className="text-xl font-extrabold text-violet-900 p-2 m-2">
                  { vocabword }
                  </p>
                </div>
            ))}
    </div>
  </div>
  </>
  );
}

export default Lesson;