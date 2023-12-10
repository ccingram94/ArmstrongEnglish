'use client';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useState, useEffect } from "react";
import { UserIcon, UserCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";

function Class() {
  const [ seeCourses, setSeeCourses ] = useState(false);

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
              <h2 className="text-xl p-2 font-bold text-white/70">Tutoring and Group Courses</h2>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center w-full m-2 p-2">
            <div className="flex flex-col justify-center items-center text-center p-2 m-2 bg-white rounded-md w-full md:w-1/3">
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
            <div className="flex flex-col justify-center items-center text-center p-2 m-2 bg-white rounded-md w-full md:w-1/3">
              <div className="flex flex-row justify-center items-center text-center text-violet-900">
                <h1 className="text-3xl font-extrabold">Group Courses</h1>
                <UserGroupIcon className="h-12 m-2" />
              </div>
              <h2 className="text-xl m-2 font-bold text-violet-900/90">200元 per 50 minute class</h2>
              <h2 className="text-xl m-2 font-bold text-violet-900/90">up to 6 students per class</h2>
              <button onClick={() => document.getElementById("courselist").scrollIntoView()} className="p-2 m-2 rounded-md shadow-xl opacity-90 hover:opacity-100 transition-all font-bold text-white/90 bg-gradient-to-br from-violet-800 to-indigo-600">
                See Courses
              </button>
            </div>
          </div>
            <div id="courselist" className="flex flex-row flex-wrap w-full justify-center items-start">
              <h2 className="text-2xl m-2 p-2 text-white/90 font-extrabold">Group Courses Available Now</h2>
              <div className="flex flex-col w-full md:w-3/4 justify-center items-center bg-white rounded-md p-2 m-2">
                <div className="flex flex-row flex-wrap p-2 m-2">
                <div className="flex flex-col justify-center items-start text-start p-2 m-2">
                  <p className="text-xl text-violet-900 border-b-2 border-violet-600/20 font-bold">Ancient Western Literature</p>
                  <p className="text-sm text-violet-900/90 font-bold">Monday, Wednesday, and Friday</p>
                  <p className="text-sm text-violet-900/90 font-bold">8PM Beijing Time</p>
                  <div className="text-sm text-violet-900/90 font-bold pt-2">
                    <p>Intermediate Level (B1 and B2)</p>
                    <p>200元 per 50 Minute Class </p>
                    <p>Total Tuition: 2,400元 </p>
                    <p>Online via ClassIn </p>
                  </div>
                  <button className="p-2 m-4 rounded-md shadow-xl opacity-90 hover:opacity-100 transition-all font-bold text-white/90 bg-gradient-to-br from-violet-800 to-indigo-600">
                    Register for Course
                  </button>
                </div>
                <div className="p-2 m-2">
                  <p className="text-xl text-violet-900 font-bold ">Course Schedule</p>
                  <div className="text-violet-900/90 text-sm p-2 m-2">
                    <p>Class 1 (Monday, January 8): Ancient Western Mythology (prehistory)</p>
                    <p>Class 2 (Wednesday, January 10): The Epic of Gilgamesh (1300 BC)</p>
                    <p>Class 3 (Friday, January 12): Hesiod and Greek Poetry (800 BC)</p>
                    <p>Class 4 (Monday, January 15): The Illiad by Homer (800 BC)</p>
                    <p>Class 5 (Wednesday, January 17): The Odyssey by Homer (800 BC)</p>
                    <p>Class 6 (Friday, January 19): Histories by Herodotus (440 BC)</p>
                    <p>Class 7 (Monday, January 22): Greek Philosophy and Socrates (600 - 450 BC)</p>
                    <p>Class 8 (Wednesday, January 24): Plato and Aristotle (450 - 350 BC)</p>
                    <p>Class 9 (Friday, January 26): The Aeneid by Virgil (19 BC)</p>
                    <p>Class 10 (Monday, January 29): The Metamorphoses by Ovid (8 AD)</p>
                    <p>Class 11 (Wednesday, January 31): Meditations by Marcus Aurelius (180 AD)</p>
                    <p>Class 12 (Monday, February 5): Final Essay Discussion Group</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="bookingcalendar" className="flex flex-row flex-wrap w-full justify-center items-start">
              <h2 className="text-2xl m-2 p-2 text-white/90 font-extrabold">Tutoring Calendar</h2>
            </div>
            <div className="flex w-full justify-center items-center p-2 m-2">
              <Cal calLink="armstrongenglish/25min" 
              style={{width:"100%",height:"100%",overflow:"scroll"}}
              config={{layout: 'month_view'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class;