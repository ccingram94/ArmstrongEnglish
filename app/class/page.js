import BookingCalendar from "../../components/BookingCalendar";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

function Class() {
  return (
    <div className="bg-violet-900 min-h-screen w-full">
      <div className="w-full h-full bg-hero bg-cover bg-center">
        <div className="flex flex-col justify-center text-center bg-violet-900/90">
          <h1 className="text-3xl p-2 pt-6 font-extrabold text-white">Book a Class</h1>
          <h2 className="text-xl p-2 font-bold text-white/70">One Class (25 Minutes) $25</h2>
        </div>
      </div>
      {/* Top Section: Booking Calendar */}
      <div className="w-full">
        <div className="flex flex-row flex-wrap container mx-auto w-full">
          <BookingCalendar />
        </div>
      </div>
    </div>
  );
}

export default Class;