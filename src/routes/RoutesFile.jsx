import React from 'react'
import BlogCards from '../components/BlogCards'
import { Route,Routes } from 'react-router-dom'
import TopicDetail from '../components/TopicDetail'
import CreateBlog from '../components/CreateBlog'
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import ForgetPassword from '../pages/auth/forgetPassword'
import LayoutNavbar from '../components/LayoutNavbar'


const RoutesFile = () => {
  return (
   <>

   <Routes>
    
    <Route path='/' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>

    <Route element={<LayoutNavbar/>}>
    <Route path='/blogcards' element={<BlogCards/>}></Route>
    <Route path='/topics/:topic' element={<TopicDetail/>}></Route>
    <Route path='/createblog' element={<CreateBlog/>}></Route>
    </Route>
   </Routes>
    


   </>
  )
}

export default RoutesFile







