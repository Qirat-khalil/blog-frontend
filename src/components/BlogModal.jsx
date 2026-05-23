// import React from 'react'

// const BlogModal = ({
//     selectedPost,
// isDetailOpen,
// setIsDetailOpen,
// commentText,
// setCommentText,
// handleComment,
// // getImageUrl,

// }) => {

// // console.log(selectedPost.comments)
  
  
  
//   return (
//     <div>
//         {/* MODAL */}
//       {isDetailOpen && selectedPost && (

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
//                   src={(selectedPost.image)}
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
//                           {console.log(comment)}
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
//     </div>
//   )
// }

// export default BlogModal
















import React from 'react'

const BlogModal = ({
    selectedPost,
isDetailOpen,
setIsDetailOpen,
commentText,
setCommentText,
handleComment,
// getImageUrl,

}) => {

// console.log(selectedPost.comments)
  
  
  
  return (
    <div>
        {/* MODAL */}
      {isDetailOpen && selectedPost && (

        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setIsDetailOpen(false)}
        >

          <div
            className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header with Image */}
            {selectedPost.image && (
              <div className="h-64 overflow-hidden">
                <img
                  src={(selectedPost.image)}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://picsum.photos/id/20/800/600';
                  }}
                />
              </div>
            )}

            <div className="p-6">

              {/* Topic Tag */}
              {selectedPost.topic && (
                <div className="inline-block bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full mb-3">
                  #{selectedPost.topic}
                </div>
              )}

              {/* TITLE */}
              <h2 className="text-3xl font-bold mb-3 text-gray-800">
                {selectedPost.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mb-5 italic border-l-4 border-purple-400 pl-4">
                {selectedPost.description}
              </p>

              {/* CONTENT */}
              <div
                className="text-gray-700 leading-7 prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: selectedPost.content || "",
                }}
              />

              {/* COUNTS */}
              <div className="mt-6 flex items-center gap-5 text-sm text-gray-500 pt-4 border-t border-gray-200">

                <div className="flex items-center gap-2">
                  ❤️ {selectedPost.likes?.length || 0} likes
                </div>

                <div className="flex items-center gap-2">
                  💬 {selectedPost.comments?.length || 0} comments
                </div>

              </div>

              {/* COMMENT INPUT */}
              <div className="mt-5 flex gap-2">

                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(e) =>
                    setCommentText(e.target.value)
                  }
                  className="border px-4 py-2 rounded-lg w-full outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleComment(selectedPost._id);
                  }}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 rounded-lg transition"
                >
                  Send
                </button>

              </div>

              {/* COMMENTS */}
              <div className="mt-6 space-y-3">

                <h3 className="font-bold text-lg flex items-center gap-2">
                  💬 Comments ({selectedPost.comments?.length || 0})
                </h3>

                {selectedPost.comments?.length > 0 ? (

                  selectedPost.comments.map(
                    (comment, index) => (

                      <div
                        key={index}
                        className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition"
                      >

                        {/* USERNAME */}
                        <h4 className="font-semibold text-purple-600 text-sm flex items-center gap-2">
                          <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-xs">
                            {comment.user?.username?.charAt(0).toUpperCase() || 'U'}
                          </div>
                          {comment.user?.username}
                          {console.log(comment)}
                        </h4>

                        {/* COMMENT */}
                        <p className="text-gray-700 mt-2 ml-8">
                          {comment.text}
                        </p>

                      </div>

                    )
                  )

                ) : (

                  <div className="text-center py-8 text-gray-400">
                    <div className="text-4xl mb-2">💭</div>
                    <p>No comments yet. Be the first to comment!</p>
                  </div>

                )}

              </div>

            </div>

          </div>

        </div>

      )}
    </div>
  )
}

export default BlogModal








