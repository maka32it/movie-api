import React,{useState} from 'react'

function TopBar({name,setName,searcMovies}) {
  function handleChange(e){
    setName(e.target.value)
  }
  function handleClick(e){
    searcMovies(name)
  }
  function handleEnter(e){
    if(e.key === 'Enter'){
      searcMovies(name)
    }
  }
  return (
    <div className='flex justify-center gap-4'>
          <input
          onKeyDown={handleEnter}
            value={name}
            onChange={handleChange}
           placeholder='Type a movie to search...' 
          className='dark:placeholder:text-white 
          bg-[#E7F6F2] dark:bg-[#FB2576] dark:text-white p-4 rounded-2xl w-[60%] outline-none '/>
          <button
            onClick={handleClick}
           className='bg-[#E7F6F2] p-3 rounded-xl
            dark:bg-[#FB2576] dark:text-white'>
          Search</button>
       </div>
  )
}

export default TopBar
