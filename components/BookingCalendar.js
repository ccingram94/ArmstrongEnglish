'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import { format, add, formatDistance, formatRelative, subDays, addDays } from 'date-fns';


function BookingCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='flex static drop-shadow-2xl py-8 px-4 rounded-xl bg-white h-full w-full md:w-[50vw] rounded-xl justify-center items-center'>
      <Calendar onChange={onChange} value={value}
        maxDate={addDays(new Date(), 30)} minDate={ new Date() }
       />
    </div>
  );
}

export default BookingCalendar;