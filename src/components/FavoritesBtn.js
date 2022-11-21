import React from 'react'
import { Link } from 'react-router-dom'

export default function FavoritesBtn() {
 
  return (
    <div className='flex justify-start pl-4 pt-3'>
    <Link to='/favorites'>
      <button
       className='bg-[#E7F6F2] p-3 rounded-xl dark:bg-[#FB2576] dark:text-white'>
      Favorites</button>
      </Link>
    </div>
  )
}
