'use client';
import BookingCalendar from "../../components/BookingCalendar";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useTranslation } from 'react-i18next';
import a1_lessons from '../../data'
import a1data from "../../a1data";
import a1grammardata from "../../a1grammardata";

function Beginner() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-gradient-to-br from-indigo-800 to-violet-800 w-full text-center justify-center items-center">
      <div className="container mx-auto">
        <h1 className="text-3xl p-2 pt-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-100 to-indigo-100">{t('Beginner Lessons')}</h1>
        <h2 className="text-xl p-2 font-bold text-indigo-100/70">{t('CEFR Levels A1 and A2')}</h2>
      </div>
      <div className="h-full flex flex-row flex-wrap justify-center p-2 m-2">
        <div className="h-full lg:w-1/2">
          <h3 className="text-xl p-4 m-2 font-bold text-indigo-100/90">{t('Level A1 Lessons')} </h3>
          <p className="text-sm p-2 m-2 font-bold text-indigo-100">{t('CEFR A1 is the first step in learning English.  Students can understand and use basic words and sentences for everyday conversations.')} </p>
          <div className="flex flex-wrap justify-center container mx-auto w-fit">
          { Object.keys(a1data).map((key, index) => (
                <div className="bg-white/90 rounded-xl shadow-xl p-6 m-2" key={index}>
                  <p className="text-sm font-extrabold text-indigo-700/80">
                  {t('Lesson')} { a1data[key].id }
                  </p>
                  <p className="text-xl font-extrabold text-indigo-700">
                  { a1data[key].title }
                  </p>
                  <p className="text-sm font-bold text-indigo-700/50">
                    {t(`${a1data[key].title}`)}
                  </p>
                </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center container mx-auto w-fit m-2">
          { Object.keys(a1grammardata).map((key, index) => (
                <div className="bg-white/90 rounded-xl shadow-xl p-2 m-2" key={index}>
                  <p className="text-lg font-bold p-2 text-indigo-700">
                  { a1grammardata[key].title }
                  </p>
                </div>
            ))}
          </div>
        </div>
        <div className="h-full lg:w-1/2">
          <h3 className="text-xl p-4 m-2 font-bold text-indigo-100/90">{t('Level A2 Lessons')}</h3>
          <p className="text-sm p-2 m-2 font-bold text-indigo-100">{t('CEFR A2 is the next level of English language learning, where learners can handle simple, everyday tasks and have basic conversations about familiar topics.')} </p>
          <h3 className="text-xl font-bold text-indigo-100/70">{t('Coming Soon')}</h3>
          <div className="flex flex-wrap pb-12 justify-center container mx-auto w-fit">
            <LockClosedIcon className="h-32 m-4 text-indigo-100/70" />
          </div>
        </div>
      </div>
      <div>
    </div>
  </div>
  );
}

export default Beginner;