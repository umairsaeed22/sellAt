'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface CollapsibleItemProps {
    title: string;
    description: string;
    num: string;
    color: string;
    background: string;
}

const CollapsibleItem: React.FC<CollapsibleItemProps> = ({ title, description, num, color, background }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-white rounded-3xl' style={{ boxShadow: '0px 20px 24px -4px rgba(127, 86, 217, 0.2)' }}>
            <div 
                className="flex items-center justify-between p-4 cursor-pointer" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className='flex items-center gap-5 md:gap-10'>
                    <span style={{ color, backgroundColor: background }} className="font-bold text-base md:text-4xl px-5 py-5 rounded-3xl">{num}</span>
                  <div>
                  <p className="font-medium text-base md:text-2xl">{title}</p>

                  {isOpen && (
                <div className="pt-4 text-sm text-tileTextColor-500">
                    {description}
                </div>
                )}
                  </div>
                </div>
                {isOpen ? <IoIosArrowUp className='text-buttonColor-500' style={{ fontSize: '30px' }}/> : <IoIosArrowDown className='text-buttonColor-500' style={{ fontSize: '30px' }} />}
            </div>
            
        </div>
    );
};

const ProfileSection = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <CollapsibleItem 
                num="1"
                title="Complete Profile" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                color="#7F56D9"  // Specify the color for the first item
                background= "#F6EBFF"
            />
            <CollapsibleItem 
                num="2"
                title="Search Contracts" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                color="#1849A9"  // Specify the color for the second item
                background= "#E7E9FF"
            />
            <CollapsibleItem 
                num="3"
                title="Apply To Contracts" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                color="#32D583"  // Specify the color for the third item
                background= "#E9FFEF"
            />
        </div>
    );
};

const LayoutComponent = () => {
    return (
        <div className="flex flex-col justify-center gap-5 md:gap-10 bg-containerbgColor-500 rounded-3xl mx-5 md:p-10 md:m-10">
             <p className="text-headerColor-500 text-lg md:text-3xl font-medium">
                    Up your
                    <span
                        className="relative text-buttonColor-500 text-lg md:text-3xl font-medium cursor-pointer" >
                        &nbsp; Work Game,
                    </span>
                    &nbsp;it’s easy
            </p>

            <div className="flex flex-col-reverse w-full md:flex-row items-center gap-5">
            <div className="w-full">
                <ProfileSection />
            </div>
            <div className="w-full flex items-center justify-center sm:ml-[calc(100% - 90%);]">
                <img 
                    src="/assets/righSide.png" 
                    alt="Random Image"
                    className="w-full hidden md:block"
                />
                 <img 
                    src="/assets/placeholdermobile.png" 
                    alt="Random Image"
                    className="w-full block md:hidden"
                />
            </div>
            </div>
        </div>
    );
};

export default LayoutComponent;
