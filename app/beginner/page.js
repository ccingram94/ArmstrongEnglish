import BookingCalendar from "../../components/BookingCalendar";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

function Beginner() {
  return (
    <div className="bg-violet-50 w-full min-h-screen text-center justify-center items-center">
      <div className="container mx-auto">
        <h1 className="text-3xl p-2 pt-12 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-800 to-indigo-500">Beginner Lessons</h1>
        <h2 className="text-xl p-2 font-bold text-indigo-600/70">CEFR Levels A1 and A2</h2>
      </div>
    </div>
  );
}

export default Beginner;