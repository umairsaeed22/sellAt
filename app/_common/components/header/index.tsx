"use client";
import React, {useState} from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="lg:bg-white shadow-sm sm: bg-buttonColor-500">
        <div className="max-w-100 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 mt-3">
                <img
                  className="h-10 w-13"
                  src="assets/Logo wrap.png"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900">
                Features
              </a>
              <a href="/login" className="text-base font-normal text-gray-500 hover:text-gray-900">
                Login
              </a>
              <a href="/signup" className="px-4 py-2 bg-buttonColor-500 text-white rounded-md cursor-pointer">
                Sign Up
              </a>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900">
                Features
              </a>
              <a href="/login" className="text-base font-normal text-gray-500 hover:text-gray-900">
                Login
              </a>
              <a href="/signup" className="px-4 py-2 bg-buttonColor-500 text-white rounded-md cursor-pointer">
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>
    );
  };
