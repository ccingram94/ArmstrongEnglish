import BookingCalendar from "../../components/BookingCalendar";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import a1_lessons from '../../data'
import a1data from "../../a1data";
import a1grammardata from "../../a1grammardata";

function Advanced() {
  return (
    <div className="bg-indigo-900 w-full text-center justify-center items-center">
      <div className="container mx-auto">
        <h1 className="text-3xl p-2 pt-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-100 to-indigo-100">Advanced Lessons</h1>
        <h2 className="text-xl p-2 font-bold text-indigo-100/70">CEFR Levels C1 and C2</h2>
      </div>
      <div className="h-full flex flex-row flex-wrap justify-center p-2 m-2">
        <div className="h-full lg:w-1/2">
          <h3 className="text-xl p-4 m-2 font-bold text-indigo-100/90">Level C1 Lessons</h3>
          <h3 className="text-xl font-bold text-indigo-100/70">Coming Soon</h3>
          <div className="flex flex-wrap pb-12 justify-center container mx-auto w-fit">
            <LockClosedIcon className="h-32 m-4 text-indigo-100/70" />
          </div>
        </div>
        <div className="h-full lg:w-1/2">
          <h3 className="text-xl p-4 m-2 font-bold text-indigo-100/90">Level C2 Lessons</h3>
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

export default Advanced;