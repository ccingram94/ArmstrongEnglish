'use client';
import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";


function OfficeHours() {
  const { session } = useSession();

  if (session) {
    return (
      <div className="min-h-screen bg-violet-900 w-full text-center justify-center items-center">
        <div className="container mx-auto">
          <h1 className="text-3xl p-2 pt-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-100 to-indigo-100">Teacher Login</h1>
          <div className="text-xl p-2 m-2 font-bold">
            <h3 className='text-violet-50'>Signed in as {session.user.email}</h3>
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-violet-900 w-full text-center justify-center items-center">
      <div className="container mx-auto">
        <h1 className="text-3xl p-2 pt-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-100 to-indigo-100">Teacher Login</h1>
        <div className="text-xl p-2 m-2 font-bold">
          <h3 className='text-violet-50'>please login:</h3>
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      </div>
    </div>
  )
  }

export default OfficeHours;