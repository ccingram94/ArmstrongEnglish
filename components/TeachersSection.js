'use client';

import Image from 'next/image';
import { UserCircleIcon} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import utaustin from '../public/utaustin.jpg';
import teyl from '../public/teyl.jpg';
import tefl120 from '../public/tefl120.jpg';
import tefl150 from '../public/tefl160.jpg';

function TeachersSection() {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-hero bg-cover bg-center w-full">
      <div className='flex flex-wrap items-start p-8 text-white w-full bg-violet-900/60'>
        {/* Teacher profile card */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className='text-violet-900 p-2 m-2 font-extrabold text-center text-2xl'>{t('Teacher')}</h2>
              <div className='flex flex-row flex-wrap justify-center items-center p-2 m-2'>
                <div>
                  <Image src={utaustin} width={150} height={150} className='rounded-full shadow-xl' />
                </div>
                <div>
                  <UserCircleIcon className="h-40 w-auto mx-auto text-violet-600 opacity-80" />
                </div>
              </div>
              <h2 className="text-xl text-violet-900 opacity-80 md:text-2xl font-semibold text-center mt-4">Mrs. Armstrong</h2>
              <p className="text-violet-900 opacity-80 text-center text-sm md:text-base m-2 p-2">
              {t('teacherbio')}
              </p>
            </div>
          </div>
          <div className='flex flex-row flex-wrap justify-center items-center lg:w-1/2'>
            <Image src={teyl} width={500} height={300} className='rounded-md m-1 h-48 w-auto shadow-xl' />
            <Image src={tefl120} width={500} height={300} className='rounded-md m-1 h-48 w-auto shadow-xl'  />
            <Image src={tefl150} width={500} height={300} className='rounded-md m-1 h-48 w-auto shadow-xl'  />
          </div>
      </div>
    </div>
  );
}

export default TeachersSection;