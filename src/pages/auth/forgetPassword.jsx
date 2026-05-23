import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgetPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/forgot-password",
        { email },
        {
          withCredentials: true
        }
      );

      console.log("Reset link sent success:", response.data);
      // Link send hone ke baad aap chahein to user ko login par bhej sakte hain
      navigate('/login');

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

        {/* Dynamic Top Margin - Matches perfectly with the 680px height */}
        <div className="mt-44 z-10 w-full">
          
          {/* Header Title styled matching the image vibes - Adjusted Text Sizes */}
          <div className="text-center mb-6">
            <h2 className="text-[#004f8a] text-xl font-bold tracking-wide">Forgot Password</h2>
            <p className="text-[12px] text-gray-400 mt-2 px-2 leading-relaxed">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* Email Input */}
            <div className="bg-white rounded-xl shadow-sm flex items-center px-4 py-2.5 border border-gray-100">
              <span className="text-gray-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </span>
              <div className="flex flex-col w-full">
                <label className="text-[12px] text-gray-400 font-bold uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInput}
                  placeholder="example@gmail.com"
                  className="w-full text-sm text-gray-700 bg-transparent focus:outline-none placeholder-gray-300 mt-0.5"
                  required
                />
              </div>
            </div>

            {/* Submit Button - Updated Text Size */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="w-[75%] bg-[#004f8a] hover:bg-[#003f6e] transition text-sm font-bold text-white py-2.5 rounded-full shadow-md tracking-wide"
              >
                Send Link
              </button>
            </div>

            {/* Back to Login Link - Increased visibility */}
            <div className="text-center pt-4">
              <Link 
                to="/login" 
                className="text-[13px] text-gray-400 hover:text-[#004f8a] font-bold tracking-wide transition-all"
              >
                ← Back to Login
              </Link>
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

export default ForgetPassword;