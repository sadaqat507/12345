import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Frontend from './frontend/Frontend'
 import Blanck404 from './Blanck404'
import Auth from './auth/Auth'
 import Private from './dashboard/private/Private'

const  Pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Frontend />} />
                <Route path='/auth/*' element={<Auth />} />
                <Route path='/dashboard/*' element={<Private/>} />
                <Route path='*' element={<Blanck404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default  Pages
