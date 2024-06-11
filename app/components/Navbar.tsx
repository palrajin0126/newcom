"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { auth } from '../firebase'; // Import firebase config
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [user, setUser] = useState<null | User>(null); // Initialize with null | User
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Now the type is compatible
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Sign out error', error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Auto-close dropdown after a short delay
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isDropdownOpen) {
      timer = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 3000); // Close after 3 seconds (adjust as needed)
    } 

    return () => clearTimeout(timer); // Clear the timer if dropdown is closed manually
  }, [isDropdownOpen]);

  return (
    <nav className="bg-blue-200 p-4 flex flex-col md:flex-row justify-between items-center z-20">
      {/* Logo and Login (Unauthenticated) or Account/Logout (Authenticated) */}
      <div className="flex items-center mb-4 md:mb-0 w-full justify-between md:w-auto"> 
        <Link href="/" className="text-3xl font-bold text-gray-700">
          Logo
        </Link>
        {user ? (
          <>
            <div className="relative">
              <Link href="/account">
                <button
                  onClick={toggleDropdown}
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                >
                  Account
                </button>
              </Link>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <Link href="/Cart">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                      Cart
                    </span>
                  </Link>
                  <Link href="/order">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                      Orders
                    </span>
                  </Link>
                  <Link href="/returns">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                      Returns
                    </span>
                  </Link>
                </div>
              )}
            </div>
            <button
              onClick={handleSignOut}
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </Link>
        )}
      </div>

      {/* Search Bar (Always on a new line on mobile) */}
      <form action="/search" className="flex items-center w-full md:w-auto md:ml-4 mt-4 md:mt-0"> 
        <input
          type="search"
          placeholder="Search..."
          className="p-2 text-sm text-gray-600 w-full md:w-auto focus:outline-none focus:border-orange-500 rounded-l-md"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-r-md"
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;