import React from 'react'
import App from '../App'
import Favorites from './Favorites'
import { Routes,Route,useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes() {
    const location = useLocation()
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<App />}></Route>
      <Route path='/favorites' element={<Favorites/>}></Route>
    </Routes>
    </AnimatePresence>
  )
}
