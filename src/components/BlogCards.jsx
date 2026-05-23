
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios'

// // Enhanced topic configurations with more variety
// const topicConfigs = {
//   "jwt": { icon: "🔐", color: "from-purple-500 to-purple-700", bgGlow: "purple" },
//   "mongoose": { icon: "🍃", color: "from-green-500 to-green-700", bgGlow: "green" },
//   "ssr": { icon: "🖥️", color: "from-blue-500 to-blue-700", bgGlow: "blue" },
//   "bcrypt": { icon: "🔑", color: "from-yellow-500 to-yellow-700", bgGlow: "yellow" },
//   "csr": { icon: "💻", color: "from-cyan-500 to-cyan-700", bgGlow: "cyan" },
//   "mvc": { icon: "🏗️", color: "from-red-500 to-red-700", bgGlow: "red" },
//   "schema": { icon: "📦", color: "from-indigo-500 to-indigo-700", bgGlow: "indigo" },
//   "middleware": { icon: "⚙️", color: "from-gray-500 to-gray-700", bgGlow: "gray" },
//   "authentication": { icon: "🛡️", color: "from-rose-500 to-rose-700", bgGlow: "rose" },
//   "database": { icon: "🗄️", color: "from-emerald-500 to-emerald-700", bgGlow: "emerald" },
//   "api": { icon: "🌐", color: "from-amber-500 to-amber-700", bgGlow: "amber" },
//   "react": { icon: "⚛️", color: "from-sky-500 to-sky-700", bgGlow: "sky" },
//   "nodejs": { icon: "🟢", color: "from-lime-500 to-lime-700", bgGlow: "lime" },
//   "express": { icon: "🚂", color: "from-stone-500 to-stone-700", bgGlow: "stone" },
//   "mongodb": { icon: "🍃", color: "from-teal-500 to-teal-700", bgGlow: "teal" }
// };

// // Helper function to get consistent config for a topic
// const getTopicConfig = (topicName) => {
//   const topicKey = topicName?.toLowerCase().replace(/\s+/g, '');

//   if (topicConfigs[topicKey]) {
//     return topicConfigs[topicKey];
//   }

//   for (const [key, config] of Object.entries(topicConfigs)) {
//     if (topicKey?.includes(key) || key.includes(topicKey)) {
//       return config;
//     }
//   }

//   const hash = topicName?.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) || 0;
//   const configs = Object.values(topicConfigs);
//   return configs[hash % configs.length];
// };

// // Interactive Loading Skeleton with shimmer effect
// const LoadingSkeleton = () => (
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//     {[...Array(8)].map((_, i) => (
//       <div key={i} className="animate-pulse">
//         <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-6 h-64 relative overflow-hidden">
//           <div className="absolute inset-0 shimmer"></div>
//           <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
//           <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
//           <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
//           <div className="h-4 bg-gray-300 rounded w-2/3"></div>
//         </div>
//       </div>
//     ))}
//   </div>
// );

// // Empty State with suggestion
// const EmptyState = ({ searchTerm }) => (
//   <div className="text-center py-20">
//     <div className="text-7xl mb-6 animate-bounce">📚</div>
//     <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Topics Found</h3>
//     {searchTerm ? (
//       <p className="text-gray-500 mb-2">No results for "{searchTerm}"</p>
//     ) : (
//       <p className="text-gray-500">Check back later for new content!</p>
//     )}
//     <p className="text-sm text-gray-400 mt-4">✨ Try searching for something else ✨</p>
//   </div>
// );

// // Error State with better UI
// const ErrorState = ({ message, onRetry }) => (
//   <div className="text-center py-20">
//     <div className="text-7xl mb-6">⚠️</div>
//     <h3 className="text-2xl font-semibold text-gray-700 mb-2">Oops! Something went wrong</h3>
//     <p className="text-gray-500 mb-6 max-w-md mx-auto">{message || "Failed to load topics"}</p>
//     <button
//       onClick={onRetry}
//       className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
//     >
//       🔄 Try Again
//     </button>
//   </div>
// );

// const BlogCards = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [viewMode, setViewMode] = useState("grid"); // grid or list

//   const categories = ["all", ...new Set(blogs.map(blog => blog.category).filter(Boolean))];

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get('http://localhost:3000/api/blog/getallblog', {
//         withCredentials: true,
//         timeout: 10000
//       });

//       console.log("Fetched blogs:", response.data.blogs);
//       setBlogs(response.data.blogs || []);
//     } catch (err) {
//       console.error("Error fetching blogs:", err);
//       setError(err.response?.data?.message || err.message || "Failed to load topics");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filteredBlogs = blogs.filter(blog => {
//     const matchesSearch = blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       blog.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       blog.topic?.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory;

//     return matchesSearch && matchesCategory;
//   });

//   const uniqueTopics = [...new Set(blogs.map(blog => blog.topic).filter(Boolean))];
//   const totalArticles = blogs.length;
//   const estimatedReaders = totalArticles * 350;

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-12 px-4">
//         <div className="text-center mb-16">
//           <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-gradient">
//             Explore Topics
//           </h1>
//           <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
//         </div>
//         <LoadingSkeleton />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-12 px-4">
//         <ErrorState message={error} onRetry={fetchBlogs} />
//       </div>
//     );
//   }


  

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-12 px-4">
//       {/* Animated Background Decorations */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
//       </div>

//       {/* Header Section with Interactive Stats */}
//       <div className="text-center mb-12 relative">
//         <div className="inline-block">
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-2xl opacity-20 rounded-full"></div>
//           <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4 relative animate-gradient">
//             Explore Topics
//           </h1>
//         </div>
//         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//           Discover in-depth articles and tutorials on modern web development
//         </p>

//         {/* Interactive Stats Bar with hover effects */}
//         <div className="flex justify-center gap-8 mt-8 flex-wrap">
//           <div className="text-center group cursor-pointer">
//             <div className="text-3xl font-bold text-gray-800 group-hover:scale-110 transition-transform duration-300">
//               {uniqueTopics.length}
//             </div>
//             <div className="text-sm text-gray-500 group-hover:text-purple-600 transition-colors">Topics</div>
//           </div>
//           <div className="w-px h-12 bg-gray-300 hidden sm:block"></div>
//           <div className="text-center group cursor-pointer">
//             <div className="text-3xl font-bold text-gray-800 group-hover:scale-110 transition-transform duration-300">
//               {totalArticles}
//             </div>
//             <div className="text-sm text-gray-500 group-hover:text-purple-600 transition-colors">Articles</div>
//           </div>
//           <div className="w-px h-12 bg-gray-300 hidden sm:block"></div>
//           <div className="text-center group cursor-pointer">
//             <div className="text-3xl font-bold text-gray-800 group-hover:scale-110 transition-transform duration-300">
//               {estimatedReaders.toLocaleString()}+
//             </div>
//             <div className="text-sm text-gray-500 group-hover:text-purple-600 transition-colors">Readers</div>
//           </div>

//           {/* <div className="w-px h-12 bg-gray-300 hidden sm:block"></div> */}
//           {/* <div className="text-center group cursor-pointer"> */}
//           {/* <Link to={"/createblog"} className="text-3xl font-bold inline-block text-gray-800 group-hover:scale-110 transition-transform duration-300">
//               Create Post
//             </Link>
//             <div className="text-sm text-gray-500 group-hover:text-purple-600 transition-colors">click here to create post</div> */}
//           {/* </div> */}

//           {/* <Link to={"/createblog"}>create</Link> */}



//         </div>
//       </div>
//       <Link
//         to={"/createblog"}
//         className="text-center group cursor-pointer"
//       >
//         <div className="text-3xl font-bold text-gray-800 ">
//           Create
//         </div>

//         <div className="text-sm text-gray-500 group-hover:text-purple-600 transition-colors">
//           click here to create post
//         </div>
//       </Link>

//       {/* Enhanced Search and Filter Bar */}
//       <div className="max-w-7xl mx-auto mb-8">
//         <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//           {/* Search Input with clear button */}
//           <div className="relative w-full md:w-96">
//             <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search topics..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-10 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200"
//             />
//             {searchTerm && (
//               <button
//                 onClick={() => setSearchTerm("")}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//               >
//                 ✕
//               </button>
//             )}
//           </div>

//           <div className="flex gap-3 w-full md:w-auto">
//             {/* View Mode Toggle */}
//             <div className="flex gap-2 bg-white/80 backdrop-blur-sm rounded-xl p-1 border border-gray-200">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2 rounded-lg transition-all duration-200 ${viewMode === "grid"
//                   ? "bg-purple-600 text-white shadow-md"
//                   : "text-gray-500 hover:bg-gray-100"
//                   }`}
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
//                 </svg>
//               </button>
//               <button
//                 onClick={() => setViewMode("list")}
//                 className={`p-2 rounded-lg transition-all duration-200 ${viewMode === "list"
//                   ? "bg-purple-600 text-white shadow-md"
//                   : "text-gray-500 hover:bg-gray-100"
//                   }`}
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>

//             {/* Category Filter with scroll indicators */}
//             {categories.length > 1 && (
//               <div className="relative">
//                 <div className="flex gap-2 overflow-x-auto pb-2 max-w-md scrollbar-thin">
//                   {categories.map(cat => (
//                     <button
//                       key={cat}
//                       onClick={() => setSelectedCategory(cat)}
//                       className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 transform hover:scale-105 ${selectedCategory === cat
//                         ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
//                         : "bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-gray-100"
//                         }`}
//                     >
//                       {cat === "all" ? "🌟 All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Cards Grid with Interactive Animations */}
//       <div className="max-w-7xl mx-auto">
//         {filteredBlogs.length === 0 ? (
//           <EmptyState searchTerm={searchTerm} />
//         ) : (
//           <div className={`${viewMode === "grid"
//             ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//             : "space-y-4"
//             }`}>
//             {filteredBlogs.map((blog, index) => {
//               const config = getTopicConfig(blog.topic);
//               const isHovered = hoveredCard === blog._id;

//               return (
//                 <Link
//                   to={`/topics/${blog.topic}`}
//                   key={blog._id || index}
//                   className={`group transform transition-all duration-500 ${viewMode === "grid" ? "hover:-translate-y-2" : "hover:translate-x-2"
//                     }`}
//                   onMouseEnter={() => setHoveredCard(blog._id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                 >
//                   {viewMode === "grid" ? (
//                     // Grid View Card
//                     <div className="relative h-full">
//                       <div className={`absolute -inset-0.5 bg-gradient-to-r ${config.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}></div>
//                       <div className={`relative bg-gradient-to-br ${config.color} rounded-2xl p-6 shadow-xl overflow-hidden h-full flex flex-col transform transition-all duration-500 ${isHovered ? "scale-105" : ""
//                         }`}>
//                         <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
//                         <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full transform -translate-x-12 translate-y-12"></div>

//                         <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
//                           {config.icon}
//                         </div>

//                         <h2 className="text-2xl font-bold text-white mb-2 line-clamp-2">
//                           { blog.topic}
//                         </h2>

//                         <p className="text-white/80 text-sm mb-4 flex-grow line-clamp-3">
//                           {blog.title}
//                         </p>

//                         {blog.author && (
//                           <div className="flex items-center gap-2 text-white/60 text-xs mb-3">
//                             <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
//                               <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                             </svg>
//                             <span>{blog.author}</span>
//                           </div>
//                         )}

//                         <div className="flex items-center justify-between pt-3 border-t border-white/20 mt-auto">
//                           <span className="text-white/60 text-xs flex items-center gap-1">
//                             <span className="inline-block w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
//                             Click to explore
//                           </span>
//                           <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     // List View Card
//                     <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
//                       <div className="flex items-center gap-4">
//                         <div className="text-4xl">{config.icon}</div>
//                         <div className="flex-1">
//                           <h3 className="font-semibold text-gray-800">{blog.title || blog.topic}</h3>
//                           <p className="text-sm text-gray-500 line-clamp-1">{blog.description}</p>
//                         </div>
//                         <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                       </div>
//                     </div>
//                   )}
//                 </Link>
//               );
//             })}
//           </div>
//         )}
//       </div>

//       {/* Interactive Footer */}
//       <div className="text-center mt-16">
//         <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
//           <span className="text-2xl animate-wave">✨</span>
//           <p className="text-gray-600 text-sm">
//             {filteredBlogs.length} {filteredBlogs.length === 1 ? "topic" : "topics"} available • Click to start learning
//           </p>
//           <span className="text-2xl animate-wave delay-100">✨</span>
//         </div>
//       </div>

  
       
//     </div>
//   );
// };

// export default BlogCards;









import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// Enhanced topic configurations matching your premium blue/dark theme accents
const topicConfigs = {
  "jwt": { icon: "🔐", color: "from-[#004f8a] to-[#002f54]", bgGlow: "blue" },
  "mongoose": { icon: "🍃", color: "from-emerald-600 to-emerald-800", bgGlow: "emerald" },
  "ssr": { icon: "🖥️", color: "from-[#005c9e] to-[#003b66]", bgGlow: "sky" },
  "bcrypt": { icon: "🔑", color: "from-amber-500 to-amber-700", bgGlow: "amber" },
  "csr": { icon: "💻", color: "from-cyan-600 to-cyan-800", bgGlow: "cyan" },
  "mvc": { icon: "🏗️", color: "from-rose-600 to-rose-800", bgGlow: "rose" },
  "schema": { icon: "📦", color: "from-indigo-600 to-indigo-800", bgGlow: "indigo" },
  "middleware": { icon: "⚙️", color: "from-slate-600 to-slate-800", bgGlow: "slate" },
  "authentication": { icon: "🛡️", color: "from-blue-600 to-blue-800", bgGlow: "blue" },
  "database": { icon: "🗄️", color: "from-teal-600 to-teal-800", bgGlow: "teal" },
  "api": { icon: "🌐", color: "from-indigo-500 to-indigo-700", bgGlow: "indigo" },
  "react": { icon: "⚛️", color: "from-sky-500 to-sky-700", bgGlow: "sky" },
  "nodejs": { icon: "🟢", color: "from-green-600 to-green-800", bgGlow: "green" },
  "express": { icon: "🚂", color: "from-neutral-600 to-neutral-800", bgGlow: "neutral" },
  "mongodb": { icon: "🍃", color: "from-emerald-500 to-emerald-700", bgGlow: "emerald" }
};

const getTopicConfig = (topicName) => {
  const topicKey = topicName?.toLowerCase().replace(/\s+/g, '');

  if (topicConfigs[topicKey]) {
    return topicConfigs[topicKey];
  }

  for (const [key, config] of Object.entries(topicConfigs)) {
    if (topicKey?.includes(key) || key.includes(topicKey)) {
      return config;
    }
  }

  const hash = topicName?.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) || 0;
  const configs = Object.values(topicConfigs);
  return configs[hash % configs.length];
};

const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
    {[...Array(8)].map((_, i) => (
      <div key={i} className="animate-pulse bg-white/60 border border-white/40 rounded-3xl p-6 h-64 relative overflow-hidden">
        <div className="w-14 h-14 bg-gray-200 rounded-2xl mb-4"></div>
        <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded-md w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-md w-2/3"></div>
      </div>
    ))}
  </div>
);

const EmptyState = ({ searchTerm }) => (
  <div className="text-center py-20 bg-white/40 border border-white/40 backdrop-blur-md rounded-[32px] max-w-3xl mx-auto p-8 shadow-sm">
    <div className="text-7xl mb-4">📚</div>
    <h3 className="text-2xl font-bold text-[#004f8a]">No Topics Found</h3>
    {searchTerm ? (
      <p className="text-sm text-gray-500 mt-2">No results matching "{searchTerm}"</p>
    ) : (
      <p className="text-sm text-gray-500 mt-2">Check back later for premium content!</p>
    )}
    <p className="text-sm text-[#004f8a]/60 mt-4 font-semibold">✨ Try tweaking your search filters ✨</p>
  </div>
);

const ErrorState = ({ message, onRetry }) => (
  <div className="text-center py-16 bg-white/40 border border-white/40 backdrop-blur-md rounded-[32px] max-w-md mx-auto p-8 shadow-sm">
    <div className="text-6xl mb-4">⚠️</div>
    <h3 className="text-xl font-bold text-red-700">System Connection Issue</h3>
    <p className="text-sm text-gray-500 mt-2 mb-6 leading-relaxed">{message || "Failed to sync topics"}</p>
    <button
      onClick={onRetry}
      className="px-6 py-3 bg-[#004f8a] hover:bg-[#003f6e] text-white text-sm font-semibold rounded-full shadow-md transition-all duration-200"
    >
      🔄 Sync Database Again
    </button>
  </div>
);

const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [viewMode, setViewMode] = useState("grid");

  const categories = ["all", ...new Set(blogs.map(blog => blog.category).filter(Boolean))];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:3000/api/blog/getallblog', {
        withCredentials: true,
        timeout: 10000
      });
      setBlogs(response.data.blogs || []);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError(err.response?.data?.message || err.message || "Failed to load topics");
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.topic?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const uniqueTopics = [...new Set(blogs.map(blog => blog.topic).filter(Boolean))];
  const totalArticles = blogs.length;
  const estimatedReaders = totalArticles * 350;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#e4f3ff] py-16 px-6 font-sans">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#004f8a] tracking-wide">Explore Knowledge Base</h1>
          <div className="w-16 h-1 bg-[#004f8a] mx-auto rounded-full mt-4 opacity-30"></div>
        </div>
        <LoadingSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#e4f3ff] flex items-center justify-center px-6 font-sans">
        <ErrorState message={error} onRetry={fetchBlogs} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e4f3ff] py-12 px-4 md:px-8 font-sans select-none relative overflow-hidden">
      
      {/* Background Subtle Mobile-App Style Theme Shapes */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#b9daf3] rounded-full opacity-40 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-[#004f8a] rounded-full opacity-10 blur-3xl pointer-events-none"></div>

      {/* Main Container Wrapper to bring structural symmetry */}
      <div className="max-w-7xl mx-auto z-10 relative">

        {/* Top Professional App Bar / Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#004f8a]/10 pb-6 mb-10 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-[#004f8a] tracking-tight">
              Explore Topics
            </h1>
            <p className="text-sm text-gray-500 mt-2 font-medium max-w-xl leading-relaxed">
              Professional curation of clean resources, core technical documentation and modern stacks.
            </p>
          </div>

          {/* Create Button Component Styled exactly matching your theme button styling */}
          <Link
            to={"/createblog"}
            className="inline-flex items-center gap-2.5 bg-[#004f8a] hover:bg-[#003f6e] self-start md:self-auto text-white px-6 py-3 rounded-full text-sm font-bold shadow-md shadow-[#004f8a]/10 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[18px] h-[18px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span>Create Post</span>
          </Link>
        </div>

        {/* Statistics Metric Bar Cards */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mb-8 bg-white/50 backdrop-blur-md p-5 rounded-3xl border border-white/60 shadow-sm">
          <div className="text-center py-2 px-1 border-r border-[#004f8a]/10">
            <div className="text-2xl md:text-3xl font-black text-[#004f8a]">{uniqueTopics.length}</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Topics</div>
          </div>
          <div className="text-center py-2 px-1 border-r border-[#004f8a]/10">
            <div className="text-2xl md:text-3xl font-black text-[#004f8a]">{totalArticles}</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Articles</div>
          </div>
          <div className="text-center py-2 px-1">
            <div className="text-2xl md:text-3xl font-black text-[#004f8a]">{estimatedReaders.toLocaleString()}</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Readers</div>
          </div>
        </div>

        {/* Navigation & Intelligent Search Bar Wrapper */}
        <div className="bg-white/80 border border-white/60 shadow-sm rounded-3xl p-5 mb-8 flex flex-col lg:flex-row gap-5 items-center justify-between backdrop-blur-md">
          
          {/* Custom Styled Search Input with built-in icons */}
          <div className="relative w-full lg:w-96">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.603Z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search database nodes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-[#e4f3ff]/50 border border-[#b9daf3] rounded-2xl text-sm text-gray-700 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#004f8a]/20 focus:bg-white transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#004f8a] text-sm font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Interactive Responsive Controls */}
          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
            
            {/* Minimalist Categories List Segmented Control */}
            {categories.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto max-w-full no-scrollbar py-1">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                      selectedCategory === cat
                        ? "bg-[#004f8a] text-white shadow-sm"
                        : "bg-white border border-gray-100 text-gray-500 hover:text-[#004f8a] hover:bg-[#e4f3ff]"
                    }`}
                  >
                    {cat === "all" ? "🌟 All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            )}

            {/* View Layout Toggles */}
            <div className="flex items-center bg-[#e4f3ff]/60 border border-[#b9daf3] p-1 rounded-xl">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-white text-[#004f8a] shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 8.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-white text-[#004f8a] shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Cards Output Display */}
        <div>
          {console.log(filteredBlogs) }
          {filteredBlogs.length === 0 ? (
            <EmptyState searchTerm={searchTerm} />
          ) : (
            <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}>
              {filteredBlogs.map((blog, index) => {
                const config = getTopicConfig(blog.topic);
                const isHovered = hoveredCard === blog._id;

                return (
                  <Link
                    to={`/topics/${blog.topic}`}
                    key={blog._id || index}
                    className="group block transition-all duration-300"
                    onMouseEnter={() => setHoveredCard(blog._id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {viewMode === "grid" ? (
                      /* Enhanced Premium Grid Card layout styled explicitly to match image aesthetics */
                      <div className="bg-white rounded-[24px] border border-gray-100/80 shadow-sm hover:shadow-xl p-6 relative overflow-hidden flex flex-col justify-between h-[290px] transition-all duration-300 transform hover:-translate-y-1">
                        
                        {/* Smooth color accents inside cards */}
                        <div className={`absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r ${config.color}`}></div>
                        
                        <div>
                          {/* App icon block container */}
                          <div className="w-14 h-14 rounded-2xl bg-[#e4f3ff] flex items-center justify-center text-3xl shadow-inner mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            {config.icon}
                          </div>

                          <h2 className="text-lg font-black text-[#004f8a] line-clamp-1 tracking-tight group-hover:text-[#005c9e] transition-colors">
                            {blog.topic}
                          </h2>

                          <p className="text-sm text-gray-500 font-medium line-clamp-3 mt-2 leading-relaxed">
                            {blog.title}
                          </p>
                        </div>

                        {/* Author and Metadata section */}
                        <div className="pt-4 border-t border-gray-50 mt-auto flex items-center justify-between text-xs">
                          {blog.user.username ? (
                            <div className="flex items-center gap-2 text-gray-400 font-semibold">
                              <div className="w-5 h-5 rounded-full bg-[#b9daf3] text-[10px] flex items-center justify-center font-black text-[#004f8a] uppercase">
                                {blog.user.username.charAt(0)}
                              </div>
                              <span className="line-clamp-1">{blog.user.username}</span>
                            </div>
                          ) : (
                            <span className="text-gray-300 font-medium italic">Anonymous</span>
                          )}

                          <div className="flex items-center gap-1 font-bold text-[#004f8a] group-hover:gap-2 transition-all">
                            <span>Explore</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                          </div>
                        </div>

                      </div>
                    ) : (
                      /* Elegant Strip List View layout designed beautifully */
                      <div className="bg-white hover:bg-white rounded-2xl p-5 shadow-sm hover:shadow-md border border-gray-100 flex items-center justify-between gap-5 transition-all transform hover:translate-x-1">
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="w-12 h-12 rounded-xl bg-[#e4f3ff] flex items-center justify-center text-2xl shrink-0">
                            {config.icon}
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-base font-black text-[#004f8a] tracking-tight line-clamp-1">
                              {blog.topic} <span className="text-gray-300 font-normal mx-2">|</span> <span className="text-gray-500 font-semibold text-sm">{blog.title}</span>
                            </h3>
                            <p className="text-sm text-gray-400 line-clamp-1 mt-1">{blog.description || 'No supplementary description nodes attached to this segment.'}</p>
                          </div>
                        </div>

                        <div className="shrink-0 flex items-center text-gray-400 group-hover:text-[#004f8a] transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Global Minimal Bottom Sync Status Footer */}
        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/40 border border-white/60 backdrop-blur-md rounded-full shadow-sm text-xs font-bold text-gray-500">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
            <span>{filteredBlogs.length} systems synced successfully • Click standard vectors to access details</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogCards;