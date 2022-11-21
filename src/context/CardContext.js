import { createContext,useState,removeFavorites } from "react";
import React from "react";

const CardContext = createContext();

export function CardProvider({children}){
    const [darkTheme,setDarkTheme] = useState(true)
    const [favorites,setFavorites] = useState([])
    const [movie,setMovie] = useState([])

    function addFavorites(movie){
        const newFavorites = [...favorites,movie];
        setFavorites(newFavorites)
        saveLocalStorage(newFavorites)
      }

      function saveLocalStorage(movies){
        localStorage.setItem('favorites',JSON.stringify(movies))
      }

      function removeFavorites(movie){
        const newFavorites = favorites.filter((favorite)=>{
            return favorite.imdbID !== movie.imdbID
        })
        setFavorites(newFavorites)
        saveLocalStorage(newFavorites)
      }
      
    return (
        <CardContext.Provider value={{movie,setMovie,favorites,setFavorites
        ,addFavorites,darkTheme,setDarkTheme,removeFavorites,saveLocalStorage}}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContext;