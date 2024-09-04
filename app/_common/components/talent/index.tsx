"use client";
import React, { useState, useEffect } from 'react';

// Custom hook to check for screen size
const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [matches, query]);

    return matches;
};

const TalentSection = () => {
    // Check if the screen size matches 'md' breakpoint
    const isMdScreen = useMediaQuery('(min-width: 768px)');

    return (
        <div className="relative flex flex-col md:flex-row mx-5 p-5 h-full md:p-10 md:m-10 md:h-[555px] rounded-3xl"
             style={{
                 backgroundColor: '#7F56D9', // Background color
                 clipPath: isMdScreen ? 'polygon(0px 0px, 100% 0%, 100% 100%, -20% 76%, 0% 50%)' : 'none'
             }}>
            {/* Left child: Image */}
            <div className="w-[100%] md:w-1/2 pr-4 flex items-center">
                <img 
                    src="/assets/Photo.png" 
                    alt="Image Alt Text" 
                    width={450} 
                    height={450} 
                    className="object-cover rounded-3xl"
                />
            </div>

            {/* Right child: Column with heading, text, and buttons */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-lg md:text-3xl text-white font-semibold">Find Talent your way</h2>
                <p className="text-sm md:text-lg font-normal text-white mt-4 mb-6">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
                </p>
                <div className="flex justify-end md:justify-start items-center gap-4">
                    <button className="bg-transparent text-white py-2 px-4  rounded border border-white">
                        Learn more
                    </button>
                    <button className="bg-white text-buttonColor-500 py-2 px-4 rounded">
                        Find Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TalentSection;
