function Pricing() {
    return (
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Choose Your Plan
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Select the perfect plan for your learning needs.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Lessons Card */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900">Lessons</h3>
                <p className="mt-4 text-gray-500">Free</p>
                <a
                  href="/lessons"
                  className="mt-6 block w-full px-4 py-2 text-center font-semibold bg-violet-600 text-white rounded-md hover:bg-violet-700 transition duration-300"
                >
                  Learn More
                </a>
              </div>
  
              {/* Tutoring Card */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900">Tutoring</h3>
                <p className="mt-4 text-gray-500">
                  $25 per 25 Minute Class<br />
                  $50 per 50 Minute Class
                </p>
                <a
                  href="/bookaclass"
                  className="mt-6 block w-full px-4 py-2 text-center font-semibold bg-violet-600 text-white rounded-md hover:bg-violet-700 transition duration-300"
                >
                  Learn More
                </a>
              </div>
  
              {/* Group Classes Card */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900">Group Classes</h3>
                <p className="mt-4 text-gray-500">$50 per 50 Minute Class</p>
                <a
                  href="/bookaclass"
                  className="mt-6 block w-full px-4 py-2 text-center font-semibold bg-violet-600 text-white rounded-md hover:bg-violet-700 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Pricing;  
  
  
  
  
  