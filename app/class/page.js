'use client';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useState, useEffect } from "react";
import { UserIcon, UserCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";

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
            <h1 className="text-3xl m-2 pt-6 font-extrabold text-white">Classes</h1>
            <div className="flex flex-row flex-wrap text-xl pb-6 font-bold text-white/79 text-center">
              <h2 className="text-xl p-2 font-bold text-white/70">Private Tutoring and Group Courses</h2>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center w-full m-2 p-2">
            <div className="flex flex-col justify-center items-center text-center p-2 m-2 bg-white rounded-md w-1/3">
              <div className="flex flex-row justify-center items-center text-center text-violet-900">
                <h1 className="text-3xl font-extrabold">Tutoring</h1>
                <UserIcon className="h-12 m-2" />
              </div>
              <h2 className="text-xl m-2 font-bold text-violet-900/90">200元 per 25 minute class</h2>
              <h2 className="text-xl m-2 font-bold text-violet-900/90">one student per class</h2>
              <button 
              onClick={() => document.getElementById("bookingcalendar").scrollIntoView()}
              className="p-2 m-2 rounded-md shadow-xl opacity-90 hover:opacity-100 transition-all font-bold text-white/90 bg-gradient-to-br from-violet-800 to-indigo-600">
                Book Class
              </button>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-2 m-2 bg-white rounded-md w-1/3">
              <div className="flex flex-row justify-center items-center text-center text-violet-900">
                <h1 className="text-3xl font-extrabold">Group Courses</h1>
                <UserGroupIcon className="h-12 m-2" />
              </div>
              <h2 className="text-xl m-2 font-bold text-violet-900/90">200元 per 50 minute class</h2>
              <h2 className="text-xl m-2 font-bold text-violet-900/90">up to 6 students per class</h2>
              <button className="p-2 m-2 rounded-md shadow-xl opacity-90 hover:opacity-100 transition-all font-bold text-white/90 bg-gradient-to-br from-violet-800 to-indigo-600">
                Join Course 
              </button>
            </div>
          </div>
          <div id="bookingcalendar" className="flex w-full justify-center items-center">
            <Cal calLink="armstrongenglish/25min" 
            style={{width:"100%",height:"100%",overflow:"scroll"}}
            config={{layout: 'month_view'}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class;