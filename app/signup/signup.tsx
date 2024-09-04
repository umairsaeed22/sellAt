// pages/signup.tsx
import Head from 'next/head';
import { FaRegEnvelope, FaGithub } from "react-icons/fa";
import { GoLock } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { LuUser } from "react-icons/lu";
import { Button } from '../../app/_common/components/button';
import { Input } from '../../app/_common/components/input';
import { Label } from '../../app/_common/components/label';
import { Checkbox } from '../../app/_common/components/checkbox';


export default function Signup() {
  return (
    <>
    
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex flex-col md:flex-row w-full max-w-4xl p-6 pr-0 bg-white rounded-lg shadow-md">
          {/* Left Child: Login Form */}
          <div className="w-full md:w-1/2 p-10">
            <h3 className="text-4xl font-medium mb-2 text-black">Sign up</h3>
            <p className="mb-6 text-gray-500 ">Streamline your journey with Abc.</p>
            
            <div className="mb-4 relative">
              <label className="block mb-2 text-sm font-medium text-gray-500" >Name*</label>
              <LuUser className='absolute z-10 top-10 left-2 ' color='#000'/>
                <input
                  type="email"
                  className="placeholder:text-xs w-full px-8 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                  required
                />
            </div>

            <div className="mb-4 relative">
              <label className="block mb-2 text-sm font-medium text-gray-500">Email*</label>
              <FaRegEnvelope className='absolute z-10 top-10 left-2 ' color='#000'/>
                <input
                  type="email"
                  className="placeholder:text-xs w-full px-8 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                  required
                />
            </div>

            <div className="mb-4 relative">
              <label className="=block mb-2 text-sm font-medium text-gray-700">Password*</label>
              <GoLock className='absolute z-10 top-9 left-2' color='#000' />
              <input
                type="password"
                className="placeholder:text-xs w-full px-8 py-2 border border-gray-300 rounded-md"
                placeholder="A4*12BHK"
                required
              />
            </div>

            <div className="mb-4 relative">
            <p className="inline text-xs text-gray-500">This is a hint text to help user.</p>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <label className="flex items-center text-sm text-gray-500">
                <input type="checkbox" className="mr-2" />
                Yes, I understand and agree to
              </label>
              <a href="#" className="text-sm text-buttonColor-500 underline">Terms of Service</a>
            </div>

            <Button  title='Sign in' className='bg-buttonColor-500 mb-5'>Create Account</Button>

            <div className=" relative flex flex-row  justify-center align-baseline gap-5">
            <div className='relative w-full'>
                <FcGoogle className='absolute top-2 left-1'/> 
                <button className="flex items-center justify-center w-full py-2 text-xs text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md">
                    Sign in with Google
                    </button>
                </div>

                <div className='relative w-full'>
                <FaGithub className='absolute top-2 left-1' style={{ color: '#000' }}/>
                <button className="flex items-center justify-center w-full py-2 text-xs text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md">
                        Sign in with GitHub
                    </button>
            </div>
            </div>

            <div className="mt-6 text-center">
              <p className="inline text-sm text-black">Already have an account?</p>
              <a href="/login" className="ml-2 text-sm text-buttonColor-500 hover:underline">Login</a>
            </div>
          </div>

          {/* Right Child: Background Image with Text */}
          <div className="relative hidden md:block w-full md:w-1/2 bg-cover bg-opacity-80 bg-center rounded-l-xl">
          <img
            src="./assets/signup.png"
            className='h-full'
          />
            <div className="absolute bottom-16 m-3 p-10 text-white">
              <p className="mb-4 text-2xl text-left">“We’ve been using Untitled to kick start every new project and can’t imagine working without it.”</p>
              <h3 className="text-3xl font-bold">Amélie Laurent</h3>
              <p className="text-xs">Rocket.us</p>
              <p className="text-xs">Space Exploration Agency</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}