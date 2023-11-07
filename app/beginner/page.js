import BookingCalendar from "../../components/BookingCalendar";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import a1_lessons from '../../data'
import a1data from "../../a1data";
import a1grammardata from "../../a1grammardata";

function Beginner() {
  return (
    <div className="bg-indigo-900 w-full text-center justify-center items-center">
      <div className="container mx-auto">
        <h1 className="text-3xl p-2 pt-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-100 to-indigo-100">Beginner Lessons</h1>
        <h2 className="text-xl p-2 font-bold text-indigo-100/70">CEFR Levels A1 and A2</h2>
      </div>
      <div className="h-full flex flex-row flex-wrap justify-center p-2 m-2">
        <div className="h-full lg:w-1/2">
          <h3 className="text-xl p-4 m-2 font-bold text-indigo-100/90">Level A1 Lessons</h3>
          <div className="flex flex-wrap justify-center container mx-auto w-fit">
          { Object.keys(a1data).map((key, index) => (
                <div className="bg-white/90 rounded-xl shadow-xl p-2 m-2" key={index}>
                  <p className="text-xl font-extrabold p-2 text-indigo-700">
                  { a1data[key].title }
                  </p>
                </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center container mx-auto w-fit m-2">
          { Object.keys(a1grammardata).map((key, index) => (
                <div className="bg-white/90 rounded-xl shadow-xl p-2 m-2" key={index}>
                  <p className="text-lg font-bold p-2 text-indigo-700">
                  { a1grammardata[key].title }
                  </p>
                </div>
            ))}
          </div>
        </div>
        <div className="h-full lg:w-1/2">
          <h3 className="text-xl p-4 m-2 font-bold text-indigo-100/90">Level A2 Lessons</h3>
          <h3 className="text-xl font-bold text-indigo-100/70">Coming Soon</h3>
          <div className="flex flex-wrap pb-12 justify-center container mx-auto w-fit">
            <LockClosedIcon className="h-32 m-4 text-indigo-100/70" />
          </div>
        </div>
      </div>
      <div>
    </div>
  </div>
  );
}

export default Beginner;