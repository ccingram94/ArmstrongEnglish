'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import { format, add, formatDistance, formatRelative, subDays, addDays } from 'date-fns';


function BookingCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='w-full md:basis-1/2 m-2 drop-shadow-2xl rounded-xl bg-white justify-center items-center content-center'>
      <Calendar onChange={onChange} value={value} className="p-4 rounded-xl m-2"
        maxDate={addDays(new Date(), 30)} minDate={ new Date() }
       />
    </div>
  );
}

export default BookingCalendar;