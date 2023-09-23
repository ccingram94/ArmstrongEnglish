import { ChatBubbleLeftRightIcon, MapPinIcon } from '@heroicons/react/24/outline';

function Footer() {
    return (
      <footer className="bg-gradient-to-br from-violet-800 to-indigo-900 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-center text-center">
          {/* First Column */}
          <div className="w-full md:w-1/3 m-auto p-6">
            <div className='flex flex-row flex-wrap opacity-80 p-2 justify-center items-center'>
                <h2 className="text-2xl font-extrabold">Armstrong English</h2>
                <MapPinIcon className='h-4 w-4 m-2' />
                <p className='text-md'>United States</p>
            </div>
            <p className="opacity-80 text-sm font-semibold">© 2023 Armstrong English</p>
            <p className="opacity-80 text-sm font-semibold">All rights reserved.</p>
          </div>
  
          {/* Second Column */}
          <div className="w-full md:w-fit m-auto p-6">
            <h2 className="text-xl font-extrabold mb-4">Learn</h2>
            <ul className="opacity-80 font-semibold">
              <li>Beginner</li>
              <li>Intermediate</li>
              <li>Advanced</li>
              {/* Add more links as needed */}
            </ul>
          </div>
  
          <div className="w-full md:w-fit m-auto p-6">
            <h2 className="text-xl font-extrabold mb-4">Classes</h2>
            <ul className='opacity-80 font-semibold'>
              <li>Book a Class</li>
              <li>Tutoring</li>
              <li>Group Classes</li>
              {/* Add more links as needed */}
            </ul>
          </div>

          <div className="w-full md:w-fit m-auto p-6">
            <h2 className="text-xl font-extrabold mb-4">Practice</h2>
            <ul className='opacity-80 font-semibold'>
              <li>Videos</li>
              <li>Lessons</li>
              <li>Quiz</li>
              {/* Add more links as needed */}
            </ul>
          </div>

        </div>
      </footer>
    );
  }
  
  export default Footer;