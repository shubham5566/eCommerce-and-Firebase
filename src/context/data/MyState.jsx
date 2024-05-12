import React, { useState } from 'react'
import MyContext from './MyContex'

function MyState(props) {
  const [mode,setMode] = useState("light")
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "rgb(17, 24, 39)"
    }else if(mode === "dark"){
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }
    
        
        
       

    
  return (
    <MyContext.Provider value={{mode,toggleMode} }>
        {props.children}

    </MyContext.Provider>
  )
}


export default MyState