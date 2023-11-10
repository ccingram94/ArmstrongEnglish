'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import { parse, set, addMinutes, setHours, formatISO, formatDistance, formatRelative, subDays, addDays, toDate } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';

function BookingCalendar() {
  const [value, onChange] = useState(new Date());
  console.log( formatISO(value) )
  

  const slot1 = value
  const slot2 = addMinutes(slot1, 30)
  const slot3 = addMinutes (slot2, 30)
  const slot4 = addMinutes(slot3, 30)
  const isoDate = value;
  const timeZone = value;

  return (
    <>
      <div className='w-full flex flex-row flex-wrap md:basis-1/2 m-2 drop-shadow-2xl rounded-xl bg-white justify-center items-center content-center'>
        <Calendar onChange={onChange} value={value} className="p-4 rounded-xl m-2"
          maxDate={addDays(new Date(), 60)} minDate={ addDays(new Date(), 1) }
        />
      </div>
      <div className="p-2 m-2 flex flex-col w-full md:basis-1/3 justify-center text-center h-full bg-white rounded-xl shadow-2xl">
        <h2 className="p-2 text-3xl font-extrabold text-violet-800">{ format(value, 'iiii') }</h2>
        <h2 className="p-2 text-3xl font-extrabold text-violet-800">{ format(value, 'MMMM d, yyyy') }</h2>
        <p className="p-2 font-bold text-violet-800/80">classes available today:</p>
        <div className='bg-violet-900 text-white p-2 m-2'>
          <p className='p-2'>{format(slot1, 'p z')}</p>
        </div>
        <div className='bg-violet-900 text-white p-2 m-2'>
          <p className='p-2'>{ format(slot2, 'p z') }</p>
        </div>
        <div className='bg-violet-900 text-white p-2 m-2'>
          <p className='p-2'>{format(slot3, 'p z')}</p>
        </div>
        <div className='bg-violet-900 text-white p-2 m-2'>
          <p className='p-2'>{format(slot4, 'p z')}</p>
        </div>
      </div>
    </>
  );
}

export default BookingCalendar;