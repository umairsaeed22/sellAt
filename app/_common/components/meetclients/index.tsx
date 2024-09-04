import React from 'react';
import Image from 'next/image';
import { HiCheck } from 'react-icons/hi';
import { RxArrowTopRight } from "react-icons/rx";

const FeatureSection = () => {
    return (
        <div className="flex flex-col-reverse gap-5 md:gap-0 md:flex-row items-center justify-between mx-5 h-full md:p-10 md:m-10">
            {/* Left child */}
            <div className="w-[100%]md:w-1/2 flex flex-col">
                <h2 className="text-lg md:text-4xl font-semibold">Find great
                <span className='text-buttonColor-500'>
                &nbsp; Work
                </span>
                 </h2>
                <p className="text-sm md:text-base mt-4 mb-6 text-gray-500">
                    Meet clients you’re excited to work with and take your career or business to new heights.
                </p>
                <ul className="text-left mb-6">
                    <li className="flex text-sm items-center mb-2 text-gray-500">
                        <HiCheck className="text-buttonColor-500 mr-2 bg-bgopacity-500 rounded-md" />
                        Find opportunities for every stage of your freelance career
                    </li>
                    <li className="flex text-sm items-center mb-2 text-gray-500">
                        <HiCheck className="text-buttonColor-500 mr-2 bg-bgopacity-500 rounded-md" />
                        Control when, where, and how you work
                    </li>
                    <li className="flex text-sm items-center mb-2 text-gray-500">
                        <HiCheck className="text-buttonColor-500 mr-2 bg-bgopacity-500 rounded-md" />
                        Explore different ways to earn
                    </li>
                </ul>
                <button className="flex flex-row items-center justify-center bg-buttonColor-500 w-36 hover:bg-buttonColor-600 text-white py-2 px-2 rounded-md">
                    Opportunities <RxArrowTopRight className="ml-2" />
                </button>
            </div>

            {/* Right child */}
            <div className="md:w-1/2 flex items-center justify-end">
                <img 
                    src="/assets/Content.png" 
                    alt="Image Alt Text" 
                    width= "100%"
                    height="100%"
                    className="object-cover rounded-lg"
                />
            </div>
        </div>
    );
};

export default FeatureSection;
