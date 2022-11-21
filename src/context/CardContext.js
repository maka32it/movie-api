import { createContext,useState,removeFavorites } from "react";
import React,{useEffect} from "react";

const CardContext = createContext();

export function CardProvider({children}){
    const [darkTheme,setDarkTheme] = useState(true)
    const [favorites,setFavorites] = useState([])
    const [movie,setMovie] = useState([])
    function addFavorites(movie){
        const newFavorites = [...favorites,movie];
        setFavorites(newFavorites)
      }
      function removeFavorites(movie){
        const newFavorites = favorites.filter((favorite)=>{
            return favorite.imdbID !== movie.imdbID
        })
        setFavorites(newFavorites)
      }
      
    return (
        <CardContext.Provider value={{movie,setMovie,favorites,setFavorites
        ,addFavorites,darkTheme,setDarkTheme,removeFavorites}}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContext;