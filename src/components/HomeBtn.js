import React from 'react'
import { Link } from 'react-router-dom'

export default function FavoritesBtn() {
 
  return (
    <div className='  pl-4 pt-3'>
    <Link to='/'>
      <button
       className='bg-[#E7F6F2] p-3 rounded-xl dark:bg-[#FB2576] dark:text-white'>
      Home</button>
      </Link>
    </div>
  )
}
