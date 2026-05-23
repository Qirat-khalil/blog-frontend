

// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CreateBlog = () => {

//   const [message, setMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const [formdata, setFormData] = useState({
//     topic: "",
//     title: "",
//     description: "",
//     content: "",
//     image: ""
//   });


//   const handleInput = (e) => {
//     setFormData({
//       ...formdata,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();


//     const blogData = new FormData()

//      Object.keys(formdata).forEach((key) => {

//       blogData.append(key, formdata[key])

//     });


//     const { title, description, content, topic } = formdata;

//     if (!title || !description || !content || !topic) {
//       setMessage("❌ Please fill all fields");
//       setTimeout(() => setMessage(""), 3000);
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/blog/createblog",
//         blogData,
//         { withCredentials: true }
//       );

//       console.log("Blog created:", response.data);
//       setMessage("✅ Blog created successfully!");

//       setTimeout(() => {
//         navigate("/blogcards");
//       }, 1000);

//     } catch (error) {
//       console.log(error.response?.data || error.message);
//       setMessage("❌ Error creating blog");
//       setTimeout(() => setMessage(""), 3000);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
//       <div className="max-w-4xl mx-auto">

//         {/* Header Section */}
//         <div className="text-center mb-10">
//           <div className="inline-block p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg mb-4">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
//             </svg>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Create New Blog
//           </h1>
//           <p className="text-gray-600 mt-3 text-lg">Share your thoughts with the world</p>
//         </div>

//         {/* Message Alert */}
//         {message && (
//           <div className={`mb-6 p-4 rounded-xl shadow-md transform transition-all duration-300 ${message.includes("✅")
//             ? "bg-green-50 border-l-4 border-green-500 text-green-700"
//             : "bg-red-50 border-l-4 border-red-500 text-red-700"
//             }`}>
//             <div className="flex items-center">
//               <span className="text-2xl mr-3">{message.includes("✅") ? "🎉" : "⚠️"}</span>
//               <p className="font-medium">{message}</p>
//             </div>
//           </div>
//         )}

//         {/* Form Card */}
//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2"></div>

//           <form onSubmit={handleSubmit} className="p-8 space-y-6">

//             {/* Topic Field */}
//             <div className="group">
//               <label className="block text-gray-700 font-semibold mb-2 flex items-center">
//                 <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l5 5a2 2 0 01.586 1.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"></path>
//                 </svg>
//                 Topic
//               </label>
//               <input
//                 name="topic"
//                 value={formdata.topic}
//                 onChange={handleInput}
//                 placeholder="e.g., Technology, Lifestyle, Education"
//                 className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-blue-300"
//               />
//             </div>

//             {/* Title Field */}
//             <div className="group">
//               <label className="block text-gray-700 font-semibold mb-2 flex items-center">
//                 <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
//                 </svg>
//                 Title
//               </label>
//               <input
//                 name="title"
//                 value={formdata.title}
//                 onChange={handleInput}
//                 placeholder="An eye-catching title for your blog"
//                 className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-blue-300 text-lg font-medium"
//               />
//             </div>

//             {/* Description Field */}
//             <div className="group">
//               <label className="block text-gray-700 font-semibold mb-2 flex items-center">
//                 <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
//                 </svg>
//                 Description
//               </label>
//               <textarea
//                 name="description"
//                 value={formdata.description}
//                 onChange={handleInput}
//                 placeholder="Write a brief description of your blog (2-3 sentences)"
//                 rows="3"
//                 className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-blue-300 resize-none"
//               />
//             </div>

//             {/* Content Field */}
//             <div className="group">
//               <label className="block text-gray-700 font-semibold mb-2 flex items-center">
//                 <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
//                 </svg>
//                 Content
//               </label>
//               <textarea
//                 name="content"
//                 value={formdata.content}
//                 onChange={handleInput}
//                 placeholder="Write your blog content here... Share your story, ideas, or expertise"
//                 rows="10"
//                 className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-blue-300 resize-none font-mono text-gray-700"
//               />
//             </div>

//             {/* <input
//               type="file"
//               name="image"
//               placeholder="Paste image URL"
//               value={formdata.image}
//               onChange={handleInput}
//               className="w-full p-2 border rounded"
//             /> */}

//             <input
//               type="file"
//               name="image"

//               onChange={(e) =>
//                 setFormData({
//                   ...formdata,
//                   image: e.target.files[0]
//                 })
//               }

//               className="w-full p-2 border rounded"
//             />


//             {/* Character Count */}
//             <div className="text-right text-sm text-gray-500">
//               {formdata.content.length} characters
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:from-blue-700 hover:to-purple-700"
//                 }`}
//             >
//               {isLoading ? (
//                 <div className="flex items-center justify-center">
//                   <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Publishing...
//                 </div>
//               ) : (
//                 <div className="flex items-center justify-center">
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                   </svg>
//                   Publish Blog
//                 </div>
//               )}
//             </button>

//             {/* Cancel Button */}
//             <button
//               type="button"
//               onClick={() => navigate("/blogcards")}
//               className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300"
//             >
//               Cancel
//             </button>

//           </form>
//         </div>

//         {/* Footer Note */}
//         <div className="mt-8 text-center text-sm text-gray-500">
//           <p>✨ Your blog will be visible to everyone once published</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateBlog;




















import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHashtag, FaHeading, FaParagraph, FaFileAlt, FaCloudUploadAlt } from "react-icons/fa";

const CreateBlog = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    topic: "",
    title: "",
    description: "",
    content: "",
    image: ""
  });

  const handleInput = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = new FormData();
    Object.keys(formdata).forEach((key) => {
      blogData.append(key, formdata[key]);
    });

    const { title, description, content, topic } = formdata;

    if (!title || !description || !content || !topic) {
      setMessage("❌ Please fill all fields");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/blog/createblog",
        blogData,
        { withCredentials: true }
      );

      console.log("Blog created:", response.data);
      setMessage("✅ Blog created successfully!");

      setTimeout(() => {
        navigate("/blogcards");
      }, 1000);

    } catch (error) {
      console.log(error.response?.data || error.message);
      setMessage("❌ Error creating blog");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e4f3ff] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/40 via-[#e4f3ff] to-[#d4ebff] text-slate-700 py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-[#004f8a]/10 selection:text-[#004f8a]">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* HEADER AREA PANEL */}
        <div className="bg-white/90 border border-blue-200/60 rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-900/5 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#004f8a]">
              Create New Article
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium tracking-wide">
              Draft your stories, expert designs, and knowledge points into the community matrix.
            </p>
          </div>
          <div className="self-start md:self-auto">
            <span className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#004f8a] bg-blue-100/70 border border-blue-200 rounded-xl shadow-sm">
              ✨ Global Editor
            </span>
          </div>
        </div>

        {/* MESSAGE ALERT SYSTEM */}
        {message && (
          <div className={`p-4 rounded-2xl shadow-lg border animate-in fade-in slide-in-from-top-2 duration-200 ${
            message.includes("✅")
              ? "bg-green-50/90 border-green-200 text-green-800"
              : "bg-red-50/90 border-red-200 text-red-800"
          }`}>
            <div className="flex items-center gap-3">
              <span className="text-xl">{message.includes("✅") ? "🎉" : "⚠️"}</span>
              <p className="font-bold text-xs sm:text-sm tracking-wide">{message}</p>
            </div>
          </div>
        )}

        {/* MAIN COMPOSITION CARD */}
        <div className="bg-white/90 border border-blue-200/60 rounded-[2rem] p-6 sm:p-10 shadow-2xl shadow-blue-900/5">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Topic Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#004f8a] flex items-center gap-2">
                <FaHashtag className="text-blue-400" /> Topic Domain
              </label>
              <input
                type="text"
                name="topic"
                value={formdata.topic}
                onChange={handleInput}
                placeholder="e.g., Technology, Lifestyle, Education"
                className="w-full px-4 py-3.5 bg-blue-50/30 hover:bg-blue-50/50 focus:bg-white border-2 border-blue-100 rounded-xl focus:border-[#004f8a] focus:outline-none transition-all text-sm font-medium placeholder:text-slate-400 text-slate-700 shadow-sm"
              />
            </div>

            {/* Title Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#004f8a] flex items-center gap-2">
                <FaHeading className="text-blue-400" /> Article Title
              </label>
              <input
                type="text"
                name="title"
                value={formdata.title}
                onChange={handleInput}
                placeholder="An eye-catching title for your blog"
                className="w-full px-4 py-3.5 bg-blue-50/30 hover:bg-blue-50/50 focus:bg-white border-2 border-blue-100 rounded-xl focus:border-[#004f8a] focus:outline-none transition-all text-base font-bold placeholder:text-slate-400 text-[#004f8a] shadow-sm"
              />
            </div>

            {/* Description Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#004f8a] flex items-center gap-2">
                <FaParagraph className="text-blue-400" /> Summary Brief
              </label>
              <textarea
                name="description"
                value={formdata.description}
                onChange={handleInput}
                placeholder="Write a brief description of your blog (2-3 sentences)"
                rows="2"
                className="w-full px-4 py-3.5 bg-blue-50/30 hover:bg-blue-50/50 focus:bg-white border-2 border-blue-100 rounded-xl focus:border-[#004f8a] focus:outline-none transition-all text-sm font-medium placeholder:text-slate-400 text-slate-600 resize-none shadow-sm leading-relaxed"
              />
            </div>

            {/* Content Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#004f8a] flex items-center gap-2">
                <FaFileAlt className="text-blue-400" /> Main Content Matrix
              </label>
              <textarea
                name="content"
                value={formdata.content}
                onChange={handleInput}
                placeholder="Write your blog content here... Share your story, ideas, or expertise"
                rows="10"
                className="w-full p-5 bg-blue-50/20 hover:bg-blue-50/40 focus:bg-white border-2 border-blue-100 rounded-2xl focus:border-[#004f8a] focus:outline-none transition-all text-sm font-medium placeholder:text-slate-400 text-slate-700 resize-none shadow-sm leading-relaxed"
              />
            </div>

            {/* Customized Media Upload Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#004f8a] flex items-center gap-2">
                <FaCloudUploadAlt className="text-xl text-blue-400" /> Cover Imagery
              </label>
              <div className="relative group/file border-2 border-dashed border-blue-200 hover:border-[#004f8a] bg-blue-50/20 hover:bg-blue-50/40 rounded-xl transition-all p-4 text-center cursor-pointer">
                <input
                  type="file"
                  name="image"
                  onChange={(e) =>
                    setFormData({
                      ...formdata,
                      image: e.target.files[0]
                    })
                  }
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                />
                <p className="text-xs font-bold text-slate-500 group-hover/file:text-[#004f8a] transition-colors">
                  {formdata.image ? `📎 Selected: ${formdata.image.name}` : "📂 Click or drag media file to attach cover image"}
                </p>
              </div>
            </div>

            {/* Dynamic Diagnostics Footnotes */}
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 pt-2 border-t border-blue-50">
              <span>Status: Ready to Stream</span>
              <span>{formdata.content.length} Metrics Counted</span>
            </div>

            {/* Control Form Buttons Pipelines */}
            <div className="space-y-3 pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-[#004f8a] hover:bg-[#003d6b] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-900/20 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
                    <span>Publishing Entry...</span>
                  </>
                ) : (
                  <span>Publish Blog Route</span>
                )}
              </button>

              <button
                type="button"
                onClick={() => navigate("/blogcards")}
                className="w-full bg-white hover:bg-blue-50/50 border border-blue-200 text-[#004f8a] py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 active:scale-95"
              >
                Cancel Pipeline
              </button>
            </div>

          </form>
        </div>

        {/* FOOTER NOTE */}
        <div className="text-center text-[11px] font-semibold text-slate-400 tracking-wide">
          🛡️ Content commits will undergo automatic indexing onto the public hub grid.
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;