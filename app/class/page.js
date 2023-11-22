'use client';
import { useState } from 'react';
import { InlineWidget } from "react-calendly";

function Class() {
  const [ loading, setLoading ] = useState(true);
   
  function isCalendlyEvent(e) {
    return e.data.event;
  };
   
  window.addEventListener(
    'message',
    function(e) {
      if (isCalendlyEvent(e)) {
        console.log(e.data);
      }
      if (e.data.event == 'calendly.event_type_viewed') {
        setLoading(false);
      }
    }
  );

  return (
    <div className="bg-hero bg-cover bg-center w-full">
      <div className="w-full h-full bg-violet-900/90 min-h-screen">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-3xl p-2 pt-6 font-extrabold text-white">Book a Class</h1>
            <h2 className="text-xl p-2 font-bold text-white/70">One Class (25 Minutes) $25</h2>
          </div>
          { loading && <p className='bg-white w-fit rounded-md drop-shadow-xl p-6 text-violet-900 text-2xl font-extrabold text-center'>Loading Calendar...</p>}
        </div>
        <InlineWidget url="https://calendly.com/constanceingram94/25min" />
      </div>
    </div>
  );
}

export default Class;