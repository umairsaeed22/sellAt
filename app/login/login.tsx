import Head from 'next/head';
import { FaRegEnvelope } from "react-icons/fa";
import { GoLock } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from '../../app/_common/components/button';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex flex-col md:flex-row w-full max-w-4xl p-6 pr-0 bg-white rounded-lg shadow-md">
          {/* Left Child: Login Form */}
          <div className="w-full md:w-1/2 p-12">
            <h3 className="text-black text-4xl font-medium mb-2">Log in</h3>
            <p className="mb-6 text-sm text-gray-500 ">Welcome back! Please enter your details.</p>
            
            <div className="mb-4 relative">
              <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <FaRegEnvelope className='absolute z-10 top-10 left-2 ' color='#000'/>
              <input
                type="email"
                className="placeholder:text-xs w-full px-8 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4 relative">
              <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <GoLock className='absolute z-10 top-10 left-2' color='#000' />
              <input
                type="password"
                className="placeholder:text-xs w-full px-8 py-2 border border-gray-300 rounded-md"
                placeholder="Password"
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember for 30 days
              </label>
              <a href="#" className="text-sm text-buttonColor-500 ">Forgot password</a>
            </div>

            <Button title='Sign in' className='bg-buttonColor-500 mb-5 hover:opacity-90'>Sign in</Button>

            <div className="relative flex flex-row justify-center align-baseline gap-5">
              <div className='relative w-full'>
                <FcGoogle className='absolute top-2 left-1'/> 
                <button className="flex items-center justify-center w-full py-2 text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md">
                  Sign in with Google
                </button>
              </div>

              <div className='relative w-full'>
                <FaGithub className='absolute top-2 left-1 ' style={{ color: '#000' }}/>
                <button className="flex items-center justify-center w-full py-2 text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md">
                  Sign in with GitHub
                </button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="inline text-sm text-black">Don’t have an account?</p>
              <a href="/signup" className="ml-2 text-sm text-buttonColor-500 hover:underline">Sign up</a>
            </div>
          </div>

          {/* Right Child: Background Image with Text */}

          <div className="relative hidden md:block w-full md:w-1/2 bg-cover bg-opacity-100 bg-center rounded-l-xl" >
          <img
            src="./assets/loginBg.png"
          />
            <div className="absolute m-3 p-3 text-white bottom-0">
              <p className="mb-4 text-3xl">“We’ve been using Untitled to kick start every new project and can’t imagine working without it.”</p>
              <h3 className="text-4xl font-bold">Amélie Laurent</h3>
              <p className="text-lg">Rocket.us</p>
              <p className="text-lg">Space Exploration Agency</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
