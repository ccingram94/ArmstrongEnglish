import { questions } from '../testdata.js'

function PlacementTest() {
    return (
        <div className='flex flex-col text-center items-center w-screen min-h-screen'>
            <div className='flex flex-col text-center items-center w-full lg:w-2/3 text-violet-900 bg-white rounded-md shadow-xl p-2 m-4'>
                <div className='flex flex-col text-start text-sm items-center rounded-xl'>
                    <h3 className='p-2 text-lg font-extrabold'>CEFR Fluency Levels</h3>
                    <div className='flex flex-row w-full bg-violet-50'>
                        <p className='p-2 font-extrabold w-1/3'>Beginner</p>
                        <p className='p-2'>A1 (Lower)</p>
                        <p className='p-2'>A2 (Upper)</p>
                    </div>
                    <div className='flex flex-row w-full bg-violet-100'>
                        <p className='p-2 font-extrabold w-1/3'>Intermediate</p>
                        <p className='p-2'>B1 (Lower)</p>
                        <p className='p-2'>B2 (Upper)</p>
                    </div>
                    <div className='flex flex-row w-full bg-violet-200'>
                        <p className='p-2 font-extrabold w-1/3'>Advanced</p>
                        <p className='p-2'>C1 (Lower)</p>
                        <p className='p-2'>C2 (Upper)</p>
                    </div>
                </div>
                <p className='p-2 m-2 max-w-md text-center'>
                    This placement test will provide an English level score on the CEFR scale (beginner, intermediate, or advanced).
                    It will test your reading, writing, and grammar knowledge.  
                    It is 30 questions long and untimed.
                </p>
                <p>
                    Good luck!
                </p>
                <button className='p-2 m-2 bg-gradient-to-br from-violet-500 to-indigo-600 text-white font-bold rounded-md shadow-md opacity-80 hover:opacity-100 transition-all'>
                    Start Test
                </button>
            </div>
        </div>
    )
}

export default PlacementTest;