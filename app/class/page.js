import BookingCalendar from "../../components/BookingCalendar";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

function Class() {
  return (
    <div className="bg-violet-50 w-full">
      {/* Top Section: Booking Calendar */}
      <div className="w-full">
        <div className="flex flex-row flex-wrap container mx-auto w-full">
          <BookingCalendar />
          <div className="p-2 m-2 flex flex-col w-full md:basis-1/3 justify-center text-center h-full bg-white rounded-xl shadow-2xl">
            <h2 className="p-2 text-3xl font-extrabold text-violet-800">Today's Date</h2>
            <p className="p-2 font-bold text-violet-800/80">classes available today:</p>
          </div>
        </div>
      </div>

      {/* Middle Section: Tutoring and Group Courses */}
      <div className="container mx-auto mt-8 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tutoring Column */}
          <div className="bg-white text-violet-900/90 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">1-on-1 Tutoring</h2>
            <div className="list-disc ml-6">
              <p className="mb-2"><CheckCircleIcon className="h-6 inline" /> $25 for 25 minutes</p>
              <p className="mb-2">$50 for 50 minutes</p>
            </div>
            <a
              href="/book-tutoring"
              className="mt-4 block w-full px-4 py-2 text-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Group Courses Column */}
          <div className="bg-white text-violet-900/90 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Group Courses</h2>
            <ul className="list-disc ml-6">
              <li className="mb-2">Up to 6 students per course</li>
              <li className="mb-2">$50 per student per hour</li>
            </ul>
            <a
              href="/enroll-group-course"
              className="mt-4 block w-full px-4 py-2 text-center bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Additional Information */}
      <div className="bg-gray-200 py-8">
        <div className="container mx-auto">
          {/* Add any additional information or content here */}
        </div>
      </div>
    </div>
  );
}

export default Class;