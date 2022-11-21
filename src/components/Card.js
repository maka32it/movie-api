import React,{useState} from 'react'
import {MdOutlineFavoriteBorder,MdOutlineFavorite} from "react-icons/md"



export default function Card({movie,addFavorites}) {
  const [buttonFav,setButtonFav] = useState(false)
  function handleChange(){
    setButtonFav(!buttonFav)
      addFavorites(movie)
  }
 
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
            <button 
            onClick={handleChange}
            
            className='text-[red] absolute top-5 right-2 hover:scale-125 duration-100 '>
            {buttonFav
            ?<MdOutlineFavorite size={30}/>
            :<MdOutlineFavoriteBorder size={30}/>}</button>
            
        </div>
        

  )
}
