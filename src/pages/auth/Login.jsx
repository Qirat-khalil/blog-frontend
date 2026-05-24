import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [userCred, setUserCred] = useState({
    email: '',
    password: ''
  });

  const handleinput = (e) => {
    setUserCred({
      ...userCred,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        userCred,
        {
          withCredentials: true
        }
      );

      console.log("Login success:", response.data);
      navigate('/blogcards');

    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#b9daf3] px-4 font-sans select-none relative overflow-hidden">
      
      {/* Main Container simulating the mobile frame - Compact Size */}
      <div className="bg-[#e4f3ff] w-full max-w-[380px] h-[680px] rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative flex flex-col justify-between overflow-hidden p-8 border border-white/20">
        
        {/* Top Decorative Circles */}
        <div className="absolute top-[-40px] left-[-40px] w-40 h-40 bg-[#004f8a] rounded-full opacity-90"></div>
        <div className="absolute top-[-80px] right-[-50px] w-64 h-64 bg-[#005c9e] rounded-full shadow-lg"></div>

        {/* Dynamic Top Margin - Matches perfectly with the new container height */}
        <div className="mt-44 z-10 w-full">
          
          {/* Tabs: Login / Register - Increased text size */}
          <div className="flex justify-center space-x-6 mb-6 text-base font-bold">
            <div className="relative pb-1">
              <span className="text-[#004f8a]">Login</span>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#004f8a] rounded-full"></div>
            </div>
            <Link to="/" className="text-gray-400 hover:text-[#004f8a] transition">Register</Link>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* Email Input */}
            <div className="bg-white rounded-xl shadow-sm flex items-center px-4 py-2.5 border border-gray-100">
              <span className="text-gray-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </span>
              <div className="flex flex-col w-full">
                <label className="text-[12px] text-gray-400 font-bold uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={userCred.email}
                  onChange={handleinput}
                  placeholder="enter email"
                  className="w-full text-sm text-gray-700 bg-transparent focus:outline-none placeholder-gray-300 mt-0.5"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="bg-white rounded-xl shadow-sm flex items-center px-4 py-2.5 border border-gray-100 mb-2">
              <span className="text-gray-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </span>
              <div className="flex flex-col w-full">
                <label className="text-[12px] text-gray-400 font-bold uppercase tracking-wider">Password</label>
                <input
                  type="password"
                  name="password"
                  value={userCred.password}
                  onChange={handleinput}
                  placeholder="••••••••••••"
                  className="w-full text-sm text-gray-700 bg-transparent focus:outline-none placeholder-gray-300 mt-0.5"
                />
              </div>
            </div>

            {/* Forgot Password Link - Slightly bigger and cleaner */}
            <div className="text-right px-1">
              <Link 
                to="/forgetpassword" 
                className="text-[12px] text-[#004f8a] hover:underline font-bold tracking-wide transition-all"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button - Text size updated */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="w-[75%] bg-[#004f8a] hover:bg-[#003f6e] transition text-sm font-bold text-white py-2.5 rounded-full shadow-md tracking-wide"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Decorative Circles */}
        <div className="absolute bottom-[-40px] left-[-30px] w-32 h-32 bg-[#004f8a] rounded-full"></div>
        <div className="absolute bottom-[60px] left-[75px] w-6 h-6 bg-[#004f8a] rounded-full"></div>

      </div>
    </div>
  );
}