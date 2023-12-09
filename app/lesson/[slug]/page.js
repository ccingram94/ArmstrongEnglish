'use client';
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { LockClosedIcon, PlayCircleIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowUturnLeftIcon, BookOpenIcon } from "@heroicons/react/20/solid";
import { useTranslation } from 'react-i18next';
import a1_lessons from '../../../data'
import a1data from "../../../a1data";
import a1grammardata from "../../../a1grammardata";

function Lesson({ params } ) {
  console.log(params.slug)
  const { t, i18n } = useTranslation();
  const lesson = a1data[params.slug];
  const vocablist = lesson.vocab;
  const [ currentWord, setCurrentWord ] = useState(vocablist[0])
  const [ currentTranslation, setCurrentTranslation ] = useState(vocablist[0])
  return (
    <>
    <div className="flex flex-col lg:flex-row bg-violet-900 w-full text-center">
      <div className="w-full lg:w-1/3 flex flex-col justify-center items-center text-center bg-violet-50 text-violet-900 p-2">
        <p className="font-bold pt-12">Lesson {lesson.id}</p>
        <h2 className="text-3xl font-extrabold p-2 m-2">{lesson.title}</h2>
        <div className='text-sm p-2 m-2'>
          <p className='p-2'>{lesson.lessontext}</p>
        </div>
      </div>
      <div className="w-full lg:w-2/3 bg-hero bg-cover bg-center">
        <div className="flex flex-col justify-center items-center w-full h-max bg-violet-600/80">
          <div className="flex flex-row flex-wrap justify-center items-center text-center w-2/3 h-full md:h-96 bg-white text-violet-900 rounded-sm shadow-xl p-4 m-6">
            <div className="flex flex-col p-2 m-2 justify-center items-center text-center">
              <p className="font-extrabold text-6xl m-2">{currentWord}</p>
              <p className="font-bold text-2xl opacity-90 m-2">{currentTranslation}</p>
              <PlayCircleIcon className="h-16 m-2 opacity-90 hover:opacity-100 transition-all drop-shadow-xl m-6" />
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
                <div className="bg-white/90 rounded-xl shadow-xl p-6 m-2">
                  <p className="text-xl font-extrabold text-violet-900 p-2 m-2">
                  { vocabword }
                  </p>
                </div>
            ))}
    {
      
    }
    </div>
  </div>
  </>
  );
}

export default Lesson;