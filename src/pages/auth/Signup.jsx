import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [userCred, setUserCred] = useState({
    username: "",
    email: "",
    password: ""
  });

  // input handler
  const handleInput = (e) => {
    setUserCred({
      ...userCred,
      [e.target.name]: e.target.value
    });
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,
        userCred,
        {
          withCredentials: true
        }
      );

      console.log("Signup success:", response.data);
      navigate('/blogcards');

    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#b9daf3] px-4 font-sans select-none relative overflow-hidden">
      
      {/* Main Container simulating the mobile frame - Adjusted Size */}
      <div className="bg-[#e4f3ff] w-full max-w-[380px] h-[680px] rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative flex flex-col justify-between overflow-hidden p-8 border border-white/20">
        
        {/* Top Decorative Circles */}
        <div className="absolute top-[-40px] left-[-40px] w-40 h-40 bg-[#004f8a] rounded-full opacity-90"></div>
        <div className="absolute top-[-80px] right-[-50px] w-64 h-64 bg-[#005c9e] rounded-full shadow-lg"></div>

        {/* Dynamic Top Margin - Shifted down proportionally for shorter height */}
        <div className="mt-44 z-10 w-full">
          
          {/* Tabs: Login / Register - Increased font size */}
          <div className="flex justify-center space-x-6 mb-6 text-base font-bold">
            <Link to="/login" className="text-gray-400 hover:text-[#004f8a] transition">Login</Link>
            <div className="relative pb-1">
              <span className="text-[#004f8a]">Register</span>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#004f8a] rounded-full"></div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* Username Input */}
            <div className="bg-white rounded-xl shadow-sm flex items-center px-4 py-2.5 border border-gray-100">
              <span className="text-gray-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </span>
              <div className="flex flex-col w-full">
                <label className="text-[12px] text-gray-400 font-bold uppercase tracking-wider">User Name</label>
                <input
                  type="text"
                  name="username"
                  value={userCred.username}
                  onChange={handleInput}
                  placeholder="enter username"
                  className="w-full text-sm text-gray-700 bg-transparent focus:outline-none placeholder-gray-300 mt-0.5"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="bg-white rounded-xl shadow-sm flex items-center px-4 py-2.5 border border-gray-100">
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
                  onChange={handleInput}
                  placeholder="••••••••••••"
                  className="w-full text-sm text-gray-700 bg-transparent focus:outline-none placeholder-gray-300 mt-0.5"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="bg-white rounded-xl shadow-sm flex items-center px-4 py-2.5 border border-gray-100">
              <span className="text-gray-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </span>
              <div className="flex flex-col w-full">
                <label className="text-[12px] text-gray-400 font-bold uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userCred.email}
                  onChange={handleInput}
                  placeholder="example@gmail.com"
                  className="w-full text-sm text-gray-700 bg-transparent focus:outline-none placeholder-gray-300 mt-0.5"
                />
              </div>
            </div>

            {/* Submit Button - Text size tweaked up */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="w-[75%] bg-[#004f8a] hover:bg-[#003f6e] transition text-sm font-bold text-white py-2.5 rounded-full shadow-md tracking-wide"
              >
                Register
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