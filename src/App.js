import './index.css';
import React,{useEffect,useState} from 'react';
import TopBar from './components/TopBar';
import Card from "./components/Card"
import Button from "./components/Button"
import FavoritesBtn from './components/FavoritesBtn';
import CardContext from './context/CardContext';
import { useContext } from 'react'
import { motion } from 'framer-motion';



const API_URL = ' http://www.omdbapi.com?apikey=7aff3931'
function App() {

  const {movie,setMovie,favorites,setFavorites,addFavorites,removeFavorites,setDarkTheme,darkTheme} = useContext(CardContext)
  const [name,setName] = useState('')

  
  const searcMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovie(data.Search)
    setName('')
  }


  useEffect(()=>{
    searcMovies(name)
  },[])
  
  return (
  <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:.8 }}}
   className={darkTheme ? 'dark' : ''}>
    <div className='dark:bg-[#150050] bg-[#A5C9CA] min-h-screen '>
              <div className='flex justify-between'>
                <FavoritesBtn/>
                <Button darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
              </div>
      <div className='flex flex-col h-full mx-auto max-w-[1200px] py-2 '>
        <TopBar
          searcMovies={searcMovies}
          name={name}
          setName={setName}/>
          
          {
            movie?.length > 0

            ? <div className='flex flex-wrap justify-center  my-9 gap-2'> 
            {movie.map((mov)=> <Card
             movie={mov}
              key={mov.imdbID}
              addFavorites={addFavorites}
              removeFavorites={removeFavorites}
              />)}
            </div>
            : <h1 className='text-white text-3xl text-center mt-4'>No movies yet</h1>
          }
       
      </div> 
      {/* topbar and card ends */}
    </div>
   </motion.div>
  );
}

export default App;
