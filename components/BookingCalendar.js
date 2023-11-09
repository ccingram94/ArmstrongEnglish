'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import { format, parse, addMinutes, setHours, formatDistance, formatRelative, subDays, addDays, toDate } from 'date-fns';

function BookingCalendar() {
  const [value, onChange] = useState(new Date());

  const slot1 = setHours(value, 11)
  const slot2 = addMinutes(slot1, 30)
  const slot3 = addMinutes (slot2, 30)
  const slot4 = addMinutes(slot3, 30)

  return (
    <>
      <div className='w-full flex flex-row flex-wrap md:basis-1/2 m-2 drop-shadow-2xl rounded-xl bg-white justify-center items-center content-center'>
        <Calendar onChange={onChange} value={value} className="p-4 rounded-xl m-2"
          maxDate={addDays(new Date(), 30)} minDate={ new Date() }
        />
      </div>
      <div className="p-2 m-2 flex flex-col w-full md:basis-1/3 justify-center text-center h-full bg-white rounded-xl shadow-2xl">
        <h2 className="p-2 text-3xl font-extrabold text-violet-800">{ format(value, 'iiii') }</h2>
        <h2 className="p-2 text-3xl font-extrabold text-violet-800">{ format(value, 'MMMM d, yyyy') }</h2>
        <p className="p-2 font-bold text-violet-800/80">classes available today:</p>
        <div className='bg-violet-900 text-white p-2 m-2'>
          <p className='p-2'>{format(slot1, 'hh:mm a')}</p>
        </div>
        <div className='bg-violet-900 text-white p-2 m-2'>
          <p className='p-2'>{format(slot2, 'hh:mm a')}</p>
        </div>
        <div className='bg-violet-900 text-white p-2 m-2'>
          <p className='p-2'>{format(slot3, 'hh:mm a')}</p>
        </div>
        <div className='bg-violet-900 text-white p-2 m-2'>
          <p className='p-2'>{format(slot4, 'hh:mm a')}</p>
        </div>
      </div>
    </>
  );
}

export default BookingCalendar;