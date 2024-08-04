import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Tours from '../pages/Tours'
import TourDetail from '../pages/TourDetail'
import ThankYou from '../pages/ThankYou'
import SearchResultList from '../pages/SearchResultList'
import About from '../pages/About'
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/tours/:id' element={<TourDetail />} />
        <Route path='/tours/search/getTourBySearch' element={<SearchResultList />} />
        <Route path='/thank-you' element={<ThankYou/>}/>
    </Routes>
  )
}

export default Routers