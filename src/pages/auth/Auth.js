import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Forgotpassword from './Forgotpassword'
import Changepassword from './Changepassword'


const Auth = () => {
  return (
    <Routes>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='forgotpassword' element={<Forgotpassword/>}/>
        <Route path='changepassword' element={<Changepassword/>}/>
     </Routes>
  )
}

export default Auth
