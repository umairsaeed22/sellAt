'use client';
import React from 'react';

const StayUpdated = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-cover bg-center bg-overlaybg-500 h-auto md:h-60 gap-10 md:gap-0 p-5 md:p-10 rounded-3xl">
      <div className='flex flex-col gap-4 md:gap-10'>
        <span className='text-2xl md:text-4xl font-semibold'>Stay Up to Date</span>
        <span className='text-gray-500 text-base md:text-lg font-normal'>For Our Latest Innovations: Sign Up for Our Newsletter!</span>
      </div>
      
      <div className="flex flex-col md:flex-row items-start md:items-center mt-4 md:mt-0 w-full md:w-1/2 gap-3">
        <input type="text" className="placeholder:italic border border-gray-300 px-4 py-2 rounded w-full" placeholder="Enter your email" />
        <button className="bg-buttonColor-500 text-white px-4 py-2 rounded w-full md:w-auto">Subscribe</button>
      </div>
    </div>
  );
};

export default StayUpdated;
