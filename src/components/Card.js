import React from 'react'

export default function Card({movie}) {
  return (
    
        <div className='w-[250px] relative my-2 '>
            <img 
            className='rounded-md h-full text-[#395B64] dark:text-white'
             src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/500'}
              alt={movie.Title}>
            </img>
            <div className='text-center w-[250px] absolute bottom-0 p-4 bg-[#E7F6F2] dark:bg-[#FB2576]
            dark:text-white text-[#395B64] rounded-md'>
            {movie.Title}({movie.Year})</div> 
            
        </div>
        

  )
}
