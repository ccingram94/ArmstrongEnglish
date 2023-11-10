'use client';
import { useState } from 'react';

function OfficeHours() {
  const [ allow, setPerm ] = useState(false);
  const [ pass, changePass ] = useState(null);
  
  if ( pass ==  process.env.TEACHERPASS) {
    return (
      <div className="bg-gradient-to-br from-indigo-800 to-violet-800 w-full text-center justify-center items-center">
      <div className="container mx-auto">
        <h1 className="text-3xl p-2 pt-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-100 to-indigo-100">Teacher Login</h1>
        <div className="text-xl p-2 m-2 font-bold">
          <h3 className='text-violet-50'>please login:</h3>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-indigo-800 to-violet-800 w-full text-center justify-center items-center">
      <div className="container mx-auto">
        <h1 className="text-3xl p-2 pt-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-100 to-indigo-100">Teacher Login</h1>
        <form className="text-xl p-2 m-2 font-bold">
          <h3 className='text-violet-50'>please enter teacher password:</h3>
          <input type='text' onChange={(e) => changePass(e.target.value)} className='p-2 m-2' />
        </form>
      </div>
    </div>
  );
}

export default OfficeHours;