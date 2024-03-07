

// 1.Write a component that renders a button and a counter. Implement a function using useCallback that increments the counter state when the button is clicked. Ensure that the function is memoized and doesn't change on re-renders.


// import './App.css';
// import { useCallback, useState } from 'react';
// import Counter from './Counter';

// function App() {
//   const[count,setCount]=useState(0)
//   const counter=useCallback(()=>{
//     setCount(count+1)
//   },[])
//   return (
//     <div className="App">
//       <Counter count={count} counter={counter}/>
//     </div>
//   );
// }

// export default App;

//-------------------------------------------------------------------------------------------------------------------------------


//2.Create a component that takes two props a and b, representing two numbers. Use useMemo to calculate and memoize the result of multiplying a and b, and display the result in the component.



// import React from 'react'
// import { useState } from 'react'
// import Product from './Product'

// const App = () => {
//   const[valueA,setValueA]=useState()
//   const[valueB,setValueB]=useState()
//   return (
//     <div>
//       <label>ValueA</label><input type='text' value={valueA} onChange={e=>setValueA(e.target.value)}></input>
//       <label>ValueB</label><input type='text' value={valueB} onChange={e=>setValueB(e.target.value)}></input>
//       <Product a={valueA} b={valueB}/>


//     </div>
//   )
// }

// export default App


//3.Define a functional component that renders a list of items passed as a prop. Wrap the component with React.memo to optimize rendering and prevent unnecessary re-renders when the props don't change

//---------------------------------------------------------------------------------------------------------------------------

// import React, { useEffect } from 'react'
// import Reactmemo from './Ractmemo'
// import { useState } from 'react'


// const App = () => {
//   const[count1,setCount1]=useState(0)
//   const[count2,setCount2]=useState(0)
//   useEffect(()=>{
//   setCount2(count1+5)
// })
  
//   return (
//     <div>
//       <button onClick={()=>setCount1(count1+1)}>set count</button>
//       <Reactmemo value1={count2} value2={count1}/>
//     </div>
//   )
// }

// export default App


//4.Implement lazy loading for a component named LazyComponent. Import and render LazyComponent using React.lazy() and Suspense to show a fallback while the component is loading.


// import React from 'react'
// import { Suspense } from 'react'
// const Child=React.lazy(()=>{
//  import ('./Child')
// })
// function App() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading....</div>}>
//         <Child/>
//         </Suspense>
      
//     </div>
//   )
// }

// export default App

//------------------------------------------------------------------------------------------------------------------------------------

import React from 'react'
import Child from './Child'
const App = () => {
  return (
    <div>
      <Child/>
    </div>
  )
}

export default App

