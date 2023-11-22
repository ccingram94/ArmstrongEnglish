'use client';
import axios from 'axios';
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
    <div className='w-full flex flex-row flex-wrap justify-center text-center items-start'>
      <div className='w-full lg:w-1/3 flex flex-row flex-wrap m-2 lg:p-2 drop-shadow-2xl rounded-xl bg-white justify-center items-center content-center'>
        <Calendar onChange={onChange} value={value} className="p-4 rounded-xl m-2"
          maxDate={addDays(new Date(), 60)} minDate={ addDays(new Date(), 1) }
        />
      </div>
      <div className='w-full md:w-1/4 flex flex-col m-2 p-2 drop-shadow-2xl rounded-xl bg-white justify-center items-center content-center'>
        <h3 className='text-xl lg:text-2xl font-extrabold text-violet-900 p-2 m-2'>Classes Today</h3>
        <button className='p-2 m-2 lg:text-xl font-extrabold text-white bg-violet-900 rounded-xl drop-shadow-xl opacity-80 hover:opacity-100 transition-all'>
          Option 1
        </button>
      </div>
      <div className='w-full md:w-1/4 flex flex-col m-2 p-2 drop-shadow-2xl rounded-xl bg-white justify-center items-center text-center'>
        <h3 className='text-xl lg:text-2xl font-extrabold text-violet-900 p-2 m-2'>Selected Classes</h3>
        <p className='lg:text-xl font-bold text-violet-900/90 p-2 m-2'>no classes selected</p>
        <button className='p-2 m-2 lg:text-xl font-extrabold text-white bg-gradient-to-br from-violet-800 to-indigo-800 rounded-xl opacity-80 hover:opacity-100 transition-all drop-shadow-xl'>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default BookingCalendar;