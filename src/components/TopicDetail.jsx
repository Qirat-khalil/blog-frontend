

// import api from '../config/api';



// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { FaHeart, FaComment } from "react-icons/fa";
// import { currentUser } from "../services/authService";
// import {
//   fetchBlogsByTopic,
//   likeBlog,
//   commentBlog,
//   deleteBlog,
//   updateBlog
// } from "../services/blogService";
// import BlogsCards from './BlogsCards';

// import EditModel from './EditModal'
// import BlogModal from './BlogModal';
// // import axios from 'axios';

// const TopicDetail = () => {

//   const navigate = useNavigate();
//   const { topic } = useParams();

//   const [blogData, setBlogData] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [isDetailOpen, setIsDetailOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   const [commentText, setCommentText] = useState("");
//   const [editModal, setEditModal] = useState(false)

//   // const userId = localStorage.getItem("userId");

//   // FETCH BLOGS
//   useEffect(() => {

//     const detailTopic = async () => {

//       try {

//         setLoading(true);

//         // const response = await axios.get(
//         //   `http://localhost:3000/api/blog/fetchblog/${topic}`,
//         //   {
//         //     withCredentials: true
//         //   }
//         // );

//         // const response = await api.get(`/api/blog/fetchblog/${topic}`);

//         const response = await fetchBlogsByTopic(topic);


//         const data = response.data.blogs || [];
//         console.log("yeh fetch blog ka data arha h ",data);
        

//         setBlogData(data);

//       } catch (error) {

//         console.log(error);

//       } finally {

//         setLoading(false);

//       }

//     };

//     detailTopic();
//     UserFind()

//   }, [topic]);

//   // OPEN MODAL
//   const handlePostClick = (post) => {

//     setSelectedPost(post);
//     setIsDetailOpen(true);

//   };

//   // BACK BUTTON
//   const handleBackToTopics = () => {

//     navigate('/blogcards');

//   };

//   // find user
//   const UserFind = async () => {
//     try {

//       // const response = await axios.get(
//       //   "http://localhost:3000/api/auth/currentuser",
//       //   {
//       //     withCredentials: true
//       //   }
//       // );
//       // const response = await api.get("/auth/currentuser");
//       const response = await currentUser();


//       console.log("user find", response.data.user);
//       setUser(response.data.user)


//     } catch (error) {

//       console.log(error.response?.data || error.message);

//     }
//   };



//   // LIKE FUNCTION
//   const handleLike = async (id) => {

//     try {

//       // const response = await axios.put(
//       //   `http://localhost:3000/api/blog/likes/${id}`,
//       //   {},
//       //   {
//       //     withCredentials: true
//       //   }
//       // );

//       // const response = await api.put(`/blog/likes/${id}`)

//       const response = await likeBlog(id);



//       // UPDATE UI
//       setBlogData((prev) =>
//         prev.map((post) =>
//           post._id === id
//             ? {
//               ...post,
//               likes: response.data.isLiked
//                 ? [...post.likes, user?.id]
//                 : post.likes.filter(
//                   (likeId) => likeId !== user?.id
//                 )
//             }
//             : post
//         )
//       );

//       // UPDATE MODAL
//       if (selectedPost?._id === id) {

//         setSelectedPost((prev) => ({
//           ...prev,
//           likes: response.data.isLiked
//             ? [...prev.likes, user?.id]
//             : prev.likes.filter(
//               (likeId) => likeId !== user?.id
//             )
//         }));

//       }

//     } catch (error) {

//       console.log(error);

//     }

//   };

//   // COMMENT FUNCTION
//   const handleComment = async (blogId) => {

//     if (!commentText.trim()) return;

//     try {

//       // const response = await axios.post(
//       //   `http://localhost:3000/api/blog/comment/${blogId}`,
//       //   {
//       //     text: commentText
//       //   },
//       //   {
//       //     withCredentials: true
//       //   }
//       // );

//       // const response = await api.post(`/blog/comment/${blogId}`,
//       //   {
//       //     text: commentText
//       //   }
//       // );

//       const response = await commentBlog(blogId, commentText);

//       console.log(response.data);

//       // UPDATE BLOG UI
//       setBlogData((prev) =>
//         prev.map((post) =>
//           post._id === blogId
//             ? {
//               ...post,
//               comments: [
//                 ...post.comments,
//                 response.data.newComment
//               ]
//             }
//             : post
//         )
//       );

//       // UPDATE MODAL UI
//       setSelectedPost((prev) => ({
//         ...prev,
//         comments: [
//           ...prev.comments,
//           response.data.newComment
//         ]
//       }));
//       console.log(response.data);

//       setCommentText("");

//     } catch (error) {

//       console.log(
//         error.response?.data || error.message
//       );

//     }

//   };



//   const handleDelete = async (id) => {
//     try {

//       // const response = await axios.delete(
//       //   `http://localhost:3000/api/blog/deleteblog/${id}`,
//       //   {
//       //     withCredentials: true
//       //   }
//       // );

//       // const response = await api.delete(`/blog/deleteblog/${id}`);
//       const response = await deleteBlog(id);

//       console.log(response.data);

//       // UI UPDATE
//       setBlogData((prev) =>
//         prev.filter((post) => post._id !== id)
//       );

//       // modal close agar deleted post open ho
//       if (selectedPost?._id === id) {
//         setIsDetailOpen(false);
//         setSelectedPost(null);
//       }

//     } catch (error) {

//       console.log(error.response?.data || error.message);

//     }
//   };

//   // edit api


//   const [edit, setEdit] = useState({
//     topic: '',
//     title: '',
//     description: '',
//     content: '',
//     image: '',
//   })


//   const handleEdit = async (post) => {
//     setEdit({
//       topic: post.topic,
//       title: post.title,
//       description: post.description,
//       content: post.content,
//       image: post.image,
//     })

//     setSelectedPost(post);

//     setEditModal(true);
//   }

//   // find handleEdit
//   const handleUpdate = async (id) => {
//     try {

//       // const response = await axios.put(
//       //   `http://localhost:3000/api/blog/updateblog/${id}`,
//       //   edit,
//       //   {
//       //     withCredentials: true
//       //   }
//       // );

//       // const response = await api.put(`/blog/updateblog/${id}`,
//       //   edit
//       // );
//       const response = await updateBlog(id, edit);

//       console.log("find edit blog", response.data);
//       setBlogData((pre) =>
//         pre.map((post) =>
//           post._id === selectedPost._id
//             ? response.data.blogupdate
//             : post
//         )

//       )
//       setEditModal(false);

//     } catch (error) {

//       console.log(error.response?.data || error.message);

//     }
//   };


//   return (
//     <>

//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4">

//         <div className="max-w-6xl mx-auto">

//           {/* HEADER */}
//           <div className="mb-8">

//             <div className="flex items-center justify-between mb-6">

//               <div>

//                 <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
//                   👥 Community Posts
//                 </h2>

//                 <p className="text-gray-500 mt-1">
//                   What people are sharing about this topic
//                 </p>

//               </div>

//               <div className="text-sm text-purple-600 bg-purple-50 px-4 py-2 rounded-full">
//                 {blogData.length} articles
//               </div>

//             </div>

//             {/* LOADING */}
//             {loading ? (

//               <div className="flex justify-center items-center py-20">
//                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
//               </div>

//             ) : blogData.length === 0 ? (

//               <div className="text-center py-20">
//                 <div className="text-6xl mb-4">📝</div>
//                 <p className="text-gray-500 text-lg">No posts found in this topic</p>
//                 <button
//                   onClick={handleBackToTopics}
//                   className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
//                 >
//                   Browse Other Topics
//                 </button>
//               </div>

//             ) : (

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//                 {blogData.map((post) => (

//                   // <div
//                   //   key={post._id}
//                   //   onClick={() => handlePostClick(post)}
//                   //   className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
//                   // >

//                   //   {/* IMAGE - FIXED */}
//                   //   <div className="h-52 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 relative">
//                   //     <img
//                   //       src={getImageUrl(post.image)}
//                   //       alt={post.title}
//                   //       className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//                   //       onError={(e) => {
//                   //         // Fallback if image fails to load
//                   //         e.target.src = 'https://picsum.photos/id/20/800/600';
//                   //       }}
//                   //     />
//                   //     {/* Topic Badge */}
//                   //     {post.topic && (
//                   //       <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
//                   //         #{post.topic}
//                   //       </div>
//                   //     )}
//                   //   </div>

//                   //   {/* CONTENT */}
//                   //   <div className="p-5">

//                   //     <h3 className="font-bold text-xl mb-2 line-clamp-2 hover:text-purple-600 transition">
//                   //       {post.title}
//                   //     </h3>

//                   //     <p className="text-gray-600 mb-3 line-clamp-2">
//                   //       {post.description}
//                   //     </p>

//                   //     <div className="flex justify-between items-center text-sm mt-4 pt-3 border-t border-gray-100">

//                   //       {/* LIKE */}
//                   //       <button
//                   //         onClick={(e) => {
//                   //           e.stopPropagation();
//                   //           handleLike(post._id);
//                   //         }}
//                   //         className="flex items-center gap-2 hover:scale-110 transition transform"
//                   //       >

//                   //         <FaHeart
//                   //           className={`text-lg transition ${post.likes?.includes(user?.id)
//                   //             ? "text-red-500 fill-red-500"
//                   //             : "text-gray-400 hover:text-red-400"
//                   //             }`}
//                   //         />

//                   //         <span className="text-gray-600">
//                   //           {post.likes?.length || 0}
//                   //         </span>

//                   //       </button>

//                   //       {/* COMMENT */}
//                   //       <div className="flex items-center gap-2 text-gray-500">

//                   //         <FaComment className="text-lg" />

//                   //         <span>
//                   //           {post.comments?.length || 0}
//                   //         </span>

//                   //       </div>

//                   //       {/* {user?._id === (post.user?.id || post.user)&& (
//                   //         <button
//                   //           onClick={(e) => {
//                   //             e.stopPropagation();
//                   //             handleDelete(post._id);
//                   //           }}
//                   //           className="text-red-500"
//                   //         >
//                   //           Delete
//                   //         </button>
//                   //       )} */}




//                   //       {user && (user.id === (post.user?._id || post.user)) && (
//                   //         <button
//                   //           onClick={(e) => {
//                   //             e.stopPropagation();
//                   //             handleDelete(post._id);
//                   //           }}
//                   //           className="text-red-500"
//                   //         >
//                   //           Delete
//                   //         </button>
//                   //       )}


//                   //       {user && (user.id === (post.user?._id || post.user)) && (
//                   //         <button
//                   //           onClick={(e) => {
//                   //             e.stopPropagation();
//                   //             handleEdit(post);
//                   //           }}
//                   //           className="text-red-500"
//                   //         >
//                   //           Edit
//                   //         </button>
//                   //       )}

//                   //     </div>

//                   //   </div>

//                   // </div>

//                   <BlogsCards
//                     key={post._id}
//                     post={post}
//                     user={user}
//                     handleLike={handleLike}
//                     handleDelete={handleDelete}
//                     handleEdit={handleEdit}
//                     handlePostClick={handlePostClick}
//                     // getImageUrl={getImageUrl}
//                   />

//                 ))}

//               </div>

//             )}
//             {/* {editModal && (

//               <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

//                 <div className="bg-white p-6 rounded-xl w-[500px]">

//                   <h2 className="text-2xl font-bold mb-4">
//                     Edit Blog
//                   </h2>


//                   <label className="block mb-1 font-medium">
//                     Topic
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="topic"
//                     value={edit.topic}
//                     onChange={(e) =>
//                       setEdit({
//                         ...edit,
//                         topic: e.target.value
//                       })
//                     }
//                     className="w-full border p-2 mb-3 rounded"
//                   />

//                   <label className="block mb-1 font-medium">
//                     Title
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Title"
//                     value={edit.title}
//                     onChange={(e) =>
//                       setEdit({
//                         ...edit,
//                         title: e.target.value
//                       })
//                     }
//                     className="w-full border p-2 mb-3 rounded"
//                   />

//                   <label className="block mb-1 font-medium">
//                     Description
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Description"
//                     value={edit.description}
//                     onChange={(e) =>
//                       setEdit({
//                         ...edit,
//                         description: e.target.value
//                       })
//                     }
//                     className="w-full border p-2 mb-3 rounded"
//                   />

//                   <label className="block mb-1 font-medium">
//                     Content
//                   </label>
//                   <textarea
//                     placeholder="Content"
//                     value={edit.content}
//                     onChange={(e) =>
//                       setEdit({
//                         ...edit,
//                         content: e.target.value
//                       })
//                     }
//                     className="w-full border p-2 mb-3 rounded h-32"
//                   />


//                   <label className="block mb-1 font-medium">
//                     Image
//                   </label>
//                   <input
//                     type="file"
//                     placeholder="image"
//                     onChange={(e) =>
//                       setEdit({
//                         ...edit,
//                         image: e.target.files[0]
//                       })
//                     }
//                     className="w-full border p-2 mb-3 rounded"
//                   />

//                   <div className="flex gap-3">

//                     <button
//                       onClick={() => handleUpdate(selectedPost._id)}
//                       className="bg-purple-500 text-white px-4 py-2 rounded"
//                     >
//                       Update
//                     </button>

//                     <button
//                       onClick={() => setEditModal(false)}
//                       className="bg-gray-400 text-white px-4 py-2 rounded"
//                     >
//                       Cancel
//                     </button>

//                   </div>

//                 </div>

//               </div>

//             )} */}


//             <EditModel
//               editModal={editModal}
//               edit={edit}
//               setEdit={setEdit}
//               setEditModal={setEditModal}
//               handleUpdate={handleUpdate}
//               selectedPost={selectedPost}
//             />

//           </div>




//           {/* BACK BUTTON */}
//           <div className="flex justify-center mt-8">

//             <button
//               onClick={handleBackToTopics}
//               className="bg-gray-900 text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
//             >
//               <span>←</span> Back to All Blogs
//             </button>

//           </div>

//         </div>

//       </div>

//       {/* MODAL */}



//       <BlogModal
//         isDetailOpen={isDetailOpen}
//         setIsDetailOpen={setIsDetailOpen}
//         selectedPost={selectedPost}
//         commentText={commentText}
//         setCommentText={setCommentText}
//         handleComment={handleComment}
//         // getImageUrl={getImageUrl}
//       />

//     </>
//   );

// };

// export default TopicDetail;






















// import api from '../config/api';
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { FaHeart, FaComment, FaArrowLeft, FaHashtag, FaBookOpen } from "react-icons/fa";
// import { currentUser } from "../services/authService";
// import {
//   fetchBlogsByTopic,
//   likeBlog,
//   commentBlog,
//   deleteBlog,
//   updateBlog
// } from "../services/blogService";
// import BlogsCards from './BlogsCards';
// import EditModel from './EditModal';
// import BlogModal from './BlogModal';

// const TopicDetail = () => {
//   const navigate = useNavigate();
//   const { topic } = useParams();

//   const [blogData, setBlogData] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [isDetailOpen, setIsDetailOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   const [commentText, setCommentText] = useState("");
//   const [editModal, setEditModal] = useState(false);

//   // FETCH BLOGS
//   useEffect(() => {
//     const detailTopic = async () => {
//       try {
//         setLoading(true);
//         const response = await fetchBlogsByTopic(topic);
//         const data = response.data.blogs || [];
//         console.log("yeh fetch blog ka data arha h ", data);
//         setBlogData(data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     detailTopic();
//     UserFind();
//   }, [topic]);

//   // OPEN MODAL
//   const handlePostClick = (post) => {
//     setSelectedPost(post);
//     setIsDetailOpen(true);
//   };

//   // BACK BUTTON
//   const handleBackToTopics = () => {
//     navigate('/blogcards');
//   };

//   // find user
//   const UserFind = async () => {
//     try {
//       const response = await currentUser();
//       console.log("user find", response.data.user);
//       setUser(response.data.user);
//     } catch (error) {
//       console.log(error.response?.data || error.message);
//     }
//   };

//   // LIKE FUNCTION
//   const handleLike = async (id) => {
//     try {
//       const response = await likeBlog(id);

//       // UPDATE UI
//       setBlogData((prev) =>
//         prev.map((post) =>
//           post._id === id
//             ? {
//                 ...post,
//                 likes: response.data.isLiked
//                   ? [...post.likes, user?.id]
//                   : post.likes.filter((likeId) => likeId !== user?.id)
//               }
//             : post
//         )
//       );

//       // UPDATE MODAL
//       if (selectedPost?._id === id) {
//         setSelectedPost((prev) => ({
//           ...prev,
//           likes: response.data.isLiked
//             ? [...prev.likes, user?.id]
//             : prev.likes.filter((likeId) => likeId !== user?.id)
//         }));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // COMMENT FUNCTION
//   const handleComment = async (blogId) => {
//     if (!commentText.trim()) return;

//     try {
//       const response = await commentBlog(blogId, commentText);
//       console.log(response.data);

//       // UPDATE BLOG UI
//       setBlogData((prev) =>
//         prev.map((post) =>
//           post._id === blogId
//             ? {
//                 ...post,
//                 comments: [...post.comments, response.data.newComment]
//               }
//             : post
//         )
//       );

//       // UPDATE MODAL UI
//       setSelectedPost((prev) => ({
//         ...prev,
//         comments: [...prev.comments, response.data.newComment]
//       }));
//       console.log(response.data);
//       setCommentText("");
//     } catch (error) {
//       console.log(error.response?.data || error.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await deleteBlog(id);
//       console.log(response.data);

//       // UI UPDATE
//       setBlogData((prev) => prev.filter((post) => post._id !== id));

//       // modal close agar deleted post open ho
//       if (selectedPost?._id === id) {
//         setIsDetailOpen(false);
//         setSelectedPost(null);
//       }
//     } catch (error) {
//       console.log(error.response?.data || error.message);
//     }
//   };

//   const [edit, setEdit] = useState({
//     topic: '',
//     title: '',
//     description: '',
//     content: '',
//     image: '',
//   });

//   const handleEdit = async (post) => {
//     setEdit({
//       topic: post.topic,
//       title: post.title,
//       description: post.description,
//       content: post.content,
//       image: post.image,
//     });
//     setSelectedPost(post);
//     setEditModal(true);
//   };

//   // find handleEdit
//   const handleUpdate = async (id) => {
//     try {
//       const response = await updateBlog(id, edit);
//       console.log("find edit blog", response.data);
//       setBlogData((pre) =>
//         pre.map((post) =>
//           post._id === selectedPost._id
//             ? response.data.blogupdate
//             : post
//         )
//       );
//       setEditModal(false);
//     } catch (error) {
//       console.log(error.response?.data || error.message);
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-indigo-950 to-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
          
//           {/* TOP NAVIGATION / HEADER */}
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-8 mb-10 gap-4">
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={handleBackToTopics}
//                 className="p-3 bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/50 rounded-xl transition-all duration-300 group text-indigo-400"
//                 title="Back to Topics"
//               >
//                 <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-sm" />
//               </button>
//               <div>
//                 <div className="flex items-center gap-2 mb-1">
//                   <span className="p-1 px-2.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-md flex items-center gap-1">
//                     <FaHashtag className="text-[10px]" /> {topic || "Trending"}
//                   </span>
//                 </div>
//                 <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-200 bg-clip-text text-transparent">
//                   Community Hub
//                 </h2>
//                 <p className="text-slate-400 text-sm mt-1">
//                   Discover fresh perspectives and insightful write-ups.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center self-start md:self-auto">
//               <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-xl backdrop-blur-md shadow-inner">
//                 <FaBookOpen className="text-indigo-400" />
//                 <span>{blogData.length} {blogData.length === 1 ? 'Article' : 'Articles'} Available</span>
//               </div>
//             </div>
//           </div>

//           {/* MAIN CONTENT AREA */}
//           {loading ? (
//             <div className="flex flex-col justify-center items-center py-32 space-y-4">
//               <div className="relative w-14 h-14">
//                 <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20"></div>
//                 <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
//               </div>
//               <p className="text-slate-400 text-sm animate-pulse tracking-wide">Fetching data stream...</p>
//             </div>
//           ) : blogData.length === 0 ? (
//             <div className="relative overflow-hidden bg-slate-900/40 border border-slate-800/60 rounded-3xl p-12 text-center max-w-xl mx-auto backdrop-blur-xl shadow-2xl mt-12">
//               <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl"></div>
//               <div className="text-5xl mb-4 filter drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]">📝</div>
//               <h3 className="text-lg font-semibold text-slate-200 mb-1">Silence in the Feed</h3>
//               <p className="text-slate-400 text-sm max-w-xs mx-auto mb-6">
//                 No active posts found under this topic yet. Be the pioneer or explore alternative categories.
//               </p>
//               <button
//                 onClick={handleBackToTopics}
//                 className="inline-flex items-center justify-center text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-6 py-3 rounded-xl shadow-lg shadow-indigo-900/30 active:scale-[0.98] transition-all duration-200"
//               >
//                 Browse Other Topics
//               </button>
//             </div>
//           ) : (
//             /* CARDS GRID */
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
//               {blogData.map((post) => (
//                 <div key={post._id} className="transition-all duration-300 hover:scale-[1.01]">
//                   <BlogsCards
//                     post={post}
//                     user={user}
//                     handleLike={handleLike}
//                     handleDelete={handleDelete}
//                     handleEdit={handleEdit}
//                     handlePostClick={handlePostClick}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* BOTTOM QUICK NAVIGATION */}
//           <div className="flex justify-center mt-16 border-t border-slate-800/60 pt-10">
//             <button
//               onClick={handleBackToTopics}
//               className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 px-8 py-3.5 rounded-xl shadow-xl transition-all duration-300 active:scale-95"
//             >
//               <FaArrowLeft className="text-[10px]" /> Return to Directory
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* MODALS */}
//       <EditModel
//         editModal={editModal}
//         edit={edit}
//         setEdit={setEdit}
//         setEditModal={setEditModal}
//         handleUpdate={handleUpdate}
//         selectedPost={selectedPost}
//       />

//       <BlogModal
//         isDetailOpen={isDetailOpen}
//         setIsDetailOpen={setIsDetailOpen}
//         selectedPost={selectedPost}
//         commentText={commentText}
//         setCommentText={setCommentText}
//         handleComment={handleComment}
//       />
//     </>
//   );
// };

// export default TopicDetail;


































import api from '../config/api';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaHeart, FaComment, FaArrowLeft, FaHashtag, FaBookOpen } from "react-icons/fa";
import { currentUser } from "../services/authService";
import {
  fetchBlogsByTopic,
  likeBlog,
  commentBlog,
  deleteBlog,
  updateBlog
} from "../services/blogService";
import BlogsCards from './BlogsCards';
import EditModel from './EditModal';
import BlogModal from './BlogModal';

const TopicDetail = () => {
  const navigate = useNavigate();
  const { topic } = useParams();

  const [blogData, setBlogData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const [commentText, setCommentText] = useState("");
  const [editModal, setEditModal] = useState(false);

  // FETCH BLOGS
  useEffect(() => {
    const detailTopic = async () => {
      try {
        setLoading(true);
        const response = await fetchBlogsByTopic(topic);
        const data = response.data.blogs || [];
        console.log("yeh fetch blog ka data arha h ", data);
        setBlogData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    detailTopic();
    UserFind();
  }, [topic]);

  // OPEN MODAL
  const handlePostClick = (post) => {
      console.log("clicked post", post)
    setSelectedPost(post);
    setIsDetailOpen(true);
  };

  // BACK BUTTON
  const handleBackToTopics = () => {
    navigate('/blogcards');
  };

  // find user
  const UserFind = async () => {
    try {
      const response = await currentUser();
      console.log("user find", response.data.user);
      setUser(response.data.user);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  // LIKE FUNCTION
  const handleLike = async (id) => {
    try {
      const response = await likeBlog(id);

      // UPDATE UI
      setBlogData((prev) =>
        prev.map((post) =>
          post._id === id
            ? {
                ...post,
                likes: response.data.isLiked
                  ? [...post.likes, user?.id]
                  : post.likes.filter((likeId) => likeId !== user?.id)
              }
            : post
        )
      );

      // UPDATE MODAL
      if (selectedPost?._id === id) {
        setSelectedPost((prev) => ({
          ...prev,
          likes: response.data.isLiked
            ? [...prev.likes, user?.id]
            : prev.likes.filter((likeId) => likeId !== user?.id)
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // COMMENT FUNCTION
  const handleComment = async (blogId) => {
    if (!commentText.trim()) return;

    try {
      const response = await commentBlog(blogId, commentText);
      console.log(response.data);

      // UPDATE BLOG UI
      setBlogData((prev) =>
        prev.map((post) =>
          post._id === blogId
            ? {
                ...post,
                comments: [...post.comments, response.data.newComment]
              }
            : post
        )
      );

      // UPDATE MODAL UI
      setSelectedPost((prev) => ({
        ...prev,
        comments: [...prev.comments, response.data.newComment]
      }));
      console.log(response.data);
      setCommentText("");
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteBlog(id);
      console.log(response.data);

      // UI UPDATE
      setBlogData((prev) => prev.filter((post) => post._id !== id));

      // modal close agar deleted post open ho
      if (selectedPost?._id === id) {
        setIsDetailOpen(false);
        setSelectedPost(null);
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const [edit, setEdit] = useState({
    topic: '',
    title: '',
    description: '',
    content: '',
    image: '',
  });

  const handleEdit = async (post) => {
    setEdit({
      topic: post.topic,
      title: post.title,
      description: post.description,
      content: post.content,
      image: post.image,
    });
    setSelectedPost(post);
    setEditModal(true);
  };

  // find handleEdit
  // const handleUpdate = async (id) => {
  //   try {
  //     const response = await updateBlog(id, edit);
  //     console.log("find edit blog", response.data);
  //     setBlogData((pre) =>
  //       pre.map((post) =>
  //         post._id === selectedPost._id
  //           ? response.data.blogupdate
  //           : post
  //       )
  //     );
  //     setEditModal(false);
  //   } catch (error) {
  //     console.log(error.response?.data || error.message);
  //   }
  // };





  const handleUpdate = async (id) => {
  try {
    const formData = new FormData();

    Object.keys(edit).forEach((key) => {
      formData.append(key, edit[key]);
    });

    const response = await updateBlog(id, formData);

    console.log("find edit blog", response.data);

    setBlogData((prev) =>
      prev.map((post) =>
        post._id === id
          ? response.data.blogupdate
          : post
      )
    );

    setEditModal(false);
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};




  return (
    <>
      <div className="min-h-screen bg-[#e4f3ff] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/40 via-[#e4f3ff] to-[#d4ebff] text-slate-700 py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-[#004f8a]/10 selection:text-[#004f8a]">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* HEADER AREA PANEL */}
          <div className="bg-white/90 border border-blue-200/60 rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-900/5 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button
                onClick={handleBackToTopics}
                className="p-3.5 bg-blue-50 hover:bg-blue-100/80 border border-blue-200 text-[#004f8a] rounded-2xl transition-all duration-300 group shadow-sm active:scale-95"
                title="Back to All Blogs"
              >
                <FaArrowLeft className="group-hover:-translate-x-0.5 transition-transform text-sm" />
              </button>
              
              <div className="space-y-1">
                {/* <div className="inline-flex">
                  <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#004f8a] bg-blue-100/70 border border-blue-200 rounded-xl flex items-center gap-1.5 shadow-sm">
                    <FaHashtag className="text-[10px]" /> {topic || "General"}
                  </span>
                </div> */}
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#004f8a]">
                  Community Hub
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm font-medium tracking-wide">
                  Explore high-quality thoughts, designs, and stories curated under this domain.
                </p>
              </div>
            </div>

            {/* Total Counters Badge */}
            <div className="self-start md:self-auto">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase text-white bg-[#004f8a] px-4 py-2.5 rounded-xl shadow-md shadow-blue-900/20">
                <FaBookOpen className="text-sm text-blue-200" />
                <span>{blogData.length} {blogData.length === 1 ? 'Article' : 'Articles'} Loaded</span>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          {loading ? (
            <div className="flex flex-col justify-center items-center py-40 space-y-4">
              <div className="relative w-14 h-14">
                <div className="absolute inset-0 rounded-full border-4 border-[#004f8a]/10"></div>
                <div className="absolute inset-0 rounded-full border-4 border-t-[#004f8a] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
              </div>
              <div className="text-center">
                <p className="text-[#004f8a] font-bold text-xs tracking-wider uppercase">Loading Matrix Stream</p>
                <p className="text-slate-400 text-[11px] mt-0.5">Fetching matching entries...</p>
              </div>
            </div>
          ) : blogData.length === 0 ? (
            /* EMPTY LAYOUT COMPONENT */
            <div className="bg-white/80 border border-blue-200/60 rounded-[2rem] p-12 sm:p-16 text-center max-w-lg mx-auto shadow-xl shadow-blue-900/5 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center mx-auto text-2xl shadow-sm mb-5">
                📁
              </div>
              <h3 className="text-lg font-bold text-[#004f8a] mb-1.5 tracking-tight">Feed is Clear</h3>
              <p className="text-slate-500 text-xs sm:text-sm max-w-xs mx-auto mb-6 font-medium leading-relaxed">
                No active articles matching this topic filter could be found. Jump back to discover alternative topics.
              </p>
              <button
                onClick={handleBackToTopics}
                className="inline-flex items-center justify-center text-xs font-bold tracking-wide bg-[#004f8a] hover:bg-[#003d6b] text-white px-6 py-3 rounded-xl shadow-md transition-all duration-200 active:scale-95"
              >
                Browse Other Domains
              </button>
            </div>
          ) : (
            /* DATA RESPONSIVE GRID */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in duration-300">
              {blogData.map((post) => (
                <div key={post._id} className="transition-all duration-300 hover:-translate-y-1">
                  <BlogsCards
                    post={post}
                    user={user}
                    handleLike={handleLike}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handlePostClick={handlePostClick}
                  />
                </div>
              ))}
            </div>
          )}

          {/* LOWER EXIT REDIRECT */}
          <div className="flex justify-center pt-4">
            <button
              onClick={handleBackToTopics}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/90 hover:bg-white text-[#004f8a] border border-blue-200 px-6 py-3 rounded-xl shadow-sm transition-all duration-200 active:scale-95"
            >
              <FaArrowLeft className="text-[10px]" /> Return to Directory
            </button>
          </div>

        </div>
      </div>

      {/* SUBSIDIARY MODAL PIPELINES */}
      <EditModel
        editModal={editModal}
        edit={edit}
        setEdit={setEdit}
        setEditModal={setEditModal}
        handleUpdate={handleUpdate}
        selectedPost={selectedPost}
      />

      <BlogModal
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
        selectedPost={selectedPost}
        commentText={commentText}
        setCommentText={setCommentText}
        handleComment={handleComment}
      />
    </>
  );
};

export default TopicDetail;












//  {user && isBlogOwner && (
//             <div className="flex gap-2">
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleEdit(post);
//                 }}
//                 className="text-blue-500 hover:text-blue-700 text-sm font-medium"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleDelete(post._id);
//                 }}
//                 className="text-red-500 hover:text-red-700 text-sm font-medium"
//               >
//                 Delete
//               </button>
//             </div>
//           )}












// {isDetailOpen && selectedPost && (

//         <div
//           className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
//           onClick={() => setIsDetailOpen(false)}
//         >

//           <div
//             className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >

//             {/* Modal Header with Image */}
//             {selectedPost.image && (
//               <div className="h-64 overflow-hidden">
//                 <img
//                   src={getImageUrl(selectedPost.image)}
//                   alt={selectedPost.title}
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     e.target.src = 'https://picsum.photos/id/20/800/600';
//                   }}
//                 />
//               </div>
//             )}

//             <div className="p-6">

//               {/* Topic Tag */}
//               {selectedPost.topic && (
//                 <div className="inline-block bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full mb-3">
//                   #{selectedPost.topic}
//                 </div>
//               )}

//               {/* TITLE */}
//               <h2 className="text-3xl font-bold mb-3 text-gray-800">
//                 {selectedPost.title}
//               </h2>

//               {/* DESCRIPTION */}
//               <p className="text-gray-600 mb-5 italic border-l-4 border-purple-400 pl-4">
//                 {selectedPost.description}
//               </p>

//               {/* CONTENT */}
//               <div
//                 className="text-gray-700 leading-7 prose max-w-none"
//                 dangerouslySetInnerHTML={{
//                   __html: selectedPost.content || "",
//                 }}
//               />

//               {/* COUNTS */}
//               <div className="mt-6 flex items-center gap-5 text-sm text-gray-500 pt-4 border-t border-gray-200">

//                 <div className="flex items-center gap-2">
//                   ❤️ {selectedPost.likes?.length || 0} likes
//                 </div>

//                 <div className="flex items-center gap-2">
//                   💬 {selectedPost.comments?.length || 0} comments
//                 </div>

//               </div>

//               {/* COMMENT INPUT */}
//               <div className="mt-5 flex gap-2">

//                 <input
//                   type="text"
//                   placeholder="Write a comment..."
//                   value={commentText}
//                   onChange={(e) =>
//                     setCommentText(e.target.value)
//                   }
//                   className="border px-4 py-2 rounded-lg w-full outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
//                 />

//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleComment(selectedPost._id);
//                   }}
//                   className="bg-purple-500 hover:bg-purple-600 text-white px-6 rounded-lg transition"
//                 >
//                   Send
//                 </button>

//               </div>

//               {/* COMMENTS */}
//               <div className="mt-6 space-y-3">

//                 <h3 className="font-bold text-lg flex items-center gap-2">
//                   💬 Comments ({selectedPost.comments?.length || 0})
//                 </h3>

//                 {selectedPost.comments?.length > 0 ? (

//                   selectedPost.comments.map(
//                     (comment, index) => (

//                       <div
//                         key={index}
//                         className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition"
//                       >

//                         {/* USERNAME */}
//                         <h4 className="font-semibold text-purple-600 text-sm flex items-center gap-2">
//                           <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-xs">
//                             {comment.user?.username?.charAt(0).toUpperCase() || 'U'}
//                           </div>
//                           {comment.user?.username}
//                         </h4>

//                         {/* COMMENT */}
//                         <p className="text-gray-700 mt-2 ml-8">
//                           {comment.text}
//                         </p>

//                       </div>

//                     )
//                   )

//                 ) : (

//                   <div className="text-center py-8 text-gray-400">
//                     <div className="text-4xl mb-2">💭</div>
//                     <p>No comments yet. Be the first to comment!</p>
//                   </div>

//                 )}

//               </div>

//             </div>

//           </div>

//         </div>

//       )}