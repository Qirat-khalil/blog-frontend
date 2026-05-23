
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import api from '../config/api'
// import { logout } from '../services/authService'
// import { useNavigate } from 'react-router-dom'

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false)
//     const navigate = useNavigate()
//     const handleLogout = async () => {

//         try {

//             const response = await logout()

//             console.log(response.data)
//             navigate('/login')

//         } catch (error) {

//             console.log(error.message)

//         }

//     }



//     return (
//         <>
//             <div className='bg-red-500 text-white'>

//                 <div className='max-w-7xl mx-auto px-8 py-4 flex items-center justify-between'>

//                     {/* Logo */}
//                     <div className='text-2xl font-bold'>
//                         Logo
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className='hidden md:block'>
//                         <ul className='flex gap-8 font-black'>
//                             <Link to={'/blogcards'}><li>Home</li></Link>
//                             <li>About</li>
//                             <Link to={'/createblog'}><li>Create</li></Link>
//                         </ul>
//                     </div>

//                     {/* Logout Button */}
//                     <button onClick={handleLogout} className='hidden md:block border bg-pink-400 px-5 py-2 rounded-lg'>
//                         Logout
//                     </button>

//                     {/* Mobile Icon */}
//                     <div
//                         className='md:hidden text-3xl cursor-pointer'
//                         onClick={() => setIsOpen(!isOpen)}
//                     >
//                         {isOpen ? '✖' : '☰'}
//                     </div>

//                 </div>

//                 {/* Mobile Menu */}
//                 {
//                     isOpen && (
//                         <div className='md:hidden bg-red-400 py-4'>

//                             <ul className='flex flex-col items-center gap-5'>
//                                 <Link to={'/blogcards'}><li>Home</li></Link>
//                                 <li>About</li>
//                                 <Link to={'/createblog'}><li>Create</li></Link>

//                                 <button
//                                     onClick={handleLogout}
//                                     className='border bg-pink-400 px-5 py-2 rounded-lg'
//                                 >
//                                     Logout
//                                 </button>
//                             </ul>

//                         </div>
//                     )
//                 }

//             </div>
//         </>
//     )
// }

// export default Navbar














import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../config/api'
import { logout } from '../services/authService'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    
    const handleLogout = async () => {
        try {
            const response = await logout()
            console.log(response.data)
            navigate('/login')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-200/60 shadow-sm font-sans antialiased">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
                
                {/* Logo Area */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#004f8a] rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-md shadow-blue-900/20">
                        L
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-[#004f8a]">
                        Logo
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <ul className="flex gap-8 items-center text-xs font-bold uppercase tracking-wider text-slate-600">
                        <Link to={'/blogcards'} className="hover:text-[#004f8a] transition-colors duration-200">
                            <li>Home</li>
                        </Link>
                        <li className="hover:text-[#004f8a] cursor-pointer transition-colors duration-200">
                            About
                        </li>
                        <Link to={'/createblog'} className="hover:text-[#004f8a] transition-colors duration-200">
                            <li>Create</li>
                        </Link>
                    </ul>
                </div>

                {/* Logout Button (Desktop) */}
                <button 
                    onClick={handleLogout} 
                    className="hidden md:block text-xs font-bold uppercase tracking-wider bg-[#004f8a] hover:bg-[#003d6b] text-white px-5 py-3 rounded-xl shadow-md shadow-blue-900/10 transition-all duration-200 active:scale-95"
                >
                    Logout
                </button>

                {/* Mobile Icon */}
                <div
                    className="md:hidden p-2 text-2xl cursor-pointer text-[#004f8a] bg-blue-50 border border-blue-100 rounded-xl transition-all active:scale-95"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '✖' : '☰'}
                </div>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-blue-200/60 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
                    <ul className="flex flex-col items-center gap-5 py-6 text-xs font-bold uppercase tracking-wider text-slate-600">
                        <Link 
                            to={'/blogcards'} 
                            onClick={() => setIsOpen(false)}
                            className="w-full text-center py-2 hover:text-[#004f8a] hover:bg-blue-50/50 transition-all"
                        >
                            <li>Home</li>
                        </Link>
                        <li 
                            onClick={() => setIsOpen(false)}
                            className="w-full text-center py-2 hover:text-[#004f8a] hover:bg-blue-50/50 cursor-pointer transition-all"
                        >
                            About
                        </li>
                        <Link 
                            to={'/createblog'} 
                            onClick={() => setIsOpen(false)}
                            className="w-full text-center py-2 hover:text-[#004f8a] hover:bg-blue-50/50 transition-all"
                        >
                            <li>Create</li>
                        </Link>

                        <div className="w-full px-6 pt-2">
                            <button
                                onClick={() => { handleLogout(); setIsOpen(false); }}
                                className="w-full text-center text-xs font-bold uppercase tracking-wider bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 py-3 rounded-xl transition-all"
                            >
                                Logout
                            </button>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar