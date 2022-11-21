import React from 'react'

export default function Button({darkTheme,setDarkTheme}) {
  return (
    <div className='flex justify-end pr-4 pt-3'>
    <button
    onClick={()=>setDarkTheme(!darkTheme)}
   className='bg-[#E7F6F2] p-3 rounded-xl dark:bg-[#FB2576] dark:text-white hidden sm:block'>
  {darkTheme ? 'Light mode':'Dark mode'}</button>
  {darkTheme? <i  onClick={()=>setDarkTheme(!darkTheme)}
   className="fa-solid fa-toggle-off text-3xl cursor-pointer sm:hidden dark:text-[#03C4A1] "></i> 
   :<i  onClick={()=>setDarkTheme(!darkTheme)}
   className="fa-solid fa-toggle-on text-3xl cursor-pointer sm:hidden dark:text-[#03C4A1]"></i> }
  
    
   </div>
    
  )
}
