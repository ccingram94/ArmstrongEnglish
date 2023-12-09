'use client';
import Link from "next/link";
import Image from "next/image";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useTranslation } from 'react-i18next';
import a1_lessons from '../../data'
import a1data from "../../a1data";
import a1grammardata from "../../a1grammardata";

function Beginner() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-hero bg-cover bg-center w-full">
      <div className="w-full min-h-screen bg-violet-900/90 text-center items-center">

        <div className="w-full h-full">
          <div className="">
          <h1 className="text-4xl p-2 pt-12 font-extrabold text-white">{t('Beginner Lessons')}</h1>
          <h2 className="text-xl font-bold text-white/70">{t('CEFR Levels A1 and A2')}</h2>
          </div>
        </div>

        <div className="h-full flex flex-row flex-wrap justify-center p-2">
          <div className="flex flex-col h-full lg:w-1/2 text-center items-center justify-center">
            <h3 className="text-xl pt-4 m-2 font-bold text-white">{t('Level A1 Lessons')} </h3>
            <p className="text-sm max-w-md m-2 font-bold text-white/90">{t('CEFR A1 is the first step in learning English.  Students can understand and use basic words and sentences for everyday conversations.')} </p>
            <div className="flex flex-wrap justify-center container mx-auto w-fit">
            { Object.keys(a1data).map((key, index) => (
                  <Link href={"/lesson/" + index} className="w-3/4 md:w-1/4 p-2 m-2 rounded-md flex flex-row md:flex-col justify-start items-center text-start md:text-center bg-white/90 hover:bg-white transition-all" key={index}>
                    <Image width={100} height={100} src={a1data[key].image} className="m-2 rounded-full" />
                    <div className="flex flex-col justify-center items-center text-center p-2 m-2">
                      <p className="text-xl font-extrabold text-purple-900 ">
                      { a1data[key].title }
                      </p>
                      <p className="text-sm font-bold text-purple-900/80">
                        {t(`${a1data[key].title}`)}
                      </p>
                    </div>
                  </Link>
              ))}
            </div>
            <div className="flex flex-wrap justify-center container mx-auto w-fit m-2">
            { Object.keys(a1grammardata).map((key, index) => (
                  <div className="bg-white/90 rounded-xl shadow-xl p-2 m-2" key={index}>
                    <p className="text-lg font-bold p-2 text-violet-700">
                    { a1grammardata[key].title }
                    </p>
                  </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col h-full lg:w-1/2 text-center items-center">
            <h3 className="text-xl p-4 m-2 font-bold text-white">{t('Level A2 Lessons')}</h3>
            <p className="text-sm max-w-md p-2 m-2 font-bold text-white/90">{t('CEFR A2 is the next level of English language learning, where learners can handle simple, everyday tasks and have basic conversations about familiar topics.')} </p>
            <h3 className="text-xl font-bold text-indigo-100/70">{t('Coming Soon')}</h3>
            <div className="flex flex-wrap pb-12 justify-center container mx-auto w-fit">
              <LockClosedIcon className="h-32 m-4 text-indigo-100/70" />
            </div>
          </div>
        </div>
      </div>
      
      
      <div>
    </div>
  </div>
  );
}

export default Beginner;