'use client';
import { useState } from 'react';
import { InlineWidget } from "react-calendly";

function Class() {
  const [ loading, setLoading ] = useState(true);
  const [ scheduled, setScheduled ] = useState(false);
  const [ classInfo, setClassInfo ] = useState('');
   
  function isCalendlyEvent(e) {
    return e.data.event;
  }
   
  window.addEventListener(
    'message',
    function(e) {
      if (isCalendlyEvent(e)) {
        console.log(e.data);
      }
      if (e.data.event == 'calendly.event_type_viewed') {
        setLoading(false);
      }
      if (e.data.event == 'calendly.event_scheduled') {
        setClassInfo(e.data.payload.event.uri)
        setScheduled(true);
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
          { scheduled && 
            <div className="bg-white text-center rounded-md drop-shadow-xl p-6 text-violet-900">
              <p className='text-2xl font-extrabold'>Class Scheduled</p>
              <p className='text-xl font-bold'>Please save your class information.</p>
              <p>{ classInfo }</p>
              <div className='flex flex-row flex-wrap justify-center items-center text-center p-2 m-2'>
                <div className='p-2'>
                  <p className='text-xl font-extrabold'>Payment</p>
                  <p>Click the button below or scan the QR code to be taken to the payment page.
                    Unpaid classes will be cancelled.
                  </p>
                </div>
                <div className='p-2'>
                  <p className='text-xl font-extrabold'>Join ClassIn</p>
                  <p>Click the button below or scan the QR code to join Mrs. Armstrong on ClassIn.
                    All classes are delivered online via ClassIn.
                  </p>
                </div>
              </div>
            </div>
          }
        </div>
        <InlineWidget url="https://calendly.com/constanceingram94/25min" />
      </div>
    </div>
  );
}

export default Class;