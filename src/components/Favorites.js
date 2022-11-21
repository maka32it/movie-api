import React,{useEffect} from 'react'
import CardContext from '../context/CardContext'
import { useContext } from 'react'
import Button from './Button'
import HomeBtn from './HomeBtn'
import { motion } from 'framer-motion'
import {TiDelete} from "react-icons/ti"

export default function Favorites() {
    const {movie,setMovie,favorites,setFavorites,
        setDarkTheme,darkTheme,removeFavorites} = useContext(CardContext)

        useEffect(()=>{
            const favoriteMovies = JSON.parse(localStorage.getItem('favorites'))
            setFavorites(favoriteMovies)
              
          },[])
  
  return (
    <motion.div 
     initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:.8 }}}
    className={darkTheme ? 'dark' : ''}>
        <div className='dark:bg-[#150050] bg-[#A5C9CA] min-h-screen 
         flex flex-col flex-wrap justify-between  items-center '>
              <div className='flex justify-between w-full'>
                <HomeBtn/>
                <Button darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
              </div>
              
            <h1 className='text-3xl p-5 dark:text-[#FB2576] font-bold'>
            {favorites.length >0 ? ' List of Your Favorite Movies' : 'List of Your Favorite Movies is empty'}
           </h1>

        <div className='flex flex-wrap justify-center gap-2 my-9 mx-auto max-w-[1200px]'>
        {favorites.map((fav)=>{
            return(
                <div key={fav.imdbID} className='relative hover:scale-105 duration-100 w-[250px] my-2'> 
                   <img 
                    className='rounded-md  h-full text-[#395B64]
                     dark:text-white w-[250px]'
                    src={fav.Poster !== 'N/A' ? fav.Poster : 'https://via.placeholder.com/500'}
                    alt={fav.Title}>
                    </img>
                    <div className='text-center w-[250px] absolute bottom-0 p-4 bg-[#E7F6F2] dark:bg-[#FB2576]
                    dark:text-white text-[#395B64] rounded-md'>
                    {fav.Title}({fav.Year})</div> 
                    <button 
                    onClick={()=>removeFavorites(fav)}
                    className='text-[gray] absolute right-0 top-0'>
                    <TiDelete size={50}/></button>
                </div>
            )
        })}
        </div>
        
       
    
</div>
</motion.div>

  )
}
