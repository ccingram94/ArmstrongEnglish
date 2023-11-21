import BookingCalendar from "../../components/BookingCalendar";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import a1_lessons from '../../data'
import a1data from "../../a1data";
import a1grammardata from "../../a1grammardata";

function Intermediate() {
  return (
    <div className="bg-violet-900 w-full min-h-screen text-center justify-center items-center">
      <div className="container mx-auto">
        <h1 className="text-3xl p-2 pt-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-100 to-indigo-100">Intermediate Lessons</h1>
        <h2 className="text-xl p-2 font-bold text-indigo-100/70">CEFR Levels B1 and B2</h2>
      </div>
      <div className="h-full flex flex-row flex-wrap justify-center p-2 m-2">
        <div className="h-full lg:w-1/2">
          <h3 className="text-xl p-4 m-2 font-bold text-indigo-100/90">Level B1 Lessons</h3>
          <p className="text-sm p-2 m-2 font-bold text-indigo-100">CEFR B1 is an intermediate level of English proficiency, allowing learners to have conversations on various topics, understand texts, and handle common situations in both personal and professional life.</p>
          <h3 className="text-xl font-bold text-indigo-100/70">Coming Soon</h3>
          <div className="flex flex-wrap pb-12 justify-center container mx-auto w-fit">
            <LockClosedIcon className="h-32 m-4 text-indigo-100/70" />
          </div>
        </div>
        <div className="h-full lg:w-1/2">
          <h3 className="text-xl p-4 m-2 font-bold text-indigo-100/90">Level B2 Lessons</h3>
          <p className="text-sm p-2 m-2 font-bold text-indigo-100">CEFR B2 represents an upper-intermediate level of English proficiency, enabling learners to engage in detailed discussions, understand complex texts, and use the language effectively in various situations, including work and social interactions.</p>
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

export default Intermediate;