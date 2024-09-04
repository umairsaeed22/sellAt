import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebookSquare, FaGithub } from 'react-icons/fa';

const FooterSection = () => {
    return (
        <div className="flex flex-col md:flex-col gap-y-10 mx-5">
            <div className='flex flex-col md:flex-row w-full gap-x-16 gap-y-16 md:gap-y-0'>
                {/* First child */}
                <div className="flex flex-col items-start gap-4">
                    <img src="/assets/Logo wrap.png" alt="Logo" className="w-auto h-auto" />
                    <p className="text-base text-gray-400 max-w-xs">Design amazing digital experiences that create more happy in the world.</p>
                </div>

                {/* Second child */}
                <div className="grid grid-cols-2 gap-10 md:flex md:flex-row gap-x-8">
                    {/* 1st Column */}
                    <div className="flex flex-col gap-4 md:w-[184px]">
                        <h3 className="text-xl text-headerColor-500 font-semibold">Product</h3>
                        <div className="flex flex-col gap-y-3">
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Overview</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Features</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Solutions</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Tutorials</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Pricing</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Releases</a>
                        </div>
                    </div>

                    {/* 2nd Column */}
                    <div className="flex flex-col gap-4 md:w-[184px]">
                        <h3 className="text-xl text-headerColor-500 font-semibold">Company</h3>
                        <div className="flex flex-col gap-y-3">
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">About Us</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Careers</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Press</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">News</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Media kit</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Contact</a>
                        </div>
                    </div>

                    {/* 3rd Column */}
                    <div className="flex flex-col gap-4 md:w-[184px]">
                        <h3 className="text-xl text-headerColor-500 font-semibold">Resources</h3>
                        <div className="flex flex-col gap-y-3">
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Blog</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Newsletter</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Events</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Help Center</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Tutorials</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Support</a>
                        </div>
                    </div>

                    {/* 4th Column */}
                    <div className="flex flex-col gap-4 md:w-[184px]">
                        <h3 className="text-xl text-headerColor-500 font-semibold">Legal</h3>
                        <div className="flex flex-col gap-y-3">
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Terms</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Privacy</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Cookies</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Licenses</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Settings</a>
                            <a href="#" className="text-base text-buttonColor-500 font-semibold">Contact</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third child */}
            <div className="flex flex-col-reverse gap-2 py-10 md:flex-row justify-between md:items-center pt-5 mt-8 md:mt-0 border-t border-gray-300">
                {/* 1st Child */}
                <p className="text-base text-gray-400">© 2077 Untitled UI. All rights reserved.</p>
                
                {/* 2nd Child */}
                <div className="flex gap-4 md:w-auto">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaTwitter style={{ color: '#667085' }} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin style={{ color: '#667085' }} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare style={{ color: '#667085' }} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaGithub style={{ color: '#667085' }} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
