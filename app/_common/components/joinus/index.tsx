'use client';
import React, { useEffect, useRef, useState } from 'react';

const WhyJoinUsSection = () => {
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const [imageHeight, setImageHeight] = useState<number>(0);

    useEffect(() => {
        const updateImageHeight = () => {
            if (imageContainerRef.current) {
                const height = imageContainerRef.current.clientHeight;
                setImageHeight(height);
            }
        };

        // Initial height calculation
        updateImageHeight();

        // Recalculate height on window resize
        window.addEventListener('resize', updateImageHeight);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateImageHeight);
        };
    }, []);

    return (
        <div className="relative flex flex-col md:flex-row justify-center mx-5">
            {/* Left child: Image */}
            <div className="w-full md:w-1/2" ref={imageContainerRef}>
                <h2 className="block md:hidden w-full text-lg md:text-4xl font-semibold text-gray-800 mb-4">
                    Why You Should Join <span className='text-buttonColor-500'>Us?</span>
                </h2>
                <img 
                    src="/assets/Mask group (1).png"  // Replace with your image path
                    alt="Image Alt Text" 
                    className="object-contain w-full h-full rounded-lg"
                />
            </div>

            {/* Right child: Content */}
            <div className='relative flex flex-col gap-5 md:gap-20 w-full md:w-1/2 p-6'>
                <h2 className="hidden md:block w-full text-lg md:text-4xl font-semibold text-gray-800 mb-4">
                    Why You Should Join <span className='text-buttonColor-500'>Us?</span>
                </h2>
                <div className="w-full sm:h-full md:absolute md:top-32 md:right-20 md:px-10 md:py-5 md:bg-overlaybg-500"
                    style={{ height: `calc(${imageHeight}px - 125px)` }}
                >
                    <div className="flex flex-col h-full justify-center mt-[-80px] md:mt-0">
                        <div className="flex w-full items-center md:items-start mb-5 bg-gray-100 rounded-lg px-5 md:px-10 py-5"
                            style={{
                                boxShadow: '0px 4px 20px 0px rgba(65, 91, 245, 0.06)' // Apply the box-shadow inline
                            }}
                        >
                            <span className="bg-buttonColor-500 text-white rounded-md p-3 text-xl font-semibold mr-5">01</span>
                            <p className="text-descriptionColor-500 text-base line-clamp-2 md:line-clamp-none">
                                Our vision is to empower individuals and businesses to achieve their full potential through the power of freelance services.
                            </p>
                        </div>
                        <div className="flex items-start mb-5 bg-gray-100 rounded-lg px-5 md:px-10 py-5"
                            style={{
                                boxShadow: '0px 4px 20px 0px rgba(65, 91, 245, 0.06)' // Apply the box-shadow inline
                            }}
                        >
                            <span className="bg-buttonColor-500 text-white rounded-md p-3 text-xl font-semibold mr-5">02</span>
                            <p className="text-descriptionColor-500 text-base line-clamp-2 md:line-clamp-none">
                                We envision a world where anyone can easily access high-quality freelance services, regardless of their location or resources.
                            </p>
                        </div>
                        <div className="flex items-start mb-5 bg-gray-100 rounded-lg px-5 md:px-10 py-5"
                            style={{
                                boxShadow: '0px 4px 20px 0px rgba(65, 91, 245, 0.06)' // Apply the box-shadow inline
                            }}
                        >
                            <span className="bg-buttonColor-500 text-white rounded-md p-3 text-xl font-semibold mr-5">03</span>
                            <p className="text-descriptionColor-500 text-base line-clamp-2 md:line-clamp-none">
                                Our goal is to create a world where freelancers can thrive, and businesses can achieve success through the power of collaboration and innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyJoinUsSection;
