import React from 'react'

const Ractmemo = (props) => {
   const sum=()=>{
    let a=props.value1
    let b=props.value2 
    return a+b
   }
   console.log('render');
  return (
    <div>
        <h3>Count:{props.value1}</h3>
        <h3>Count2:{props.value2}</h3>
        <h2>sum={sum()}</h2>  
    </div>
  )
}

export default React.memo(Ractmemo)
