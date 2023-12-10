'use client';

import Image from 'next/image';
import { UserCircleIcon} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

function TeachersSection() {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-violet-900 w-full">
      <div className='flex flex-wrap items-start p-8 text-white w-full bg-violet-900/60'>
        {/* Teacher profile card */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-6">
              <h2 className='text-violet-900 pt-4 font-extrabold text-center text-2xl'>{t('Teacher')}</h2>
              <h2 className="text-xl text-violet-900 opacity-80 md:text-2xl font-semibold text-center">Mrs. Armstrong</h2>
              <div className='flex flex-row flex-wrap justify-center items-center p-2 m-2'>
                  <Image src={'https://d20etpig7obrzj.cloudfront.net/headshot.jpeg'} width={150} height={150} className='rounded-full shadow-xl m-2' />
                  <Image src={'https://d20etpig7obrzj.cloudfront.net/utaustin.jpg'} width={150} height={150} className='rounded-full shadow-xl m-2' />
              </div>
              <p className="text-violet-900 opacity-80 max-w-lg text-justify text-sm md:text-base m-2 p-2">
              {t('teacherbio')}
              </p>
              <div className='flex flex-row flex-wrap justify-center items-center m-2'>
                <Image src={'https://d20etpig7obrzj.cloudfront.net/teyl.jpg'} width={300} height={180} className='rounded-md w-1/4 w-auto shadow-xl m-2' />
                <Image src={'https://d20etpig7obrzj.cloudfront.net/tefl120.jpg'} width={300} height={180} className='rounded-md w-1/4 w-auto shadow-xl m-2'  />
                <Image src={'https://d20etpig7obrzj.cloudfront.net/tefl160.jpg'} width={300} height={180} className='rounded-md w-1/4 w-auto shadow-xl m-2'  />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-6">
              <h2 className='text-violet-900 pt-4 font-extrabold text-center text-2xl'>Testimonials</h2>
              <h2 className="text-xl text-violet-900 opacity-80 md:text-2xl font-semibold text-center">Student Messages</h2>
            </div>
          </div>
      </div>
    </div>
  );
}

export default TeachersSection;