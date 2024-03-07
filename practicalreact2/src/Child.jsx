// import React from 'react'

// const Child = () => {
//   return (
//     <div>
//       <h1>This is lazy component</h1>
//     </div>
//   )
// }

// export default Child

//THIS IS FOR CONTEXT

import React, { useContext, useEffect } from 'react'
import newContext from './Context'
const Child = () => {
    const context = useContext(newContext)
   
  return (
    <div>
      <h1>This is lazy component</h1>
      
    </div>
  )
}

export default Child

