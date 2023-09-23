'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';


function BookingCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='flex items-center justify-center drop-shadow-2xl py-8 px-4 rounded-xl bg-white h-full w-full lg:w-[50vw] rounded-xl flex flex-col justify-center items-center'>
      <Calendar className="z-[-10]" onChange={onChange} value={value}
      minDate={new Date(now())}
       />
    </div>
  );
}

export default BookingCalendar;