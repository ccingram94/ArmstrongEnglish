'use client';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useState, useEffect } from "react";

function Class() {
  const [ loading, setLoading ] = useState(true);
  const [ scheduled, setScheduled ] = useState(false);
  const [ classInfo, setClassInfo ] = useState('');

  useEffect(()=>{
	  (async function () {
		const cal = await getCalApi();
		cal("ui", {"styles":{"branding":{"brandColor":"#9e2aff"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])


  return (
    <div className="bg-hero bg-cover bg-center w-full">
      <div className="w-full h-full bg-violet-900/90 min-h-screen">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-3xl p-2 pt-6 font-extrabold text-white">Book a Class</h1>
            <h2 className="text-xl p-2 font-bold text-white/70">One Class (25 Minutes) 200元</h2>
          </div>
          <Cal calLink="armstrongenglish/25min"
	        style={{width:"100%",height:"100%",overflow:"scroll"}}
	        config={{layout: 'month_view'}} />
        </div>
      </div>
    </div>
  );
}

export default Class;