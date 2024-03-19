import React from 'react';

const page = () => {
  return (
    <div>
       <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl bg-white rounded-xl shadow-md p-8 sm:p-12 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Welcome to My Website</h1>
        <p className="text-lg mb-6 text-center">This is a simple landing page built with React and Tailwind CSS.</p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default page;
