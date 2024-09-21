import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import About from '../pages/About/About'
import Profile from '../pages/Profile/Profile'
import NotFound from '../pages/Not-found/Not-found'
import { useEffect, useState } from 'react'
import useRoutesStore from '../store/routesStore'
import MoreInfo from '../pages/About/MoreInfo'
import ApiData from '../pages/Api-data/apiData'
import CartHomePage from '../pages/Cart/Cart'

export default function AppRouter() {

    const isUser = useRoutesStore((state) => state.isUser)
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={isUser ? <Navigate to={"/profile"} replace /> : <Home />} />
                <Route path='/profile' element={isUser ? <Profile /> : <Navigate to={"/"} replace />} />
                <Route path='/about' element={<About />}>
                    <Route path='more-info' element={<MoreInfo />} />
                </Route>
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/api-data' element={<ApiData />} />
                <Route path='/cart-home' element={<CartHomePage />} />
            </Routes>
        </BrowserRouter>

    )
}