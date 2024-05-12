import React from 'react'
import MyContext from './MyContex'

function MyState(props) {
    
        
         const state = {
            name: "Kamal Nayan",
            std: "9 C"
        }
        
       

    
  return (
    <MyContext.Provider value={state }>
        {props.children}

    </MyContext.Provider>
  )
}


export default MyState