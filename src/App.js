import './index.css';
import React,{useEffect,useState} from 'react';
import TopBar from './components/TopBar';
import Card from "./components/Card"
import Button from "./components/Button"



const API_URL = ' http://www.omdbapi.com?apikey=7aff3931'
function App() {
  const [darkTheme,setDarkTheme] = useState(true)
  const [movie,setMovie] = useState([])
  const [name,setName] = useState('')

 
  const searcMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovie(data.Search)
    setName('')
  }

  useEffect(()=>{
    searcMovies('')
  },[])
  
  return (
  <div className={darkTheme ? 'dark' : ''}>
    <div className='dark:bg-[#150050] bg-[#A5C9CA] min-h-screen'>
          <Button darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <div className='flex flex-col h-full mx-auto max-w-[1200px] py-2 '>
        <TopBar
          searcMovies={searcMovies}
          name={name}
          setName={setName}/>
          
          {
            movie?.length > 0

            ? <div className='flex flex-wrap justify-center my-9 gap-2 '> 
            {movie.map((mov)=> <Card
             movie={mov}
              key={mov.imdbID}
              />)}
            </div>
            : <h1 className='text-white text-3xl text-center mt-4'>No movies yet</h1>
          }
       
      </div>
      </div>
   </div>
  );
}

export default App;
