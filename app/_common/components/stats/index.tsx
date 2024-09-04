'use client';
import React, { useState, useEffect } from 'react';

const RandomNumber = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  // Function to generate a random 3-digit number
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (999 - 100 + 1)) + 100; // Generates a random number between 100 and 999
  };

  useEffect(() => {
    // Generate initial random numbers only on the client side
    setNumbers([
      generateRandomNumber(),
      generateRandomNumber(),
      generateRandomNumber(),
      generateRandomNumber(),
    ]);
  }, []); // Empty dependency array ensures this effect runs only once, after initial render

  const labels = ['Talented Freelancer', 'Visitors', 'Contract Made', 'Companies'];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mx-5 gap-4 bg-cover bg-center bg-buttonColor-500 h-auto md:h-60 rounded-3xl p-4">
      {numbers.map((number, index) => (
        <div key={index} className="flex flex-col items-center justify-center gap-2 p-4 text-white bg-opacity-75 rounded-lg">
          <span className="text-xl md:text-5xl font-bold">{number}+</span>
          <h3 className="text-xs md:text-xl whitespace-nowrap">{labels[index]}</h3>
        </div>
      ))}
    </div>
  );
};

export default RandomNumber;
