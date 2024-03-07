import React from 'react'
import newContext from './Context'
import Child from './Child'

const contextProvider = () => {
    const[theme,setTheme]=useState({
    
        light:{
            backgroundColor:'white',
            color:'black'
        },
        dark:{
            backgroundColor:'black',
            color:white
        }
    
})
  return (
 <newContext.Provider value={Theme}>
    <Child/>
 </newContext.Provider>
  )
}

export default contextProvider
