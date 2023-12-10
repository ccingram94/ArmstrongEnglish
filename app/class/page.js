'use client';
import Image from 'next/image';
import Link from 'next/link';
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
                <div className="flex flex-row flex-wrap justify-center items-center p-2 m-2">
                  <div className="flex flex-col justify-center items-center text-center p-2 m-2">
                    <p className="text-xl text-violet-900 border-b-2 border-violet-600/20 font-bold">Ancient Western Literature</p>
                    <p className="text-sm text-violet-900/90 font-bold">Monday, Wednesday, and Friday</p>
                    <p className="text-sm text-violet-900/90 font-bold">8PM Beijing Time</p>
                    <div className="text-sm text-violet-900/90 font-bold pt-2">
                      <p>Intermediate Level (B1 and B2)</p>
                      <p>200元 per 50 Minute Class </p>
                      <p>Total Tuition: 2,400元 </p>
                      <p>Online via ClassIn </p>
                    </div>
                    <Link href="https://buy.stripe.com/9AQg042cy6h36Vq6oo">
                      <button className="p-2 m-4 rounded-md shadow-xl opacity-90 hover:opacity-100 transition-all font-bold text-white/90 bg-gradient-to-br from-violet-800 to-indigo-600">
                        Register for Course
                      </button>
                    </Link>
                    <p className="text-violet-900 text-sm p-2 m-2">or scan the QR Code below:</p>
                    <Image src={'https://d20etpig7obrzj.cloudfront.net/westernlit.png'} width={150} height={150}  />
                  </div>
                  <div className="flex flex-col max-w-lg p-2 m-2">
                    <p className="text-xl text-violet-900 font-bold ">Course Schedule</p>
                    <div className="text-violet-900/90 text-sm p-2 m-2">
                      <p className='p-2'>January 8 (Monday): Ancient Western Mythology</p>
                      <p className='p-2'>January 10 (Wednesday): The Epic of Gilgamesh</p>
                      <p className='p-2'>January 12 (Friday): Hesiod and Greek Poetry</p>
                      <p className='p-2'>January 15 (Monday): The Illiad by Homer</p>
                      <p className='p-2'>January 17 (Wednesday): The Odyssey by Homer</p>
                      <p className='p-2'>January 19 (Friday): Histories by Herodotus</p>
                      <p className='p-2'>January 22 (Monday): Greek Philosophy and Socrates</p>
                      <p className='p-2'>January 24 (Wednesday): Plato and Aristotle</p>
                      <p className='p-2'>January 26 (Friday): The Aeneid by Virgil</p>
                      <p className='p-2'>January 29 (Monday): The Metamorphoses by Ovid</p>
                      <p className='p-2'>January 31 (Wednesday): Meditations by Marcus Aurelius</p>
                      <p className='p-2'>February 5 (Monday): Final Essay Discussion Group</p>
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