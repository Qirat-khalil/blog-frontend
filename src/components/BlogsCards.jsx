
// const BlogsCards = ({
//     post,
//     user,
//     handleLike,
//     handleDelete,
//     handleEdit,
//     handlePostClick,
//     getImageUrl
// }) => {

//     return (
//         <div
//             key={post._id}
//             onClick={() => handlePostClick(post)}
//             className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
//         >

//             {/* IMAGE - FIXED */}
//             <div className="h-52 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 relative">
//                 <img
//                     src={getImageUrl(post.image)}
//                     alt={post.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//                     onError={(e) => {
//                         // Fallback if image fails to load
//                         e.target.src = 'https://picsum.photos/id/20/800/600';
//                     }}
//                 />
//                 {/* Topic Badge */}
//                 {post.topic && (
//                     <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
//                         #{post.topic}
//                     </div>
//                 )}
//             </div>

//             {/* CONTENT */}
//             <div className="p-5">

//                 <h3 className="font-bold text-xl mb-2 line-clamp-2 hover:text-purple-600 transition">
//                     {post.title}
//                 </h3>

//                 <p className="text-gray-600 mb-3 line-clamp-2">
//                     {post.description}
//                 </p>

//                 <div className="flex justify-between items-center text-sm mt-4 pt-3 border-t border-gray-100">

//                     {/* LIKE */}
//                     <button
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             handleLike(post._id);
//                         }}
//                         className="flex items-center gap-2 hover:scale-110 transition transform"
//                     >

//                         <FaHeart
//                             className={`text-lg transition ${post.likes?.includes(user?.id)
//                                 ? "text-red-500 fill-red-500"
//                                 : "text-gray-400 hover:text-red-400"
//                                 }`}
//                         />

//                         <span className="text-gray-600">
//                             {post.likes?.length || 0}
//                         </span>

//                     </button>

//                     {/* COMMENT */}
//                     <div className="flex items-center gap-2 text-gray-500">

//                         <FaComment className="text-lg" />

//                         <span>
//                             {post.comments?.length || 0}
//                         </span>

//                     </div>

//                     {/* {user?._id === (post.user?.id || post.user)&& (
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               handleDelete(post._id);
//                             }}
//                             className="text-red-500"
//                           >
//                             Delete
//                           </button>
//                         )} */}




//                     {user && (user.id === (post.user?._id || post.user)) && (
//                         <button
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleDelete(post._id);
//                             }}
//                             className="text-red-500"
//                         >
//                             Delete
//                         </button>
//                     )}


//                     {user && (user.id === (post.user?._id || post.user)) && (
//                         <button
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleEdit(post);
//                             }}
//                             className="text-red-500"
//                         >
//                             Edit
//                         </button>
//                     )}

//                 </div>

//             </div>

//         </div>
//     )
// }

// export default BlogsCards;










import React from 'react';
import { FaHeart, FaComment, FaHashtag } from "react-icons/fa";

const BlogsCards = ({
    post,
    user,
    handleLike,
    handleDelete,
    handleEdit,
    handlePostClick,
    // getImageUrl
}) => {


    //       console.log('selected post', post);
    //   console.log('selected user', user);
    //   console.log('selected handleLike', handleLike);
    //   console.log('selected handleDelete', handleDelete);
    //   console.log('selected handleEdit', handleEdit);
    //    console.log('selected handlePostClick', handlePostClick);
    //      console.log('selected setCommentText', setCommentText);

    return (
        <div
            onClick={() => handlePostClick(post)}
            className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >

            {/* IMAGE */}
            <div className="h-52 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 relative">

                <img
                    src={(post.image)}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {post.topic && (

                    <div className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#004f8a] bg-blue-100/70 border border-blue-200 rounded-xl flex items-center gap-1.5 shadow-sm">
                        <FaHashtag className="text-[10px]" />
                        {post.topic}
                    </div>
                )}

            </div>

            {/* CONTENT */}
            <div className="p-5">

                <h3 className="font-bold text-xl mb-2">
                    {post.title}
                </h3>

                <p className="text-gray-600 mb-3 line-clamp-2">
                    {post.description}
                </p>

                <div className="flex justify-between items-center">

                    {/* LIKE */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleLike(post._id);
                        }}
                        className="flex items-center gap-2"
                    >

                        <FaHeart
                            className={
                                post.likes?.includes(user?.id)
                                    ? "text-red-500"
                                    : "text-gray-400"
                            }
                        />

                        <span>
                            {post.likes?.length || 0}
                        </span>

                    </button>

                    {/* COMMENT */}
                    <div className="flex items-center gap-2">

                        <FaComment />

                        <span>
                            {post.comments?.length || 0}
                        </span>

                    </div>

                    {/* DELETE */}
                    {user && (user.id === (post.user?._id || post.user)) && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(post._id);
                            }}
                            className="text-red-500"
                        >
                            Delete
                        </button>
                    )}

                    {/* EDIT */}
                    {user && (user.id === (post.user?._id || post.user)) && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleEdit(post);
                            }}
                            className="text-blue-500"
                        >
                            Edit
                        </button>
                    )}

                </div>

                <div className="flex items-center justify-between mb-4">
    
    <div className="flex items-center gap-2">
        
        <div className="w-9 h-9 rounded-full bg-[#004f8a] text-white flex items-center justify-center font-bold text-sm">
            {post.user?.name?.charAt(0).toUpperCase()}
        </div>

        <div>
            <p className="text-sm font-semibold text-gray-700">
                {post.user?.username || "Unknown User"}
                {console.log(post.user)}
            </p>

            <p className="text-[11px] text-gray-400">
                Blog Creator
            </p>
        </div>

    </div>

</div>

            </div>

        </div>
    );
};

export default BlogsCards;