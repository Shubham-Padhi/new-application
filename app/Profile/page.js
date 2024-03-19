import React from 'react';

const page = () => {
  return (
    <>

      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md bg-white rounded-xl shadow-md p-8 sm:p-12 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">User Profile</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value="Shubham" // Set the value dynamically based on user data
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value="shubhampadhi.com" // Set the value dynamically based on user data
            readOnly
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div> 


    </>
  );
}

export default page;
