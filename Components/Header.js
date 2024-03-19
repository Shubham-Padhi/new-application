
import Link from 'next/link';
import React from 'react';


const Header = (props) => {
  return (
   <>
   <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/About" className="hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link href="/Home" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="/Profile" className="hover:text-gray-300">Profile</Link>
            </li>
            <li>
              <Link href="/Login" className="hover:text-gray-300">Sing Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
   </>
  );
}

export default Header;
