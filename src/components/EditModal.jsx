

// import React from 'react'

// const EditModal = ({
//     editModal,
// edit,
//     setEdit,
// setEditModal,
// handleUpdate,
// selectedPost,

// }) => {



// const updatedImage = new FormData()
// Object.keys(edit).forEach((key)=>{

// })

//   return (

//     <div>
//         {editModal && (

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

//             )}
//     </div>

//   )
// }

// export default EditModal

















import React from 'react';

const EditModal = ({
  editModal,
  edit,
  setEdit,
  setEditModal,
  handleUpdate,
  selectedPost,
}) => {

  console.log(edit);


  const updatedImage = new FormData();

  Object.keys(edit).forEach((key) => {
    updatedImage.append(key, edit[key]);
  });
  if (!editModal) return null;

  return (
    <div className="fixed inset-0 bg-[#004f8a]/20 backdrop-blur-md flex justify-center items-center z-50 p-4 transition-all duration-300">

      {/* Soft White Center Panel */}
      <div className="bg-white/95 border border-blue-200/60 p-6 sm:p-8 rounded-[2rem] w-full max-w-[520px] shadow-2xl shadow-blue-900/10 max-h-[90vh] overflow-y-auto font-sans">
        <button
          onClick={() => setEditModal(false)}
          className="px-5 py-3 bg-blue-50/80 hover:bg-blue-100 text-[#004f8a] border border-blue-100 rounded-xl font-bold text-xs tracking-wider uppercase transition active:scale-95"
        >
          X
        </button>
        {/* Title Heading */}
        <div className="mb-6 border-b border-blue-50 pb-3">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#004f8a]">
            ✍️ Edit Blog Entry
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Modify the parameters below to update your stream contents.
          </p>
        </div>

        {/* Form Container Fields */}
        <div className="space-y-4">

          {/* Topic Field */}
          <div>
            <label className="block mb-1.5 text-xs font-bold tracking-wide uppercase text-[#004f8a]/80">
              Topic Domain
            </label>
            <input
              type="text"
              placeholder="e.g. Technology"
              value={edit.topic}
              onChange={(e) =>
                setEdit({
                  ...edit,
                  topic: e.target.value
                })
              }
              className="w-full bg-[#e4f3ff]/40 text-slate-700 border border-blue-100 placeholder-slate-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004f8a]/20 focus:border-[#004f8a] transition text-sm font-medium"
            />
          </div>

          {/* Title Field */}
          <div>
            <label className="block mb-1.5 text-xs font-bold tracking-wide uppercase text-[#004f8a]/80">
              Article Title
            </label>
            <input
              type="text"
              placeholder="Title of your blog"
              value={edit.title}
              onChange={(e) =>
                setEdit({
                  ...edit,
                  title: e.target.value
                })
              }
              className="w-full bg-[#e4f3ff]/40 text-slate-700 border border-blue-100 placeholder-slate-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004f8a]/20 focus:border-[#004f8a] transition text-sm font-medium"
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block mb-1.5 text-xs font-bold tracking-wide uppercase text-[#004f8a]/80">
              Brief Summary
            </label>
            <input
              type="text"
              placeholder="Short catchy single line descriptor"
              value={edit.description}
              onChange={(e) =>
                setEdit({
                  ...edit,
                  description: e.target.value
                })
              }
              className="w-full bg-[#e4f3ff]/40 text-slate-700 border border-blue-100 placeholder-slate-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004f8a]/20 focus:border-[#004f8a] transition text-sm font-medium"
            />
          </div>

          {/* Content Textarea Field */}
          <div>
            <label className="block mb-1.5 text-xs font-bold tracking-wide uppercase text-[#004f8a]/80">
              Main Body Content
            </label>
            <textarea
              placeholder="Write core article text here..."
              value={edit.content}
              onChange={(e) =>
                setEdit({
                  ...edit,
                  content: e.target.value
                })
              }
              className="w-full bg-[#e4f3ff]/40 text-slate-700 border border-blue-100 placeholder-slate-400 p-3 rounded-xl h-28 focus:outline-none focus:ring-2 focus:ring-[#004f8a]/20 focus:border-[#004f8a] transition text-sm font-medium resize-none"
            />
          </div>

          {/* File Image Upload Field */}
          <div>
            <label className="block mb-1.5 text-xs font-bold tracking-wide uppercase text-[#004f8a]/80">
              Cover Image Asset
            </label>
            <div className="relative flex items-center justify-center w-full bg-[#e4f3ff]/30 border border-dashed border-blue-200 hover:bg-[#e4f3ff]/50 rounded-xl p-3 transition cursor-pointer">
              <input
                type="file"
                onChange={(e) =>
                  setEdit({
                    ...edit,
                    image: e.target.files[0]
                  })
                }
                className="w-full text-xs text-slate-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#004f8a]/10 file:text-[#004f8a] hover:file:bg-[#004f8a]/20 cursor-pointer"
              />
            </div>
          </div>

        </div>

        {/* Lower Action Triggers */}
        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-blue-50">

          <button
            onClick={() => handleUpdate(selectedPost?._id, updatedImage)}
            className="flex-1 bg-[#004f8a] hover:bg-[#003d6b] text-white px-5 py-3 rounded-xl font-bold text-xs tracking-wider uppercase shadow-md shadow-blue-900/10 transition active:scale-95"
          >
            Commit Changes
          </button>

          <button
            onClick={() => setEditModal(false)}
            className="px-5 py-3 bg-blue-50/80 hover:bg-blue-100 text-[#004f8a] border border-blue-100 rounded-xl font-bold text-xs tracking-wider uppercase transition active:scale-95"
          >
            Cancel
          </button>

        </div>

      </div>
    </div>
  );
};

export default EditModal;